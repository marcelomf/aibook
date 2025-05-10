
# Exercícios de Identificação de Erros em Decisões

A compreensão das estruturas de decisão, como `if`, `else` e `switch`, é fundamental para o desenvolvimento de algoritmos eficientes e corretos. No entanto, é comum que iniciantes cometam erros ao implementar essas estruturas, seja por descuido na sintaxe, má interpretação da lógica ou desconhecimento das melhores práticas. Por isso, a identificação e correção de erros em decisões é uma habilidade essencial para quem está aprendendo lógica de programação.

Neste tópico, você encontrará exercícios práticos cujo objetivo é analisar trechos de pseudocódigo ou código simplificado, identificar possíveis erros e propor correções. Essa prática ajuda a desenvolver o pensamento crítico e a atenção aos detalhes, além de consolidar o entendimento sobre o funcionamento das estruturas de decisão.

---

## Exercício 1: Erro de Sintaxe no If

**Enunciado:**  
Analise o seguinte trecho de pseudocódigo e identifique o erro:

```plaintext
se (idade >= 18)
    escreva("Você é maior de idade.")
senao
    escreva("Você é menor de idade.")
fimse
```

**Pergunta:**  
Existe algum erro nesse trecho? Se sim, qual é e como corrigir?

**Resposta Esperada:**  
O pseudocódigo está correto em relação à lógica, mas dependendo da convenção utilizada, pode faltar a indentação ou o uso de `então` após a condição. Em algumas notações, o correto seria:

```plaintext
se (idade >= 18) então
    escreva("Você é maior de idade.")
senao
    escreva("Você é menor de idade.")
fimse
```

**Dica:**  
Sempre confira a sintaxe exigida pela linguagem ou padrão de pseudocódigo adotado.

---

## Exercício 2: Condição Mal Formulada

**Enunciado:**  
Considere o seguinte código:

```plaintext
se (nota = 7)
    escreva("Aprovado")
senao
    escreva("Reprovado")
fimse
```

**Pergunta:**  
O que há de errado com a condição? Como corrigir?

**Resposta Esperada:**  
O operador `=` é usado para atribuição, não para comparação. Para comparar valores, deve-se usar `==` ou `=` (dependendo da linguagem/padrão). Além disso, a lógica aprova apenas quem tirou exatamente 7, e não quem tirou 7 ou mais. O correto seria:

```plaintext
se (nota >= 7)
    escreva("Aprovado")
senao
    escreva("Reprovado")
fimse
```

---

## Exercício 3: Estrutura Switch Incompleta

**Enunciado:**  
Analise o seguinte trecho:

```plaintext
escolha (opcao)
    caso 1:
        escreva("Novo jogo")
    caso 2:
        escreva("Carregar jogo")
    caso 3:
        escreva("Sair")
fimescolha
```

**Pergunta:**  
O que pode ser melhorado nesse código?

**Resposta Esperada:**  
Faltou o caso padrão para tratar opções inválidas. O ideal é adicionar um `caso padrão` (ou `default`):

```plaintext
escolha (opcao)
    caso 1:
        escreva("Novo jogo")
    caso 2:
        escreva("Carregar jogo")
    caso 3:
        escreva("Sair")
    caso padrão:
        escreva("Opção inválida")
fimescolha
```

---

## Exercício 4: Else Desnecessário

**Enunciado:**  
Veja o código abaixo:

```plaintext
se (idade >= 18)
    escreva("Maior de idade")
senao
    se (idade < 18)
        escreva("Menor de idade")
    fimse
fimse
```

**Pergunta:**  
Existe redundância? Como simplificar?

**Resposta Esperada:**  
Sim, a segunda condição é redundante, pois se a primeira não for verdadeira, a segunda será automaticamente. Pode ser simplificado para:

```plaintext
se (idade >= 18)
    escreva("Maior de idade")
senao
    escreva("Menor de idade")
fimse
```

---

## Exercício 5: Falta de Blocos em Decisões

**Enunciado:**  
Analise o seguinte pseudocódigo:

```plaintext
se (x > 0)
    escreva("Positivo")
    escreva("Número válido")
fimse
```

**Pergunta:**  
O que pode causar confusão nesse código? Como evitar?

**Resposta Esperada:**  
Sem o uso de blocos (chaves ou indentação clara), pode-se pensar que apenas a primeira linha está dentro do `if`. O correto é delimitar o bloco de comandos:

```plaintext
se (x > 0) então
    escreva("Positivo")
    escreva("Número válido")
fimse
```

Ou, em linguagens como C:

```c
if (x > 0) {
    printf("Positivo");
    printf("Número válido");
}
```

---

## Dicas para Identificação de Erros em Decisões

- **Atenção à sintaxe:** Cada linguagem ou padrão de pseudocódigo tem suas regras.
- **Verifique operadores:** Use operadores de comparação (`==`, `!=`, `>`, `<`, `>=`, `<=`) corretamente.
- **Evite redundâncias:** Simplifique condições sempre que possível.
- **Inclua casos padrão:** No `switch`/`escolha`, sempre trate opções inesperadas.
- **Delimite blocos:** Use chaves, indentação ou palavras-chave para evitar ambiguidades.

---

## Conclusão

Praticar a identificação e correção de erros em estruturas de decisão é fundamental para o desenvolvimento de algoritmos robustos e confiáveis. Ao analisar exemplos e corrigir falhas, você aprimora sua capacidade de escrever códigos mais claros, eficientes e livres de bugs. Continue praticando com diferentes cenários e, sempre que possível, revise seus próprios códigos em busca de melhorias!
```
