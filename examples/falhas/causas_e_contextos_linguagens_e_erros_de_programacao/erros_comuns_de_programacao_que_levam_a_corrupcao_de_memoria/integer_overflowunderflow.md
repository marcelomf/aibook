```markdown
## Integer Overflow/Underflow

A corrupção de memória em softwares pode ter diversas origens, e uma das causas mais frequentes e perigosas está relacionada a erros no tratamento de variáveis inteiras: o **integer overflow** (estouro de inteiro) e o **integer underflow** (subfluxo de inteiro). Esses erros, muitas vezes negligenciados, podem abrir portas para ataques sofisticados e comprometer a segurança de aplicações.

### O que são Integer Overflow e Underflow?

- **Integer Overflow** ocorre quando uma operação aritmética resulta em um valor maior do que o tipo de dado inteiro pode armazenar. Por exemplo, ao somar dois números grandes em uma variável `int` de 32 bits, o resultado pode ultrapassar o valor máximo permitido (`2.147.483.647`), fazendo com que o valor "dê a volta" e se torne negativo ou zero, dependendo da implementação.
- **Integer Underflow** é o oposto: acontece quando uma operação resulta em um valor menor do que o mínimo representável pelo tipo de dado. Por exemplo, subtrair de um inteiro já no valor mínimo pode fazer o valor "voltar" para o máximo positivo.

#### Exemplo em C

```c
#include <stdio.h>
#include <limits.h>

int main() {
    int max = INT_MAX;
    int min = INT_MIN;

    printf("Max: %d\n", max);
    printf("Max + 1 (Overflow): %d\n", max + 1);

    printf("Min: %d\n", min);
    printf("Min - 1 (Underflow): %d\n", min - 1);

    return 0;
}
```

Saída típica:
```
Max: 2147483647
Max + 1 (Overflow): -2147483648
Min: -2147483648
Min - 1 (Underflow): 2147483647
```

### Por que isso é um problema de segurança?

Em muitas situações, valores inteiros são usados para calcular tamanhos de buffers, índices de arrays ou limites de loops. Se um atacante conseguir manipular entradas para causar um overflow ou underflow, pode induzir o programa a:

- Alocar buffers menores do que o necessário, facilitando **buffer overflows**.
- Acessar áreas de memória não autorizadas.
- Bypassar verificações de segurança baseadas em limites.

#### Exemplo de Exploração

Considere uma função que aloca um buffer com base em um valor fornecido pelo usuário:

```c
void process_data(size_t length) {
    char *buffer = malloc(length + 10);
    // ... uso do buffer
}
```

Se `length` for próximo do valor máximo de `size_t`, `length + 10` pode causar um overflow, resultando em uma alocação muito menor do que o esperado. Isso pode permitir que um atacante sobrescreva áreas de memória adjacentes ao buffer.

### Como evitar integer overflow/underflow?

- **Validação de entradas:** Sempre valide valores vindos de fontes externas, garantindo que operações aritméticas não ultrapassem os limites do tipo de dado.
- **Uso de funções seguras:** Algumas linguagens e bibliotecas modernas oferecem funções que detectam overflows, como `__builtin_add_overflow` em GCC ou funções de verificação em Rust.
- **Tipos de dados apropriados:** Escolha tipos de dados com tamanhos adequados para os valores esperados.
- **Ferramentas de análise estática:** Utilize ferramentas que detectam possíveis overflows em tempo de compilação.

### Integer Overflow/Underflow em Outras Linguagens

- **C/C++:** Não há verificação automática de overflow/underflow em operações aritméticas com inteiros.
- **Java:** Overflows em inteiros são definidos pelo padrão, mas não geram exceções.
- **Python:** Inteiros têm precisão arbitrária, mas em operações com tipos fixos (como em módulos de criptografia), o problema pode ocorrer.
- **Rust:** Em modo debug, overflows causam panic; em release, o comportamento é de wrap-around (dá a volta).

### Conclusão

Erros de integer overflow e underflow são sutis, mas podem ter consequências graves para a segurança de softwares. O entendimento desses problemas e a adoção de práticas seguras de programação são essenciais para evitar vulnerabilidades de corrupção de memória e proteger aplicações contra ataques.

> **Dica:** Sempre que possível, utilize bibliotecas e linguagens que ofereçam proteção automática contra overflows, e nunca confie cegamente em valores vindos de usuários ou de fontes externas.
```
