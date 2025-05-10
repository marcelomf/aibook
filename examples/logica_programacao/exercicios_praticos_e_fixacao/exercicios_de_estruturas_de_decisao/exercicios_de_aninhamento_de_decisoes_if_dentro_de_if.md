
# Exercícios de Aninhamento de Decisões (if dentro de if)

O aninhamento de decisões, também conhecido como **if dentro de if** (ou estruturas de decisão aninhadas), é um conceito fundamental na lógica de programação. Ele permite que você tome decisões mais complexas, avaliando múltiplas condições de forma hierárquica. Com o aninhamento, é possível criar algoritmos que respondem de maneira diferente a diferentes combinações de situações.

## O que é Aninhamento de Decisões?

O aninhamento ocorre quando uma estrutura de decisão (`if`, por exemplo) está contida dentro de outra. Isso significa que, ao atender a uma condição, o programa pode verificar uma nova condição dentro do bloco do primeiro `if`. Esse recurso é muito útil para resolver problemas que exigem múltiplas verificações sequenciais.

### Exemplo de Estrutura Aninhada

```pseudocode
se (condição1) então
    se (condição2) então
        // Ação se ambas as condições forem verdadeiras
    senão
        // Ação se condição1 for verdadeira e condição2 for falsa
senão
    // Ação se condição1 for falsa
```

## Por que usar if aninhado?

- **Resolução de problemas complexos:** Permite tratar diferentes cenários de forma organizada.
- **Clareza na lógica:** Ajuda a expressar regras de negócio que dependem de múltiplas condições.
- **Flexibilidade:** Facilita a expansão do algoritmo para novas condições.

## Exercícios Práticos

A seguir, apresentamos alguns exercícios para praticar o uso de estruturas de decisão aninhadas. Tente resolver utilizando pseudocódigo ou fluxogramas.

---

### Exercício 1: Classificação de Idade

**Enunciado:**  
Peça ao usuário para informar sua idade. Se a idade for maior ou igual a 18, pergunte se ele possui carteira de motorista (responda "sim" ou "não"). Se possuir, exiba "Pode dirigir". Caso contrário, exiba "Não pode dirigir". Se a idade for menor que 18, exiba "Menor de idade, não pode dirigir".

**Dica:** Use um `if` para verificar a idade e, dentro dele, outro `if` para verificar a carteira de motorista.

**Pseudocódigo:**
```pseudocode
leia idade
se (idade >= 18) então
    leia carteira
    se (carteira == "sim") então
        escreva "Pode dirigir"
    senão
        escreva "Não pode dirigir"
senão
    escreva "Menor de idade, não pode dirigir"
```

---

### Exercício 2: Verificação de Notas

**Enunciado:**  
Solicite ao usuário a nota de um aluno. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for menor que 7, verifique se a nota é maior ou igual a 5. Se for, exiba "Recuperação". Caso contrário, exiba "Reprovado".

**Pseudocódigo:**
```pseudocode
leia nota
se (nota >= 7) então
    escreva "Aprovado"
senão
    se (nota >= 5) então
        escreva "Recuperação"
    senão
        escreva "Reprovado"
```

---

### Exercício 3: Sistema de Login Simples

**Enunciado:**  
Peça ao usuário para digitar um nome de usuário e uma senha. Se o nome de usuário for "admin", verifique se a senha é "1234". Se ambas as condições forem verdadeiras, exiba "Acesso permitido". Caso contrário, exiba "Acesso negado".

**Pseudocódigo:**
```pseudocode
leia usuario
leia senha
se (usuario == "admin") então
    se (senha == "1234") então
        escreva "Acesso permitido"
    senão
        escreva "Acesso negado"
senão
    escreva "Acesso negado"
```

---

## Dicas para Resolver Exercícios com if Aninhado

- **Organize as condições:** Pense na ordem em que as verificações devem ser feitas.
- **Evite aninhamentos desnecessários:** Sempre que possível, simplifique as condições para tornar o código mais legível.
- **Teste diferentes cenários:** Verifique se o algoritmo responde corretamente a todas as combinações possíveis de entrada.

## Conclusão

O uso de estruturas de decisão aninhadas é essencial para criar algoritmos que lidam com múltiplas condições de forma eficiente. Praticar com exercícios como os apresentados acima ajuda a desenvolver o raciocínio lógico e prepara o estudante para desafios mais avançados na programação.

Continue praticando e, sempre que possível, tente transformar os pseudocódigos em fluxogramas para visualizar melhor o fluxo das decisões!
```
