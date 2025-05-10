# Princípio do Terceiro Excluído: Demonstração Formal

O **princípio do terceiro excluído** (em latim, *tertium non datur*) é um dos pilares fundamentais da lógica clássica. Ele afirma que, para qualquer proposição \( P \), ou \( P \) é verdadeira, ou sua negação \( \neg P \) é verdadeira. Não existe uma terceira possibilidade. Em termos formais:

\[
P \vee \neg P
\]

onde \( \vee \) representa a disjunção lógica ("ou").

## Enunciado Formal

Para toda proposição \( P \):

\[
\forall P \ (P \vee \neg P)
\]

## Demonstração Formal na Lógica Clássica

A demonstração do princípio do terceiro excluído pode ser feita utilizando as tabelas-verdade da lógica proposicional clássica.

### Tabela-Verdade

Vamos construir a tabela-verdade para \( P \vee \neg P \):

| \( P \) | \( \neg P \) | \( P \vee \neg P \) |
|:-------:|:------------:|:-------------------:|
|   V     |      F       |         V           |
|   F     |      V       |         V           |

- Quando \( P \) é verdadeira (V), \( \neg P \) é falsa (F), então \( P \vee \neg P \) é verdadeira (V).
- Quando \( P \) é falsa (F), \( \neg P \) é verdadeira (V), então \( P \vee \neg P \) é verdadeira (V).

Em ambos os casos, \( P \vee \neg P \) é sempre verdadeira, independentemente do valor de verdade de \( P \).

### Demonstração em Sistemas Dedutivos

Em sistemas dedutivos formais, como o sistema de Hilbert, o princípio do terceiro excluído pode ser provado a partir dos axiomas da lógica clássica. Por exemplo, considere os seguintes axiomas e regras:

1. **Axioma da adição**: \( P \rightarrow (P \vee Q) \)
2. **Axioma da negação**: \( \neg P \rightarrow (P \vee \neg P) \)
3. **Regra do modus ponens**: De \( P \) e \( P \rightarrow Q \), conclui-se \( Q \).

**Demonstração:**

- Se \( P \) é verdadeiro, pelo axioma 1, \( P \vee \neg P \) é verdadeiro.
- Se \( P \) é falso, então \( \neg P \) é verdadeiro, e pelo axioma 2, \( P \vee \neg P \) é verdadeiro.

Portanto, independentemente do valor de verdade de \( P \), \( P \vee \neg P \) é sempre verdadeiro.

## Observações

- O princípio do terceiro excluído é **rejeitado** em algumas lógicas não clássicas, como a lógica intuicionista e a lógica paraconsistente, pois nessas abordagens nem sempre é possível afirmar que uma proposição ou sua negação é verdadeira.
- Na lógica clássica, porém, este princípio é **universalmente válido** e é utilizado em diversas demonstrações, especialmente em provas por absurdo (*reductio ad absurdum*).

## Conclusão

A demonstração formal do princípio do terceiro excluído mostra que, na lógica clássica, para qualquer proposição, ou ela é verdadeira ou sua negação é verdadeira, sem espaço para uma terceira alternativa. Este princípio é fundamental para o raciocínio clássico, mas é justamente sua rejeição que abre espaço para o desenvolvimento de lógicas não clássicas, como a lógica paraconsistente, que permite lidar com contradições de maneira controlada.