
# Exercícios de Repetição com Laço `for` para Contagem Crescente e Decrescente

As estruturas de repetição são fundamentais na lógica de programação, pois permitem executar um bloco de código várias vezes de forma controlada. Entre essas estruturas, o laço `for` é amplamente utilizado quando sabemos exatamente quantas vezes queremos repetir uma ação. Neste tópico, vamos explorar exercícios práticos utilizando o laço `for` para realizar contagens crescentes e decrescentes, consolidando o entendimento desse conceito essencial.

## O que é o laço `for`?

O laço `for` é uma estrutura de repetição que permite executar um bloco de comandos um número determinado de vezes. Sua sintaxe básica em pseudocódigo é:

```
para (inicialização; condição; incremento/decremento) faça
    // comandos a serem repetidos
fim_para
```

- **Inicialização:** Define o valor inicial da variável de controle.
- **Condição:** Enquanto for verdadeira, o laço continua executando.
- **Incremento/Decremento:** Atualiza a variável de controle a cada iteração.

## Contagem Crescente

Na contagem crescente, a variável de controle é incrementada a cada repetição, permitindo percorrer uma sequência de valores em ordem crescente.

### Exemplo 1: Contar de 1 a 10

**Pseudocódigo:**
```
para i de 1 até 10 passo 1 faça
    escreva(i)
fim_para
```

**Fluxograma:**

```plaintext
[Início]
   |
   v
[i = 1]
   |
   v
[i <= 10?] -- não --> [Fim]
   |
  sim
   |
   v
[Escreva i]
   |
   v
[i = i + 1]
   |
   v
[Volta para i <= 10?]
```

**Exercício Proposto:**

> Escreva um algoritmo que exiba todos os números pares de 2 a 20.

**Solução em pseudocódigo:**
```
para i de 2 até 20 passo 2 faça
    escreva(i)
fim_para
```

## Contagem Decrescente

Na contagem decrescente, a variável de controle é decrementada a cada repetição, permitindo percorrer uma sequência de valores em ordem decrescente.

### Exemplo 2: Contar de 10 a 1

**Pseudocódigo:**
```
para i de 10 até 1 passo -1 faça
    escreva(i)
fim_para
```

**Fluxograma:**

```plaintext
[Início]
   |
   v
[i = 10]
   |
   v
[i >= 1?] -- não --> [Fim]
   |
  sim
   |
   v
[Escreva i]
   |
   v
[i = i - 1]
   |
   v
[Volta para i >= 1?]
```

**Exercício Proposto:**

> Escreva um algoritmo que exiba todos os números ímpares de 15 até 1.

**Solução em pseudocódigo:**
```
para i de 15 até 1 passo -2 faça
    escreva(i)
fim_para
```

## Dicas e Boas Práticas

- **Defina claramente o valor inicial, a condição de parada e o passo do laço.**
- **Evite laços infinitos:** Certifique-se de que a condição de parada será atingida.
- **Use nomes de variáveis significativos** para facilitar a leitura do código.
- **Teste seus algoritmos** com diferentes valores para garantir que funcionam corretamente.

## Exercícios para Praticar

1. Escreva um algoritmo que exiba os números de 5 a 15 em ordem crescente.
2. Escreva um algoritmo que exiba os múltiplos de 3 de 30 até 3 em ordem decrescente.
3. Escreva um algoritmo que exiba os números de 1 a 100, pulando de 5 em 5.

## Conclusão

O domínio do laço `for` para contagens crescentes e decrescentes é essencial para resolver diversos problemas em programação. Praticar com diferentes tipos de contagem ajuda a fixar o conceito e prepara o estudante para desafios mais complexos, além de ser uma base sólida para o aprendizado de qualquer linguagem de programação.
```
