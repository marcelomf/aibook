
## Diferença entre Decisão Simples e Composta

As **estruturas de decisão** são fundamentais na lógica de programação, pois permitem que um algoritmo escolha diferentes caminhos de execução de acordo com determinadas condições. Entre as principais formas de tomada de decisão, destacam-se a **decisão simples** e a **decisão composta**. Compreender a diferença entre elas é essencial para criar algoritmos claros, eficientes e que resolvam corretamente os problemas propostos.

### Decisão Simples

A **decisão simples** ocorre quando há apenas uma condição a ser avaliada e, caso ela seja verdadeira, um bloco de comandos é executado. Se a condição for falsa, nada acontece e o fluxo do programa segue normalmente para a próxima instrução após a estrutura de decisão.

Em pseudocódigo, a decisão simples é representada da seguinte forma:

```pseudocode
SE condição ENTÃO
    // comandos a serem executados se a condição for verdadeira
FIM_SE
```

**Exemplo:**

```pseudocode
SE idade >= 18 ENTÃO
    ESCREVA "Você é maior de idade."
FIM_SE
```

Neste exemplo, a mensagem só será exibida se a condição `idade >= 18` for verdadeira. Caso contrário, o programa segue sem executar nenhum comando adicional relacionado à decisão.

### Decisão Composta

A **decisão composta** é utilizada quando é necessário executar um bloco de comandos caso a condição seja verdadeira **e outro bloco diferente caso a condição seja falsa**. Ou seja, há dois caminhos possíveis: um para o caso verdadeiro e outro para o caso falso.

Em pseudocódigo, a decisão composta é representada assim:

```pseudocode
SE condição ENTÃO
    // comandos se a condição for verdadeira
SENÃO
    // comandos se a condição for falsa
FIM_SE
```

**Exemplo:**

```pseudocode
SE idade >= 18 ENTÃO
    ESCREVA "Você é maior de idade."
SENÃO
    ESCREVA "Você é menor de idade."
FIM_SE
```

Neste caso, sempre será exibida uma mensagem: se a condição for verdadeira, uma mensagem; se for falsa, outra.

### Resumindo as Diferenças

| Característica         | Decisão Simples                | Decisão Composta                      |
|----------------------- |-------------------------------|---------------------------------------|
| Caminhos possíveis     | Apenas um (se verdadeiro)      | Dois (verdadeiro ou falso)            |
| Uso do `SENÃO`         | Não existe                    | Existe                                |
| Execução se falso      | Não executa nada               | Executa outro bloco de comandos       |
| Exemplo prático        | Verificar se um número é par   | Verificar se um número é par ou ímpar |

### Quando Usar Cada Uma?

- **Decisão simples**: Use quando só for necessário executar algo se a condição for verdadeira, sem necessidade de tratar o caso falso.
- **Decisão composta**: Use quando for necessário tratar tanto o caso verdadeiro quanto o falso, garantindo que sempre um dos blocos será executado.

### Conclusão

Entender a diferença entre decisão simples e composta é essencial para criar algoritmos que tomem decisões corretas e eficientes. Saber escolher a estrutura adequada para cada situação torna o código mais claro, organizado e fácil de manter, além de evitar erros lógicos comuns no desenvolvimento de programas.
```
