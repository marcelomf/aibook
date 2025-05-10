
# Exercícios de Testes de Múltiplas Condições em Algoritmos

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que algoritmos tomem diferentes caminhos de execução conforme determinadas condições. Entre as situações mais comuns está a necessidade de testar múltiplas condições para decidir qual ação tomar. Este tópico apresenta exercícios práticos para fixação do conceito de testes de múltiplas condições, utilizando as estruturas `if`, `else if`, `else` e `switch`.

## Por que testar múltiplas condições?

Em muitos problemas, uma única verificação não é suficiente. Por exemplo, ao classificar a faixa etária de uma pessoa, é preciso testar se a idade está em diferentes intervalos. Da mesma forma, ao calcular descontos progressivos, é necessário verificar em qual faixa de valor a compra se encaixa.

## Estruturas Utilizadas

- **if / else if / else**: Permite testar várias condições em sequência.
- **switch**: Útil quando se deseja comparar uma variável com vários valores fixos.

## Exemplos Práticos

### Exemplo 1: Classificação de Notas

```pseudocode
Leia nota

Se nota >= 9
    Escreva "Excelente"
Senão se nota >= 7
    Escreva "Bom"
Senão se nota >= 5
    Escreva "Regular"
Senão
    Escreva "Insuficiente"
```

### Exemplo 2: Identificação de Dias da Semana

```pseudocode
Leia numero_dia

switch (numero_dia)
    caso 1: Escreva "Domingo"
    caso 2: Escreva "Segunda-feira"
    caso 3: Escreva "Terça-feira"
    caso 4: Escreva "Quarta-feira"
    caso 5: Escreva "Quinta-feira"
    caso 6: Escreva "Sexta-feira"
    caso 7: Escreva "Sábado"
    padrão: Escreva "Dia inválido"
```

---

## Exercícios Propostos

### 1. Classificação de Idade

**Enunciado:**  
Leia a idade de uma pessoa e escreva na tela a sua classificação:
- Menor de 12 anos: "Criança"
- De 12 a 17 anos: "Adolescente"
- De 18 a 59 anos: "Adulto"
- 60 anos ou mais: "Idoso"

**Dica:** Use `if`, `else if` e `else` para testar as faixas de idade.

---

### 2. Calculadora de Descontos

**Enunciado:**  
Leia o valor de uma compra e aplique o desconto conforme a tabela:
- Até R$ 100,00: sem desconto
- De R$ 100,01 até R$ 500,00: 5% de desconto
- Acima de R$ 500,00: 10% de desconto

Exiba o valor final da compra.

---

### 3. Verificação de Triângulo

**Enunciado:**  
Leia três valores correspondentes aos lados de um triângulo e informe:
- "Equilátero" se todos os lados forem iguais
- "Isósceles" se dois lados forem iguais
- "Escaleno" se todos os lados forem diferentes

---

### 4. Menu de Opções

**Enunciado:**  
Apresente um menu com as opções:
1. Cadastrar usuário  
2. Excluir usuário  
3. Listar usuários  
4. Sair  

Leia a opção escolhida e exiba a ação correspondente. Se a opção for inválida, exiba uma mensagem de erro.

**Dica:** Use a estrutura `switch`.

---

## Dicas para Resolver os Exercícios

- **Analise as condições:** Identifique quantas condições precisam ser testadas e em qual ordem.
- **Evite sobreposição:** Certifique-se de que as condições são mutuamente exclusivas, quando necessário.
- **Use fluxogramas:** Desenhar o fluxo de decisão pode ajudar a visualizar o algoritmo.
- **Teste com diferentes valores:** Verifique se todas as possibilidades estão cobertas.

---

## Conclusão

Testar múltiplas condições é uma habilidade essencial para criar algoritmos robustos e eficientes. Praticar com exercícios variados ajuda a fixar o uso correto das estruturas de decisão, preparando o estudante para desafios mais complexos em qualquer linguagem de programação.

---
```
