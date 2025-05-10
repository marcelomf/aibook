
# Exercícios de Identificação e Correção de Erros em Pseudocódigo

A habilidade de identificar e corrigir erros em pseudocódigo é fundamental para quem está aprendendo lógica de programação. Antes mesmo de escrever código em uma linguagem específica, é importante garantir que o raciocínio lógico esteja correto e que o algoritmo esteja livre de falhas. Este tipo de exercício desenvolve o pensamento crítico, a atenção aos detalhes e prepara o iniciante para depurar programas reais no futuro.

## Por que praticar a identificação de erros?

- **Desenvolve o raciocínio lógico:** Ao analisar pseudocódigos com erros, você aprende a pensar como um programador, antecipando possíveis problemas.
- **Aumenta a atenção aos detalhes:** Pequenos erros podem causar grandes problemas. Praticar a identificação ajuda a desenvolver um olhar atento.
- **Prepara para a depuração:** A depuração (debugging) é uma das atividades mais comuns no desenvolvimento de software. Saber encontrar e corrigir erros é essencial.

## Tipos comuns de erros em pseudocódigo

1. **Erros de sintaxe:** Estruturas mal formadas, comandos escritos incorretamente ou esquecidos.
2. **Erros lógicos:** O algoritmo executa, mas não resolve o problema proposto corretamente.
3. **Erros de fluxo:** Estruturas de decisão ou repetição mal posicionadas ou com condições incorretas.
4. **Erros de declaração:** Variáveis não declaradas ou usadas antes de serem inicializadas.

## Exemplos de Exercícios

### Exercício 1: Erro de Sintaxe

**Pseudocódigo com erro:**
```
INICIO
    inteiro numero
    escreva("Digite um número: ")
    leia(numero)
    se numero > 0
        escreva("Número positivo")
    senao
        escreva("Número negativo")
FIM
```

**Identifique e corrija o erro.**

**Correção:**
O comando `se` precisa de um `fimse` para encerrar a estrutura condicional.

```
INICIO
    inteiro numero
    escreva("Digite um número: ")
    leia(numero)
    se numero > 0 entao
        escreva("Número positivo")
    senao
        escreva("Número negativo")
    fimse
FIM
```

---

### Exercício 2: Erro Lógico

**Pseudocódigo com erro:**
```
INICIO
    inteiro idade
    escreva("Digite sua idade: ")
    leia(idade)
    se idade >= 18 entao
        escreva("Menor de idade")
    senao
        escreva("Maior de idade")
    fimse
FIM
```

**Identifique e corrija o erro.**

**Correção:**
A lógica está invertida. O correto é:

```
INICIO
    inteiro idade
    escreva("Digite sua idade: ")
    leia(idade)
    se idade >= 18 entao
        escreva("Maior de idade")
    senao
        escreva("Menor de idade")
    fimse
FIM
```

---

### Exercício 3: Erro de Fluxo

**Pseudocódigo com erro:**
```
INICIO
    inteiro i
    para i de 1 ate 5 faca
        escreva(i)
    FIM
```

**Identifique e corrija o erro.**

**Correção:**
Falta o comando `fimpara` para encerrar o laço.

```
INICIO
    inteiro i
    para i de 1 ate 5 faca
        escreva(i)
    fimpara
FIM
```

---

### Exercício 4: Erro de Declaração

**Pseudocódigo com erro:**
```
INICIO
    escreva("Digite um valor: ")
    leia(valor)
    resultado <- valor * 2
    escreva("O dobro é: ", resultado)
FIM
```

**Identifique e corrija o erro.**

**Correção:**
A variável `valor` não foi declarada.

```
INICIO
    inteiro valor, resultado
    escreva("Digite um valor: ")
    leia(valor)
    resultado <- valor * 2
    escreva("O dobro é: ", resultado)
FIM
```

---

## Dicas para identificar e corrigir erros

- **Leia o pseudocódigo com atenção:** Analise cada linha e tente simular a execução mentalmente.
- **Verifique as estruturas:** Certifique-se de que todas as estruturas (condicionais, laços) estão corretamente abertas e fechadas.
- **Cheque as declarações:** Todas as variáveis devem ser declaradas antes de serem usadas.
- **Teste a lógica:** Pergunte-se se o algoritmo realmente resolve o problema proposto.

## Conclusão

Praticar a identificação e correção de erros em pseudocódigo é um passo essencial para consolidar o aprendizado em lógica de programação. Com o tempo, você se tornará mais ágil e preciso na análise de algoritmos, facilitando a transição para qualquer linguagem de programação. Continue praticando com diferentes exemplos e desafie-se a encontrar e corrigir erros cada vez mais complexos!
```
