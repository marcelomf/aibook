# Exercícios Resolvidos de Busca e Ordenação em Listas

Neste tópico, vamos abordar exercícios práticos e resolvidos sobre dois conceitos fundamentais da lógica de programação: **busca** e **ordenação** em listas. Esses conceitos são essenciais para manipular dados de forma eficiente e são amplamente utilizados em algoritmos e estruturas de dados.

## 1. Busca em Listas

A busca consiste em encontrar um elemento específico dentro de uma lista. Existem diferentes métodos de busca, sendo os mais comuns:

- **Busca Linear (Sequencial)**
- **Busca Binária**

### Exercício 1: Busca Linear

**Enunciado:**  
Dada uma lista de números inteiros, verifique se um determinado número está presente na lista. Caso esteja, informe a posição (índice) em que ele aparece pela primeira vez.

**Exemplo:**  
Lista: `[5, 8, 3, 9, 2]`  
Número a buscar: `9`  
Saída esperada: `O número 9 está na posição 3.`

**Solução em Pseudocódigo:**

```plaintext
Algoritmo BuscaLinear
Entrada: lista[1..n], numero
Para i de 1 até n faça
    Se lista[i] = numero então
        Escreva "O número", numero, "está na posição", i
        Pare
    FimSe
FimPara
Se não encontrou então
    Escreva "O número não está na lista."
FimAlgoritmo
```

**Explicação:**  
A busca linear percorre a lista do início ao fim, comparando cada elemento com o número desejado. É simples, mas pode ser lenta para listas grandes.

---

### Exercício 2: Busca Binária

**Enunciado:**  
Dada uma lista de números inteiros **ordenada em ordem crescente**, verifique se um determinado número está presente na lista utilizando o método de busca binária.

**Exemplo:**  
Lista: `[2, 3, 5, 8, 9]`  
Número a buscar: `5`  
Saída esperada: `O número 5 está na posição 3.`

**Solução em Pseudocódigo:**

```plaintext
Algoritmo BuscaBinaria
Entrada: lista[1..n] (ordenada), numero
inicio ← 1
fim ← n
encontrou ← FALSO
Enquanto inicio ≤ fim e encontrou = FALSO faça
    meio ← (inicio + fim) / 2
    Se lista[meio] = numero então
        encontrou ← VERDADEIRO
        Escreva "O número", numero, "está na posição", meio
    Senão se lista[meio] < numero então
        inicio ← meio + 1
    Senão
        fim ← meio - 1
    FimSe
FimEnquanto
Se encontrou = FALSO então
    Escreva "O número não está na lista."
FimAlgoritmo
```

**Explicação:**  
A busca binária é muito eficiente, pois a cada passo elimina metade da lista. Só pode ser usada em listas ordenadas.

---

## 2. Ordenação de Listas

Ordenar uma lista significa reorganizar seus elementos em uma determinada ordem (crescente ou decrescente). Os algoritmos de ordenação mais conhecidos são:

- **Bubble Sort (Ordenação por Bolha)**
- **Selection Sort (Ordenação por Seleção)**

### Exercício 3: Bubble Sort

**Enunciado:**  
Dada uma lista de números inteiros, ordene-a em ordem crescente utilizando o método Bubble Sort.

**Exemplo:**  
Lista inicial: `[5, 3, 8, 2, 9]`  
Lista ordenada: `[2, 3, 5, 8, 9]`

**Solução em Pseudocódigo:**

```plaintext
Algoritmo BubbleSort
Entrada: lista[1..n]
Para i de 1 até n-1 faça
    Para j de 1 até n-i faça
        Se lista[j] > lista[j+1] então
            temp ← lista[j]
            lista[j] ← lista[j+1]
            lista[j+1] ← temp
        FimSe
    FimPara
FimPara
Escreva "Lista ordenada:", lista
FimAlgoritmo
```

**Explicação:**  
O Bubble Sort compara elementos adjacentes e os troca de posição se estiverem fora de ordem, repetindo o processo até que toda a lista esteja ordenada.

---

### Exercício 4: Selection Sort

**Enunciado:**  
Dada uma lista de números inteiros, ordene-a em ordem crescente utilizando o método Selection Sort.

**Exemplo:**  
Lista inicial: `[5, 3, 8, 2, 9]`  
Lista ordenada: `[2, 3, 5, 8, 9]`

**Solução em Pseudocódigo:**

```plaintext
Algoritmo SelectionSort
Entrada: lista[1..n]
Para i de 1 até n-1 faça
    min ← i
    Para j de i+1 até n faça
        Se lista[j] < lista[min] então
            min ← j
        FimSe
    FimPara
    Se min ≠ i então
        temp ← lista[i]
        lista[i] ← lista[min]
        lista[min] ← temp
    FimSe
FimPara
Escreva "Lista ordenada:", lista
FimAlgoritmo
```

**Explicação:**  
O Selection Sort procura o menor elemento da lista e o coloca na primeira posição, repetindo o processo para as demais posições.

---

## 3. Exercício Prático Integrado

**Enunciado:**  
Dada uma lista de números inteiros, ordene a lista em ordem crescente e, em seguida, utilize a busca binária para verificar se um número informado pelo usuário está presente na lista.

**Solução em Pseudocódigo:**

```plaintext
Algoritmo OrdenaEBusca
Entrada: lista[1..n], numero
// Ordenar a lista (Bubble Sort)
Para i de 1 até n-1 faça
    Para j de 1 até n-i faça
        Se lista[j] > lista[j+1] então
            temp ← lista[j]
            lista[j] ← lista[j+1]
            lista[j+1] ← temp
        FimSe
    FimPara
FimPara
// Buscar o número (Busca Binária)
inicio ← 1
fim ← n
encontrou ← FALSO
Enquanto inicio ≤ fim e encontrou = FALSO faça
    meio ← (inicio + fim) / 2
    Se lista[meio] = numero então
        encontrou ← VERDADEIRO
        Escreva "O número", numero, "está na posição", meio
    Senão se lista[meio] < numero então
        inicio ← meio + 1
    Senão
        fim ← meio - 1
    FimSe
FimEnquanto
Se encontrou = FALSO então
    Escreva "O número não está na lista."
FimAlgoritmo
```

---

## 4. Conclusão

Os exercícios resolvidos acima demonstram como aplicar os conceitos de **busca** e **ordenação** em listas, utilizando pseudocódigo para facilitar o entendimento. Praticar esses algoritmos é fundamental para desenvolver o raciocínio lógico e preparar-se para desafios mais avançados em programação.

> **Dica:** Tente implementar esses algoritmos em uma linguagem de programação de sua escolha para fixar ainda mais o aprendizado!

---

**Exercícios Propostos:**

1. Implemente a busca linear e a busca binária em uma lista de nomes (strings).
2. Modifique o Bubble Sort para ordenar a lista em ordem decrescente.
3. Crie um algoritmo que leia uma lista de números, remova os duplicados e ordene a lista resultante.

---

**Referências:**
- Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Algoritmos: Teoria e Prática*.
- Sedgewick, R., & Wayne, K. (2011). *Algoritmos*.

---

**Pratique e bons estudos!**