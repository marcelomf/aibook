
# Desafios de Lógica para Combinar Estruturas de Decisão e Repetição

A combinação de estruturas de decisão (como `if`, `else`, `switch`) e estruturas de repetição (`for`, `while`, `do-while`) é fundamental para resolver problemas mais complexos em programação. Ao unir essas estruturas, é possível criar algoritmos capazes de tomar decisões dinâmicas enquanto executam tarefas repetitivas, tornando o código mais eficiente e flexível.

Neste tópico, você encontrará desafios práticos que estimulam o raciocínio lógico e a criatividade, além de exemplos e dicas para combinar essas estruturas de forma eficiente.

---

## Por que combinar estruturas?

Na vida real, muitos problemas exigem que uma ação seja repetida várias vezes, mas com decisões diferentes a cada repetição. Por exemplo, ao processar uma lista de números, pode ser necessário verificar se cada número é par ou ímpar, ou se atende a determinado critério antes de realizar uma ação.

Combinar estruturas permite:

- **Filtrar dados durante a repetição** (ex: somar apenas números positivos de uma lista).
- **Interromper laços com base em condições** (ex: parar ao encontrar um valor específico).
- **Executar diferentes ações em cada iteração** (ex: imprimir mensagens diferentes conforme o valor analisado).

---

## Exemplos Práticos

### Exemplo 1: Somar apenas números pares de uma lista

```pseudocode
iniciar soma em 0
para cada número na lista:
    se número for par:
        soma = soma + número
mostrar soma
```

Neste exemplo, a estrutura de repetição percorre a lista, enquanto a estrutura de decisão filtra apenas os números pares.

---

### Exemplo 2: Encontrar o primeiro número negativo em uma sequência

```pseudocode
para cada número na lista:
    se número for negativo:
        mostrar "Primeiro número negativo encontrado: " + número
        parar o laço
```

Aqui, a repetição percorre a lista e a decisão verifica se o número é negativo. O laço é interrompido assim que a condição é satisfeita.

---

### Exemplo 3: Menu interativo até o usuário escolher sair

```pseudocode
enquanto verdadeiro:
    mostrar menu de opções
    ler opção do usuário
    se opção for 1:
        executar ação 1
    senão se opção for 2:
        executar ação 2
    senão se opção for 0:
        mostrar "Saindo..."
        parar o laço
    senão:
        mostrar "Opção inválida"
```

Neste caso, a repetição mantém o menu ativo, e as decisões controlam o fluxo conforme a escolha do usuário.

---

## Desafios Propostos

### Desafio 1: Contar quantos números ímpares existem em uma lista de 10 números fornecidos pelo usuário.

- **Dica:** Use um laço para ler os números e uma decisão para verificar se cada número é ímpar.

### Desafio 2: Solicitar ao usuário uma senha até que ele acerte a senha correta.

- **Dica:** Use um laço `while` e uma decisão para comparar a senha digitada com a senha correta.

### Desafio 3: Ler 5 notas de um aluno, calcular a média e informar se ele foi aprovado (média ≥ 7) ou reprovado.

- **Dica:** Use um laço para ler as notas, calcule a média ao final e utilize uma decisão para mostrar o resultado.

### Desafio 4: Imprimir todos os números de 1 a 100, mas para múltiplos de 3 imprimir "Fizz", para múltiplos de 5 imprimir "Buzz" e para múltiplos de ambos imprimir "FizzBuzz".

- **Dica:** Use um laço para percorrer os números e decisões aninhadas para verificar as condições.

---

## Dicas para Resolver os Desafios

- **Planeje o algoritmo:** Antes de codificar, escreva o passo a passo em pseudocódigo ou desenhe um fluxograma.
- **Identifique as repetições:** Pergunte-se: "O que precisa ser repetido?".
- **Defina as decisões:** Pergunte-se: "Em que momento preciso tomar uma decisão diferente?".
- **Teste com exemplos simples:** Use valores pequenos para verificar se o algoritmo está correto.
- **Comente seu código:** Isso ajuda a entender a lógica e facilita futuras manutenções.

---

## Conclusão

A habilidade de combinar estruturas de decisão e repetição é essencial para criar algoritmos robustos e eficientes. Praticar com desafios como os apresentados aqui é uma excelente forma de desenvolver o raciocínio lógico e preparar-se para problemas mais avançados em qualquer linguagem de programação.

Continue praticando, experimente variações dos desafios e, sempre que possível, tente explicar sua lógica para outra pessoa ou escreva comentários detalhados. Assim, você consolidará seu aprendizado e estará pronto para avançar no mundo da programação!
```
