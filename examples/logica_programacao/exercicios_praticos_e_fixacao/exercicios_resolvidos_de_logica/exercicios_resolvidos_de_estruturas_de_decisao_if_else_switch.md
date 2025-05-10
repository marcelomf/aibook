# Exercícios Resolvidos de Estruturas de Decisão (if, else, switch)

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa tome diferentes caminhos de execução conforme determinadas condições. As principais estruturas de decisão são o `if`, `else` e `switch`. A seguir, apresentamos exercícios resolvidos que ilustram o uso dessas estruturas, utilizando pseudocódigo e explicações detalhadas.

---

## Exercício 1: Verificando se um número é par ou ímpar

**Enunciado:**  
Crie um algoritmo que leia um número inteiro e informe se ele é par ou ímpar.

**Resolução em pseudocódigo:**

```plaintext
Início
    Leia numero
    Se (numero % 2 == 0) então
        Escreva "O número é par."
    Senão
        Escreva "O número é ímpar."
Fim
```

**Explicação:**  
O operador `%` retorna o resto da divisão. Se o resto da divisão do número por 2 for igual a zero, o número é par; caso contrário, é ímpar.

---

## Exercício 2: Calculando a média e aprovando o aluno

**Enunciado:**  
Leia as duas notas de um aluno, calcule a média e informe se ele está aprovado (média maior ou igual a 6), em recuperação (média entre 4 e 6) ou reprovado (média menor que 4).

**Resolução em pseudocódigo:**

```plaintext
Início
    Leia nota1
    Leia nota2
    media ← (nota1 + nota2) / 2
    Se (media >= 6) então
        Escreva "Aprovado"
    Senão se (media >= 4) então
        Escreva "Recuperação"
    Senão
        Escreva "Reprovado"
Fim
```

**Explicação:**  
Utilizamos a estrutura `if-else if-else` para verificar as três situações possíveis, de acordo com o valor da média.

---

## Exercício 3: Calculadora simples com switch

**Enunciado:**  
Crie um algoritmo que leia dois números e uma operação (+, -, *, /) e exiba o resultado da operação escolhida.

**Resolução em pseudocódigo:**

```plaintext
Início
    Leia numero1
    Leia numero2
    Leia operacao
    Escolha operacao
        Caso "+"
            resultado ← numero1 + numero2
            Escreva "Resultado: ", resultado
        Caso "-"
            resultado ← numero1 - numero2
            Escreva "Resultado: ", resultado
        Caso "*"
            resultado ← numero1 * numero2
            Escreva "Resultado: ", resultado
        Caso "/"
            Se (numero2 != 0) então
                resultado ← numero1 / numero2
                Escreva "Resultado: ", resultado
            Senão
                Escreva "Erro: divisão por zero."
        Padrão
            Escreva "Operação inválida."
Fim
```

**Explicação:**  
O comando `switch` (ou `escolha` no pseudocódigo) permite selecionar a operação a ser realizada. Para a divisão, é importante verificar se o divisor não é zero para evitar erro de execução.

---

## Exercício 4: Classificando faixa etária

**Enunciado:**  
Leia a idade de uma pessoa e informe em qual faixa etária ela se encontra:  
- Criança (0 a 12 anos)  
- Adolescente (13 a 17 anos)  
- Adulto (18 a 59 anos)  
- Idoso (60 anos ou mais)

**Resolução em pseudocódigo:**

```plaintext
Início
    Leia idade
    Se (idade >= 0) e (idade <= 12) então
        Escreva "Criança"
    Senão se (idade >= 13) e (idade <= 17) então
        Escreva "Adolescente"
    Senão se (idade >= 18) e (idade <= 59) então
        Escreva "Adulto"
    Senão se (idade >= 60) então
        Escreva "Idoso"
    Senão
        Escreva "Idade inválida"
Fim
```

**Explicação:**  
As condições são avaliadas em ordem, garantindo que cada faixa etária seja corretamente identificada.

---

## Exercício 5: Verificando múltiplos

**Enunciado:**  
Leia dois números inteiros e informe se o primeiro é múltiplo do segundo.

**Resolução em pseudocódigo:**

```plaintext
Início
    Leia a
    Leia b
    Se (b != 0) então
        Se (a % b == 0) então
            Escreva "O primeiro número é múltiplo do segundo."
        Senão
            Escreva "O primeiro número NÃO é múltiplo do segundo."
    Senão
        Escreva "Divisor inválido (zero)."
Fim
```

**Explicação:**  
Primeiro, verifica-se se o divisor é diferente de zero. Em seguida, utiliza-se o operador `%` para verificar se o resto da divisão é zero, indicando múltiplo.

---

## Conclusão

Os exercícios apresentados demonstram como as estruturas de decisão são essenciais para controlar o fluxo dos algoritmos, permitindo que diferentes ações sejam tomadas conforme as condições estabelecidas. Praticar esses exemplos é fundamental para consolidar o entendimento e preparar-se para desafios mais complexos na programação.