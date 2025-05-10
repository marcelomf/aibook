
## Tratamento de Casos Padrão e Exceções em Estruturas de Decisão

Ao desenvolver algoritmos utilizando estruturas de decisão como `if`, `else` e `switch`, é fundamental considerar não apenas os casos esperados, mas também situações imprevistas ou valores fora do padrão. O tratamento adequado desses cenários garante que o programa seja mais robusto, confiável e fácil de manter.

### O que são Casos Padrão e Exceções?

- **Casos padrão** são aqueles que representam o comportamento esperado do programa, ou seja, as situações para as quais o algoritmo foi explicitamente projetado.
- **Exceções** ou **casos excepcionais** são situações não previstas ou que fogem do fluxo normal, como entradas inválidas, valores fora do intervalo esperado ou condições de erro.

### Importância do Tratamento Adequado

Ignorar casos excepcionais pode levar a falhas, comportamentos inesperados ou até mesmo à interrupção do programa. Por isso, é uma boa prática sempre prever e tratar essas situações, tornando o código mais seguro e confiável.

### Como Tratar Casos Padrão e Exceções

#### 1. Utilizando `if` e `else`

Ao usar estruturas condicionais, sempre inclua um bloco `else` para lidar com situações não previstas:

```pseudocode
se (idade >= 18) então
    escreva("Maior de idade")
senão
    escreva("Menor de idade ou valor inválido")
fim_se
```

No exemplo acima, qualquer valor de `idade` que não atenda à condição será tratado pelo bloco `senão`, evitando que o programa fique sem resposta para entradas inesperadas.

#### 2. Utilizando `switch` e o Caso `default`

No comando `switch`, o caso `default` serve para capturar qualquer valor que não corresponda a nenhum dos casos explicitamente definidos:

```pseudocode
switch (opcao)
    caso 1:
        escreva("Opção 1 selecionada")
        pare
    caso 2:
        escreva("Opção 2 selecionada")
        pare
    default:
        escreva("Opção inválida")
        pare
fim_switch
```

O bloco `default` é essencial para garantir que o programa responda adequadamente a entradas não previstas.

#### 3. Validação de Dados

Antes de processar informações, valide os dados de entrada para evitar exceções:

```pseudocode
se (nota >= 0 e nota <= 10) então
    escreva("Nota válida")
senão
    escreva("Nota inválida")
fim_se
```

Essa abordagem previne que valores fora do intervalo causem problemas no restante do algoritmo.

### Dicas de Boas Práticas

- **Sempre trate todos os caminhos possíveis**: Não deixe condições sem tratamento, mesmo que pareçam improváveis.
- **Forneça mensagens claras**: Ao lidar com exceções, informe ao usuário o que ocorreu e, se possível, como corrigir.
- **Evite códigos duplicados**: Centralize o tratamento de exceções para facilitar a manutenção.
- **Documente casos excepcionais**: Comente o código explicando por que determinado tratamento foi implementado.

### Conclusão

O tratamento de casos padrão e exceções é uma etapa essencial no desenvolvimento de algoritmos. Ao adotar boas práticas nas estruturas de decisão, você garante que seu programa seja mais seguro, previsível e preparado para lidar com situações inesperadas, proporcionando uma melhor experiência ao usuário e facilitando a manutenção do código.
```
