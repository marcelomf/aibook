
## Exemplos de Situações que Exigem Repetição de Tarefas

As estruturas de repetição são fundamentais na programação porque permitem automatizar tarefas que precisam ser executadas várias vezes, seja um número conhecido ou desconhecido de vezes. A seguir, apresentamos exemplos práticos de situações em que a repetição de tarefas é necessária, ilustrando a importância das estruturas de repetição como `for`, `while` e `do-while`.

### 1. Processamento de Listas ou Coleções de Dados

Imagine que você precisa calcular a média das notas de uma turma de alunos. As notas estão armazenadas em uma lista, e é necessário somar todas elas antes de dividir pelo número de alunos. Para isso, é comum utilizar uma estrutura de repetição para percorrer cada elemento da lista:

```pseudocode
soma = 0
para cada nota em lista_de_notas
    soma = soma + nota
media = soma / quantidade_de_notas
```

### 2. Validação de Entrada do Usuário

Muitas vezes, é preciso garantir que o usuário forneça uma entrada válida, como um número dentro de um determinado intervalo. Nesse caso, utiliza-se uma repetição para solicitar a entrada até que ela seja válida:

```pseudocode
faça
    leia idade
enquanto idade < 0 ou idade > 120
```

### 3. Execução de Tarefas Repetitivas

Em jogos, por exemplo, pode ser necessário atualizar a posição de todos os inimigos a cada ciclo do jogo. Isso é feito repetindo uma ação para cada inimigo presente:

```pseudocode
para cada inimigo em lista_de_inimigos
    inimigo.atualizar_posicao()
```

### 4. Busca em Dados

Ao procurar um elemento específico em uma lista, como um nome em uma lista de contatos, é comum utilizar uma estrutura de repetição para verificar cada elemento até encontrar o desejado ou chegar ao final da lista:

```pseudocode
encontrado = falso
para cada contato em lista_de_contatos
    se contato.nome == nome_procurado
        encontrado = verdadeiro
        pare
```

### 5. Geração de Relatórios

Ao gerar relatórios, como imprimir todos os produtos de um estoque, é necessário repetir a ação de exibir informações para cada item:

```pseudocode
para cada produto em lista_de_produtos
    imprima produto.nome, produto.quantidade, produto.preco
```

### 6. Cálculos Iterativos

Alguns algoritmos matemáticos, como o cálculo do fatorial de um número, dependem de repetição:

```pseudocode
fatorial = 1
para i de 1 até n
    fatorial = fatorial * i
```

### 7. Monitoramento de Condições

Em sistemas que precisam aguardar uma condição específica, como o recebimento de uma mensagem ou a conclusão de um processo, utiliza-se uma repetição até que a condição seja satisfeita:

```pseudocode
enquanto não mensagem_recebida
    aguarde
```

---

Esses exemplos demonstram que as estruturas de repetição são indispensáveis para resolver problemas que envolvem tarefas repetitivas, tornando o código mais eficiente, organizado e fácil de manter. Compreender quando e como utilizá-las é essencial para qualquer pessoa que deseja se tornar um programador competente.
```
