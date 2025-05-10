
## Diferença entre Laços Controlados por Contador e por Condição

Ao aprender lógica de programação, um dos conceitos fundamentais é o uso de **estruturas de repetição**, também conhecidas como **laços**. Elas permitem executar um bloco de código várias vezes, facilitando a automação de tarefas repetitivas. Existem diferentes tipos de laços, e uma distinção importante é entre **laços controlados por contador** e **laços controlados por condição**. Entender essa diferença é essencial para escolher a estrutura mais adequada ao resolver um problema.

### Laços Controlados por Contador

Os **laços controlados por contador** são aqueles em que o número de repetições é conhecido previamente ou pode ser determinado antes do início da execução do laço. Nesses casos, utiliza-se uma variável chamada **contador**, que é inicializada com um valor, incrementada (ou decrementada) a cada iteração, e o laço termina quando o contador atinge um valor limite.

#### Características

- **Número de repetições conhecido**: Você sabe quantas vezes o bloco de código deve ser executado.
- **Uso de variável de controle**: Um contador é utilizado para controlar o início, o fim e o passo da repetição.
- **Exemplo clássico**: O laço `for` é o mais utilizado para esse tipo de repetição.

#### Exemplo em Pseudocódigo

```pseudocode
para i de 1 até 5 faça
    escreva(i)
fim_para
```

Neste exemplo, o laço será executado 5 vezes, com o valor de `i` variando de 1 a 5.

### Laços Controlados por Condição

Os **laços controlados por condição** são aqueles em que o número de repetições **não é conhecido previamente**. O laço continua executando enquanto uma determinada condição for verdadeira. Assim que a condição se torna falsa, o laço é encerrado.

#### Características

- **Número de repetições indefinido**: Não se sabe, antes da execução, quantas vezes o bloco de código será repetido.
- **Condição lógica**: A repetição depende do resultado de uma expressão lógica (verdadeira ou falsa).
- **Exemplos clássicos**: Os laços `while` e `do-while` são usados para esse tipo de repetição.

#### Exemplo em Pseudocódigo

```pseudocode
enquanto senha_incorreta faça
    leia(senha)
    se senha == "1234" então
        senha_incorreta = falso
    fim_se
fim_enquanto
```

Neste exemplo, o laço continuará pedindo a senha até que o usuário digite a senha correta.

### Comparação Resumida

| Característica                | Laço por Contador (`for`) | Laço por Condição (`while`, `do-while`) |
|-------------------------------|---------------------------|-----------------------------------------|
| Número de repetições          | Conhecido                 | Indefinido                              |
| Controle                      | Variável contador         | Expressão lógica                        |
| Uso comum                     | Listas, sequências        | Validação, espera por evento            |
| Exemplo                       | Somar 10 números          | Ler até digitar "sair"                  |

### Quando Usar Cada Tipo?

- **Laço por contador**: Use quando souber exatamente quantas vezes o bloco de código deve ser executado, como ao percorrer um vetor ou repetir uma ação um número fixo de vezes.
- **Laço por condição**: Use quando a quantidade de repetições depende de uma condição que pode variar durante a execução, como esperar uma entrada válida do usuário ou processar dados até o final de um arquivo.

### Conclusão

Compreender a diferença entre laços controlados por contador e por condição é fundamental para escrever algoritmos eficientes e claros. Saber escolher o tipo de laço adequado torna o código mais legível, organizado e fácil de manter, além de evitar erros comuns, como laços infinitos ou execuções desnecessárias.
```
