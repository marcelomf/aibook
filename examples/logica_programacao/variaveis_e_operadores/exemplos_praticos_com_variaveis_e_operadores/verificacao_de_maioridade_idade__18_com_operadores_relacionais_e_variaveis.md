
# Verificação de Maioridade (idade >= 18) com Operadores Relacionais e Variáveis

A verificação de maioridade é um exemplo clássico e prático do uso de variáveis e operadores relacionais na lógica de programação. Esse tipo de verificação é muito comum em sistemas que precisam restringir o acesso a determinados recursos ou funcionalidades apenas para pessoas com idade igual ou superior a 18 anos.

## Conceitos Envolvidos

Antes de partirmos para o exemplo prático, vamos relembrar dois conceitos fundamentais:

- **Variáveis:** São espaços na memória do computador utilizados para armazenar valores que podem ser alterados durante a execução do programa. No caso da verificação de maioridade, a variável mais importante é a que armazena a idade da pessoa.
- **Operadores Relacionais:** São símbolos utilizados para comparar dois valores. O operador `>=` (maior ou igual) é utilizado para verificar se um valor é maior ou igual a outro.

## Exemplo Prático

Vamos supor que queremos criar um algoritmo que leia a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade (menos de 18 anos).

### Pseudocódigo

```pseudocode
Início
    Leia idade
    Se idade >= 18 então
        Escreva "Você é maior de idade."
    Senão
        Escreva "Você é menor de idade."
Fim
```

### Fluxograma

```plaintext
+----------------------+
|    Início            |
+----------------------+
           |
           v
+----------------------+
|  Ler idade           |
+----------------------+
           |
           v
+----------------------+
| idade >= 18 ?        |
+----------------------+
      |         |
     Sim       Não
      |         |
      v         v
+----------------------+    +----------------------+
| "Maior de idade"     |    | "Menor de idade"     |
+----------------------+    +----------------------+
      |         |
      +----+----+
           |
           v
+----------------------+
|      Fim             |
+----------------------+
```

### Exemplo em Pseudocódigo com Entrada e Saída

```pseudocode
// Solicita ao usuário que digite sua idade
Escreva("Digite sua idade: ")
Leia(idade)

// Verifica se a idade é maior ou igual a 18
Se idade >= 18 então
    Escreva("Você é maior de idade.")
Senão
    Escreva("Você é menor de idade.")
FimSe
```

## Explicação

- **Leitura da variável:** O programa solicita ao usuário que informe sua idade, que é armazenada na variável `idade`.
- **Operador relacional:** O operador `>=` compara o valor da variável `idade` com o número 18.
- **Estrutura de decisão:** Se a condição for verdadeira (`idade` maior ou igual a 18), o programa informa que a pessoa é maior de idade. Caso contrário, informa que é menor de idade.

## Exemplo em Linguagem de Programação (Python)

Para ilustrar como esse conceito é aplicado em uma linguagem real, veja o exemplo em Python:

```python
idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")
```

## Conclusão

A verificação de maioridade é um exemplo simples, mas muito útil para entender como variáveis e operadores relacionais funcionam juntos na lógica de programação. Compreender esses conceitos é fundamental para criar programas que tomam decisões baseadas em dados fornecidos pelo usuário ou por outras partes do sistema.

Pratique criando variações desse exemplo, como verificar outras faixas etárias ou combinar múltiplas condições, para fortalecer seu entendimento sobre variáveis, operadores e estruturas de decisão.
```
