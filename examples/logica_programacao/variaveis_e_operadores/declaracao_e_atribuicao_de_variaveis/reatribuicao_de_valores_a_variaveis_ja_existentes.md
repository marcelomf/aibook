# Reatribuição de Valores a Variáveis Já Existentes

Ao aprender lógica de programação, um dos conceitos fundamentais é o uso de **variáveis**. Variáveis são espaços na memória do computador reservados para armazenar valores que podem ser utilizados e manipulados durante a execução de um algoritmo. Após declarar e atribuir um valor inicial a uma variável, é comum precisarmos **alterar** esse valor ao longo do programa. Esse processo é chamado de **reatribuição de valores**.

## O que é Reatribuição de Variáveis?

A **reatribuição** consiste em dar um novo valor a uma variável que já foi declarada anteriormente. Ou seja, você pode atualizar o conteúdo armazenado em uma variável quantas vezes forem necessárias durante a execução do algoritmo.

### Exemplo em Pseudocódigo

```pseudocode
INICIO
    inteiro idade
    idade <- 20         // Atribuição inicial
    idade <- 21         // Reatribuição: agora idade vale 21
FIM
```

No exemplo acima, a variável `idade` recebe inicialmente o valor 20. Em seguida, ela é reatribuída para 21. O valor anterior é substituído pelo novo valor.

## Por que Reatribuir Variáveis?

A reatribuição é essencial para resolver problemas dinâmicos, onde os dados mudam conforme o algoritmo é executado. Por exemplo:

- **Contadores:** Em laços de repetição, é comum atualizar o valor de uma variável a cada iteração.
- **Acumuladores:** Para somar valores sucessivos, reatribuímos o resultado parcial à mesma variável.
- **Atualização de estado:** Em jogos ou sistemas, variáveis podem representar pontuação, saldo, posição, etc., e precisam ser atualizadas constantemente.

### Exemplo Prático: Contador

```pseudocode
INICIO
    inteiro contador
    contador <- 0
    enquanto contador < 5 faca
        escreva(contador)
        contador <- contador + 1   // Reatribuição: incrementa o valor
    fimenquanto
FIM
```

Neste exemplo, a variável `contador` é reatribuída a cada passagem pelo laço, até atingir o valor 5.

## Cuidados ao Reatribuir Variáveis

- **Tipo de dado:** O novo valor deve ser compatível com o tipo da variável. Por exemplo, não atribua um texto a uma variável declarada como inteira.
- **Sobrescrita:** Ao reatribuir, o valor anterior é perdido. Se precisar do valor antigo, armazene-o em outra variável antes de reatribuir.
- **Clareza:** Use nomes de variáveis claros para facilitar o entendimento do código, principalmente quando houver várias reatribuições.

## Fluxograma da Reatribuição

Veja abaixo um exemplo de fluxograma que ilustra a reatribuição de uma variável:

```
[Início]
   |
[Declarar variável x]
   |
[x recebe 10]
   |
[x recebe 20]  <-- Reatribuição
   |
[Fim]
```

## Conclusão

A reatribuição de valores a variáveis já existentes é uma prática comum e fundamental na lógica de programação. Ela permite que o algoritmo manipule dados de forma dinâmica, adaptando-se às necessidades do problema. Compreender e utilizar corretamente a reatribuição é essencial para criar soluções eficientes e flexíveis, servindo de base para o desenvolvimento em qualquer linguagem de programação.