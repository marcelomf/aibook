
# Exemplos Práticos de Conversão de Tipos em Pseudocódigo

A conversão de tipos, também chamada de **coerção de tipos**, é um conceito fundamental na lógica de programação. Ela consiste em transformar um valor de um tipo de dado para outro, como de texto (string) para número (inteiro ou real), ou vice-versa. Essa prática é essencial quando precisamos realizar operações matemáticas com valores inseridos pelo usuário (que geralmente chegam como texto) ou quando queremos exibir resultados numéricos como parte de uma mensagem.

Neste tópico, vamos apresentar exemplos práticos de conversão de tipos utilizando **pseudocódigo**, uma linguagem intermediária que facilita o entendimento da lógica antes da implementação em uma linguagem de programação específica.

---

## 1. Conversão de String para Inteiro

Quando o usuário digita um valor, normalmente ele é lido como texto (string). Para realizar operações matemáticas, é necessário converter esse valor para inteiro.

**Exemplo:**

```pseudocode
Algoritmo SomaDeDoisNumeros
    Declare texto1, texto2: String
    Declare numero1, numero2, soma: Inteiro

    Escreva("Digite o primeiro número: ")
    Leia(texto1)
    Escreva("Digite o segundo número: ")
    Leia(texto2)

    numero1 <- ConverteParaInteiro(texto1)
    numero2 <- ConverteParaInteiro(texto2)

    soma <- numero1 + numero2

    Escreva("A soma é: ", soma)
FimAlgoritmo
```

**Explicação:**  
As funções `ConverteParaInteiro` transformam o texto digitado em valores inteiros, permitindo a soma.

---

## 2. Conversão de String para Real (Decimal)

Para cálculos com números decimais, convertemos a string para o tipo real.

**Exemplo:**

```pseudocode
Algoritmo CalculoDeMedia
    Declare nota1Texto, nota2Texto: String
    Declare nota1, nota2, media: Real

    Escreva("Digite a primeira nota: ")
    Leia(nota1Texto)
    Escreva("Digite a segunda nota: ")
    Leia(nota2Texto)

    nota1 <- ConverteParaReal(nota1Texto)
    nota2 <- ConverteParaReal(nota2Texto)

    media <- (nota1 + nota2) / 2

    Escreva("A média é: ", media)
FimAlgoritmo
```

---

## 3. Conversão de Número para String

Às vezes, é necessário converter um número para texto, por exemplo, para concatenar em uma mensagem.

**Exemplo:**

```pseudocode
Algoritmo ExibeMensagemComNumero
    Declare idade: Inteiro
    Declare mensagem: String

    Escreva("Digite sua idade: ")
    Leia(idade)

    mensagem <- "Você tem " + ConverteParaString(idade) + " anos."

    Escreva(mensagem)
FimAlgoritmo
```

---

## 4. Conversão Implícita

Em alguns casos, a conversão pode ser feita automaticamente pelo interpretador, mas é sempre recomendado fazer a conversão de forma explícita para evitar erros.

**Exemplo:**

```pseudocode
Algoritmo SomaComConversaoImplicita
    Declare numero: Inteiro
    Declare texto: String

    numero <- 10
    texto <- "5"

    // Conversão explícita
    resultado <- numero + ConverteParaInteiro(texto)

    Escreva("Resultado: ", resultado)
FimAlgoritmo
```

---

## 5. Conversão de Real para Inteiro

Quando precisamos descartar a parte decimal de um número real.

**Exemplo:**

```pseudocode
Algoritmo ArredondaParaBaixo
    Declare valorReal: Real
    Declare valorInteiro: Inteiro

    valorReal <- 7.89
    valorInteiro <- ConverteParaInteiro(valorReal)

    Escreva("Valor inteiro: ", valorInteiro)
FimAlgoritmo
```

---

## Resumo

A conversão de tipos é uma ferramenta indispensável na lógica de programação. Ela garante que os dados estejam no formato correto para cada operação, evitando erros e tornando os algoritmos mais robustos. Ao praticar a conversão de tipos em pseudocódigo, você estará mais preparado para lidar com diferentes situações em qualquer linguagem de programação.

---
```
