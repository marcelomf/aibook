
# Exercícios Resolvidos de Estruturas de Repetição (for, while, do-while)

As estruturas de repetição são fundamentais na lógica de programação, pois permitem executar um bloco de código várias vezes, de acordo com uma condição. As três principais estruturas são: **for**, **while** e **do-while**. A seguir, apresentamos exercícios resolvidos utilizando cada uma dessas estruturas, com explicações detalhadas e exemplos em pseudocódigo.

---

## 1. Exercício com `for`: Imprimir Números de 1 a 10

**Enunciado:**  
Escreva um algoritmo que imprima na tela os números de 1 a 10.

**Resolução:**

O laço `for` é ideal quando sabemos exatamente o número de repetições.

**Pseudocódigo:**
```
para i de 1 até 10 faça
    escreva(i)
fim-para
```

**Explicação:**  
- A variável `i` começa em 1 e vai até 10, incrementando de 1 em 1.
- A cada iteração, o valor de `i` é impresso.

---

## 2. Exercício com `while`: Soma dos Números até um Valor Informado

**Enunciado:**  
Solicite ao usuário um número inteiro positivo `N` e calcule a soma de todos os números de 1 até `N` usando o laço `while`.

**Resolução:**

O laço `while` é útil quando não sabemos previamente quantas vezes o bloco será executado, dependendo de uma condição.

**Pseudocódigo:**
```
leia(N)
soma <- 0
contador <- 1

enquanto contador <= N faça
    soma <- soma + contador
    contador <- contador + 1
fim-enquanto

escreva("A soma é: ", soma)
```

**Explicação:**  
- O contador começa em 1 e vai até `N`.
- A cada iteração, soma-se o valor do contador à variável `soma`.
- O laço termina quando o contador ultrapassa `N`.

---

## 3. Exercício com `do-while`: Validação de Entrada

**Enunciado:**  
Peça ao usuário para digitar um número entre 1 e 5. Repita a solicitação até que um valor válido seja informado.

**Resolução:**

O laço `do-while` garante que o bloco de código será executado pelo menos uma vez, ideal para validação de entrada.

**Pseudocódigo:**
```
faça
    escreva("Digite um número entre 1 e 5: ")
    leia(numero)
enquanto numero < 1 ou numero > 5

escreva("Você digitou: ", numero)
```

**Explicação:**  
- O bloco dentro do `faça...enquanto` é executado ao menos uma vez.
- O laço continua enquanto o número digitado estiver fora do intervalo de 1 a 5.

---

## 4. Exercício de Fixação: Tabuada de um Número

**Enunciado:**  
Solicite ao usuário um número inteiro e exiba a tabuada desse número de 1 a 10 utilizando o laço `for`.

**Resolução:**

**Pseudocódigo:**
```
leia(numero)

para i de 1 até 10 faça
    resultado <- numero * i
    escreva(numero, " x ", i, " = ", resultado)
fim-para
```

**Explicação:**  
- O laço `for` percorre de 1 a 10.
- Em cada iteração, calcula-se o produto do número informado pelo usuário e o valor de `i`.
- O resultado é exibido em formato de tabuada.

---

## 5. Exercício de Contagem Regressiva com `while`

**Enunciado:**  
Imprima uma contagem regressiva de 10 até 1 usando o laço `while`.

**Resolução:**

**Pseudocódigo:**
```
contador <- 10

enquanto contador >= 1 faça
    escreva(contador)
    contador <- contador - 1
fim-enquanto
```

**Explicação:**  
- O contador inicia em 10 e é decrementado a cada iteração.
- O laço termina quando o contador chega a 0.

---

## Conclusão

Os exercícios apresentados demonstram como as estruturas de repetição são aplicadas na resolução de problemas comuns em programação. Praticar com diferentes tipos de laços (for, while, do-while) é essencial para desenvolver raciocínio lógico e criar algoritmos eficientes. Ao dominar essas estruturas, você estará preparado para enfrentar desafios mais complexos em qualquer linguagem de programação.
```
