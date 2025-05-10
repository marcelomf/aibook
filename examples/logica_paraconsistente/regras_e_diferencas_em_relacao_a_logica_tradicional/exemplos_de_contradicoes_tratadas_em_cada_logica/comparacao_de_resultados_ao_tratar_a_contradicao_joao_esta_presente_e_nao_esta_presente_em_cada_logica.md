
# Comparação de Resultados ao Tratar a Contradição 'João está presente e não está presente' em Cada Lógica

A contradição clássica "João está presente e não está presente" é um exemplo paradigmático para ilustrar as diferenças fundamentais entre a lógica clássica e as lógicas paraconsistentes. Neste tópico, analisaremos como cada sistema lógico lida com essa contradição, destacando as consequências práticas e teóricas de suas abordagens.

---

## 1. Lógica Clássica

Na lógica clássica, vigora o **princípio da não contradição**: uma proposição não pode ser verdadeira e falsa ao mesmo tempo. Além disso, o **princípio do terceiro excluído** afirma que, para qualquer proposição \( P \), ou \( P \) é verdadeira, ou \( \neg P \) é verdadeira.

### Tratamento da Contradição

Se admitirmos a contradição:

> \( P \): "João está presente"  
> \( \neg P \): "João não está presente"  
> Supomos: \( P \) e \( \neg P \) são ambas verdadeiras.

Na lógica clássica, a partir de uma contradição, **qualquer proposição pode ser derivada** (princípio da explosão, _ex contradictione sequitur quodlibet_):

- Se \( P \) e \( \neg P \) são verdadeiras, então qualquer afirmação \( Q \) (por exemplo, "A Lua é feita de queijo") pode ser deduzida como verdadeira.
- O sistema se torna **trivial**: perde a capacidade de distinguir entre afirmações verdadeiras e falsas.

#### Exemplo Formal

1. \( P \) (João está presente)
2. \( \neg P \) (João não está presente)
3. \( P \) ou \( Q \) (por adição)
4. \( \neg P \) (repetição)
5. Portanto, \( Q \) (por eliminação)

**Consequência:** O sistema lógico colapsa diante de contradições.

---

## 2. Lógica Paraconsistente

As lógicas paraconsistentes foram desenvolvidas justamente para **evitar o colapso do sistema diante de contradições**. Elas rejeitam o princípio da explosão, permitindo que contradições sejam tratadas de forma controlada.

### 2.1. Lógica Paraconsistente Anotada (LPA)

Na LPA, proposições podem receber **anotações** que indicam graus de certeza, dúvida ou contradição. O sistema pode reconhecer que uma informação é contraditória, mas não permite que qualquer proposição seja deduzida a partir disso.

#### Tratamento da Contradição

- Se temos \( P \) e \( \neg P \), a LPA registra que há uma **inconsistência** sobre o estado de João.
- O sistema pode continuar operando, marcando a informação como "contraditória" ou "inconsistente", mas **não deduz que qualquer outra proposição seja verdadeira**.
- Pode-se, por exemplo, adiar decisões, buscar mais informações ou tratar a contradição explicitamente.

#### Exemplo Prático

- Banco de dados: Dois registros conflitantes sobre a presença de João.
- O sistema sinaliza a inconsistência, mas não compromete a integridade de outras informações.

### 2.2. Lógica de Priest (LP)

A Lógica de Priest, ou Lógica Paraconsistente de Priest, permite que proposições sejam simultaneamente verdadeiras e falsas (valores de verdade "ambos" ou "nenhum").

#### Tratamento da Contradição

- \( P \) e \( \neg P \) podem ser ambos verdadeiros sem que o sistema colapse.
- O sistema reconhece a existência de uma "verdade glut" (truth glut), mas **não permite a dedução arbitrária de qualquer proposição**.
- Outras proposições não relacionadas permanecem com seus valores de verdade originais.

---

## 3. Comparação dos Resultados

| Lógica                | Diante de \( P \) e \( \neg P \) | Consequência para o sistema         | Exemplo prático                  |
|-----------------------|:--------------------------------:|:-----------------------------------:|:---------------------------------:|
| **Clássica**          | Contradição = explosão            | Sistema se torna trivial            | Qualquer afirmação pode ser deduzida |
| **Paraconsistente (LPA)** | Contradição = inconsistente       | Sistema continua operando, marca a contradição | Inconsistência é sinalizada, mas não afeta outras informações |
| **Paraconsistente (LP)**  | Contradição = verdade glut         | Sistema reconhece ambos valores, sem explosão | Contradição é aceita localmente, sem afetar o restante do sistema |

---

## 4. Conclusão

A contradição "João está presente e não está presente" ilustra de forma clara a principal diferença entre a lógica clássica e as lógicas paraconsistentes. Enquanto a lógica clássica não tolera contradições e colapsa diante delas, as lógicas paraconsistentes oferecem mecanismos para lidar com inconsistências de maneira controlada, preservando a utilidade do sistema lógico e permitindo a continuidade do raciocínio mesmo em ambientes com informações conflitantes.

---

**Sugestão de leitura complementar:**  
- Newton da Costa, "Lógicas Paraconsistentes: Introdução e Aplicações"
- Graham Priest, "In Contradiction"
```
