# Exercícios de Conversão de Pseudocódigo em Fluxogramas e Vice-versa

A habilidade de transitar entre pseudocódigo e fluxogramas é fundamental para quem está aprendendo lógica de programação. Ambos são ferramentas poderosas para representar algoritmos, mas cada uma possui suas particularidades: o pseudocódigo foca na descrição textual e estruturada dos passos de um algoritmo, enquanto o fluxograma utiliza símbolos gráficos para ilustrar o fluxo de execução.

Neste tópico, você encontrará exercícios práticos para converter pseudocódigos em fluxogramas e fluxogramas em pseudocódigos, desenvolvendo sua capacidade de abstração e representação lógica.

---

## 1. Por que praticar a conversão?

- **Compreensão profunda:** Traduzir entre formas diferentes de representação ajuda a entender melhor a lógica do algoritmo.
- **Facilidade de comunicação:** Em equipes, pode ser necessário apresentar soluções tanto de forma textual quanto visual.
- **Base para programação:** Saber estruturar algoritmos em diferentes formatos facilita a transição para linguagens de programação reais.

---

## 2. Exercícios Práticos

### Exercício 1: Pseudocódigo para Fluxograma

**Pseudocódigo:**

```plaintext
Início
    Leia A
    Leia B
    Se A > B então
        Escreva "A é maior que B"
    Senão
        Escreva "B é maior ou igual a A"
Fim
```

**Tarefa:**  
Desenhe um fluxograma que represente o algoritmo acima.

**Solução Esperada:**

1. **Início**
2. **Entrada de dados:** Ler A, Ler B
3. **Decisão:** A > B?
    - **Sim:** Escrever "A é maior que B"
    - **Não:** Escrever "B é maior ou igual a A"
4. **Fim**

*Dica:* Use o símbolo de losango para a decisão e retângulos para as ações.

---

### Exercício 2: Fluxograma para Pseudocódigo

**Fluxograma:**

```
[Início]
   |
[Ler número]
   |
[O número é par?] --Sim--> [Escrever "Par"] --> [Fim]
         |
        Não
         v
   [Escrever "Ímpar"]
         |
        [Fim]
```

**Tarefa:**  
Escreva o pseudocódigo correspondente ao fluxograma acima.

**Solução Esperada:**

```plaintext
Início
    Leia N
    Se N % 2 = 0 então
        Escreva "Par"
    Senão
        Escreva "Ímpar"
Fim
```

---

### Exercício 3: Pseudocódigo para Fluxograma

**Pseudocódigo:**

```plaintext
Início
    Leia nota1
    Leia nota2
    média ← (nota1 + nota2) / 2
    Se média ≥ 7 então
        Escreva "Aprovado"
    Senão
        Escreva "Reprovado"
Fim
```

**Tarefa:**  
Desenhe o fluxograma correspondente.

---

### Exercício 4: Fluxograma para Pseudocódigo

**Fluxograma:**

```
[Início]
   |
[Ler X]
   |
[Enquanto X > 0]
   |
[Escrever X]
   |
[X ← X - 1]
   |
[Volta para condição]
   |
[Se X <= 0, Fim]
```

**Tarefa:**  
Escreva o pseudocódigo correspondente.

**Solução Esperada:**

```plaintext
Início
    Leia X
    Enquanto X > 0 faça
        Escreva X
        X ← X - 1
Fim
```

---

## 3. Dicas para Conversão

- **Identifique as estruturas:** Decisões (if/else) viram losangos; comandos de entrada/saída e atribuições viram retângulos.
- **Laços de repetição:** Em fluxogramas, são representados por setas que retornam à condição.
- **Ordem dos passos:** Mantenha a sequência lógica dos comandos.
- **Clareza:** Seja objetivo tanto no pseudocódigo quanto no fluxograma.

---

## 4. Exercício Proposto

**Desafio:**  
Crie um pseudocódigo que leia três números e escreva o maior deles. Depois, desenhe o fluxograma correspondente.

---

## 5. Conclusão

A prática de converter entre pseudocódigo e fluxogramas aprimora a compreensão dos algoritmos e prepara o estudante para desafios mais avançados em programação. Exercite regularmente essas conversões para desenvolver uma base sólida em lógica de programação!

---

**Sugestão:** Utilize ferramentas online como [draw.io](https://draw.io) ou [Lucidchart](https://lucidchart.com) para desenhar seus fluxogramas, e compartilhe suas soluções com colegas para discutir diferentes abordagens.