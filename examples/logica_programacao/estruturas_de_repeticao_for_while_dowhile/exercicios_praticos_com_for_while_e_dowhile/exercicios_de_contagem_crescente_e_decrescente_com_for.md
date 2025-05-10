# Exercícios de Contagem Crescente e Decrescente com `for`

As estruturas de repetição são fundamentais na lógica de programação, permitindo a execução de um bloco de código várias vezes de forma controlada. Entre essas estruturas, o laço `for` é amplamente utilizado quando sabemos exatamente o número de repetições desejadas, sendo ideal para exercícios de contagem crescente e decrescente.

## O que é o laço `for`?

O laço `for` é uma estrutura de repetição que permite executar um bloco de código um número determinado de vezes. Sua sintaxe básica em pseudocódigo é:

```pseudocode
para (inicialização; condição; incremento) faça
    // bloco de comandos
fim-para
```

- **Inicialização:** Define o valor inicial da variável de controle.
- **Condição:** Enquanto for verdadeira, o laço continua executando.
- **Incremento:** Atualiza a variável de controle a cada iteração.

## Contagem Crescente com `for`

A contagem crescente é utilizada quando queremos que a variável de controle aumente a cada repetição, geralmente de 1 em 1.

### Exemplo 1: Contar de 1 até 10

```pseudocode
para (i = 1; i <= 10; i = i + 1) faça
    escreva(i)
fim-para
```

**Saída esperada:**
```
1
2
3
4
5
6
7
8
9
10
```

### Exercício Prático 1

**Enunciado:** Escreva um algoritmo que exiba todos os números pares de 2 até 20.

**Solução:**
```pseudocode
para (i = 2; i <= 20; i = i + 2) faça
    escreva(i)
fim-para
```

**Saída esperada:**
```
2
4
6
8
10
12
14
16
18
20
```

## Contagem Decrescente com `for`

A contagem decrescente é utilizada quando queremos que a variável de controle diminua a cada repetição.

### Exemplo 2: Contar de 10 até 1

```pseudocode
para (i = 10; i >= 1; i = i - 1) faça
    escreva(i)
fim-para
```

**Saída esperada:**
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

### Exercício Prático 2

**Enunciado:** Escreva um algoritmo que exiba todos os múltiplos de 5 de 50 até 5, em ordem decrescente.

**Solução:**
```pseudocode
para (i = 50; i >= 5; i = i - 5) faça
    escreva(i)
fim-para
```

**Saída esperada:**
```
50
45
40
35
30
25
20
15
10
5
```

## Dicas e Boas Práticas

- **Escolha adequada dos valores inicial, final e do incremento/decremento**: Isso evita laços infinitos ou saídas inesperadas.
- **Clareza no código**: Use nomes de variáveis significativos e comentários para facilitar o entendimento.
- **Testes**: Sempre execute e teste seus algoritmos com diferentes valores para garantir que funcionam corretamente.

## Conclusão

Os exercícios de contagem crescente e decrescente com o laço `for` são essenciais para fixar o entendimento sobre estruturas de repetição. Eles ajudam a desenvolver o raciocínio lógico e a habilidade de controlar o fluxo de execução dos algoritmos, competências fundamentais para qualquer programador iniciante.

Pratique criando variações desses exercícios, como contagens com diferentes incrementos, contagens condicionais (apenas números ímpares, múltiplos de um valor, etc.) e observe como pequenas mudanças na estrutura do `for` alteram o comportamento do programa.