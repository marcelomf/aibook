
## Estrutura while: Sintaxe e Exemplos

### Sintaxe básica do while em pseudocódigo

A estrutura de repetição **while** (enquanto) é utilizada quando não sabemos, previamente, quantas vezes um bloco de comandos deve ser executado. Ela repete um conjunto de instruções enquanto uma condição lógica for verdadeira. Assim que a condição se torna falsa, a execução do laço é interrompida e o programa segue para a próxima instrução após o bloco do while.

A sintaxe básica do **while** em pseudocódigo é bastante simples e pode ser representada da seguinte forma:

```pseudocode
enquanto <condição> faça
    <comandos>
fimenquanto
```

- **enquanto**: palavra-chave que inicia a estrutura de repetição.
- **<condição>**: expressão lógica que será avaliada antes de cada iteração. Se for verdadeira, o bloco de comandos é executado; se for falsa, o laço é encerrado.
- **<comandos>**: um ou mais comandos que serão repetidos enquanto a condição for verdadeira.
- **fimenquanto**: indica o fim do bloco de comandos do laço.

#### Exemplo 1: Contagem simples

Vamos criar um exemplo em pseudocódigo que imprime os números de 1 a 5 utilizando o laço while:

```pseudocode
inicio
    contador ← 1
    enquanto contador ≤ 5 faça
        escreva(contador)
        contador ← contador + 1
    fimenquanto
fimalgoritmo
```

**Explicação:**
- Inicializamos a variável `contador` com o valor 1.
- Enquanto `contador` for menor ou igual a 5, o valor é exibido na tela.
- A cada repetição, incrementamos o valor de `contador` em 1.
- Quando `contador` se torna maior que 5, a condição é falsa e o laço termina.

#### Exemplo 2: Leitura até condição de parada

Outro uso comum do while é repetir a leitura de dados até que uma condição de parada seja atingida. Por exemplo, ler números até que o usuário digite zero:

```pseudocode
inicio
    leia(numero)
    enquanto numero ≠ 0 faça
        escreva("Você digitou: ", numero)
        leia(numero)
    fimenquanto
fimalgoritmo
```

**Explicação:**
- O programa lê um número do usuário.
- Enquanto o número for diferente de zero, exibe o valor digitado e solicita um novo número.
- Quando o usuário digita zero, a condição se torna falsa e o laço é encerrado.

### Dicas importantes

- **Atenção ao controle da condição:** Certifique-se de que, em algum momento, a condição do while se tornará falsa, evitando laços infinitos.
- **Inicialização das variáveis:** Sempre inicialize as variáveis utilizadas na condição antes do laço.
- **Atualização das variáveis:** Lembre-se de atualizar as variáveis dentro do laço para garantir que a condição possa ser alterada.

### Conclusão

A estrutura while é fundamental para a construção de algoritmos que exigem repetições baseadas em condições dinâmicas. Compreender sua sintaxe em pseudocódigo é essencial para desenvolver soluções lógicas e eficientes, servindo de base para a implementação em qualquer linguagem de programação.
```
