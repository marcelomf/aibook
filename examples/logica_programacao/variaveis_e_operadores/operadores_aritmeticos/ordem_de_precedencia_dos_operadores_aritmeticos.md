# Ordem de Precedência dos Operadores Aritméticos

Ao desenvolver algoritmos e programas, é comum realizar cálculos que envolvem diferentes operadores aritméticos, como adição, subtração, multiplicação e divisão. Para garantir que as expressões matemáticas sejam avaliadas corretamente, é fundamental compreender a **ordem de precedência dos operadores aritméticos**.

## O que é Ordem de Precedência?

A ordem de precedência determina **qual operador deve ser avaliado primeiro** em uma expressão que contém mais de um operador. Assim como na matemática, a programação segue regras específicas para evitar ambiguidades e garantir resultados corretos.

Por exemplo, na expressão `2 + 3 * 4`, o resultado pode ser 20 ou 14, dependendo de qual operação for realizada primeiro. A ordem de precedência define que a multiplicação deve ser feita antes da adição, resultando em 14.

## Tabela de Precedência dos Operadores Aritméticos

A seguir, apresentamos a ordem de precedência dos principais operadores aritméticos, do mais alto para o mais baixo:

| Ordem | Operador         | Descrição           | Exemplo         |
|-------|------------------|---------------------|-----------------|
| 1     | `()`             | Parênteses          | `(2 + 3) * 4`   |
| 2     | `*`, `/`, `%`    | Multiplicação, Divisão, Módulo | `2 * 3`, `10 / 2`, `7 % 3` |
| 3     | `+`, `-`         | Adição, Subtração   | `5 + 2`, `8 - 3`|

### Detalhes dos Operadores

- **Parênteses `()`**: Sempre têm a mais alta precedência. Qualquer operação dentro de parênteses é realizada primeiro.
- **Multiplicação `*`, Divisão `/`, Módulo `%`**: Têm precedência sobre adição e subtração. São avaliados da esquerda para a direita.
- **Adição `+` e Subtração `-`**: São avaliados por último, também da esquerda para a direita.

## Exemplos Práticos

Vamos analisar alguns exemplos para entender como a ordem de precedência afeta o resultado das expressões:

### Exemplo 1

```plaintext
Resultado = 2 + 3 * 4
```
- Multiplicação primeiro: `3 * 4 = 12`
- Depois adição: `2 + 12 = 14`
- **Resultado final: 14**

### Exemplo 2

```plaintext
Resultado = (2 + 3) * 4
```
- Parênteses primeiro: `2 + 3 = 5`
- Depois multiplicação: `5 * 4 = 20`
- **Resultado final: 20**

### Exemplo 3

```plaintext
Resultado = 10 - 4 / 2
```
- Divisão primeiro: `4 / 2 = 2`
- Depois subtração: `10 - 2 = 8`
- **Resultado final: 8**

### Exemplo 4

```plaintext
Resultado = 8 + 6 % 4
```
- Módulo primeiro: `6 % 4 = 2` (resto da divisão de 6 por 4)
- Depois adição: `8 + 2 = 10`
- **Resultado final: 10**

## Dicas Importantes

- **Use parênteses para deixar claro o que deve ser calculado primeiro**, especialmente em expressões complexas. Isso evita erros e torna o código mais legível.
- **A precedência pode variar em operadores não aritméticos** (como lógicos e relacionais), mas para os aritméticos, a tabela acima é padrão na maioria das linguagens de programação.
- **A ordem de avaliação é da esquerda para a direita** quando operadores têm a mesma precedência.

## Conclusão

Compreender a ordem de precedência dos operadores aritméticos é essencial para escrever algoritmos corretos e evitar resultados inesperados. Sempre que houver dúvida, utilize parênteses para explicitar a ordem desejada das operações. Assim, você garante clareza e precisão nos seus cálculos, independentemente da linguagem de programação utilizada.