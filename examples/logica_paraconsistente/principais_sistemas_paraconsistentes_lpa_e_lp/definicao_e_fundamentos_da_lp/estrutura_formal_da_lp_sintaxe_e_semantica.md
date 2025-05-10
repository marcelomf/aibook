
## Estrutura Formal da LP: Sintaxe e Semântica

A **Lógica Paraconsistente de Priest (LP)**, também conhecida como **Lógica da Falsidade Explosiva** ou **Lógica da Consistência**, é um dos sistemas paraconsistentes mais estudados e utilizados. Desenvolvida por Graham Priest na década de 1970, a LP foi projetada para permitir o raciocínio em contextos onde contradições podem ocorrer, sem que isso leve à trivialidade lógica (ou seja, sem que qualquer proposição se torne automaticamente verdadeira).

Neste tópico, abordaremos a estrutura formal da LP, detalhando sua **sintaxe** (como as fórmulas são construídas) e sua **semântica** (como as fórmulas são interpretadas e avaliadas).

---

### 1. Sintaxe da LP

A sintaxe da LP é muito semelhante à da lógica proposicional clássica. Os elementos básicos são:

- **Símbolos proposicionais**: $p, q, r, \ldots$
- **Conectivos lógicos**:
  - Negação: $\neg$
  - Conjunção: $\land$
  - Disjunção: $\lor$
  - Implicação: $\rightarrow$
- **Parênteses** para agrupamento

As **fórmulas bem formadas (fbf)** da LP são definidas recursivamente:

1. Todo símbolo proposicional é uma fbf.
2. Se $\varphi$ é uma fbf, então $\neg\varphi$ também é uma fbf.
3. Se $\varphi$ e $\psi$ são fbfs, então $(\varphi \land \psi)$, $(\varphi \lor \psi)$ e $(\varphi \rightarrow \psi)$ também são fbfs.

**Exemplo de fórmulas:**
- $p$
- $\neg p$
- $(p \land q)$
- $(\neg p \lor (q \rightarrow r))$

---

### 2. Semântica da LP

A principal diferença entre a LP e a lógica clássica está na **semântica**, ou seja, na forma como as fórmulas são avaliadas.

#### 2.1. Valores de Verdade

Na LP, cada proposição pode assumir **dois valores de verdade**: **Verdadeiro (V)** e **Falso (F)**. No entanto, diferentemente da lógica clássica, **uma proposição pode ser simultaneamente verdadeira e falsa**. Assim, há quatro possibilidades para cada proposição:

1. **Apenas Verdadeira**: V
2. **Apenas Falsa**: F
3. **Verdadeira e Falsa**: V e F (contradição)
4. **Nem Verdadeira nem Falsa**: (caso possível em algumas variantes, mas na LP padrão, toda proposição é pelo menos verdadeira ou falsa)

#### 2.2. Função de Avaliação

Uma **interpretação** $I$ atribui a cada símbolo proposicional um subconjunto de $\{V, F\}$, ou seja, $I(p) \subseteq \{V, F\}$.

- $I(p) = \{V\}$: $p$ é verdadeiro, não falso.
- $I(p) = \{F\}$: $p$ é falso, não verdadeiro.
- $I(p) = \{V, F\}$: $p$ é verdadeiro e falso (contradição).
- $I(p) = \emptyset$: $p$ não é verdadeiro nem falso (raramente usado na LP padrão).

#### 2.3. Tabelas de Verdade dos Conectivos

Os conectivos lógicos são definidos de modo a preservar a paraconsistência. A seguir, apresentamos as tabelas de verdade para cada conectivo, considerando as possíveis atribuições de valores.

##### Negação ($\neg$)

| $I(\varphi)$ | $I(\neg\varphi)$ |
|:------------:|:----------------:|
| $\{V\}$      | $\{F\}$          |
| $\{F\}$      | $\{V\}$          |
| $\{V, F\}$   | $\{V, F\}$       |

##### Conjunção ($\land$)

| $I(\varphi)$ | $I(\psi)$ | $I(\varphi \land \psi)$ |
|:------------:|:---------:|:-----------------------:|
| $\{V\}$      | $\{V\}$   | $\{V\}$                 |
| $\{V\}$      | $\{F\}$   | $\{F\}$                 |
| $\{F\}$      | $\{V\}$   | $\{F\}$                 |
| $\{F\}$      | $\{F\}$   | $\{F\}$                 |
| $\{V, F\}$   | qualquer  | $\{V, F\}$ se pelo menos um for $\{V, F\}$ |

##### Disjunção ($\lor$)

| $I(\varphi)$ | $I(\psi)$ | $I(\varphi \lor \psi)$ |
|:------------:|:---------:|:----------------------:|
| $\{V\}$      | qualquer  | $\{V\}$                |
| qualquer     | $\{V\}$   | $\{V\}$                |
| $\{F\}$      | $\{F\}$   | $\{F\}$                |
| $\{V, F\}$   | qualquer  | $\{V, F\}$ se pelo menos um for $\{V, F\}$ |

##### Implicação ($\rightarrow$)

A implicação na LP pode ser definida de várias formas. Uma definição comum é:

- $I(\varphi \rightarrow \psi)$ contém $V$ se $I(\varphi)$ não contém $V$ ou $I(\psi)$ contém $V$.
- $I(\varphi \rightarrow \psi)$ contém $F$ se $I(\varphi)$ contém $V$ e $I(\psi)$ não contém $V$.

---

### 3. Consequência Lógica na LP

Na LP, a consequência lógica é definida de modo a evitar a explosão. Ou seja, **de uma contradição não se pode deduzir qualquer coisa**. Formalmente, dizemos que $\varphi$ é consequência de um conjunto de premissas $\Gamma$ (escreve-se $\Gamma \models_{LP} \varphi$) se, em toda interpretação que torna todas as fórmulas de $\Gamma$ verdadeiras, $\varphi$ também é verdadeira.

---

### 4. Exemplo Prático

Considere as premissas:

1. $p$
2. $\neg p$

Na lógica clássica, de $p$ e $\neg p$ pode-se deduzir qualquer coisa (explosão). Na LP, isso **não ocorre**. Por exemplo, não é possível deduzir $q$ apenas a partir de $p$ e $\neg p$.

---

### 5. Resumo

A LP mantém a estrutura sintática da lógica clássica, mas altera sua semântica para permitir a coexistência de contradições sem trivializar o sistema. Isso a torna uma ferramenta poderosa para modelar situações reais em que informações contraditórias podem surgir, como em bancos de dados inconsistentes, sistemas de inteligência artificial e resolução de conflitos.

---

**Referências:**

- Priest, G. (2002). *An Introduction to Non-Classical Logic: From If to Is*. Cambridge University Press.
- Carnielli, W. A., & Coniglio, M. E. (2016). *Paraconsistent Logic: Consistency, Contradiction and Negation*. Springer.
```
