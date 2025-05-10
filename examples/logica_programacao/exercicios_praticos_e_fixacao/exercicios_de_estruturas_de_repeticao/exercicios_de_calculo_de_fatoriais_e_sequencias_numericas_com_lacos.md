
# Exercícios de Cálculo de Fatoriais e Sequências Numéricas com Laços

As estruturas de repetição, também conhecidas como laços, são fundamentais na lógica de programação para executar um conjunto de instruções várias vezes, de acordo com uma condição. Entre os exercícios mais comuns para praticar laços estão o cálculo de fatoriais e a geração de sequências numéricas. Esses exercícios ajudam a fixar conceitos como inicialização de variáveis, controle de fluxo e incremento de valores.

## 1. Cálculo de Fatoriais

O fatorial de um número inteiro positivo *n* (representado por *n!*) é o produto de todos os inteiros positivos menores ou iguais a *n*. Por exemplo, 5! = 5 × 4 × 3 × 2 × 1 = 120.

### Exemplo de Algoritmo para Cálculo de Fatorial

#### Pseudocódigo

```plaintext
Início
    Leia n
    fatorial ← 1
    Para i de 1 até n faça
        fatorial ← fatorial × i
    FimPara
    Escreva "O fatorial de", n, "é", fatorial
Fim
```

#### Fluxograma

```plaintext
[Início] → [Leia n] → [fatorial ← 1] → [i ← 1]
      ↓
[Enquanto i ≤ n]
      ↓
[fatorial ← fatorial × i]
      ↓
[i ← i + 1]
      ↓
[Se i ≤ n, volta ao laço]
      ↓
[Escreva resultado]
      ↓
[Fim]
```

### Exercício Proposto

- **Enunciado:** Escreva um algoritmo que leia um número inteiro positivo e calcule o seu fatorial utilizando uma estrutura de repetição.

- **Dica:** Utilize um laço `for` ou `while` para multiplicar os valores de 1 até o número informado.

---

## 2. Sequências Numéricas

Gerar sequências numéricas é uma ótima forma de praticar laços. Sequências comuns incluem números pares, ímpares, múltiplos de um número, ou até mesmo sequências como a de Fibonacci.

### Exemplo 1: Números Pares de 1 a 20

#### Pseudocódigo

```plaintext
Início
    Para i de 2 até 20 passo 2 faça
        Escreva i
    FimPara
Fim
```

### Exemplo 2: Sequência de Fibonacci

A sequência de Fibonacci começa com 0 e 1, e cada número seguinte é a soma dos dois anteriores.

#### Pseudocódigo

```plaintext
Início
    Leia n
    a ← 0
    b ← 1
    Escreva a
    Escreva b
    Para i de 3 até n faça
        c ← a + b
        Escreva c
        a ← b
        b ← c
    FimPara
Fim
```

### Exercícios Propostos

1. **Números Ímpares:** Escreva um algoritmo que exiba todos os números ímpares de 1 a 50.
2. **Múltiplos de 5:** Crie um algoritmo que mostre todos os múltiplos de 5 entre 1 e 100.
3. **Fibonacci:** Solicite ao usuário um número *n* e exiba os *n* primeiros termos da sequência de Fibonacci.

---

## 3. Boas Práticas

- **Inicialize as variáveis** antes de usá-las nos laços.
- **Defina claramente a condição de parada** do laço para evitar loops infinitos.
- **Comente o código** para facilitar o entendimento.
- **Teste com diferentes valores** para garantir que o algoritmo funciona em todos os casos.

---

## 4. Exercícios para Fixação

1. **Fatorial com While:** Reescreva o cálculo do fatorial utilizando um laço `while` ao invés de `for`.
2. **Soma de Números:** Escreva um algoritmo que some todos os números de 1 até um valor informado pelo usuário.
3. **Sequência Decrescente:** Mostre uma sequência de números de 10 até 1 utilizando um laço.

---

## 5. Conclusão

Exercícios de cálculo de fatoriais e sequências numéricas são essenciais para consolidar o entendimento sobre estruturas de repetição. Praticar esses algoritmos desenvolve o raciocínio lógico e prepara o estudante para desafios mais complexos na programação.

> **Dica:** Sempre tente resolver os exercícios primeiro em pseudocódigo ou fluxograma antes de implementar em uma linguagem de programação. Isso ajuda a estruturar o pensamento lógico e facilita a transição para o código real.
```
