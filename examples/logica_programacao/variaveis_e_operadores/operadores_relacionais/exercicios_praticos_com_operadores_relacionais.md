# Exercícios Práticos com Operadores Relacionais

Os **operadores relacionais** são fundamentais na lógica de programação, pois permitem comparar valores e tomar decisões com base nessas comparações. Eles são amplamente utilizados em estruturas de decisão, como `if`, `else` e `switch`, e também em estruturas de repetição, como `while` e `for`. Praticar o uso desses operadores é essencial para consolidar o entendimento e aplicá-los corretamente na resolução de problemas.

## Principais Operadores Relacionais

Antes de iniciar os exercícios, vamos relembrar os principais operadores relacionais:

| Operador | Descrição                | Exemplo (`a = 5`, `b = 3`) | Resultado |
|----------|-------------------------|-----------------------------|-----------|
| `==`     | Igual a                 | `a == b`                    | `false`   |
| `!=`     | Diferente de            | `a != b`                    | `true`    |
| `>`      | Maior que               | `a > b`                     | `true`    |
| `<`      | Menor que               | `a < b`                     | `false`   |
| `>=`     | Maior ou igual a        | `a >= b`                    | `true`    |
| `<=`     | Menor ou igual a        | `a <= b`                    | `false`   |

---

## Exercício 1: Comparando Idades

**Enunciado:**  
Peça ao usuário para digitar duas idades e informe se elas são iguais, diferentes, ou qual é a maior.

**Pseudocódigo:**
```
Leia idade1
Leia idade2

Se idade1 == idade2
    Escreva "As idades são iguais."
Senão se idade1 > idade2
    Escreva "A primeira idade é maior."
Senão
    Escreva "A segunda idade é maior."
FimSe
```

**Exemplo de Fluxograma:**

```mermaid
flowchart TD
    A[Início] --> B[Leia idade1]
    B --> C[Leia idade2]
    C --> D{idade1 == idade2?}
    D -- Sim --> E[Escreva "As idades são iguais."]
    D -- Não --> F{idade1 > idade2?}
    F -- Sim --> G[Escreva "A primeira idade é maior."]
    F -- Não --> H[Escreva "A segunda idade é maior."]
    E --> I[Fim]
    G --> I
    H --> I
```

---

## Exercício 2: Verificando Aprovação

**Enunciado:**  
Solicite a nota de um aluno e informe se ele foi aprovado (nota maior ou igual a 6) ou reprovado.

**Pseudocódigo:**
```
Leia nota

Se nota >= 6
    Escreva "Aprovado"
Senão
    Escreva "Reprovado"
FimSe
```

---

## Exercício 3: Número Par ou Ímpar

**Enunciado:**  
Peça um número inteiro ao usuário e informe se ele é par ou ímpar, utilizando o operador relacional de igualdade.

**Pseudocódigo:**
```
Leia numero

Se numero % 2 == 0
    Escreva "O número é par."
Senão
    Escreva "O número é ímpar."
FimSe
```

---

## Exercício 4: Faixa Etária

**Enunciado:**  
Solicite a idade de uma pessoa e informe se ela é criança (idade < 12), adolescente (idade >= 12 e < 18), adulto (idade >= 18 e < 60) ou idoso (idade >= 60).

**Pseudocódigo:**
```
Leia idade

Se idade < 12
    Escreva "Criança"
Senão se idade >= 12 e idade < 18
    Escreva "Adolescente"
Senão se idade >= 18 e idade < 60
    Escreva "Adulto"
Senão
    Escreva "Idoso"
FimSe
```

---

## Exercício 5: Maior de Três Números

**Enunciado:**  
Peça três números ao usuário e informe qual deles é o maior.

**Pseudocódigo:**
```
Leia a
Leia b
Leia c

Se a >= b e a >= c
    Escreva "O maior número é a"
Senão se b >= a e b >= c
    Escreva "O maior número é b"
Senão
    Escreva "O maior número é c"
FimSe
```

---

## Dicas para Praticar

- **Teste diferentes valores:** Experimente diferentes entradas para entender como os operadores relacionais afetam o resultado.
- **Utilize fluxogramas:** Eles ajudam a visualizar o fluxo de decisão do algoritmo.
- **Comente seu código:** Explique cada comparação para fixar o aprendizado.

---

## Conclusão

Os operadores relacionais são essenciais para a tomada de decisões em algoritmos. Praticar com exercícios variados, como os apresentados acima, é fundamental para dominar seu uso e construir soluções lógicas e eficientes. Ao compreender bem esses operadores, você estará preparado para avançar em estruturas mais complexas e desenvolver programas cada vez mais robustos.