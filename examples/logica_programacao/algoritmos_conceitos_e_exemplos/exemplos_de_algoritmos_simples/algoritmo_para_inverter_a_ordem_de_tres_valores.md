# Algoritmo para Inverter a Ordem de Três Valores

A inversão da ordem de valores é um exercício clássico em lógica de programação, muito útil para fixar conceitos como manipulação de variáveis, atribuição de valores e uso de variáveis auxiliares. Neste tópico, vamos aprender como criar um algoritmo simples para inverter a ordem de três valores, utilizando pseudocódigo e fluxograma para facilitar o entendimento.

## Entendendo o Problema

Dado três valores armazenados em variáveis, por exemplo:  
- **A** = 1  
- **B** = 2  
- **C** = 3  

O objetivo é inverter a ordem desses valores, de modo que:  
- **A** passe a ter o valor de **C**  
- **B** passe a ter o valor de **B** (ou seja, permanece igual)  
- **C** passe a ter o valor de **A** original

No entanto, geralmente, o exercício pede para inverter completamente a ordem, ou seja:  
- **A** recebe o valor de **C**  
- **B** recebe o valor de **B** (permanece igual)  
- **C** recebe o valor de **A**  

Mas, para inverter totalmente (ficando C, B, A), o correto é:  
- **A** recebe o valor de **C**  
- **B** recebe o valor de **B** (permanece igual)  
- **C** recebe o valor de **A**  

Porém, para garantir que nenhum valor seja perdido durante a troca, é necessário utilizar uma variável auxiliar.

## Passo a Passo do Algoritmo

1. **Ler os três valores e armazená-los em variáveis A, B e C.**
2. **Utilizar variáveis auxiliares para armazenar temporariamente os valores originais.**
3. **Atribuir os valores de forma invertida.**
4. **Exibir o resultado.**

## Pseudocódigo

Veja abaixo um exemplo de pseudocódigo para inverter a ordem de três valores:

```plaintext
Início
    Leia A, B, C

    // Utilizando variáveis auxiliares
    AUX_A <- A
    AUX_B <- B
    AUX_C <- C

    A <- AUX_C
    B <- AUX_B
    C <- AUX_A

    Escreva "Valores invertidos:"
    Escreva "A = ", A
    Escreva "B = ", B
    Escreva "C = ", C
Fim
```

## Explicação

- **AUX_A**, **AUX_B** e **AUX_C** são variáveis auxiliares que armazenam os valores originais de **A**, **B** e **C**.
- Após armazenar os valores originais, fazemos as atribuições invertendo a ordem:  
  - **A** recebe o valor de **C**  
  - **B** permanece igual  
  - **C** recebe o valor de **A** original

## Fluxograma

Abaixo, um fluxograma simplificado do algoritmo:

```
+-------------------+
|   Início          |
+-------------------+
         |
         v
+-------------------+
| Ler A, B, C       |
+-------------------+
         |
         v
+-------------------+
| AUX_A <- A        |
| AUX_B <- B        |
| AUX_C <- C        |
+-------------------+
         |
         v
+-------------------+
| A <- AUX_C        |
| B <- AUX_B        |
| C <- AUX_A        |
+-------------------+
         |
         v
+-------------------+
| Exibir A, B, C    |
+-------------------+
         |
         v
+-------------------+
|   Fim             |
+-------------------+
```

## Exemplo Prático

Suponha que o usuário informe os valores:

- **A = 5**
- **B = 8**
- **C = 2**

Após executar o algoritmo, teremos:

- **A = 2**
- **B = 8**
- **C = 5**

## Considerações Finais

Este exemplo simples demonstra a importância de utilizar variáveis auxiliares para evitar a perda de dados durante a troca de valores. A lógica apresentada pode ser adaptada para inverter a ordem de mais valores, bastando aumentar o número de variáveis e seguir o mesmo raciocínio.

Compreender e praticar algoritmos como este é fundamental para desenvolver o raciocínio lógico necessário para a programação, independentemente da linguagem escolhida futuramente.