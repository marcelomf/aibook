
# Exercícios de Modularização e Reutilização de Código em Pseudocódigo

A modularização é um dos conceitos mais importantes na lógica de programação e no desenvolvimento de software. Ela consiste em dividir um programa em partes menores e independentes, chamadas de módulos, funções ou procedimentos. Essa prática facilita a organização, manutenção, compreensão e reutilização do código, além de permitir que diferentes partes do programa sejam desenvolvidas e testadas separadamente.

Neste tópico, você encontrará exercícios práticos de pseudocódigo que exploram a modularização e a reutilização de código. Os exemplos apresentados ajudarão a consolidar esses conceitos fundamentais, preparando você para aplicá-los em qualquer linguagem de programação.

---

## Por que Modularizar?

- **Organização:** Programas grandes tornam-se mais fáceis de entender e manter quando divididos em módulos.
- **Reutilização:** Funções e procedimentos podem ser reutilizados em diferentes partes do programa ou em outros projetos.
- **Facilidade de Testes:** Módulos independentes podem ser testados separadamente, facilitando a identificação de erros.
- **Colaboração:** Em equipes, diferentes pessoas podem trabalhar em módulos distintos simultaneamente.

---

## Estrutura Básica de Modularização em Pseudocódigo

Em pseudocódigo, a modularização é representada por procedimentos (procedures) e funções (functions). Veja um exemplo simples:

```pseudocode
Algoritmo ExemploDeModularizacao
    Início
        resultado <- Soma(5, 3)
        Escreva("Resultado da soma: ", resultado)
    Fim

Função Soma(a, b)
    Início
        Retorne a + b
    Fim
```

---

## Exercício 1: Cálculo de Média com Função

**Enunciado:**  
Crie um pseudocódigo modularizado que leia três notas de um aluno, calcule a média utilizando uma função e exiba o resultado.

**Solução:**

```pseudocode
Algoritmo CalculoDeMedia
    Início
        Leia(nota1)
        Leia(nota2)
        Leia(nota3)
        media <- CalcularMedia(nota1, nota2, nota3)
        Escreva("A média do aluno é: ", media)
    Fim

Função CalcularMedia(n1, n2, n3)
    Início
        Retorne (n1 + n2 + n3) / 3
    Fim
```

---

## Exercício 2: Verificação de Número Primo com Reutilização

**Enunciado:**  
Implemente um pseudocódigo que leia um número e utilize uma função para verificar se ele é primo. O resultado deve ser exibido ao usuário.

**Solução:**

```pseudocode
Algoritmo VerificaNumeroPrimo
    Início
        Leia(numero)
        se EhPrimo(numero) então
            Escreva(numero, " é primo.")
        senão
            Escreva(numero, " não é primo.")
        fimse
    Fim

Função EhPrimo(n)
    Início
        se n < 2 então
            Retorne FALSO
        fimse
        para i de 2 até n-1 faça
            se n mod i = 0 então
                Retorne FALSO
            fimse
        fimpara
        Retorne VERDADEIRO
    Fim
```

---

## Exercício 3: Reutilização de Função para Cálculo de Fatorial

**Enunciado:**  
Crie um pseudocódigo que leia dois números e, para cada um, calcule o fatorial utilizando uma função reutilizável.

**Solução:**

```pseudocode
Algoritmo FatorialDeDoisNumeros
    Início
        Leia(num1)
        Leia(num2)
        fat1 <- Fatorial(num1)
        fat2 <- Fatorial(num2)
        Escreva("Fatorial de ", num1, ": ", fat1)
        Escreva("Fatorial de ", num2, ": ", fat2)
    Fim

Função Fatorial(n)
    Início
        resultado <- 1
        para i de 1 até n faça
            resultado <- resultado * i
        fimpara
        Retorne resultado
    Fim
```

---

## Dicas para Modularização e Reutilização

- **Nomeie funções e procedimentos de forma clara e objetiva.**
- **Evite duplicação de código:** sempre que identificar uma tarefa repetida, transforme-a em um módulo.
- **Mantenha cada função com uma única responsabilidade.**
- **Documente a finalidade de cada módulo, mesmo em pseudocódigo.**

---

## Conclusão

A prática da modularização e da reutilização de código é essencial para o desenvolvimento de programas eficientes, organizados e fáceis de manter. Ao resolver exercícios utilizando funções e procedimentos em pseudocódigo, você estará desenvolvendo habilidades fundamentais para a programação em qualquer linguagem. Continue praticando, criando seus próprios módulos e buscando sempre a clareza e a organização em seus algoritmos!
```
