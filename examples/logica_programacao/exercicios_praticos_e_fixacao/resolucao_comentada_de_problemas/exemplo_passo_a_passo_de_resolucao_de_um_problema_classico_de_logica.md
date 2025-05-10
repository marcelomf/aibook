
# Exercícios Práticos e Fixação

## Resolução Comentada de Problemas

### Exemplo Passo a Passo: Resolvendo o Problema do Maior de Três Números

Um dos problemas clássicos de lógica de programação é determinar qual o maior entre três números fornecidos pelo usuário. Esse exercício é fundamental para fixar conceitos como entrada de dados, uso de variáveis, operadores relacionais e estruturas de decisão.

Vamos resolver esse problema passo a passo, utilizando pseudocódigo e fluxograma para facilitar o entendimento.

---

#### **Enunciado do Problema**

> Escreva um algoritmo que leia três números inteiros e informe qual deles é o maior.

---

### **1. Análise do Problema**

Antes de começar a programar, é importante entender o que está sendo pedido:

- **Entradas:** Três números inteiros (A, B, C).
- **Processamento:** Comparar os três números para descobrir qual é o maior.
- **Saída:** Exibir o maior número.

---

### **2. Definição das Variáveis**

Vamos precisar de três variáveis para armazenar os números informados pelo usuário:

- `A`: primeiro número
- `B`: segundo número
- `C`: terceiro número

E uma variável opcional para guardar o maior valor encontrado:

- `maior`: armazena o maior número

---

### **3. Estrutura de Decisão**

Para comparar os números, podemos usar a estrutura condicional `if-else`. Existem várias formas de resolver, mas uma das mais didáticas é comparar dois a dois:

1. Suponha que o primeiro número (`A`) seja o maior.
2. Compare `A` com `B`. Se `B` for maior, atualize o maior para `B`.
3. Compare o maior atual com `C`. Se `C` for maior, atualize o maior para `C`.

---

### **4. Pseudocódigo**

```plaintext
Início
    Leia A
    Leia B
    Leia C

    maior <- A

    Se B > maior então
        maior <- B
    FimSe

    Se C > maior então
        maior <- C
    FimSe

    Escreva "O maior número é: ", maior
Fim
```

---

### **5. Fluxograma**

```plaintext
+-------------------+
|   Início          |
+-------------------+
         |
         v
+-------------------+
| Leia A, B, C      |
+-------------------+
         |
         v
+-------------------+
| maior <- A        |
+-------------------+
         |
         v
+-------------------+
| B > maior?        |
+-------------------+
   |         |
  Sim       Não
   |         |
   v         v
maior<-B     |
   |         |
   v         v
+-------------------+
| C > maior?        |
+-------------------+
   |         |
  Sim       Não
   |         |
   v         v
maior<-C     |
   |         |
   v         v
+-------------------+
| Escreva maior     |
+-------------------+
         |
         v
+-------------------+
|   Fim             |
+-------------------+
```

---

### **6. Exemplo Prático**

Suponha que o usuário informe os valores:  
A = 8, B = 15, C = 12

- Inicialmente, `maior = 8`
- B (15) > maior (8)? **Sim** → `maior = 15`
- C (12) > maior (15)? **Não** → `maior` permanece 15

**Saída:** O maior número é: 15

---

### **7. Boas Práticas**

- Sempre inicialize a variável `maior` com um dos valores de entrada.
- Teste o algoritmo com diferentes valores, inclusive casos em que os números são iguais.
- Comente o código para facilitar o entendimento.

---

### **8. Conclusão**

Esse exemplo ilustra como decompor um problema em etapas lógicas, utilizando variáveis, operadores relacionais e estruturas de decisão. A prática com exercícios como este é fundamental para consolidar os fundamentos da lógica de programação, preparando o leitor para desafios mais complexos e para a transição para qualquer linguagem de programação.

---
```
