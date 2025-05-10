
# Exercícios Práticos para Fixação de Precedência de Operadores

A precedência de operadores é um conceito fundamental na lógica de programação. Ela determina a ordem em que as operações são realizadas em uma expressão, influenciando diretamente o resultado final. Compreender e praticar a precedência dos operadores ajuda a evitar erros lógicos e a escrever códigos mais claros e eficientes.

A seguir, apresentamos uma série de exercícios práticos para fixação desse conceito. Os exercícios utilizam pseudocódigo, mas os princípios se aplicam a qualquer linguagem de programação.

---

## Exercício 1: Avaliando Expressões Simples

**Enunciado:**  
Considere as variáveis abaixo:

```
a = 10
b = 5
c = 2
```

Calcule o valor das seguintes expressões:

1. `a + b * c`
2. `(a + b) * c`
3. `a / b + c`
4. `a / (b + c)`

**Respostas:**

1. `a + b * c` → `10 + 5 * 2` → `10 + 10` → **20**
2. `(a + b) * c` → `(10 + 5) * 2` → `15 * 2` → **30**
3. `a / b + c` → `10 / 5 + 2` → `2 + 2` → **4**
4. `a / (b + c)` → `10 / (5 + 2)` → `10 / 7` → **1.428...**

---

## Exercício 2: Precedência com Operadores Lógicos

**Enunciado:**  
Considere as variáveis:

```
x = 4
y = 7
z = 10
```

Avalie as expressões lógicas abaixo (verdadeiro ou falso):

1. `x > 3 AND y < 10 OR z == 10`
2. `x > 5 OR y < 5 AND z > 8`
3. `NOT (x < y) OR z != 10`

**Respostas:**

1. `x > 3 AND y < 10 OR z == 10`  
   - `x > 3` → verdadeiro  
   - `y < 10` → verdadeiro  
   - `z == 10` → verdadeiro  
   - `verdadeiro AND verdadeiro` → verdadeiro  
   - `verdadeiro OR verdadeiro` → **verdadeiro**

2. `x > 5 OR y < 5 AND z > 8`  
   - `x > 5` → falso  
   - `y < 5` → falso  
   - `z > 8` → verdadeiro  
   - `falso AND verdadeiro` → falso  
   - `falso OR falso` → **falso**

3. `NOT (x < y) OR z != 10`  
   - `x < y` → verdadeiro  
   - `NOT (verdadeiro)` → falso  
   - `z != 10` → falso  
   - `falso OR falso` → **falso**

---

## Exercício 3: Uso de Parênteses

**Enunciado:**  
Reescreva as expressões abaixo utilizando parênteses para alterar a ordem de avaliação e obtenha o novo resultado.

1. Expressão original: `8 + 2 * 5`
   - Com parênteses: `(8 + 2) * 5`
2. Expressão original: `12 / 4 + 1`
   - Com parênteses: `12 / (4 + 1)`

**Respostas:**

1. `8 + 2 * 5`  
   - Original: `8 + (2 * 5)` → `8 + 10` → **18**  
   - Com parênteses: `(8 + 2) * 5` → `10 * 5` → **50**

2. `12 / 4 + 1`  
   - Original: `(12 / 4) + 1` → `3 + 1` → **4**  
   - Com parênteses: `12 / (4 + 1)` → `12 / 5` → **2.4**

---

## Exercício 4: Precedência em Expressões Complexas

**Enunciado:**  
Dadas as variáveis:

```
a = 3
b = 4
c = 5
```

Calcule o valor da expressão:

```
resultado = a + b * c - b / a
```

**Resolução:**

1. Multiplicação e divisão primeiro:
   - `b * c` → `4 * 5` → `20`
   - `b / a` → `4 / 3` → `1.333...`
2. Soma e subtração:
   - `a + 20 - 1.333...` → `3 + 20` → `23`
   - `23 - 1.333...` → **21.666...**

---

## Exercício 5: Corrigindo Erros de Precedência

**Enunciado:**  
Analise o pseudocódigo abaixo e identifique se o resultado está correto. Se não estiver, corrija utilizando parênteses.

```
x = 2
y = 3
z = 4

resultado = x + y / z
```

**Resposta:**

- Sem parênteses: `x + (y / z)` → `2 + (3 / 4)` → `2 + 0.75` → **2.75**
- Se a intenção era somar `x + y` antes de dividir por `z`, deve-se usar parênteses:
  - `(x + y) / z` → `(2 + 3) / 4` → `5 / 4` → **1.25**

---

## Dicas para Fixação

- Sempre que houver dúvida sobre a ordem de avaliação, utilize parênteses para tornar a expressão mais clara.
- Pratique com diferentes combinações de operadores aritméticos e lógicos.
- Consulte a tabela de precedência da linguagem de programação que estiver utilizando.

---

## Conclusão

A prática constante com exercícios de precedência de operadores é essencial para evitar erros e desenvolver algoritmos corretos e eficientes. Ao dominar esse conceito, você estará mais preparado para resolver problemas de programação de forma lógica e estruturada.
```
