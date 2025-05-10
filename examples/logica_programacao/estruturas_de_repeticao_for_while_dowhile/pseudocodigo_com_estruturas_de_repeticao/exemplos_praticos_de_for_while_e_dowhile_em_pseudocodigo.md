# Exemplos Práticos de for, while e do-while em Pseudocódigo

As estruturas de repetição são fundamentais na lógica de programação, pois permitem executar um bloco de comandos várias vezes, de acordo com uma condição. Os principais tipos são: **for**, **while** e **do-while**. A seguir, apresentamos exemplos práticos de cada uma dessas estruturas em pseudocódigo, facilitando o entendimento de seu funcionamento e aplicação.

---

## 1. Estrutura **for**

A estrutura **for** é utilizada quando se sabe exatamente o número de repetições que deve ser realizado. Ela é composta por três partes: inicialização, condição e incremento.

### Exemplo: Imprimir os números de 1 a 5

```pseudocode
Para i de 1 até 5 faça
    Escreva(i)
FimPara
```

**Explicação:**  
O laço começa com `i = 1` e, a cada repetição, incrementa `i` em 1 até que `i` seja igual a 5. O comando `Escreva(i)` imprime o valor de `i` em cada iteração.

---

## 2. Estrutura **while**

A estrutura **while** é utilizada quando não se sabe previamente quantas vezes o bloco de comandos será executado. O laço continua enquanto a condição for verdadeira.

### Exemplo: Ler números até que o usuário digite zero

```pseudocode
Leia(numero)
Enquanto numero ≠ 0 faça
    Escreva("Você digitou: ", numero)
    Leia(numero)
FimEnquanto
```

**Explicação:**  
O programa lê um número e, enquanto o valor digitado for diferente de zero, imprime o número e solicita outro valor. O laço termina quando o usuário digita zero.

---

## 3. Estrutura **do-while**

A estrutura **do-while** é semelhante ao **while**, mas garante que o bloco de comandos será executado pelo menos uma vez, pois a condição é verificada ao final da repetição.

### Exemplo: Solicitar senha até que o usuário acerte

```pseudocode
senha_correta ← "1234"
Faça
    Escreva("Digite a senha:")
    Leia(senha)
    Se senha ≠ senha_correta então
        Escreva("Senha incorreta. Tente novamente.")
    FimSe
Enquanto senha ≠ senha_correta
Escreva("Acesso permitido!")
```

**Explicação:**  
O programa solicita a senha ao usuário e, enquanto a senha digitada for diferente da correta, exibe uma mensagem de erro e pede novamente. O laço garante que o usuário terá pelo menos uma tentativa.

---

## Resumo das Diferenças

- **for:** Usado quando o número de repetições é conhecido.
- **while:** Usado quando o número de repetições depende de uma condição, que é verificada antes de cada execução.
- **do-while:** Semelhante ao while, mas a condição é verificada após a execução, garantindo pelo menos uma passagem pelo laço.

---

## Conclusão

Compreender e saber aplicar as estruturas de repetição em pseudocódigo é essencial para criar algoritmos eficientes e resolver problemas de forma lógica. Praticar exemplos como os apresentados acima ajuda a fixar o conceito e prepara o leitor para implementá-los em qualquer linguagem de programação.