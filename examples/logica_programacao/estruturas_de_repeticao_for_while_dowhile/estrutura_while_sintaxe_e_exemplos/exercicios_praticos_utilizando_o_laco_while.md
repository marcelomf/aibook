
## Exercícios Práticos Utilizando o Laço `while`

O laço `while` é uma das estruturas de repetição mais utilizadas na programação. Ele permite executar um bloco de código repetidamente enquanto uma condição for verdadeira. Para fixar o entendimento sobre o funcionamento do `while`, é fundamental praticar com exercícios que simulam situações reais de programação. A seguir, apresentamos alguns exercícios práticos, acompanhados de explicações e exemplos em pseudocódigo.

---

### 1. Contagem Progressiva

**Enunciado:**  
Escreva um algoritmo que exiba na tela os números de 1 a 10 utilizando o laço `while`.

**Pseudocódigo:**
```
variável contador recebe 1
enquanto contador <= 10 faça
    escreva(contador)
    contador recebe contador + 1
fim-enquanto
```

**Explicação:**  
Neste exercício, a variável `contador` é inicializada com 1. O laço `while` verifica se o valor de `contador` é menor ou igual a 10. A cada iteração, o valor é exibido e incrementado em 1, até que a condição não seja mais satisfeita.

---

### 2. Soma de Números Informados pelo Usuário

**Enunciado:**  
Crie um algoritmo que solicite ao usuário números inteiros e some-os até que o usuário digite zero. Ao final, exiba o resultado da soma.

**Pseudocódigo:**
```
variável soma recebe 0
variável numero recebe 1  // valor inicial diferente de zero

enquanto numero != 0 faça
    escreva("Digite um número (0 para sair): ")
    leia(numero)
    soma recebe soma + numero
fim-enquanto

escreva("A soma dos números é: ", soma)
```

**Explicação:**  
O laço continua pedindo números ao usuário enquanto o valor digitado for diferente de zero. Cada número é somado à variável `soma`. Quando o usuário digita zero, o laço termina e o resultado é exibido.

---

### 3. Validação de Senha

**Enunciado:**  
Implemente um algoritmo que solicite ao usuário uma senha até que ele digite a senha correta (por exemplo, "1234").

**Pseudocódigo:**
```
variável senha recebe ""
enquanto senha != "1234" faça
    escreva("Digite a senha: ")
    leia(senha)
    se senha != "1234" então
        escreva("Senha incorreta. Tente novamente.")
fim-enquanto
escreva("Acesso permitido.")
```

**Explicação:**  
O laço `while` garante que o usuário só sairá do loop ao digitar a senha correta. Caso contrário, uma mensagem de erro é exibida e o pedido é repetido.

---

### 4. Fatorial de um Número

**Enunciado:**  
Desenvolva um algoritmo que calcule o fatorial de um número informado pelo usuário utilizando o laço `while`.

**Pseudocódigo:**
```
escreva("Digite um número para calcular o fatorial: ")
leia(numero)
variável resultado recebe 1
variável contador recebe numero

enquanto contador > 1 faça
    resultado recebe resultado * contador
    contador recebe contador - 1
fim-enquanto

escreva("O fatorial de ", numero, " é: ", resultado)
```

**Explicação:**  
O laço multiplica o valor de `resultado` pelo valor atual de `contador`, decrementando `contador` a cada iteração, até que ele seja igual a 1.

---

### 5. Menu de Opções

**Enunciado:**  
Crie um algoritmo que exiba um menu de opções para o usuário e só termine quando ele escolher a opção de sair.

**Pseudocódigo:**
```
variável opcao recebe 0

enquanto opcao != 3 faça
    escreva("Menu de Opções:")
    escreva("1 - Opção 1")
    escreva("2 - Opção 2")
    escreva("3 - Sair")
    escreva("Escolha uma opção: ")
    leia(opcao)
    se opcao == 1 então
        escreva("Você escolheu a Opção 1.")
    senão se opcao == 2 então
        escreva("Você escolheu a Opção 2.")
    senão se opcao == 3 então
        escreva("Saindo do programa...")
    senão
        escreva("Opção inválida. Tente novamente.")
fim-enquanto
```

**Explicação:**  
O laço `while` mantém o menu ativo até que o usuário escolha a opção de sair (opção 3). O algoritmo trata opções inválidas e executa ações conforme a escolha do usuário.

---

## Dicas para Praticar

- **Teste diferentes condições:** Experimente alterar as condições do `while` para entender como o laço se comporta.
- **Evite loops infinitos:** Certifique-se de que a condição do laço pode ser falsa em algum momento, evitando que o programa fique preso em um loop sem fim.
- **Utilize variáveis de controle:** Elas ajudam a monitorar o progresso do laço e a garantir que ele funcione corretamente.

---

## Conclusão

A prática com exercícios utilizando o laço `while` é fundamental para consolidar o entendimento sobre estruturas de repetição. Com esses exemplos, você estará mais preparado para resolver problemas que exigem repetição de tarefas em seus algoritmos, desenvolvendo soluções mais eficientes e organizadas.
```
