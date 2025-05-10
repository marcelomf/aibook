# Exercícios Resolvidos de Algoritmos Básicos

Neste tópico, apresentamos exercícios resolvidos de algoritmos básicos, fundamentais para quem está começando a estudar lógica de programação. Os exemplos a seguir envolvem operações simples, como soma, cálculo de média e fatorial, utilizando pseudocódigo e fluxogramas para facilitar o entendimento. Esses exercícios são essenciais para fixar os conceitos iniciais e desenvolver o raciocínio lógico necessário para a programação.

---

## 1. Soma de Dois Números

### Enunciado

Crie um algoritmo que leia dois números inteiros, calcule a soma deles e exiba o resultado.

### Pseudocódigo

```plaintext
Início
    Leia num1
    Leia num2
    soma ← num1 + num2
    Escreva "A soma é: ", soma
Fim
```

### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia num1]
    B --> C[Leia num2]
    C --> D[soma ← num1 + num2]
    D --> E[Escreva "A soma é: ", soma]
    E --> F[Fim]
```

### Explicação

- O algoritmo lê dois valores do usuário.
- Realiza a soma e armazena o resultado na variável `soma`.
- Exibe o resultado ao usuário.

---

## 2. Cálculo da Média de Três Números

### Enunciado

Desenvolva um algoritmo que leia três números reais, calcule a média aritmética e mostre o resultado.

### Pseudocódigo

```plaintext
Início
    Leia n1
    Leia n2
    Leia n3
    media ← (n1 + n2 + n3) / 3
    Escreva "A média é: ", media
Fim
```

### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia n1]
    B --> C[Leia n2]
    C --> D[Leia n3]
    D --> E[media ← (n1 + n2 + n3) / 3]
    E --> F[Escreva "A média é: ", media]
    F --> G[Fim]
```

### Explicação

- O algoritmo solicita três números ao usuário.
- Calcula a média aritmética simples.
- Exibe o resultado.

---

## 3. Cálculo do Fatorial de um Número

### Enunciado

Elabore um algoritmo que leia um número inteiro positivo e calcule o seu fatorial.

### Pseudocódigo

```plaintext
Início
    Leia n
    fatorial ← 1
    Para i de 1 até n faça
        fatorial ← fatorial * i
    FimPara
    Escreva "O fatorial de ", n, " é: ", fatorial
Fim
```

### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia n]
    B --> C[fatorial ← 1]
    C --> D[i ← 1]
    D --> E{ i ≤ n? }
    E -- Sim --> F[fatorial ← fatorial * i]
    F --> G[i ← i + 1]
    G --> E
    E -- Não --> H[Escreva "O fatorial de n é: ", fatorial]
    H --> I[Fim]
```

### Explicação

- O algoritmo lê um número inteiro positivo.
- Inicializa a variável `fatorial` com 1.
- Utiliza uma estrutura de repetição para multiplicar `fatorial` por cada valor de `i` de 1 até `n`.
- Exibe o resultado final.

---

## Considerações Finais

Esses exercícios resolvidos demonstram como aplicar os conceitos básicos de lógica de programação na prática. A compreensão dessas soluções é fundamental para o desenvolvimento de algoritmos mais complexos no futuro. Recomenda-se que o leitor tente resolver variações desses problemas, como calcular a soma de mais números, a média ponderada ou o fatorial de números maiores, para consolidar ainda mais o aprendizado.

---

**Dica:** Sempre teste seus algoritmos com diferentes valores de entrada para garantir que funcionam corretamente em todos os casos!