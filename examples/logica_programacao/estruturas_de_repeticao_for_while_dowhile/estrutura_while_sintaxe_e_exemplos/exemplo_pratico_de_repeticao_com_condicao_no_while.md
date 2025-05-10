
## Estrutura while: Exemplo Prático de Repetição com Condição

A estrutura de repetição `while` é uma das mais utilizadas na programação para executar um bloco de código enquanto uma determinada condição for verdadeira. Ela é especialmente útil quando não sabemos, de antemão, quantas vezes o bloco de código precisará ser repetido, pois a quantidade de repetições depende do resultado de uma condição avaliada a cada iteração.

### Sintaxe Básica do while

```pseudo
enquanto (condição) faça
    // bloco de comandos
fim-enquanto
```

Em pseudocódigo, a estrutura acima indica que o bloco de comandos será executado repetidamente enquanto a condição for verdadeira. Assim que a condição se tornar falsa, a execução do laço é interrompida.

### Exemplo Prático: Leitura de Números até um Valor de Parada

Vamos considerar um exemplo prático: solicitar ao usuário que digite números inteiros e somá-los, até que ele digite o número zero. O número zero será a condição de parada do laço.

#### Pseudocódigo

```pseudo
início
    soma <- 0
    leia numero
    enquanto (numero <> 0) faça
        soma <- soma + numero
        leia numero
    fim-enquanto
    escreva "A soma dos números é: ", soma
fim
```

#### Explicação do Exemplo

1. **Inicialização:** A variável `soma` é inicializada com zero para armazenar o resultado da soma dos números digitados.
2. **Leitura Inicial:** O programa lê o primeiro número antes de entrar no laço.
3. **Condição:** O laço `enquanto` verifica se o número digitado é diferente de zero (`numero <> 0`). Se for, executa o bloco de comandos.
4. **Processamento:** Dentro do laço, o número digitado é somado à variável `soma`.
5. **Nova Leitura:** O programa solicita um novo número ao usuário.
6. **Repetição:** O processo se repete até que o usuário digite zero.
7. **Finalização:** Ao sair do laço, o programa exibe o resultado da soma.

#### Fluxograma

```plaintext
+-------------------+
| soma <- 0         |
+-------------------+
         |
         v
+-------------------+
| leia numero       |
+-------------------+
         |
         v
+-------------------+
| numero <> 0 ?     |---- Não ----> [FIM]
+-------------------+
         |
        Sim
         v
+-------------------+
| soma <- soma +    |
| numero            |
+-------------------+
         |
         v
+-------------------+
| leia numero       |
+-------------------+
         |
         v
     [volta à condição]
```

### Pontos Importantes

- **Condição de Parada:** É fundamental garantir que a condição do `while` possa se tornar falsa em algum momento, evitando laços infinitos.
- **Leitura Inicial:** Em muitos casos, é necessário realizar uma leitura ou inicialização antes do laço para que a condição seja avaliada corretamente na primeira vez.
- **Atualização da Condição:** Dentro do laço, deve-se atualizar a variável que faz parte da condição, para que o laço possa terminar.

### Conclusão

O uso do `while` é ideal quando não sabemos quantas repetições serão necessárias, pois a execução depende de uma condição dinâmica. Compreender como estruturar corretamente o laço e definir uma condição de parada clara é essencial para evitar erros e garantir que o algoritmo funcione conforme o esperado.
```
