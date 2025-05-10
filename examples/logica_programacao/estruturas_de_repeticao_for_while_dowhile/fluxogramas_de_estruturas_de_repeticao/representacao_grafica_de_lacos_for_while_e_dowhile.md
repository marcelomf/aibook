
# Fluxogramas de Estruturas de Repetição

## Representação Gráfica de Laços `for`, `while` e `do-while`

As estruturas de repetição são fundamentais na lógica de programação, pois permitem executar um bloco de comandos várias vezes, de acordo com uma condição. Para facilitar o entendimento e o planejamento de algoritmos, é comum utilizar **fluxogramas** para representar graficamente o funcionamento desses laços. Neste tópico, você aprenderá como representar os laços `for`, `while` e `do-while` em fluxogramas, compreendendo suas diferenças e aplicações.

---

## O que é um Fluxograma?

Um **fluxograma** é uma representação gráfica de um algoritmo ou processo, utilizando símbolos padronizados para indicar o fluxo de execução. Os principais símbolos são:

- **Elipse**: início e fim do algoritmo.
- **Retângulo**: execução de uma ação ou comando.
- **Losango**: tomada de decisão (condição).
- **Setas**: indicam o fluxo de execução.

---

## 1. Fluxograma do Laço `for`

O laço `for` é utilizado quando se sabe previamente o número de repetições. Sua estrutura básica é composta por três partes: inicialização, condição e incremento.

### Exemplo de código:

```pseudo
para i de 1 até 5 faça
    escreva(i)
fim-para
```

### Representação em Fluxograma:

```plaintext
+-------------------+
|   Início          |
+-------------------+
         |
         v
+-------------------+
| i = 1             |
+-------------------+
         |
         v
+-------------------+
| i <= 5 ?          |<-------------------+
+-------------------+                    |
    | Sim                                |
    v                                    |
+-------------------+                    |
| escreva(i)        |                    |
+-------------------+                    |
         |                               |
         v                               |
+-------------------+                    |
| i = i + 1         |--------------------+
+-------------------+
         |
         v
    [Não]
         |
         v
+-------------------+
|   Fim             |
+-------------------+
```

**Explicação:**  
- Inicializa a variável `i`.
- Verifica a condição (`i <= 5`).
- Se verdadeiro, executa o bloco e incrementa `i`.
- Repete até a condição ser falsa.

---

## 2. Fluxograma do Laço `while`

O laço `while` executa o bloco de comandos enquanto a condição for verdadeira. A condição é testada **antes** da execução do bloco.

### Exemplo de código:

```pseudo
enquanto i <= 5 faça
    escreva(i)
    i = i + 1
fim-enquanto
```

### Representação em Fluxograma:

```plaintext
+-------------------+
|   Início          |
+-------------------+
         |
         v
+-------------------+
| i = 1             |
+-------------------+
         |
         v
+-------------------+
| i <= 5 ?          |
+-------------------+
    | Sim
    v
+-------------------+
| escreva(i)        |
+-------------------+
         |
         v
+-------------------+
| i = i + 1         |
+-------------------+
         |
         v
    [Volta à condição]
         |
    | Não
         v
+-------------------+
|   Fim             |
+-------------------+
```

**Explicação:**  
- Inicializa a variável `i`.
- Testa a condição antes de executar o bloco.
- Se verdadeiro, executa o bloco e incrementa `i`.
- Repete até a condição ser falsa.

---

## 3. Fluxograma do Laço `do-while`

O laço `do-while` garante que o bloco de comandos será executado **pelo menos uma vez**, pois a condição é testada **após** a execução do bloco.

### Exemplo de código:

```pseudo
faça
    escreva(i)
    i = i + 1
enquanto i <= 5
```

### Representação em Fluxograma:

```plaintext
+-------------------+
|   Início          |
+-------------------+
         |
         v
+-------------------+
| i = 1             |
+-------------------+
         |
         v
+-------------------+
| escreva(i)        |
+-------------------+
         |
         v
+-------------------+
| i = i + 1         |
+-------------------+
         |
         v
+-------------------+
| i <= 5 ?          |
+-------------------+
    | Sim
    v
[Volta ao bloco]
    | Não
         v
+-------------------+
|   Fim             |
+-------------------+
```

**Explicação:**  
- Inicializa a variável `i`.
- Executa o bloco de comandos.
- Testa a condição após a execução.
- Se verdadeiro, repete o bloco; se falso, encerra.

---

## Comparativo Visual

| Estrutura   | Testa Condição Antes? | Executa Pelo Menos Uma Vez? | Uso Comum                |
|-------------|-----------------------|-----------------------------|--------------------------|
| `for`       | Sim                   | Não                         | Repetição com contador   |
| `while`     | Sim                   | Não                         | Repetição condicional    |
| `do-while`  | Não                   | Sim                         | Repetição garantida      |

---

## Conclusão

A representação gráfica das estruturas de repetição em fluxogramas é uma ferramenta poderosa para visualizar e planejar algoritmos. Compreender como os laços `for`, `while` e `do-while` funcionam e como representá-los graficamente facilita a análise e a solução de problemas, além de servir como base sólida para a transição para qualquer linguagem de programação.

---
```