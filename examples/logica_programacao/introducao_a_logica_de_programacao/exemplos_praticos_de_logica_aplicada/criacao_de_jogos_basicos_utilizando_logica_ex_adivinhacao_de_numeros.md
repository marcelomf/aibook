
# Criação de Jogos Básicos Utilizando Lógica de Programação

A lógica de programação é uma ferramenta poderosa para resolver problemas e criar soluções criativas, como jogos simples. Desenvolver jogos básicos é uma excelente forma de praticar conceitos fundamentais, como variáveis, operadores, estruturas de decisão e repetição. Neste tópico, vamos explorar como a lógica pode ser aplicada na criação de um jogo clássico: o jogo de adivinhação de números.

## O Jogo de Adivinhação de Números

O objetivo deste jogo é simples: o computador escolhe aleatoriamente um número dentro de um intervalo definido, e o jogador deve tentar adivinhar qual é esse número. A cada tentativa, o programa informa se o palpite do jogador é maior, menor ou igual ao número escolhido. O jogo termina quando o jogador acerta o número.

### Passos Lógicos para Criar o Jogo

1. **Definir o intervalo de números**: Por exemplo, de 1 a 100.
2. **Gerar um número aleatório** dentro desse intervalo.
3. **Solicitar que o jogador faça um palpite**.
4. **Comparar o palpite do jogador com o número sorteado**:
    - Se for igual, o jogador vence.
    - Se for maior, informar que o número é menor.
    - Se for menor, informar que o número é maior.
5. **Repetir o processo** até o jogador acertar.

### Exemplo em Pseudocódigo

```pseudocode
INICIO
    ESCOLHER numero_secreto ALEATORIO ENTRE 1 E 100
    ENQUANTO verdadeiro FAÇA
        ESCREVA "Digite seu palpite:"
        LEIA palpite
        SE palpite = numero_secreto ENTAO
            ESCREVA "Parabéns! Você acertou!"
            PARE
        SENAO SE palpite > numero_secreto ENTAO
            ESCREVA "O número secreto é menor."
        SENAO
            ESCREVA "O número secreto é maior."
        FIM SE
    FIM ENQUANTO
FIM
```

### Fluxograma do Jogo

```mermaid
flowchart TD
    A[Início] --> B[Gerar número aleatório]
    B --> C[Solicitar palpite ao jogador]
    C --> D{Palpite = número secreto?}
    D -- Sim --> E[Exibir mensagem de acerto]
    E --> F[Fim]
    D -- Não --> G{Palpite > número secreto?}
    G -- Sim --> H[Exibir "O número é menor"]
    G -- Não --> I[Exibir "O número é maior"]
    H --> C
    I --> C
```

### Boas Práticas Aplicadas

- **Clareza**: Mensagens diretas e compreensíveis para o jogador.
- **Organização**: Separação das etapas do jogo em blocos lógicos.
- **Reutilização**: O mesmo bloco de repetição pode ser adaptado para outros jogos de lógica.

### Exercício Proposto

Tente modificar o jogo para limitar o número de tentativas do jogador. Por exemplo, permita apenas 5 palpites. Se o jogador não acertar, exiba o número secreto ao final.

---

## Conclusão

Criar jogos básicos como o de adivinhação de números é uma excelente maneira de praticar e consolidar os conceitos de lógica de programação. Ao desenvolver esse tipo de projeto, você exercita o raciocínio lógico, aprende a estruturar algoritmos e se prepara para desafios mais complexos no mundo da programação.

Continue praticando! Experimente criar variações do jogo, como adivinhar palavras ou implementar níveis de dificuldade. A lógica é a base para transformar ideias em soluções criativas e funcionais.
```
