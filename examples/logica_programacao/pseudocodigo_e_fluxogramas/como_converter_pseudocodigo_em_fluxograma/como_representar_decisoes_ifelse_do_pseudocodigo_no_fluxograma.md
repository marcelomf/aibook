# Como Representar Decisões (if/else) do Pseudocódigo no Fluxograma

Ao aprender lógica de programação, compreender como representar decisões é fundamental para a construção de algoritmos eficientes. No pseudocódigo, as decisões são geralmente expressas por estruturas condicionais como `if`, `else if` e `else`. Já nos fluxogramas, essas decisões são representadas por símbolos específicos e caminhos distintos, facilitando a visualização do fluxo do algoritmo.

## 1. Estruturas de Decisão no Pseudocódigo

No pseudocódigo, uma decisão simples pode ser escrita assim:

```plaintext
Se idade >= 18 então
    Escreva "Maior de idade"
Senão
    Escreva "Menor de idade"
FimSe
```

Essa estrutura indica que, dependendo do valor da variável `idade`, o algoritmo seguirá por um caminho ou outro.

## 2. Símbolo de Decisão no Fluxograma

No fluxograma, as decisões são representadas pelo **losango** (ou diamante). Dentro desse símbolo, colocamos a condição a ser avaliada. A partir do losango, saem dois (ou mais) caminhos, geralmente rotulados como **Sim** (Verdadeiro/True) e **Não** (Falso/False).

### Exemplo Visual

```plaintext
   +-------------------+
   |   idade >= 18?    |
   +---------+---------+
             |
      +------v------+
      |    Sim      |
      +------|------+
             |
   +----------------------+
   | "Maior de idade"     |
   +----------------------+
             |
      +------v------+
      |    Não      |
      +------|------+
             |
   +----------------------+
   | "Menor de idade"     |
   +----------------------+
```

## 3. Passo a Passo: Convertendo if/else do Pseudocódigo para Fluxograma

### Passo 1: Identifique a Condição

No pseudocódigo, localize a expressão condicional (`Se idade >= 18 então`).

### Passo 2: Desenhe o Losango

No fluxograma, desenhe um losango e escreva dentro dele a condição a ser avaliada (`idade >= 18?`).

### Passo 3: Defina os Caminhos

- Do losango, trace duas setas:
  - Uma para o caminho **Sim** (condição verdadeira).
  - Outra para o caminho **Não** (condição falsa).

### Passo 4: Represente as Ações

- Após cada seta, desenhe um retângulo (símbolo de processo) com a ação correspondente:
  - Se **Sim**: "Maior de idade"
  - Se **Não**: "Menor de idade"

### Passo 5: Continue o Fluxo

Após cada ação, as setas podem se unir novamente, indicando a continuação do algoritmo.

## 4. Dicas e Boas Práticas

- **Rotule sempre os caminhos**: Use "Sim"/"Não" ou "Verdadeiro"/"Falso" para deixar claro o fluxo.
- **Mantenha o fluxograma limpo**: Evite cruzamento de linhas e excesso de informações em um único losango.
- **Para múltiplas decisões**: Use vários losangos em sequência ou estruturas de decisão aninhadas.

## 5. Exemplo Completo

### Pseudocódigo

```plaintext
Se nota >= 7 então
    Escreva "Aprovado"
Senão
    Escreva "Reprovado"
FimSe
```

### Fluxograma

```plaintext
[Início]
   |
   v
[nota >= 7?]
  /      \
Sim      Não
/          \
v           v
[Aprovado] [Reprovado]
   \        /
    v      v
   [Fim]
```

## 6. Conclusão

Representar decisões do pseudocódigo no fluxograma é um passo essencial para visualizar e entender o fluxo lógico de um algoritmo. O uso correto do losango e a clareza nos caminhos facilitam a comunicação e a análise do processo, tornando o desenvolvimento de soluções mais eficiente e organizado.

---

**Resumo:**  
- Decisões (if/else) no pseudocódigo são representadas por losangos no fluxograma.
- Os caminhos do losango indicam as possíveis alternativas (Sim/Não).
- Cada caminho leva a uma ação ou outro processo, conforme definido no pseudocódigo.
- A representação gráfica facilita a compreensão e a comunicação do algoritmo.

---

> **Dica:** Pratique convertendo diferentes estruturas condicionais do pseudocódigo para fluxogramas. Isso fortalecerá sua habilidade de análise e desenvolvimento lógico!