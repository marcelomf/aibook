# Definição Formal do Princípio da Não Contradição

O **princípio da não contradição** é um dos pilares fundamentais da lógica clássica e da tradição filosófica ocidental. Ele estabelece que uma proposição não pode ser verdadeira e falsa ao mesmo tempo e sob o mesmo aspecto. Em outras palavras, é impossível que uma afirmação e sua negação sejam ambas verdadeiras simultaneamente.

## Formulação Filosófica

Historicamente, o princípio foi enunciado por Aristóteles em sua obra *Metafísica* (Livro IV, 1005b19-20):

> "É impossível que o mesmo atributo pertença e não pertença ao mesmo tempo ao mesmo sujeito e sob o mesmo aspecto."

Esse princípio é considerado uma das "leis do pensamento", sendo essencial para a coerência dos sistemas lógicos tradicionais.

## Definição Formal

Na lógica proposicional clássica, o princípio da não contradição pode ser expresso formalmente da seguinte maneira:

$$
\neg (P \land \neg P)
$$

Ou seja, **não é verdade que uma proposição $P$ e sua negação $\neg P$ sejam ambas verdadeiras ao mesmo tempo**.

### Interpretação

- $P$ representa uma proposição qualquer.
- $\neg P$ é a negação de $P$.
- $P \land \neg P$ significa que $P$ e $\neg P$ são ambas verdadeiras.
- $\neg (P \land \neg P)$ afirma que isso é impossível.

## Tabela-Verdade

A tabela-verdade do princípio da não contradição mostra que não existe nenhuma atribuição de valores de verdade para $P$ que torne $P \land \neg P$ verdadeiro:

| $P$ | $\neg P$ | $P \land \neg P$ |
|-----|----------|------------------|
| V   |    F     |        F         |
| F   |    V     |        F         |

Assim, $P \land \neg P$ é sempre falso, independentemente do valor de $P$.

## Importância na Lógica Clássica

O princípio da não contradição garante que os sistemas lógicos clássicos sejam **consistentes**: se uma contradição for admitida, qualquer proposição pode ser deduzida (princípio da explosão), tornando o sistema trivial. Por isso, a lógica clássica rejeita qualquer sistema em que $P$ e $\neg P$ possam ser ambos verdadeiros.

## Limitações

Apesar de sua centralidade, o princípio da não contradição é justamente o ponto de partida para o desenvolvimento das **lógicas paraconsistentes**, que buscam lidar de forma controlada com situações em que contradições podem ocorrer sem que todo o sistema lógico colapse.

---

**Resumo:**  
O princípio da não contradição, formalizado como $\neg (P \land \neg P)$, afirma que nenhuma proposição pode ser verdadeira e falsa ao mesmo tempo. Ele é fundamental para a lógica clássica, garantindo a consistência dos sistemas dedutivos tradicionais.