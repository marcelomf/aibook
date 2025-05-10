
# Exercícios de Pseudocódigo para Fixação dos Conceitos

A prática é fundamental para consolidar o aprendizado em lógica de programação. Por isso, nesta seção, você encontrará uma seleção de exercícios de pseudocódigo, elaborados para reforçar os principais conceitos apresentados ao longo do ebook. Os exercícios abrangem variáveis, operadores, estruturas de decisão, estruturas de repetição e a construção de algoritmos simples. Recomendamos que você tente resolver cada exercício antes de consultar as soluções, desenvolvendo assim sua capacidade de análise e raciocínio lógico.

---

## 1. Variáveis e Operadores

**Exercício 1:**  
Crie um pseudocódigo que leia dois números inteiros, some-os e exiba o resultado.

```pseudocode
Início
    Leia numero1
    Leia numero2
    soma <- numero1 + numero2
    Escreva "A soma é: ", soma
Fim
```

---

## 2. Estruturas de Decisão

**Exercício 2:**  
Elabore um pseudocódigo que leia a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.

```pseudocode
Início
    Leia idade
    Se idade >= 18 então
        Escreva "Maior de idade"
    Senão
        Escreva "Menor de idade"
Fim
```

---

## 3. Estruturas de Repetição

**Exercício 3:**  
Crie um pseudocódigo que leia 5 números e calcule a média deles.

```pseudocode
Início
    soma <- 0
    Para i de 1 até 5 faça
        Leia numero
        soma <- soma + numero
    FimPara
    media <- soma / 5
    Escreva "A média é: ", media
Fim
```

---

## 4. Algoritmo de Busca Simples

**Exercício 4:**  
Faça um pseudocódigo que leia 10 números e informe se existe algum número igual a 0.

```pseudocode
Início
    encontrouZero <- FALSO
    Para i de 1 até 10 faça
        Leia numero
        Se numero = 0 então
            encontrouZero <- VERDADEIRO
        FimSe
    FimPara
    Se encontrouZero então
        Escreva "Existe pelo menos um número igual a zero."
    Senão
        Escreva "Não existe número igual a zero."
Fim
```

---

## 5. Exercício de Fluxograma (Desafio)

**Exercício 5:**  
Desenhe um fluxograma para um algoritmo que leia um número e informe se ele é positivo, negativo ou zero.

*Dica: Utilize blocos de decisão para cada condição.*

---

## Dicas para Praticar

- **Tente modificar os exercícios:** Por exemplo, altere a quantidade de números lidos ou as condições das decisões.
- **Implemente em uma linguagem real:** Após criar o pseudocódigo, tente implementá-lo em uma linguagem de programação de sua escolha.
- **Crie seus próprios desafios:** Pense em situações do dia a dia que podem ser resolvidas com algoritmos simples.

---

## Conclusão

A resolução de exercícios é uma das melhores formas de fixar os conceitos de lógica de programação. O pseudocódigo permite que você foque na lógica, sem se preocupar com a sintaxe específica de uma linguagem. Continue praticando, busque novos desafios e, sempre que possível, compartilhe suas soluções com outros aprendizes. Assim, você estará cada vez mais preparado para avançar no mundo do desenvolvimento de software!
```
