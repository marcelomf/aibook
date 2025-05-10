```markdown
# Buffer Overflow em Arrays Estáticos

O **buffer overflow** é uma das vulnerabilidades mais conhecidas e exploradas em softwares desenvolvidos em linguagens como C e C++. Essa falha ocorre quando um programa escreve dados além dos limites de um buffer, sobrescrevendo áreas adjacentes da memória. Em arrays estáticos, essa situação é especialmente crítica devido à ausência de verificações automáticas de limites nessas linguagens.

## O que são Arrays Estáticos?

Arrays estáticos em C/C++ são estruturas de dados com tamanho fixo, definido em tempo de compilação. Por exemplo:

```c
char nome[10];
```

Neste exemplo, `nome` é um array de 10 caracteres, com índices válidos de 0 a 9.

## Como ocorre o Buffer Overflow?

O buffer overflow acontece quando uma operação de escrita ultrapassa o limite do array. Isso pode ocorrer, por exemplo, ao copiar uma string maior do que o tamanho do array, ou ao acessar índices inválidos.

### Exemplo Prático

Considere o seguinte código em C:

```c
#include <stdio.h>
#include <string.h>

int main() {
    char senha[8];
    strcpy(senha, "senha_super_secreta");
    printf("Senha: %s\n", senha);
    return 0;
}
```

Neste exemplo, o array `senha` tem espaço para 8 caracteres, mas a função `strcpy` copia uma string muito maior. O resultado é que a memória além do array `senha` será sobrescrita, podendo corromper variáveis adjacentes, ponteiros, ou até mesmo o fluxo de execução do programa.

## Consequências do Buffer Overflow

- **Corrupção de Dados:** Variáveis próximas ao buffer podem ser sobrescritas, levando a comportamentos inesperados.
- **Execução de Código Malicioso:** Em casos mais graves, um atacante pode injetar código malicioso na memória e redirecionar a execução do programa para esse código.
- **Falhas de Segurança:** Buffer overflows são frequentemente explorados para obter acesso não autorizado, escalar privilégios ou causar negação de serviço.

## Por que C/C++ são vulneráveis?

C e C++ não realizam verificação automática de limites de arrays. Cabe ao programador garantir que os acessos estejam dentro dos limites válidos. Funções como `strcpy`, `gets` e `scanf` (sem especificação de tamanho) são notoriamente perigosas.

## Como Prevenir Buffer Overflow em Arrays Estáticos

- **Utilize funções seguras:** Prefira funções como `strncpy`, `snprintf` e `fgets`, que permitem especificar o tamanho máximo a ser copiado.
- **Valide entradas:** Sempre verifique o tamanho dos dados antes de copiá-los para um buffer.
- **Ferramentas de análise:** Utilize ferramentas como AddressSanitizer, Valgrind e compiladores com proteções como Stack Protector.
- **Evite funções inseguras:** Não utilize funções conhecidas por não realizar verificação de limites.

### Exemplo Seguro

```c
#include <stdio.h>
#include <string.h>

int main() {
    char senha[8];
    strncpy(senha, "senha_super_secreta", sizeof(senha) - 1);
    senha[sizeof(senha) - 1] = '\0'; // Garante terminação nula
    printf("Senha: %s\n", senha);
    return 0;
}
```

Neste exemplo, `strncpy` limita a cópia ao tamanho do array, e a terminação nula é garantida.

## Considerações Finais

Buffer overflows em arrays estáticos são uma das principais causas de vulnerabilidades em softwares escritos em C e C++. A compreensão dessa falha, aliada ao uso de boas práticas de programação e ferramentas de análise, é fundamental para o desenvolvimento de sistemas mais seguros.

> **Dica:** Sempre que possível, utilize linguagens ou bibliotecas que realizem verificação automática de limites, ou adote práticas rigorosas de validação de dados em C/C++.
```
