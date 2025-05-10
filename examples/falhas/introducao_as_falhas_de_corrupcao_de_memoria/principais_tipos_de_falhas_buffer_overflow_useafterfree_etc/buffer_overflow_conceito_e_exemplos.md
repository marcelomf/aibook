```markdown
# Buffer Overflow: Conceito e Exemplos

## O que é Buffer Overflow?

Buffer overflow é uma das falhas de segurança mais conhecidas e exploradas em softwares. Ocorre quando um programa escreve mais dados em um buffer (uma área de memória alocada para armazenar dados temporários) do que ele pode suportar. Essa escrita excessiva pode sobrescrever áreas adjacentes da memória, corrompendo dados, alterando o fluxo de execução do programa ou permitindo a execução de código malicioso.

Buffers são largamente utilizados em linguagens como C e C++, que não realizam verificação automática dos limites de memória. Por isso, a ausência de validação adequada pode resultar em vulnerabilidades críticas.

## Como o Buffer Overflow Acontece?

Imagine um buffer de 8 bytes reservado para armazenar uma senha. Se o programa não verifica o tamanho da entrada do usuário, e este insere uma senha maior que 8 bytes, os bytes excedentes irão sobrescrever regiões de memória vizinhas, podendo afetar variáveis importantes, ponteiros ou até mesmo o endereço de retorno de uma função.

### Exemplo Simples em C

```c
#include <stdio.h>
#include <string.h>

void vulneravel() {
    char buffer[8];
    printf("Digite seu nome: ");
    gets(buffer); // gets NÃO verifica o tamanho da entrada!
    printf("Olá, %s!\n", buffer);
}

int main() {
    vulneravel();
    return 0;
}
```

No exemplo acima, a função `gets` lê a entrada do usuário sem verificar o tamanho, permitindo que mais de 8 bytes sejam escritos em `buffer`. Isso pode sobrescrever dados importantes na pilha, incluindo o endereço de retorno da função, abrindo espaço para ataques.

## Consequências do Buffer Overflow

- **Execução de código arbitrário:** O atacante pode injetar código malicioso na memória e redirecionar a execução do programa para esse código.
- **Elevação de privilégios:** Em sistemas vulneráveis, o atacante pode obter permissões elevadas.
- **Negação de serviço (DoS):** O programa pode travar ou se comportar de maneira inesperada.
- **Exposição de dados sensíveis:** Dados confidenciais podem ser lidos ou alterados.

## Exemplo Prático de Exploração

Em ataques clássicos, o atacante envia uma entrada cuidadosamente construída para sobrescrever o endereço de retorno de uma função na pilha, fazendo com que o programa execute código arbitrário (shellcode). Por exemplo, em sistemas antigos, era comum explorar programas SUID root no Linux para obter acesso root.

## Prevenção e Mitigações

- **Validação de limites:** Sempre verificar o tamanho dos dados antes de copiá-los para buffers.
- **Funções seguras:** Utilizar funções como `fgets` em vez de `gets`, e `strncpy` em vez de `strcpy`.
- **Proteções do compilador:** Ativar proteções como Stack Canaries, DEP (Data Execution Prevention) e ASLR (Address Space Layout Randomization).
- **Linguagens seguras:** Preferir linguagens que fazem verificação automática de limites, como Python, Java ou Rust.

## Conclusão

Buffer overflow é uma vulnerabilidade clássica, mas ainda muito relevante. Compreender seu funcionamento é fundamental para identificar, explorar e, principalmente, prevenir esse tipo de falha no desenvolvimento de softwares seguros.

---
**Referências:**
- [OWASP: Buffer Overflow](https://owasp.org/www-community/vulnerabilities/Buffer_Overflow)
- [CWE-120: Buffer Copy without Checking Size of Input ('Classic Buffer Overflow')](https://cwe.mitre.org/data/definitions/120.html)
```
