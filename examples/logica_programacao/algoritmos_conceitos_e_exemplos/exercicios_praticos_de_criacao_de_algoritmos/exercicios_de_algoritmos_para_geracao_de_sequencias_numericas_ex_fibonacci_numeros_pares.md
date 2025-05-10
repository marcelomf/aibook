
# Exercícios de Algoritmos para Geração de Sequências Numéricas

A criação de algoritmos para gerar sequências numéricas é uma excelente forma de praticar lógica de programação. Esse tipo de exercício ajuda a desenvolver o raciocínio lógico, o entendimento de estruturas de repetição e a manipulação de variáveis. A seguir, apresentamos conceitos, exemplos e exercícios práticos envolvendo sequências como Fibonacci e números pares.

---

## 1. Sequência de Fibonacci

A sequência de Fibonacci é uma das mais conhecidas na matemática e na programação. Ela começa com 0 e 1, e cada termo seguinte é a soma dos dois anteriores:

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

### Exemplo de Algoritmo em Pseudocódigo

```plaintext
Início
    Definir n como inteiro
    Definir a, b, próximo como inteiro
    Ler n
    a <- 0
    b <- 1
    Escrever a
    Escrever b
    Para i de 3 até n faça
        próximo <- a + b
        Escrever próximo
        a <- b
        b <- próximo
    FimPara
Fim
```

### Exercício Proposto

**Enunciado:**  
Crie um algoritmo que leia um número inteiro `n` e exiba os `n` primeiros termos da sequência de Fibonacci.

---

## 2. Sequência de Números Pares

Números pares são aqueles divisíveis por 2. Gerar uma sequência de números pares é um exercício simples, mas importante para fixar o uso de laços de repetição.

### Exemplo de Algoritmo em Pseudocódigo

```plaintext
Início
    Definir n como inteiro
    Ler n
    Para i de 1 até n faça
        Escrever 2 * i
    FimPara
Fim
```

### Exercício Proposto

**Enunciado:**  
Crie um algoritmo que leia um número inteiro `n` e exiba os `n` primeiros números pares.

---

## 3. Sequência de Números Ímpares

Números ímpares são aqueles que não são divisíveis por 2. A lógica é semelhante à dos números pares.

### Exemplo de Algoritmo em Pseudocódigo

```plaintext
Início
    Definir n como inteiro
    Ler n
    Para i de 1 até n faça
        Escrever 2 * i - 1
    FimPara
Fim
```

### Exercício Proposto

**Enunciado:**  
Crie um algoritmo que leia um número inteiro `n` e exiba os `n` primeiros números ímpares.

---

## 4. Sequência de Números Quadrados

Os quadrados perfeitos são números resultantes da multiplicação de um número inteiro por ele mesmo.

### Exemplo de Algoritmo em Pseudocódigo

```plaintext
Início
    Definir n como inteiro
    Ler n
    Para i de 1 até n faça
        Escrever i * i
    FimPara
Fim
```

### Exercício Proposto

**Enunciado:**  
Crie um algoritmo que leia um número inteiro `n` e exiba os quadrados dos `n` primeiros números naturais.

---

## Dicas para Resolver os Exercícios

- **Compreenda o padrão da sequência** antes de começar a programar.
- **Utilize variáveis auxiliares** quando necessário, especialmente em sequências como Fibonacci.
- **Teste seu algoritmo** com diferentes valores de entrada para garantir que ele funciona corretamente.
- **Comente seu código** para facilitar o entendimento e a manutenção.

---

## Conclusão

A prática com algoritmos de geração de sequências numéricas é fundamental para consolidar os conceitos de lógica de programação. Ao resolver esses exercícios, você estará mais preparado para desafios mais complexos e para a transição para linguagens de programação reais.

Continue praticando e explore outras sequências, como números primos, fatoriais e progressões aritméticas!
```
