
# Exemplos Práticos de Modularização em Pseudocódigo

A **modularização** é uma das principais boas práticas em lógica de programação. Ela consiste em dividir um programa em partes menores e independentes, chamadas de módulos, funções ou procedimentos. Essa abordagem facilita o desenvolvimento, a manutenção e a reutilização do código, além de tornar o algoritmo mais organizado e compreensível.

Neste tópico, vamos apresentar exemplos práticos de modularização utilizando pseudocódigo, mostrando como criar, chamar e reutilizar módulos em diferentes situações.

---

## Por que Modularizar?

- **Organização:** O código fica mais limpo e fácil de entender.
- **Reutilização:** Funções e procedimentos podem ser usados em diferentes partes do programa ou em outros projetos.
- **Manutenção:** Alterações em um módulo não afetam o restante do código, desde que a interface permaneça a mesma.
- **Facilidade de Testes:** Cada módulo pode ser testado separadamente.

---

## Estrutura Básica de um Módulo em Pseudocódigo

Em pseudocódigo, um módulo pode ser representado por um **procedimento** (que não retorna valor) ou uma **função** (que retorna valor). Veja a estrutura básica:

```pseudocode
Procedimento NomeDoProcedimento(parâmetros)
    // Instruções
FimProcedimento

Função NomeDaFuncao(parâmetros) : TipoRetorno
    // Instruções
    Retorne valor
FimFunção
```

---

## Exemplo 1: Cálculo de Média de Notas

Vamos modularizar um algoritmo que lê três notas de um aluno, calcula a média e exibe o resultado.

```pseudocode
Função CalcularMedia(nota1, nota2, nota3) : Real
    media <- (nota1 + nota2 + nota3) / 3
    Retorne media
FimFunção

Procedimento ExibirResultado(media)
    Escreva("A média do aluno é: ", media)
FimProcedimento

// Programa principal
Início
    Escreva("Digite a primeira nota: ")
    Leia(n1)
    Escreva("Digite a segunda nota: ")
    Leia(n2)
    Escreva("Digite a terceira nota: ")
    Leia(n3)

    m <- CalcularMedia(n1, n2, n3)
    ExibirResultado(m)
Fim
```

**Vantagens:**  
- O cálculo da média e a exibição do resultado estão separados em módulos.
- Se precisar alterar a forma de calcular a média ou exibir o resultado, basta modificar o módulo correspondente.

---

## Exemplo 2: Verificação de Número Primo

Neste exemplo, criamos um módulo para verificar se um número é primo e outro para exibir o resultado.

```pseudocode
Função EhPrimo(numero) : Booleano
    Se numero < 2 Então
        Retorne FALSO
    FimSe
    Para i de 2 até numero - 1 Faça
        Se numero % i = 0 Então
            Retorne FALSO
        FimSe
    FimPara
    Retorne VERDADEIRO
FimFunção

Procedimento ExibirPrimalidade(numero, resultado)
    Se resultado = VERDADEIRO Então
        Escreva(numero, " é primo.")
    Senão
        Escreva(numero, " não é primo.")
    FimSe
FimProcedimento

// Programa principal
Início
    Escreva("Digite um número: ")
    Leia(num)
    primo <- EhPrimo(num)
    ExibirPrimalidade(num, primo)
Fim
```

**Vantagens:**  
- O teste de primalidade pode ser reutilizado em outros programas.
- A exibição do resultado está separada da lógica de verificação.

---

## Exemplo 3: Modularização em Algoritmo de Ordenação

Vamos modularizar um algoritmo simples de ordenação (Bubble Sort) para ordenar um vetor de números.

```pseudocode
Procedimento LerVetor(vetor, tamanho)
    Para i de 1 até tamanho Faça
        Escreva("Digite o ", i, "º número: ")
        Leia(vetor[i])
    FimPara
FimProcedimento

Procedimento BubbleSort(vetor, tamanho)
    Para i de 1 até tamanho - 1 Faça
        Para j de 1 até tamanho - i Faça
            Se vetor[j] > vetor[j+1] Então
                temp <- vetor[j]
                vetor[j] <- vetor[j+1]
                vetor[j+1] <- temp
            FimSe
        FimPara
    FimPara
FimProcedimento

Procedimento ExibirVetor(vetor, tamanho)
    Escreva("Vetor ordenado: ")
    Para i de 1 até tamanho Faça
        Escreva(vetor[i], " ")
    FimPara
    Escreva("\n")
FimProcedimento

// Programa principal
Início
    tamanho <- 5
    Declare vetor[1..tamanho]
    LerVetor(vetor, tamanho)
    BubbleSort(vetor, tamanho)
    ExibirVetor(vetor, tamanho)
Fim
```

**Vantagens:**  
- Cada tarefa (leitura, ordenação, exibição) está em um módulo separado.
- O procedimento de ordenação pode ser reutilizado para outros vetores.

---

## Conclusão

A modularização é uma prática fundamental para o desenvolvimento de algoritmos eficientes, organizados e fáceis de manter. Ao dividir o código em módulos, você facilita a compreensão, a reutilização e a manutenção do seu programa. Pratique modularizar seus algoritmos desde o início, mesmo em pseudocódigo, para adquirir bons hábitos que serão essenciais ao programar em qualquer linguagem.
```
