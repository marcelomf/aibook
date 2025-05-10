# Exercícios de If Simples: Decisões Binárias

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa escolha diferentes caminhos de execução de acordo com determinadas condições. O comando `if` é a estrutura mais básica e utilizada para tomar decisões binárias, ou seja, quando há apenas dois caminhos possíveis: executar um bloco de código se a condição for verdadeira, ou simplesmente seguir adiante se for falsa.

Neste tópico, você encontrará explicações, exemplos e exercícios práticos sobre o uso do `if` simples, essenciais para fixar o conceito de decisões binárias.

---

## O que é uma Decisão Binária?

Uma decisão binária ocorre quando precisamos escolher entre duas possibilidades: **sim** ou **não**, **verdadeiro** ou **falso**. No contexto da programação, isso é feito avaliando uma condição lógica. Se a condição for satisfeita (verdadeira), um bloco de código é executado; caso contrário, o programa segue seu fluxo normalmente.

### Sintaxe Básica do If Simples

No pseudocódigo, a estrutura do `if` simples pode ser representada assim:

```plaintext
SE condição ENTÃO
    // instruções a serem executadas se a condição for verdadeira
FIM_SE
```

Em muitas linguagens de programação, a sintaxe é semelhante a:

```c
if (condicao) {
    // instruções
}
```

---

## Exemplos Práticos

### Exemplo 1: Verificar se um número é positivo

```plaintext
Leia número
SE número > 0 ENTÃO
    Escreva "O número é positivo."
FIM_SE
```

### Exemplo 2: Verificar se o usuário é maior de idade

```plaintext
Leia idade
SE idade >= 18 ENTÃO
    Escreva "Você é maior de idade."
FIM_SE
```

---

## Exercícios Propostos

A seguir, alguns exercícios para praticar o uso do `if` simples em decisões binárias. Tente resolver utilizando pseudocódigo ou fluxograma.

### Exercício 1

**Enunciado:**  
Leia um número inteiro e informe se ele é par.

**Dica:**  
Um número é par se o resto da divisão por 2 for igual a zero.

---

### Exercício 2

**Enunciado:**  
Leia a nota de um aluno e informe se ele foi aprovado. Considere que a nota mínima para aprovação é 6.

---

### Exercício 3

**Enunciado:**  
Leia a temperatura de um ambiente e informe se está acima de 30 graus.

---

### Exercício 4

**Enunciado:**  
Leia o saldo de uma conta bancária e informe se está negativo.

---

### Exercício 5

**Enunciado:**  
Leia a idade de uma pessoa e informe se ela pode votar (idade mínima para votar: 16 anos).

---

## Respostas Sugeridas (Pseudocódigo)

### Exercício 1

```plaintext
Leia numero
SE numero % 2 = 0 ENTÃO
    Escreva "O número é par."
FIM_SE
```

### Exercício 2

```plaintext
Leia nota
SE nota >= 6 ENTÃO
    Escreva "Aprovado."
FIM_SE
```

### Exercício 3

```plaintext
Leia temperatura
SE temperatura > 30 ENTÃO
    Escreva "Temperatura acima de 30 graus."
FIM_SE
```

### Exercício 4

```plaintext
Leia saldo
SE saldo < 0 ENTÃO
    Escreva "Saldo negativo."
FIM_SE
```

### Exercício 5

```plaintext
Leia idade
SE idade >= 16 ENTÃO
    Escreva "Pode votar."
FIM_SE
```

---

## Dicas para Praticar

- Sempre identifique claramente a condição que precisa ser avaliada.
- Lembre-se de que o `if` simples só executa o bloco de código se a condição for verdadeira.
- Teste seus algoritmos com diferentes valores de entrada para garantir que funcionam corretamente.

---

## Conclusão

O domínio das decisões binárias com o `if` simples é essencial para qualquer iniciante em programação. Praticar com exercícios variados ajuda a fixar o conceito e prepara o estudante para estruturas mais complexas, como o `if-else` e o `switch`. Continue praticando e experimentando diferentes situações para fortalecer sua lógica de programação!