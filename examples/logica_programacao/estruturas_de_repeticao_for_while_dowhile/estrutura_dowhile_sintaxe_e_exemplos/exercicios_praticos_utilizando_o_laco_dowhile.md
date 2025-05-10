
## Exercícios Práticos Utilizando o Laço do-while

O laço `do-while` é uma estrutura de repetição muito útil quando precisamos garantir que um bloco de código seja executado pelo menos uma vez, independentemente da condição de parada. Isso ocorre porque, diferentemente do `while` tradicional, a verificação da condição acontece **após** a execução do bloco de comandos.

A seguir, apresentamos alguns exercícios práticos para fixar o uso do laço `do-while`. Os exemplos são apresentados em pseudocódigo, facilitando a compreensão do conceito antes da implementação em uma linguagem de programação específica.

---

### Exercício 1: Leitura de Números até Valor Negativo

**Enunciado:**  
Solicite ao usuário que digite números inteiros. O programa deve continuar pedindo novos números até que o usuário digite um valor negativo. Ao final, exiba a quantidade de números positivos informados.

**Pseudocódigo:**
```
contador ← 0
faça
    escreva("Digite um número inteiro: ")
    leia(numero)
    se numero ≥ 0 então
        contador ← contador + 1
    fimse
enquanto numero ≥ 0
escreva("Quantidade de números positivos digitados: ", contador)
```

---

### Exercício 2: Validação de Senha

**Enunciado:**  
Implemente um algoritmo que solicite ao usuário uma senha. O programa deve continuar pedindo a senha até que o usuário digite a senha correta ("1234"). Ao acertar, exiba uma mensagem de acesso liberado.

**Pseudocódigo:**
```
faça
    escreva("Digite a senha: ")
    leia(senha)
    se senha ≠ "1234" então
        escreva("Senha incorreta. Tente novamente.")
    fimse
enquanto senha ≠ "1234"
escreva("Acesso liberado!")
```

---

### Exercício 3: Menu de Opções

**Enunciado:**  
Crie um menu simples com as opções:  
1. Exibir mensagem  
2. Sair  
O programa deve exibir o menu repetidamente até que o usuário escolha a opção 2.

**Pseudocódigo:**
```
faça
    escreva("Menu de Opções")
    escreva("1 - Exibir mensagem")
    escreva("2 - Sair")
    escreva("Escolha uma opção: ")
    leia(opcao)
    se opcao = 1 então
        escreva("Você escolheu exibir a mensagem!")
    fimse
enquanto opcao ≠ 2
escreva("Programa encerrado.")
```

---

### Dicas para Praticar

- Sempre identifique se o problema exige que o bloco de comandos seja executado pelo menos uma vez. Se sim, o `do-while` é a estrutura ideal.
- Teste seus algoritmos com diferentes entradas para garantir que a condição de parada está correta.
- Tente adaptar os exercícios para outros contextos, como validação de dados, repetição de cálculos, entre outros.

---

### Conclusão

A prática com exercícios utilizando o laço `do-while` é fundamental para compreender sua aplicação e diferenças em relação a outros laços de repetição. Com esses exemplos, você estará mais preparado para identificar situações em que o `do-while` é a melhor escolha, tornando seus algoritmos mais eficientes e adequados ao problema proposto.
```
