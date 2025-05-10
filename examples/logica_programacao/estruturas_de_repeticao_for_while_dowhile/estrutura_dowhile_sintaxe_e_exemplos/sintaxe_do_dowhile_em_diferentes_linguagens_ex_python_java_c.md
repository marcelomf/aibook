
# Estrutura do-while: Sintaxe e Exemplos

A estrutura de repetição **do-while** é utilizada para executar um bloco de código repetidamente, **garantindo que o bloco seja executado pelo menos uma vez**, independentemente da condição. Após a primeira execução, a condição é testada; se for verdadeira, o bloco é executado novamente, e assim por diante.

A sintaxe do **do-while** varia entre as linguagens de programação. A seguir, apresentamos exemplos em algumas das linguagens mais populares: **C**, **Java** e **Python**.

---

## Sintaxe do do-while em C

Em C, a estrutura do-while é nativa e possui a seguinte sintaxe:

```c
do {
    // Bloco de código a ser executado
} while (condição);
```

**Exemplo em C:**

```c
#include <stdio.h>

int main() {
    int contador = 1;
    do {
        printf("Contador: %d\n", contador);
        contador++;
    } while (contador <= 5);
    return 0;
}
```

**Saída:**
```
Contador: 1
Contador: 2
Contador: 3
Contador: 4
Contador: 5
```

---

## Sintaxe do do-while em Java

Em Java, a estrutura do-while é muito semelhante à de C:

```java
do {
    // Bloco de código a ser executado
} while (condição);
```

**Exemplo em Java:**

```java
public class ExemploDoWhile {
    public static void main(String[] args) {
        int contador = 1;
        do {
            System.out.println("Contador: " + contador);
            contador++;
        } while (contador <= 5);
    }
}
```

**Saída:**
```
Contador: 1
Contador: 2
Contador: 3
Contador: 4
Contador: 5
```

---

## Sintaxe do do-while em Python

O Python **não possui uma estrutura do-while nativa**. No entanto, é possível simular esse comportamento utilizando um loop `while` com uma lógica apropriada.

**Exemplo em Python:**

```python
contador = 1
while True:
    print(f"Contador: {contador}")
    contador += 1
    if contador > 5:
        break
```

**Saída:**
```
Contador: 1
Contador: 2
Contador: 3
Contador: 4
Contador: 5
```

Neste exemplo, o bloco de código é executado pelo menos uma vez, e a condição de parada é verificada ao final de cada iteração, simulando o comportamento do do-while.

---

## Resumo das Diferenças

| Linguagem | Suporte nativo ao do-while | Sintaxe específica |
|-----------|---------------------------|-------------------|
| C         | Sim                       | `do { ... } while (condição);` |
| Java      | Sim                       | `do { ... } while (condição);` |
| Python    | Não                       | Simulação com `while True` e `break` |

---

## Quando usar o do-while?

O do-while é útil quando **é necessário garantir que o bloco de código seja executado pelo menos uma vez**, como em situações de leitura de dados do usuário, menus interativos ou validação de entrada.

---

## Conclusão

A estrutura do-while é uma ferramenta importante na lógica de programação, permitindo a execução garantida de um bloco de código antes da verificação da condição. Embora nem todas as linguagens possuam suporte nativo, como é o caso do Python, é possível simular seu comportamento utilizando outras estruturas de repetição. Compreender a sintaxe e o funcionamento do do-while em diferentes linguagens é fundamental para escrever algoritmos eficientes e adaptáveis.
```
