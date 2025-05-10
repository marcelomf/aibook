
# Como Evitar a Duplicidade de Código Durante a Refatoração

A duplicidade de código, também conhecida como "code duplication" ou "code cloning", ocorre quando trechos idênticos ou muito semelhantes aparecem em diferentes partes de um algoritmo ou programa. Esse problema é comum, especialmente em projetos em crescimento ou durante a fase inicial de aprendizado em lógica de programação. Durante a refatoração — processo de reescrever e melhorar o código sem alterar seu comportamento externo — é fundamental eliminar duplicidades para garantir um código mais limpo, eficiente e fácil de manter.

## Por que evitar a duplicidade de código?

Evitar a duplicidade traz diversos benefícios:

- **Facilidade de manutenção:** Alterações futuras precisam ser feitas em apenas um local.
- **Redução de erros:** Menos chances de inconsistências e bugs ao modificar funcionalidades.
- **Reutilização:** Promove o uso de funções e módulos reaproveitáveis.
- **Clareza:** O código se torna mais organizado e compreensível.

## Estratégias para evitar duplicidade durante a refatoração

### 1. Identifique padrões repetidos

Antes de refatorar, analise o código em busca de blocos repetidos. Eles podem estar em diferentes funções, laços ou até mesmo em arquivos distintos. Ferramentas de análise estática ou uma simples revisão manual podem ajudar a encontrar essas repetições.

### 2. Utilize funções e procedimentos

Ao encontrar trechos repetidos, extraia-os para funções (ou procedimentos, dependendo da linguagem). Assim, sempre que precisar daquela lógica, basta chamar a função, evitando a repetição do código.

**Exemplo em pseudocódigo:**

```pseudocode
// Código duplicado
se idade >= 18 então
    escreva("Maior de idade")
senão
    escreva("Menor de idade")

// Refatorado usando função
função verificarIdade(idade)
    se idade >= 18 então
        escreva("Maior de idade")
    senão
        escreva("Menor de idade")

// Uso
verificarIdade(idade)
```

### 3. Generalize o código

Às vezes, blocos semelhantes diferem apenas em pequenos detalhes. Tente generalizar o código, utilizando parâmetros ou variáveis para tornar a função mais flexível e reutilizável.

**Exemplo:**

```pseudocode
// Antes
escreva("Olá, João")
escreva("Olá, Maria")

// Depois
função cumprimentar(nome)
    escreva("Olá, " + nome)

cumprimentar("João")
cumprimentar("Maria")
```

### 4. Utilize estruturas de dados

Se a duplicidade ocorre devido ao tratamento de múltiplos valores, considere usar listas, vetores ou outros tipos de estruturas de dados para processar os elementos em um laço, ao invés de repetir o mesmo bloco para cada item.

**Exemplo:**

```pseudocode
// Antes
escreva("Produto 1: " + preco1)
escreva("Produto 2: " + preco2)
escreva("Produto 3: " + preco3)

// Depois
produtos = [preco1, preco2, preco3]
para cada preco em produtos faça
    escreva("Produto: " + preco)
```

### 5. Documente e padronize

Mantenha o código bem documentado e siga padrões de nomenclatura e organização. Isso facilita a identificação de duplicidades e incentiva a reutilização de funções já existentes.

### 6. Revise e teste após a refatoração

Após eliminar duplicidades, revise o código para garantir que a lógica permaneceu correta. Teste todas as funcionalidades afetadas para evitar regressões.

## Conclusão

Evitar a duplicidade de código é uma das principais boas práticas em lógica de programação e refatoração. Ao adotar funções, generalizar trechos repetidos e utilizar estruturas de dados adequadas, você garante um código mais limpo, eficiente e fácil de manter. Lembre-se: a melhoria contínua do código é um processo constante, e a eliminação de duplicidades é um passo fundamental para o desenvolvimento de soluções robustas e profissionais.
```
