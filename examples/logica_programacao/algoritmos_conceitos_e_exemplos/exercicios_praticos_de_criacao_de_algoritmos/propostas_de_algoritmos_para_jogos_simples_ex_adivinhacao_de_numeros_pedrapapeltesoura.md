
# Exercícios Práticos de Criação de Algoritmos

## Propostas de Algoritmos para Jogos Simples

A criação de jogos simples é uma excelente forma de praticar lógica de programação e consolidar conceitos fundamentais, como variáveis, operadores, estruturas de decisão e repetição. Nesta seção, apresentamos propostas de algoritmos para dois jogos clássicos: **Adivinhação de Números** e **Pedra-Papel-Tesoura**. Os exemplos são apresentados em pseudocódigo e acompanhados de explicações para facilitar o entendimento.

---

### 1. Jogo de Adivinhação de Números

#### Descrição

O objetivo deste jogo é que o computador escolha um número aleatório dentro de um intervalo definido (por exemplo, de 1 a 100), e o jogador tente adivinhar qual é esse número. A cada tentativa, o programa informa se o palpite do jogador é maior, menor ou igual ao número sorteado.

#### Algoritmo em Pseudocódigo

```pseudocode
INÍCIO
    Definir INÍCIO_INTERVALO como 1
    Definir FIM_INTERVALO como 100
    Gerar NUMERO_SECRETO aleatório entre INÍCIO_INTERVALO e FIM_INTERVALO
    Definir TENTATIVAS como 0

    ENQUANTO verdadeiro FAÇA
        Escrever "Digite um número entre", INÍCIO_INTERVALO, "e", FIM_INTERVALO, ":"
        Ler PALPITE
        Incrementar TENTATIVAS em 1

        SE PALPITE < NUMERO_SECRETO ENTÃO
            Escrever "O número secreto é maior."
        SENÃO SE PALPITE > NUMERO_SECRETO ENTÃO
            Escrever "O número secreto é menor."
        SENÃO
            Escrever "Parabéns! Você acertou em", TENTATIVAS, "tentativas."
            SAIR DO LOOP
        FIM SE
    FIM ENQUANTO
FIM
```

#### Pontos de Aprendizagem

- **Geração de números aleatórios**
- **Leitura de dados do usuário**
- **Estruturas de repetição e decisão**
- **Contagem de tentativas**

---

### 2. Jogo Pedra-Papel-Tesoura

#### Descrição

Neste jogo, o usuário escolhe entre pedra, papel ou tesoura, e o computador faz uma escolha aleatória. O programa compara as escolhas e informa quem venceu a rodada, de acordo com as regras clássicas:

- Pedra vence tesoura
- Tesoura vence papel
- Papel vence pedra

#### Algoritmo em Pseudocódigo

```pseudocode
INÍCIO
    Escrever "Escolha uma opção: 1 - Pedra, 2 - Papel, 3 - Tesoura"
    Ler ESCOLHA_USUARIO

    Gerar ESCOLHA_COMPUTADOR aleatória entre 1 e 3

    SE ESCOLHA_USUARIO == ESCOLHA_COMPUTADOR ENTÃO
        Escrever "Empate!"
    SENÃO SE (ESCOLHA_USUARIO == 1 E ESCOLHA_COMPUTADOR == 3) OU
             (ESCOLHA_USUARIO == 2 E ESCOLHA_COMPUTADOR == 1) OU
             (ESCOLHA_USUARIO == 3 E ESCOLHA_COMPUTADOR == 2) ENTÃO
        Escrever "Você venceu!"
    SENÃO
        Escrever "O computador venceu!"
    FIM SE
FIM
```

#### Pontos de Aprendizagem

- **Uso de operadores lógicos**
- **Estruturas de decisão aninhadas**
- **Simulação de escolhas aleatórias**
- **Comparação de resultados**

---

## Dicas para Praticar

- **Implemente os algoritmos em diferentes linguagens**: Após entender o pseudocódigo, tente implementar os jogos em linguagens como Python, JavaScript ou C.
- **Adicione melhorias**: Por exemplo, permita múltiplas rodadas, registre o placar ou adicione mensagens personalizadas.
- **Teste diferentes cenários**: Experimente entradas inválidas e veja como o algoritmo se comporta.

---

## Conclusão

A criação de algoritmos para jogos simples é uma excelente maneira de exercitar a lógica de programação. Ao praticar com exemplos como adivinhação de números e pedra-papel-tesoura, você desenvolve habilidades essenciais para resolver problemas computacionais e se prepara para desafios mais complexos no futuro.

```
