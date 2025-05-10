
# Exemplos Práticos de Tratamento de Erros em Algoritmos Simples

O tratamento de erros é uma das boas práticas fundamentais em lógica de programação. Ele permite que algoritmos sejam mais robustos, evitando falhas inesperadas e proporcionando uma melhor experiência ao usuário. Mesmo em algoritmos simples, prever e lidar com possíveis erros é essencial para garantir que o programa funcione corretamente em diferentes situações.

Neste tópico, vamos apresentar exemplos práticos de tratamento de erros em algoritmos simples, utilizando pseudocódigo e fluxogramas para facilitar o entendimento.

---

## 1. Validação de Entrada de Dados

Um dos erros mais comuns ocorre quando o usuário fornece um dado inválido. Por exemplo, ao solicitar um número inteiro, o usuário pode digitar uma letra ou um valor fora do intervalo esperado. Veja como tratar esse tipo de erro:

### Exemplo: Solicitar um número positivo

**Pseudocódigo:**
```
Início
    Escreva "Digite um número inteiro positivo:"
    Leia numero
    Se numero < 0 então
        Escreva "Erro: o número deve ser positivo."
    Senão
        Escreva "Você digitou:", numero
    FimSe
Fim
```

**Explicação:**  
O algoritmo verifica se o número digitado é negativo. Se for, exibe uma mensagem de erro. Caso contrário, prossegue normalmente.

---

## 2. Prevenção de Divisão por Zero

A divisão por zero é um erro clássico em programação. Antes de realizar uma divisão, é importante garantir que o divisor não seja zero.

### Exemplo: Divisão segura

**Pseudocódigo:**
```
Início
    Escreva "Digite o numerador:"
    Leia numerador
    Escreva "Digite o denominador:"
    Leia denominador
    Se denominador = 0 então
        Escreva "Erro: divisão por zero não é permitida."
    Senão
        resultado ← numerador / denominador
        Escreva "Resultado:", resultado
    FimSe
Fim
```

**Explicação:**  
O algoritmo só realiza a divisão se o denominador for diferente de zero, evitando o erro.

---

## 3. Repetição até Entrada Válida

Em muitos casos, é interessante solicitar ao usuário que repita a entrada até fornecer um valor válido.

### Exemplo: Solicitar idade válida

**Pseudocódigo:**
```
Início
    Faça
        Escreva "Digite sua idade (entre 0 e 120):"
        Leia idade
        Se idade < 0 ou idade > 120 então
            Escreva "Erro: idade inválida."
        FimSe
    Enquanto idade < 0 ou idade > 120
    Escreva "Idade registrada:", idade
Fim
```

**Explicação:**  
O algoritmo repete a solicitação até que o usuário digite uma idade dentro do intervalo permitido.

---

## 4. Fluxograma: Validação de Entrada

Abaixo, um fluxograma simples para ilustrar a validação de entrada de um número positivo:

```
[Início]
   |
   v
[Solicita número]
   |
   v
[Usuário digita número]
   |
   v
[O número é positivo?] -- Não --> [Exibe mensagem de erro] --> [Solicita número]
   |
  Sim
   v
[Exibe número]
   |
   v
[Fim]
```

---

## 5. Dicas de Boas Práticas

- **Antecipe possíveis erros:** Pense em quais situações o usuário pode errar e trate esses casos.
- **Forneça mensagens claras:** Explique ao usuário o que aconteceu e como corrigir.
- **Evite travamentos:** Nunca permita que o programa pare abruptamente por causa de um erro não tratado.
- **Use repetições para garantir dados válidos:** Sempre que possível, peça novamente a entrada até que esteja correta.

---

## Conclusão

O tratamento de erros em algoritmos simples é um passo importante para criar programas mais confiáveis e fáceis de usar. Com a prática, você aprenderá a identificar pontos críticos e a implementar soluções que evitam falhas, tornando seus algoritmos mais robustos e profissionais.
```
