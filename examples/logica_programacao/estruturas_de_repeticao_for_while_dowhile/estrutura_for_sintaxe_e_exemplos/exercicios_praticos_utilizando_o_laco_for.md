
# Exercícios Práticos Utilizando o Laço `for`

O laço `for` é uma das estruturas de repetição mais utilizadas na programação. Ele permite executar um bloco de código um número determinado de vezes, sendo ideal para situações em que já se conhece previamente a quantidade de repetições necessárias. A seguir, apresentamos uma série de exercícios práticos para fixar o uso do laço `for`, acompanhados de explicações e exemplos em pseudocódigo.

---

## 1. Imprimindo Números de 1 a 10

**Enunciado:**  
Utilize o laço `for` para imprimir na tela os números de 1 a 10.

**Pseudocódigo:**
```
para i de 1 até 10 faça
    escreva(i)
fim-para
```

**Explicação:**  
Neste exercício, a variável `i` começa em 1 e é incrementada até atingir 10. A cada iteração, o valor de `i` é exibido.

---

## 2. Somando Números de 1 a N

**Enunciado:**  
Solicite ao usuário um número inteiro positivo `N` e utilize o laço `for` para calcular a soma de todos os números de 1 até `N`.

**Pseudocódigo:**
```
leia(N)
soma ← 0
para i de 1 até N faça
    soma ← soma + i
fim-para
escreva("A soma é: ", soma)
```

**Explicação:**  
A cada iteração, o valor de `i` é somado à variável `soma`, que ao final conterá o resultado desejado.

---

## 3. Tabuada de um Número

**Enunciado:**  
Peça ao usuário um número inteiro e utilize o laço `for` para exibir a tabuada desse número de 1 a 10.

**Pseudocódigo:**
```
leia(numero)
para i de 1 até 10 faça
    resultado ← numero * i
    escreva(numero, " x ", i, " = ", resultado)
fim-para
```

**Explicação:**  
O laço multiplica o número informado pelo usuário por cada valor de 1 a 10, mostrando o resultado em cada linha.

---

## 4. Números Pares de 1 a 20

**Enunciado:**  
Utilize o laço `for` para imprimir todos os números pares de 1 a 20.

**Pseudocódigo:**
```
para i de 2 até 20 passo 2 faça
    escreva(i)
fim-para
```

**Explicação:**  
Neste caso, o laço começa em 2 e incrementa de 2 em 2, garantindo que apenas os números pares sejam exibidos.

---

## 5. Fatorial de um Número

**Enunciado:**  
Solicite ao usuário um número inteiro positivo e utilize o laço `for` para calcular o fatorial desse número.

**Pseudocódigo:**
```
leia(N)
fatorial ← 1
para i de 1 até N faça
    fatorial ← fatorial * i
fim-para
escreva("O fatorial de ", N, " é: ", fatorial)
```

**Explicação:**  
O fatorial de um número é o produto de todos os inteiros positivos até esse número. O laço multiplica progressivamente o valor de `fatorial` por cada `i`.

---

## 6. Lendo e Somando Vários Valores

**Enunciado:**  
Peça ao usuário para informar 5 números inteiros. Utilize o laço `for` para ler cada número e calcular a soma total.

**Pseudocódigo:**
```
soma ← 0
para i de 1 até 5 faça
    escreva("Digite o ", i, "º número: ")
    leia(numero)
    soma ← soma + numero
fim-para
escreva("A soma dos números é: ", soma)
```

**Explicação:**  
O laço é utilizado para repetir a leitura e soma dos números cinco vezes.

---

## Dicas para Praticar

- Tente modificar os exercícios, alterando os intervalos ou condições do laço.
- Experimente aninhar laços `for` para criar padrões ou resolver problemas mais complexos, como matrizes.
- Sempre teste seus algoritmos com diferentes valores para garantir que funcionam corretamente.

---

## Conclusão

A prática com exercícios utilizando o laço `for` é fundamental para consolidar o entendimento sobre estruturas de repetição. Com esses exemplos, você estará mais preparado para resolver problemas que envolvem repetições controladas, um conceito essencial na lógica de programação.
```
