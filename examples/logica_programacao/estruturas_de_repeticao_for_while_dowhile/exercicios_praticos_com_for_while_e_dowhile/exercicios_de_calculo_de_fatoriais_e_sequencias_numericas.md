# Exercícios de Cálculo de Fatoriais e Sequências Numéricas

As estruturas de repetição são fundamentais para resolver problemas que envolvem cálculos repetitivos, como o cálculo de fatoriais e a geração de sequências numéricas. Neste tópico, você encontrará explicações e exercícios práticos utilizando os comandos `for`, `while` e `do-while`, essenciais para consolidar o entendimento desses conceitos.

---

## O que é Fatorial?

O **fatorial** de um número inteiro positivo _n_ (representado por _n!_) é o produto de todos os inteiros positivos menores ou iguais a _n_. Por definição:

- 0! = 1
- n! = n × (n-1) × (n-2) × ... × 1, para n > 0

Exemplo:  
5! = 5 × 4 × 3 × 2 × 1 = 120

---

## Exercício 1: Cálculo do Fatorial com `for`

**Enunciado:**  
Escreva um algoritmo que leia um número inteiro positivo e calcule o seu fatorial utilizando a estrutura de repetição `for`.

**Pseudocódigo:**
```plaintext
Leia n
fatorial ← 1
Para i de 1 até n faça
    fatorial ← fatorial × i
FimPara
Escreva "O fatorial de", n, "é", fatorial
```

**Fluxograma:**

```plaintext
[Início] → [Leia n] → [fatorial ← 1] → [i ← 1]
      ↓
[ i ≤ n ? ] --Não--> [Escreva fatorial] → [Fim]
      |
     Sim
      ↓
[fatorial ← fatorial × i]
[i ← i + 1]
      ↑
      |
[Volta para condição]
```

---

## Exercício 2: Cálculo do Fatorial com `while`

**Enunciado:**  
Reescreva o exercício anterior utilizando a estrutura `while`.

**Pseudocódigo:**
```plaintext
Leia n
fatorial ← 1
i ← 1
Enquanto i ≤ n faça
    fatorial ← fatorial × i
    i ← i + 1
FimEnquanto
Escreva "O fatorial de", n, "é", fatorial
```

---

## Exercício 3: Cálculo do Fatorial com `do-while`

**Enunciado:**  
Implemente o cálculo do fatorial usando a estrutura `do-while`.

**Pseudocódigo:**
```plaintext
Leia n
fatorial ← 1
i ← 1
Faça
    fatorial ← fatorial × i
    i ← i + 1
Enquanto i ≤ n
Escreva "O fatorial de", n, "é", fatorial
```

---

## Exercício 4: Sequência Numérica Simples

**Enunciado:**  
Escreva um algoritmo que exiba todos os números de 1 até N, onde N é informado pelo usuário.

**Pseudocódigo:**
```plaintext
Leia N
Para i de 1 até N faça
    Escreva i
FimPara
```

---

## Exercício 5: Sequência de Números Pares

**Enunciado:**  
Mostre todos os números pares de 1 até N.

**Pseudocódigo:**
```plaintext
Leia N
Para i de 1 até N faça
    Se i % 2 = 0 então
        Escreva i
    FimSe
FimPara
```

---

## Exercício 6: Sequência de Fibonacci

A **Sequência de Fibonacci** é formada por números em que cada termo é a soma dos dois anteriores, começando por 0 e 1.

Exemplo: 0, 1, 1, 2, 3, 5, 8, 13, ...

**Enunciado:**  
Escreva um algoritmo que mostre os N primeiros termos da sequência de Fibonacci.

**Pseudocódigo:**
```plaintext
Leia N
a ← 0
b ← 1
Para i de 1 até N faça
    Escreva a
    temp ← a + b
    a ← b
    b ← temp
FimPara
```

---

## Dicas e Boas Práticas

- Sempre inicialize as variáveis antes de usá-las em laços.
- Verifique as condições de parada para evitar laços infinitos.
- Teste seus algoritmos com diferentes valores de entrada, incluindo casos extremos (ex: 0 ou 1).

---

## Exercícios Propostos

1. Modifique o exercício do fatorial para calcular o fatorial de vários números, até que o usuário digite um valor negativo.
2. Crie um algoritmo que exiba todos os múltiplos de 3 entre 1 e N.
3. Implemente a soma dos N primeiros números naturais utilizando um laço de repetição.

---

## Conclusão

A prática com exercícios de cálculo de fatoriais e sequências numéricas é essencial para fixar o uso das estruturas de repetição. Compreender como implementar esses algoritmos em pseudocódigo e fluxogramas prepara você para resolver problemas mais complexos em qualquer linguagem de programação. Continue praticando e explorando variações desses exercícios para aprimorar sua lógica de programação!