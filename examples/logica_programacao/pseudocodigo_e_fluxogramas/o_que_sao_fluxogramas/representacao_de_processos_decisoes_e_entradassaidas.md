
## O que são Fluxogramas

Fluxogramas são representações gráficas de processos, algoritmos ou sistemas, utilizando símbolos padronizados para ilustrar a sequência de ações, decisões e fluxos de dados. Eles são ferramentas visuais fundamentais na lógica de programação, pois facilitam a compreensão, análise e comunicação de como um determinado problema será resolvido passo a passo.

### Representação de Processos

No contexto de fluxogramas, **processos** correspondem a operações ou instruções que transformam dados ou executam alguma ação. Cada processo é representado por um **retângulo**. Dentro desse símbolo, descreve-se a ação a ser realizada, como cálculos, atribuições de valores a variáveis ou chamadas de funções.

**Exemplo:**
```
+----------------------+
|    Calcular média    |
+----------------------+
```

Os processos são conectados por **setas**, que indicam a ordem de execução das etapas. Essa sequência garante que o fluxo do algoritmo seja claro e linear, facilitando a identificação de possíveis melhorias ou correções.

### Representação de Decisões

As **decisões** são pontos do algoritmo onde uma condição é avaliada, e o fluxo pode seguir por caminhos diferentes, dependendo do resultado (verdadeiro ou falso). No fluxograma, decisões são representadas por **losangos**.

Dentro do losango, coloca-se a condição a ser avaliada. Das extremidades do losango, partem setas indicando os possíveis caminhos: geralmente, uma seta para "Sim" (condição verdadeira) e outra para "Não" (condição falsa).

**Exemplo:**
```
      +----------------------+
      |  Nota >= 7?          |
      +----------------------+
         /           \
      Sim             Não
     /                 \
Aprovado           Reprovado
```

Essa representação torna visualmente simples entender onde o algoritmo pode tomar rumos diferentes, facilitando a análise de todas as possibilidades.

### Representação de Entradas e Saídas

As **entradas** e **saídas** são os pontos do algoritmo onde dados são recebidos do usuário ou de outro sistema (entrada) ou onde resultados são apresentados (saída). No fluxograma, ambos são representados por **paralelogramos**.

- **Entrada:** Indica a leitura de dados, como solicitar que o usuário digite um valor.
- **Saída:** Indica a exibição de informações, como mostrar o resultado de um cálculo.

**Exemplo:**
```
+----------------------+
|  Ler valor do usuário|
+----------------------+

+----------------------+
|  Exibir resultado    |
+----------------------+
```

### Símbolos Básicos de Fluxogramas

| Símbolo         | Significado         | Utilização Principal           |
|-----------------|--------------------|-------------------------------|
| Oval            | Início/Fim         | Indica o início ou fim do fluxo|
| Retângulo       | Processo           | Executa uma ação ou cálculo   |
| Losango         | Decisão            | Avalia uma condição           |
| Paralelogramo   | Entrada/Saída      | Recebe ou exibe dados         |
| Seta            | Fluxo de Controle  | Indica a direção do fluxo     |

### Exemplo Prático

Abaixo, um exemplo simples de fluxograma para um algoritmo que lê dois números, soma-os e exibe o resultado:

```
[Início]
   |
   v
[Ler número 1]  <-- Paralelogramo (Entrada)
   |
   v
[Ler número 2]  <-- Paralelogramo (Entrada)
   |
   v
[Somar números] <-- Retângulo (Processo)
   |
   v
[Exibir resultado] <-- Paralelogramo (Saída)
   |
   v
[Fim]
```

### Conclusão

A utilização de fluxogramas na lógica de programação é essencial para planejar, documentar e comunicar algoritmos de forma clara e eficiente. Ao representar processos, decisões e entradas/saídas com símbolos padronizados, fluxogramas tornam o desenvolvimento de soluções mais organizado e acessível, especialmente para iniciantes. Com a prática, a leitura e criação de fluxogramas se tornam habilidades valiosas para qualquer programador.
```
