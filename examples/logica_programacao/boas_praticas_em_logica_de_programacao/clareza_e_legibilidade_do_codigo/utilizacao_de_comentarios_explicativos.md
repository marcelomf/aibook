
# Utilização de Comentários Explicativos

A clareza e a legibilidade do código são aspectos fundamentais em lógica de programação, especialmente para iniciantes. Um dos recursos mais importantes para garantir que o código seja compreendido por outras pessoas (ou até por você mesmo no futuro) é a utilização de **comentários explicativos**.

## O que são Comentários?

Comentários são trechos de texto inseridos no código-fonte que não são executados pelo computador. Eles servem exclusivamente para fornecer explicações, observações ou anotações sobre o funcionamento do código. Cada linguagem de programação possui sua própria sintaxe para comentários, mas o objetivo é sempre o mesmo: tornar o código mais compreensível.

Exemplo em pseudocódigo:
```
// Este comentário explica o próximo comando
leia idade
```

## Por que Usar Comentários?

- **Facilitam o entendimento:** Comentários ajudam a explicar o que cada parte do código faz, tornando mais fácil para outras pessoas (ou para você mesmo, após algum tempo) entenderem a lógica implementada.
- **Ajudam na manutenção:** Códigos bem comentados são mais fáceis de corrigir, atualizar ou expandir, pois fica claro o propósito de cada trecho.
- **Documentam decisões:** Comentários podem registrar o motivo de escolhas específicas, como a utilização de um determinado algoritmo ou estrutura.

## Boas Práticas ao Comentar o Código

1. **Comente o porquê, não o óbvio:** Evite comentários redundantes que apenas repetem o que o código já deixa claro. Prefira explicar o motivo de uma decisão ou o objetivo de um bloco de código.
   ```
// Calcula a média das notas do aluno
media = (nota1 + nota2 + nota3) / 3
   ```

2. **Seja claro e objetivo:** Comentários devem ser curtos e diretos, facilitando a leitura.
   ```
# Verifica se o usuário é maior de idade
se idade >= 18 então
    escreva "Acesso permitido"
   ```

3. **Atualize os comentários:** Sempre que modificar o código, revise os comentários para garantir que continuam corretos e relevantes.

4. **Evite excesso de comentários:** Comentar cada linha pode poluir o código e dificultar a leitura. Comente apenas quando necessário, especialmente em trechos complexos ou pouco intuitivos.

5. **Use comentários para dividir seções:** Em códigos maiores, utilize comentários para separar e identificar diferentes partes ou funções do programa.
   ```
# --- Início da validação dos dados ---
   ```

## Exemplos de Comentários em Pseudocódigo

```pseudocode
// Solicita ao usuário a entrada de dois números
leia numero1
leia numero2

// Realiza a soma dos números informados
soma = numero1 + numero2

// Exibe o resultado da soma
escreva "O resultado é: ", soma
```

## Conclusão

A utilização de comentários explicativos é uma prática essencial para garantir a clareza e a legibilidade do código. Comentários bem escritos facilitam o aprendizado, a colaboração e a manutenção dos programas, tornando o desenvolvimento de software mais eficiente e profissional. Ao adotar essa prática desde o início, você estará construindo uma base sólida para evoluir na programação e trabalhar em equipe de forma produtiva.
```
