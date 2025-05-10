
## Exemplo prático de repetição pós-condição com do-while

A estrutura de repetição **do-while** é conhecida como uma estrutura de repetição pós-condição. Isso significa que o bloco de comandos dentro do laço será executado **pelo menos uma vez**, independentemente da condição de parada, pois a verificação ocorre **após** a execução do bloco.

Essa característica é útil em situações onde precisamos garantir que uma determinada ação seja realizada ao menos uma vez antes de verificar se deve ser repetida. Um exemplo clássico é a leitura de dados do usuário, onde queremos solicitar a entrada e, só depois, verificar se ela atende a um critério específico.

### Sintaxe geral do do-while

No pseudocódigo, a estrutura do-while pode ser representada assim:

```
faça
    // comandos a serem executados
enquanto (condição)
```

Em linguagens como C, Java ou JavaScript, a sintaxe é semelhante:

```c
do {
    // comandos a serem executados
} while (condição);
```

### Exemplo prático: Validação de entrada do usuário

Imagine que queremos criar um algoritmo que solicite ao usuário que digite um número positivo. Se o usuário digitar um número negativo ou zero, o programa deve pedir novamente até que um valor válido seja informado. Esse é um caso típico para o uso do **do-while**.

#### Pseudocódigo

```
faça
    escreva("Digite um número positivo: ")
    leia(numero)
enquanto (numero <= 0)
escreva("Você digitou: ", numero)
```

#### Explicação

- O bloco dentro do `faça` será executado ao menos uma vez.
- O usuário é solicitado a digitar um número.
- Após a leitura, a condição `numero <= 0` é verificada.
- Se a condição for verdadeira (ou seja, o número não é positivo), o laço se repete.
- Quando o usuário digitar um número positivo, o laço termina e o programa exibe o valor digitado.

#### Exemplo em linguagem C

```c
#include <stdio.h>

int main() {
    int numero;
    do {
        printf("Digite um número positivo: ");
        scanf("%d", &numero);
    } while (numero <= 0);
    printf("Você digitou: %d\n", numero);
    return 0;
}
```

#### Exemplo em fluxograma

Um fluxograma para esse algoritmo teria os seguintes passos:

1. Início
2. Solicitar número ao usuário
3. Ler número
4. O número é maior que zero?
    - Sim: prossegue para o fim
    - Não: volta para solicitar novamente
5. Fim

### Quando usar o do-while?

Utilize o **do-while** sempre que for necessário garantir que o bloco de comandos seja executado pelo menos uma vez, especialmente em situações de validação de entrada ou quando a condição de parada só pode ser verificada após a primeira execução.

### Resumo

A estrutura **do-while** é ideal para situações de repetição pós-condição, onde a execução inicial do bloco é obrigatória. Compreender e saber aplicar esse tipo de laço é fundamental para criar algoritmos robustos e interativos, especialmente em tarefas que envolvem validação de dados e interação com o usuário.
```
