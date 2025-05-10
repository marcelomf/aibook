# Exercícios de Conversão de Fluxogramas para Pseudocódigo

A conversão de fluxogramas para pseudocódigo é uma habilidade fundamental para quem está aprendendo lógica de programação. O fluxograma é uma representação gráfica do algoritmo, enquanto o pseudocódigo é uma descrição textual, próxima da linguagem humana, que detalha os passos necessários para resolver um problema. Saber transitar entre essas duas formas de representação é essencial para desenvolver o raciocínio lógico e preparar-se para a implementação em qualquer linguagem de programação.

Neste tópico, você encontrará exercícios práticos que envolvem a análise de fluxogramas e sua conversão para pseudocódigo. Esses exercícios ajudam a fixar conceitos como sequência, decisão e repetição, além de estimular a clareza e a organização do pensamento lógico.

---

## Por que Converter Fluxogramas em Pseudocódigo?

- **Facilita a compreensão:** O pseudocódigo detalha as ações de cada etapa do fluxograma, tornando o algoritmo mais fácil de entender e revisar.
- **Prepara para a codificação:** Ao escrever o pseudocódigo, você já estrutura o raciocínio necessário para implementar o algoritmo em uma linguagem de programação.
- **Desenvolve o raciocínio lógico:** A conversão exige atenção aos detalhes e à lógica de cada processo, aprimorando suas habilidades de análise e síntese.

---

## Exemplo de Conversão

### Fluxograma

Imagine o seguinte fluxograma:

1. Início
2. Ler um número inteiro `N`
3. Se `N` for par, exibir "Número par"
4. Caso contrário, exibir "Número ímpar"
5. Fim

### Pseudocódigo Correspondente

```plaintext
Início
    Leia N
    Se N % 2 == 0 então
        Escreva "Número par"
    Senão
        Escreva "Número ímpar"
Fim
```

---

## Exercícios Práticos

### Exercício 1: Soma de Dois Números

**Fluxograma:**
- Início
- Ler dois números inteiros: A e B
- Calcular a soma: S = A + B
- Exibir o resultado S
- Fim

**Pseudocódigo:**

```plaintext
Início
    Leia A
    Leia B
    S ← A + B
    Escreva S
Fim
```

---

### Exercício 2: Verificação de Maioridade

**Fluxograma:**
- Início
- Ler a idade de uma pessoa
- Se idade >= 18, exibir "Maior de idade"
- Senão, exibir "Menor de idade"
- Fim

**Pseudocódigo:**

```plaintext
Início
    Leia idade
    Se idade >= 18 então
        Escreva "Maior de idade"
    Senão
        Escreva "Menor de idade"
Fim
```

---

### Exercício 3: Contagem Regressiva

**Fluxograma:**
- Início
- Definir variável contador = 5
- Enquanto contador >= 1, faça:
    - Exibir contador
    - Decrementar contador em 1
- Fim

**Pseudocódigo:**

```plaintext
Início
    contador ← 5
    Enquanto contador >= 1 faça
        Escreva contador
        contador ← contador - 1
Fim
```

---

### Exercício 4: Cálculo da Média

**Fluxograma:**
- Início
- Ler três notas: N1, N2, N3
- Calcular média: M = (N1 + N2 + N3) / 3
- Se M >= 7, exibir "Aprovado"
- Senão, exibir "Reprovado"
- Fim

**Pseudocódigo:**

```plaintext
Início
    Leia N1
    Leia N2
    Leia N3
    M ← (N1 + N2 + N3) / 3
    Se M >= 7 então
        Escreva "Aprovado"
    Senão
        Escreva "Reprovado"
Fim
```

---

## Dicas para Converter Fluxogramas em Pseudocódigo

- **Identifique as etapas:** Observe cada símbolo do fluxograma (início/fim, entrada, processamento, decisão, saída).
- **Respeite a ordem lógica:** O pseudocódigo deve seguir a mesma sequência do fluxograma.
- **Use comandos claros:** Utilize verbos como "Leia", "Escreva", "Se", "Enquanto", "Para", etc.
- **Seja objetivo:** O pseudocódigo deve ser simples, direto e fácil de entender.

---

## Conclusão

A prática de converter fluxogramas em pseudocódigo é essencial para consolidar o entendimento da lógica de programação. Ao realizar esses exercícios, você estará mais preparado para analisar problemas, estruturar soluções e dar os primeiros passos na programação de computadores. Continue praticando com diferentes fluxogramas e tente criar seus próprios exemplos para aprimorar ainda mais suas habilidades!