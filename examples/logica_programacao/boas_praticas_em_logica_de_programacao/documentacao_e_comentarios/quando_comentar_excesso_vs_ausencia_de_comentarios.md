# Quando Comentar: Excesso vs. Ausência de Comentários

A documentação e os comentários são elementos fundamentais para a clareza e a manutenção de qualquer código. No entanto, muitos iniciantes em lógica de programação têm dúvidas sobre quando e como comentar seus algoritmos. O equilíbrio entre excesso e ausência de comentários é essencial para garantir que o código seja compreensível, sem se tornar poluído ou redundante.

## A Importância dos Comentários

Comentários são anotações inseridas no código para explicar trechos específicos, descrever a lógica de uma função ou esclarecer decisões tomadas durante o desenvolvimento. Eles não afetam a execução do programa, mas são valiosos para quem lê, revisa ou dá manutenção ao código, inclusive para o próprio autor após algum tempo.

## Excesso de Comentários

Comentar demais pode ser tão prejudicial quanto não comentar. Comentários em excesso tornam o código poluído, dificultam a leitura e podem até gerar confusão, especialmente se explicarem o óbvio ou repetirem o que já está claro pelo próprio código.

**Exemplo de excesso de comentários:**

```pseudo
// Declarando a variável x
inteiro x

// Atribuindo o valor 10 à variável x
x <- 10

// Imprimindo o valor de x na tela
escreva(x)
```

Neste exemplo, cada linha tem um comentário desnecessário, pois o código é autoexplicativo. Comentários assim não agregam valor e podem atrapalhar a leitura.

## Ausência de Comentários

Por outro lado, a ausência total de comentários pode dificultar o entendimento do código, principalmente em trechos mais complexos, algoritmos longos ou quando há decisões não triviais. Isso pode tornar a manutenção difícil e aumentar a chance de erros futuros.

**Exemplo de ausência de comentários em código complexo:**

```pseudo
para i de 1 até n faça
    s <- s + (a[i] * b[i])
fimpara
```

Sem comentários, quem lê pode não entender rapidamente o propósito desse trecho. Um comentário breve pode esclarecer a intenção:

```pseudo
// Calcula o produto escalar entre os vetores a e b
para i de 1 até n faça
    s <- s + (a[i] * b[i])
fimpara
```

## Quando Comentar?

O ideal é comentar sempre que:

- **A lógica não for óbvia:** Se o trecho de código realiza uma operação complexa ou pouco intuitiva, um comentário pode ajudar a explicar o que está sendo feito e por quê.
- **Há decisões importantes:** Explique escolhas de algoritmos, estruturas ou abordagens que não sejam triviais.
- **Existem limitações ou pré-requisitos:** Informe sobre restrições, dependências ou condições especiais.
- **O código pode ser reutilizado:** Funções ou procedimentos genéricos devem ser bem documentados para facilitar o uso futuro.

Evite comentar:

- **O que já está claro pelo código:** Nomes de variáveis e funções bem escolhidos já explicam boa parte da lógica.
- **Cada linha individualmente:** Prefira comentários de bloco, explicando o objetivo geral de um trecho.

## Boas Práticas

- **Seja sucinto e objetivo:** Comentários devem ser claros e diretos.
- **Mantenha os comentários atualizados:** Comentários desatualizados podem ser mais prejudiciais do que a ausência deles.
- **Prefira código claro:** Escreva o código de forma legível, reduzindo a necessidade de comentários excessivos.

## Conclusão

O equilíbrio entre excesso e ausência de comentários é fundamental para a qualidade do código. Comente sempre que necessário para esclarecer a lógica, mas evite redundâncias. Lembre-se: bons comentários facilitam o entendimento, a manutenção e a evolução dos algoritmos, tornando o trabalho em equipe e o aprendizado muito mais eficientes.