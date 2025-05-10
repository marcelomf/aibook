# Pseudocódigo para Controle de Estoque Simples

O controle de estoque é uma das aplicações mais comuns e importantes em sistemas de gestão. Antes de implementar um sistema desse tipo em uma linguagem de programação, é fundamental planejar a lógica utilizando pseudocódigo. O pseudocódigo permite descrever, de forma clara e estruturada, os passos necessários para gerenciar o estoque de produtos, facilitando a compreensão e a futura implementação.

## O que é um Controle de Estoque Simples?

Um controle de estoque simples tem como objetivo registrar a entrada e saída de produtos, além de permitir a consulta da quantidade disponível de cada item. As principais operações envolvidas são:

- **Adicionar produto ao estoque**
- **Registrar saída de produto**
- **Consultar quantidade em estoque**
- **Listar todos os produtos**

## Estrutura Básica do Pseudocódigo

A seguir, apresentamos um exemplo de pseudocódigo para um controle de estoque simples. Este exemplo utiliza uma estrutura de repetição para permitir múltiplas operações até que o usuário decida encerrar o programa.

---

### Pseudocódigo: Controle de Estoque Simples

```plaintext
INÍCIO

    // Declarar uma lista para armazenar os produtos e suas quantidades
    estoque ← lista vazia

    ENQUANTO VERDADEIRO FAÇA
        ESCREVA "Selecione uma opção:"
        ESCREVA "1 - Adicionar produto"
        ESCREVA "2 - Registrar saída de produto"
        ESCREVA "3 - Consultar quantidade em estoque"
        ESCREVA "4 - Listar todos os produtos"
        ESCREVA "5 - Sair"
        LEIA opcao

        SE opcao = 1 ENTÃO
            ESCREVA "Digite o nome do produto:"
            LEIA nome_produto
            ESCREVA "Digite a quantidade a adicionar:"
            LEIA quantidade

            SE nome_produto já existe em estoque ENTÃO
                estoque[nome_produto] ← estoque[nome_produto] + quantidade
            SENÃO
                estoque[nome_produto] ← quantidade
            FIMSE

            ESCREVA "Produto adicionado com sucesso!"

        SENÃO SE opcao = 2 ENTÃO
            ESCREVA "Digite o nome do produto:"
            LEIA nome_produto
            ESCREVA "Digite a quantidade a retirar:"
            LEIA quantidade

            SE nome_produto existe em estoque E estoque[nome_produto] ≥ quantidade ENTÃO
                estoque[nome_produto] ← estoque[nome_produto] - quantidade
                ESCREVA "Saída registrada com sucesso!"
            SENÃO
                ESCREVA "Erro: Produto não encontrado ou quantidade insuficiente."
            FIMSE

        SENÃO SE opcao = 3 ENTÃO
            ESCREVA "Digite o nome do produto:"
            LEIA nome_produto

            SE nome_produto existe em estoque ENTÃO
                ESCREVA "Quantidade em estoque de ", nome_produto, ": ", estoque[nome_produto]
            SENÃO
                ESCREVA "Produto não encontrado."
            FIMSE

        SENÃO SE opcao = 4 ENTÃO
            PARA cada produto EM estoque FAÇA
                ESCREVA produto, ": ", estoque[produto]
            FIMPARA

        SENÃO SE opcao = 5 ENTÃO
            ESCREVA "Encerrando o programa."
            PARE

        SENÃO
            ESCREVA "Opção inválida. Tente novamente."
        FIMSE

    FIMENQUANTO

FIM
```

---

## Explicação do Pseudocódigo

- **Estrutura de Dados:** Utiliza-se uma lista (ou dicionário) chamada `estoque` para armazenar os produtos e suas respectivas quantidades.
- **Menu de Opções:** O programa apresenta um menu para o usuário escolher a operação desejada.
- **Adicionar Produto:** Se o produto já existe, a quantidade é somada; caso contrário, o produto é adicionado ao estoque.
- **Registrar Saída:** Verifica se o produto existe e se há quantidade suficiente antes de registrar a saída.
- **Consultar Estoque:** Permite consultar a quantidade de um produto específico.
- **Listar Produtos:** Exibe todos os produtos cadastrados e suas quantidades.
- **Encerrar Programa:** O loop é interrompido quando o usuário escolhe sair.

## Boas Práticas

- **Validação de Dados:** Sempre verifique se o produto existe e se a quantidade é suficiente antes de registrar uma saída.
- **Clareza:** Utilize nomes de variáveis e mensagens claras para facilitar o entendimento.
- **Organização:** Estruture o pseudocódigo em blocos lógicos para facilitar a manutenção e futuras implementações.

## Conclusão

O uso do pseudocódigo para planejar um controle de estoque simples é uma excelente prática para iniciantes em lógica de programação. Ele permite visualizar a solução de forma abstrata, sem se preocupar com a sintaxe de uma linguagem específica, tornando o processo de desenvolvimento mais eficiente e organizado. Ao dominar a criação de pseudocódigos, você estará mais preparado para implementar sistemas reais em qualquer linguagem de programação.