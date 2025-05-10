
# Criação de Algoritmos para Validação de Dados de Entrada

A validação de dados de entrada é uma etapa fundamental no desenvolvimento de algoritmos e programas. Ela garante que as informações fornecidas pelo usuário estejam corretas, dentro dos padrões esperados e sejam seguras para o processamento. Neste tópico, você aprenderá como criar algoritmos para validar dados de entrada, utilizando conceitos essenciais da lógica de programação.

## Por que validar dados de entrada?

Ao receber dados do usuário, é comum que ocorram erros, como digitação incorreta, valores fora do intervalo permitido ou até mesmo tentativas de inserir informações maliciosas. A validação previne problemas como:

- **Erros de execução** (ex: divisão por zero, conversão inválida de tipos)
- **Resultados incorretos** devido a dados inesperados
- **Falhas de segurança** (ex: injeção de código)
- **Experiência ruim para o usuário**

## Passos para criar um algoritmo de validação

1. **Definir os critérios de validação:**  
   Antes de validar, é preciso saber quais são os requisitos para os dados. Por exemplo:  
   - O valor deve ser um número inteiro positivo?
   - O texto deve ter no mínimo 8 caracteres?
   - O valor deve estar entre 1 e 100?

2. **Solicitar o dado ao usuário:**  
   O algoritmo deve pedir que o usuário informe o dado desejado.

3. **Verificar se o dado atende aos critérios:**  
   Utilizar estruturas de decisão (if, else) para checar se o dado está correto.

4. **Repetir a solicitação em caso de erro:**  
   Caso o dado não seja válido, informar o erro e pedir novamente (utilizando estruturas de repetição como while ou do-while).

5. **Prosseguir quando o dado for válido:**  
   Quando o dado atender aos critérios, o algoritmo pode seguir para as próximas etapas.

## Exemplos práticos em pseudocódigo

### 1. Validação de número inteiro positivo

```pseudocode
Algoritmo ValidaNumeroPositivo
    Declare numero

    Escreva "Digite um número inteiro positivo:"
    Leia numero

    Enquanto numero <= 0 faça
        Escreva "Valor inválido! Digite um número inteiro positivo:"
        Leia numero
    FimEnquanto

    Escreva "Número válido:", numero
FimAlgoritmo
```

### 2. Validação de senha com no mínimo 8 caracteres

```pseudocode
Algoritmo ValidaSenha
    Declare senha

    Escreva "Digite uma senha (mínimo 8 caracteres):"
    Leia senha

    Enquanto comprimento(senha) < 8 faça
        Escreva "Senha muito curta! Digite novamente:"
        Leia senha
    FimEnquanto

    Escreva "Senha válida!"
FimAlgoritmo
```

### 3. Validação de valor dentro de um intervalo

```pseudocode
Algoritmo ValidaIntervalo
    Declare valor

    Escreva "Digite um valor entre 1 e 100:"
    Leia valor

    Enquanto valor < 1 ou valor > 100 faça
        Escreva "Valor fora do intervalo! Digite novamente:"
        Leia valor
    FimEnquanto

    Escreva "Valor aceito:", valor
FimAlgoritmo
```

## Dicas e boas práticas

- **Seja claro nas mensagens de erro:** Informe ao usuário o motivo da rejeição do dado.
- **Evite laços infinitos:** Certifique-se de que o critério de saída do laço de repetição está correto.
- **Valide todos os dados necessários:** Não confie que o usuário sempre fornecerá informações corretas.
- **Considere diferentes tipos de erro:** Por exemplo, o usuário pode digitar letras quando se espera um número.

## Exercício proposto

Crie um algoritmo que solicite ao usuário um endereço de e-mail e valide se ele contém o caractere “@”. Caso não contenha, peça novamente até que um e-mail válido seja informado.

---

A validação de dados de entrada é um dos primeiros passos para garantir a robustez e a confiabilidade de qualquer programa. Praticar a criação desses algoritmos é essencial para desenvolver soluções seguras e eficientes.
```
