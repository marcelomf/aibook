# Exercícios de Interpretação de Fluxogramas de Decisão

A interpretação de fluxogramas é uma habilidade fundamental para quem está começando a estudar lógica de programação. Os fluxogramas são representações gráficas que ilustram o fluxo de execução de um algoritmo, facilitando a visualização das decisões tomadas pelo programa. Neste tópico, você encontrará exercícios práticos para desenvolver sua capacidade de analisar e compreender fluxogramas que envolvem estruturas de decisão, como `if`, `else` e `switch`.

---

## Por que interpretar fluxogramas?

Antes de partir para os exercícios, é importante entender que interpretar fluxogramas ajuda a:

- **Visualizar o fluxo lógico** de um algoritmo antes de implementá-lo em código.
- **Identificar erros lógicos** e pontos de decisão críticos.
- **Facilitar a comunicação** entre membros de uma equipe, já que fluxogramas são universais e independem de linguagem de programação.

---

## Elementos básicos de um fluxograma de decisão

- **Início/Fim:** Representados por elipses.
- **Processo:** Retângulos indicam ações ou cálculos.
- **Decisão:** Losangos representam perguntas ou condições (ex: "X > 10?").
- **Setas:** Indicam o fluxo de execução.

---

## Exercício 1: Decisão Simples

### Fluxograma

```
[Início]
   |
[Leia um número X]
   |
[X > 0?]
  /    \
Sim     Não
 |       |
[Imprima "Positivo"] [Imprima "Não positivo"]
   |                   |
 [Fim]               [Fim]
```

### Pergunta

1. O que será impresso se o usuário digitar o número 7?
2. E se digitar -3?

#### Respostas

1. Será impresso **"Positivo"**, pois 7 > 0.
2. Será impresso **"Não positivo"**, pois -3 não é maior que 0.

---

## Exercício 2: Decisão Composta

### Fluxograma

```
[Início]
   |
[Leia a idade]
   |
[idade >= 18?]
  /    \
Sim     Não
 |       |
[Imprima "Maior de idade"] [Imprima "Menor de idade"]
   |                   |
 [Fim]               [Fim]
```

### Pergunta

1. O que será impresso se a idade for 20?
2. E se for 15?

#### Respostas

1. **"Maior de idade"** (20 >= 18).
2. **"Menor de idade"** (15 < 18).

---

## Exercício 3: Decisão Encadeada (if-else-if)

### Fluxograma

```
[Início]
   |
[Leia a nota]
   |
[nota >= 7?]
  /    \
Sim     Não
 |       |
[Imprima "Aprovado"] [nota >= 5?]
   |                   /    \
 [Fim]              Sim     Não
                     |       |
           [Imprima "Recuperação"] [Imprima "Reprovado"]
                     |               |
                   [Fim]           [Fim]
```

### Pergunta

1. O que será impresso se a nota for 8?
2. E se for 6?
3. E se for 4?

#### Respostas

1. **"Aprovado"** (8 >= 7).
2. **"Recuperação"** (6 >= 5 e 6 < 7).
3. **"Reprovado"** (4 < 5).

---

## Exercício 4: Decisão Múltipla (switch)

### Fluxograma

```
[Início]
   |
[Leia o número do dia da semana (1 a 7)]
   |
[Dia == 1?]
  /    \
Sim     Não
 |       |
[Imprima "Domingo"] [Dia == 2?]
   |                   /    \
 [Fim]              Sim     Não
                     |       |
           [Imprima "Segunda"] [Dia == 3?]
                     |       ...
                   [Fim]
```
*(Segue até o dia 7, cada um com seu respectivo nome)*

### Pergunta

1. O que será impresso se o usuário digitar 5?
2. E se digitar 1?

#### Respostas

1. **"Quinta"** (5 corresponde à quinta-feira).
2. **"Domingo"** (1 corresponde ao domingo).

---

## Dicas para interpretar fluxogramas de decisão

- **Siga o fluxo das setas**: sempre comece do início e siga as setas conforme as condições.
- **Analise cada decisão**: verifique qual caminho será seguido de acordo com o valor das variáveis.
- **Simule valores**: teste diferentes entradas para entender todos os possíveis caminhos.

---

## Conclusão

A prática com exercícios de interpretação de fluxogramas de decisão é essencial para consolidar o entendimento das estruturas condicionais. Ao dominar essa habilidade, você estará mais preparado para criar algoritmos eficientes e livres de erros lógicos, além de facilitar a transição para a implementação em qualquer linguagem de programação.

Continue praticando com diferentes exemplos e tente criar seus próprios fluxogramas para situações do dia a dia!