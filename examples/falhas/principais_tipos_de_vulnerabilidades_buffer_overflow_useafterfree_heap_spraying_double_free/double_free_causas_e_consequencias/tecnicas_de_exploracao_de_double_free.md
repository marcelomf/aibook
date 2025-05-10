```markdown
# Técnicas de Exploração de Double Free

O **double free** é uma vulnerabilidade de corrupção de memória que ocorre quando uma mesma região de memória é liberada (free) mais de uma vez. Essa falha pode ser explorada por atacantes para manipular a estrutura interna do heap, levando à execução de código arbitrário, elevação de privilégios ou negação de serviço. Neste tópico, abordaremos as principais técnicas de exploração de double free, considerando cenários clássicos e modernos, bem como as defesas implementadas nos principais sistemas operacionais.

---

## 1. Entendendo o Double Free

Antes de explorar as técnicas, é fundamental compreender o que acontece durante um double free. Em sistemas que utilizam o gerenciador de heap do `glibc` (ptmalloc), por exemplo, cada bloco de memória alocado possui metadados que controlam sua posição nas listas de blocos livres. Ao liberar um bloco duas vezes, o atacante pode corromper essas listas, influenciando futuras alocações.

Exemplo simplificado em C:
```c
char *ptr = malloc(64);
free(ptr);
free(ptr); // Double free!
```

---

## 2. Técnicas Clássicas de Exploração

### 2.1. Fastbin Duplication Attack

No `glibc`, blocos pequenos são gerenciados em listas chamadas **fastbins**. Ao realizar um double free em um bloco de fastbin, o ponteiro para esse bloco é inserido duas vezes na lista. Isso permite que o atacante controle futuras alocações, podendo fazer com que o `malloc` retorne um ponteiro para uma área de memória arbitrária.

**Passos básicos:**
1. Alocar dois blocos de tamanho compatível com fastbin.
2. Liberar ambos.
3. Realizar um double free em um dos blocos.
4. Manipular o ponteiro do bloco para apontar para uma área controlada pelo atacante.
5. Realizar novas alocações até que o ponteiro manipulado seja retornado.

**Exemplo de ataque:**
```c
char *a = malloc(64);
char *b = malloc(64);
free(a);
free(b);
free(a); // Double free em 'a'

// Manipular o ponteiro de 'a' para apontar para um endereço desejado
// Próximos mallocs retornarão ponteiros controlados
```

### 2.2. Unsorted Bin Attack

Em blocos maiores, o double free pode ser explorado para corromper os ponteiros de metadados dos **unsorted bins**, permitindo a escrita em endereços arbitrários durante operações de gerenciamento do heap.

---

## 3. Técnicas Modernas de Exploração

Com a evolução das proteções de heap (como tcache, Safe-Linking, e checks de integridade), as técnicas de exploração de double free também evoluíram.

### 3.1. Tcache Poisoning

A partir do `glibc 2.26`, foi introduzido o **tcache**, uma cache de blocos pequenos por thread. O double free pode ser explorado para inserir ponteiros arbitrários na lista tcache, permitindo que o atacante controle o valor retornado por futuras chamadas a `malloc`.

**Exemplo de ataque:**
1. Alocar e liberar um bloco de tcache.
2. Realizar um double free no mesmo bloco.
3. Modificar o ponteiro do bloco para um endereço desejado.
4. Realizar novas alocações para obter um ponteiro controlado.

### 3.2. Bypass de Proteções

- **Safe-Linking**: A partir do `glibc 2.32`, os ponteiros em tcache são ofuscados, dificultando ataques diretos. No entanto, ataques ainda são possíveis se o atacante puder prever ou manipular o valor do XOR usado na ofuscação.
- **Heap Hardening**: Sistemas modernos implementam verificações adicionais para detectar double free, mas falhas de implementação ou cenários específicos (como uso de múltiplas threads) podem permitir a exploração.

---

## 4. Exemplos Práticos

### Exemplo 1: Tcache Poisoning para Sobrescrever Ponteiro de Função

1. O atacante realiza um double free em um bloco de tcache.
2. Manipula o ponteiro do bloco para apontar para uma variável global (por exemplo, um ponteiro de função).
3. Realiza alocações até que o ponteiro de função seja sobrescrito com um valor controlado.
4. Quando o programa chama a função, o controle é transferido para o código do atacante.

### Exemplo 2: Fastbin Duplication para Arbitrary Write

1. Double free em bloco de fastbin.
2. Manipulação dos ponteiros para que o próximo malloc retorne um endereço arbitrário.
3. Escrita de dados controlados nesse endereço.

---

## 5. Mitigações e Defesas

- **Verificações de integridade**: Modernos gerenciadores de heap implementam checagens para detectar double free.
- **Randomização de heap (ASLR)**: Dificulta a previsão de endereços.
- **Safe-Linking**: Ofusca ponteiros em listas de blocos livres.
- **Ferramentas de análise**: AddressSanitizer, Valgrind e outras podem detectar double free durante o desenvolvimento.

---

## 6. Considerações Finais

Apesar das defesas modernas, o double free continua sendo uma vulnerabilidade relevante, especialmente em sistemas legados ou em cenários onde as proteções podem ser contornadas. O conhecimento das técnicas de exploração é fundamental para o desenvolvimento de softwares seguros e para a implementação de defesas eficazes.

---

**Referências:**
- [glibc Heap Exploitation](https://azeria-labs.com/heap-exploitation-part-1-introduction/)
- [Tcache Poisoning in glibc](https://dhavalkapil.com/blogs/Heap-Exploitation-Part-5/)
- [Double Free Vulnerabilities and Exploitation](https://owasp.org/www-community/vulnerabilities/Double_Free)
```
