
# Estrutura Formal dos Sistemas Clássicos

A lógica clássica, também conhecida como lógica proposicional clássica ou lógica de dois valores, é o sistema lógico mais tradicional e amplamente utilizado na matemática, filosofia e ciência da computação. Sua estrutura formal é rigorosamente definida, permitindo a análise precisa de argumentos e a dedução de conclusões a partir de premissas. Neste tópico, exploraremos os principais componentes e regras que compõem a estrutura formal dos sistemas clássicos.

## 1. **Elementos Básicos da Lógica Clássica**

### a) **Alfabeto**
O alfabeto da lógica clássica é composto por:
- **Símbolos proposicionais**: letras maiúsculas (A, B, C, ...) que representam proposições ou sentenças declarativas.
- **Conectivos lógicos**: símbolos que conectam proposições, como:
  - **¬** (negação)
  - **∧** (conjunção)
  - **∨** (disjunção)
  - **→** (implicação)
  - **↔** (bicondicional)
- **Parênteses**: usados para agrupar proposições e definir a ordem de avaliação.

### b) **Sintaxe**
A sintaxe define as regras para a formação de fórmulas bem formadas (fbf). Por exemplo:
- Todo símbolo proposicional é uma fbf.
- Se φ é uma fbf, então ¬φ também é uma fbf.
- Se φ e ψ são fbfs, então (φ ∧ ψ), (φ ∨ ψ), (φ → ψ) e (φ ↔ ψ) também são fbfs.

### c) **Semântica**
A semântica da lógica clássica é baseada no princípio do bivalorismo: toda proposição é verdadeira (V) ou falsa (F), nunca ambos nem nenhum dos dois. A atribuição de valores de verdade é feita por meio de funções de verdade para cada conectivo.

#### Tabela-verdade dos conectivos principais:
| φ | ψ | ¬φ | φ ∧ ψ | φ ∨ ψ | φ → ψ | φ ↔ ψ |
|||-|-|-|-|-|
| V | V |  F |   V   |   V   |   V   |   V   |
| V | F |  F |   F   |   V   |   F   |   F   |
| F | V |  V |   F   |   V   |   V   |   F   |
| F | F |  V |   F   |   F   |   V   |   V   |

## 2. **Regras de Inferência**

A lógica clássica utiliza regras de inferência para deduzir novas proposições a partir de proposições já aceitas. As regras mais conhecidas são:

- **Modus Ponens**: Se φ e (φ → ψ) são verdadeiros, então ψ é verdadeiro.
- **Modus Tollens**: Se (φ → ψ) é verdadeiro e ψ é falso, então φ é falso.
- **Silogismo Disjuntivo**: Se (φ ∨ ψ) é verdadeiro e φ é falso, então ψ é verdadeiro.

Essas regras garantem que as deduções feitas dentro do sistema sejam válidas, ou seja, que a verdade das premissas assegure a verdade da conclusão.

## 3. **Axiomas e Sistemas Dedutivos**

A lógica clássica pode ser formalizada por meio de sistemas axiomáticos, como o sistema de Hilbert, ou sistemas de dedução natural. Um sistema axiomático típico inclui:

- Um conjunto de axiomas (fórmulas consideradas verdadeiras sem demonstração).
- Um conjunto de regras de inferência.

Por exemplo, no sistema de Hilbert para lógica proposicional, alguns axiomas são:
1. φ → (ψ → φ)
2. (φ → (ψ → χ)) → ((φ → ψ) → (φ → χ))
3. (¬φ → ¬ψ) → ((¬φ → ψ) → φ)

## 4. **Propriedades Fundamentais**

A lógica clássica possui propriedades importantes, como:

- **Consistência**: Não é possível derivar uma contradição (φ e ¬φ) a partir de axiomas consistentes.
- **Completude**: Toda fórmula logicamente válida pode ser derivada a partir dos axiomas e regras do sistema.
- **Decidibilidade**: Existe um procedimento algorítmico para determinar se uma fórmula é logicamente válida.

## 5. **Limitações da Estrutura Clássica**

Apesar de sua robustez, a estrutura formal da lógica clássica apresenta limitações, especialmente ao lidar com informações contraditórias. Segundo o princípio da explosão (ex contradictione sequitur quodlibet), a presença de uma contradição permite que qualquer proposição seja deduzida, tornando o sistema trivial. Essa limitação motiva o estudo de sistemas alternativos, como as lógicas paraconsistentes.



**Referências:**
- Mendelson, E. (2015). *Introduction to Mathematical Logic*. CRC Press.
- Priest, G. (2008). *An Introduction to Non-Classical Logic: From If to Is*. Cambridge University Press.
- Carnielli, W. A., & Coniglio, M. E. (2016). *Paraconsistent Logic: Consistency, Contradiction and Negation*. Springer.


