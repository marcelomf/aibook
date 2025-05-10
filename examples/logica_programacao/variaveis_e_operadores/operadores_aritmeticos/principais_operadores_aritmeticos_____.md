# Operadores Aritméticos

Os operadores aritméticos são fundamentais na lógica de programação, pois permitem realizar operações matemáticas básicas entre valores e variáveis. Eles são amplamente utilizados em cálculos, manipulação de dados e resolução de problemas computacionais. Conhecer e saber utilizar esses operadores é essencial para qualquer pessoa que está começando a programar.

## Principais Operadores Aritméticos

A seguir, apresentamos os principais operadores aritméticos utilizados na maioria das linguagens de programação:

| Operador | Nome                | Exemplo         | Resultado         |
|----------|---------------------|-----------------|-------------------|
| `+`      | Adição              | `5 + 3`         | `8`               |
| `-`      | Subtração           | `10 - 4`        | `6`               |
| `*`      | Multiplicação       | `7 * 2`         | `14`              |
| `/`      | Divisão             | `8 / 2`         | `4`               |
| `%`      | Módulo (Resto)      | `9 % 4`         | `1`               |

### 1. Adição (`+`)

O operador de adição soma dois valores. Pode ser usado tanto com números inteiros quanto com números decimais.

**Exemplo:**
```pseudo
resultado <- 5 + 3
// resultado agora vale 8
```

### 2. Subtração (`-`)

O operador de subtração diminui o segundo valor do primeiro.

**Exemplo:**
```pseudo
resultado <- 10 - 4
// resultado agora vale 6
```

### 3. Multiplicação (`*`)

O operador de multiplicação multiplica dois valores.

**Exemplo:**
```pseudo
resultado <- 7 * 2
// resultado agora vale 14
```

### 4. Divisão (`/`)

O operador de divisão divide o primeiro valor pelo segundo. É importante lembrar que, em algumas linguagens, a divisão entre inteiros pode resultar em um valor inteiro (divisão inteira) ou decimal (divisão real).

**Exemplo:**
```pseudo
resultado <- 8 / 2
// resultado agora vale 4
```

> **Atenção:** Dividir por zero não é permitido e causará erro na maioria das linguagens de programação.

### 5. Módulo (`%`)

O operador de módulo retorna o resto da divisão entre dois valores. É muito útil para verificar se um número é par ou ímpar, ou para operações que envolvem ciclos e repetições.

**Exemplo:**
```pseudo
resultado <- 9 % 4
// resultado agora vale 1, pois 9 dividido por 4 é 2, com resto 1
```

## Exemplos Práticos

Vamos ver um exemplo prático utilizando todos os operadores aritméticos:

```pseudo
a <- 15
b <- 4

soma        <- a + b    // 19
subtracao   <- a - b    // 11
multiplicacao <- a * b  // 60
divisao     <- a / b    // 3.75
modulo      <- a % b    // 3
```

## Dicas e Boas Práticas

- **Precedência dos Operadores:** Assim como na matemática, a multiplicação e a divisão têm precedência sobre a adição e subtração. Use parênteses para garantir a ordem desejada das operações.
- **Tipos de Dados:** Fique atento ao tipo de dados das variáveis (inteiro, decimal), pois isso pode afetar o resultado das operações, especialmente na divisão.
- **Evite Divisão por Zero:** Sempre verifique se o divisor é diferente de zero antes de realizar uma divisão.

## Exercício Proposto

Crie um algoritmo que leia dois números inteiros e exiba o resultado da soma, subtração, multiplicação, divisão e módulo entre eles.

---

Compreender e praticar o uso dos operadores aritméticos é um passo essencial para desenvolver algoritmos eficientes e resolver problemas de programação com precisão.