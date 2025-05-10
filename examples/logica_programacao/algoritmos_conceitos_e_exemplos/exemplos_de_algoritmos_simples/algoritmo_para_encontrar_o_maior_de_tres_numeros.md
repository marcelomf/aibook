
# Algoritmo para Encontrar o Maior de Três Números

Encontrar o maior valor entre três números é um dos exercícios mais clássicos e importantes para quem está começando a estudar lógica de programação. Esse tipo de problema ajuda a compreender conceitos fundamentais como variáveis, operadores relacionais e estruturas de decisão. A seguir, vamos explorar como construir um algoritmo simples para resolver essa tarefa, utilizando pseudocódigo e fluxograma.

---

## 1. Entendendo o Problema

Dado três números (por exemplo, `A`, `B` e `C`), o objetivo é identificar qual deles possui o maior valor. Esse tipo de algoritmo é útil em diversas situações, como comparar notas, preços ou qualquer outro conjunto de valores numéricos.

---

## 2. Passos para Resolver

Para encontrar o maior entre três números, podemos seguir os seguintes passos:

1. **Receber os três números como entrada.**
2. **Comparar os números entre si utilizando estruturas de decisão.**
3. **Armazenar ou exibir o maior valor encontrado.**

---

## 3. Pseudocódigo

Veja abaixo um exemplo de pseudocódigo para resolver esse problema:

```plaintext
Início
    Leia A
    Leia B
    Leia C

    Se (A >= B) e (A >= C) então
        Maior <- A
    Senão se (B >= A) e (B >= C) então
        Maior <- B
    Senão
        Maior <- C
    FimSe

    Escreva "O maior número é: ", Maior
Fim
```

**Explicação:**
- O algoritmo compara `A` com `B` e `C`. Se `A` for maior ou igual aos outros dois, ele é o maior.
- Caso contrário, compara `B` com os outros dois. Se for maior ou igual, `B` é o maior.
- Se nenhuma das condições anteriores for verdadeira, então `C` é o maior.

---

## 4. Fluxograma

Abaixo está um fluxograma simplificado para ilustrar o processo:

```
[Início]
   |
   v
[Leia A, B, C]
   |
   v
[A >= B e A >= C?] --Sim--> [Maior = A]
   |                             |
  Não                            v
   |                      [Exibe Maior]
   v
[B >= A e B >= C?] --Sim--> [Maior = B]
   |                             |
  Não                            v
   |                      [Maior = C]
   v                             |
[Exibe Maior] <------------------
   |
   v
[Fim]
```

---

## 5. Exemplo Prático

Vamos supor que os valores lidos sejam:

- A = 8
- B = 15
- C = 12

O algoritmo irá comparar:

- 8 >= 15 e 8 >= 12? **Não**
- 15 >= 8 e 15 >= 12? **Sim**

Portanto, o maior número é **15**.

---

## 6. Boas Práticas

- **Validação de entrada:** Certifique-se de que os valores inseridos são realmente números.
- **Clareza:** Use nomes de variáveis que representem bem o que armazenam.
- **Reutilização:** Esse algoritmo pode ser adaptado para encontrar o maior de mais números, utilizando estruturas de repetição.

---

## 7. Conclusão

O algoritmo para encontrar o maior de três números é um excelente exercício para praticar estruturas de decisão e lógica básica. Compreender esse tipo de problema é fundamental para avançar em conceitos mais complexos de programação e algoritmos.

---
```
