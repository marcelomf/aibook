# Comparação da Sintaxe entre for, while e do-while em Pseudocódigo e Linguagens Populares

As estruturas de repetição são fundamentais na lógica de programação, permitindo a execução de um bloco de código múltiplas vezes, de acordo com uma condição. As três principais estruturas são: **for**, **while** e **do-while**. Cada uma possui características próprias e sintaxes distintas, tanto em pseudocódigo quanto nas linguagens de programação mais utilizadas, como Python, Java, C e JavaScript.

## 1. Estrutura **for**

A estrutura **for** é geralmente utilizada quando se sabe previamente o número de repetições que o bloco de código deve executar. Ela é composta por três partes principais: inicialização, condição e incremento.

### Sintaxe em Pseudocódigo

```pseudocode
PARA i DE 1 ATÉ 10 FAÇA
    // Bloco de código
FIMPARA
```

### Sintaxe em Linguagens Populares

#### Python

```python
for i in range(1, 11):
    # Bloco de código
```

#### Java

```java
for (int i = 1; i <= 10; i++) {
    // Bloco de código
}
```

#### C

```c
for (int i = 1; i <= 10; i++) {
    // Bloco de código
}
```

#### JavaScript

```javascript
for (let i = 1; i <= 10; i++) {
    // Bloco de código
}
```

---

## 2. Estrutura **while**

A estrutura **while** é utilizada quando não se sabe exatamente quantas vezes o bloco de código será executado, mas a repetição depende de uma condição ser verdadeira.

### Sintaxe em Pseudocódigo

```pseudocode
ENQUANTO condição FAÇA
    // Bloco de código
FIMENQUANTO
```

### Sintaxe em Linguagens Populares

#### Python

```python
while condição:
    # Bloco de código
```

#### Java

```java
while (condicao) {
    // Bloco de código
}
```

#### C

```c
while (condicao) {
    // Bloco de código
}
```

#### JavaScript

```javascript
while (condicao) {
    // Bloco de código
}
```

---

## 3. Estrutura **do-while**

A estrutura **do-while** garante que o bloco de código será executado pelo menos uma vez, pois a condição é verificada **após** a execução do bloco.

### Sintaxe em Pseudocódigo

```pseudocode
REPITA
    // Bloco de código
ATÉ QUE condição
```

### Sintaxe em Linguagens Populares

#### Python

> **Observação:** Python não possui uma estrutura `do-while` nativa, mas pode ser simulada:

```python
while True:
    # Bloco de código
    if not condição:
        break
```

#### Java

```java
do {
    // Bloco de código
} while (condicao);
```

#### C

```c
do {
    // Bloco de código
} while (condicao);
```

#### JavaScript

```javascript
do {
    // Bloco de código
} while (condicao);
```

---

## 4. Comparação Resumida

| Estrutura   | Verificação da Condição | Execução Garantida ao Menos Uma Vez | Uso Comum                        |
|-------------|------------------------|-------------------------------------|----------------------------------|
| **for**     | Antes                  | Não                                 | Repetição com contador fixo      |
| **while**   | Antes                  | Não                                 | Repetição com condição variável  |
| **do-while**| Depois                 | Sim                                 | Repetição com condição variável, mas sempre executa ao menos uma vez |

---

## 5. Exemplos Práticos

### Exemplo: Imprimir números de 1 a 5

#### Pseudocódigo

```pseudocode
// for
PARA i DE 1 ATÉ 5 FAÇA
    ESCREVA i
FIMPARA

// while
i <- 1
ENQUANTO i <= 5 FAÇA
    ESCREVA i
    i <- i + 1
FIMENQUANTO

// do-while
i <- 1
REPITA
    ESCREVA i
    i <- i + 1
ATÉ QUE i > 5
```

#### Python

```python
# for
for i in range(1, 6):
    print(i)

# while
i = 1
while i <= 5:
    print(i)
    i += 1

# do-while (simulado)
i = 1
while True:
    print(i)
    i += 1
    if i > 5:
        break
```

#### Java

```java
// for
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

// while
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}

// do-while
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

---

## 6. Conclusão

A escolha entre **for**, **while** e **do-while** depende do problema a ser resolvido e da clareza do código. Compreender as diferenças de sintaxe e comportamento dessas estruturas em pseudocódigo e nas principais linguagens de programação é essencial para escrever algoritmos eficientes e fáceis de entender. Praticar com exemplos em diferentes contextos ajuda a fixar o uso correto de cada uma dessas estruturas.