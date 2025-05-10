```markdown
# Stack Smashing em Funções Recursivas

A corrupção de memória, especialmente por meio de **stack smashing**, é uma das vulnerabilidades mais exploradas em softwares escritos em C e C++. Stack smashing ocorre quando uma função escreve além dos limites de um buffer alocado na stack, sobrescrevendo dados críticos como ponteiros de retorno, variáveis locais ou estruturas de controle de fluxo. Em funções recursivas, o risco é ainda maior devido à natureza do empilhamento contínuo de frames de execução, o que pode levar a cenários de exploração complexos e difíceis de detectar.

## O que é Stack Smashing?

Stack smashing é um tipo de buffer overflow que ocorre na stack (pilha) do programa. Quando um buffer local (por exemplo, um array) é sobrescrito além de seu limite, dados adjacentes na stack podem ser corrompidos. O alvo mais comum é o endereço de retorno da função, que, se modificado, pode redirecionar o fluxo de execução para código malicioso.

## Por que Funções Recursivas São Vulneráveis?

Funções recursivas são aquelas que se chamam repetidamente, criando múltiplos frames na stack. Cada chamada recursiva adiciona um novo conjunto de variáveis locais e o endereço de retorno à pilha. Se uma dessas funções contiver um buffer vulnerável, cada chamada recursiva representa uma nova oportunidade para sobrescrever dados críticos. Além disso, a profundidade da recursão pode aumentar o impacto do overflow, pois múltiplos frames podem ser corrompidos em sequência.

## Exemplo Prático: Stack Smashing em Função Recursiva

Considere o seguinte exemplo em C:

```c
#include <stdio.h>
#include <string.h>

void vulnerable_recursive(int n, char *input) {
    char buffer[16];
    printf("Recursion depth: %d\n", n);

    // Vulnerabilidade: não há verificação do tamanho de input
    strcpy(buffer, input);

    if (n > 0) {
        vulnerable_recursive(n - 1, input);
    }
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <input>\n", argv[0]);
        return 1;
    }
    vulnerable_recursive(3, argv[1]);
    return 0;
}
```

### Análise do Código

- A função `vulnerable_recursive` recebe um parâmetro `input` e copia seu conteúdo para um buffer local de 16 bytes usando `strcpy`, que **não verifica o tamanho** da entrada.
- A função é chamada recursivamente, criando múltiplos frames na stack.
- Se o usuário fornecer uma string maior que 16 bytes, cada chamada recursiva sobrescreverá o endereço de retorno do respectivo frame.
- Um atacante pode criar uma entrada especialmente formatada para sobrescrever o endereço de retorno em um dos frames, redirecionando a execução para código arbitrário.

### Possível Exploração

Em um cenário real, um atacante pode:

1. Fornecer uma entrada longa o suficiente para sobrescrever o endereço de retorno em um dos frames recursivos.
2. Injetar um payload (por exemplo, shellcode) na stack.
3. Redirecionar o fluxo de execução para o payload ao final da recursão.

A profundidade da recursão pode ser usada para ajustar a posição do overflow, tornando a exploração mais flexível e, em alguns casos, contornando proteções como canários de stack ou ASLR (Address Space Layout Randomization).

## Mitigações

Para evitar stack smashing, especialmente em funções recursivas, recomenda-se:

- **Evitar funções inseguras** como `strcpy`, `gets`, `sprintf`, etc. Prefira versões seguras como `strncpy`, `fgets`, `snprintf`.
- **Validar o tamanho dos dados** antes de copiá-los para buffers locais.
- **Limitar a profundidade da recursão** para evitar consumo excessivo de stack.
- **Utilizar proteções do compilador**, como stack canaries (`-fstack-protector`), e habilitar ASLR no sistema operacional.
- **Ferramentas de análise estática** podem ajudar a identificar pontos vulneráveis no código.

## Conclusão

Stack smashing em funções recursivas é uma vulnerabilidade crítica que pode ser explorada para execução arbitrária de código. O uso de funções inseguras e a falta de validação de dados de entrada são as principais causas. Compreender como a stack é manipulada em chamadas recursivas é fundamental para identificar e mitigar esse tipo de falha, tornando o desenvolvimento de software mais seguro e resiliente a ataques.

---
**Referências:**
- [The Art of Exploitation, Jon Erickson](https://www.nostarch.com/hacking2.htm)
- [Stack Smashing Attack Explained](https://owasp.org/www-community/attacks/Buffer_Overflow_Attack)
- [CERT C Coding Standard: STR07-C. Use the bounds-checking interfaces for string manipulation](https://wiki.sei.cmu.edu/confluence/display/c/STR07-C.+Use+the+bounds-checking+interfaces+for+string+manipulation)
```
