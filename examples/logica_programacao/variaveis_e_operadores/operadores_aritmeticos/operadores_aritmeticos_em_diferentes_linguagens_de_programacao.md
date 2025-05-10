# Operadores Aritméticos em Diferentes Linguagens de Programação

Os operadores aritméticos são fundamentais na lógica de programação, pois permitem realizar operações matemáticas básicas, como adição, subtração, multiplicação, divisão e outras. Eles são amplamente utilizados em algoritmos para manipular valores numéricos, calcular resultados e tomar decisões com base em cálculos. Embora o conceito de operadores aritméticos seja universal, a sintaxe pode variar ligeiramente entre as diferentes linguagens de programação.

Neste tópico, você aprenderá sobre os principais operadores aritméticos, como utilizá-los e verá exemplos práticos em algumas das linguagens de programação mais populares: Python, Java, C e JavaScript.

---

## Principais Operadores Aritméticos

Os operadores aritméticos mais comuns são:

| Operador | Descrição           | Exemplo (a=10, b=3) | Resultado |
|----------|---------------------|---------------------|-----------|
| `+`      | Adição              | a + b               | 13        |
| `-`      | Subtração           | a - b               | 7         |
| `*`      | Multiplicação       | a * b               | 30        |
| `/`      | Divisão             | a / b               | 3.33...   |
| `%`      | Módulo (resto)      | a % b               | 1         |
| `**`     | Exponenciação       | a ** b              | 1000      |

> **Observação:** Nem todas as linguagens utilizam o mesmo símbolo para exponenciação.

---

## Exemplos em Diferentes Linguagens

### Python

```python
a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.3333333333333335
print(a % b)   # 1
print(a ** b)  # 1000
```

- **Divisão inteira:** `a // b` resulta em 3 (descarta as casas decimais).
- **Exponenciação:** `**` é o operador para potência.

---

### Java

```java
int a = 10;
int b = 3;

System.out.println(a + b);   // 13
System.out.println(a - b);   // 7
System.out.println(a * b);   // 30
System.out.println(a / b);   // 3 (divisão inteira)
System.out.println(a % b);   // 1
// Exponenciação: Math.pow(a, b)
System.out.println(Math.pow(a, b)); // 1000.0
```

- **Divisão inteira:** Se ambos os operandos forem inteiros, o resultado será inteiro.
- **Exponenciação:** Utiliza-se o método `Math.pow(base, expoente)`.

---

### C

```c
#include <stdio.h>
#include <math.h>

int main() {
    int a = 10, b = 3;
    printf("%d\n", a + b);   // 13
    printf("%d\n", a - b);   // 7
    printf("%d\n", a * b);   // 30
    printf("%d\n", a / b);   // 3 (divisão inteira)
    printf("%d\n", a % b);   // 1
    // Exponenciação: pow(a, b) retorna double
    printf("%.0f\n", pow(a, b)); // 1000
    return 0;
}
```

- **Divisão inteira:** O resultado é inteiro se ambos os operandos forem inteiros.
- **Exponenciação:** Usa-se a função `pow()` da biblioteca `math.h`.

---

### JavaScript

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.3333333333333335
console.log(a % b);   // 1
console.log(a ** b);  // 1000
```

- **Divisão:** Sempre retorna número de ponto flutuante.
- **Exponenciação:** Usa-se `**` (desde o ECMAScript 2016).

---

## Considerações Importantes

- **Precedência:** Operadores aritméticos seguem uma ordem de precedência (por exemplo, multiplicação e divisão são avaliadas antes de adição e subtração).
- **Tipos de dados:** O tipo dos operandos pode influenciar o resultado (por exemplo, divisão inteira vs. divisão real).
- **Exceções:** Divisão por zero geralmente causa erro ou resultado indefinido.

---

## Exercício Prático

Implemente um algoritmo que leia dois números e exiba o resultado das operações aritméticas básicas entre eles na linguagem de sua escolha.

---

## Conclusão

Os operadores aritméticos são essenciais para qualquer linguagem de programação. Compreender como utilizá-los e as diferenças de sintaxe entre as linguagens é fundamental para desenvolver algoritmos eficientes e corretos. Pratique utilizando esses operadores em diferentes contextos para consolidar seu aprendizado!