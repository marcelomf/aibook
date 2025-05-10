# Exercícios de Repetição com Laço `do-while` para Garantir Execução Mínima

O laço `do-while` é uma estrutura de repetição fundamental na lógica de programação, especialmente quando precisamos garantir que um bloco de código seja executado pelo menos uma vez, independentemente da condição de parada. Neste tópico, você aprenderá como utilizar o `do-while` e praticará com exercícios que reforçam esse conceito.

## O que é o laço `do-while`?

Diferente do laço `while`, que verifica a condição antes de executar o bloco de comandos, o `do-while` executa o bloco **primeiro** e só depois verifica a condição. Isso garante que o código dentro do laço será executado pelo menos uma vez, mesmo que a condição seja falsa logo na primeira verificação.

### Estrutura Geral do `do-while`

```pseudocode
do
    // comandos a serem executados
while (condição)
```

- **Execução mínima garantida:** O bloco de comandos será executado ao menos uma vez.
- **Verificação da condição:** A condição é avaliada **após** a execução do bloco.

## Quando usar o `do-while`?

Utilize o `do-while` quando for necessário que o usuário interaja pelo menos uma vez com o programa, como em menus, validação de entrada de dados ou repetição de tarefas até que uma condição seja satisfeita.

## Exemplos Práticos

### Exemplo 1: Solicitar senha até acertar

```pseudocode
senha_correta <- "1234"
faça
    escreva("Digite a senha: ")
    senha <- leia()
enquanto (senha != senha_correta)
escreva("Acesso permitido!")
```

**Explicação:**  
O usuário será solicitado a digitar a senha pelo menos uma vez. O laço só termina quando a senha correta for informada.

---

### Exemplo 2: Menu de opções

```pseudocode
faça
    escreva("1 - Calcular área")
    escreva("2 - Calcular perímetro")
    escreva("0 - Sair")
    escreva("Escolha uma opção: ")
    opcao <- leia()
    se (opcao == 1)
        escreva("Calculando área...")
    senão se (opcao == 2)
        escreva("Calculando perímetro...")
enquanto (opcao != 0)
escreva("Programa encerrado.")
```

**Explicação:**  
O menu será exibido pelo menos uma vez, e o usuário poderá escolher as opções até decidir sair (opção 0).

---

## Exercícios Propostos

### 1. Validação de número positivo

**Enunciado:**  
Peça ao usuário para digitar um número positivo. Caso ele digite um número negativo ou zero, solicite novamente até que um número positivo seja informado.

**Pseudocódigo:**
```pseudocode
faça
    escreva("Digite um número positivo: ")
    numero <- leia()
enquanto (numero <= 0)
escreva("Número válido: ", numero)
```

---

### 2. Soma de números até digitar zero

**Enunciado:**  
Solicite ao usuário que digite números inteiros e some-os. O programa deve continuar pedindo números até que o usuário digite zero. Ao final, exiba a soma total.

**Pseudocódigo:**
```pseudocode
soma <- 0
faça
    escreva("Digite um número (0 para sair): ")
    numero <- leia()
    soma <- soma + numero
enquanto (numero != 0)
escreva("Soma total: ", soma)
```

---

### 3. Confirmação de saída

**Enunciado:**  
Implemente um programa que pergunte ao usuário se ele deseja continuar (S/N). O programa só termina quando o usuário responder 'N' (não), garantindo que a pergunta seja feita pelo menos uma vez.

**Pseudocódigo:**
```pseudocode
faça
    escreva("Deseja continuar? (S/N): ")
    resposta <- leia()
enquanto (resposta != "N" e resposta != "n")
escreva("Programa encerrado.")
```

---

## Dicas para Resolver Exercícios com `do-while`

- **Identifique a necessidade de execução mínima:** Sempre que o bloco de comandos deve ser executado ao menos uma vez, considere o uso do `do-while`.
- **Atenção à condição de parada:** Certifique-se de que a condição do laço está correta para evitar laços infinitos.
- **Valide as entradas do usuário:** O `do-while` é ideal para garantir que o usuário forneça dados válidos.

---

## Conclusão

O laço `do-while` é uma ferramenta poderosa para garantir a execução mínima de um bloco de código, sendo muito útil em situações de validação e interação com o usuário. Praticar com exercícios como os apresentados acima é fundamental para consolidar o entendimento dessa estrutura e aplicá-la corretamente na resolução de problemas de programação.

> **Pratique!** Resolva os exercícios propostos e experimente criar variações para fixar o conceito do laço `do-while` em sua lógica de programação.