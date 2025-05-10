
# Exercícios de if/else: Escolha entre Dois Caminhos

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa tome diferentes rumos de acordo com determinadas condições. O comando `if/else` é a forma mais básica e comum de implementar decisões em algoritmos. Ele possibilita que o fluxo do programa siga por um caminho ou outro, dependendo do resultado de uma expressão lógica (verdadeira ou falsa).

## Entendendo o if/else

A estrutura básica do `if/else` pode ser representada da seguinte forma em pseudocódigo:

```
se (condição) então
    // bloco de comandos se a condição for verdadeira
senão
    // bloco de comandos se a condição for falsa
fimse
```

Ou, em fluxograma, temos um losango (decisão) que direciona o fluxo para dois caminhos: um para "Sim" (verdadeiro) e outro para "Não" (falso).

## Exemplos Práticos

### Exemplo 1: Verificar se um número é positivo ou negativo

```pseudocode
leia numero
se (numero >= 0) então
    escreva "O número é positivo."
senão
    escreva "O número é negativo."
fimse
```

### Exemplo 2: Determinar se uma pessoa é maior de idade

```pseudocode
leia idade
se (idade >= 18) então
    escreva "Maior de idade."
senão
    escreva "Menor de idade."
fimse
```

## Exercícios Propostos

A seguir, alguns exercícios para praticar a estrutura de decisão `if/else`:

### 1. Par ou Ímpar

**Enunciado:**  
Peça ao usuário para digitar um número inteiro. Informe se o número é par ou ímpar.

**Dica:**  
Um número é par se o resto da divisão por 2 for igual a zero.

---

### 2. Aprovação em Prova

**Enunciado:**  
Solicite a nota de um aluno (de 0 a 10). Informe se ele foi aprovado (nota maior ou igual a 6) ou reprovado.

---

### 3. Maior Valor

**Enunciado:**  
Peça dois números ao usuário. Mostre qual deles é o maior.

---

### 4. Desconto em Compra

**Enunciado:**  
Solicite o valor de uma compra. Se o valor for maior ou igual a R$ 100,00, aplique um desconto de 10%. Caso contrário, informe que não há desconto.

---

### 5. Verificação de Senha

**Enunciado:**  
Peça ao usuário para digitar uma senha. Se a senha for igual a "1234", informe "Acesso permitido". Caso contrário, informe "Acesso negado".

---

## Dicas para Resolver os Exercícios

- Leia atentamente o enunciado e identifique qual é a condição a ser testada.
- Use operadores relacionais (==, !=, >, <, >=, <=) para comparar valores.
- Lembre-se de que o bloco `else` é opcional, mas útil quando há apenas dois caminhos possíveis.
- Teste seu algoritmo com diferentes valores para garantir que cobre todos os casos.

## Conclusão

A prática com exercícios de `if/else` é essencial para consolidar o entendimento sobre estruturas de decisão. Ao dominar esse conceito, você estará apto a criar algoritmos que respondem de forma inteligente a diferentes situações, tornando seus programas mais dinâmicos e úteis. Continue praticando e, sempre que possível, tente criar variações dos exercícios para desafiar ainda mais sua lógica!
```
