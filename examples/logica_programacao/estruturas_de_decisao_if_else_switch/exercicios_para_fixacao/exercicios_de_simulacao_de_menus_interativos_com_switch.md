# Exercícios de Simulação de Menus Interativos com `switch`

A construção de menus interativos é uma das aplicações mais comuns das estruturas de decisão em programação. Utilizando o comando `switch`, é possível criar programas que apresentam opções ao usuário e executam diferentes ações conforme a escolha feita. Este tipo de exercício é fundamental para fixar o entendimento sobre o funcionamento do `switch` e sua utilidade em situações práticas.

## Por que usar o `switch` em menus?

O `switch` é especialmente útil quando precisamos tomar decisões baseadas em múltiplas opções discretas, como em menus de sistemas. Ele torna o código mais organizado e legível do que uma sequência extensa de comandos `if-else`.

## Estrutura Básica de um Menu com `switch`

Antes de partir para os exercícios, veja um exemplo de pseudocódigo de um menu simples utilizando `switch`:

```pseudocode
exibir "Menu Principal"
exibir "1 - Cadastrar usuário"
exibir "2 - Listar usuários"
exibir "3 - Sair"
ler opcao

switch (opcao) {
    caso 1:
        exibir "Opção de cadastro selecionada"
        // código para cadastrar usuário
        parar
    caso 2:
        exibir "Opção de listagem selecionada"
        // código para listar usuários
        parar
    caso 3:
        exibir "Saindo do sistema..."
        // código para sair
        parar
    padrão:
        exibir "Opção inválida!"
}
```

## Exercícios Propostos

### 1. Menu de Calculadora Simples

**Enunciado:**  
Crie um algoritmo que apresente ao usuário um menu com as seguintes opções:

1. Somar dois números  
2. Subtrair dois números  
3. Multiplicar dois números  
4. Dividir dois números  
5. Sair

O programa deve ler a opção escolhida e, caso seja uma operação matemática, solicitar os dois números, realizar a operação e exibir o resultado. Se a opção for sair, o programa deve encerrar. Caso o usuário digite uma opção inválida, exiba uma mensagem de erro.

**Dica:** Use o `switch` para tratar as opções do menu.

---

### 2. Menu de Conversão de Temperaturas

**Enunciado:**  
Implemente um menu interativo que permita ao usuário escolher entre:

1. Converter Celsius para Fahrenheit  
2. Converter Fahrenheit para Celsius  
3. Sair

Após a escolha, solicite a temperatura a ser convertida, realize o cálculo e mostre o resultado. Utilize o `switch` para controlar o fluxo do programa.

---

### 3. Menu de Cadastro de Produtos

**Enunciado:**  
Desenvolva um algoritmo que simule um menu de cadastro de produtos com as opções:

1. Adicionar produto  
2. Remover produto  
3. Listar produtos  
4. Sair

Cada opção deve exibir uma mensagem correspondente (não é necessário implementar o cadastro real, apenas simular as ações). Utilize o `switch` para tratar as escolhas do usuário.

---

### 4. Menu de Operações Bancárias

**Enunciado:**  
Crie um menu para um sistema bancário com as opções:

1. Consultar saldo  
2. Depositar valor  
3. Sacar valor  
4. Sair

Simule as operações exibindo mensagens apropriadas para cada escolha. Use o `switch` para controlar o menu.

---

## Dicas para Implementação

- Sempre leia a opção do usuário antes do `switch`.
- Utilize o caso `padrão` (ou `default`) para tratar opções inválidas.
- Para menus que devem ser exibidos repetidamente até o usuário escolher sair, utilize uma estrutura de repetição (como `while` ou `do-while`) envolvendo o menu e o `switch`.

## Exemplo de Fluxograma

Abaixo, um fluxograma simplificado de um menu com `switch`:

```
[Início]
   |
[Exibir Menu]
   |
[Ler Opção]
   |
[Switch (Opção)]
   |---[Caso 1]-->[Ação 1]---|
   |---[Caso 2]-->[Ação 2]---|
   |---[Caso 3]-->[Sair]-----|
   |---[Padrão]-->[Erro]------|
   |
[Repetir ou Encerrar]
```

## Conclusão

Exercícios de simulação de menus interativos com `switch` são essenciais para consolidar o entendimento sobre estruturas de decisão múltipla. Eles aproximam o estudante de situações reais encontradas no desenvolvimento de sistemas, além de reforçar a importância da clareza e organização do código. Pratique os exercícios propostos para aprimorar suas habilidades em lógica de programação!

---

**Próximo passo:**  
Implemente os exercícios em pseudocódigo ou em sua linguagem de programação preferida, testando diferentes entradas e opções para garantir o correto funcionamento do menu.