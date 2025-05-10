
# Exemplos Práticos de Fluxogramas para Algoritmos Simples

A representação de algoritmos por meio de fluxogramas é uma das formas mais visuais e intuitivas de compreender o fluxo de execução de um programa. Os fluxogramas utilizam símbolos padronizados para ilustrar operações, decisões e o caminho que os dados percorrem durante a execução de um algoritmo. A seguir, apresentamos exemplos práticos de fluxogramas para algoritmos simples, fundamentais para quem está iniciando na lógica de programação.

---

## 1. Fluxograma para Somar Dois Números

**Descrição:**  
Este algoritmo solicita ao usuário dois números, realiza a soma e exibe o resultado.

**Passos do Algoritmo:**
1. Início
2. Ler o primeiro número
3. Ler o segundo número
4. Calcular a soma
5. Exibir o resultado
6. Fim

**Fluxograma:**

```
[Início]
   |
[Ler número 1]
   |
[Ler número 2]
   |
[Somar número 1 + número 2]
   |
[Exibir resultado]
   |
[Fim]
```

---

## 2. Fluxograma para Verificar se um Número é Par ou Ímpar

**Descrição:**  
Este algoritmo lê um número e informa se ele é par ou ímpar.

**Passos do Algoritmo:**
1. Início
2. Ler o número
3. Verificar se o número é divisível por 2
4. Se sim, exibir "Par"
5. Se não, exibir "Ímpar"
6. Fim

**Fluxograma:**

```
[Início]
   |
[Ler número]
   |
[O número % 2 == 0?]
   |         \
[Sim]      [Não]
   |           \
[Exibir "Par"]  [Exibir "Ímpar"]
   |           /
   [Fim]
```

---

## 3. Fluxograma para Calcular a Média de Três Notas

**Descrição:**  
Este algoritmo lê três notas, calcula a média e informa se o aluno foi aprovado (média ≥ 7) ou reprovado.

**Passos do Algoritmo:**
1. Início
2. Ler as três notas
3. Calcular a média
4. Se média ≥ 7, exibir "Aprovado"
5. Se não, exibir "Reprovado"
6. Fim

**Fluxograma:**

```
[Início]
   |
[Ler nota 1]
   |
[Ler nota 2]
   |
[Ler nota 3]
   |
[Calcular média]
   |
[Média >= 7?]
   |         \
[Sim]      [Não]
   |           \
[Exibir "Aprovado"]  [Exibir "Reprovado"]
   |           /
   [Fim]
```

---

## 4. Fluxograma para Contagem de 1 até 5

**Descrição:**  
Este algoritmo exibe os números de 1 a 5 utilizando uma estrutura de repetição.

**Passos do Algoritmo:**
1. Início
2. Inicializar contador em 1
3. Enquanto contador ≤ 5, exibir contador e incrementar
4. Fim

**Fluxograma:**

```
[Início]
   |
[contador = 1]
   |
[contador <= 5?]
   |         \
[Sim]      [Não]
   |           \
[Exibir contador]
   |
[contador = contador + 1]
   |
[Volta para verificação]
   |
   [Fim]
```

---

## Considerações Finais

Os fluxogramas são ferramentas essenciais para a visualização e compreensão de algoritmos, especialmente para iniciantes. Eles facilitam a identificação de etapas, decisões e repetições, tornando o desenvolvimento de soluções lógicas mais claro e organizado. Praticar a criação de fluxogramas para algoritmos simples é um passo importante para adquirir uma base sólida em lógica de programação, antes mesmo de partir para uma linguagem específica.

---
```