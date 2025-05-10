# Operadores Lógicos: AND, OR e NOT

Os operadores lógicos são fundamentais na lógica de programação, pois permitem combinar e manipular condições para tomada de decisões em algoritmos. Eles são utilizados, principalmente, em estruturas de decisão (como `if`, `else if`, `switch`) e em estruturas de repetição (como `while`, `for`), para avaliar expressões que resultam em valores booleanos (`verdadeiro` ou `falso`).

Neste tópico, vamos conhecer os três principais operadores lógicos: **AND**, **OR** e **NOT**.

---

## 1. Operador AND (E lógico)

O operador **AND** (representado geralmente por `&&` ou `and` em pseudocódigo) retorna **verdadeiro** apenas se **todas** as condições envolvidas forem verdadeiras. Caso contrário, retorna **falso**.

### Tabela Verdade do AND

| Condição A | Condição B | A AND B |
|:----------:|:----------:|:-------:|
| verdadeiro | verdadeiro | verdadeiro |
| verdadeiro | falso      | falso      |
| falso      | verdadeiro | falso      |
| falso      | falso      | falso      |

### Exemplo em Pseudocódigo

```pseudocode
SE (idade >= 18) AND (possui_carteira = verdadeiro) ENTÃO
    ESCREVA "Pode dirigir"
SENÃO
    ESCREVA "Não pode dirigir"
FIMSE
```

Neste exemplo, a mensagem "Pode dirigir" só será exibida se a pessoa tiver **18 anos ou mais** **e** possuir carteira de motorista.

---

## 2. Operador OR (OU lógico)

O operador **OR** (representado por `||` ou `or` em pseudocódigo) retorna **verdadeiro** se **pelo menos uma** das condições for verdadeira. Só retorna **falso** se **todas** as condições forem falsas.

### Tabela Verdade do OR

| Condição A | Condição B | A OR B  |
|:----------:|:----------:|:-------:|
| verdadeiro | verdadeiro | verdadeiro |
| verdadeiro | falso      | verdadeiro |
| falso      | verdadeiro | verdadeiro |
| falso      | falso      | falso      |

### Exemplo em Pseudocódigo

```pseudocode
SE (dia = "sábado") OR (dia = "domingo") ENTÃO
    ESCREVA "É fim de semana"
SENÃO
    ESCREVA "É dia útil"
FIMSE
```

Neste exemplo, a mensagem "É fim de semana" será exibida se o dia for **sábado** ou **domingo**.

---

## 3. Operador NOT (NÃO lógico)

O operador **NOT** (representado por `!` ou `not` em pseudocódigo) **inverte** o valor lógico de uma condição. Se a condição for verdadeira, o resultado será falso, e vice-versa.

### Tabela Verdade do NOT

| Condição A | NOT A     |
|:----------:|:---------:|
| verdadeiro | falso     |
| falso      | verdadeiro|

### Exemplo em Pseudocódigo

```pseudocode
SE NOT (tem_ingresso) ENTÃO
    ESCREVA "Não pode entrar"
SENÃO
    ESCREVA "Bem-vindo!"
FIMSE
```

Neste exemplo, a mensagem "Não pode entrar" será exibida se a pessoa **não** tiver ingresso.

---

## Dicas e Boas Práticas

- **Parênteses**: Use parênteses para deixar claro a ordem de avaliação das condições, especialmente quando combinar mais de um operador lógico.
- **Clareza**: Escreva condições de forma clara e objetiva, facilitando a leitura e manutenção do código.
- **Testes**: Sempre teste todas as combinações possíveis de condições para garantir que o algoritmo se comporte como esperado.

---

## Resumo

Os operadores lógicos **AND**, **OR** e **NOT** são essenciais para criar condições compostas em algoritmos. Eles permitem que você combine múltiplas verificações e controle o fluxo de execução do seu programa de maneira eficiente e precisa. Dominar esses operadores é um passo fundamental para desenvolver soluções lógicas e robustas em qualquer linguagem de programação.