
# Algoritmo para Calcular a Tabuada de um Número

A tabuada é uma das aplicações mais clássicas e didáticas da lógica de programação. Criar um algoritmo para calcular a tabuada de um número é um excelente exercício para fixar conceitos como variáveis, entrada de dados, estruturas de repetição e saída de resultados.

## O que é uma Tabuada?

A tabuada consiste na multiplicação de um número por uma sequência de valores inteiros, geralmente de 1 a 10. Por exemplo, a tabuada do 5 é:

```
5 x 1 = 5  
5 x 2 = 10  
5 x 3 = 15  
...  
5 x 10 = 50
```

## Passos para Criar o Algoritmo

1. **Entrada de Dados:** Solicitar ao usuário o número para o qual deseja calcular a tabuada.
2. **Processamento:** Utilizar uma estrutura de repetição para multiplicar o número informado por cada valor de 1 a 10.
3. **Saída de Dados:** Exibir o resultado de cada multiplicação.

## Exemplo em Pseudocódigo

Veja abaixo um exemplo de algoritmo em pseudocódigo para calcular a tabuada de um número:

```
Início
    Escreva "Digite um número para ver sua tabuada:"
    Leia numero

    Para i de 1 até 10 faça
        resultado ← numero * i
        Escreva numero, " x ", i, " = ", resultado
    FimPara
Fim
```

## Explicação do Algoritmo

- **Leitura do número:** O algoritmo começa solicitando ao usuário que digite o número desejado.
- **Estrutura de repetição:** Um laço `Para` (ou `for`) é utilizado para repetir o cálculo da multiplicação de 1 até 10.
- **Cálculo e exibição:** Em cada repetição, o algoritmo calcula o produto do número pelo valor atual do laço e exibe o resultado formatado.

## Fluxograma do Algoritmo

Abaixo, um fluxograma simplificado do processo:

```
[Início]
   |
   v
[Pedir número]
   |
   v
[Ler número]
   |
   v
[i = 1]
   |
   v
[Enquanto i <= 10]
   |
   v
[Calcular resultado = número * i]
   |
   v
[Exibir resultado]
   |
   v
[i = i + 1]
   |
   v
[Repetir até i > 10]
   |
   v
[Fim]
```

## Exemplo Prático em Pseudocódigo

```
Início
    Escreva "Informe o número:"
    Leia n

    Para i de 1 até 10 faça
        Escreva n, " x ", i, " = ", n * i
    FimPara
Fim
```

## Exercício Proposto

Tente modificar o algoritmo para que o usuário possa escolher até qual número deseja calcular a tabuada (por exemplo, de 1 até 20).

---

Com este exemplo, você compreende como utilizar variáveis, laços de repetição e entrada/saída de dados para resolver um problema prático. A lógica apresentada pode ser facilmente adaptada para qualquer linguagem de programação, servindo como base para desafios mais complexos.
```
