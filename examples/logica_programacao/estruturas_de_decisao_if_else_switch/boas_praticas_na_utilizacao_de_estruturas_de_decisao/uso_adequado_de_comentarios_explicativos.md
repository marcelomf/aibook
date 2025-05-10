
## Boas Práticas na Utilização de Estruturas de Decisão

### Uso Adequado de Comentários Explicativos

Ao desenvolver algoritmos utilizando estruturas de decisão como `if`, `else` e `switch`, é fundamental garantir que o código seja compreensível não apenas para quem o escreveu, mas também para outros desenvolvedores que possam lê-lo no futuro. Uma das principais ferramentas para alcançar esse objetivo é o uso adequado de **comentários explicativos**.

#### Por que comentar o código?

Comentários são anotações inseridas no código-fonte que não afetam sua execução, mas servem para explicar o raciocínio por trás de determinadas decisões, descrever o funcionamento de trechos complexos ou indicar pontos de atenção. Em estruturas de decisão, comentários ajudam a esclarecer:

- **A lógica por trás das condições**: Por que determinada condição está sendo verificada?
- **O propósito de cada bloco**: O que acontece quando uma condição é verdadeira ou falsa?
- **Casos especiais ou exceções**: Por que um caso específico está sendo tratado de forma diferente?

#### Boas práticas ao comentar estruturas de decisão

1. **Comente o porquê, não o óbvio**  
   Evite comentários redundantes que apenas repetem o que o código já expressa claramente. Prefira explicar o motivo da decisão, não apenas o que está sendo feito.

   ```pseudo
   // Verifica se o usuário é maior de idade para permitir o acesso
   if (idade >= 18) {
       permitirAcesso();
   }
   ```

2. **Seja claro e objetivo**  
   Comentários devem ser curtos e diretos, facilitando a leitura e compreensão.

   ```pseudo
   // Caso especial: clientes VIP têm acesso prioritário
   if (cliente.tipo == "VIP") {
       acessoPrioritario();
   }
   ```

3. **Atualize os comentários junto com o código**  
   Comentários desatualizados podem confundir mais do que ajudar. Sempre revise os comentários ao modificar a lógica das estruturas de decisão.

4. **Explique condições complexas**  
   Quando a condição de um `if` ou `switch` for composta ou envolver múltiplas variáveis, explique o contexto.

   ```pseudo
   // Permite desconto apenas se o cliente for ativo e tiver mais de 5 compras
   if (cliente.ativo && cliente.compras > 5) {
       aplicarDesconto();
   }
   ```

5. **Evite excesso de comentários**  
   Comentários em excesso podem poluir o código. Comente apenas quando necessário, especialmente em trechos que não são autoexplicativos.

#### Exemplos práticos

**Exemplo 1: Comentário explicativo em estrutura if-else**

```pseudo
// Se o saldo for suficiente, realiza a transferência; caso contrário, exibe mensagem de erro
if (saldo >= valorTransferencia) {
    realizarTransferencia();
} else {
    exibirMensagem("Saldo insuficiente.");
}
```

**Exemplo 2: Comentário em switch para casos especiais**

```pseudo
switch (opcaoMenu) {
    case 1:
        // Inicia novo pedido
        iniciarPedido();
        break;
    case 2:
        // Exibe histórico de pedidos
        mostrarHistorico();
        break;
    default:
        // Opção inválida selecionada
        exibirMensagem("Opção inválida.");
}
```

#### Resumo

O uso adequado de comentários explicativos em estruturas de decisão é essencial para garantir a legibilidade, manutenção e colaboração no desenvolvimento de algoritmos. Comente sempre que necessário para esclarecer a lógica, mas evite redundâncias e mantenha os comentários atualizados. Assim, seu código será mais acessível e profissional, facilitando o aprendizado e o trabalho em equipe.
```
