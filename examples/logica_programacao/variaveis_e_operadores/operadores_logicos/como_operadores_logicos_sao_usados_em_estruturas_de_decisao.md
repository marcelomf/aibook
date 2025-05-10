# Operadores Lógicos em Estruturas de Decisão

Os **operadores lógicos** são fundamentais na construção de algoritmos, especialmente quando precisamos tomar decisões baseadas em múltiplas condições. Eles permitem combinar ou inverter expressões booleanas (verdadeiro ou falso), tornando as estruturas de decisão mais flexíveis e poderosas.

## O que são Operadores Lógicos?

Operadores lógicos são símbolos ou palavras reservadas que conectam duas ou mais expressões lógicas, retornando um resultado booleano. Os principais operadores lógicos são:

- **E (AND)**: Retorna verdadeiro se **todas** as condições forem verdadeiras.
- **OU (OR)**: Retorna verdadeiro se **pelo menos uma** das condições for verdadeira.
- **NÃO (NOT)**: Inverte o valor lógico de uma condição (verdadeiro vira falso e vice-versa).

Na maioria das linguagens de programação, esses operadores são representados assim:

| Operador | Símbolo (pseudocódigo) | Exemplo           |
|----------|------------------------|-------------------|
| E        | `E` ou `AND`           | `cond1 E cond2`   |
| OU       | `OU` ou `OR`           | `cond1 OU cond2`  |
| NÃO      | `NÃO` ou `NOT`         | `NÃO cond1`       |

## Estruturas de Decisão

As **estruturas de decisão** (como `if`, `else if`, `else` e `switch`) permitem que o algoritmo execute diferentes blocos de código dependendo do resultado de uma condição lógica.

### Exemplo de Estrutura de Decisão

```pseudocode
SE (condição) ENTÃO
    // bloco de código se condição for verdadeira
SENÃO
    // bloco de código se condição for falsa
FIMSE
```

## Como os Operadores Lógicos São Usados

Ao combinar operadores lógicos com estruturas de decisão, podemos criar condições mais complexas e precisas. Veja alguns exemplos práticos:

### 1. Usando o operador E (AND)

```pseudocode
SE (idade >= 18 E possui_carteira) ENTÃO
    ESCREVA "Pode dirigir"
SENÃO
    ESCREVA "Não pode dirigir"
FIMSE
```
**Explicação:** Só será permitido dirigir se a pessoa for maior de idade **e** possuir carteira de motorista.

### 2. Usando o operador OU (OR)

```pseudocode
SE (nota >= 7 OU trabalho_extra) ENTÃO
    ESCREVA "Aprovado"
SENÃO
    ESCREVA "Reprovado"
FIMSE
```
**Explicação:** O aluno será aprovado se a nota for maior ou igual a 7 **ou** se tiver feito trabalho extra.

### 3. Usando o operador NÃO (NOT)

```pseudocode
SE (NÃO possui_cadastro) ENTÃO
    ESCREVA "Faça seu cadastro"
FIMSE
```
**Explicação:** A mensagem só será exibida se a pessoa **não** tiver cadastro.

### 4. Combinando operadores

```pseudocode
SE ((idade >= 18 E possui_carteira) OU (idade >= 16 E emancipado)) ENTÃO
    ESCREVA "Pode dirigir"
SENÃO
    ESCREVA "Não pode dirigir"
FIMSE
```
**Explicação:** A pessoa pode dirigir se for maior de idade e tiver carteira, **ou** se for maior de 16 anos e emancipado.

## Boas Práticas

- **Use parênteses** para deixar claro a ordem de avaliação das condições.
- **Evite condições muito longas**: se necessário, quebre em variáveis auxiliares para facilitar a leitura.
- **Comente** condições complexas para ajudar na manutenção do código.

## Conclusão

Os operadores lógicos são essenciais para criar condições compostas em estruturas de decisão, permitindo que algoritmos tomem decisões mais inteligentes e adaptáveis. Dominar seu uso é um passo importante para desenvolver programas eficientes e confiáveis.