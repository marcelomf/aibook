
# Diferenças entre Laços Controlados por Contador e por Condição em Pseudocódigo

Ao aprender lógica de programação, é fundamental compreender as **estruturas de repetição**, também conhecidas como laços. Elas permitem executar um bloco de comandos várias vezes, facilitando a automação de tarefas repetitivas. No pseudocódigo, os laços podem ser classificados principalmente em dois tipos: **controlados por contador** e **controlados por condição**. Entender as diferenças entre eles é essencial para escolher a estrutura mais adequada ao resolver um problema.

---

## Laços Controlados por Contador

Os laços controlados por contador são aqueles em que o número de repetições é conhecido **antes** do início da execução do laço. Ou seja, você sabe exatamente quantas vezes o bloco de comandos será executado. O exemplo mais comum desse tipo de laço é o **for**.

### Características

- **Número de repetições conhecido**: O laço executa um número fixo de vezes.
- **Uso de variável de controle (contador)**: Uma variável é inicializada, testada e incrementada a cada iteração.
- **Sintaxe clara e compacta**: O início, condição de parada e incremento são definidos em uma única linha.

### Exemplo em Pseudocódigo

```pseudocode
Para i de 1 até 5 faça
    Escreva("Repetição número ", i)
FimPara
```

Neste exemplo, o comando dentro do laço será executado 5 vezes, com o valor de `i` variando de 1 a 5.

---

## Laços Controlados por Condição

Os laços controlados por condição são utilizados quando **não se sabe previamente** quantas vezes o bloco de comandos deve ser executado. A repetição ocorre enquanto uma condição lógica for verdadeira. Os exemplos mais comuns são os laços **while** e **do-while**.

### Características

- **Número de repetições indefinido**: O laço pode executar zero, uma ou várias vezes, dependendo da condição.
- **Avaliação de condição**: Antes (while) ou depois (do-while) da execução do bloco de comandos, uma condição é testada.
- **Útil para entradas do usuário ou processamento de dados até um critério ser atendido**.

### Exemplo com While em Pseudocódigo

```pseudocode
Enquanto senha_incorreta faça
    Leia(senha)
    Se senha == "1234" então
        senha_incorreta <- falso
    Senão
        Escreva("Senha incorreta, tente novamente.")
    FimSe
FimEnquanto
```

Neste exemplo, o laço continuará pedindo a senha até que o usuário digite a senha correta.

### Exemplo com Do-While em Pseudocódigo

```pseudocode
Repita
    Leia(opcao)
    Escreva("Você escolheu a opção ", opcao)
Até que opcao == 0
```

Aqui, o bloco será executado pelo menos uma vez, e continuará até que a opção digitada seja 0.

---

## Comparação Resumida

| Característica                | Laço por Contador (for) | Laço por Condição (while/do-while) |
|-------------------------------|-------------------------|-------------------------------------|
| Número de repetições          | Conhecido               | Indefinido                         |
| Controle                      | Variável de contador    | Condição lógica                     |
| Uso típico                    | Processar listas, somatórios, contagens | Validação de entrada, processamento até critério ser atendido |
| Execução mínima               | Pode ser zero           | While: pode ser zero; Do-while: pelo menos uma vez |

---

## Quando Usar Cada Tipo?

- **Use laços controlados por contador** quando souber exatamente quantas vezes deseja repetir um bloco de comandos (ex: processar 10 alunos, somar 100 números).
- **Use laços controlados por condição** quando o número de repetições depender de uma condição que pode variar durante a execução (ex: ler dados até o usuário digitar "fim", validar senha).

---

## Conclusão

Saber diferenciar e aplicar corretamente laços controlados por contador e por condição é essencial para criar algoritmos eficientes e claros. No pseudocódigo, essa distinção ajuda a estruturar melhor a lógica do programa, tornando-o mais fácil de entender, manter e adaptar para qualquer linguagem de programação no futuro.
```
