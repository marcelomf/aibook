# Escopo de Variáveis: Local e Global

Ao aprender lógica de programação, compreender o **escopo das variáveis** é fundamental para escrever algoritmos corretos, organizados e livres de erros inesperados. O escopo determina **onde uma variável pode ser acessada ou modificada** dentro de um programa ou algoritmo.

## O que é Escopo?

O **escopo** de uma variável refere-se ao contexto ou região do código onde ela é reconhecida e pode ser utilizada. Dependendo de onde e como uma variável é declarada, ela pode ser acessível em todo o programa ou apenas em uma parte específica dele.

Existem dois tipos principais de escopo:

- **Escopo Local**
- **Escopo Global**

Vamos entender cada um deles.

---

## Escopo Local

Uma variável tem **escopo local** quando é declarada dentro de um bloco específico, como uma função, procedimento, ou estrutura de repetição/decisão. Isso significa que **ela só pode ser utilizada dentro desse bloco**.

### Características do Escopo Local

- **Visibilidade restrita:** Só pode ser acessada dentro do bloco onde foi declarada.
- **Memória liberada:** Ao sair do bloco, a variável deixa de existir e a memória é liberada.
- **Evita conflitos:** Permite usar o mesmo nome de variável em diferentes partes do programa, sem que uma interfira na outra.

### Exemplo em Pseudocódigo

```pseudocode
Algoritmo ExemploEscopoLocal
    Início
        // Variável local à função
        Função Soma(a, b)
            Variável resultado
            resultado <- a + b
            Retorne resultado
        FimFunção

        Escreva(Soma(2, 3)) // resultado só existe dentro da função Soma
    Fim
FimAlgoritmo
```

No exemplo acima, a variável `resultado` só existe dentro da função `Soma`. Fora dela, não é possível acessá-la.

---

## Escopo Global

Uma variável tem **escopo global** quando é declarada fora de qualquer função, procedimento ou bloco específico, geralmente no início do programa. Isso faz com que **ela possa ser acessada e modificada por qualquer parte do código**.

### Características do Escopo Global

- **Visibilidade ampla:** Pode ser acessada de qualquer lugar do programa.
- **Persistência:** Existe durante toda a execução do programa.
- **Cuidado com conflitos:** Alterações feitas em diferentes partes do código afetam o mesmo valor.

### Exemplo em Pseudocódigo

```pseudocode
Algoritmo ExemploEscopoGlobal
    Variável contador // variável global

    Início
        contador <- 0
        Função Incrementa()
            contador <- contador + 1 // acessa a variável global
        FimFunção

        Incrementa()
        Escreva(contador) // Saída: 1
    Fim
FimAlgoritmo
```

No exemplo acima, a variável `contador` é global e pode ser acessada tanto no bloco principal quanto dentro da função `Incrementa`.

---

## Boas Práticas no Uso de Escopo

- **Prefira variáveis locais:** Elas tornam o código mais seguro e fácil de entender, evitando efeitos colaterais indesejados.
- **Use variáveis globais com moderação:** Só quando realmente necessário, como para armazenar informações que precisam ser compartilhadas por todo o programa.
- **Nomeie variáveis de forma clara:** Isso ajuda a evitar confusões, principalmente quando há variáveis locais e globais com nomes semelhantes.

---

## Resumo

- **Escopo local:** Variável só existe e pode ser usada dentro do bloco onde foi declarada.
- **Escopo global:** Variável pode ser acessada de qualquer parte do programa.
- **Escolha o escopo adequado:** Isso ajuda a manter o código organizado, seguro e fácil de manter.

Compreender o escopo das variáveis é essencial para criar algoritmos eficientes e evitar erros comuns, como o uso indevido de valores ou conflitos de nomes. Ao dominar esse conceito, você estará mais preparado para desenvolver programas robustos em qualquer linguagem de programação.