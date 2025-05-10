
# Sintaxe Básica das Estruturas de Repetição em Pseudocódigo

As estruturas de repetição, também conhecidas como laços ou loops, são fundamentais na lógica de programação. Elas permitem executar um bloco de comandos várias vezes, de acordo com uma condição estabelecida. Em pseudocódigo, essas estruturas são representadas de forma simples e próxima da linguagem natural, facilitando o entendimento do fluxo de execução antes da implementação em uma linguagem de programação específica.

Neste tópico, vamos apresentar a sintaxe básica das principais estruturas de repetição em pseudocódigo: **for**, **while** e **do-while**.

---

## 1. Estrutura de Repetição **for**

A estrutura **for** é utilizada quando se sabe previamente o número de vezes que o bloco de comandos deve ser executado. Ela é composta por uma variável de controle, um valor inicial, uma condição de parada e um incremento ou decremento.

**Sintaxe em pseudocódigo:**

```pseudocode
PARA variável DE valor_inicial ATÉ valor_final PASSO incremento FAÇA
    // comandos a serem executados
FIMPARA
```

- **variável**: variável de controle do laço.
- **valor_inicial**: valor inicial da variável.
- **valor_final**: valor final até onde o laço irá executar.
- **incremento**: valor pelo qual a variável será incrementada a cada iteração (opcional, padrão é 1).

**Exemplo:**

```pseudocode
PARA i DE 1 ATÉ 5 FAÇA
    ESCREVA(i)
FIMPARA
```
*Este laço imprime os números de 1 a 5.*

---

## 2. Estrutura de Repetição **while**

A estrutura **while** (enquanto) é utilizada quando não se sabe exatamente quantas vezes o bloco de comandos será executado, mas existe uma condição que deve ser verdadeira para que a repetição continue.

**Sintaxe em pseudocódigo:**

```pseudocode
ENQUANTO condição FAÇA
    // comandos a serem executados
FIMENQUANTO
```

- **condição**: expressão lógica que será avaliada antes de cada iteração. Se for verdadeira, o bloco é executado; se for falsa, o laço termina.

**Exemplo:**

```pseudocode
i ← 1
ENQUANTO i ≤ 5 FAÇA
    ESCREVA(i)
    i ← i + 1
FIMENQUANTO
```
*Este laço também imprime os números de 1 a 5.*

---

## 3. Estrutura de Repetição **do-while**

A estrutura **do-while** (faça-enquanto) é semelhante ao **while**, mas a condição é verificada **após** a execução do bloco de comandos. Isso garante que o bloco será executado pelo menos uma vez.

**Sintaxe em pseudocódigo:**

```pseudocode
FAÇA
    // comandos a serem executados
ENQUANTO condição
```

- **condição**: expressão lógica avaliada após a execução do bloco. Se for verdadeira, o laço repete; se for falsa, termina.

**Exemplo:**

```pseudocode
i ← 1
FAÇA
    ESCREVA(i)
    i ← i + 1
ENQUANTO i ≤ 5
```
*Este laço também imprime os números de 1 a 5.*

---

## Resumo

- **for**: usado quando o número de repetições é conhecido.
- **while**: usado quando o número de repetições depende de uma condição avaliada antes da execução.
- **do-while**: usado quando o bloco deve ser executado pelo menos uma vez, com a condição avaliada após a execução.

O uso correto das estruturas de repetição em pseudocódigo é essencial para criar algoritmos eficientes e claros, servindo como base para a implementação em qualquer linguagem de programação.
```
