# Como Representar Estruturas if/else em Fluxogramas

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que um algoritmo escolha diferentes caminhos de execução de acordo com determinadas condições. Entre as estruturas mais comuns estão o `if` e o `else`, que possibilitam a tomada de decisões simples ou compostas. Para facilitar o entendimento e o planejamento de algoritmos, é comum utilizar **fluxogramas** para representar visualmente essas decisões.

Neste tópico, você aprenderá como representar estruturas `if/else` em fluxogramas, compreendendo os símbolos utilizados e a lógica por trás dessa representação.

---

## O que é um Fluxograma?

Um **fluxograma** é um diagrama que utiliza símbolos gráficos para descrever o fluxo de execução de um algoritmo ou processo. Ele facilita a visualização das etapas, decisões e caminhos possíveis, tornando o raciocínio lógico mais claro e organizado.

---

## Símbolos Básicos Utilizados

Antes de representar o `if/else`, é importante conhecer os principais símbolos usados em fluxogramas:

- **Elipse (Oval):** Indica o início e o fim do algoritmo.
- **Retângulo:** Representa uma ação ou instrução (ex: atribuição de valor, exibição de mensagem).
- **Losango:** Indica uma decisão, ou seja, um ponto onde o fluxo pode seguir por caminhos diferentes, dependendo de uma condição.
- **Setas:** Mostram a direção do fluxo do algoritmo.

---

## Representando o if/else em Fluxogramas

A estrutura `if/else` é usada para executar diferentes blocos de código dependendo se uma condição é verdadeira ou falsa. No fluxograma, essa decisão é representada pelo **losango**.

### Estrutura Básica

1. **Início:** Representado por uma elipse.
2. **Ação ou Leitura de Dados:** Retângulo para entrada de dados ou execução de uma ação.
3. **Decisão:** Losango com a condição a ser avaliada.
4. **Caminhos:** Dois caminhos saem do losango:
    - **Sim (Verdadeiro):** Caminho seguido se a condição for verdadeira.
    - **Não (Falso):** Caminho seguido se a condição for falsa.
5. **Ações Correspondentes:** Retângulos para as ações de cada caminho.
6. **Convergência:** Os caminhos se unem novamente para continuar o fluxo.
7. **Fim:** Elipse indicando o término do algoritmo.

---

### Exemplo Prático

**Problema:** Verificar se um número é positivo ou negativo.

**Pseudocódigo:**
```plaintext
Leia número
Se número >= 0 então
    Escreva "Número positivo"
Senão
    Escreva "Número negativo"
FimSe
```

**Fluxograma:**

```plaintext
   +-------------------+
   |      Início       |
   +-------------------+
            |
            v
   +-------------------+
   | Leia número       |
   +-------------------+
            |
            v
   +-------------------+
   | número >= 0 ?     | <--- Losango (Decisão)
   +-------------------+
        /      \
      Sim      Não
      /          \
+-------------------+   +---------------------+
| Escreva           |   | Escreva             |
| "Número positivo" |   | "Número negativo"   |
+-------------------+   +---------------------+
      \          /
        \      /
         v    v
   +-------------------+
   |      Fim          |
   +-------------------+
```

---

## Dicas para Representar if/else em Fluxogramas

- Sempre utilize o **losango** para decisões.
- Indique claramente os caminhos "Sim" e "Não" (ou "Verdadeiro" e "Falso") saindo do losango.
- Após a execução dos blocos de cada caminho, una-os novamente para continuar o fluxo do algoritmo.
- Mantenha o fluxograma limpo e organizado, facilitando a leitura e compreensão.

---

## Conclusão

Representar estruturas `if/else` em fluxogramas é uma habilidade essencial para quem está começando a aprender lógica de programação. Essa representação visual ajuda a planejar algoritmos, identificar possíveis erros e comunicar ideias de forma clara. Ao dominar o uso dos símbolos e a lógica dos fluxogramas, você estará mais preparado para criar soluções eficientes e bem estruturadas em qualquer linguagem de programação.