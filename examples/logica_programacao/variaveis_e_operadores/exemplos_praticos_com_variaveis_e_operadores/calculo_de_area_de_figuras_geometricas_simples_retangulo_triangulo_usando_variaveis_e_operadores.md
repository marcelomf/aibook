
# Cálculo de Área de Figuras Geométricas Simples com Variáveis e Operadores

O cálculo de áreas de figuras geométricas é um dos exemplos mais clássicos e didáticos para praticar o uso de variáveis e operadores em lógica de programação. Neste tópico, vamos aprender como calcular a área de um **retângulo** e de um **triângulo** utilizando variáveis para armazenar valores e operadores para realizar os cálculos.

## 1. Área do Retângulo

A área de um retângulo é calculada multiplicando-se a base pela altura:

\[
\text{Área} = \text{base} \times \text{altura}
\]

### Exemplo em Pseudocódigo

```pseudocode
Início
    Declare base, altura, area como real

    Escreva "Digite o valor da base do retângulo:"
    Leia base

    Escreva "Digite o valor da altura do retângulo:"
    Leia altura

    area <- base * altura

    Escreva "A área do retângulo é: ", area
Fim
```

### Explicação

- **Variáveis**: `base`, `altura` e `area` são usadas para armazenar os valores fornecidos pelo usuário e o resultado do cálculo.
- **Operador**: O operador de multiplicação (`*`) é utilizado para calcular a área.

---

## 2. Área do Triângulo

A área de um triângulo é calculada multiplicando-se a base pela altura e dividindo o resultado por dois:

\[
\text{Área} = \frac{\text{base} \times \text{altura}}{2}
\]

### Exemplo em Pseudocódigo

```pseudocode
Início
    Declare base, altura, area como real

    Escreva "Digite o valor da base do triângulo:"
    Leia base

    Escreva "Digite o valor da altura do triângulo:"
    Leia altura

    area <- (base * altura) / 2

    Escreva "A área do triângulo é: ", area
Fim
```

### Explicação

- **Variáveis**: Assim como no exemplo anterior, usamos `base`, `altura` e `area`.
- **Operadores**: Utilizamos multiplicação (`*`) e divisão (`/`) para calcular a área.

---

## 3. Exemplo Prático em Fluxograma

Abaixo, um fluxograma simplificado para o cálculo da área de um retângulo:

```
[Início]
   |
   v
[Leia base]
   |
   v
[Leia altura]
   |
   v
[area <- base * altura]
   |
   v
[Escreva area]
   |
   v
[Fim]
```

---

## 4. Exercício Proposto

Implemente um algoritmo que leia a base e a altura de um retângulo e de um triângulo, calcule e mostre as áreas de ambas as figuras.

---

## 5. Conclusão

O uso de variáveis e operadores para calcular áreas de figuras geométricas é uma excelente forma de praticar os conceitos fundamentais da lógica de programação. Compreender como armazenar valores e realizar operações matemáticas básicas é essencial para resolver problemas computacionais do dia a dia.

> **Dica:** Sempre utilize nomes de variáveis que representem claramente o que está sendo armazenado, facilitando a leitura e manutenção do código.

---
```