
# Exemplos Práticos de Estruturas de Decisão em Pseudocódigo

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que um algoritmo tome diferentes caminhos de execução conforme determinadas condições. Em pseudocódigo, as estruturas mais comuns são o `if`, `else` e `switch`. A seguir, apresentamos exemplos práticos para ilustrar como essas estruturas podem ser aplicadas na resolução de problemas do dia a dia.

---

## 1. Estrutura `if` e `else`

A estrutura `if` permite executar um bloco de comandos caso uma condição seja verdadeira. O `else` define o que acontece caso a condição não seja satisfeita.

### Exemplo 1: Verificar se um número é positivo ou negativo

```pseudocode
Algoritmo VerificaNumero
    Leia numero
    Se numero >= 0 então
        Escreva "O número é positivo."
    Senão
        Escreva "O número é negativo."
    FimSe
FimAlgoritmo
```

**Explicação:**  
O algoritmo lê um número e verifica se ele é maior ou igual a zero. Se for, exibe que é positivo; caso contrário, exibe que é negativo.

---

## 2. Estrutura `if`, `else if` e `else`

Quando há mais de duas possibilidades, podemos usar o `else if` (ou `senão se`).

### Exemplo 2: Classificar a faixa etária de uma pessoa

```pseudocode
Algoritmo ClassificaIdade
    Leia idade
    Se idade < 12 então
        Escreva "Criança"
    Senão se idade < 18 então
        Escreva "Adolescente"
    Senão se idade < 60 então
        Escreva "Adulto"
    Senão
        Escreva "Idoso"
    FimSe
FimAlgoritmo
```

**Explicação:**  
O algoritmo classifica a idade informada em quatro categorias, utilizando múltiplas condições.

---

## 3. Estrutura `switch` (Escolha)

A estrutura `switch` (ou `escolha`) é útil quando se deseja comparar uma mesma variável com vários valores possíveis.

### Exemplo 3: Menu de opções

```pseudocode
Algoritmo MenuOpcoes
    Escreva "Escolha uma opção:"
    Escreva "1 - Cadastrar usuário"
    Escreva "2 - Excluir usuário"
    Escreva "3 - Sair"
    Leia opcao

    Escolha opcao
        Caso 1
            Escreva "Usuário cadastrado com sucesso."
        Caso 2
            Escreva "Usuário excluído com sucesso."
        Caso 3
            Escreva "Saindo do sistema."
        Caso Contrario
            Escreva "Opção inválida."
    FimEscolha
FimAlgoritmo
```

**Explicação:**  
O algoritmo apresenta um menu e executa uma ação conforme a opção escolhida pelo usuário.

---

## 4. Exemplo Prático: Verificação de Aprovação

### Exemplo 4: Verificar se o aluno foi aprovado, reprovado ou está em recuperação

```pseudocode
Algoritmo VerificaAprovacao
    Leia nota
    Se nota >= 7 então
        Escreva "Aprovado"
    Senão se nota >= 5 então
        Escreva "Recuperação"
    Senão
        Escreva "Reprovado"
    FimSe
FimAlgoritmo
```

**Explicação:**  
O algoritmo lê a nota do aluno e informa se ele está aprovado, em recuperação ou reprovado, de acordo com a faixa de notas.

---

## Conclusão

As estruturas de decisão são essenciais para criar algoritmos que se adaptam a diferentes situações. O uso correto de `if`, `else`, `else if` e `switch` em pseudocódigo permite que o programador desenvolva soluções lógicas e eficientes, facilitando a transição para qualquer linguagem de programação posteriormente. Praticar com exemplos variados é fundamental para dominar esses conceitos.
```
