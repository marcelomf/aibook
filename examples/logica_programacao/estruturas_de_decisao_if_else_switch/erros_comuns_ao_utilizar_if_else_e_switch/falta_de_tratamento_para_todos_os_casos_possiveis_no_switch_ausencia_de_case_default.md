
## Falta de tratamento para todos os casos possíveis no switch (ausência de case default)

Ao utilizar a estrutura `switch` em lógica de programação, é comum cometer o erro de não prever todos os cenários possíveis que uma variável pode assumir. Um dos equívocos mais frequentes é a ausência do bloco `default`, que serve como um tratamento para casos não previstos explicitamente pelos `case`.

### O que é o `default` no switch?

O `default` é um bloco opcional dentro da estrutura `switch`, mas sua presença é altamente recomendada. Ele funciona como um "caso coringa", sendo executado sempre que o valor avaliado não corresponde a nenhum dos valores especificados nos `case`. Em outras palavras, o `default` garante que o programa tenha um comportamento definido mesmo diante de entradas inesperadas ou inválidas.

#### Exemplo sem o `default`:

```pseudo
switch (opcao) {
    case 1:
        escreva("Opção 1 selecionada");
        pare;
    case 2:
        escreva("Opção 2 selecionada");
        pare;
}
```

Se a variável `opcao` tiver o valor 3, nada será executado, pois não há um tratamento para esse caso.

#### Exemplo com o `default`:

```pseudo
switch (opcao) {
    case 1:
        escreva("Opção 1 selecionada");
        pare;
    case 2:
        escreva("Opção 2 selecionada");
        pare;
    default:
        escreva("Opção inválida. Por favor, selecione uma opção válida.");
}
```

Agora, se `opcao` for 3 (ou qualquer valor diferente de 1 ou 2), o bloco `default` será executado, informando ao usuário que a opção é inválida.

### Por que a ausência do `default` é um erro comum?

1. **Falta de Cobertura Completa:** Sem o `default`, o programa pode simplesmente não executar nenhuma ação caso o valor não corresponda a nenhum `case`. Isso pode causar confusão para o usuário ou dificultar a identificação de erros.
2. **Dificuldade na Depuração:** Quando um valor inesperado não é tratado, pode ser difícil identificar a origem de comportamentos inesperados no programa.
3. **Baixa Robustez:** Programas sem tratamento para casos não previstos são menos robustos e mais propensos a falhas, especialmente quando recebem dados de fontes externas ou do usuário.

### Boas práticas ao utilizar o switch

- **Sempre inclua o `default`:** Mesmo que você acredite que todos os valores possíveis estão cobertos pelos `case`, adicionar um `default` é uma medida de segurança.
- **Use o `default` para mensagens claras:** Informe ao usuário ou ao programador que um valor inesperado foi recebido, facilitando a manutenção e o uso do programa.
- **Valide entradas antes do switch:** Sempre que possível, valide os dados antes de processá-los, mas mantenha o `default` como uma camada extra de proteção.

### Conclusão

A ausência do bloco `default` em uma estrutura `switch` é um erro comum que pode comprometer a confiabilidade e a usabilidade do seu programa. Sempre inclua o `default` para garantir que todos os casos possíveis sejam tratados, tornando seu código mais robusto, seguro e fácil de manter.
```
