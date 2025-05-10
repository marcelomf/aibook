```markdown
# Heap Overflow em Alocação Dinâmica

A corrupção de memória na heap é uma das vulnerabilidades mais exploradas em softwares desenvolvidos em linguagens como C e C++. Dentre os diversos tipos de falhas, o **heap overflow** se destaca por sua gravidade e potencial de exploração, especialmente em aplicações que fazem uso intensivo de alocação dinâmica de memória.

## O que é Heap Overflow?

Heap overflow ocorre quando uma aplicação escreve além dos limites de um bloco de memória alocado dinamicamente na heap. Diferente do stack overflow, que afeta a pilha de execução, o heap overflow compromete a área de memória destinada à alocação dinâmica (via funções como `malloc`, `calloc`, `realloc` e `free`).

Essa vulnerabilidade pode permitir que um atacante sobrescreva estruturas de controle da heap, ponteiros ou dados sensíveis, levando a comportamentos inesperados, execução de código arbitrário ou escalonamento de privilégios.

## Como o Heap Overflow Acontece?

O heap overflow geralmente ocorre devido à ausência de validação adequada dos limites de buffers alocados dinamicamente. Isso pode acontecer, por exemplo, ao copiar dados para um buffer sem verificar se o tamanho da entrada cabe no espaço alocado.

### Exemplo Prático em C

Considere o seguinte código vulnerável:

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char *buffer = (char *)malloc(16); // Aloca 16 bytes
    if (buffer == NULL) {
        perror("malloc");
        return 1;
    }

    // Simula entrada do usuário
    char input[32] = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

    // Cópia insegura: não verifica o tamanho do buffer
    strcpy(buffer, input);

    printf("Buffer: %s\n", buffer);

    free(buffer);
    return 0;
}
```

No exemplo acima, `buffer` tem apenas 16 bytes, mas `strcpy` copia 32 bytes de `input`, causando um heap overflow. O conteúdo além do espaço alocado será sobrescrito, podendo corromper metadados da heap ou outros dados críticos.

## Consequências do Heap Overflow

- **Corrupção de Metadados da Heap:** Em implementações antigas do gerenciador de heap (como o ptmalloc do glibc), era possível sobrescrever ponteiros de controle, facilitando ataques como o *unlink*.
- **Execução de Código Arbitrário:** Um atacante pode manipular a heap para redirecionar o fluxo de execução, por exemplo, sobrescrevendo ponteiros de função.
- **Denial of Service (DoS):** A corrupção pode causar falhas e encerramento inesperado do programa.

## Exploração na Prática

A exploração de heap overflow depende do layout da heap, da implementação do gerenciador de memória e das proteções ativas (como *heap canaries*, *ASLR* e *DEP*). Em sistemas modernos, técnicas como *heap spraying* e *use-after-free* são frequentemente combinadas para aumentar a superfície de ataque.

### Exemplo de Exploração Simples

Em versões antigas do glibc, era possível sobrescrever o ponteiro de próximo bloco livre, levando à escrita arbitrária em memória durante a chamada de `free()`. Hoje, mitigadores como *Safe Unlinking* e *tcache* dificultam esse tipo de ataque, mas vulnerabilidades ainda podem ser exploradas em cenários específicos.

## Boas Práticas para Prevenção

- **Validação de Tamanho:** Sempre verifique o tamanho dos dados antes de copiá-los para buffers alocados dinamicamente.
- **Funções Seguras:** Prefira funções como `strncpy`, `memcpy` com limites explícitos, ou utilize bibliotecas modernas que previnem overflows.
- **Ferramentas de Análise:** Utilize ferramentas como *Valgrind*, *AddressSanitizer* e *static analyzers* para detectar possíveis overflows.
- **Mitigações em Tempo de Execução:** Ative proteções como *ASLR*, *DEP* e *heap canaries* no sistema operacional e no compilador.

## Conclusão

Heap overflows continuam sendo uma ameaça relevante, especialmente em sistemas legados ou aplicações que manipulam dados não confiáveis. O entendimento profundo dessa vulnerabilidade, aliado ao uso de boas práticas de programação e ferramentas de análise, é fundamental para o desenvolvimento de softwares seguros.

---
**Referências:**
- [OWASP: Heap Overflow](https://owasp.org/www-community/vulnerabilities/Heap_overflow)
- [The Art of Exploitation, Jon Erickson]
- [glibc malloc Internals](https://sourceware.org/glibc/wiki/MallocInternals)
```
