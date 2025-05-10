
# Exercícios de Algoritmos para Cálculos Matemáticos Simples

A criação de algoritmos para cálculos matemáticos simples é uma excelente forma de praticar e consolidar os conceitos fundamentais da lógica de programação. Exercícios como soma, média e fatorial ajudam a desenvolver o raciocínio lógico, o entendimento de variáveis, operadores e estruturas de repetição. A seguir, apresentamos exemplos práticos e exercícios para que você possa treinar a criação de algoritmos utilizando pseudocódigo e fluxogramas.

---

## 1. Soma de Dois Números

### Descrição

Crie um algoritmo que leia dois números inteiros e exiba a soma deles.

### Pseudocódigo

```
Início
    Leia número1
    Leia número2
    soma ← número1 + número2
    Escreva "A soma é: ", soma
Fim
```

### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia número1]
    B --> C[Leia número2]
    C --> D[soma ← número1 + número2]
    D --> E[Escreva "A soma é: ", soma]
    E --> F[Fim]
```

---

## 2. Cálculo da Média de Três Números

### Descrição

Desenvolva um algoritmo que leia três números e calcule a média aritmética simples entre eles.

### Pseudocódigo

```
Início
    Leia n1
    Leia n2
    Leia n3
    média ← (n1 + n2 + n3) / 3
    Escreva "A média é: ", média
Fim
```

### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia n1]
    B --> C[Leia n2]
    C --> D[Leia n3]
    D --> E[média ← (n1 + n2 + n3) / 3]
    E --> F[Escreva "A média é: ", média]
    F --> G[Fim]
```

---

## 3. Cálculo do Fatorial de um Número

### Descrição

Crie um algoritmo que leia um número inteiro positivo e calcule o seu fatorial. O fatorial de um número n (representado por n!) é o produto de todos os inteiros positivos menores ou iguais a n.

### Pseudocódigo

```
Início
    Leia n
    fatorial ← 1
    para i de 1 até n faça
        fatorial ← fatorial * i
    fim_para
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

---

## 4. Exercícios Propostos

Pratique criando algoritmos para os seguintes problemas:

1. **Soma de N números:** Leia um valor N e, em seguida, leia N números, calculando a soma total.
2. **Média de N números:** Leia um valor N e, em seguida, leia N números, calculando a média aritmética.
3. **Produto de dois números:** Leia dois números e exiba o produto entre eles.
4. **Cálculo do quadrado de um número:** Leia um número e exiba o seu quadrado.
5. **Verificação de número par ou ímpar:** Leia um número e informe se ele é par ou ímpar.

---

## Dicas para Resolver os Exercícios

- **Identifique as entradas e saídas** do algoritmo.
- **Defina as variáveis** necessárias para armazenar os valores.
- **Utilize operadores matemáticos** adequados para cada cálculo.
- **Aplique estruturas de repetição** (como o laço "para") quando for necessário processar múltiplos valores.
- **Teste seu algoritmo** com diferentes valores para garantir que ele funciona corretamente.

---

## Conclusão

A prática com algoritmos de cálculos matemáticos simples é fundamental para desenvolver o pensamento lógico e a habilidade de resolver problemas computacionais. Ao dominar esses conceitos, você estará preparado para desafios mais complexos e para a transição para qualquer linguagem de programação.

Continue praticando e explorando novos exercícios para fortalecer sua base em lógica de programação!
```
