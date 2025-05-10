# Exemplo de Pseudocódigo para Simulação de Caixa Eletrônico

A utilização de pseudocódigo é uma excelente forma de planejar e estruturar soluções para problemas computacionais antes de partir para a implementação em uma linguagem de programação específica. Neste exemplo, vamos criar um pseudocódigo para simular as operações básicas de um caixa eletrônico (ATM), como consulta de saldo, saque e depósito.

## Objetivo

O objetivo deste exemplo é demonstrar como utilizar o pseudocódigo para descrever, de maneira clara e lógica, o funcionamento de um caixa eletrônico simples. O usuário poderá:

- Consultar o saldo da conta
- Realizar saques
- Realizar depósitos
- Encerrar a operação

## Estrutura do Pseudocódigo

A seguir, apresentamos o pseudocódigo comentado para facilitar o entendimento de cada etapa do processo.

---

```plaintext
INÍCIO

    // Inicializa o saldo da conta
    saldo ← 1000

    // Loop principal do caixa eletrônico
    ENQUANTO VERDADEIRO FAÇA

        // Exibe o menu de opções
        ESCREVA "Bem-vindo ao Caixa Eletrônico"
        ESCREVA "1 - Consultar Saldo"
        ESCREVA "2 - Realizar Saque"
        ESCREVA "3 - Realizar Depósito"
        ESCREVA "4 - Sair"
        ESCREVA "Escolha uma opção: "
        LEIA opcao

        // Verifica a opção escolhida pelo usuário
        SE opcao = 1 ENTÃO
            ESCREVA "Seu saldo atual é: R$ ", saldo

        SENÃO SE opcao = 2 ENTÃO
            ESCREVA "Digite o valor do saque: "
            LEIA valor_saque

            SE valor_saque > saldo ENTÃO
                ESCREVA "Saldo insuficiente para saque."
            SENÃO SE valor_saque <= 0 ENTÃO
                ESCREVA "Valor inválido para saque."
            SENÃO
                saldo ← saldo - valor_saque
                ESCREVA "Saque realizado com sucesso."
                ESCREVA "Saldo atual: R$ ", saldo
            FIM SE

        SENÃO SE opcao = 3 ENTÃO
            ESCREVA "Digite o valor do depósito: "
            LEIA valor_deposito

            SE valor_deposito <= 0 ENTÃO
                ESCREVA "Valor inválido para depósito."
            SENÃO
                saldo ← saldo + valor_deposito
                ESCREVA "Depósito realizado com sucesso."
                ESCREVA "Saldo atual: R$ ", saldo
            FIM SE

        SENÃO SE opcao = 4 ENTÃO
            ESCREVA "Obrigado por utilizar o caixa eletrônico."
            SAIR DO LOOP

        SENÃO
            ESCREVA "Opção inválida. Tente novamente."
        FIM SE

    FIM ENQUANTO

FIM
```

---

## Explicação do Pseudocódigo

- **Inicialização:** O saldo da conta é iniciado com um valor fixo (R$ 1000).
- **Menu de Opções:** O usuário é apresentado a um menu com as opções disponíveis.
- **Consulta de Saldo:** Exibe o saldo atual da conta.
- **Saque:** Solicita o valor do saque, verifica se o valor é válido e se há saldo suficiente antes de realizar a operação.
- **Depósito:** Solicita o valor do depósito e verifica se o valor é válido antes de atualizar o saldo.
- **Encerramento:** Permite ao usuário sair do sistema.
- **Validações:** O pseudocódigo inclui validações para evitar operações inválidas, como saques ou depósitos de valores negativos ou nulos.

## Conclusão

Este exemplo de pseudocódigo para simulação de caixa eletrônico demonstra como estruturar um algoritmo de forma clara e lógica, facilitando a compreensão do fluxo do programa e servindo como base para a implementação em qualquer linguagem de programação. O uso de pseudocódigo é fundamental para o desenvolvimento de soluções eficientes e bem organizadas, especialmente para iniciantes na área de programação.