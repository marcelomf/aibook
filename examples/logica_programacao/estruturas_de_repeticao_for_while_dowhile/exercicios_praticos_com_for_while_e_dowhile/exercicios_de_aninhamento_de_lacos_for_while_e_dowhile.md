# Exercícios de Aninhamento de Laços: for, while e do-while

O aninhamento de laços (ou loops) é uma técnica fundamental na lógica de programação, permitindo a resolução de problemas mais complexos, como a manipulação de matrizes, geração de padrões e processamento de dados em múltiplas dimensões. Neste tópico, você aprenderá como utilizar laços `for`, `while` e `do-while` de forma aninhada, além de praticar com exercícios práticos e exemplos em pseudocódigo.

---

## O que é Aninhamento de Laços?

Aninhar laços significa colocar um laço dentro de outro. O laço externo controla uma dimensão do processamento, enquanto o laço interno controla outra. Por exemplo, ao percorrer uma matriz (tabela), o laço externo pode percorrer as linhas e o laço interno, as colunas.

### Exemplo Básico em Pseudocódigo

```pseudocode
para i de 1 até 3 faça
    para j de 1 até 2 faça
        escreva("i=", i, " j=", j)
    fim-para
fim-para
```

**Saída:**
```
i=1 j=1
i=1 j=2
i=2 j=1
i=2 j=2
i=3 j=1
i=3 j=2
```

---

## Exercícios Práticos

### 1. Tabuada com Laço Aninhado

**Enunciado:**  
Utilize laços aninhados para exibir as tabuadas do 1 ao 5.

**Pseudocódigo:**
```pseudocode
para i de 1 até 5 faça
    escreva("Tabuada do ", i)
    para j de 1 até 10 faça
        escreva(i, " x ", j, " = ", i * j)
    fim-para
    escreva("-----")
fim-para
```

---

### 2. Impressão de Padrão de Asteriscos

**Enunciado:**  
Utilize laços aninhados para imprimir o seguinte padrão:

```
*
**
***
****
*****
```

**Pseudocódigo:**
```pseudocode
para i de 1 até 5 faça
    para j de 1 até i faça
        escreva("*", sem nova linha)
    fim-para
    escreva("") // nova linha
fim-para
```

---

### 3. Soma dos Elementos de uma Matriz

**Enunciado:**  
Dada uma matriz 3x3, calcule a soma de todos os elementos usando laços aninhados.

**Pseudocódigo:**
```pseudocode
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
soma = 0
para i de 0 até 2 faça
    para j de 0 até 2 faça
        soma = soma + matriz[i][j]
    fim-para
fim-para
escreva("Soma dos elementos: ", soma)
```

---

### 4. Utilizando while e do-while Aninhados

#### a) while aninhado

**Enunciado:**  
Imprima todos os pares de números (i, j) onde 1 ≤ i ≤ 3 e 1 ≤ j ≤ 2.

**Pseudocódigo:**
```pseudocode
i = 1
enquanto i <= 3 faça
    j = 1
    enquanto j <= 2 faça
        escreva("i=", i, " j=", j)
        j = j + 1
    fim-enquanto
    i = i + 1
fim-enquanto
```

#### b) do-while aninhado

**Enunciado:**  
Imprima um quadrado de 4x4 usando asteriscos.

**Pseudocódigo:**
```pseudocode
i = 1
faça
    j = 1
    faça
        escreva("*", sem nova linha)
        j = j + 1
    enquanto j <= 4
    escreva("") // nova linha
    i = i + 1
enquanto i <= 4
```

---

## Dicas e Boas Práticas

- **Evite laços aninhados desnecessários:** Eles podem aumentar a complexidade do algoritmo.
- **Compreenda o fluxo:** O laço interno é executado completamente a cada iteração do laço externo.
- **Use nomes de variáveis claros:** Isso facilita a leitura e manutenção do código.
- **Teste com diferentes tamanhos:** Experimente alterar os limites dos laços para entender o comportamento.

---

## Conclusão

O aninhamento de laços é uma ferramenta poderosa para resolver problemas que envolvem múltiplas dimensões ou repetições complexas. Praticar com exercícios como os apresentados acima é fundamental para consolidar o entendimento e preparar-se para desafios mais avançados em programação.

Continue praticando, criando seus próprios exercícios e experimentando diferentes combinações de laços `for`, `while` e `do-while`!