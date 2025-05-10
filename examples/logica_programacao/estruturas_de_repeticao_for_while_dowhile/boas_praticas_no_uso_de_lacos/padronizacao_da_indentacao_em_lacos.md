
## Padronização da Indentação em Laços

A padronização da indentação é uma das boas práticas mais importantes ao utilizar estruturas de repetição, como `for`, `while` e `do-while`, na lógica de programação. Indentar corretamente o código significa alinhar visualmente os blocos de comandos, facilitando a leitura, a compreensão e a manutenção dos algoritmos. 

### Por que a Indentação é Importante?

- **Legibilidade:** Um código bem indentado permite que qualquer pessoa (inclusive você no futuro) entenda rapidamente onde começa e termina cada bloco de repetição.
- **Manutenção:** Facilita a identificação de erros e a realização de alterações, reduzindo a chance de bugs.
- **Colaboração:** Em projetos com mais de um desenvolvedor, a padronização da indentação garante que todos sigam o mesmo estilo, evitando confusões.
- **Prevenção de Erros:** Em algumas linguagens, como Python, a indentação é obrigatória e faz parte da sintaxe. Em outras, como C, Java e JavaScript, embora não seja obrigatória, é considerada uma boa prática.

### Como Indentar Corretamente Laços

A indentação consiste em adicionar espaços ou tabulações antes das linhas de código que pertencem ao bloco do laço. Veja exemplos em pseudocódigo:

#### Exemplo 1: Estrutura `for`

```pseudocode
para i de 1 até 5 faça
    escreva("Valor de i: ", i)
    se i é par então
        escreva("i é par")
    fimse
fimpara
```

#### Exemplo 2: Estrutura `while`

```pseudocode
enquanto contador < 10 faça
    escreva("Contador: ", contador)
    contador <- contador + 1
fimenquanto
```

#### Exemplo 3: Estrutura `do-while`

```pseudocode
faça
    escreva("Digite um número positivo:")
    leia(numero)
enquanto numero <= 0
```

Observe que, em todos os exemplos, os comandos dentro do laço estão deslocados para a direita em relação à linha do laço. Isso indica visualmente que eles pertencem ao bloco de repetição.

### Dicas de Padronização

- **Escolha entre espaços ou tabulações:** Defina se irá usar espaços (geralmente 2 ou 4) ou tabulações para indentar. O importante é ser consistente em todo o código.
- **Indentação em blocos aninhados:** Ao utilizar laços dentro de laços (aninhados), aumente a indentação a cada novo nível.
- **Ferramentas de formatação:** Utilize editores de texto ou IDEs que ajudam a manter a indentação automaticamente.
- **Siga convenções do time ou da linguagem:** Em projetos colaborativos, siga o padrão adotado pelo grupo ou pela linguagem de programação.

### Exemplo de Má Indentação (Evite!)

```pseudocode
para i de 1 até 5 faça
escreva("Valor de i: ", i)
    se i é par então
escreva("i é par")
    fimse
fimpara
```

No exemplo acima, a falta de padronização dificulta a leitura e pode causar confusão sobre quais comandos pertencem a cada bloco.

### Conclusão

A padronização da indentação em laços é fundamental para garantir um código limpo, organizado e fácil de entender. Adotar essa prática desde o início dos estudos em lógica de programação contribui para o desenvolvimento de algoritmos mais profissionais e prepara o programador para trabalhar em equipes e projetos maiores.
```
