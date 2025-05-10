# Exercícios de Soma e Média de Valores Utilizando Estruturas de Repetição

As estruturas de repetição são fundamentais na lógica de programação, pois permitem executar um bloco de código várias vezes, facilitando tarefas como somar e calcular a média de valores. Neste tópico, você aprenderá como utilizar laços de repetição para resolver problemas práticos envolvendo soma e média, conceitos essenciais para qualquer iniciante em programação.

## Por que usar estruturas de repetição?

Imagine que você precisa somar 10 números informados pelo usuário. Seria trabalhoso escrever 10 comandos de leitura e soma. Com as estruturas de repetição, como `for`, `while` e `do-while`, você automatiza esse processo, tornando o código mais eficiente, organizado e fácil de manter.

## Exemplo 1: Soma de Números

Vamos criar um algoritmo que lê 5 números inteiros e calcula a soma deles.

### Pseudocódigo

```plaintext
início
    soma ← 0
    para i de 1 até 5 faça
        escreva("Digite o ", i, "º número: ")
        leia(numero)
        soma ← soma + numero
    fim_para
    escreva("A soma dos números é: ", soma)
fim
```

### Fluxograma

```plaintext
[Início]
   |
soma ← 0
   |
i ← 1
   |
[Início do laço]
   |
i ≤ 5?
  / \
 /   \
Sim   Não
 |     |
leia número
soma ← soma + número
i ← i + 1
 |     |
[volta ao laço]
       |
   escreva soma
       |
    [Fim]
```

## Exemplo 2: Cálculo da Média

Agora, vamos calcular a média dos mesmos 5 números.

### Pseudocódigo

```plaintext
início
    soma ← 0
    para i de 1 até 5 faça
        escreva("Digite o ", i, "º número: ")
        leia(numero)
        soma ← soma + numero
    fim_para
    media ← soma / 5
    escreva("A média dos números é: ", media)
fim
```

## Exercícios Propostos

### 1. Soma de N números

**Enunciado:**  
Peça ao usuário para informar quantos números deseja somar. Em seguida, leia os valores e exiba a soma total.

**Dica:**  
Use uma variável para armazenar a quantidade de repetições do laço.

### 2. Média de valores positivos

**Enunciado:**  
Leia 10 números e calcule a média apenas dos valores positivos informados.

**Dica:**  
Utilize uma variável para contar quantos números positivos foram digitados.

### 3. Soma até valor negativo

**Enunciado:**  
Leia números do usuário até que ele digite um valor negativo. Ao final, exiba a soma dos valores positivos informados.

**Dica:**  
Utilize um laço `while` ou `do-while` para repetir a leitura até a condição ser satisfeita.

## Boas Práticas

- **Inicialize as variáveis** antes de usá-las.
- **Valide as entradas** do usuário, quando necessário.
- **Comente o código** para facilitar o entendimento.
- **Evite repetições desnecessárias**: use laços sempre que possível.

## Conclusão

Exercícios de soma e média utilizando estruturas de repetição são excelentes para fixar conceitos fundamentais da lógica de programação. Eles ajudam a desenvolver o raciocínio lógico, a manipulação de variáveis e o controle de fluxo do programa. Pratique bastante, experimente variações dos exercícios e, sempre que possível, tente resolver os problemas utilizando diferentes tipos de laços (`for`, `while`, `do-while`). Assim, você estará cada vez mais preparado para desafios mais avançados na programação!