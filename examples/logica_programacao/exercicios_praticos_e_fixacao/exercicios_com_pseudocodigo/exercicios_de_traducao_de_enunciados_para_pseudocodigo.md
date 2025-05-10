# Exercícios de Tradução de Enunciados para Pseudocódigo

A habilidade de traduzir enunciados de problemas para pseudocódigo é fundamental para quem está começando a aprender lógica de programação. O pseudocódigo serve como uma ponte entre a linguagem humana e a linguagem de programação, permitindo que você estruture suas ideias de forma lógica e compreensível antes de implementá-las em qualquer linguagem específica.

Neste tópico, você encontrará orientações, exemplos e exercícios práticos para desenvolver essa competência essencial.

---

## O que é Pseudocódigo?

Pseudocódigo é uma forma simplificada de descrever algoritmos, utilizando uma linguagem próxima do português (ou do idioma do programador), mas com uma estrutura lógica semelhante à de uma linguagem de programação. Ele não segue regras rígidas de sintaxe, mas deve ser claro, organizado e fácil de entender.

---

## Por que traduzir enunciados para pseudocódigo?

- **Facilita o planejamento da solução** antes da implementação.
- **Ajuda a identificar erros lógicos** antes de codificar.
- **Torna a comunicação mais clara** entre membros da equipe.
- **Serve como documentação** do raciocínio por trás do algoritmo.

---

## Passos para Traduzir Enunciados para Pseudocódigo

1. **Leia atentamente o enunciado** e identifique o problema a ser resolvido.
2. **Liste as entradas** (dados fornecidos pelo usuário ou pelo sistema).
3. **Defina as saídas** (resultados esperados).
4. **Descreva o processamento** (passos necessários para transformar as entradas nas saídas).
5. **Estruture o pseudocódigo** utilizando comandos como: LEIA, ESCREVA, SE, SENÃO, ENQUANTO, PARA, etc.

---

## Exemplos Práticos

### Exemplo 1

**Enunciado:**  
Peça ao usuário dois números inteiros e exiba a soma deles.

**Pseudocódigo:**
```
INÍCIO
    LEIA numero1
    LEIA numero2
    soma ← numero1 + numero2
    ESCREVA "A soma é: ", soma
FIM
```

---

### Exemplo 2

**Enunciado:**  
Leia a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais).

**Pseudocódigo:**
```
INÍCIO
    LEIA idade
    SE idade >= 18 ENTÃO
        ESCREVA "Maior de idade"
    SENÃO
        ESCREVA "Menor de idade"
FIM
```

---

## Exercícios Propostos

A seguir, pratique a tradução de enunciados para pseudocódigo. Tente resolver antes de conferir as respostas sugeridas.

---

### Exercício 1

**Enunciado:**  
Leia o nome e a nota de um aluno. Se a nota for maior ou igual a 7, escreva "Aprovado". Caso contrário, escreva "Reprovado".

**Pseudocódigo sugerido:**
```
INÍCIO
    LEIA nome
    LEIA nota
    SE nota >= 7 ENTÃO
        ESCREVA nome, "Aprovado"
    SENÃO
        ESCREVA nome, "Reprovado"
FIM
```

---

### Exercício 2

**Enunciado:**  
Peça ao usuário um número e mostre todos os números de 1 até esse número.

**Pseudocódigo sugerido:**
```
INÍCIO
    LEIA numero
    PARA i DE 1 ATÉ numero FAÇA
        ESCREVA i
FIM
```

---

### Exercício 3

**Enunciado:**  
Leia três números e exiba o maior deles.

**Pseudocódigo sugerido:**
```
INÍCIO
    LEIA a
    LEIA b
    LEIA c
    maior ← a
    SE b > maior ENTÃO
        maior ← b
    SE c > maior ENTÃO
        maior ← c
    ESCREVA "O maior número é: ", maior
FIM
```

---

## Dicas para Escrever um Bom Pseudocódigo

- Use **nomes de variáveis claros** e descritivos.
- Mantenha a **indentação** para facilitar a leitura.
- Seja **objetivo e direto** nos comandos.
- Teste mentalmente o algoritmo com exemplos simples.

---

## Conclusão

A prática de traduzir enunciados para pseudocódigo é essencial para desenvolver o raciocínio lógico e a capacidade de resolver problemas de programação. Com o tempo, essa habilidade se tornará natural, facilitando o aprendizado de qualquer linguagem de programação. Continue praticando com diferentes tipos de problemas e refine sua escrita de pseudocódigo para criar algoritmos cada vez mais claros e eficientes.