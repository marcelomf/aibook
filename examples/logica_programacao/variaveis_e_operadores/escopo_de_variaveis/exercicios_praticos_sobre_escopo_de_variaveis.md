# Exercícios Práticos sobre Escopo de Variáveis

O escopo de variáveis é um conceito fundamental na lógica de programação e está diretamente relacionado ao local onde uma variável pode ser acessada ou modificada dentro de um programa. Compreender o escopo é essencial para evitar erros, como o uso indevido de variáveis ou conflitos de nomes, além de contribuir para a organização e clareza do código.

A seguir, apresentamos uma série de exercícios práticos para fixar o conceito de escopo de variáveis. Os exemplos utilizam pseudocódigo, facilitando a compreensão independentemente da linguagem de programação escolhida futuramente.

---

## Exercício 1: Variável Local e Global

**Enunciado:**  
Analise o pseudocódigo abaixo e responda: Qual será o valor impresso na tela? Explique o motivo.

```pseudocode
var x = 10

procedimento exemplo()
    var x = 20
    escreva(x)
fim procedimento

exemplo()
escreva(x)
```

**Resolução Esperada:**  
- O procedimento `exemplo` imprime `20`, pois utiliza a variável local `x` declarada dentro do procedimento.
- Fora do procedimento, a variável global `x` mantém o valor `10`, que é impresso após a chamada do procedimento.

---

## Exercício 2: Modificando Variável Global

**Enunciado:**  
O que acontece se o procedimento não declarar uma nova variável `x`, mas modificar a existente?

```pseudocode
var x = 10

procedimento exemplo()
    x = 30
    escreva(x)
fim procedimento

exemplo()
escreva(x)
```

**Resolução Esperada:**  
- O procedimento `exemplo` modifica a variável global `x`, pois não há declaração local.
- Ambos os comandos `escreva(x)` imprimem `30`.

---

## Exercício 3: Escopo em Estruturas de Decisão

**Enunciado:**  
Considere o seguinte pseudocódigo. O que será impresso? Justifique.

```pseudocode
var y = 5

se (y > 3) então
    var z = 10
    escreva(z)
fim se

escreva(z)
```

**Resolução Esperada:**  
- Dentro do bloco `se`, a variável `z` é declarada e impressa, mostrando `10`.
- Fora do bloco, `z` não existe (escopo local ao bloco), então a segunda chamada de `escreva(z)` resultará em erro ou valor indefinido.

---

## Exercício 4: Escopo em Estruturas de Repetição

**Enunciado:**  
Analise o seguinte pseudocódigo:

```pseudocode
para i de 1 até 3 faça
    var temp = i * 2
    escreva(temp)
fim para

escreva(temp)
```

**Resolução Esperada:**  
- Dentro do laço, `temp` é declarada e impressa a cada iteração (valores 2, 4, 6).
- Fora do laço, `temp` não existe (escopo local ao laço), então a última linha gera erro ou valor indefinido.

---

## Exercício 5: Parâmetros de Função e Escopo

**Enunciado:**  
O que será impresso pelo seguinte pseudocódigo?

```pseudocode
var a = 5

função soma(a, b)
    a = a + b
    retorne a
fim função

escreva(soma(2, 3))
escreva(a)
```

**Resolução Esperada:**  
- A função `soma` recebe parâmetros próprios, que não afetam a variável global `a`.
- `soma(2, 3)` retorna `5`.
- A variável global `a` permanece `5`.

---

## Dicas para Praticar

- **Altere os exemplos:** Modifique nomes de variáveis e locais de declaração para observar o impacto no escopo.
- **Teste em diferentes blocos:** Experimente declarar variáveis dentro de funções, laços e condicionais.
- **Observe erros:** Tente acessar variáveis fora de seu escopo e veja as mensagens de erro.

---

## Conclusão

Praticar exercícios sobre escopo de variáveis é essencial para evitar erros comuns e escrever códigos mais organizados e seguros. Ao dominar esse conceito, você estará mais preparado para desenvolver algoritmos eficientes e compreender o funcionamento interno das linguagens de programação.

> **Dica:** Sempre prefira declarar variáveis no menor escopo possível, facilitando a manutenção e reduzindo riscos de conflitos de nomes.

---

**Continue praticando!** O domínio do escopo de variáveis é um passo importante para se tornar um programador eficiente e seguro.