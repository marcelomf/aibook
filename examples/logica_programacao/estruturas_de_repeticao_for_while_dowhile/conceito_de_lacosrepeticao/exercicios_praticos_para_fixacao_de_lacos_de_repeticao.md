
# Exercícios Práticos para Fixação de Laços de Repetição

Os laços de repetição (ou estruturas de repetição) são fundamentais na lógica de programação, pois permitem executar um bloco de código várias vezes, de acordo com uma condição. Para dominar esse conceito, é essencial praticar com exercícios que envolvam diferentes situações e tipos de laços: `for`, `while` e `do-while`.

A seguir, apresentamos uma seleção de exercícios práticos, acompanhados de orientações e dicas, para ajudar na fixação do conteúdo sobre laços de repetição.

---

## 1. Imprimindo Números de 1 a 10

**Enunciado:**  
Utilize um laço de repetição para imprimir na tela os números de 1 a 10.

**Dica:**  
Você pode usar qualquer estrutura de repetição (`for`, `while` ou `do-while`). Tente resolver com cada uma delas para comparar.

**Exemplo em pseudocódigo:**
```pseudocode
para i de 1 até 10 faça
    escreva(i)
fimpara
```

---

## 2. Soma dos N Primeiros Números

**Enunciado:**  
Peça ao usuário um número inteiro positivo N e calcule a soma dos N primeiros números naturais (1 + 2 + ... + N) usando um laço de repetição.

**Dica:**  
Inicialize uma variável acumuladora para guardar a soma.

**Exemplo em pseudocódigo:**
```pseudocode
leia(N)
soma <- 0
para i de 1 até N faça
    soma <- soma + i
fimpara
escreva("Soma:", soma)
```

---

## 3. Tabuada de um Número

**Enunciado:**  
Solicite ao usuário um número inteiro e exiba a tabuada desse número de 1 a 10.

**Dica:**  
Use um laço para multiplicar o número informado por cada valor de 1 a 10.

**Exemplo em pseudocódigo:**
```pseudocode
leia(numero)
para i de 1 até 10 faça
    escreva(numero, " x ", i, " = ", numero * i)
fimpara
```

---

## 4. Contagem Regressiva

**Enunciado:**  
Imprima uma contagem regressiva de 10 até 1, utilizando um laço de repetição.

**Dica:**  
O laço pode ser decrementado.

**Exemplo em pseudocódigo:**
```pseudocode
para i de 10 até 1 passo -1 faça
    escreva(i)
fimpara
```

---

## 5. Lendo e Somando Números até Zero

**Enunciado:**  
Peça ao usuário para digitar números inteiros. Some todos os números digitados até que o usuário digite zero. Ao final, mostre a soma.

**Dica:**  
Use um laço `while` ou `do-while`, pois não se sabe quantas repetições serão necessárias.

**Exemplo em pseudocódigo:**
```pseudocode
soma <- 0
faça
    leia(numero)
    soma <- soma + numero
enquanto numero != 0
escreva("Soma total:", soma)
```

---

## 6. Validando Entrada de Dados

**Enunciado:**  
Solicite ao usuário que digite uma senha. Continue pedindo até que ele digite a senha correta ("1234").

**Dica:**  
Utilize um laço `while` ou `do-while` para validar a entrada.

**Exemplo em pseudocódigo:**
```pseudocode
faça
    leia(senha)
    se senha != "1234" então
        escreva("Senha incorreta, tente novamente.")
fimenquanto senha != "1234"
escreva("Acesso permitido.")
```

---

## 7. Números Pares de 1 a 100

**Enunciado:**  
Imprima todos os números pares de 1 a 100.

**Dica:**  
Use o operador de resto (`%` ou `mod`) para verificar se o número é par.

**Exemplo em pseudocódigo:**
```pseudocode
para i de 1 até 100 faça
    se i mod 2 = 0 então
        escreva(i)
    fimse
fimpara
```

---

## Dicas para Praticar

- **Tente resolver cada exercício com diferentes tipos de laço** (`for`, `while`, `do-while`) para entender suas particularidades.
- **Comente seu código** para explicar o que cada parte faz.
- **Teste com diferentes valores de entrada** para garantir que o algoritmo funciona em todos os casos.
- **Desenhe fluxogramas** para visualizar o fluxo de execução dos laços.

---

## Conclusão

A prática com exercícios é essencial para fixar o conceito de laços de repetição. Ao resolver problemas variados, você desenvolve a habilidade de identificar qual estrutura de repetição é mais adequada para cada situação, além de aprimorar sua lógica de programação. Continue praticando e, sempre que possível, crie seus próprios desafios!

```
