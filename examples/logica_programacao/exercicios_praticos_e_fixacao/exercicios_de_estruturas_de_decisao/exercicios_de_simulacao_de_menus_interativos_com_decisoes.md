
# Exercícios de Simulação de Menus Interativos com Decisões

A simulação de menus interativos é uma das aplicações mais comuns das estruturas de decisão na lógica de programação. Menus permitem que o usuário escolha entre diferentes opções, e o programa deve responder de acordo com a escolha feita. Este tipo de exercício é fundamental para fixar o uso de comandos como `if`, `else if`, `else` e `switch`, além de desenvolver a habilidade de criar fluxos de interação com o usuário.

## Por que praticar menus interativos?

- **Desenvolve o raciocínio lógico:** É necessário pensar em todas as possibilidades de escolha do usuário e como o programa deve reagir a cada uma delas.
- **Aproxima da realidade:** Muitos sistemas reais, como caixas eletrônicos, aplicativos e sites, utilizam menus para interação.
- **Exercita estruturas de decisão:** Permite praticar diferentes formas de tomada de decisão, desde simples até aninhadas.

## Estrutura básica de um menu interativo

Um menu interativo geralmente segue os seguintes passos:

1. Exibir as opções disponíveis ao usuário.
2. Ler a escolha do usuário.
3. Utilizar uma estrutura de decisão para executar a ação correspondente à escolha.
4. (Opcional) Repetir o menu até que o usuário escolha sair.

### Exemplo de pseudocódigo de menu simples

```plaintext
Início
    Enquanto (verdadeiro)
        Exibir "Menu Principal"
        Exibir "1 - Consultar saldo"
        Exibir "2 - Realizar saque"
        Exibir "3 - Depositar"
        Exibir "4 - Sair"
        Ler opção

        Se opção = 1 então
            Exibir "Seu saldo é R$ 1000"
        Senão se opção = 2 então
            Exibir "Digite o valor do saque"
            Ler valor
            Exibir "Saque de R$ ", valor, " realizado"
        Senão se opção = 3 então
            Exibir "Digite o valor do depósito"
            Ler valor
            Exibir "Depósito de R$ ", valor, " realizado"
        Senão se opção = 4 então
            Exibir "Saindo do sistema..."
            Parar
        Senão
            Exibir "Opção inválida. Tente novamente."
        FimSe
    FimEnquanto
Fim
```

## Exercícios Propostos

### Exercício 1: Menu de Operações Matemáticas

**Enunciado:**  
Crie um menu interativo que permita ao usuário escolher entre as seguintes operações:  
1. Somar dois números  
2. Subtrair dois números  
3. Multiplicar dois números  
4. Dividir dois números  
5. Sair  

O programa deve solicitar os números apenas quando uma operação for escolhida e exibir o resultado. Se o usuário escolher uma opção inválida, deve exibir uma mensagem de erro.

---

### Exercício 2: Menu de Cadastro de Usuário

**Enunciado:**  
Implemente um menu com as opções:  
1. Cadastrar novo usuário  
2. Listar usuários cadastrados  
3. Sair  

O programa deve permitir cadastrar nomes em uma lista e exibir todos os nomes cadastrados quando solicitado. Se o usuário tentar listar sem nenhum cadastro, exiba uma mensagem apropriada.

---

### Exercício 3: Menu de Conversão de Temperaturas

**Enunciado:**  
Monte um menu com as opções:  
1. Converter Celsius para Fahrenheit  
2. Converter Fahrenheit para Celsius  
3. Sair  

O programa deve solicitar a temperatura a ser convertida e exibir o resultado. Utilize as fórmulas adequadas para conversão.

---

## Dicas para Resolver os Exercícios

- Utilize estruturas de repetição para manter o menu ativo até que o usuário escolha sair.
- Use estruturas de decisão (`if`, `else if`, `else` ou `switch`) para tratar cada opção do menu.
- Valide a entrada do usuário para evitar erros e melhorar a experiência.
- Comente o pseudocódigo ou código para facilitar o entendimento.

## Exemplo de Fluxograma para Menu Interativo

```plaintext
+---------------------+
| Exibir opções do    |
| menu                |
+----------+----------+
           |
           v
+---------------------+
| Ler opção do usuário|
+----------+----------+
           |
           v
+---------------------+
| Estrutura de decisão|
| (if/else ou switch) |
+----------+----------+
           |
           v
+---------------------+
| Executar ação       |
| correspondente      |
+----------+----------+
           |
           v
+---------------------+
| Sair? (Sim/Não)     |
+----------+----------+
           |         |
          Não       Sim
           |         |
           v         v
      (volta ao menu) Fim
```

## Conclusão

Exercícios de simulação de menus interativos são essenciais para consolidar o entendimento das estruturas de decisão. Eles aproximam o estudante de situações reais de programação, desenvolvendo a capacidade de criar programas interativos e robustos. Pratique bastante, experimente variações e, sempre que possível, tente implementar os menus em diferentes linguagens de programação para fixar ainda mais o conceito!

---
```