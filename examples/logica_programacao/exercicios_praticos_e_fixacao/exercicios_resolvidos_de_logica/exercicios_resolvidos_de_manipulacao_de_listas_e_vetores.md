# Exercícios Resolvidos de Manipulação de Listas e Vetores

A manipulação de listas (ou vetores) é um dos pilares da lógica de programação. Saber como criar, acessar, modificar e percorrer listas é fundamental para resolver problemas do dia a dia no desenvolvimento de software. Neste tópico, apresentamos exercícios resolvidos que envolvem operações básicas e intermediárias com listas/vetores, utilizando pseudocódigo e fluxogramas para facilitar o entendimento.

---

## Exercício 1: Soma dos Elementos de um Vetor

**Enunciado:**  
Dado um vetor de 5 números inteiros, calcule e exiba a soma de todos os elementos.

### Pseudocódigo

```
Algoritmo SomaVetor
    Declare vetor[5] como inteiro
    Declare soma como inteiro
    soma ← 0

    Para i de 0 até 4 faça
        Escreva("Digite o elemento ", i+1, ": ")
        Leia(vetor[i])
        soma ← soma + vetor[i]
    FimPara

    Escreva("A soma dos elementos é: ", soma)
FimAlgoritmo
```

### Explicação

- O vetor é preenchido com 5 valores fornecidos pelo usuário.
- A cada iteração, o valor lido é somado à variável `soma`.
- Ao final, o resultado é exibido.

---

## Exercício 2: Encontrar o Maior Elemento de uma Lista

**Enunciado:**  
Leia 8 números inteiros e armazene em uma lista. Em seguida, exiba o maior valor encontrado.

### Pseudocódigo

```
Algoritmo MaiorElemento
    Declare lista[8] como inteiro
    Declare maior como inteiro

    Para i de 0 até 7 faça
        Escreva("Digite o elemento ", i+1, ": ")
        Leia(lista[i])
    FimPara

    maior ← lista[0]

    Para i de 1 até 7 faça
        Se lista[i] > maior então
            maior ← lista[i]
        FimSe
    FimPara

    Escreva("O maior elemento é: ", maior)
FimAlgoritmo
```

### Explicação

- Os valores são lidos e armazenados na lista.
- Inicializa-se a variável `maior` com o primeiro elemento.
- Percorre-se a lista comparando cada elemento com o valor atual de `maior`, atualizando-o se encontrar um valor maior.

---

## Exercício 3: Inverter uma Lista

**Enunciado:**  
Leia 6 números inteiros em uma lista e exiba-os na ordem inversa.

### Pseudocódigo

```
Algoritmo InverterLista
    Declare lista[6] como inteiro

    Para i de 0 até 5 faça
        Escreva("Digite o elemento ", i+1, ": ")
        Leia(lista[i])
    FimPara

    Escreva("Elementos na ordem inversa:")
    Para i de 5 até 0 passo -1 faça
        Escreva(lista[i])
    FimPara
FimAlgoritmo
```

### Explicação

- Os elementos são lidos normalmente.
- Um segundo laço percorre a lista de trás para frente, exibindo os valores.

---

## Exercício 4: Contar Números Pares em um Vetor

**Enunciado:**  
Dado um vetor de 10 números inteiros, conte quantos são pares.

### Pseudocódigo

```
Algoritmo ContarPares
    Declare vetor[10] como inteiro
    Declare contador como inteiro
    contador ← 0

    Para i de 0 até 9 faça
        Escreva("Digite o elemento ", i+1, ": ")
        Leia(vetor[i])
        Se vetor[i] % 2 = 0 então
            contador ← contador + 1
        FimSe
    FimPara

    Escreva("Quantidade de números pares: ", contador)
FimAlgoritmo
```

### Explicação

- Para cada elemento lido, verifica-se se é par (resto da divisão por 2 igual a zero).
- O contador é incrementado sempre que um número par é encontrado.

---

## Exercício 5: Buscar um Elemento em uma Lista

**Enunciado:**  
Leia 7 números inteiros em uma lista e peça ao usuário um número para buscar. Informe se o número está presente na lista.

### Pseudocódigo

```
Algoritmo BuscarElemento
    Declare lista[7] como inteiro
    Declare numeroBusca como inteiro
    Declare encontrado como lógico
    encontrado ← FALSO

    Para i de 0 até 6 faça
        Escreva("Digite o elemento ", i+1, ": ")
        Leia(lista[i])
    FimPara

    Escreva("Digite o número a buscar: ")
    Leia(numeroBusca)

    Para i de 0 até 6 faça
        Se lista[i] = numeroBusca então
            encontrado ← VERDADEIRO
            Pare
        FimSe
    FimPara

    Se encontrado então
        Escreva("Número encontrado na lista.")
    Senão
        Escreva("Número não encontrado.")
    FimSe
FimAlgoritmo
```

### Explicação

- O algoritmo lê os elementos e o número a ser buscado.
- Percorre a lista e, se encontrar o número, define `encontrado` como verdadeiro e interrompe a busca.
- Exibe o resultado ao usuário.

---

## Conclusão

A manipulação de listas e vetores é essencial para a resolução de problemas em programação. Os exercícios apresentados abordam operações comuns, como soma, busca, contagem, inversão e identificação de elementos. Praticar esses conceitos com pseudocódigo e fluxogramas ajuda a consolidar o raciocínio lógico, preparando o estudante para desafios mais avançados em qualquer linguagem de programação.

---

**Dica:**  
Após entender e resolver esses exercícios em pseudocódigo, tente implementá-los em uma linguagem de programação de sua escolha (como Python, Java ou C). Isso reforçará ainda mais seu aprendizado!