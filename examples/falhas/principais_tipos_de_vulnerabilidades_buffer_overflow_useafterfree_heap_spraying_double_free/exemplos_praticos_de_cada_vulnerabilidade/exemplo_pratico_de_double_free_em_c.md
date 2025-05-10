```markdown
# Exemplo Prático de Double Free em C

A vulnerabilidade **Double Free** ocorre quando uma mesma região de memória alocada dinamicamente é liberada (free) mais de uma vez. Esse tipo de falha pode causar corrupção da estrutura interna do heap, levando a comportamentos inesperados, falhas de segurança e, em alguns casos, permitindo a execução de código malicioso.

## Entendendo o Double Free

Em C, a memória dinâmica é gerenciada por funções como `malloc`, `calloc`, `realloc` e `free`. Quando um ponteiro é passado para `free`, a região de memória apontada por ele é liberada para reutilização. Se o mesmo ponteiro for liberado novamente sem ser realocado, ocorre o double free.

### Consequências

- **Corrupção de Heap:** Pode corromper as estruturas internas do gerenciador de heap.
- **Execução de Código Arbitrário:** Em cenários avançados, pode ser explorado para executar código malicioso.
- **Crash da Aplicação:** O programa pode ser encerrado abruptamente.

## Exemplo Prático de Double Free

A seguir, apresentamos um exemplo simples de código em C que demonstra a ocorrência de um double free:

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    char *buffer = (char *)malloc(100 * sizeof(char));
    if (buffer == NULL) {
        printf("Falha ao alocar memória.\n");
        return 1;
    }

    // Uso do buffer
    snprintf(buffer, 100, "Exemplo de double free!");

    // Libera a memória alocada
    free(buffer);

    // Acidentalmente libera novamente a mesma memória
    free(buffer); // Double free ocorre aqui

    return 0;
}
```

### O que acontece nesse código?

1. **Alocação:** Um buffer de 100 bytes é alocado dinamicamente.
2. **Uso:** O buffer é utilizado normalmente.
3. **Primeira Liberação:** A memória é liberada corretamente com `free(buffer)`.
4. **Segunda Liberação:** O mesmo ponteiro é passado novamente para `free`, causando o double free.

### Saída e Comportamento

- Em muitos sistemas, o programa pode ser encerrado com uma mensagem de erro, como:
  ```
  double free or corruption (fasttop)
  Aborted (core dumped)
  ```
- Em outros casos, pode não haver mensagem visível, mas o heap pode estar corrompido, levando a falhas posteriores.

## Como Evitar Double Free

- **Zerar o Ponteiro após Liberação:** Após liberar a memória, atribua `NULL` ao ponteiro.
  ```c
  free(buffer);
  buffer = NULL;
  ```
- **Gerenciamento Cuidadoso:** Evite múltiplas liberações do mesmo ponteiro, especialmente em funções ou estruturas complexas.
- **Ferramentas de Análise:** Utilize ferramentas como [Valgrind](https://valgrind.org/) para detectar usos incorretos de memória.

## Conclusão

O double free é uma vulnerabilidade clássica, mas ainda relevante, especialmente em sistemas escritos em C/C++. Compreender como ela ocorre e como evitá-la é fundamental para o desenvolvimento de softwares seguros. Sempre que trabalhar com memória dinâmica, adote boas práticas de gerenciamento e utilize ferramentas de análise para identificar e corrigir possíveis falhas.

---
**Referências:**
- [CWE-415: Double Free](https://cwe.mitre.org/data/definitions/415.html)
- [The CERT C Coding Standard - MEM30-C. Do not access freed memory](https://wiki.sei.cmu.edu/confluence/display/c/MEM30-C.+Do+not+access+freed+memory)
```
