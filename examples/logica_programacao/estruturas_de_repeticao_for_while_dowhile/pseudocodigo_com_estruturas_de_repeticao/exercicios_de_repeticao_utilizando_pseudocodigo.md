
# Exercícios de Repetição Utilizando Pseudocódigo

As estruturas de repetição são fundamentais na lógica de programação, pois permitem executar um conjunto de instruções várias vezes, de acordo com uma condição estabelecida. Os comandos mais comuns para repetição são: **for**, **while** e **do-while**. Para fixar o entendimento desses conceitos, é essencial praticar com exercícios que utilizem pseudocódigo, uma linguagem intermediária entre o português e a linguagem de programação, facilitando o raciocínio lógico.

A seguir, apresentamos exercícios práticos de repetição utilizando pseudocódigo, acompanhados de explicações para auxiliar no desenvolvimento do pensamento lógico.

---

## 1. Imprimir Números de 1 a 10

**Enunciado:**  
Escreva um pseudocódigo que imprima os números de 1 a 10 utilizando uma estrutura de repetição.

**Pseudocódigo:**
```
Para i de 1 até 10 faça
    Escreva(i)
FimPara
```

**Explicação:**  
O comando `Para` (equivalente ao `for`) repete o bloco de instruções enquanto a variável `i` estiver entre 1 e 10, imprimindo cada valor.

---

## 2. Somar os Números de 1 a N

**Enunciado:**  
Solicite ao usuário um número inteiro positivo N e calcule a soma de todos os números de 1 até N.

**Pseudocódigo:**
```
Leia(N)
soma ← 0
Para i de 1 até N faça
    soma ← soma + i
FimPara
Escreva("A soma é: ", soma)
```

**Explicação:**  
A variável `soma` acumula o resultado da soma dos números de 1 até N, utilizando um laço `Para`.

---

## 3. Tabuada de um Número

**Enunciado:**  
Peça ao usuário um número e mostre a tabuada desse número de 1 a 10.

**Pseudocódigo:**
```
Leia(numero)
Para i de 1 até 10 faça
    resultado ← numero * i
    Escreva(numero, " x ", i, " = ", resultado)
FimPara
```

**Explicação:**  
O laço `Para` multiplica o número informado pelo usuário por cada valor de 1 a 10, exibindo o resultado.

---

## 4. Contagem Regressiva com While

**Enunciado:**  
Utilizando a estrutura `enquanto` (`while`), faça um pseudocódigo que imprima uma contagem regressiva de 10 até 1.

**Pseudocódigo:**
```
contador ← 10
Enquanto contador ≥ 1 faça
    Escreva(contador)
    contador ← contador - 1
FimEnquanto
```

**Explicação:**  
O laço `Enquanto` repete o bloco enquanto a condição for verdadeira, decrementando o contador a cada iteração.

---

## 5. Leitura de Números até Valor Negativo (do-while)

**Enunciado:**  
Solicite ao usuário que digite números inteiros. O programa deve continuar lendo e somando os valores até que um número negativo seja digitado. Ao final, exiba a soma.

**Pseudocódigo:**
```
soma ← 0
Repita
    Leia(numero)
    Se numero ≥ 0 então
        soma ← soma + numero
    FimSe
Até numero < 0
Escreva("A soma dos números é: ", soma)
```

**Explicação:**  
O laço `Repita...Até` (equivalente ao `do-while`) garante que o bloco será executado pelo menos uma vez, somando os números até que um valor negativo seja informado.

---

## 6. Exercício Proposto

**Enunciado:**  
Crie um pseudocódigo que leia 5 idades e calcule a média.

**Pseudocódigo:**
```
soma ← 0
Para i de 1 até 5 faça
    Escreva("Digite a idade ", i, ": ")
    Leia(idade)
    soma ← soma + idade
FimPara
media ← soma / 5
Escreva("A média das idades é: ", media)
```

---

## Dicas para Praticar

- Tente modificar os exercícios, por exemplo, mudando o número de repetições ou as condições de parada.
- Experimente implementar os mesmos exercícios utilizando diferentes estruturas de repetição.
- Sempre escreva o pseudocódigo antes de partir para uma linguagem de programação.

---

## Conclusão

A prática com exercícios de repetição em pseudocódigo é essencial para consolidar o entendimento das estruturas de controle. Com esses exemplos, você estará mais preparado para analisar problemas, criar algoritmos eficientes e, futuramente, implementar soluções em qualquer linguagem de programação.
```
