
## Estrutura do-while: Sintaxe e Exemplos

### Sintaxe do do-while em Pseudocódigo

A estrutura **do-while** é uma das principais formas de repetição em lógica de programação. Sua principal característica é garantir que o bloco de comandos seja executado **ao menos uma vez**, independentemente da condição de teste. Isso ocorre porque, diferentemente do `while`, a verificação da condição é feita **após** a execução do bloco de comandos.

#### Estrutura Geral

A sintaxe do `do-while` em pseudocódigo pode variar conforme o padrão adotado, mas geralmente segue o seguinte formato:

```pseudocode
faça
    // Bloco de comandos
enquanto (condição)
```

Ou, de forma mais detalhada:

```pseudocode
faça
    <comandos>
enquanto <condição>
```

- **faça**: indica o início do bloco de comandos que será executado.
- **enquanto (condição)**: após executar o bloco, verifica a condição. Se for verdadeira, o bloco é executado novamente; se for falsa, a repetição termina.

#### Fluxograma

No fluxograma, o `do-while` é representado por um bloco de comandos seguido de uma verificação de condição, formando um ciclo que sempre executa o bloco pelo menos uma vez.

### Exemplo Prático em Pseudocódigo

#### Exemplo 1: Leitura de número até ser positivo

```pseudocode
faça
    escreva("Digite um número positivo: ")
    leia(numero)
enquanto (numero <= 0)
```

**Explicação:**  
O programa solicita ao usuário que digite um número positivo. Mesmo que o usuário digite um valor negativo ou zero na primeira tentativa, o bloco será executado novamente até que um número positivo seja informado.

#### Exemplo 2: Menu de opções

```pseudocode
faça
    escreva("1 - Calcular soma")
    escreva("2 - Calcular média")
    escreva("0 - Sair")
    escreva("Escolha uma opção: ")
    leia(opcao)
enquanto (opcao <> 0)
```

**Explicação:**  
O menu é exibido ao menos uma vez. O programa continua mostrando o menu até que o usuário escolha a opção de sair (`0`).

### Pontos Importantes

- O bloco de comandos **sempre será executado pelo menos uma vez**, mesmo que a condição seja falsa na primeira verificação.
- Use o `do-while` quando for necessário garantir a execução inicial do bloco antes da verificação da condição.
- A condição é avaliada **após** a execução do bloco.

### Resumo

A estrutura `do-while` em pseudocódigo é uma ferramenta poderosa para situações em que precisamos garantir a execução inicial de um conjunto de comandos, como em validações de entrada de dados ou menus interativos. Compreender sua sintaxe e funcionamento é fundamental para criar algoritmos eficientes e robustos.

---
**Exercício:**  
Implemente em pseudocódigo um algoritmo que leia senhas até que o usuário digite a senha correta ("1234").
```

Se desejar, posso incluir mais exemplos ou exercícios!
```