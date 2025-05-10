
## Exemplo de Escolha de Operação Matemática com `switch`

Ao desenvolver programas, é comum nos depararmos com situações em que o usuário precisa escolher entre diferentes opções, como realizar operações matemáticas (adição, subtração, multiplicação, divisão, etc.). Para lidar com múltiplas alternativas de forma organizada e eficiente, utilizamos a estrutura de decisão `switch`.

A seguir, apresentamos um exemplo prático de como implementar um menu de operações matemáticas utilizando o `switch` em pseudocódigo. Esse exemplo pode ser facilmente adaptado para qualquer linguagem de programação.

---

### Exemplo: Calculadora Simples com `switch`

**Descrição:**  
O programa solicita ao usuário dois números e, em seguida, apresenta um menu para que ele escolha a operação matemática desejada. Com base na escolha, o programa executa a operação correspondente utilizando a estrutura `switch`.

#### Pseudocódigo

```pseudocode
Início
    Escreva "Digite o primeiro número:"
    Leia numero1

    Escreva "Digite o segundo número:"
    Leia numero2

    Escreva "Escolha a operação:"
    Escreva "1 - Adição (+)"
    Escreva "2 - Subtração (-)"
    Escreva "3 - Multiplicação (*)"
    Escreva "4 - Divisão (/)"
    Leia opcao

    switch (opcao)
        caso 1:
            resultado <- numero1 + numero2
            Escreva "Resultado: ", resultado
            Pare
        caso 2:
            resultado <- numero1 - numero2
            Escreva "Resultado: ", resultado
            Pare
        caso 3:
            resultado <- numero1 * numero2
            Escreva "Resultado: ", resultado
            Pare
        caso 4:
            se numero2 != 0 então
                resultado <- numero1 / numero2
                Escreva "Resultado: ", resultado
            senão
                Escreva "Erro: Divisão por zero não é permitida."
            fimse
            Pare
        padrão:
            Escreva "Opção inválida."
    finswitch
Fim
```

---

### Explicação

- **Leitura dos dados:** O programa começa solicitando dois números ao usuário.
- **Menu de opções:** Em seguida, apresenta um menu com as operações disponíveis, cada uma associada a um número.
- **Estrutura `switch`:** O valor digitado pelo usuário (`opcao`) é avaliado pelo `switch`, que direciona o fluxo do programa para o bloco correspondente à operação escolhida.
- **Tratamento de erros:** No caso da divisão, há uma verificação para evitar a divisão por zero, garantindo a robustez do programa.
- **Opção inválida:** Se o usuário digitar uma opção que não está no menu, o programa informa que a opção é inválida.

---

### Adaptação para Linguagens de Programação

A lógica apresentada pode ser implementada em diversas linguagens, como C, Java, JavaScript, entre outras. Veja um exemplo em **C**:

```c
#include <stdio.h>

int main() {
    float numero1, numero2, resultado;
    int opcao;

    printf("Digite o primeiro número: ");
    scanf("%f", &numero1);

    printf("Digite o segundo número: ");
    scanf("%f", &numero2);

    printf("Escolha a operação:\n");
    printf("1 - Adição (+)\n");
    printf("2 - Subtração (-)\n");
    printf("3 - Multiplicação (*)\n");
    printf("4 - Divisão (/)\n");
    scanf("%d", &opcao);

    switch(opcao) {
        case 1:
            resultado = numero1 + numero2;
            printf("Resultado: %.2f\n", resultado);
            break;
        case 2:
            resultado = numero1 - numero2;
            printf("Resultado: %.2f\n", resultado);
            break;
        case 3:
            resultado = numero1 * numero2;
            printf("Resultado: %.2f\n", resultado);
            break;
        case 4:
            if (numero2 != 0)
                resultado = numero1 / numero2;
                printf("Resultado: %.2f\n", resultado);
            else
                printf("Erro: Divisão por zero não é permitida.\n");
            break;
        default:
            printf("Opção inválida.\n");
    }

    return 0;
}
```

---

### Conclusão

O uso do `switch` para escolha de operações matemáticas torna o código mais organizado, legível e fácil de manter, especialmente quando há várias alternativas. Essa estrutura é fundamental para a construção de menus e sistemas de múltipla escolha em programas, sendo uma das bases da lógica de programação.
```
