
# Estratégias para Evitar Duplicidade de Código

A duplicidade de código, também conhecida como "code duplication" ou "code cloning", ocorre quando trechos idênticos ou muito semelhantes de código aparecem em diferentes partes de um programa. Esse problema é comum entre iniciantes e pode trazer diversas consequências negativas, como aumento da dificuldade de manutenção, maior propensão a erros e desperdício de tempo. Por isso, adotar estratégias para evitar a duplicidade é uma das principais boas práticas em lógica de programação e desenvolvimento de software.

## Por que evitar duplicidade de código?

- **Facilita a manutenção:** Alterações e correções precisam ser feitas em apenas um lugar.
- **Reduz erros:** Menos chances de inconsistências e bugs, já que não há múltiplas versões do mesmo código.
- **Aumenta a legibilidade:** O código fica mais limpo, organizado e fácil de entender.
- **Favorece a reutilização:** Soluções podem ser aplicadas em diferentes contextos sem retrabalho.

## Estratégias para Evitar Duplicidade

### 1. **Identifique padrões repetidos**

O primeiro passo é estar atento a trechos de código que se repetem. Sempre que perceber que está escrevendo a mesma lógica mais de uma vez, questione se é possível generalizar e reutilizar esse código.

### 2. **Use funções e procedimentos**

Funções (ou procedimentos) são blocos de código que executam uma tarefa específica e podem ser chamados sempre que necessário. Ao encapsular uma lógica repetida em uma função, você evita duplicidade e facilita a manutenção.

**Exemplo em pseudocódigo:**

```pseudocode
Função calcularMedia(a, b, c)
    media <- (a + b + c) / 3
    Retorne media
FimFunção

// Uso da função em diferentes partes do programa
media1 <- calcularMedia(7, 8, 9)
media2 <- calcularMedia(5, 6, 7)
```

### 3. **Aplique a modularização**

Divida o programa em módulos ou componentes menores, cada um responsável por uma parte específica da lógica. Isso permite reutilizar módulos em diferentes contextos e facilita o entendimento do sistema como um todo.

**Exemplo de modularização:**

- Módulo de entrada de dados
- Módulo de processamento
- Módulo de saída de resultados

### 4. **Utilize estruturas de dados adequadas**

Às vezes, a duplicidade ocorre porque o programador não utiliza estruturas de dados apropriadas, como listas, vetores ou dicionários. Usar essas estruturas pode eliminar a necessidade de repetir código para tratar elementos semelhantes.

**Exemplo:**

Ao invés de criar variáveis separadas para cada nota de um aluno, use um vetor e um laço de repetição para processar todas as notas.

```pseudocode
notas <- [7, 8, 9, 6, 5]
soma <- 0
Para cada nota em notas
    soma <- soma + nota
FimPara
media <- soma / tamanho(notas)
```

### 5. **Evite o "copiar e colar"**

O hábito de copiar e colar trechos de código pode parecer prático, mas geralmente leva à duplicidade e dificulta a manutenção. Prefira sempre abstrair a lógica repetida em funções ou módulos reutilizáveis.

### 6. **Documente e padronize**

Documentar funções e módulos, além de seguir padrões de nomenclatura, ajuda a identificar rapidamente funcionalidades já existentes, evitando a criação de código duplicado por desconhecimento.

### 7. **Refatore sempre que necessário**

Refatoração é o processo de reescrever partes do código para melhorar sua estrutura sem alterar seu comportamento. Sempre que identificar duplicidade, considere refatorar para centralizar a lógica em um único local.

## Conclusão

Evitar duplicidade de código é fundamental para garantir programas mais organizados, eficientes e fáceis de manter. Ao adotar estratégias como o uso de funções, modularização, estruturas de dados adequadas e boas práticas de documentação, você estará construindo uma base sólida para o desenvolvimento de soluções lógicas e robustas, facilitando o aprendizado e a evolução em qualquer linguagem de programação.
```
