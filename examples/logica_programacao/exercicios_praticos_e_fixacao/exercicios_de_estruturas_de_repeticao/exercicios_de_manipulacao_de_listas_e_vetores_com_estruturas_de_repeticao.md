# Exercícios de Manipulação de Listas e Vetores com Estruturas de Repetição

A manipulação de listas (ou vetores) é uma das habilidades mais importantes na lógica de programação. Listas são estruturas que armazenam múltiplos valores em uma única variável, permitindo o acesso e a modificação de seus elementos de forma eficiente. Para trabalhar com listas, é fundamental dominar as estruturas de repetição, como `for` e `while`, que possibilitam percorrer todos os elementos e realizar operações diversas.

Neste tópico, você encontrará explicações, exemplos práticos e exercícios para fixar o uso de estruturas de repetição na manipulação de listas e vetores.

---

## Por que usar listas e estruturas de repetição?

Imagine que você precisa armazenar as notas de 30 alunos. Seria inviável criar 30 variáveis diferentes. Com listas, você armazena todas as notas em uma única estrutura e pode processá-las facilmente usando laços de repetição.

As estruturas de repetição permitem:

- Percorrer todos os elementos de uma lista.
- Realizar operações como soma, busca, contagem, filtragem, etc.
- Modificar elementos conforme uma condição.

---

## Exemplos Práticos

### 1. Somando os elementos de uma lista

**Pseudocódigo:**
```
lista = [10, 20, 30, 40, 50]
soma = 0

para cada elemento em lista faça
    soma = soma + elemento
fim para

escreva "A soma é: ", soma
```

**Explicação:**  
O laço percorre cada elemento da lista, acumulando o valor na variável `soma`.

---

### 2. Encontrando o maior valor em um vetor

**Pseudocódigo:**
```
vetor = [7, 15, 3, 22, 9]
maior = vetor[0]

para i de 1 até tamanho(vetor) - 1 faça
    se vetor[i] > maior então
        maior = vetor[i]
    fim se
fim para

escreva "O maior valor é: ", maior
```

**Explicação:**  
Começamos assumindo que o primeiro elemento é o maior. O laço compara cada elemento subsequente, atualizando a variável `maior` quando encontra um valor superior.

---

### 3. Contando quantos números pares existem em uma lista

**Pseudocódigo:**
```
numeros = [2, 5, 8, 13, 21, 34]
contagem = 0

para cada numero em numeros faça
    se numero % 2 == 0 então
        contagem = contagem + 1
    fim se
fim para

escreva "Quantidade de números pares: ", contagem
```

**Explicação:**  
O operador `%` retorna o resto da divisão. Se o resto for zero, o número é par.

---

## Exercícios Propostos

### Exercício 1: Média dos Elementos

**Enunciado:**  
Dada uma lista de números inteiros, calcule e exiba a média dos valores.

**Dica:**  
Some todos os elementos e divida pelo total de elementos.

---

### Exercício 2: Busca de Elemento

**Enunciado:**  
Peça ao usuário um número e verifique se ele está presente em uma lista de 10 elementos. Informe a posição (índice) caso encontre.

**Dica:**  
Use um laço para comparar cada elemento da lista com o número informado.

---

### Exercício 3: Invertendo uma Lista

**Enunciado:**  
Dada uma lista, crie uma nova lista com os elementos na ordem inversa.

**Dica:**  
Percorra a lista original de trás para frente, adicionando os elementos à nova lista.

---

### Exercício 4: Filtrando Números Maiores que um Valor

**Enunciado:**  
Dada uma lista de números e um valor X, crie uma nova lista apenas com os números maiores que X.

**Dica:**  
Use um laço e uma estrutura condicional para selecionar os elementos.

---

### Exercício 5: Multiplicando Elementos

**Enunciado:**  
Peça ao usuário um número e multiplique todos os elementos de uma lista por esse número, exibindo o resultado.

**Dica:**  
Altere cada elemento da lista dentro do laço.

---

## Boas Práticas

- **Inicialize variáveis** antes de usá-las em laços.
- **Evite modificar a lista enquanto a percorre** (a menos que seja intencional).
- **Comente seu código** para facilitar o entendimento.
- **Teste com diferentes dados** para garantir que o algoritmo funciona em todos os casos.

---

## Conclusão

A manipulação de listas e vetores com estruturas de repetição é essencial para resolver problemas do dia a dia na programação. Praticar esses exercícios ajudará você a consolidar o entendimento sobre laços e estruturas de dados, preparando-o para desafios mais avançados em qualquer linguagem de programação.

**Pratique bastante!** Quanto mais você exercitar, mais natural será pensar em soluções lógicas e eficientes para manipular dados em listas e vetores.