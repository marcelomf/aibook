# Exemplos de Sistemas Axiomáticos Clássicos

A lógica clássica, especialmente a lógica proposicional e a lógica de predicados, pode ser formalizada por meio de diferentes sistemas axiomáticos. Esses sistemas são conjuntos de axiomas (proposições assumidas como verdadeiras sem demonstração) e regras de inferência que permitem deduzir teoremas. Entre os sistemas axiomáticos clássicos mais influentes destacam-se o **sistema de Hilbert** e o **sistema de Frege**. A seguir, apresentamos uma visão geral desses sistemas, suas características e exemplos de axiomas.

---

## Sistema de Hilbert

O **sistema de Hilbert** (também chamado de sistema axiomático de Hilbert ou sistema de Hilbert-Ackermann) foi desenvolvido por David Hilbert e colaboradores no início do século XX. Ele é notável por sua simplicidade e economia: utiliza poucos axiomas e uma única regra de inferência principal, o **modus ponens**.

### Características

- **Economia de axiomas:** O sistema busca minimizar o número de axiomas.
- **Regra de inferência principal:** Modus ponens (de “A” e “A → B”, infere-se “B”).
- **Formalização rigorosa:** Serve de base para a metamatemática e para a prova de consistência de sistemas formais.

### Exemplo de Axiomas (Lógica Proposicional)

Um conjunto clássico de axiomas para a lógica proposicional no sistema de Hilbert é:

1. **A → (B → A)**
2. **(A → (B → C)) → ((A → B) → (A → C))**
3. **(¬A → ¬B) → (B → A)**

Onde:
- “→” representa a implicação.
- “¬” representa a negação.

**Regra de Inferência:**
- **Modus Ponens:** Se “A” e “A → B” são teoremas, então “B” também é teorema.

### Exemplo de Dedução

Seja A e B proposições quaisquer. Podemos deduzir que A → A é um teorema:

1. A → (B → A) (Axioma 1)
2. A → (A → A) (Substituindo B por A)
3. (A → (A → A)) → ((A → A) → (A → A)) (Axioma 2, com B = A, C = A)
4. (A → A) → (A → A) (Modus ponens em 2 e 3)
5. A → A (Modus ponens em 2 e 4)

---

## Sistema de Frege

O **sistema de Frege** foi apresentado por Gottlob Frege em sua obra *Begriffsschrift* (1879), considerada o marco inicial da lógica simbólica moderna. O sistema de Frege é mais complexo que o de Hilbert, pois foi concebido para formalizar não apenas a lógica proposicional, mas também a lógica de predicados.

### Características

- **Notação funcional:** Frege introduziu uma notação própria, baseada em funções e argumentos.
- **Axiomas e regras de inferência:** O sistema possui um conjunto de axiomas e regras, incluindo a generalização (para quantificadores).
- **Expressividade:** Permite formalizar argumentos matemáticos complexos.

### Exemplo de Axiomas (Simplificados)

Frege utilizou nove axiomas em sua obra original. Aqui, apresentamos uma versão simplificada, adaptada à notação moderna:

1. **A → (B → A)**
2. **(A → (B → C)) → ((A → B) → (A → C))**
3. **A → (¬A → B)**
4. **∀x A(x) → A(t)** (Se algo vale para todo x, vale para qualquer t)
5. **A(t) → ∃x A(x)** (Se algo vale para t, então existe x tal que vale para x)

**Regras de Inferência:**
- **Modus Ponens:** De “A” e “A → B”, infere-se “B”.
- **Generalização:** De “A(x)”, infere-se “∀x A(x)”, desde que x não seja livre em nenhuma hipótese.

### Exemplo de Dedução

Seja A(x) uma propriedade qualquer. Podemos deduzir que ∀x A(x) → A(t):

1. ∀x A(x) (Hipótese)
2. ∀x A(x) → A(t) (Axioma 4)
3. A(t) (Modus ponens em 1 e 2)

---

## Comparação e Importância

- **Sistema de Hilbert:** É mais enxuto e amplamente utilizado em introduções à lógica matemática, especialmente para lógica proposicional.
- **Sistema de Frege:** Mais robusto, adequado para lógica de predicados e fundamentos da matemática.

Ambos os sistemas são **completos** e **consistentes** para a lógica clássica, ou seja, tudo que é logicamente válido pode ser deduzido a partir dos axiomas, e não é possível deduzir contradições.

---

## Referências

- **Hilbert, D., & Ackermann, W.** (1928). *Grundzüge der theoretischen Logik*.
- **Frege, G.** (1879). *Begriffsschrift*.
- **Mendelson, E.** (2015). *Introdução à Lógica Matemática*.
- **Priest, G.** (2008). *An Introduction to Non-Classical Logic*.

---

## Conclusão

Os sistemas axiomáticos clássicos, como os de Hilbert e Frege, são fundamentais para a formalização da lógica. Eles fornecem as bases para o desenvolvimento da matemática, da ciência da computação e da própria filosofia lógica, permitindo a análise rigorosa de argumentos e a investigação dos limites do raciocínio formal.