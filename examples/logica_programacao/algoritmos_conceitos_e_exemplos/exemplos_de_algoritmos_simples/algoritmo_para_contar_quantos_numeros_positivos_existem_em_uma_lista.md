
# Algoritmo para Contar Quantos Números Positivos Existem em uma Lista

Contar quantos números positivos existem em uma lista é um exercício clássico de lógica de programação. Esse tipo de problema ajuda a fixar conceitos fundamentais como estruturas de repetição, estruturas de decisão e manipulação de variáveis. A seguir, vamos entender como construir esse algoritmo passo a passo, utilizando pseudocódigo e fluxograma para facilitar o entendimento.

---

## 1. Entendendo o Problema

Dada uma lista de números (que pode conter valores positivos, negativos e zero), queremos saber quantos desses números são positivos. Um número é considerado positivo se for maior que zero.

---

## 2. Passos para Resolver o Problema

1. **Receber a lista de números** (pode ser digitada pelo usuário ou pré-definida).
2. **Inicializar um contador** para armazenar a quantidade de números positivos encontrados.
3. **Percorrer cada elemento da lista**.
4. **Verificar se o número é positivo** (maior que zero).
5. **Se for positivo, incrementar o contador**.
6. **Ao final, exibir o valor do contador**.

---

## 3. Pseudocódigo

Veja abaixo um exemplo de pseudocódigo para esse algoritmo:

```
Início
    Definir lista_numeros como uma lista de números
    Definir contador_positivos como 0

    Para cada numero em lista_numeros faça
        Se numero > 0 então
            contador_positivos <- contador_positivos + 1
        FimSe
    FimPara

    Escrever "Quantidade de números positivos:", contador_positivos
Fim
```

---

## 4. Exemplo Prático

Suponha que a lista seja: `[3, -1, 0, 7, -5, 2]`

- 3 é positivo → contador = 1
- -1 não é positivo → contador permanece 1
- 0 não é positivo → contador permanece 1
- 7 é positivo → contador = 2
- -5 não é positivo → contador permanece 2
- 2 é positivo → contador = 3

**Resultado final:** 3 números positivos.

---

## 5. Fluxograma

Abaixo, um fluxograma simplificado do algoritmo:

```
[Início]
   |
   v
[Definir lista e contador]
   |
   v
[Para cada número na lista]
   |
   v
[O número > 0?] --Não--> [Próximo número]
   | Sim
   v
[Incrementa contador]
   |
   v
[Próximo número]
   |
   v
[Fim da lista?] --Não--> [Para cada número na lista]
   | Sim
   v
[Exibe contador]
   |
   v
[Fim]
```

---

## 6. Exercício Proposto

Implemente esse algoritmo em uma linguagem de sua escolha (por exemplo, Python, JavaScript ou C). Teste com diferentes listas e verifique se o resultado está correto.

---

## 7. Conclusão

Esse exemplo mostra como a lógica de programação pode ser aplicada para resolver problemas do dia a dia de forma simples e eficiente. Compreender como percorrer listas, utilizar estruturas de decisão e manipular variáveis é fundamental para o desenvolvimento de algoritmos mais complexos no futuro.

---
```
