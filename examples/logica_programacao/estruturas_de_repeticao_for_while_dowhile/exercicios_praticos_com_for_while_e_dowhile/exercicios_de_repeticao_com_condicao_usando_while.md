
# Exercícios de Repetição com Condição Usando `while`

As estruturas de repetição são fundamentais na lógica de programação, pois permitem executar um bloco de código várias vezes, de acordo com uma condição estabelecida. Entre essas estruturas, o `while` é amplamente utilizado quando não sabemos, previamente, quantas vezes o laço precisará ser executado. O laço `while` repete o bloco de comandos enquanto a condição especificada for verdadeira.

Neste tópico, vamos explorar exercícios práticos utilizando o `while`, focando em situações onde a repetição depende de uma condição que pode variar durante a execução do programa.

---

## Estrutura Básica do `while`

Antes de partirmos para os exercícios, é importante relembrar a estrutura básica do `while` em pseudocódigo:

```pseudocode
enquanto (condição) faça
    // comandos a serem repetidos
fim-enquanto
```

A condição é avaliada antes de cada iteração. Se for verdadeira, o bloco de comandos é executado; se for falsa, o laço é encerrado.

---

## Exercício 1: Leitura de Números até Valor Sentinela

**Enunciado:**  
Escreva um algoritmo que leia números inteiros do usuário até que seja digitado o valor zero. Ao final, exiba a soma de todos os números digitados (exceto o zero).

**Solução em Pseudocódigo:**

```pseudocode
soma <- 0
leia numero
enquanto (numero <> 0) faça
    soma <- soma + numero
    leia numero
fim-enquanto
escreva "A soma dos números é: ", soma
```

**Explicação:**  
O laço `while` continua pedindo números ao usuário enquanto o valor digitado for diferente de zero. O valor zero funciona como um "sentinela", indicando o fim da entrada de dados.

---

## Exercício 2: Validação de Entrada

**Enunciado:**  
Solicite ao usuário que digite uma senha. Continue pedindo até que a senha correta ("1234") seja informada. Ao final, exiba uma mensagem de acesso liberado.

**Solução em Pseudocódigo:**

```pseudocode
leia senha
enquanto (senha <> "1234") faça
    escreva "Senha incorreta. Tente novamente:"
    leia senha
fim-enquanto
escreva "Acesso liberado!"
```

**Explicação:**  
O laço `while` garante que o usuário só sairá do loop ao digitar a senha correta. Esse tipo de validação é muito comum em sistemas reais.

---

## Exercício 3: Contador Crescente

**Enunciado:**  
Implemente um algoritmo que exiba os números de 1 a 10 utilizando o laço `while`.

**Solução em Pseudocódigo:**

```pseudocode
contador <- 1
enquanto (contador <= 10) faça
    escreva contador
    contador <- contador + 1
fim-enquanto
```

**Explicação:**  
O laço começa com o contador em 1 e, a cada iteração, incrementa seu valor até atingir 10.

---

## Boas Práticas ao Usar `while`

- **Evite laços infinitos:** Certifique-se de que a condição do `while` será, em algum momento, falsa, para evitar que o programa nunca termine.
- **Atualize as variáveis de controle:** Sempre modifique, dentro do laço, as variáveis que influenciam a condição.
- **Valide entradas do usuário:** Ao trabalhar com dados fornecidos pelo usuário, sempre verifique se os valores são válidos antes de processá-los.

---

## Conclusão

Os exercícios com o laço `while` são essenciais para fixar o conceito de repetição condicionada. Eles permitem criar programas mais dinâmicos, capazes de reagir a diferentes situações durante a execução. Praticar com diferentes cenários, como leitura de dados, validação de entrada e contadores, ajuda a consolidar o entendimento dessa estrutura fundamental da lógica de programação.

Continue praticando e experimente criar seus próprios exercícios, variando as condições e os tipos de dados trabalhados!
```
