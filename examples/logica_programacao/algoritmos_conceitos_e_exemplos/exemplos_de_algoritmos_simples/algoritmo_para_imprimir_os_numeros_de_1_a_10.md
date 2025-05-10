# Algoritmo para Imprimir os Números de 1 a 10

Imprimir uma sequência de números é um dos primeiros exercícios propostos para quem está começando a aprender lógica de programação. Esse tipo de algoritmo é fundamental para compreender conceitos como **estrutura de repetição**, **variáveis** e **fluxo de execução**. A seguir, vamos explorar como criar um algoritmo simples para imprimir os números de 1 a 10, utilizando pseudocódigo e fluxograma.

---

## 1. Entendendo o Problema

O objetivo é criar um algoritmo que exiba, na tela, os números de 1 até 10, um após o outro. Para isso, precisamos de uma estrutura que repita uma ação (imprimir um número) enquanto uma condição for verdadeira (o número for menor ou igual a 10).

---

## 2. Passos do Algoritmo

1. **Iniciar** o algoritmo.
2. **Declarar** uma variável para controlar o número atual (por exemplo, `i`).
3. **Atribuir** o valor 1 à variável `i`.
4. **Enquanto** `i` for menor ou igual a 10, faça:
    - Imprimir o valor de `i`.
    - Incrementar `i` em 1.
5. **Finalizar** o algoritmo.

---

## 3. Pseudocódigo

O pseudocódigo é uma forma de descrever algoritmos utilizando uma linguagem próxima do português, facilitando o entendimento antes da implementação em uma linguagem de programação específica.

```plaintext
Início
    Para i de 1 até 10 faça
        Imprimir i
    FimPara
Fim
```

Ou, utilizando a estrutura "enquanto":

```plaintext
Início
    i ← 1
    Enquanto i ≤ 10 faça
        Imprimir i
        i ← i + 1
    FimEnquanto
Fim
```

---

## 4. Fluxograma

O fluxograma é uma representação gráfica do algoritmo, mostrando o fluxo de execução das etapas.

```plaintext
+-------------------+
|   Início          |
+-------------------+
          |
          v
+-------------------+
| i ← 1             |
+-------------------+
          |
          v
+-------------------+
| i ≤ 10 ?          |
+-------------------+
     | Sim   | Não
     v       |
+-------------------+   |
| Imprimir i        |   |
+-------------------+   |
          |             |
          v             |
+-------------------+   |
| i ← i + 1         |   |
+-------------------+   |
          |             |
          +-------------+
          |
          v
+-------------------+
|   Fim             |
+-------------------+
```

---

## 5. Exemplo em Linguagem de Programação

Veja como esse algoritmo pode ser implementado em diferentes linguagens:

### Python

```python
for i in range(1, 11):
    print(i)
```

### Portugol (pseudolinguagem)

```portugol
para i de 1 até 10 faça
    escreva(i)
fimpara
```

---

## 6. Explicação

- **Estrutura de repetição**: Utilizamos o laço `para` (ou `enquanto`) para repetir a ação de imprimir o número.
- **Variável de controle**: A variável `i` armazena o valor atual a ser impresso e é incrementada a cada repetição.
- **Condição de parada**: O laço termina quando `i` ultrapassa o valor 10.

---

## 7. Conclusão

Este exemplo simples demonstra como a lógica de programação pode ser aplicada para resolver problemas básicos. Compreender como criar algoritmos para tarefas como essa é essencial para desenvolver habilidades em programação e serve de base para desafios mais complexos no futuro.

---

**Exercício sugerido:**  
Modifique o algoritmo para imprimir apenas os números pares de 1 a 10.