# Exercícios Práticos de if, else e switch

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa tome diferentes caminhos de execução conforme determinadas condições. Os comandos `if`, `else` e `switch` são amplamente utilizados para implementar essas decisões. A seguir, você encontrará exercícios práticos para fixar o uso dessas estruturas, acompanhados de explicações e exemplos em pseudocódigo.

---

## 1. Exercício: Verificação de Número Par ou Ímpar

**Enunciado:**  
Peça ao usuário para digitar um número inteiro. Utilize a estrutura `if-else` para verificar se o número é par ou ímpar e exiba a mensagem correspondente.

**Pseudocódigo:**
```
Leia numero
Se (numero % 2 == 0) então
    Escreva "O número é par."
Senão
    Escreva "O número é ímpar."
FimSe
```

---

## 2. Exercício: Classificação de Idade

**Enunciado:**  
Solicite a idade de uma pessoa e classifique-a conforme as faixas etárias abaixo, utilizando `if`, `else if` e `else`:

- Menor de 12 anos: Criança
- De 12 a 17 anos: Adolescente
- De 18 a 59 anos: Adulto
- 60 anos ou mais: Idoso

**Pseudocódigo:**
```
Leia idade
Se (idade < 12) então
    Escreva "Criança"
Senão se (idade < 18) então
    Escreva "Adolescente"
Senão se (idade < 60) então
    Escreva "Adulto"
Senão
    Escreva "Idoso"
FimSe
```

---

## 3. Exercício: Calculadora Simples com switch

**Enunciado:**  
Peça ao usuário dois números e uma operação matemática (+, -, *, /). Utilize a estrutura `switch` para realizar a operação escolhida e mostrar o resultado.

**Pseudocódigo:**
```
Leia numero1
Leia numero2
Leia operacao

Switch (operacao)
    Caso "+"
        resultado = numero1 + numero2
        Escreva resultado
    Caso "-"
        resultado = numero1 - numero2
        Escreva resultado
    Caso "*"
        resultado = numero1 * numero2
        Escreva resultado
    Caso "/"
        Se (numero2 != 0) então
            resultado = numero1 / numero2
            Escreva resultado
        Senão
            Escreva "Divisão por zero não é permitida."
        FimSe
    Padrão
        Escreva "Operação inválida."
FimSwitch
```

---

## 4. Exercício: Verificação de Nota

**Enunciado:**  
Solicite a nota de um aluno (0 a 10). Utilize `if-else` para informar se o aluno está aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6).

**Pseudocódigo:**
```
Leia nota
Se (nota >= 6) então
    Escreva "Aprovado"
Senão
    Escreva "Reprovado"
FimSe
```

---

## 5. Exercício: Menu de Opções com switch

**Enunciado:**  
Implemente um menu simples com as opções:

1. Cadastrar usuário  
2. Excluir usuário  
3. Sair

Peça ao usuário para escolher uma opção e utilize `switch` para executar a ação correspondente.

**Pseudocódigo:**
```
Escreva "1 - Cadastrar usuário"
Escreva "2 - Excluir usuário"
Escreva "3 - Sair"
Leia opcao

Switch (opcao)
    Caso 1
        Escreva "Usuário cadastrado com sucesso."
    Caso 2
        Escreva "Usuário excluído com sucesso."
    Caso 3
        Escreva "Saindo do sistema."
    Padrão
        Escreva "Opção inválida."
FimSwitch
```

---

## Dicas para Resolver os Exercícios

- **Leia atentamente o enunciado** para entender qual estrutura de decisão é mais adequada.
- **Teste diferentes entradas** para garantir que todas as condições estão sendo tratadas corretamente.
- **Utilize indentação** para facilitar a leitura do código.
- **Comente o código** para explicar a lógica, se necessário.

---

## Conclusão

Praticar com exercícios é essencial para consolidar o entendimento das estruturas de decisão. Os exemplos apresentados aqui abrangem situações comuns do dia a dia da programação e servem como base para problemas mais complexos. Ao dominar o uso de `if`, `else` e `switch`, você estará preparado para criar algoritmos mais inteligentes e eficientes, fundamentais para o desenvolvimento de qualquer software.

**Continue praticando e explorando diferentes cenários para aprimorar sua lógica de programação!**