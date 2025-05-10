# Como Expressar Repetições (for, while) em Pseudocódigo

A utilização de estruturas de repetição é fundamental na lógica de programação, pois permite executar um conjunto de instruções várias vezes, de acordo com uma condição ou um número determinado de vezes. Em pseudocódigo, as repetições são representadas de forma clara e próxima da linguagem natural, facilitando o entendimento do algoritmo antes de sua implementação em uma linguagem de programação específica.

Neste tópico, vamos abordar como expressar as principais estruturas de repetição em pseudocódigo: **for** e **while**.

---

## Estrutura de Repetição **for**

A estrutura **for** é utilizada quando sabemos antecipadamente o número de vezes que um bloco de comandos deve ser executado. Ela é ideal para percorrer sequências, como listas ou intervalos numéricos.

### Sintaxe Básica

```plaintext
PARA variável DE valor_inicial ATÉ valor_final PASSO incremento FAÇA
    // comandos a serem executados
FIMPARA
```

- **variável**: variável de controle do laço.
- **valor_inicial**: valor inicial da variável.
- **valor_final**: valor final até onde o laço irá.
- **incremento**: valor pelo qual a variável será incrementada a cada iteração (opcional, padrão é 1).

### Exemplo

Imprimir os números de 1 a 5:

```plaintext
PARA i DE 1 ATÉ 5 FAÇA
    ESCREVA(i)
FIMPARA
```

Imprimir os números pares de 2 a 10:

```plaintext
PARA i DE 2 ATÉ 10 PASSO 2 FAÇA
    ESCREVA(i)
FIMPARA
```

---

## Estrutura de Repetição **while**

A estrutura **while** (enquanto) é utilizada quando não sabemos antecipadamente quantas vezes o bloco de comandos será executado. O laço continua enquanto uma condição for verdadeira.

### Sintaxe Básica

```plaintext
ENQUANTO condição FAÇA
    // comandos a serem executados
FIMENQUANTO
```

- **condição**: expressão lógica que será avaliada antes de cada iteração. Se for verdadeira, o bloco é executado; caso contrário, o laço termina.

### Exemplo

Imprimir os números de 1 a 5 usando **while**:

```plaintext
i ← 1
ENQUANTO i ≤ 5 FAÇA
    ESCREVA(i)
    i ← i + 1
FIMENQUANTO
```

---

## Estrutura de Repetição **do-while** (Repita-Até)

Alguns algoritmos exigem que o bloco de comandos seja executado pelo menos uma vez, independentemente da condição. Para isso, usamos a estrutura **repita-até** (equivalente ao do-while em algumas linguagens).

### Sintaxe Básica

```plaintext
REPITA
    // comandos a serem executados
ATÉ condição
```

- O bloco é executado repetidamente até que a condição seja verdadeira.

### Exemplo

Ler números do usuário até que ele digite 0:

```plaintext
REPITA
    LEIA(numero)
    ESCREVA("Você digitou: ", numero)
ATÉ numero = 0
```

---

## Boas Práticas ao Escrever Repetições em Pseudocódigo

- Use nomes de variáveis claros e descritivos.
- Indente corretamente os comandos dentro dos blocos de repetição.
- Certifique-se de que a condição de parada será atingida para evitar laços infinitos.
- Comente o pseudocódigo quando necessário para explicar a lógica.

---

## Conclusão

Expressar repetições em pseudocódigo é uma habilidade essencial para a construção de algoritmos eficientes e compreensíveis. As estruturas **for**, **while** e **repita-até** permitem resolver uma ampla variedade de problemas, desde tarefas simples até operações mais complexas. Dominar essas estruturas é um passo importante para o desenvolvimento de soluções lógicas e para a transição para qualquer linguagem de programação.