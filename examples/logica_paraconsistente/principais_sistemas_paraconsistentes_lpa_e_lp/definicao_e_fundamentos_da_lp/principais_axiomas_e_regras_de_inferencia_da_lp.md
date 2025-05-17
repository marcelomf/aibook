
# Principais Axiomas e Regras de Inferência da LP (Lógica Paraconsistente de Priest)

A **Lógica Paraconsistente de Priest** (LP), também conhecida como **Lógica da Paraconsistência de Priest** ou **Lógica da Consistência Negável**, é um dos sistemas paraconsistentes mais estudados e utilizados. Desenvolvida por Graham Priest na década de 1970, a LP foi projetada para permitir o raciocínio em contextos onde contradições podem ocorrer, sem que isso leve à trivialidade lógica (ou seja, sem que qualquer proposição se torne automaticamente verdadeira).

Neste tópico, apresentamos os principais **axiomas** e **regras de inferência** da LP, destacando suas diferenças em relação à lógica clássica e explicando como essas características permitem o tratamento controlado de contradições.



## 1. Fundamentos da LP

A LP é uma lógica proposicional que compartilha muitos conectivos e axiomas com a lógica clássica, mas modifica a regra de inferência relacionada à contradição, conhecida como **princípio da explosão** (*ex contradictione sequitur quodlibet*). Na lógica clássica, a partir de uma contradição (por exemplo, $A$ e $\neg A$), qualquer proposição pode ser inferida. Na LP, isso não ocorre: a presença de uma contradição não implica que todo o sistema se torne trivial.



## 2. Axiomas da LP

A LP mantém a maioria dos axiomas da lógica clássica, especialmente aqueles relacionados aos conectivos **e** ($\land$), **ou** ($\lor$), **implicação** ($\rightarrow$) e **negação** ($\neg$). Os axiomas básicos incluem:

1. **Axiomas para conjunção ($\land$):**
   - $A \land B \rightarrow A$
   - $A \land B \rightarrow B$
   - $A \rightarrow (B \rightarrow (A \land B))$

2. **Axiomas para disjunção ($\lor$):**
   - $A \rightarrow (A \lor B)$
   - $B \rightarrow (A \lor B)$
   - $(A \rightarrow C) \rightarrow ((B \rightarrow C) \rightarrow ((A \lor B) \rightarrow C))$

3. **Axiomas para implicação ($\rightarrow$):**
   - $(A \rightarrow (B \rightarrow C)) \rightarrow ((A \rightarrow B) \rightarrow (A \rightarrow C))$
   - $A \rightarrow (B \rightarrow A)$

4. **Axiomas para negação ($\neg$):**
   - $\neg\neg A \leftrightarrow A$ (negação clássica, mas com semântica paraconsistente)

> **Observação:** A LP utiliza a negação clássica, mas sua semântica é alterada para permitir que $A$ e $\neg A$ possam ser ambos verdadeiros em certos modelos.



## 3. Regras de Inferência da LP

A principal diferença da LP em relação à lógica clássica está na **regra de inferência** relacionada à contradição:

- **Modus Ponens:**  
  Se $A$ e $A \rightarrow B$ são ambos verdadeiros, então $B$ é verdadeiro.
  $$
  \frac{A, \quad A \rightarrow B}{B}
  $$

- **Eliminação da Conjunção:**  
  De $A \land B$, pode-se inferir $A$ e $B$.

- **Introdução da Disjunção:**  
  De $A$, pode-se inferir $A \lor B$.

- **Eliminação da Disjunção:**  
  De $A \lor B$, se $A \rightarrow C$ e $B \rightarrow C$, então $C$.

- **Dupla Negação:**  
  De $A$, pode-se inferir $\neg\neg A$ e vice-versa.

### **Regra Modificada: Princípio da Explosão NÃO é Válido**

Na lógica clássica, a partir de $A$ e $\neg A$, pode-se inferir qualquer $B$ (explosão):

$$
\frac{A, \quad \neg A}{B}
$$

**Na LP, essa regra NÃO é válida.**  
Ou seja, mesmo que $A$ e $\neg A$ sejam ambos verdadeiros, não se pode inferir qualquer proposição arbitrária $B$.



## 4. Semântica da LP

A LP é frequentemente formalizada usando **lógicas de três valores** (verdadeiro, falso, ambos), também conhecidas como lógicas trivalentes. Os valores possíveis para uma proposição são:

- **V** (verdadeiro)
- **F** (falso)
- **B** (ambos: verdadeiro e falso)

A tabela verdade dos conectivos é ajustada para acomodar o valor "ambos". Por exemplo, para a negação:

| $A$ | $\neg A$ |
|--|-|
| V   | F        |
| F   | V        |
| B   | B        |



## 5. Resumo das Características da LP

- **Permite contradições controladas:** $A$ e $\neg A$ podem ser ambos verdadeiros sem que o sistema se torne trivial.
- **Mantém a maioria dos axiomas clássicos:** exceto o princípio da explosão.
- **Regras de inferência clássicas, exceto explosão:** modus ponens, eliminação e introdução de conectivos são mantidos.
- **Semântica trivalente:** permite o valor "ambos" para proposições contraditórias.



## 6. Referências

- Priest, G. (1979). The Logic of Paradox. *Journal of Philosophical Logic*, 8(1), 219–241.
- Carnielli, W. A., Coniglio, M. E. (2016). *Paraconsistent Logic: Consistency, Contradiction and Negation*. Springer.
- da Costa, N. C. A., French, S. (2003). *Science and Partial Truth: A Unitary Approach to Models and Scientific Reasoning*. Oxford University Press.



A LP é uma ferramenta poderosa para o raciocínio em ambientes onde a inconsistência é inevitável, como bancos de dados, sistemas de inteligência artificial e resolução de conflitos de informação, permitindo que sistemas continuem operando de forma útil mesmo diante de contradições.

