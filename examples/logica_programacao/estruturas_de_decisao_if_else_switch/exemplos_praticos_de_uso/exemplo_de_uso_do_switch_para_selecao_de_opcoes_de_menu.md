
## Exemplo de uso do `switch` para seleção de opções de menu

Uma das aplicações mais comuns da estrutura de decisão `switch` é a criação de menus interativos em programas. O `switch` permite selecionar rapidamente entre várias opções, tornando o código mais organizado e fácil de entender, especialmente quando há muitas alternativas a serem tratadas.

### Contextualização

Imagine que você está desenvolvendo um sistema simples de cadastro, onde o usuário pode escolher entre diferentes operações, como cadastrar um novo usuário, listar usuários cadastrados, buscar um usuário ou sair do programa. Utilizar o `switch` para tratar essas opções torna o código mais limpo do que uma sequência extensa de comandos `if-else`.

### Exemplo prático em pseudocódigo

Veja abaixo um exemplo de como implementar um menu utilizando o `switch` em pseudocódigo:

```pseudocode
INICIO
    ENQUANTO (verdadeiro)
        ESCREVA "Menu Principal"
        ESCREVA "1 - Cadastrar usuário"
        ESCREVA "2 - Listar usuários"
        ESCREVA "3 - Buscar usuário"
        ESCREVA "4 - Sair"
        ESCREVA "Escolha uma opção: "
        LEIA opcao

        SWITCH (opcao)
            CASO 1:
                ESCREVA "Você escolheu cadastrar um novo usuário."
                // Código para cadastrar usuário
                PARE
            CASO 2:
                ESCREVA "Você escolheu listar os usuários."
                // Código para listar usuários
                PARE
            CASO 3:
                ESCREVA "Você escolheu buscar um usuário."
                // Código para buscar usuário
                PARE
            CASO 4:
                ESCREVA "Saindo do programa..."
                PARE
                SAIR DO ENQUANTO
            CASO CONTRÁRIO:
                ESCREVA "Opção inválida. Tente novamente."
        FIMSWITCH
    FIMENQUANTO
FIM
```

### Explicação

- O programa exibe um menu com quatro opções.
- O usuário digita o número correspondente à opção desejada.
- O comando `switch` avalia o valor da variável `opcao` e executa o bloco de código correspondente ao caso selecionado.
- Se o usuário escolher uma opção inválida, o caso "CASO CONTRÁRIO" é executado, informando o erro.
- O laço `ENQUANTO` permite que o menu seja exibido repetidamente até que o usuário escolha sair.

### Vantagens do uso do `switch` em menus

- **Clareza:** O código fica mais legível, pois cada opção é tratada separadamente.
- **Facilidade de manutenção:** Adicionar ou remover opções do menu é simples.
- **Organização:** Evita o uso excessivo de estruturas `if-else`, que podem deixar o código confuso.

### Exemplo em linguagem C

Para ilustrar, veja como seria esse menu em linguagem C:

```c
#include <stdio.h>

int main() {
    int opcao;
    do {
        printf("Menu Principal\n");
        printf("1 - Cadastrar usuário\n");
        printf("2 - Listar usuários\n");
        printf("3 - Buscar usuário\n");
        printf("4 - Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);

        switch(opcao) {
            case 1:
                printf("Você escolheu cadastrar um novo usuário.\n");
                // Código para cadastrar usuário
                break;
            case 2:
                printf("Você escolheu listar os usuários.\n");
                // Código para listar usuários
                break;
            case 3:
                printf("Você escolheu buscar um usuário.\n");
                // Código para buscar usuário
                break;
            case 4:
                printf("Saindo do programa...\n");
                break;
            default:
                printf("Opção inválida. Tente novamente.\n");
        }
    } while(opcao != 4);

    return 0;
}
```

### Conclusão

O uso do `switch` para seleção de opções de menu é uma prática recomendada na lógica de programação, pois facilita a leitura, manutenção e expansão do código. Compreender e aplicar essa estrutura é fundamental para o desenvolvimento de programas interativos e organizados.
```
