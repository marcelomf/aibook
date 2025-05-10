
# Exercícios de Lógica para Completar Fluxogramas ou Pseudocódigos Incompletos

A prática é fundamental para consolidar o aprendizado em lógica de programação. Entre os exercícios mais eficazes para iniciantes estão aqueles que envolvem a análise e o preenchimento de fluxogramas ou pseudocódigos incompletos. Esse tipo de desafio estimula o raciocínio lógico, a atenção aos detalhes e a compreensão do fluxo de execução de algoritmos.

## Por que Exercícios de Completar Fluxogramas e Pseudocódigos?

Completar fluxogramas ou pseudocódigos incompletos ajuda o estudante a:

- **Visualizar o fluxo de execução** de um algoritmo.
- **Identificar lacunas lógicas** e propor soluções adequadas.
- **Desenvolver a habilidade de leitura e interpretação** de algoritmos.
- **Fixar conceitos fundamentais** como variáveis, operadores, estruturas de decisão e repetição.

## Como Funcionam Esses Exercícios?

O estudante recebe um fluxograma ou pseudocódigo com partes faltando, como comandos, condições ou operações. O objetivo é analisar o contexto e preencher corretamente as lacunas para que o algoritmo atinja o resultado esperado.

### Exemplo 1: Completar um Pseudocódigo

**Enunciado:**  
Complete o pseudocódigo abaixo para que ele leia dois números e exiba o maior deles.

```plaintext
Início
    Leia A
    Leia B
    SE _____________
        Escreva "O maior é: ", A
    SENÃO
        _______________
Fim
```

**Resolução:**

```plaintext
Início
    Leia A
    Leia B
    SE A > B
        Escreva "O maior é: ", A
    SENÃO
        Escreva "O maior é: ", B
Fim
```

### Exemplo 2: Completar um Fluxograma

**Enunciado:**  
O fluxograma abaixo está incompleto. Complete-o para que ele leia um número e informe se ele é par ou ímpar.

```
[Início]
   |
   v
[Leia N]
   |
   v
[?]  <--- Falta a condição aqui
  / \
 /   \
v     v
[Escreva "Par"]   [Escreva "Ímpar"]
   |                   |
   v                   v
 [Fim]               [Fim]
```

**Resolução:**  
A condição que falta é: "N % 2 == 0" (ou seja, se o resto da divisão de N por 2 for igual a zero).

```
[Início]
   |
   v
[Leia N]
   |
   v
[N % 2 == 0?]
  / \
 /   \
v     v
[Escreva "Par"]   [Escreva "Ímpar"]
   |                   |
   v                   v
 [Fim]               [Fim]
```

## Dicas para Resolver Exercícios de Completar

- **Leia atentamente o enunciado** e entenda o objetivo do algoritmo.
- **Identifique as informações já fornecidas** e o que está faltando.
- **Pense no fluxo lógico**: quais decisões precisam ser tomadas? Quais operações são necessárias?
- **Teste mentalmente**: imagine valores de entrada e veja se o algoritmo, com suas respostas, chega ao resultado esperado.
- **Revise conceitos básicos** de operadores, estruturas de decisão e repetição.

## Exercícios Propostos

1. **Completar Pseudocódigo:**  
   Complete o pseudocódigo para calcular a média de três números e informar se o aluno foi aprovado (média >= 7).

   ```plaintext
   Início
       Leia N1
       Leia N2
       Leia N3
       Média = ______________
       SE ________________
           Escreva "Aprovado"
       SENÃO
           Escreva "Reprovado"
   Fim
   ```

2. **Completar Fluxograma:**  
   Complete o fluxograma para ler um número e informar se ele é positivo, negativo ou zero.

   ```
   [Início]
      |
      v
   [Leia N]
      |
      v
   [?]  <--- Falta a condição aqui
    / \
   /   \
  v     v
[Escreva "Positivo"]   [?] <--- Outra condição
      |                 / \
      v                /   \
    [Fim]         [Escreva "Zero"] [Escreva "Negativo"]
                        |                |
                        v                v
                      [Fim]            [Fim]
   ```

## Conclusão

Exercícios de completar fluxogramas ou pseudocódigos são excelentes para fixar a lógica de programação. Eles desenvolvem a capacidade de análise, interpretação e construção de algoritmos, preparando o estudante para desafios mais avançados em qualquer linguagem de programação. Pratique regularmente e, sempre que possível, crie seus próprios desafios para compartilhar com colegas!

---
**Dica:** Ao terminar um exercício, tente explicar o raciocínio para outra pessoa ou escreva comentários detalhando cada etapa. Isso reforça o aprendizado e evidencia pontos que ainda precisam ser aprimorados.
```
