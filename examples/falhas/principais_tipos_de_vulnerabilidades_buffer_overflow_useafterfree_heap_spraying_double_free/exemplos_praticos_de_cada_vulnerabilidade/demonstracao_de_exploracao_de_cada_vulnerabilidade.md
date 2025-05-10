```markdown
# Demonstração de Exploração de Cada Vulnerabilidade

Neste tópico, apresentaremos exemplos práticos de exploração para os principais tipos de vulnerabilidades de corrupção de memória: **Buffer Overflow**, **Use-After-Free**, **Heap Spraying** e **Double Free**. Cada exemplo será acompanhado de uma breve explicação do cenário, do código vulnerável e de como a exploração pode ocorrer na prática. O objetivo é ilustrar, de forma didática, como essas falhas podem ser exploradas por atacantes e por que é fundamental conhecê-las para desenvolver softwares mais seguros.

---

## 1. Buffer Overflow

### Cenário

O **Buffer Overflow** ocorre quando um programa escreve mais dados em um buffer do que ele pode comportar, sobrescrevendo áreas adjacentes da memória. Isso pode permitir a execução de código arbitrário ou a alteração do fluxo de execução do programa.

### Exemplo Prático

```c
#include <stdio.h>
#include <string.h>

void vulnerable_function(char *input) {
    char buffer[16];
    strcpy(buffer, input); // Não há verificação do tamanho!
    printf("Você digitou: %s\n", buffer);
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Uso: %s <input>\n", argv[0]);
        return 1;
    }
    vulnerable_function(argv[1]);
    return 0;
}
```

#### Exploração

Se o usuário fornecer uma entrada maior que 16 bytes, o `strcpy` irá sobrescrever a memória além do buffer, podendo modificar o endereço de retorno da função. Um atacante pode criar uma entrada especialmente formatada para redirecionar o fluxo de execução para código malicioso inserido na pilha.

**Exemplo de ataque:**
```bash
./vulneravel $(python3 -c "print('A'*24 + '\xef\xbe\xad\xde')")
```
*(O endereço `\xef\xbe\xad\xde` é apenas ilustrativo; na prática, seria o endereço do shellcode ou de uma função desejada.)*

---

## 2. Use-After-Free

### Cenário

O **Use-After-Free** ocorre quando um programa continua a usar um ponteiro para uma área de memória que já foi liberada (`free`). Isso pode permitir que um atacante manipule o conteúdo dessa memória, levando à execução de código arbitrário ou vazamento de informações.

### Exemplo Prático

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char *data = malloc(32);
    strcpy(data, "dados sensíveis");
    free(data); // Memória liberada

    // Uso após liberação
    printf("Conteúdo: %s\n", data);
    // Possível reuso da memória por outro malloc
    return 0;
}
```

#### Exploração

Um atacante pode tentar alocar novamente a mesma região de memória e sobrescrever o conteúdo, influenciando o comportamento do programa.

**Exemplo de ataque:**
```c
char *data = malloc(32);
strcpy(data, "dados sensíveis");
free(data);

char *evil = malloc(32);
strcpy(evil, "exploit!");
printf("Conteúdo: %s\n", data); // Agora imprime "exploit!"
```

---

## 3. Heap Spraying

### Cenário

**Heap Spraying** é uma técnica utilizada para aumentar a probabilidade de execução de código malicioso em ataques de corrupção de memória, especialmente em ambientes como navegadores. O atacante preenche grandes áreas do heap com shellcode, esperando que um desvio de execução acabe caindo em uma dessas áreas.

### Exemplo Prático (JavaScript)

```javascript
// Exemplo simplificado de heap spraying em JavaScript
var shellcode = unescape("%u9090%u9090%u4141%u4141"); // NOP sled + shellcode
var bigblock = shellcode;
while (bigblock.length < 0x10000) bigblock += bigblock;

var spray = [];
for (var i = 0; i < 1000; i++) {
    spray[i] = bigblock.substring(0, bigblock.length);
}
```

#### Exploração

Após o heap spraying, se uma vulnerabilidade (como um buffer overflow) permitir o desvio do fluxo de execução para uma área do heap, há uma grande chance de cair no shellcode injetado.

---

## 4. Double Free

### Cenário

O **Double Free** ocorre quando um programa chama `free` duas vezes para o mesmo ponteiro. Isso pode corromper as estruturas internas do heap, levando a condições de corrupção de memória e, potencialmente, à execução de código arbitrário.

### Exemplo Prático

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    char *data = malloc(32);
    free(data);
    free(data); // Double free!
    return 0;
}
```

#### Exploração

Em sistemas sem proteções modernas (como tcache poisoning no glibc), um atacante pode manipular a lista de free chunks para fazer com que o próximo `malloc` retorne um ponteiro para uma área controlada, facilitando a sobrescrita de ponteiros importantes.

**Exemplo de ataque:**
```c
char *a = malloc(32);
free(a);
free(a); // Double free

char *b = malloc(32); // Pode retornar o mesmo endereço de 'a'
char *c = malloc(32); // Pode retornar o mesmo endereço de 'a' novamente
strcpy(b, "exploit!");
strcpy(c, "malicioso!");
```
Agora, tanto `b` quanto `c` apontam para a mesma área de memória, permitindo sobrescrita de dados críticos.

---

## Considerações Finais

Esses exemplos ilustram como falhas de corrupção de memória podem ser exploradas na prática. Em ambientes reais, a exploração pode ser mais complexa devido a proteções modernas como **ASLR**, **DEP/NX**, **Stack Canaries** e **Safe Unlinking**. No entanto, compreender os fundamentos dessas vulnerabilidades é essencial para o desenvolvimento de softwares seguros e para a implementação de defesas eficazes.

> **Atenção:** Os exemplos apresentados são para fins educacionais. Nunca utilize essas técnicas para fins ilícitos ou sem autorização explícita.

---
```