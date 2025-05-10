
## Uso de Variáveis de Controle no `while`

A estrutura de repetição `while` é uma das mais utilizadas na programação para executar um bloco de código enquanto uma determinada condição for verdadeira. Um dos elementos fundamentais para o funcionamento correto do `while` é a **variável de controle**. Neste tópico, vamos entender o que são variáveis de controle, como utilizá-las e por que são essenciais para evitar laços infinitos e garantir a lógica correta do programa.

### O que é uma Variável de Controle?

Uma **variável de controle** é uma variável utilizada para monitorar e controlar o número de vezes que o laço `while` será executado. Ela geralmente faz parte da condição de parada do laço e é atualizada a cada iteração, permitindo que o laço avance em direção ao seu término.

### Estrutura Básica do `while` com Variável de Controle

A sintaxe básica do `while` com uma variável de controle é:

```pseudo
inicialize a variável de controle
while (condição envolvendo a variável de controle) {
    // bloco de código a ser repetido
    atualize a variável de controle
}
```

### Exemplo Prático

Vamos ver um exemplo simples: imprimir os números de 1 a 5 usando um laço `while` com uma variável de controle.

```pseudo
contador ← 1
while (contador ≤ 5) {
    escreva(contador)
    contador ← contador + 1
}
```

**Explicação:**
- A variável `contador` é inicializada com 1.
- A condição do `while` verifica se `contador` é menor ou igual a 5.
- Dentro do laço, o valor de `contador` é exibido e, em seguida, incrementado em 1.
- Quando `contador` chega a 6, a condição se torna falsa e o laço termina.

### Importância da Atualização da Variável de Controle

É fundamental **atualizar a variável de controle** dentro do laço. Se isso não for feito, a condição do `while` pode nunca se tornar falsa, resultando em um **laço infinito**. Por exemplo:

```pseudo
contador ← 1
while (contador ≤ 5) {
    escreva(contador)
    // contador não é atualizado!
}
```

Neste caso, `contador` nunca muda, a condição sempre será verdadeira e o laço nunca terminará.

### Uso em Situações Reais

As variáveis de controle são úteis em diversas situações, como:
- Contar tentativas de login de um usuário.
- Percorrer listas ou vetores.
- Repetir uma ação até que o usuário decida parar.

#### Exemplo: Solicitar senha até acertar

```pseudo
senha_correta ← "1234"
senha_digitada ← ""
tentativas ← 0

while (senha_digitada ≠ senha_correta AND tentativas < 3) {
    escreva("Digite a senha: ")
    leia(senha_digitada)
    tentativas ← tentativas + 1
}

if (senha_digitada = senha_correta) {
    escreva("Acesso permitido.")
} else {
    escreva("Acesso bloqueado.")
}
```

Neste exemplo, a variável de controle `tentativas` limita o número de tentativas do usuário.

### Boas Práticas

- **Inicialize** sempre a variável de controle antes do laço.
- **Atualize** a variável de controle dentro do laço, de forma que a condição possa ser satisfeita em algum momento.
- **Evite laços infinitos**: sempre verifique se a condição do `while` pode se tornar falsa.

### Resumo

O uso correto de variáveis de controle no `while` é essencial para garantir que o laço execute o número desejado de vezes e termine corretamente. Compreender esse conceito é um passo importante para criar algoritmos eficientes e seguros, evitando erros comuns como laços infinitos e lógica incorreta.
```
