
# Exemplos de Declaração e Atribuição de Variáveis em Diferentes Linguagens

A declaração e atribuição de variáveis é um dos primeiros passos para começar a programar em qualquer linguagem. Variáveis são espaços na memória do computador reservados para armazenar valores que podem ser utilizados e modificados durante a execução do programa. Cada linguagem de programação possui sua própria sintaxe para declarar e atribuir valores a variáveis. A seguir, veremos exemplos práticos em três linguagens populares: **Python**, **Java** e **C**.

---

## Python

Python é uma linguagem de alto nível conhecida por sua sintaxe simples e direta. Em Python, não é necessário declarar o tipo da variável explicitamente; o interpretador identifica o tipo automaticamente de acordo com o valor atribuído.

```python
# Declaração e atribuição de variáveis em Python

idade = 25            # variável do tipo inteiro
nome = "Ana"          # variável do tipo string
altura = 1.68         # variável do tipo float
ativo = True          # variável do tipo booleano

print(idade, nome, altura, ativo)
```

**Observações:**
- Não é necessário informar o tipo da variável.
- O tipo é definido dinamicamente conforme o valor atribuído.
- O nome da variável deve começar com uma letra ou sublinhado (_).

---

## Java

Java é uma linguagem fortemente tipada, ou seja, é obrigatório informar o tipo da variável no momento da declaração. A atribuição pode ser feita na mesma linha da declaração ou posteriormente.

```java
// Declaração e atribuição de variáveis em Java

int idade = 25;             // variável do tipo inteiro
String nome = "Ana";        // variável do tipo string
double altura = 1.68;       // variável do tipo double (ponto flutuante)
boolean ativo = true;       // variável do tipo booleano

System.out.println(idade + " " + nome + " " + altura + " " + ativo);
```

**Observações:**
- O tipo da variável deve ser especificado antes do nome.
- O ponto e vírgula (;) é obrigatório ao final de cada instrução.
- Java diferencia letras maiúsculas de minúsculas nos nomes das variáveis.

---

## C

C também é uma linguagem fortemente tipada e exige a declaração do tipo da variável antes de seu uso. A atribuição pode ser feita na declaração ou em uma linha separada.

```c
// Declaração e atribuição de variáveis em C

#include <stdio.h>

int main() {
    int idade = 25;           // variável do tipo inteiro
    char nome[] = "Ana";      // variável do tipo string (array de caracteres)
    float altura = 1.68f;     // variável do tipo float
    int ativo = 1;            // variável do tipo inteiro (0 = falso, 1 = verdadeiro)

    printf("%d %s %.2f %d\n", idade, nome, altura, ativo);
    return 0;
}
```

**Observações:**
- O tipo da variável deve ser especificado.
- Strings são representadas como arrays de caracteres (`char nome[]`).
- Não existe o tipo booleano nativo em C; normalmente, usa-se `int` (0 para falso, 1 para verdadeiro).
- O sufixo `f` indica que o número é do tipo `float`.

---

## Comparativo

| Linguagem | Declaração de Tipo | Exemplo de Inteiro | Exemplo de String      |
|-----------|-------------------|--------------------|------------------------|
| Python    | Não obrigatório   | `idade = 25`       | `nome = "Ana"`         |
| Java      | Obrigatório       | `int idade = 25;`  | `String nome = "Ana";` |
| C         | Obrigatório       | `int idade = 25;`  | `char nome[] = "Ana";` |

---

## Conclusão

Compreender como declarar e atribuir variáveis em diferentes linguagens é fundamental para o desenvolvimento de algoritmos e programas. Cada linguagem possui suas particularidades, mas o conceito de variável permanece o mesmo: armazenar dados para serem utilizados durante a execução do programa. Praticar a declaração e atribuição em diferentes linguagens ajuda a consolidar o entendimento desses conceitos essenciais da lógica de programação.
```
