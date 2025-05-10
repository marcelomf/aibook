
# Tabela de Precedência dos Operadores Mais Comuns

Ao escrever algoritmos e programas, frequentemente utilizamos expressões que envolvem diferentes operadores, como soma, subtração, multiplicação, comparação e lógicas. Entender a **precedência dos operadores** é fundamental para garantir que as expressões sejam avaliadas corretamente, evitando resultados inesperados.

A **precedência de operadores** determina a ordem em que as operações são realizadas em uma expressão. Operadores com maior precedência são avaliados antes dos operadores com menor precedência. Quando operadores possuem a mesma precedência, a **associatividade** define se a avaliação ocorre da esquerda para a direita ou vice-versa.

A seguir, apresentamos uma tabela com os operadores mais comuns, organizados da maior para a menor precedência, considerando a maioria das linguagens de programação (como C, Java, Python e JavaScript):

| Ordem | Operador(es)                | Descrição                        | Associatividade      | Exemplo             |
|-------|-----------------------------|----------------------------------|---------------------|---------------------|
| 1     | `()`                        | Parênteses (agrupamento)         | -                   | `(a + b) * c`       |
| 2     | `++`, `--`, `!`, `-` (unário)| Incremento, negação, unário      | Direita para esquerda| `-a`, `!b`, `++i`   |
| 3     | `*`, `/`, `%`               | Multiplicação, divisão, módulo   | Esquerda para direita| `a * b / c`         |
| 4     | `+`, `-`                    | Soma, subtração                  | Esquerda para direita| `a + b - c`         |
| 5     | `<`, `<=`, `>`, `>=`        | Comparação relacional            | Esquerda para direita| `a < b`             |
| 6     | `==`, `!=`                  | Igualdade, diferença             | Esquerda para direita| `a == b`            |
| 7     | `&&` (`and`)                | E lógico                         | Esquerda para direita| `a && b`            |
| 8     | `||` (`or`)                 | Ou lógico                        | Esquerda para direita| `a || b`            |
| 9     | `=`                         | Atribuição                       | Direita para esquerda| `a = b`             |

> **Observação:**  
> - A sintaxe dos operadores pode variar entre linguagens. Por exemplo, em Python, os operadores lógicos são `and`, `or` e `not`, enquanto em C, Java e JavaScript são `&&`, `||` e `!`.
> - O operador de atribuição (`=`) tem uma das menores precedências, ou seja, a atribuição ocorre após todas as outras operações.

## Exemplos Práticos

### 1. Expressão Matemática

```pseudo
resultado = 2 + 3 * 4
```
- **Multiplicação** tem precedência sobre a **adição**.
- Primeiro calcula-se `3 * 4 = 12`, depois `2 + 12 = 14`.
- `resultado` recebe o valor `14`.

### 2. Uso de Parênteses

```pseudo
resultado = (2 + 3) * 4
```
- Os **parênteses** alteram a ordem de avaliação.
- Primeiro calcula-se `2 + 3 = 5`, depois `5 * 4 = 20`.
- `resultado` recebe o valor `20`.

### 3. Operadores Lógicos e Relacionais

```pseudo
condicao = a > b && b != 0
```
- Primeiro avalia-se `a > b` e `b != 0` (relacionais).
- Depois, o resultado de ambos é combinado com `&&` (E lógico).

## Dicas Importantes

- **Use parênteses** para tornar a ordem de avaliação explícita e o código mais legível.
- Conheça a precedência dos operadores da linguagem que está utilizando.
- Quando em dúvida, consulte a documentação oficial ou utilize parênteses para garantir o resultado esperado.

## Conclusão

Compreender a tabela de precedência dos operadores é essencial para evitar erros lógicos em algoritmos e programas. Sempre que possível, utilize parênteses para deixar claro o que deve ser avaliado primeiro, tornando seu código mais seguro e fácil de entender.
```
