# Demonstração Formal de Argumentos em Cada Sistema Lógico

Neste tópico, exploraremos como se dá a demonstração formal de argumentos nos três principais sistemas lógicos abordados no ebook: lógica clássica, lógica modal e lógica intuicionista. Para cada sistema, apresentaremos um exemplo de argumento, sua formalização e a respectiva demonstração, destacando as diferenças fundamentais entre eles.

---

## 1. Lógica Clássica

A lógica clássica é o sistema mais tradicional e amplamente utilizado, baseado nos princípios do terceiro excluído e da não contradição. Utiliza-se, geralmente, a dedução natural ou tabelas verdade para demonstrações.

### Exemplo de Argumento

**Argumento:**  
Se chove, então a rua está molhada.  
Está chovendo.  
Logo, a rua está molhada.

**Formalização:**  
- \( p \): Está chovendo  
- \( q \): A rua está molhada  
- Premissas: \( p \rightarrow q \), \( p \)  
- Conclusão: \( q \)

### Demonstração Formal (Dedução Natural)

1. \( p \rightarrow q \) (Premissa)  
2. \( p \) (Premissa)  
3. \( q \) (Modus Ponens: 1, 2)

**Justificativa:**  
O Modus Ponens é uma regra válida na lógica clássica: se \( p \rightarrow q \) e \( p \) são verdadeiros, então \( q \) também é verdadeiro.

---

## 2. Lógica Modal

A lógica modal introduz operadores modais, como "necessariamente" (\( \Box \)) e "possivelmente" (\( \Diamond \)), permitindo raciocinar sobre necessidade e possibilidade.

### Exemplo de Argumento

**Argumento:**  
Se é necessário que, se João estuda, então ele passa, e é necessário que João estuda, então é necessário que João passa.

**Formalização:**  
- \( p \): João estuda  
- \( q \): João passa  
- Premissas: \( \Box(p \rightarrow q) \), \( \Box p \)  
- Conclusão: \( \Box q \)

### Demonstração Formal (Sistema K)

1. \( \Box(p \rightarrow q) \) (Premissa)  
2. \( \Box p \) (Premissa)  
3. \( p \rightarrow q \) (Da 1, por regra de Necessitação: se \( \Box A \), então \( A \) é verdadeiro em todos os mundos acessíveis)  
4. \( p \) (Da 2, mesma justificativa)  
5. \( q \) (Modus Ponens: 3, 4)  
6. \( \Box q \) (Por regra de Necessitação: se \( q \) é verdadeiro em todos os mundos acessíveis, então \( \Box q \))

**Observação:**  
A passagem de 5 para 6 depende do sistema modal adotado. No sistema S4 ou S5, a inferência é válida; no sistema K, é necessário justificar a aplicação da regra de necessitação.

---

## 3. Lógica Intuicionista

A lógica intuicionista rejeita o princípio do terceiro excluído e exige que a prova de uma afirmação seja construtiva. Algumas regras da lógica clássica não são válidas aqui.

### Exemplo de Argumento

**Argumento:**  
Se é impossível que não chova, então chove.

**Formalização:**  
- \( p \): Chove  
- Premissa: \( \neg\neg p \)  
- Conclusão: \( p \)

### Demonstração Formal

Na lógica clássica, de \( \neg\neg p \) deduz-se \( p \) (Lei da Dupla Negação).  
Na lógica intuicionista, essa inferência **não é válida em geral**. Ou seja, não é possível demonstrar formalmente \( p \) a partir de \( \neg\neg p \) sem uma prova construtiva de \( p \).

#### Exemplo de Demonstração Válida

Vamos considerar um argumento válido na lógica intuicionista:

**Argumento:**  
Se chove, então a rua está molhada.  
Chove.  
Logo, a rua está molhada.

**Formalização:**  
- \( p \rightarrow q \), \( p \) ⊢ \( q \)

**Demonstração Formal (Dedução Natural Intuicionista):**

1. \( p \rightarrow q \) (Premissa)  
2. \( p \) (Premissa)  
3. \( q \) (Eliminação do condicional: 1, 2)

**Justificativa:**  
A regra de eliminação do condicional é válida na lógica intuicionista, pois exige uma prova construtiva de \( p \) e de \( p \rightarrow q \) para concluir \( q \).

---

## Comparação Entre os Sistemas

- **Lógica Clássica:** Permite o uso de leis como o terceiro excluído (\( p \vee \neg p \)) e dupla negação (\( \neg\neg p \rightarrow p \)).
- **Lógica Modal:** Introduz operadores para necessidade e possibilidade, exigindo regras específicas para manipulação dos modais.
- **Lógica Intuicionista:** Exige provas construtivas; algumas inferências clássicas, como a dupla negação, não são válidas.

---

## Conclusão

A demonstração formal de argumentos varia conforme o sistema lógico adotado. Enquanto a lógica clássica permite inferências baseadas em princípios como o terceiro excluído, a lógica modal amplia o escopo para necessidade e possibilidade, e a lógica intuicionista exige uma abordagem construtiva, restringindo algumas inferências clássicas. Compreender essas diferenças é fundamental para analisar argumentos de forma rigorosa e adequada ao contexto filosófico ou científico em questão.