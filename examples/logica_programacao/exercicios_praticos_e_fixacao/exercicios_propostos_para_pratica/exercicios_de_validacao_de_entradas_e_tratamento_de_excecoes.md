
# Exercícios de Validação de Entradas e Tratamento de Exceções

A validação de entradas e o tratamento de exceções são etapas fundamentais no desenvolvimento de algoritmos robustos e confiáveis. Garantir que os dados fornecidos pelo usuário estejam corretos e lidar adequadamente com situações inesperadas são práticas essenciais para evitar erros e falhas durante a execução de programas.

Neste tópico, você encontrará exercícios práticos que envolvem a validação de entradas e o tratamento de exceções, utilizando pseudocódigo e fluxogramas. Esses exercícios ajudarão a consolidar o entendimento sobre como tornar seus algoritmos mais seguros e preparados para lidar com diferentes cenários.

---

## 1. Exercício: Validação de Número Inteiro Positivo

**Enunciado:**  
Solicite ao usuário que digite um número inteiro positivo. Caso o valor informado não seja um número inteiro ou seja menor ou igual a zero, exiba uma mensagem de erro e solicite a entrada novamente até que um valor válido seja fornecido.

**Pseudocódigo:**
```
enquanto verdadeiro faça
    escreva "Digite um número inteiro positivo: "
    leia numero
    se numero é inteiro e numero > 0 então
        escreva "Número válido: ", numero
        pare
    senão
        escreva "Entrada inválida. Tente novamente."
    fimse
fimenquanto
```

**Fluxograma:**

```plaintext
[Início]
   |
   v
[Solicita número]
   |
   v
[Lê número]
   |
   v
[É inteiro e > 0?] -- Não --> [Mensagem de erro] --> [Solicita número]
   | Sim
   v
[Exibe número válido]
   |
   v
[Fim]
```

---

## 2. Exercício: Validação de Opção de Menu

**Enunciado:**  
Crie um algoritmo que exiba um menu com três opções (1, 2 e 3). O usuário deve escolher uma das opções. Caso digite um valor diferente, o programa deve informar o erro e solicitar a entrada novamente.

**Pseudocódigo:**
```
enquanto verdadeiro faça
    escreva "Menu:"
    escreva "1 - Cadastrar"
    escreva "2 - Consultar"
    escreva "3 - Sair"
    escreva "Escolha uma opção: "
    leia opcao
    se opcao = 1 ou opcao = 2 ou opcao = 3 então
        escreva "Opção escolhida: ", opcao
        pare
    senão
        escreva "Opção inválida. Tente novamente."
    fimse
fimenquanto
```

---

## 3. Exercício: Tratamento de Exceções em Divisão

**Enunciado:**  
Solicite dois números ao usuário e realize a divisão do primeiro pelo segundo. O algoritmo deve tratar a situação em que o segundo número seja zero, exibindo uma mensagem de erro e solicitando a entrada novamente.

**Pseudocódigo:**
```
enquanto verdadeiro faça
    escreva "Digite o numerador: "
    leia numerador
    escreva "Digite o denominador: "
    leia denominador
    se denominador ≠ 0 então
        resultado <- numerador / denominador
        escreva "Resultado: ", resultado
        pare
    senão
        escreva "Erro: Divisão por zero não é permitida. Tente novamente."
    fimse
fimenquanto
```

---

## 4. Exercício: Validação de Faixa de Valores

**Enunciado:**  
Peça ao usuário para digitar uma idade. O valor deve estar entre 0 e 120. Caso contrário, informe o erro e repita a solicitação.

**Pseudocódigo:**
```
enquanto verdadeiro faça
    escreva "Digite sua idade: "
    leia idade
    se idade >= 0 e idade <= 120 então
        escreva "Idade válida: ", idade
        pare
    senão
        escreva "Idade inválida. Tente novamente."
    fimse
fimenquanto
```

---

## 5. Exercício: Tratamento de Exceções em Entrada de Dados

**Enunciado:**  
Solicite ao usuário que digite um número inteiro. Caso o valor informado não seja um número inteiro, exiba uma mensagem de erro e solicite a entrada novamente.

**Pseudocódigo:**
```
enquanto verdadeiro faça
    escreva "Digite um número inteiro: "
    tente
        leia numero
        se numero é inteiro então
            escreva "Número válido: ", numero
            pare
        fimse
    exceção
        escreva "Entrada inválida. Por favor, digite um número inteiro."
    fintente
fimenquanto
```

---

## Dicas para Validação e Tratamento de Exceções

- Sempre verifique se os dados de entrada estão no formato e no intervalo esperado.
- Utilize estruturas de repetição para solicitar novamente a entrada em caso de erro.
- Em linguagens de programação, utilize blocos de tratamento de exceções (`try/catch`, `try/except`) para capturar e tratar erros inesperados.
- Forneça mensagens claras ao usuário, indicando o tipo de erro e como corrigi-lo.

---

## Conclusão

A prática da validação de entradas e do tratamento de exceções é indispensável para o desenvolvimento de algoritmos seguros e eficientes. Ao resolver os exercícios propostos, você estará mais preparado para lidar com situações reais no desenvolvimento de software, garantindo que seus programas sejam mais confiáveis e fáceis de usar.

Continue praticando e aplicando essas técnicas em seus próprios projetos!
```
