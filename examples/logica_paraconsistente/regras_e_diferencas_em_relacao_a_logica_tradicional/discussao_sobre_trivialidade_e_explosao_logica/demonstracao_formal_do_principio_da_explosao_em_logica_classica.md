# Demonstração Formal do Princípio da Explosão em Lógica Clássica

O **princípio da explosão** (em latim, *ex contradictione sequitur quodlibet*) é um dos pilares da lógica clássica. Ele afirma que, a partir de uma contradição, qualquer proposição pode ser deduzida como verdadeira. Em outras palavras, se um sistema lógico admite uma contradição, então qualquer afirmação pode ser provada dentro desse sistema, tornando-o trivial.

Neste tópico, apresentaremos uma demonstração formal do princípio da explosão, utilizando as regras básicas da lógica proposicional clássica.

---

## 1. Enunciado do Princípio da Explosão

Seja \( A \) uma proposição e \( \neg A \) sua negação. O princípio da explosão pode ser formalizado como:

> Se \( A \) e \( \neg A \) são ambos verdadeiros, então qualquer proposição \( B \) pode ser deduzida.

Em notação formal:
\[
A, \neg A \vdash B
\]

---

## 2. Regras da Lógica Clássica Utilizadas

Para a demonstração, utilizaremos as seguintes regras da lógica proposicional clássica:

- **Introdução da disjunção (\(\vee\)-intro):** Se \( A \) é verdadeiro, então \( A \vee B \) é verdadeiro.
- **Eliminação da conjunção (\(\wedge\)-elim):** De \( A \wedge B \), pode-se concluir \( A \) e \( B \).
- **Eliminação da negação (Reductio ad Absurdum):** Se \( A \) e \( \neg A \) são ambos verdadeiros, pode-se concluir qualquer proposição \( B \).

---

## 3. Demonstração Formal

Vamos demonstrar que, a partir de \( A \) e \( \neg A \), qualquer proposição \( B \) pode ser deduzida.

### Passo a Passo

1. **Hipótese:** \( A \) (suposição 1)
2. **Hipótese:** \( \neg A \) (suposição 2)
3. **Introdução da disjunção:** De (1), temos \( A \vee B \)
4. **Eliminação da negação:** De (2), sabemos que \( A \) é falso
5. **Eliminação da disjunção:** Como \( A \vee B \) é verdadeiro, mas \( A \) é falso, então \( B \) deve ser verdadeiro

#### Em notação de dedução natural:

\[
\begin{align*}
1. & \quad A \quad \text{(Hipótese)} \\
2. & \quad \neg A \quad \text{(Hipótese)} \\
3. & \quad A \vee B \quad \text{(Introdução da disjunção, 1)} \\
4. & \quad \neg A \quad \text{(Repetição, 2)} \\
5. & \quad B \quad \text{(Eliminação da disjunção, 3 e 4)} \\
\end{align*}
\]

### Justificativa

- A partir de \( A \), podemos inferir \( A \vee B \) (qualquer disjunção com \( A \) é verdadeira).
- Como \( \neg A \) também é verdadeiro, \( A \) é falso.
- Portanto, para que \( A \vee B \) seja verdadeiro, \( B \) deve ser verdadeiro.
- Assim, qualquer proposição \( B \) pode ser deduzida.

---

## 4. Consequências

O princípio da explosão mostra que a lógica clássica não tolera contradições: se um sistema admite uma contradição, ele se torna trivial, pois qualquer proposição pode ser provada. Isso motiva o desenvolvimento de **lógicas paraconsistentes**, que buscam evitar a explosão e permitir o raciocínio mesmo na presença de contradições.

---

## 5. Referências

- Priest, G. (2008). *An Introduction to Non-Classical Logic: From If to Is*. Cambridge University Press.
- da Costa, N. C. A. (1974). On the theory of inconsistent formal systems. *Notre Dame Journal of Formal Logic*, 15(4), 497-510.
- Mendelson, E. (2015). *Introduction to Mathematical Logic* (6th ed.). CRC Press.

---

**Resumo:**  
A demonstração formal do princípio da explosão evidencia uma limitação fundamental da lógica clássica: a incapacidade de lidar com contradições sem perder a distinção entre proposições verdadeiras e falsas. Este é um dos principais motivos para o estudo e aplicação da lógica paraconsistente, tema central deste eBook.