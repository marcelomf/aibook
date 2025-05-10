# Exercícios Resolvidos de Conversão de Unidades

A conversão de unidades é um tema recorrente em lógica de programação, pois envolve o uso de variáveis, operadores aritméticos e estruturas básicas de entrada e saída de dados. Exercícios desse tipo ajudam a fixar conceitos fundamentais e a desenvolver o raciocínio lógico necessário para resolver problemas do cotidiano com algoritmos.

Neste tópico, apresentamos exercícios resolvidos de conversão de unidades, como temperatura e moedas, utilizando pseudocódigo e fluxogramas para facilitar o entendimento.

---

## 1. Conversão de Temperatura: Celsius para Fahrenheit

### Enunciado

Crie um algoritmo que leia uma temperatura em graus Celsius e a converta para Fahrenheit. A fórmula de conversão é:

```
F = (C × 9/5) + 32
```

### Pseudocódigo

```plaintext
Início
    Leia C
    F ← (C × 9/5) + 32
    Escreva "Temperatura em Fahrenheit: ", F
Fim
```

### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia C]
    B --> C[Calcule F = (C × 9/5) + 32]
    C --> D[Escreva F]
    D --> E[Fim]
```

### Exemplo Prático

- Entrada: C = 25
- Cálculo: F = (25 × 9/5) + 32 = 45 + 32 = 77
- Saída: Temperatura em Fahrenheit: 77

---

## 2. Conversão de Temperatura: Fahrenheit para Celsius

### Enunciado

Crie um algoritmo que leia uma temperatura em Fahrenheit e a converta para Celsius. A fórmula de conversão é:

```
C = (F - 32) × 5/9
```

### Pseudocódigo

```plaintext
Início
    Leia F
    C ← (F - 32) × 5/9
    Escreva "Temperatura em Celsius: ", C
Fim
```

### Exemplo Prático

- Entrada: F = 68
- Cálculo: C = (68 - 32) × 5/9 = 36 × 5/9 = 20
- Saída: Temperatura em Celsius: 20

---

## 3. Conversão de Moedas: Real para Dólar

### Enunciado

Crie um algoritmo que leia um valor em reais (BRL) e a cotação do dólar, e converta o valor para dólares (USD).

### Pseudocódigo

```plaintext
Início
    Leia valor_em_reais
    Leia cotacao_dolar
    valor_em_dolares ← valor_em_reais / cotacao_dolar
    Escreva "Valor em dólares: ", valor_em_dolares
Fim
```

### Exemplo Prático

- Entrada: valor_em_reais = 500, cotacao_dolar = 5.00
- Cálculo: valor_em_dolares = 500 / 5.00 = 100
- Saída: Valor em dólares: 100

---

## 4. Conversão de Moedas: Dólar para Real

### Enunciado

Crie um algoritmo que leia um valor em dólares (USD) e a cotação do dólar, e converta o valor para reais (BRL).

### Pseudocódigo

```plaintext
Início
    Leia valor_em_dolares
    Leia cotacao_dolar
    valor_em_reais ← valor_em_dolares × cotacao_dolar
    Escreva "Valor em reais: ", valor_em_reais
Fim
```

### Exemplo Prático

- Entrada: valor_em_dolares = 200, cotacao_dolar = 5.00
- Cálculo: valor_em_reais = 200 × 5.00 = 1000
- Saída: Valor em reais: 1000

---

## 5. Conversão de Unidades de Comprimento: Metros para Centímetros

### Enunciado

Crie um algoritmo que leia um valor em metros e o converta para centímetros.

### Pseudocódigo

```plaintext
Início
    Leia metros
    centimetros ← metros × 100
    Escreva "Valor em centímetros: ", centimetros
Fim
```

### Exemplo Prático

- Entrada: metros = 2.5
- Cálculo: centimetros = 2.5 × 100 = 250
- Saída: Valor em centímetros: 250

---

## Dicas e Boas Práticas

- **Valide as entradas**: Certifique-se de que os valores informados são válidos (por exemplo, não permitir valores negativos para temperaturas absolutas ou cotação de moedas).
- **Utilize variáveis com nomes claros**: Isso facilita a leitura e manutenção do código.
- **Comente o código**: Explique as fórmulas e os passos principais, especialmente em algoritmos mais complexos.

---

## Conclusão

Exercícios de conversão de unidades são fundamentais para praticar operações matemáticas, manipulação de variáveis e lógica sequencial. Com a prática, você estará mais preparado para resolver problemas do dia a dia e avançar para desafios mais complexos na programação.

---

**Pratique!** Tente criar variações desses exercícios, como converter quilômetros para milhas, horas para minutos, ou até mesmo criar um conversor universal de unidades. Isso ajudará a consolidar seu aprendizado em lógica de programação.