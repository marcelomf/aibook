# Algoritmo para Converter Temperaturas de Celsius para Fahrenheit

A conversão de temperaturas entre diferentes escalas é um dos exemplos clássicos utilizados no estudo de lógica de programação. Entre as escalas mais conhecidas, estão Celsius (°C) e Fahrenheit (°F). Compreender como criar um algoritmo para realizar essa conversão é um excelente exercício para fixar conceitos como variáveis, operadores aritméticos, entrada e saída de dados.

## Fórmula de Conversão

A relação matemática para converter uma temperatura de Celsius para Fahrenheit é dada pela seguinte fórmula:

```
F = (C × 1,8) + 32
```

Onde:
- **C** é a temperatura em graus Celsius.
- **F** é a temperatura equivalente em graus Fahrenheit.

## Passos do Algoritmo

Vamos descrever, passo a passo, como construir um algoritmo simples para realizar essa conversão:

1. **Início**
2. Solicitar ao usuário que informe a temperatura em Celsius.
3. Ler o valor informado e armazenar em uma variável.
4. Calcular a temperatura em Fahrenheit utilizando a fórmula.
5. Exibir o resultado ao usuário.
6. **Fim**

## Pseudocódigo

Abaixo, apresentamos o algoritmo em pseudocódigo, uma forma intermediária entre a linguagem natural e a programação, que facilita o entendimento da lógica:

```plaintext
Início
    Escreva "Digite a temperatura em Celsius:"
    Leia celsius
    fahrenheit ← (celsius × 1.8) + 32
    Escreva "A temperatura em Fahrenheit é: ", fahrenheit
Fim
```

## Fluxograma

O fluxograma a seguir ilustra visualmente o fluxo do algoritmo:

```
[Início]
   |
   v
[Pergunta: Digite a temperatura em Celsius]
   |
   v
[Entrada: celsius]
   |
   v
[Processo: fahrenheit = (celsius × 1,8) + 32]
   |
   v
[Saída: Exibe fahrenheit]
   |
   v
[Fim]
```

## Exemplo Prático

Vamos supor que o usuário informe o valor **25** para a temperatura em Celsius.

- Aplicando a fórmula:
  - fahrenheit = (25 × 1,8) + 32
  - fahrenheit = 45 + 32
  - fahrenheit = **77**

Portanto, 25°C equivalem a 77°F.

## Exercício Proposto

Tente modificar o algoritmo para permitir que o usuário converta várias temperaturas, repetindo o processo até que ele decida sair.

---

## Conclusão

Este exemplo de algoritmo para converter temperaturas de Celsius para Fahrenheit demonstra como aplicar conceitos fundamentais da lógica de programação, como variáveis, operadores aritméticos, entrada e saída de dados. Exercícios como este são essenciais para desenvolver o raciocínio lógico e preparar o estudante para desafios mais complexos no desenvolvimento de software.