
# Exercícios de Switch/Case: Seleção entre Várias Opções

As estruturas de decisão são fundamentais na lógica de programação, permitindo que o programa escolha diferentes caminhos de execução conforme determinadas condições. Entre essas estruturas, o `switch/case` se destaca quando precisamos selecionar entre várias opções possíveis, tornando o código mais organizado e legível do que múltiplos comandos `if/else`.

## O que é o Switch/Case?

O `switch/case` é uma estrutura de seleção múltipla. Ele avalia o valor de uma expressão e executa o bloco de código correspondente ao caso (`case`) que combina com esse valor. Se nenhum caso for compatível, pode-se definir um bloco padrão (`default`) a ser executado.

### Sintaxe Geral (Pseudocódigo)

```plaintext
switch (expressão) {
    case valor1:
        // comandos para valor1
        break
    case valor2:
        // comandos para valor2
        break
    ...
    default:
        // comandos caso nenhum valor seja compatível
}
```

- **expressão**: valor a ser avaliado (geralmente uma variável do tipo inteiro, caractere ou string, dependendo da linguagem).
- **case**: cada opção possível para a expressão.
- **break**: encerra a execução do switch após o caso correspondente ser executado.
- **default**: bloco opcional, executado se nenhum caso for compatível.

## Vantagens do Switch/Case

- **Clareza**: facilita a leitura quando há muitas opções.
- **Organização**: evita o uso excessivo de `if/else if`.
- **Eficiência**: em algumas linguagens, pode ser mais eficiente que múltiplos `if/else`.

## Exemplos Práticos

### Exemplo 1: Menu de Opções

```plaintext
Exiba um menu para o usuário escolher uma operação matemática:
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão

Leia a opção escolhida e exiba a operação correspondente.
```

**Pseudocódigo:**

```plaintext
leia opcao

switch (opcao) {
    case 1:
        escreva "Você escolheu Soma"
        break
    case 2:
        escreva "Você escolheu Subtração"
        break
    case 3:
        escreva "Você escolheu Multiplicação"
        break
    case 4:
        escreva "Você escolheu Divisão"
        break
    default:
        escreva "Opção inválida"
}
```

### Exemplo 2: Dias da Semana

```plaintext
Peça ao usuário um número de 1 a 7 e exiba o dia da semana correspondente.
```

**Pseudocódigo:**

```plaintext
leia numero

switch (numero) {
    case 1:
        escreva "Domingo"
        break
    case 2:
        escreva "Segunda-feira"
        break
    case 3:
        escreva "Terça-feira"
        break
    case 4:
        escreva "Quarta-feira"
        break
    case 5:
        escreva "Quinta-feira"
        break
    case 6:
        escreva "Sexta-feira"
        break
    case 7:
        escreva "Sábado"
        break
    default:
        escreva "Número inválido"
}
```

## Exercícios Propostos

1. **Conversor de Notas**
   - Peça ao usuário uma letra (A, B, C, D, E) e exiba a mensagem correspondente:
     - A: "Excelente"
     - B: "Ótimo"
     - C: "Bom"
     - D: "Regular"
     - E: "Insuficiente"
     - Qualquer outra letra: "Nota inválida"

2. **Calculadora Simples**
   - Solicite dois números e uma operação (+, -, *, /).
   - Use `switch/case` para realizar a operação escolhida e exibir o resultado.

3. **Classificação de Idade**
   - Peça ao usuário para informar sua faixa etária:
     - 1: Criança
     - 2: Adolescente
     - 3: Adulto
     - 4: Idoso
   - Exiba a mensagem correspondente.

4. **Mês do Ano**
   - Solicite um número de 1 a 12 e mostre o nome do mês correspondente.

## Dicas para Resolver os Exercícios

- Sempre utilize o comando `break` após cada caso, para evitar que o programa execute casos subsequentes (efeito chamado de "fall-through").
- Utilize o bloco `default` para tratar entradas inválidas.
- Lembre-se de validar a entrada do usuário antes de processar, quando possível.

## Conclusão

A estrutura `switch/case` é uma poderosa ferramenta para seleção entre múltiplas opções, tornando o código mais limpo e fácil de manter. Praticar exercícios com essa estrutura ajuda a fixar o conceito e prepara o estudante para situações comuns no desenvolvimento de algoritmos e programas.

> **Pratique!** Resolva os exercícios propostos e experimente criar seus próprios menus e seleções usando `switch/case`. Isso fortalecerá sua base em lógica de programação e facilitará o aprendizado de qualquer linguagem no futuro.
```
