
# Exemplos Práticos de Declaração e Uso de Tipos de Dados

Ao aprender lógica de programação, compreender como declarar e utilizar diferentes tipos de dados é fundamental para criar algoritmos eficientes e corretos. Os tipos de dados mais comuns são: **inteiro**, **real**, **caractere** e **booleano**. A seguir, apresentamos exemplos práticos de declaração e uso desses tipos, utilizando pseudocódigo e explicações claras para facilitar o entendimento.

---

## 1. Tipo Inteiro

O tipo **inteiro** é utilizado para armazenar números inteiros, ou seja, números sem parte decimal (ex: -10, 0, 25, 100).

**Exemplo de declaração e uso:**

```pseudocode
Declare idade: inteiro
idade ← 25
Escreva("A idade informada é: ", idade)
```

**Explicação:**  
Neste exemplo, declaramos uma variável chamada `idade` do tipo inteiro e atribuímos o valor 25 a ela. Em seguida, exibimos o valor armazenado.

---

## 2. Tipo Real

O tipo **real** (também chamado de ponto flutuante ou decimal) é utilizado para armazenar números que possuem parte fracionária, como 3.14, -0.5, 100.0.

**Exemplo de declaração e uso:**

```pseudocode
Declare salario: real
salario ← 2500.75
Escreva("O salário é: R$ ", salario)
```

**Explicação:**  
Aqui, a variável `salario` é do tipo real e recebe o valor 2500.75. O programa exibe o valor armazenado, incluindo a parte decimal.

---

## 3. Tipo Caractere

O tipo **caractere** (ou `char`) armazena um único símbolo, como uma letra, número ou sinal de pontuação. Para armazenar textos maiores, utiliza-se o tipo **cadeia de caracteres** (ou `string`).

**Exemplo de declaração e uso:**

```pseudocode
Declare inicial: caractere
inicial ← 'A'
Escreva("A inicial do nome é: ", inicial)
```

**Exemplo com cadeia de caracteres:**

```pseudocode
Declare nome: cadeia
nome ← "Ana"
Escreva("O nome informado é: ", nome)
```

**Explicação:**  
No primeiro exemplo, `inicial` armazena apenas um caractere. No segundo, `nome` armazena uma sequência de caracteres (uma palavra).

---

## 4. Tipo Booleano

O tipo **booleano** armazena apenas dois valores possíveis: **verdadeiro** (`true`) ou **falso** (`false`). É muito utilizado em estruturas de decisão.

**Exemplo de declaração e uso:**

```pseudocode
Declare aprovado: booleano
aprovado ← verdadeiro
Se aprovado então
    Escreva("Parabéns! Você foi aprovado.")
Senão
    Escreva("Você não foi aprovado.")
FimSe
```

**Explicação:**  
A variável `aprovado` recebe o valor `verdadeiro`. O programa verifica o valor e exibe uma mensagem correspondente.

---

## Resumo dos Tipos de Dados

| Tipo        | Exemplo de Valor | Uso Principal                        |
|-------------|------------------|--------------------------------------|
| Inteiro     | 10, -5, 0        | Contagem, índices, idades            |
| Real        | 3.14, -0.5       | Notas, salários, medidas             |
| Caractere   | 'A', '1', '?'    | Letras, dígitos, símbolos isolados   |
| Cadeia      | "Ana", "123"     | Palavras, frases, textos             |
| Booleano    | verdadeiro, falso| Condições, decisões lógicas          |

---

## Conclusão

A correta declaração e uso dos tipos de dados é essencial para garantir que as variáveis armazenem informações adequadas ao contexto do problema. Compreender esses conceitos permite criar algoritmos mais claros, seguros e eficientes, facilitando a transição para qualquer linguagem de programação no futuro.
```
