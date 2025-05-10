
## Exemplo Prático de Laço com Condição (`while`)

Os laços de repetição são estruturas fundamentais na lógica de programação, permitindo que um bloco de código seja executado várias vezes, de acordo com uma condição estabelecida. Entre os principais tipos de laços, o `while` se destaca por executar o bloco de comandos **enquanto** uma condição for verdadeira.

### Como funciona o laço `while`?

A estrutura básica do laço `while` é:

```pseudocode
enquanto (condição) faça
    // comandos a serem executados
fim-enquanto
```

O laço verifica a condição **antes** de executar o bloco de comandos. Se a condição for verdadeira, o bloco é executado; ao final, a condição é verificada novamente. O processo se repete até que a condição se torne falsa.

### Exemplo prático: Solicitar senha até acertar

Vamos supor que queremos criar um algoritmo que solicite ao usuário uma senha e só permita o acesso quando a senha correta for informada. Enquanto a senha estiver incorreta, o programa deve continuar pedindo ao usuário para digitar novamente.

#### Pseudocódigo

```pseudocode
senha_correta <- "1234"
senha_digitada <- ""

enquanto (senha_digitada ≠ senha_correta) faça
    escreva("Digite a senha: ")
    leia(senha_digitada)
    se (senha_digitada ≠ senha_correta) então
        escreva("Senha incorreta. Tente novamente.")
    fim-se
fim-enquanto

escreva("Acesso permitido!")
```

#### Explicação

- Inicialmente, definimos a senha correta e uma variável para armazenar a senha digitada.
- O laço `enquanto` verifica se a senha digitada é diferente da senha correta.
- Se for diferente, solicita ao usuário que digite novamente.
- Quando a senha correta for informada, o laço termina e o acesso é permitido.

### Fluxograma

```plaintext
+-----------------------------+
| senha_digitada <- ""        |
+-----------------------------+
            |
            v
+-----------------------------+
| senha_digitada ≠ "1234"?    |
+-----------------------------+
      | Sim           | Não
      v               v
+-----------------+   +----------------------+
| Peça a senha    |   | Escreva "Acesso      |
| ao usuário      |   | permitido!"          |
+-----------------+   +----------------------+
      |
      v
+-----------------+
| Senha correta?  |
+-----------------+
      | Não
      v
+-----------------+
| Escreva "Senha  |
| incorreta."     |
+-----------------+
      |
      v
   (volta ao início)
```

### Dicas e Boas Práticas

- **Evite laços infinitos:** Certifique-se de que a condição do `while` pode se tornar falsa em algum momento, para evitar que o programa fique preso em um loop sem fim.
- **Valide as entradas:** Sempre que possível, verifique se o valor digitado pelo usuário é válido antes de processá-lo.
- **Clareza:** Mantenha o código organizado e utilize nomes de variáveis que facilitem o entendimento.

### Conclusão

O laço `while` é ideal para situações em que não sabemos previamente quantas vezes o bloco de código precisará ser executado, mas sabemos a condição que deve ser satisfeita para encerrar a repetição. Compreender e praticar o uso do `while` é essencial para desenvolver algoritmos eficientes e robustos.
```
