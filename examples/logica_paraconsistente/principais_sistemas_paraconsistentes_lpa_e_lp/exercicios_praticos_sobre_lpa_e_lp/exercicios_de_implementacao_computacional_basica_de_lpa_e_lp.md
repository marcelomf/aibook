
# Exercícios de Implementação Computacional Básica de LPA e LP

A implementação computacional de sistemas lógicos paraconsistentes, como a **Lógica Paraconsistente Anotada (LPA)** e a **Lógica de Priest (LP)**, é fundamental para compreender seu funcionamento prático e explorar suas aplicações em áreas como bancos de dados, inteligência artificial e sistemas de tomada de decisão. A seguir, propomos exercícios práticos que envolvem a modelagem e a implementação básica desses sistemas em linguagem de programação, com foco em Python, devido à sua simplicidade e ampla adoção acadêmica.



## 1. Exercício: Representação de Fórmulas e Anotações na LPA

**Objetivo:**  
Implementar uma estrutura de dados para representar proposições anotadas na LPA, considerando os graus de evidência favorável e contrária.

### Passos sugeridos:

1. **Defina uma classe `ProposicaoLPA`** com os seguintes atributos:
   - `nome`: identificador da proposição (ex: "A", "B").
   - `mu`: grau de evidência favorável (0 ≤ μ ≤ 1).
   - `lambda_`: grau de evidência contrária (0 ≤ λ ≤ 1).

2. **Implemente métodos** para:
   - Calcular o **grau de certeza** (Gc = μ - λ).
   - Calcular o **grau de contradição** (Gct = μ + λ - 1).
   - Exibir o estado lógico da proposição (verdadeiro, falso, inconsistente, indefinido).

### Exemplo de código:

```python
class ProposicaoLPA:
    def __init__(self, nome, mu, lambda_):
        self.nome = nome
        self.mu = mu
        self.lambda_ = lambda_

    def grau_certeza(self):
        return self.mu - self.lambda_

    def grau_contradicao(self):
        return self.mu + self.lambda_ - 1

    def estado_logico(self):
        gc = self.grau_certeza()
        gct = self.grau_contradicao()
        if gc == 1 and gct == 0:
            return "Verdadeiro"
        elif gc == -1 and gct == 0:
            return "Falso"
        elif gct > 0:
            return "Inconsistente"
        elif gct < 0:
            return "Indefinido"
        else:
            return "Parcialmente verdadeiro/falso"

# Exemplo de uso
p = ProposicaoLPA("A", 0.7, 0.6)
print(f"Proposição {p.nome}: {p.estado_logico()}")
```



## 2. Exercício: Implementação Básica da Lógica de Priest (LP)

**Objetivo:**  
Modelar proposições na LP, que admite três valores: verdadeiro (V), falso (F) e ambos (B, para "both" – verdadeiro e falso simultaneamente).

### Passos sugeridos:

1. **Defina uma classe `ProposicaoLP`** com um atributo `valor` que pode ser `"V"`, `"F"` ou `"B"`.

2. **Implemente funções** para as operações lógicas:
   - **Negação**:  
     - ¬V = F  
     - ¬F = V  
     - ¬B = B
   - **Conjunção** (AND):  
     - V ∧ V = V  
     - V ∧ F = F  
     - V ∧ B = B  
     - F ∧ F = F  
     - F ∧ B = F  
     - B ∧ B = B
   - **Disjunção** (OR):  
     - V ∨ V = V  
     - V ∨ F = V  
     - V ∨ B = V  
     - F ∨ F = F  
     - F ∨ B = B  
     - B ∨ B = B

### Exemplo de código:

```python
class ProposicaoLP:
    def __init__(self, valor):
        assert valor in ("V", "F", "B")
        self.valor = valor

    def negacao(self):
        if self.valor == "V":
            return ProposicaoLP("F")
        elif self.valor == "F":
            return ProposicaoLP("V")
        else:
            return ProposicaoLP("B")

    def conjuncao(self, outra):
        if self.valor == "F" or outra.valor == "F":
            return ProposicaoLP("F")
        elif self.valor == "V" and outra.valor == "V":
            return ProposicaoLP("V")
        else:
            return ProposicaoLP("B")

    def disjuncao(self, outra):
        if self.valor == "V" or outra.valor == "V":
            return ProposicaoLP("V")
        elif self.valor == "F" and outra.valor == "F":
            return ProposicaoLP("F")
        else:
            return ProposicaoLP("B")

# Exemplo de uso
p1 = ProposicaoLP("V")
p2 = ProposicaoLP("B")
print("Negação de p1:", p1.negacao().valor)
print("p1 AND p2:", p1.conjuncao(p2).valor)
print("p1 OR p2:", p1.disjuncao(p2).valor)
```



## 3. Exercício: Simulação de Resolução de Contradições

**Objetivo:**  
Utilizar as implementações acima para simular a resolução de contradições em um pequeno conjunto de proposições.

### Proposta:

- Crie um conjunto de proposições com diferentes graus de evidência (LPA) ou valores (LP).
- Implemente uma função que identifique proposições inconsistentes (LPA: Gct > 0; LP: valor = "B").
- Proponha uma estratégia simples para tratar ou sinalizar essas contradições (ex: priorizar proposições com maior grau de certeza, ou sinalizar para revisão humana).



## 4. Exercício: Extensão e Exploração

**Sugestões:**

- Adapte as classes para ler dados de um arquivo (ex: CSV) com proposições e seus valores.
- Implemente uma interface simples (CLI) para o usuário inserir proposições e ver os resultados.
- Explore a integração com bibliotecas de IA para aplicar a lógica paraconsistente em sistemas de decisão.



## Referências e Leitura Recomendada

- **Batens, D.** (2000). *A survey of inconsistency-adaptive logics*. In: Frontiers of Paraconsistent Logic.
- **da Costa, N. C. A.** (1974). *On the theory of inconsistent formal systems*. Notre Dame Journal of Formal Logic.
- **Abe, Jair Minoro; Nakamatsu, Kazumi.** (2009). *Lógica Paraconsistente Anotada: Teoria e Aplicações*. Editora Livraria da Física.



Esses exercícios proporcionam uma introdução prática à implementação computacional dos principais sistemas paraconsistentes, permitindo ao leitor experimentar e compreender, de forma concreta, os conceitos fundamentais da LPA e da LP.

