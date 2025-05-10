
# Operações Permitidas para Cada Tipo de Dado

No estudo da lógica de programação, compreender os tipos de dados e as operações que podem ser realizadas com cada um deles é fundamental para a construção de algoritmos corretos e eficientes. Os tipos de dados mais comuns são: **inteiro**, **real**, **caractere** e **booleano**. Cada tipo possui características próprias e permite operações específicas, que serão detalhadas a seguir.

---

## 1. Inteiro

O tipo **inteiro** representa números sem parte decimal, positivos ou negativos (ex: -10, 0, 25).

### Operações Permitidas

- **Aritméticas**:  
  - Adição (`+`): `a + b`
  - Subtração (`-`): `a - b`
  - Multiplicação (`*`): `a * b`
  - Divisão inteira (`/` ou `div`): `a / b` (resultado inteiro)
  - Módulo (`%` ou `mod`): `a % b` (resto da divisão)
- **Comparação**:  
  - Igualdade (`==`)
  - Diferente (`!=`)
  - Maior (`>`)
  - Menor (`<`)
  - Maior ou igual (`>=`)
  - Menor ou igual (`<=`)
- **Atribuição**:  
  - Simples (`=`): `a = 10`
  - Composta (`+=`, `-=`, etc.): `a += 2` (equivalente a `a = a + 2`)

### Exemplo

```pseudocode
inteiro a = 5
inteiro b = 2
inteiro soma = a + b      // 7
inteiro resto = a % b     // 1
booleano resultado = a > b // verdadeiro
```

---

## 2. Real

O tipo **real** (ou ponto flutuante) representa números com parte decimal (ex: 3.14, -0.5, 2.0).

### Operações Permitidas

- **Aritméticas**:  
  - Adição, subtração, multiplicação, divisão (resultado com decimais)
  - Exponenciação (`^` ou função `pow`)
- **Comparação**:  
  - Igualdade, diferente, maior, menor, maior ou igual, menor ou igual
- **Atribuição**:  
  - Simples e composta

> **Atenção:** Comparações de igualdade entre números reais podem ser imprecisas devido à representação interna dos decimais. Prefira comparar se a diferença é menor que um valor muito pequeno (epsilon).

### Exemplo

```pseudocode
real x = 3.5
real y = 2.0
real divisao = x / y      // 1.75
booleano igual = x == y   // falso
```

---

## 3. Caractere

O tipo **caractere** representa um único símbolo textual (ex: 'A', 'z', '1', '@'). Quando agrupados, formam **cadeias de caracteres** (strings).

### Operações Permitidas

- **Atribuição**:  
  - `letra = 'A'`
- **Comparação**:  
  - Igualdade e diferença (`==`, `!=`)
  - Ordem alfabética (`<`, `>`) — depende da tabela de códigos (ex: ASCII)
- **Concatenação** (para strings):  
  - `texto = "Olá, " + "mundo!"` (gera "Olá, mundo!")
- **Acesso a caracteres individuais** (em strings):  
  - `letra = texto[0]` (primeiro caractere)

### Exemplo

```pseudocode
caractere letra = 'B'
caractere outra = 'C'
booleano ordem = letra < outra // verdadeiro
```

---

## 4. Booleano

O tipo **booleano** representa valores lógicos: **verdadeiro** (`true`) ou **falso** (`false`).

### Operações Permitidas

- **Lógicas**:  
  - E (`AND` ou `&&`): `a AND b`
  - OU (`OR` ou `||`): `a OR b`
  - NÃO (`NOT` ou `!`): `NOT a`
- **Comparação**:  
  - Igualdade e diferença

### Exemplo

```pseudocode
booleano a = verdadeiro
booleano b = falso
booleano resultado = a AND b // falso
booleano inverso = NOT a     // falso
```

---

## Resumo

| Tipo de Dado | Operações Principais                                                                 |
|--------------|--------------------------------------------------------------------------------------|
| Inteiro      | Aritméticas, comparação, atribuição                                                  |
| Real         | Aritméticas (com decimais), comparação, atribuição                                   |
| Caractere    | Comparação, atribuição, concatenação (em strings), acesso individual (em strings)    |
| Booleano     | Lógicas (AND, OR, NOT), comparação, atribuição                                       |

---

## Boas Práticas

- Sempre utilize o tipo de dado mais adequado para cada informação.
- Evite misturar tipos em operações sem conversão explícita.
- Atente-se à precisão ao comparar números reais.
- Use nomes claros para variáveis, indicando o tipo de dado quando possível.

---

Compreender as operações permitidas para cada tipo de dado é essencial para evitar erros e construir algoritmos robustos, servindo de base para o aprendizado de qualquer linguagem de programação.
```
