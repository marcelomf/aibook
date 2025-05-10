```markdown
# Stack Overflow vs Heap Overflow: Diferenças e Casos Práticos

A exploração de falhas de corrupção de memória é um dos temas centrais na segurança de softwares, sendo responsável por uma grande quantidade de vulnerabilidades críticas ao longo das últimas décadas. Entre os tipos mais comuns de corrupção de memória estão o **stack overflow** e o **heap overflow**. Embora ambos envolvam a escrita além dos limites de uma região de memória alocada, eles diferem em sua localização, impacto e técnicas de exploração. Compreender essas diferenças é fundamental para identificar, explorar e mitigar tais falhas.

---

## O que é Stack Overflow?

O **stack overflow** ocorre quando um programa grava dados além do limite de um buffer alocado na pilha (stack). A pilha é uma região de memória usada para armazenar variáveis locais, endereços de retorno de funções e outros dados temporários. Quando um buffer (por exemplo, um array de caracteres) é declarado na pilha e o programa escreve além do seu tamanho, pode sobrescrever dados críticos, como o endereço de retorno de uma função.

### Exemplo Prático de Stack Overflow

```c
void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input); // Não verifica o tamanho da entrada!
}
```

Se `input` tiver mais de 64 bytes, o conteúdo extra sobrescreverá áreas adjacentes da pilha, incluindo o endereço de retorno. Um atacante pode explorar isso para redirecionar o fluxo de execução do programa, por exemplo, para código malicioso injetado na pilha.

#### Consequências

- Execução de código arbitrário (execução de shellcode)
- Elevação de privilégios
- Comprometimento total do sistema

---

## O que é Heap Overflow?

O **heap overflow** ocorre quando um programa grava além dos limites de um buffer alocado dinamicamente no heap. O heap é uma região de memória usada para alocação dinâmica (por exemplo, via `malloc` em C). Ao contrário da pilha, o heap é usado para armazenar dados que precisam persistir por mais tempo ou que têm tamanho variável.

### Exemplo Prático de Heap Overflow

```c
void vulnerable_function(char *input) {
    char *buffer = malloc(64);
    strcpy(buffer, input); // Não verifica o tamanho da entrada!
    // ...
    free(buffer);
}
```

Se `input` tiver mais de 64 bytes, o excesso de dados pode sobrescrever estruturas de controle do heap ou outros dados alocados dinamicamente. Isso pode permitir que um atacante manipule o funcionamento do gerenciador de memória, levando à execução de código arbitrário ou à corrupção de dados.

#### Consequências

- Corrupção de estruturas internas do heap (como metadados de alocação)
- Execução de código arbitrário
- Vazamento de informações sensíveis

---

## Diferenças Fundamentais

| Característica         | Stack Overflow                        | Heap Overflow                          |
|-----------------------|---------------------------------------|----------------------------------------|
| **Localização**       | Pilha (stack)                         | Heap                                   |
| **Alocação**          | Estática (em tempo de compilação)     | Dinâmica (em tempo de execução)        |
| **Dados afetados**    | Variáveis locais, endereços de retorno| Dados dinâmicos, metadados do heap     |
| **Exploração típica** | Sobrescrita de endereço de retorno    | Manipulação de estruturas do heap      |
| **Mitigações**        | Stack canaries, ASLR, DEP             | Heap hardening, ASLR, DEP              |

---

## Casos Práticos e Exploração

### Stack Overflow: Caso Clássico

O ataque de stack overflow mais famoso é o **"Smashing the Stack"**, onde o atacante sobrescreve o endereço de retorno de uma função para desviar o fluxo de execução. Ferramentas modernas e técnicas como **stack canaries** e **ASLR** dificultam esse tipo de ataque, mas vulnerabilidades ainda são encontradas, especialmente em sistemas legados ou mal configurados.

### Heap Overflow: Exploração Moderna

Ataques de heap overflow geralmente visam corromper metadados do gerenciador de memória, como as estruturas usadas pelo `malloc` e `free`. Um exemplo clássico é o **"unlink attack"**, onde o atacante manipula ponteiros internos do heap para sobrescrever endereços arbitrários. Com a evolução dos sistemas operacionais, técnicas de proteção como **heap hardening** e **safe unlinking** foram implementadas, mas novas técnicas de exploração continuam surgindo.

---

## Considerações Finais

Tanto o stack overflow quanto o heap overflow representam riscos sérios à segurança de softwares. A principal diferença está na região de memória afetada e nas técnicas de exploração. O conhecimento detalhado dessas vulnerabilidades é essencial para o desenvolvimento de aplicações seguras e para a implementação de defesas eficazes.

**Recomendações:**
- Sempre valide o tamanho das entradas do usuário.
- Utilize funções seguras para manipulação de strings e buffers.
- Mantenha o compilador e as bibliotecas atualizados para aproveitar as proteções modernas.
- Realize auditorias de código e testes de segurança regularmente.

---

> **Referências:**
> - Aleph One, "Smashing The Stack For Fun And Profit", Phrack Magazine, 1996.
> - The Art of Exploitation, Jon Erickson, No Starch Press.
> - OWASP: Buffer Overflow
> - Microsoft Docs: Mitigating Buffer Overflows

```
