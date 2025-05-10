# Exercícios de Busca de Valores em Listas com Estruturas de Repetição

A busca de valores em listas é uma das tarefas mais comuns na programação. Utilizando as estruturas de repetição `for`, `while` e `do-while`, é possível percorrer listas (ou vetores/arrays) para encontrar elementos, contar ocorrências ou identificar posições específicas. Neste tópico, você aprenderá como aplicar essas estruturas para resolver problemas práticos de busca em listas, utilizando pseudocódigo e exemplos didáticos.

---

## 1. Conceito de Busca em Listas

Buscar um valor em uma lista significa percorrer todos os elementos até encontrar (ou não) o valor desejado. Esse processo é chamado de **busca linear** ou **busca sequencial**. É fundamental para diversas aplicações, como localizar um nome em uma lista de contatos ou verificar se um número já foi cadastrado.

---

## 2. Estruturas de Repetição Aplicadas à Busca

### 2.1. Usando o `for`

O laço `for` é ideal quando você sabe exatamente quantos elementos há na lista. Ele permite percorrer cada posição de forma controlada.

**Exemplo de pseudocódigo:**

```pseudocode
lista = [10, 20, 30, 40, 50]
valor_procurado = 30
encontrado = falso

para i de 0 até tamanho(lista) - 1 faça
    se lista[i] == valor_procurado então
        encontrado = verdadeiro
        escreva("Valor encontrado na posição ", i)
        pare
    fimse
fimpara

se não encontrado então
    escreva("Valor não encontrado na lista.")
```

---

### 2.2. Usando o `while`

O laço `while` é útil quando você não sabe quantas iterações serão necessárias, pois pode interromper assim que encontrar o valor.

**Exemplo de pseudocódigo:**

```pseudocode
lista = [10, 20, 30, 40, 50]
valor_procurado = 40
i = 0
encontrado = falso

enquanto i < tamanho(lista) e não encontrado faça
    se lista[i] == valor_procurado então
        encontrado = verdadeiro
        escreva("Valor encontrado na posição ", i)
    fimse
    i = i + 1
fimenquanto

se não encontrado então
    escreva("Valor não encontrado na lista.")
```

---

### 2.3. Usando o `do-while`

O laço `do-while` garante que o bloco de código será executado pelo menos uma vez, sendo útil em situações onde a lista pode ser modificada durante a busca.

**Exemplo de pseudocódigo:**

```pseudocode
lista = [10, 20, 30, 40, 50]
valor_procurado = 60
i = 0
encontrado = falso

faça
    se lista[i] == valor_procurado então
        encontrado = verdadeiro
        escreva("Valor encontrado na posição ", i)
    fimse
    i = i + 1
enquanto i < tamanho(lista) e não encontrado

se não encontrado então
    escreva("Valor não encontrado na lista.")
```

---

## 3. Exercícios Práticos

### Exercício 1: Buscar um valor em uma lista

**Enunciado:**  
Dada uma lista de números inteiros, peça ao usuário um valor e informe se ele está presente na lista e em qual posição.

**Dica:** Use qualquer estrutura de repetição.

---

### Exercício 2: Contar ocorrências de um valor

**Enunciado:**  
Dada uma lista de nomes, conte quantas vezes um nome específico aparece.

---

### Exercício 3: Encontrar o maior valor em uma lista

**Enunciado:**  
Percorra uma lista de números e encontre o maior valor presente.

---

## 4. Boas Práticas

- **Interrompa a busca** assim que encontrar o valor, se não for necessário continuar.
- **Valide os índices** para evitar acessar posições inválidas.
- **Comunique claramente** ao usuário o resultado da busca.

---

## 5. Conclusão

A busca de valores em listas é um exercício fundamental para fixar o uso das estruturas de repetição. Praticar com diferentes tipos de listas e condições de busca ajuda a desenvolver o raciocínio lógico e prepara para desafios mais avançados em programação.

---

**Pratique!**  
Implemente os exercícios acima em pseudocódigo ou na linguagem de sua preferência. Experimente modificar as condições de busca e observe como as estruturas de repetição se comportam em cada situação.