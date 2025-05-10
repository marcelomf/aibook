# Exercícios de Repetição com Laço `while` para Validação de Entrada de Dados

A validação de entrada de dados é uma etapa fundamental no desenvolvimento de algoritmos e programas. Ela garante que o usuário forneça informações corretas e dentro dos parâmetros esperados, evitando erros e comportamentos indesejados durante a execução do programa. Um dos recursos mais utilizados para realizar essa validação é o laço de repetição `while`.

## Por que usar o laço `while` para validação?

O laço `while` é especialmente útil para situações em que não sabemos, de antemão, quantas vezes será necessário repetir uma ação até que uma condição seja satisfeita. No contexto da validação de entrada, isso significa que o programa continuará solicitando ao usuário que insira um valor até que ele forneça uma entrada válida.

## Estrutura Básica

A estrutura básica de um laço `while` para validação de entrada é a seguinte:

```pseudocode
leia valor
enquanto valor não for válido faça
    exiba mensagem de erro
    leia valor novamente
fim enquanto
```

## Exemplo Prático 1: Validação de Número Positivo

Vamos supor que queremos que o usuário digite um número inteiro positivo. Se ele digitar um valor negativo ou zero, o programa deve solicitar novamente.

```pseudocode
leia numero
enquanto numero <= 0 faça
    exiba "Valor inválido! Digite um número inteiro positivo:"
    leia numero
fim enquanto
exiba "Número válido:", numero
```

### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia número]
    B --> C{número > 0?}
    C -- Não --> D[Exiba mensagem de erro]
    D --> B
    C -- Sim --> E[Exiba "Número válido"]
    E --> F[Fim]
```

## Exemplo Prático 2: Validação de Opção de Menu

Imagine um menu com opções de 1 a 3. O programa deve garantir que o usuário escolha apenas uma dessas opções.

```pseudocode
exiba "Escolha uma opção: 1 - Iniciar, 2 - Configurações, 3 - Sair"
leia opcao
enquanto opcao < 1 ou opcao > 3 faça
    exiba "Opção inválida! Digite 1, 2 ou 3:"
    leia opcao
fim enquanto
exiba "Opção escolhida:", opcao
```

## Exercícios Propostos

1. **Validação de Senha:**  
   Peça ao usuário para digitar uma senha. O programa só deve aceitar senhas com pelo menos 6 caracteres. Caso contrário, solicite novamente.

2. **Validação de Nota:**  
   Solicite ao usuário uma nota entre 0 e 10. Se o valor estiver fora desse intervalo, peça novamente.

3. **Validação de Idade:**  
   Peça ao usuário para informar sua idade. Aceite apenas valores entre 0 e 120.

4. **Validação de Resposta Sim/Não:**  
   Solicite ao usuário que responda "S" para sim ou "N" para não. Repita até que uma resposta válida seja fornecida.

## Dicas para Implementação

- Sempre informe ao usuário qual é o valor esperado.
- Mostre mensagens de erro claras quando a entrada for inválida.
- Lembre-se de atualizar a variável de controle dentro do laço, para evitar laços infinitos.
- Teste seu algoritmo com diferentes entradas para garantir que a validação está funcionando corretamente.

## Conclusão

O uso do laço `while` para validação de entrada de dados é uma prática essencial na lógica de programação. Ele garante que o programa só prossiga quando receber informações corretas, tornando o software mais robusto e confiável. Praticar esses exercícios ajudará a consolidar o entendimento sobre estruturas de repetição e validação de dados, habilidades fundamentais para qualquer programador iniciante.