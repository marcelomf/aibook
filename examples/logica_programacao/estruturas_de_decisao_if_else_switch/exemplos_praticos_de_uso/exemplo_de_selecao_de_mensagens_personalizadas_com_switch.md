
## Exemplo de Seleção de Mensagens Personalizadas com `switch`

Ao desenvolver programas, é comum precisarmos exibir mensagens diferentes para o usuário de acordo com uma determinada escolha ou situação. Uma forma eficiente de implementar essa seleção é utilizando a estrutura de decisão `switch`. O `switch` permite comparar o valor de uma variável com diferentes casos possíveis, executando o bloco de código correspondente ao caso que for verdadeiro.

### Contexto do Exemplo

Imagine um sistema de atendimento ao cliente em que o usuário pode escolher o motivo do contato. Dependendo da opção selecionada, o sistema deve exibir uma mensagem personalizada, orientando o usuário sobre os próximos passos.

### Exemplo em Pseudocódigo

Veja como podemos implementar essa seleção de mensagens usando o `switch`:

```pseudocode
// Solicita ao usuário que escolha o motivo do contato
Exibir "Selecione o motivo do seu contato:"
Exibir "1 - Suporte Técnico"
Exibir "2 - Dúvidas sobre Pagamento"
Exibir "3 - Sugestões"
Exibir "4 - Reclamações"
Exibir "5 - Outros"
Ler motivo

// Seleciona a mensagem personalizada com switch
switch (motivo) {
    case 1:
        Exibir "Você selecionou Suporte Técnico. Por favor, descreva o problema encontrado."
        break
    case 2:
        Exibir "Você selecionou Dúvidas sobre Pagamento. Informe o número do pedido para prosseguirmos."
        break
    case 3:
        Exibir "Você selecionou Sugestões. Sua opinião é muito importante para nós!"
        break
    case 4:
        Exibir "Você selecionou Reclamações. Lamentamos o ocorrido, relate sua experiência para que possamos melhorar."
        break
    case 5:
        Exibir "Você selecionou Outros. Por favor, detalhe o motivo do seu contato."
        break
    default:
        Exibir "Opção inválida. Por favor, selecione um número de 1 a 5."
}
```

### Explicação do Exemplo

- O programa apresenta ao usuário uma lista de opções numeradas.
- O usuário digita o número correspondente ao motivo do contato.
- O comando `switch` avalia o valor da variável `motivo` e executa o bloco de código do caso correspondente.
- Se o usuário digitar um número fora das opções (por exemplo, 6), o bloco `default` é executado, informando que a opção é inválida.

### Vantagens do Uso do `switch`

- **Clareza:** O código fica mais organizado e fácil de entender, especialmente quando há muitas opções.
- **Manutenção:** Adicionar ou remover opções é simples, basta incluir ou excluir um caso.
- **Eficiência:** O `switch` é mais eficiente do que múltiplos comandos `if-else` em situações com várias alternativas baseadas no valor de uma mesma variável.

### Adaptação para Linguagens de Programação

O conceito apresentado no pseudocódigo pode ser facilmente adaptado para linguagens como C, Java, JavaScript, C#, entre outras. Veja um exemplo em JavaScript:

```javascript
let motivo = prompt("Selecione o motivo do seu contato:\n1 - Suporte Técnico\n2 - Dúvidas sobre Pagamento\n3 - Sugestões\n4 - Reclamações\n5 - Outros");

switch (parseInt(motivo)) {
    case 1:
        alert("Você selecionou Suporte Técnico. Por favor, descreva o problema encontrado.");
        break;
    case 2:
        alert("Você selecionou Dúvidas sobre Pagamento. Informe o número do pedido para prosseguirmos.");
        break;
    case 3:
        alert("Você selecionou Sugestões. Sua opinião é muito importante para nós!");
        break;
    case 4:
        alert("Você selecionou Reclamações. Lamentamos o ocorrido, relate sua experiência para que possamos melhorar.");
        break;
    case 5:
        alert("Você selecionou Outros. Por favor, detalhe o motivo do seu contato.");
        break;
    default:
        alert("Opção inválida. Por favor, selecione um número de 1 a 5.");
}
```

### Conclusão

A estrutura `switch` é uma ferramenta poderosa para selecionar mensagens personalizadas ou executar diferentes ações com base em múltiplas opções. Seu uso torna o código mais limpo, organizado e fácil de manter, sendo fundamental para quem está aprendendo lógica de programação e deseja criar programas mais interativos e eficientes.
```
