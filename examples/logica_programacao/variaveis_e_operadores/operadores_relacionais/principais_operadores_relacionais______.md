# Operadores Relacionais

Os **operadores relacionais** são fundamentais na lógica de programação, pois permitem comparar valores e tomar decisões com base no resultado dessas comparações. Eles são amplamente utilizados em estruturas de decisão (como `if`, `else`, `switch`) e em estruturas de repetição (como `while`, `for`). Compreender o funcionamento dos operadores relacionais é essencial para criar algoritmos eficientes e corretos.

## O que são Operadores Relacionais?

Operadores relacionais são símbolos ou palavras reservadas que comparam dois valores e retornam um resultado do tipo **booleano**: `verdadeiro` (true) ou `falso` (false). Eles são usados para verificar relações como igualdade, diferença, maior ou menor entre valores.

## Principais Operadores Relacionais

A seguir, apresentamos os principais operadores relacionais utilizados na maioria das linguagens de programação:

| Operador | Significado           | Exemplo         | Resultado         |
|----------|----------------------|-----------------|-------------------|
| `>`      | Maior que            | `5 > 3`         | `true`            |
| `<`      | Menor que            | `2 < 7`         | `true`            |
| `>=`     | Maior ou igual a     | `4 >= 4`        | `true`            |
| `<=`     | Menor ou igual a     | `6 <= 5`        | `false`           |
| `==`     | Igual a              | `10 == 10`      | `true`            |
| `!=`     | Diferente de         | `8 != 9`        | `true`            |

### 1. `>` (Maior que)

Compara se o valor à esquerda é **maior** que o valor à direita.

```pseudocode
se idade > 18 então
    escreva "Maior de idade"
fim_se
```

### 2. `<` (Menor que)

Compara se o valor à esquerda é **menor** que o valor à direita.

```pseudocode
se temperatura < 0 então
    escreva "Abaixo de zero"
fim_se
```

### 3. `>=` (Maior ou igual a)

Verifica se o valor à esquerda é **maior ou igual** ao valor à direita.

```pseudocode
se nota >= 7 então
    escreva "Aprovado"
fim_se
```

### 4. `<=` (Menor ou igual a)

Verifica se o valor à esquerda é **menor ou igual** ao valor à direita.

```pseudocode
se saldo <= 0 então
    escreva "Saldo insuficiente"
fim_se
```

### 5. `==` (Igual a)

Verifica se os valores comparados são **iguais**.

```pseudocode
se senha == "1234" então
    escreva "Acesso permitido"
fim_se
```

> **Atenção:** Em muitas linguagens de programação, o operador de igualdade é `==`, enquanto o operador `=` é usado para atribuição de valores.

### 6. `!=` (Diferente de)

Verifica se os valores comparados são **diferentes**.

```pseudocode
se opcao != "S" então
    escreva "Operação cancelada"
fim_se
```

## Utilização Prática

Os operadores relacionais são essenciais para controlar o fluxo dos algoritmos. Eles permitem, por exemplo, executar comandos apenas quando uma condição é satisfeita, ou repetir ações enquanto uma condição for verdadeira.

### Exemplo em Fluxograma

Imagine um algoritmo que verifica se uma pessoa pode votar:

```
[Início]
   |
[Leia idade]
   |
[idade >= 16?] --Sim--> [Escreva "Pode votar"]
   |                      |
   Não                   [Fim]
   |
[Escreva "Não pode votar"]
   |
[Fim]
```

## Boas Práticas

- **Clareza:** Use operadores relacionais de forma clara para facilitar a leitura do código.
- **Atenção à igualdade:** Não confunda o operador de igualdade (`==`) com o de atribuição (`=`).
- **Testes:** Sempre teste as condições para garantir que o algoritmo se comporta como esperado.

## Conclusão

Os operadores relacionais são ferramentas indispensáveis para a construção de algoritmos lógicos e eficientes. Dominar seu uso é um passo fundamental para quem está começando na programação, pois eles são a base para a tomada de decisões e controle de fluxo em qualquer linguagem de programação.