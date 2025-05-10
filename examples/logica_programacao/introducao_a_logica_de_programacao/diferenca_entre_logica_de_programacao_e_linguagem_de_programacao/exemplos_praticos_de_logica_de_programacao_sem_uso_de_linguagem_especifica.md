
# Exemplos Práticos de Lógica de Programação sem Uso de Linguagem Específica

A lógica de programação é a base para a criação de qualquer software, independentemente da linguagem utilizada. Antes de aprender a sintaxe de uma linguagem específica, é fundamental compreender como estruturar o raciocínio para resolver problemas de forma lógica e sequencial. Para isso, utilizamos ferramentas como **pseudocódigo** e **fluxogramas**, que permitem descrever algoritmos de maneira clara e independente de qualquer linguagem de programação.

Neste tópico, apresentaremos exemplos práticos de lógica de programação utilizando apenas pseudocódigo e fluxogramas, facilitando o entendimento dos conceitos fundamentais.

---

## 1. Exemplo: Algoritmo para Somar Dois Números

### Pseudocódigo

```
Início
    Leia número1
    Leia número2
    soma ← número1 + número2
    Escreva "O resultado da soma é: ", soma
Fim
```

### Fluxograma

```plaintext
[Início]
   |
   v
[Leia número1]
   |
   v
[Leia número2]
   |
   v
[soma ← número1 + número2]
   |
   v
[Escreva "O resultado da soma é: ", soma]
   |
   v
[Fim]
```

---

## 2. Exemplo: Algoritmo para Verificar se um Número é Par ou Ímpar

### Pseudocódigo

```
Início
    Leia número
    Se (número % 2 = 0) então
        Escreva "O número é par"
    Senão
        Escreva "O número é ímpar"
Fim
```

### Fluxograma

```plaintext
[Início]
   |
   v
[Leia número]
   |
   v
[número % 2 = 0?]
  /     \
Sim     Não
/         \
v           v
[Escreva   [Escreva
"par"]     "ímpar"]
  \         /
   v       v
    [Fim]
```

---

## 3. Exemplo: Algoritmo para Calcular a Média de Três Notas

### Pseudocódigo

```
Início
    Leia nota1
    Leia nota2
    Leia nota3
    média ← (nota1 + nota2 + nota3) / 3
    Escreva "A média é: ", média
Fim
```

### Fluxograma

```plaintext
[Início]
   |
   v
[Leia nota1]
   |
   v
[Leia nota2]
   |
   v
[Leia nota3]
   |
   v
[média ← (nota1 + nota2 + nota3) / 3]
   |
   v
[Escreva "A média é: ", média]
   |
   v
[Fim]
```

---

## 4. Exemplo: Algoritmo para Contar de 1 até 5

### Pseudocódigo

```
Início
    Para i de 1 até 5 faça
        Escreva i
    FimPara
Fim
```

### Fluxograma

```plaintext
[Início]
   |
   v
[i ← 1]
   |
   v
[i ≤ 5?]
  /     \
Sim     Não
/         \
v           v
[Escreva i] [Fim]
   |
   v
[i ← i + 1]
   |
   v
[Volta para i ≤ 5?]
```

---

## 5. Exemplo: Algoritmo para Encontrar o Maior de Dois Números

### Pseudocódigo

```
Início
    Leia a
    Leia b
    Se (a > b) então
        Escreva "O maior número é: ", a
    Senão
        Escreva "O maior número é: ", b
Fim
```

### Fluxograma

```plaintext
[Início]
   |
   v
[Leia a]
   |
   v
[Leia b]
   |
   v
[a > b?]
  /     \
Sim     Não
/         \
v           v
[Escreva   [Escreva
a]         b]
  \         /
   v       v
    [Fim]
```

---

## Conclusão

Esses exemplos demonstram como a lógica de programação pode ser aplicada sem a necessidade de conhecer uma linguagem específica. O uso de pseudocódigo e fluxogramas permite que o foco esteja na resolução do problema, desenvolvendo o raciocínio lógico e a capacidade de estruturar algoritmos. Com essa base sólida, a transição para qualquer linguagem de programação torna-se muito mais simples e eficiente.
```
