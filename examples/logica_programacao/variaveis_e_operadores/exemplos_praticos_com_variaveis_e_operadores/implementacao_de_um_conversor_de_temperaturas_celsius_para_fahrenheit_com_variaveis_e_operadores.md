
# Implementação de um Conversor de Temperaturas (Celsius para Fahrenheit) com Variáveis e Operadores

A manipulação de variáveis e operadores é um dos primeiros passos para quem está aprendendo lógica de programação. Um exemplo clássico e bastante didático para praticar esses conceitos é a criação de um conversor de temperaturas, que transforma valores de Celsius para Fahrenheit. Neste tópico, vamos entender como implementar essa solução utilizando variáveis e operadores aritméticos.

## 1. Entendendo o Problema

O objetivo é criar um algoritmo que receba uma temperatura em graus Celsius e converta esse valor para graus Fahrenheit. Para isso, precisamos conhecer a fórmula matemática da conversão:

\[
F = C \times \frac{9}{5} + 32
\]

Onde:
- **C** é a temperatura em Celsius (entrada do usuário)
- **F** é a temperatura em Fahrenheit (resultado da conversão)

## 2. Definindo as Variáveis

Para implementar o conversor, precisaremos de:
- Uma variável para armazenar a temperatura em Celsius (entrada)
- Uma variável para armazenar o resultado em Fahrenheit (saída)

Exemplo de declaração de variáveis em pseudocódigo:

```
variável celsius: real
variável fahrenheit: real
```

## 3. Utilizando Operadores

A conversão utiliza operadores aritméticos:
- Multiplicação (`*`)
- Divisão (`/`)
- Adição (`+`)

Esses operadores serão aplicados conforme a fórmula apresentada.

## 4. Exemplo em Pseudocódigo

Veja como ficaria a implementação em pseudocódigo:

```
Início
    Escreva("Digite a temperatura em Celsius: ")
    Leia(celsius)
    fahrenheit <- (celsius * 9 / 5) + 32
    Escreva("A temperatura em Fahrenheit é: ", fahrenheit)
Fim
```

## 5. Exemplo em Fluxograma

O fluxograma a seguir representa o passo a passo do algoritmo:

```
[Início]
   |
   v
[Pergunta: Digite a temperatura em Celsius]
   |
   v
[Lê valor de Celsius]
   |
   v
[Calcula: fahrenheit = (celsius * 9 / 5) + 32]
   |
   v
[Exibe resultado em Fahrenheit]
   |
   v
[Fim]
```

## 6. Exemplo Prático em Python

Para ilustrar a aplicação em uma linguagem de programação, veja o exemplo em Python:

```python
# Solicita ao usuário a temperatura em Celsius
celsius = float(input("Digite a temperatura em Celsius: "))

# Realiza a conversão para Fahrenheit
fahrenheit = (celsius * 9 / 5) + 32

# Exibe o resultado
print("A temperatura em Fahrenheit é:", fahrenheit)
```

## 7. Pontos Importantes

- **Tipos de variáveis:** Use o tipo `real` (ou `float`) para permitir valores decimais.
- **Ordem das operações:** Respeite a ordem das operações matemáticas para obter o resultado correto.
- **Entrada e saída:** Sempre peça ao usuário o valor de entrada e mostre o resultado de forma clara.

## 8. Exercício Proposto

Implemente um conversor que faça o caminho inverso: receba uma temperatura em Fahrenheit e converta para Celsius. Qual é a fórmula? Tente escrever o pseudocódigo e, se possível, implemente em uma linguagem de sua escolha.

---

Com este exemplo, você praticou o uso de variáveis e operadores, além de entender como estruturar um algoritmo simples e funcional. Esse tipo de exercício é fundamental para consolidar os conceitos básicos da lógica de programação.
```
