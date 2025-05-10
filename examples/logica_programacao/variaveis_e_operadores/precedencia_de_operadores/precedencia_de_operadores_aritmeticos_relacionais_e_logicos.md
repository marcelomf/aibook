# Precedência de Operadores Aritméticos, Relacionais e Lógicos

Ao desenvolver algoritmos e programas, é comum utilizar expressões que envolvem diferentes tipos de operadores, como aritméticos, relacionais e lógicos. Entender a **precedência de operadores** é fundamental para garantir que as expressões sejam avaliadas corretamente, evitando resultados inesperados e erros lógicos no código.

## O que é Precedência de Operadores?

A **precedência de operadores** determina a ordem em que os operadores são avaliados em uma expressão que contém mais de um tipo de operador. Assim como na matemática, onde multiplicação e divisão têm prioridade sobre adição e subtração, em programação cada operador possui um nível de prioridade. Quando operadores de mesma precedência aparecem juntos, a **associatividade** define a ordem de avaliação (da esquerda para a direita ou vice-versa).

---

## 1. Operadores Aritméticos

Os operadores aritméticos são utilizados para realizar operações matemáticas. Os principais são:

- `+` (adição)
- `-` (subtração)
- `*` (multiplicação)
- `/` (divisão)
- `%` (módulo ou resto da divisão)

### Ordem de Precedência

A ordem de precedência dos operadores aritméticos, do mais alto para o mais baixo, é:

1. **Parênteses**: `()`
2. **Multiplicação, Divisão e Módulo**: `*`, `/`, `%`
3. **Adição e Subtração**: `+`, `-`

**Exemplo:**

```plaintext
Resultado = 2 + 3 * 4
```

Neste caso, a multiplicação é realizada antes da adição:

- `3 * 4 = 12`
- `2 + 12 = 14`

Se quisermos que a adição seja feita primeiro, usamos parênteses:

```plaintext
Resultado = (2 + 3) * 4
```

- `2 + 3 = 5`
- `5 * 4 = 20`

---

## 2. Operadores Relacionais

Os operadores relacionais são usados para comparar valores e retornam um resultado booleano (`verdadeiro` ou `falso`). Os principais são:

- `==` (igual a)
- `!=` (diferente de)
- `>` (maior que)
- `<` (menor que)
- `>=` (maior ou igual a)
- `<=` (menor ou igual a)

### Ordem de Precedência

Os operadores relacionais têm precedência **menor** que os aritméticos, mas **maior** que os lógicos. Quando usados juntos, as operações aritméticas são avaliadas primeiro, seguidas pelas comparações relacionais.

**Exemplo:**

```plaintext
Resultado = 2 + 3 > 4
```

- Primeiro, `2 + 3 = 5`
- Depois, `5 > 4` resulta em `verdadeiro`

---

## 3. Operadores Lógicos

Os operadores lógicos são utilizados para combinar expressões booleanas. Os principais são:

- `!` (negação, NOT)
- `&&` (conjunção, AND)
- `||` (disjunção, OR)

### Ordem de Precedência

A ordem de precedência dos operadores lógicos, do mais alto para o mais baixo, é:

1. **NÃO**: `!`
2. **E**: `&&`
3. **OU**: `||`

**Exemplo:**

```plaintext
Resultado = 2 > 1 && 3 < 5 || 4 == 2
```

- `2 > 1` é `verdadeiro`
- `3 < 5` é `verdadeiro`
- `4 == 2` é `falso`
- Primeiro, avalia-se o `&&`: `verdadeiro && verdadeiro` resulta em `verdadeiro`
- Depois, avalia-se o `||`: `verdadeiro || falso` resulta em `verdadeiro`

---

## Tabela Resumida de Precedência

| Nível | Operador(es)           | Descrição                | Associatividade      |
|-------|------------------------|--------------------------|---------------------|
| 1     | `()`                   | Parênteses               | Da esquerda p/ direita |
| 2     | `!`                    | Lógico NOT               | Da direita p/ esquerda |
| 3     | `*`, `/`, `%`          | Multiplicação, Divisão, Módulo | Da esquerda p/ direita |
| 4     | `+`, `-`               | Adição, Subtração        | Da esquerda p/ direita |
| 5     | `>`, `<`, `>=`, `<=`   | Relacionais              | Da esquerda p/ direita |
| 6     | `==`, `!=`             | Igualdade/Diferença      | Da esquerda p/ direita |
| 7     | `&&`                   | Lógico AND               | Da esquerda p/ direita |
| 8     | `||`                   | Lógico OR                | Da esquerda p/ direita |

---

## Dicas Práticas

- **Use parênteses** para deixar claro a ordem de avaliação, mesmo quando conhecer a precedência. Isso melhora a legibilidade e reduz erros.
- **Teste suas expressões** em pequenos exemplos para garantir que o resultado é o esperado.
- **Lembre-se:** a precedência pode variar levemente entre linguagens, mas a ordem apresentada aqui é válida para a maioria das linguagens populares (C, Java, Python, etc.).

---

## Conclusão

Compreender a precedência dos operadores aritméticos, relacionais e lógicos é essencial para escrever expressões corretas e evitar erros lógicos em seus algoritmos. Sempre que houver dúvida, utilize parênteses para garantir que as operações sejam realizadas na ordem desejada, tornando seu código mais claro e confiável.