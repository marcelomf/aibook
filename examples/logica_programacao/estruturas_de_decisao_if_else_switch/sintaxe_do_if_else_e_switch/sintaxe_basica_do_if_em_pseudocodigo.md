# Sintaxe Básica do `if` em Pseudocódigo

A estrutura de decisão `if` é um dos pilares fundamentais da lógica de programação. Ela permite que um algoritmo tome decisões com base em condições, executando diferentes blocos de código conforme o resultado dessas condições (verdadeiro ou falso). Em pseudocódigo, a sintaxe do `if` é simples e intuitiva, facilitando o entendimento do fluxo lógico antes da implementação em uma linguagem de programação específica.

## Estrutura Básica do `if`

A estrutura mais simples do `if` em pseudocódigo verifica uma condição e, se ela for verdadeira, executa um bloco de comandos. Caso contrário, o fluxo do algoritmo segue normalmente, sem executar esse bloco.

```pseudocode
SE condição ENTÃO
    // comandos a serem executados se a condição for verdadeira
FIMSE
```

- **SE**: palavra-chave que inicia a estrutura de decisão.
- **condição**: expressão lógica que será avaliada (verdadeira ou falsa).
- **ENTÃO**: indica o início do bloco de comandos que será executado se a condição for verdadeira.
- **FIMSE**: marca o fim da estrutura `if`.

### Exemplo Simples

```pseudocode
SE idade >= 18 ENTÃO
    ESCREVA "Você é maior de idade."
FIMSE
```

Neste exemplo, a mensagem só será exibida se a variável `idade` for maior ou igual a 18.

## Estrutura `if-else` (com alternativa)

Para tratar situações em que há uma ação alternativa caso a condição não seja satisfeita, utiliza-se o `SENÃO` (equivalente ao `else`):

```pseudocode
SE condição ENTÃO
    // comandos se a condição for verdadeira
SENÃO
    // comandos se a condição for falsa
FIMSE
```

### Exemplo com Alternativa

```pseudocode
SE nota >= 7 ENTÃO
    ESCREVA "Aprovado"
SENÃO
    ESCREVA "Reprovado"
FIMSE
```

Neste caso, o algoritmo exibe "Aprovado" se a nota for maior ou igual a 7; caso contrário, exibe "Reprovado".

## Boas Práticas

- **Indentação**: Utilize indentação para facilitar a leitura dos blocos de código.
- **Clareza nas condições**: Escreva condições claras e objetivas.
- **Comentários**: Use comentários para explicar decisões importantes, se necessário.

## Resumo

A estrutura `if` em pseudocódigo é essencial para controlar o fluxo de execução de um algoritmo, permitindo que diferentes ações sejam tomadas conforme as condições estabelecidas. Dominar sua sintaxe é um passo fundamental para o desenvolvimento de soluções lógicas e eficientes.

---

**Exercício de Fixação:**  
Escreva um pseudocódigo que leia um número e informe se ele é positivo ou negativo utilizando a estrutura `if`.

```pseudocode
LEIA numero
SE numero >= 0 ENTÃO
    ESCREVA "O número é positivo."
SENÃO
    ESCREVA "O número é negativo."
FIMSE
```

Pratique criando diferentes condições e utilizando a estrutura `if` para fortalecer sua base em lógica de programação!