# Exercícios de Impressão de Padrões com Laços (`for`, `while`, `do-while`)

A impressão de padrões utilizando laços é uma das formas mais eficazes de praticar e consolidar o entendimento sobre estruturas de repetição. Esses exercícios ajudam a desenvolver o raciocínio lógico, a manipulação de variáveis e o controle do fluxo de execução de um programa. A seguir, apresentamos exemplos e exercícios práticos de impressão de padrões, como triângulos e quadrados, utilizando os laços `for`, `while` e `do-while`.

---

## 1. Triângulo de Asteriscos

### Exemplo 1: Triângulo Retângulo

**Padrão desejado (para n = 5):**
```
*
**
***
****
*****
```

#### Usando o laço `for` (pseudocódigo):

```pseudocode
para i de 1 até n faça
    para j de 1 até i faça
        escreva "*"
    fim_para
    escreva nova_linha
fim_para
```

#### Usando o laço `while` (pseudocódigo):

```pseudocode
i ← 1
enquanto i ≤ n faça
    j ← 1
    enquanto j ≤ i faça
        escreva "*"
        j ← j + 1
    fim_enquanto
    escreva nova_linha
    i ← i + 1
fim_enquanto
```

#### Usando o laço `do-while` (pseudocódigo):

```pseudocode
i ← 1
faça
    j ← 1
    faça
        escreva "*"
        j ← j + 1
    enquanto j ≤ i
    escreva nova_linha
    i ← i + 1
enquanto i ≤ n
```

---

## 2. Quadrado de Asteriscos

**Padrão desejado (para n = 4):**
```
****
****
****
****
```

#### Usando o laço `for` (pseudocódigo):

```pseudocode
para i de 1 até n faça
    para j de 1 até n faça
        escreva "*"
    fim_para
    escreva nova_linha
fim_para
```

---

## 3. Triângulo Invertido

**Padrão desejado (para n = 5):**
```
*****
****
***
**
*
```

#### Usando o laço `for` (pseudocódigo):

```pseudocode
para i de n até 1 passo -1 faça
    para j de 1 até i faça
        escreva "*"
    fim_para
    escreva nova_linha
fim_para
```

---

## 4. Exercícios Propostos

### a) Imprima um triângulo alinhado à direita (para n = 5):

```
    *
   **
  ***
 ****
*****
```

**Dica:** Use espaços antes dos asteriscos.

### b) Imprima um quadrado com borda de asteriscos e interior vazio (para n = 5):

```
*****
*   *
*   *
*   *
*****
```

**Dica:** Imprima asterisco apenas nas bordas (primeira/última linha ou primeira/última coluna).

---

## 5. Boas Práticas

- **Indentação:** Mantenha o código bem indentado para facilitar a leitura.
- **Nomes de variáveis:** Use nomes significativos para variáveis de controle dos laços.
- **Testes:** Experimente com diferentes valores de `n` para verificar se o padrão está correto.
- **Comentários:** Comente o código para explicar a lógica dos laços, especialmente em padrões mais complexos.

---

## 6. Conclusão

A impressão de padrões com laços é uma excelente forma de praticar estruturas de repetição e lógica de programação. Esses exercícios desenvolvem a capacidade de decompor problemas em etapas menores e de manipular variáveis de controle de forma eficiente. Com a prática, você estará mais preparado para desafios mais avançados em qualquer linguagem de programação.

---

**Pratique!** Tente criar outros padrões, como losangos, pirâmides ou letras, utilizando os laços `for`, `while` e `do-while`. Quanto mais você praticar, mais natural será o uso dessas estruturas em seus algoritmos.