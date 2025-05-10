
# Exercícios de Algoritmos para Automação de Tarefas Cotidianas

A automação de tarefas cotidianas é um dos principais benefícios do uso da lógica de programação e da criação de algoritmos. Ao automatizar processos simples do dia a dia, como o controle de estoque ou a organização de uma agenda de compromissos, é possível economizar tempo, reduzir erros e aumentar a produtividade. Neste tópico, você encontrará exercícios práticos que simulam situações reais, incentivando a aplicação dos conceitos aprendidos para resolver problemas comuns por meio de algoritmos.

---

## 1. Controle de Estoque

### Descrição do Problema

Imagine que você é responsável pelo estoque de uma pequena loja. É necessário criar um algoritmo que permita:

- Cadastrar produtos com nome e quantidade inicial.
- Registrar a entrada e saída de produtos.
- Exibir o estoque atualizado.

### Exercício

**Enunciado:**  
Crie um algoritmo em pseudocódigo que permita ao usuário:

1. Cadastrar até 5 produtos, informando nome e quantidade inicial.
2. Registrar a entrada (adicionar) ou saída (remover) de produtos do estoque.
3. Exibir a lista de produtos com suas quantidades atualizadas.

**Dicas:**
- Utilize estruturas de repetição para permitir múltiplas operações.
- Use variáveis ou listas para armazenar os produtos e suas quantidades.
- Implemente verificações para evitar que a quantidade de um produto fique negativa.

**Exemplo de Pseudocódigo:**

```pseudocode
Para i de 1 até 5 faça
    Leia nome_produto[i]
    Leia quantidade[i]
FimPara

Enquanto (usuário deseja continuar)
    Exiba opções: 1-Entrada, 2-Saída, 3-Exibir Estoque, 4-Sair
    Leia opção

    Se opção = 1 então
        Leia produto
        Leia quantidade_entrada
        quantidade[produto] = quantidade[produto] + quantidade_entrada
    Senão se opção = 2 então
        Leia produto
        Leia quantidade_saida
        Se quantidade[produto] >= quantidade_saida então
            quantidade[produto] = quantidade[produto] - quantidade_saida
        Senão
            Exiba "Quantidade insuficiente em estoque."
        FimSe
    Senão se opção = 3 então
        Para i de 1 até 5 faça
            Exiba nome_produto[i], quantidade[i]
        FimPara
    Senão se opção = 4 então
        Pare
    FimSe
FimEnquanto
```

---

## 2. Agenda de Compromissos

### Descrição do Problema

Gerenciar compromissos é uma tarefa comum e essencial para manter a organização pessoal ou profissional. Automatizar esse processo pode evitar esquecimentos e facilitar o planejamento.

### Exercício

**Enunciado:**  
Desenvolva um algoritmo que permita ao usuário:

1. Adicionar compromissos informando data, hora e descrição.
2. Consultar compromissos de uma data específica.
3. Excluir compromissos.
4. Listar todos os compromissos cadastrados.

**Dicas:**
- Utilize uma estrutura de dados (como uma lista) para armazenar os compromissos.
- Implemente um menu de opções para facilitar a interação.
- Permita que o usuário realize várias operações até decidir sair.

**Exemplo de Pseudocódigo:**

```pseudocode
Enquanto (usuário deseja continuar)
    Exiba opções: 1-Adicionar, 2-Consultar, 3-Excluir, 4-Listar Todos, 5-Sair
    Leia opção

    Se opção = 1 então
        Leia data
        Leia hora
        Leia descrição
        Adicione compromisso à lista
    Senão se opção = 2 então
        Leia data_consulta
        Para cada compromisso na lista faça
            Se compromisso.data = data_consulta então
                Exiba compromisso
            FimSe
        FimPara
    Senão se opção = 3 então
        Leia data
        Leia hora
        Para cada compromisso na lista faça
            Se compromisso.data = data e compromisso.hora = hora então
                Remova compromisso da lista
            FimSe
        FimPara
    Senão se opção = 4 então
        Para cada compromisso na lista faça
            Exiba compromisso
        FimPara
    Senão se opção = 5 então
        Pare
    FimSe
FimEnquanto
```

---

## 3. Dicas para Resolver Exercícios de Automação

- **Analise o problema:** Entenda o que precisa ser automatizado e quais informações são necessárias.
- **Defina as entradas e saídas:** Quais dados o usuário irá fornecer? O que o algoritmo deve exibir?
- **Escolha as estruturas adequadas:** Use listas, vetores ou registros para organizar os dados.
- **Implemente verificações:** Garanta que não ocorram inconsistências, como estoques negativos ou compromissos duplicados.
- **Teste com exemplos reais:** Simule situações do cotidiano para validar o funcionamento do algoritmo.

---

## 4. Conclusão

A criação de algoritmos para automação de tarefas cotidianas é uma excelente forma de praticar lógica de programação e desenvolver habilidades essenciais para o mundo do desenvolvimento de software. Ao resolver exercícios como controle de estoque e agenda de compromissos, você estará mais preparado para enfrentar desafios reais e propor soluções eficientes no seu dia a dia ou no ambiente profissional.

> **Pratique!** Tente adaptar os exemplos para outras situações, como controle de finanças pessoais, lista de compras ou gerenciamento de tarefas domésticas. Quanto mais você praticar, mais natural será o raciocínio lógico e a criação de algoritmos eficientes.
```
