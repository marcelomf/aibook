# Exercícios de Repetição Pós-Condicional com `do-while`

As estruturas de repetição são fundamentais na lógica de programação, permitindo que um bloco de código seja executado várias vezes de acordo com uma condição. Entre essas estruturas, o `do-while` se destaca por ser uma **estrutura de repetição pós-condicional**, ou seja, a condição de parada é verificada **após** a execução do bloco de comandos. Isso garante que o bloco será executado pelo menos uma vez, independentemente da condição inicial.

## Características do `do-while`

- **Execução garantida:** O bloco de comandos é executado ao menos uma vez.
- **Verificação pós-condição:** A condição é avaliada após a execução do bloco.
- **Sintaxe comum (pseudocódigo):**

  ```pseudocode
  faça
      // comandos
  enquanto (condição)
  ```

  Em linguagens como C, Java e JavaScript, a sintaxe é semelhante:

  ```c
  do {
      // comandos
  } while (condição);
  ```

## Quando usar o `do-while`?

O `do-while` é ideal quando você precisa garantir que o usuário ou o sistema execute uma ação pelo menos uma vez antes de verificar se deve continuar. Exemplos comuns incluem:

- Solicitar e validar entrada do usuário.
- Repetir um menu até que o usuário escolha sair.
- Processar dados até que uma condição de parada seja atingida.

## Exemplos Práticos

### 1. Solicitar senha até ser correta

```pseudocode
faça
    leia senha
    se senha != "1234"
        escreva "Senha incorreta, tente novamente."
enquanto (senha != "1234")
escreva "Acesso permitido!"
```

**Explicação:**  
O programa solicita a senha ao usuário. Se estiver incorreta, pede novamente. O bloco será executado pelo menos uma vez, mesmo que o usuário acerte de primeira.

---

### 2. Menu de opções até o usuário escolher sair

```pseudocode
faça
    escreva "1 - Opção A"
    escreva "2 - Opção B"
    escreva "0 - Sair"
    leia opcao
    se opcao == 1
        escreva "Você escolheu a Opção A"
    senão se opcao == 2
        escreva "Você escolheu a Opção B"
enquanto (opcao != 0)
escreva "Programa encerrado."
```

**Explicação:**  
O menu é exibido ao menos uma vez. O programa só termina quando o usuário digita 0.

---

### 3. Somar números até digitar zero

```pseudocode
soma <- 0
faça
    escreva "Digite um número (0 para sair):"
    leia numero
    soma <- soma + numero
enquanto (numero != 0)
escreva "A soma dos números é: ", soma
```

**Explicação:**  
O usuário digita números e o programa soma todos eles. O laço só termina quando o usuário digita 0.

---

## Exercícios Propostos

1. **Validação de idade:**  
   Peça ao usuário para digitar sua idade. Repita a solicitação enquanto a idade for menor que 0 ou maior que 120.

2. **Confirmação de saída:**  
   Mostre uma mensagem perguntando se o usuário deseja sair (`S` para sim, `N` para não). Repita até que o usuário digite `S`.

3. **Média de notas:**  
   Solicite notas ao usuário até que ele digite um valor negativo. Calcule e mostre a média das notas válidas.

---

## Dicas para Resolver Exercícios com `do-while`

- **Inicialize variáveis** antes do laço, se necessário.
- **Garanta que a condição de parada** seja corretamente definida para evitar laços infinitos.
- **Valide entradas** dentro do laço, informando o usuário sobre valores inválidos.
- **Teste seu algoritmo** com diferentes entradas para garantir que funciona em todos os casos.

---

## Conclusão

A estrutura `do-while` é uma poderosa ferramenta para situações em que a execução inicial do bloco de comandos é obrigatória. Compreender e praticar exercícios com essa estrutura ajuda a desenvolver algoritmos mais robustos e interativos, essenciais para a construção de programas eficientes e confiáveis.