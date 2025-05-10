
# Exemplos Práticos de Algoritmos em Pseudocódigo

A representação de algoritmos em pseudocódigo é uma das formas mais utilizadas para descrever, de maneira clara e independente de linguagem de programação, a lógica necessária para resolver um problema. O pseudocódigo utiliza uma linguagem próxima do português estruturado, facilitando o entendimento tanto para iniciantes quanto para programadores experientes.

Neste tópico, apresentaremos exemplos práticos de algoritmos em pseudocódigo, abordando situações comuns no início do aprendizado de lógica de programação. Os exemplos a seguir ilustram como estruturar soluções lógicas para diferentes tipos de problemas.

---

## 1. Algoritmo para Somar Dois Números

**Descrição:**  
Receber dois números do usuário, calcular a soma e exibir o resultado.

**Pseudocódigo:**
```
Início
    Escreva("Digite o primeiro número: ")
    Leia(numero1)
    Escreva("Digite o segundo número: ")
    Leia(numero2)
    soma <- numero1 + numero2
    Escreva("A soma é: ", soma)
Fim
```

---

## 2. Algoritmo para Verificar se um Número é Par ou Ímpar

**Descrição:**  
Ler um número inteiro e informar se ele é par ou ímpar.

**Pseudocódigo:**
```
Início
    Escreva("Digite um número inteiro: ")
    Leia(numero)
    Se (numero % 2 = 0) Então
        Escreva("O número é par.")
    Senão
        Escreva("O número é ímpar.")
    FimSe
Fim
```

---

## 3. Algoritmo para Calcular a Média de Três Notas

**Descrição:**  
Ler três notas, calcular a média e informar se o aluno foi aprovado (média >= 7).

**Pseudocódigo:**
```
Início
    Escreva("Digite a primeira nota: ")
    Leia(nota1)
    Escreva("Digite a segunda nota: ")
    Leia(nota2)
    Escreva("Digite a terceira nota: ")
    Leia(nota3)
    media <- (nota1 + nota2 + nota3) / 3
    Escreva("Média: ", media)
    Se (media >= 7) Então
        Escreva("Aluno aprovado.")
    Senão
        Escreva("Aluno reprovado.")
    FimSe
Fim
```

---

## 4. Algoritmo para Exibir os Números de 1 a 10

**Descrição:**  
Utilizar uma estrutura de repetição para exibir os números de 1 a 10.

**Pseudocódigo:**
```
Início
    Para i de 1 até 10 passo 1 faça
        Escreva(i)
    FimPara
Fim
```

---

## 5. Algoritmo para Calcular o Fatorial de um Número

**Descrição:**  
Ler um número inteiro e calcular seu fatorial.

**Pseudocódigo:**
```
Início
    Escreva("Digite um número inteiro: ")
    Leia(numero)
    fatorial <- 1
    Para i de 1 até numero passo 1 faça
        fatorial <- fatorial * i
    FimPara
    Escreva("O fatorial de ", numero, " é: ", fatorial)
Fim
```

---

## 6. Algoritmo para Encontrar o Maior de Dois Números

**Descrição:**  
Ler dois números e informar qual é o maior.

**Pseudocódigo:**
```
Início
    Escreva("Digite o primeiro número: ")
    Leia(a)
    Escreva("Digite o segundo número: ")
    Leia(b)
    Se (a > b) Então
        Escreva("O maior número é: ", a)
    Senão
        Escreva("O maior número é: ", b)
    FimSe
Fim
```

---

## Considerações Finais

Esses exemplos demonstram como o pseudocódigo pode ser utilizado para representar algoritmos de forma clara e estruturada, facilitando o entendimento da lógica antes da implementação em uma linguagem de programação específica. Praticar a escrita de algoritmos em pseudocódigo é fundamental para desenvolver o raciocínio lógico e a capacidade de resolver problemas computacionais de maneira eficiente.

Lembre-se: a clareza e a organização do pseudocódigo são essenciais para garantir que qualquer pessoa consiga compreender e implementar o algoritmo posteriormente.
```
