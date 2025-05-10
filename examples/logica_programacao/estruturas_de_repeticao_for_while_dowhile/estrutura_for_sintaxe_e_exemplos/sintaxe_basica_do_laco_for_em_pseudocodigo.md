
## Estrutura for: Sintaxe Básica do Laço for em Pseudocódigo

A estrutura de repetição **for** é amplamente utilizada na programação para executar um bloco de comandos um número determinado de vezes. Em lógica de programação, especialmente no pseudocódigo, o laço **for** é fundamental para percorrer sequências, listas ou realizar tarefas repetitivas de forma controlada e eficiente.

### Sintaxe Básica do for em Pseudocódigo

A sintaxe do laço **for** em pseudocódigo é simples e intuitiva. Geralmente, ela segue o seguinte formato:

```
PARA variável DE valor_inicial ATÉ valor_final PASSO incremento FAÇA
    // comandos a serem executados
FIMPARA
```

- **variável**: é a variável de controle do laço, normalmente chamada de contador.
- **valor_inicial**: valor inicial da variável de controle.
- **valor_final**: valor final até onde o laço irá executar.
- **incremento**: valor pelo qual a variável de controle será incrementada a cada iteração (por padrão, é 1, mas pode ser outro valor).

### Exemplo 1: Contando de 1 até 5

```
// Exemplo: Imprimir os números de 1 a 5

PARA i DE 1 ATÉ 5 PASSO 1 FAÇA
    ESCREVA(i)
FIMPARA
```

**Saída:**
```
1
2
3
4
5
```

### Exemplo 2: Contando de 10 até 1 (decrescente)

```
// Exemplo: Imprimir os números de 10 a 1

PARA i DE 10 ATÉ 1 PASSO -1 FAÇA
    ESCREVA(i)
FIMPARA
```

**Saída:**
```
10
9
8
7
6
5
4
3
2
1
```

### Exemplo 3: Pulando de 2 em 2

```
// Exemplo: Imprimir os números pares de 2 a 10

PARA i DE 2 ATÉ 10 PASSO 2 FAÇA
    ESCREVA(i)
FIMPARA
```

**Saída:**
```
2
4
6
8
10
```

### Observações Importantes

- O laço **for** é ideal quando se sabe exatamente quantas vezes o bloco de comandos deve ser executado.
- O **PASSO** pode ser omitido quando o incremento for 1, dependendo da notação do pseudocódigo adotada.
- O bloco de comandos dentro do laço pode conter qualquer instrução válida, inclusive outros laços (aninhamento).

### Vantagens do for em Pseudocódigo

- **Clareza**: Deixa explícito o início, fim e incremento do laço.
- **Organização**: Facilita a leitura e manutenção do algoritmo.
- **Controle**: Permite manipular facilmente o fluxo de repetição.

---

A compreensão da sintaxe básica do laço **for** em pseudocódigo é essencial para a construção de algoritmos eficientes e para o desenvolvimento do raciocínio lógico necessário na programação. Com a prática, o uso dessa estrutura se tornará natural e facilitará a transição para qualquer linguagem de programação.
```
