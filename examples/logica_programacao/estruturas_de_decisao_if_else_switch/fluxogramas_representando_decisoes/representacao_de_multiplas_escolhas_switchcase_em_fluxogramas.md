# Representação de Múltiplas Escolhas (switch/case) em Fluxogramas

Ao desenvolver algoritmos, frequentemente nos deparamos com situações em que precisamos tomar decisões baseadas em múltiplas alternativas. Nessas situações, a estrutura de decisão `switch/case` é uma ferramenta poderosa, pois permite selecionar, de forma clara e eficiente, qual bloco de código executar de acordo com o valor de uma variável ou expressão. Para visualizar e planejar essas decisões, utilizamos fluxogramas, que são diagramas que representam graficamente o fluxo de execução de um algoritmo.

## O que é a Estrutura switch/case?

A estrutura `switch/case` é utilizada quando precisamos comparar o valor de uma variável (ou expressão) com diferentes alternativas (casos). Para cada valor possível, existe um bloco de código correspondente. Caso nenhum dos valores seja correspondente, pode-se definir um bloco padrão (`default`).

Exemplo em pseudocódigo:
```plaintext
switch (opcao) {
    case 1:
        // Executa ação 1
        break;
    case 2:
        // Executa ação 2
        break;
    case 3:
        // Executa ação 3
        break;
    default:
        // Executa ação padrão
}
```

## Como Representar switch/case em Fluxogramas

No fluxograma, a representação de múltiplas escolhas é feita por meio de um **bloco de decisão** (geralmente um losango), que avalia a variável ou expressão. A partir desse bloco, partem várias setas, cada uma levando a um caminho diferente, de acordo com o valor avaliado.

### Elementos Utilizados

- **Losango (Decisão):** Representa a verificação do valor da variável.
- **Setas:** Indicam o fluxo para cada alternativa (caso).
- **Retângulos (Processo):** Indicam as ações a serem executadas em cada caso.
- **Bloco de saída comum:** Após a execução de cada caso, normalmente o fluxo converge para um mesmo ponto, continuando o algoritmo.

### Exemplo Prático

Imagine um algoritmo que, de acordo com o número digitado pelo usuário, exibe o nome de um dia da semana:

- 1: Domingo
- 2: Segunda-feira
- 3: Terça-feira
- 4: Quarta-feira
- 5: Quinta-feira
- 6: Sexta-feira
- 7: Sábado
- Qualquer outro número: "Opção inválida"

#### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia número]
    B --> C{Qual o valor de número?}
    C -->|1| D[Exibe "Domingo"]
    C -->|2| E[Exibe "Segunda-feira"]
    C -->|3| F[Exibe "Terça-feira"]
    C -->|4| G[Exibe "Quarta-feira"]
    C -->|5| H[Exibe "Quinta-feira"]
    C -->|6| I[Exibe "Sexta-feira"]
    C -->|7| J[Exibe "Sábado"]
    C -->|Outro| K[Exibe "Opção inválida"]
    D --> L[Fim]
    E --> L
    F --> L
    G --> L
    H --> L
    I --> L
    J --> L
    K --> L
```

> **Observação:** O bloco de decisão (losango) possui várias saídas, cada uma representando um caso do `switch/case`. Após a execução de cada caso, o fluxo retorna para um ponto comum, facilitando a visualização do término da decisão.

### Dicas para Construir Fluxogramas com switch/case

- **Clareza:** Nomeie claramente cada saída do bloco de decisão, indicando o valor correspondente.
- **Organização:** Mantenha o fluxo convergindo para um ponto comum após os casos, evitando confusão visual.
- **Completeness:** Sempre inclua uma opção padrão (default) para tratar valores inesperados.

## Conclusão

A representação de múltiplas escolhas em fluxogramas, utilizando a estrutura `switch/case`, é fundamental para planejar algoritmos que dependem de decisões baseadas em vários valores possíveis. Com o uso adequado dos blocos de decisão e processos, o fluxograma se torna uma ferramenta poderosa para visualizar e comunicar a lógica do programa, facilitando o entendimento e a implementação em qualquer linguagem de programação.