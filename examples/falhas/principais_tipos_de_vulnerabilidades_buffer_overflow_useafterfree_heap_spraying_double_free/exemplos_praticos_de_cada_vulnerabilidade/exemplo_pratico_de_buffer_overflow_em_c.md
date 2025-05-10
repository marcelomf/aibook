```markdown
# Exemplo Prático de Buffer Overflow em C

O **Buffer Overflow** é uma das vulnerabilidades mais clássicas e exploradas em softwares desenvolvidos em linguagens como C e C++. Ele ocorre quando um programa escreve mais dados em um buffer do que o espaço alocado para ele, sobrescrevendo áreas adjacentes da memória. Isso pode permitir que um atacante modifique o fluxo de execução do programa, corrompa dados ou até mesmo execute código arbitrário.

## Exemplo Prático: Buffer Overflow em C

Vamos analisar um exemplo simples e didático de buffer overflow em C:

```c
#include <stdio.h>
#include <string.h>

void vulneravel() {
    char buffer[16];
    printf("Digite seu nome: ");
    gets(buffer); // Função insegura!
    printf("Olá, %s!\n", buffer);
}

int main() {
    vulneravel();
    return 0;
}
```

### Explicação do Código

- **Buffer de 16 bytes:** A função `vulneravel` declara um array de 16 bytes chamado `buffer`.
- **Entrada do usuário:** O programa pede para o usuário digitar seu nome e armazena a entrada em `buffer` usando a função `gets`.
- **Impressão:** O programa imprime uma saudação usando o valor armazenado em `buffer`.

### Onde está a vulnerabilidade?

A função `gets` **não verifica o tamanho do buffer**. Se o usuário digitar mais de 15 caracteres (lembrando do byte nulo `\0`), os bytes excedentes irão sobrescrever áreas adjacentes da memória, podendo corromper variáveis, ponteiros ou até o endereço de retorno da função.

#### Exemplo de Exploração

Se o programa for executado e o usuário digitar uma string longa, como:

```
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
```

Os bytes além dos 16 permitidos irão sobrescrever a pilha. Em sistemas antigos, era possível sobrescrever o endereço de retorno da função e redirecionar o fluxo de execução para código malicioso inserido pelo atacante.

### Demonstração Visual

```
| buffer[0] | buffer[1] | ... | buffer[15] | return address | ...
|-----------|-----------|-----|------------|----------------|-----
|     A     |     A     | ... |     A      |      AAAAA     | ...
```

Ao ultrapassar o limite do buffer, o endereço de retorno pode ser sobrescrito, permitindo que o atacante controle o fluxo do programa.

### Consequências

- **Execução de código arbitrário:** O atacante pode injetar código malicioso e fazer o programa executá-lo.
- **Corrompimento de dados:** Variáveis locais ou globais podem ser alteradas.
- **Crashes:** O programa pode travar ou se comportar de maneira inesperada.

### Como evitar?

- **Nunca use funções inseguras** como `gets`. Prefira funções seguras como `fgets`:
  
  ```c
  fgets(buffer, sizeof(buffer), stdin);
  ```

- **Valide sempre o tamanho da entrada** do usuário.
- **Utilize ferramentas de análise estática** e compiladores modernos com proteções como Stack Canaries, ASLR e DEP.

---

## Resumo

O buffer overflow é uma vulnerabilidade grave e comum em C, causada pela falta de verificação dos limites de buffers. O exemplo acima ilustra como uma simples entrada de usuário pode comprometer a segurança do software. A prevenção depende de boas práticas de programação e do uso de funções seguras para manipulação de dados.

> **Referências:**
> - [The CERT C Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard)
> - [OWASP: Buffer Overflow](https://owasp.org/www-community/vulnerabilities/Buffer_Overflow)
```
