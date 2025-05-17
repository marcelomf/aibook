
# Definição Formal das Regras de Inferência na Lógica Paraconsistente Anotada (LPA)

A **Lógica Paraconsistente Anotada (LPA)** é um dos sistemas mais estudados dentro do campo das lógicas paraconsistentes, especialmente no contexto brasileiro. Ela foi desenvolvida para permitir o tratamento formal de informações contraditórias, sem que isso leve à trivialidade lógica (ou seja, sem que qualquer proposição possa ser inferida a partir de uma contradição).

Neste tópico, apresentamos a definição formal das regras de inferência na LPA, com ênfase na LPA de dois valores anotados, conhecida como **LPA$_{2v}$**.



## 1. Estrutura Básica da LPA

Na LPA, cada proposição é associada a um **par ordenado de valores** (anotações), que representam graus de evidência favorável ($\mu$) e desfavorável ($\lambda$) à sua veracidade:

- $\mu \in [0,1]$: grau de evidência favorável
- $\lambda \in [0,1]$: grau de evidência desfavorável

Uma proposição $P$ é então representada como $P_{(\mu, \lambda)}$.



## 2. Semântica das Anotações

As anotações permitem classificar o estado lógico de uma proposição:

- **Verdadeiro**: $\mu = 1$ e $\lambda = 0$
- **Falso**: $\mu = 0$ e $\lambda = 1$
- **Inconsistente**: $\mu = 1$ e $\lambda = 1$
- **Indefinido**: $\mu = 0$ e $\lambda = 0$
- **Parcialmente verdadeiro/falso**: $0 < \mu, \lambda < 1$



## 3. Regras de Inferência na LPA

As regras de inferência da LPA são adaptações das regras clássicas, levando em conta as anotações. As principais operações lógicas (negação, conjunção, disjunção e implicação) são definidas sobre os pares $(\mu, \lambda)$.

### 3.1. Negaçao ($\neg$)

A negação de uma proposição inverte os graus de evidência:

$$
\neg P_{(\mu, \lambda)} = P_{(\lambda, \mu)}
$$

### 3.2. Conjunção ($\wedge$)

A conjunção de duas proposições toma o mínimo dos graus favoráveis e o máximo dos desfavoráveis:

$$
(P_{(\mu_1, \lambda_1)} \wedge Q_{(\mu_2, \lambda_2)}) = (\min(\mu_1, \mu_2), \max(\lambda_1, \lambda_2))
$$

### 3.3. Disjunção ($\vee$)

A disjunção toma o máximo dos graus favoráveis e o mínimo dos desfavoráveis:

$$
(P_{(\mu_1, \lambda_1)} \vee Q_{(\mu_2, \lambda_2)}) = (\max(\mu_1, \mu_2), \min(\lambda_1, \lambda_2))
$$

### 3.4. Implicação ($\rightarrow$)

A implicação pode ser definida de várias formas. Uma definição comum é:

$$
(P_{(\mu_1, \lambda_1)} \rightarrow Q_{(\mu_2, \lambda_2)}) = (\min(1, 1 - \mu_1 + \mu_2), \max(0, \lambda_2 - \lambda_1))
$$

Outras definições podem ser adotadas, dependendo da aplicação.



## 4. Inferência Paraconsistente

A inferência na LPA é feita considerando as anotações das premissas e aplicando as operações acima. O sistema evita a explosão lógica: mesmo que uma proposição e sua negação sejam ambas suportadas por evidências ($\mu = \lambda = 1$), não se pode inferir qualquer proposição arbitrária.

### Exemplo de Inferência

Se temos:

- $P_{(0.8, 0.2)}$ (forte evidência favorável a $P$)
- $Q_{(0.6, 0.4)}$ (evidência moderada a $Q$)

Então:

- $P \wedge Q = (\min(0.8, 0.6), \max(0.2, 0.4)) = (0.6, 0.4)$



## 5. Regras Formais de Dedução

A dedução na LPA segue um **cálculo natural** adaptado, onde cada passo de inferência respeita as operações sobre as anotações. As regras básicas incluem:

- **Introdução e eliminação de conjunção/disjunção**: conforme as operações acima.
- **Modus Ponens Paraconsistente**: Se $P_{(\mu_1, \lambda_1)}$ e $(P \rightarrow Q)_{(\mu_2, \lambda_2)}$, então $Q_{(\min(\mu_1, \mu_2), \max(\lambda_1, \lambda_2))}$.
- **Negações**: conforme a operação de negação.



## 6. Propriedades Importantes

- **Não explosividade**: A presença de $P_{(1,1)}$ (inconsistência) não permite inferir qualquer $Q$.
- **Grau de certeza**: Pode-se definir o grau de certeza de $P$ como $G_c(P) = \mu - \lambda$.
- **Grau de contradição**: $G_{ct}(P) = \min(\mu, \lambda)$.



## 7. Conclusão

A LPA oferece um conjunto formal de regras de inferência que permite manipular proposições com diferentes graus de evidência, possibilitando o raciocínio mesmo diante de contradições. Suas regras são fundamentais para aplicações em sistemas de decisão, bancos de dados inconsistentes e inteligência artificial, onde a informação pode ser incerta ou conflituosa.



**Referências:**

- da Costa, N. C. A., & Subrahmanian, V. S. (1993). Paraconsistent Logics: Consistency, Contradiction and Negation. In *Handbook of Logic in Artificial Intelligence and Logic Programming*.
- Batens, D. (2000). A survey of inconsistency-adaptive logics. In *Frontiers of Paraconsistent Logic*.
- Silva Filho, J. I. (1999). *Lógica Paraconsistente Anotada: fundamentos e aplicações*. Editora da Unesp.

