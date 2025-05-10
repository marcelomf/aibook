# Exercícios de Tradução de Enunciados para Pseudocódigo

A habilidade de traduzir enunciados de problemas para pseudocódigo é fundamental para quem está começando a aprender lógica de programação. O pseudocódigo serve como uma ponte entre a linguagem humana e a linguagem de programação, permitindo que você estruture suas ideias de forma lógica e compreensível antes de implementá-las em um código real.

Neste tópico, você encontrará exercícios práticos que vão ajudá-lo a desenvolver essa competência. Cada exercício apresenta um enunciado de problema, seguido de orientações para criar o pseudocódigo correspondente. Ao final, confira exemplos de soluções para comparar com o seu raciocínio.

---

## O que é Pseudocódigo?

Pseudocódigo é uma forma simplificada de descrever algoritmos, utilizando uma linguagem próxima do português (ou outro idioma natural), mas com uma estrutura lógica semelhante à de uma linguagem de programação. Ele não segue regras rígidas de sintaxe, mas deve ser claro, organizado e fácil de entender.

---

## Dicas para Escrever Pseudocódigo

- **Seja claro e objetivo:** Use frases curtas e diretas.
- **Utilize comandos comuns:** Como LEIA, ESCREVA, SE, SENÃO, ENQUANTO, PARA, etc.
- **Estruture o algoritmo:** Use indentação para indicar blocos de comandos.
- **Evite detalhes de implementação:** Foque na lógica, não na sintaxe de uma linguagem específica.

---

## Exercícios Práticos

### Exercício 1: Soma de Dois Números

**Enunciado:**  
Peça ao usuário para digitar dois números inteiros e exiba a soma deles.

**Orientação:**  
- Solicite a entrada dos dois números.
- Some os valores.
- Mostre o resultado.

---

### Exercício 2: Verificação de Idade

**Enunciado:**  
Peça ao usuário para informar sua idade. Se a idade for maior ou igual a 18, exiba "Maior de idade". Caso contrário, exiba "Menor de idade".

**Orientação:**  
- Solicite a idade.
- Use uma estrutura de decisão para verificar a condição.
- Exiba a mensagem adequada.

---

### Exercício 3: Contagem Regressiva

**Enunciado:**  
Solicite ao usuário um número inteiro positivo e exiba uma contagem regressiva até zero.

**Orientação:**  
- Solicite o número inicial.
- Utilize uma estrutura de repetição para contar até zero.
- Exiba cada número da contagem.

---

### Exercício 4: Cálculo de Média

**Enunciado:**  
Peça ao usuário para digitar três notas. Calcule a média e informe se o aluno foi aprovado (média maior ou igual a 7) ou reprovado.

**Orientação:**  
- Solicite as três notas.
- Calcule a média aritmética.
- Use uma estrutura de decisão para exibir o resultado.

---

## Exemplos de Solução em Pseudocódigo

### Exercício 1: Soma de Dois Números

```plaintext
INÍCIO
    LEIA numero1
    LEIA numero2
    soma <- numero1 + numero2
    ESCREVA "A soma é: ", soma
FIM
```

---

### Exercício 2: Verificação de Idade

```plaintext
INÍCIO
    LEIA idade
    SE idade >= 18 ENTÃO
        ESCREVA "Maior de idade"
    SENÃO
        ESCREVA "Menor de idade"
    FIMSE
FIM
```

---

### Exercício 3: Contagem Regressiva

```plaintext
INÍCIO
    LEIA numero
    ENQUANTO numero >= 0 FAÇA
        ESCREVA numero
        numero <- numero - 1
    FIMENQUANTO
FIM
```

---

### Exercício 4: Cálculo de Média

```plaintext
INÍCIO
    LEIA nota1
    LEIA nota2
    LEIA nota3
    media <- (nota1 + nota2 + nota3) / 3
    SE media >= 7 ENTÃO
        ESCREVA "Aprovado"
    SENÃO
        ESCREVA "Reprovado"
    FIMSE
FIM
```

---

## Conclusão

A prática de traduzir enunciados para pseudocódigo é essencial para desenvolver o raciocínio lógico e a capacidade de resolver problemas de forma estruturada. Ao treinar com diferentes tipos de exercícios, você estará mais preparado para criar algoritmos eficientes e claros, facilitando a transição para qualquer linguagem de programação no futuro.

Continue praticando com novos enunciados e tente criar seus próprios problemas para resolver. Lembre-se: a base de um bom programador está na lógica!