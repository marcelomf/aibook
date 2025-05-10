```markdown
## Integer Overflow em Operações Aritméticas

O **integer overflow** (estouro de inteiro) é uma das vulnerabilidades mais comuns e perigosas em linguagens como C e C++. Ele ocorre quando uma operação aritmética resulta em um valor que excede o intervalo máximo que pode ser representado pelo tipo de dado inteiro utilizado. Esse comportamento pode causar resultados inesperados, corromper dados, permitir a execução de código malicioso e abrir portas para ataques como buffer overflows e bypass de validações de segurança.

### Como ocorre o Integer Overflow

Em C e C++, os tipos inteiros (`int`, `unsigned int`, `short`, `long`, etc.) possuem tamanhos fixos, definidos pela arquitetura e pelo compilador. Por exemplo, um `int` de 32 bits pode armazenar valores de -2.147.483.648 a 2.147.483.647. Se uma operação aritmética ultrapassar esse limite, o valor "dá a volta" (wrap around), retornando ao menor valor possível (no caso de inteiros com sinal) ou a zero (no caso de inteiros sem sinal).

#### Exemplo Simples

```c
#include <stdio.h>

int main() {
    int a = 2147483647; // Valor máximo para int de 32 bits
    int b = a + 1;
    printf("Resultado: %d\n", b); // Saída: Resultado: -2147483648
    return 0;
}
```

No exemplo acima, ao somar 1 ao valor máximo de um `int`, ocorre um overflow e o valor resultante é o menor valor possível para o tipo, devido ao comportamento de wrap around.

### Consequências de Integer Overflow

- **Corrompimento de Dados:** O valor calculado pode ser incorreto, levando a falhas lógicas no programa.
- **Vulnerabilidades de Segurança:** Muitas vezes, o integer overflow é explorado para burlar verificações de limites, causando buffer overflows ou alocando menos memória do que o necessário.
- **Execução de Código Arbitrário:** Em casos extremos, pode permitir que um atacante execute código malicioso.

#### Exemplo Prático: Alocação de Buffer

Considere um código que aloca um buffer para armazenar `n` elementos de tamanho `sizeof(int)`:

```c
#include <stdlib.h>
#include <stdio.h>

void process(int n) {
    int *buffer = malloc(n * sizeof(int));
    if (buffer == NULL) {
        printf("Erro de alocação!\n");
        return;
    }
    // ... uso do buffer
    free(buffer);
}
```

Se `n` for um valor muito grande, a multiplicação `n * sizeof(int)` pode causar um overflow, resultando em uma alocação de memória menor do que o esperado. Isso pode permitir que um atacante sobrescreva áreas de memória adjacentes, levando a corrupção de memória e possíveis execuções de código arbitrário.

### Prevenção de Integer Overflow

- **Validação de Entradas:** Sempre valide os valores recebidos de fontes externas antes de realizar operações aritméticas.
- **Verificação de Overflow:** Utilize funções seguras, como `__builtin_add_overflow` (GCC/Clang) ou `_add_overflow` (MSVC), que detectam overflows.
- **Tipos de Dados Adequados:** Use tipos de dados maiores quando necessário, como `size_t` para contadores e índices.
- **Ferramentas de Análise Estática:** Utilize ferramentas como AddressSanitizer, Valgrind e analisadores estáticos para detectar possíveis overflows em tempo de desenvolvimento.

#### Exemplo de Verificação de Overflow

```c
#include <limits.h>
#include <stdio.h>
#include <stdbool.h>

bool safe_multiply(int a, int b, int *result) {
    if (a > 0 && b > 0 && a > INT_MAX / b) return false;
    if (a < 0 && b < 0 && a < INT_MAX / b) return false;
    if ((a > 0 && b < 0 && b < INT_MIN / a) ||
        (a < 0 && b > 0 && a < INT_MIN / b)) return false;
    *result = a * b;
    return true;
}

int main() {
    int res;
    if (safe_multiply(1000000, 3000, &res)) {
        printf("Resultado seguro: %d\n", res);
    } else {
        printf("Overflow detectado!\n");
    }
    return 0;
}
```

### Considerações Finais

O integer overflow é uma falha sutil, mas com potencial devastador em sistemas críticos. Em C e C++, a responsabilidade de evitar esse tipo de erro recai sobre o programador, já que a linguagem não faz verificações automáticas de overflow em operações aritméticas. Portanto, é fundamental adotar práticas seguras de programação, validar entradas e utilizar ferramentas de análise para garantir a robustez e a segurança do software.

---
**Referências:**
- [CERT C Coding Standard: INT32-C. Ensure that operations on signed integers do not result in overflow](https://wiki.sei.cmu.edu/confluence/display/c/INT32-C.+Ensure+that+operations+on+signed+integers+do+not+result+in+overflow)
- [OWASP: Integer Overflow or Wraparound](https://owasp.org/www-community/vulnerabilities/Integer_Overflow_or_Wraparound)
- [ISO/IEC 9899:2018 (C18) Standard](https://www.iso.org/standard/74528.html)
```
