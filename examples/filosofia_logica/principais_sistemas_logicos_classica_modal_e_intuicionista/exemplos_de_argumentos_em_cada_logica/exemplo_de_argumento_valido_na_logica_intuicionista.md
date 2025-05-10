# Exemplo de Argumento Válido na Lógica Intuicionista

A **lógica intuicionista** é um sistema lógico desenvolvido a partir das ideias do matemático holandês L.E.J. Brouwer, que defendia uma abordagem construtivista para a matemática e a lógica. Diferentemente da lógica clássica, a lógica intuicionista rejeita alguns princípios, como o **terceiro excluído** (ou seja, a afirmação de que toda proposição é verdadeira ou falsa), exigindo que a prova de uma proposição seja construtiva: para afirmar que “existe x tal que P(x)”, é preciso ser capaz de exibir explicitamente tal x.

## Características da Lógica Intuicionista

- **Rejeição do terceiro excluído:** Não se aceita, em geral, que “P ou não-P” seja sempre verdadeiro.
- **Ênfase na construção:** Para provar “existe x tal que P(x)”, é necessário construir explicitamente um x.
- **Negação como impossibilidade:** A negação de P, ¬P, significa que uma suposição de P leva a uma contradição.

## Exemplo de Argumento Válido

Vamos considerar um exemplo simples, mas ilustrativo, de argumento válido na lógica intuicionista:

### Proposição

Se é possível provar que “P implica Q” e também é possível provar P, então é possível provar Q.

Formalmente:

1. \( P \rightarrow Q \)
2. \( P \)
3. Logo, \( Q \)

### Justificativa

Na lógica intuicionista, a implicação \( P \rightarrow Q \) é interpretada como: “Dada uma prova de P, posso construir uma prova de Q”. Portanto, se temos uma prova de \( P \rightarrow Q \) (ou seja, um método que transforma uma prova de P em uma prova de Q) e temos uma prova de P, então podemos efetivamente construir uma prova de Q.

### Demonstração

1. Suponha que temos uma demonstração de \( P \rightarrow Q \). Isso significa que existe um procedimento que, dada uma demonstração de P, produz uma demonstração de Q.
2. Suponha que temos uma demonstração de P.
3. Aplicando o procedimento da implicação à demonstração de P, obtemos uma demonstração de Q.

Portanto, o argumento é válido na lógica intuicionista.

### Exemplo Concreto

Vamos usar proposições concretas:

- P: “2 é um número par.”
- Q: “2 + 2 é um número par.”

1. \( P \rightarrow Q \): Se 2 é par, então 2 + 2 é par.
2. \( P \): 2 é par (prova: 2 = 2 × 1).
3. Logo, \( Q \): 2 + 2 = 4, que é par (prova: 4 = 2 × 2).

Neste caso, a prova de Q é construída a partir das provas de P e da implicação.

## Observação Importante

Na lógica intuicionista, nem todo argumento válido na lógica clássica é válido aqui. Por exemplo, o argumento do terceiro excluído (“P ou não-P”) não é, em geral, válido sem uma prova construtiva de P ou de ¬P. O exemplo acima, porém, é válido tanto na lógica clássica quanto na intuicionista, pois depende apenas da construção efetiva da prova.

## Conclusão

O exemplo apresentado ilustra como a lógica intuicionista exige uma abordagem construtiva para a validade dos argumentos. A implicação só pode ser usada quando se tem uma prova efetiva da hipótese, e a conclusão deve ser construída explicitamente. Isso diferencia a lógica intuicionista da lógica clássica e mostra sua relevância para áreas como a matemática construtiva e a ciência da computação.