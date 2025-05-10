
# Exemplos Práticos de Uso de if, else e switch

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que um algoritmo tome diferentes caminhos de execução conforme determinadas condições. Entre as principais estruturas de decisão estão o `if`, o `else` e o `switch`. A seguir, apresentamos exemplos práticos de como utilizá-las para resolver problemas comuns do dia a dia da programação.

---

## 1. Estrutura if

A estrutura `if` (se) é utilizada para executar um bloco de código apenas se uma condição for verdadeira.

### Exemplo 1: Verificar se um número é positivo

```pseudocode
leia numero
se numero > 0 então
    escreva "O número é positivo."
fim_se
```

**Explicação:**  
Neste exemplo, o programa lê um número e verifica se ele é maior que zero. Se a condição for verdadeira, exibe a mensagem correspondente.

---

## 2. Estrutura if...else

A estrutura `if...else` permite executar um bloco de código caso a condição seja verdadeira e outro bloco caso seja falsa.

### Exemplo 2: Verificar se um número é par ou ímpar

```pseudocode
leia numero
se numero % 2 == 0 então
    escreva "O número é par."
senão
    escreva "O número é ímpar."
fim_se
```

**Explicação:**  
O operador `%` calcula o resto da divisão. Se o resto da divisão do número por 2 for igual a zero, o número é par; caso contrário, é ímpar.

---

## 3. Estrutura if...else if...else

Quando há mais de duas possibilidades, pode-se usar a estrutura `if...else if...else`.

### Exemplo 3: Classificar idade

```pseudocode
leia idade
se idade < 12 então
    escreva "Criança"
senão se idade < 18 então
    escreva "Adolescente"
senão
    escreva "Adulto"
fim_se
```

**Explicação:**  
O programa classifica a pessoa conforme a idade informada, utilizando múltiplas condições.

---

## 4. Estrutura switch

A estrutura `switch` (escolha) é útil quando se deseja comparar uma mesma variável com vários valores diferentes, tornando o código mais organizado do que múltiplos `if...else if`.

### Exemplo 4: Menu de opções

```pseudocode
escreva "Escolha uma opção:"
escreva "1 - Novo Jogo"
escreva "2 - Carregar Jogo"
escreva "3 - Sair"
leia opcao

escolha opcao
    caso 1:
        escreva "Iniciando novo jogo..."
        pare
    caso 2:
        escreva "Carregando jogo salvo..."
        pare
    caso 3:
        escreva "Saindo do programa."
        pare
    padrão:
        escreva "Opção inválida."
fim_escolha
```

**Explicação:**  
O usuário escolhe uma opção e o programa executa a ação correspondente. Se a opção não for reconhecida, exibe uma mensagem de erro.

---

## 5. Exemplo Integrado: Calculadora Simples

Vamos unir os conceitos em um exemplo prático de calculadora:

```pseudocode
leia numero1
leia numero2
escreva "Escolha a operação: 1-Soma 2-Subtração 3-Multiplicação 4-Divisão"
leia operacao

escolha operacao
    caso 1:
        resultado = numero1 + numero2
        escreva "Resultado: ", resultado
        pare
    caso 2:
        resultado = numero1 - numero2
        escreva "Resultado: ", resultado
        pare
    caso 3:
        resultado = numero1 * numero2
        escreva "Resultado: ", resultado
        pare
    caso 4:
        se numero2 != 0 então
            resultado = numero1 / numero2
            escreva "Resultado: ", resultado
        senão
            escreva "Erro: Divisão por zero."
        fim_se
        pare
    padrão:
        escreva "Operação inválida."
fim_escolha
```

**Explicação:**  
O programa lê dois números e a operação desejada. Utiliza o `switch` para escolher a operação e, no caso da divisão, utiliza o `if` para evitar divisão por zero.

---

## Conclusão

Os exemplos acima demonstram como as estruturas de decisão `if`, `else` e `switch` são essenciais para controlar o fluxo dos algoritmos, permitindo que o programa reaja de maneira inteligente a diferentes situações. Dominar essas estruturas é um passo fundamental para criar programas eficientes e robustos em qualquer linguagem de programação.
```
