
# Exemplo de Cálculo de Média Aritmética Utilizando Variáveis e Operadores

O cálculo da média aritmética é um dos exemplos mais clássicos e didáticos para entender o uso de variáveis e operadores em lógica de programação. Esse conceito é fundamental, pois está presente em diversas situações do cotidiano e é frequentemente utilizado em programas de computador.

## O que é Média Aritmética?

A média aritmética é o resultado da soma de um conjunto de valores dividida pela quantidade desses valores. Por exemplo, para calcular a média de três números, basta somá-los e dividir o resultado por três.

**Fórmula:**

```
Média = (Valor1 + Valor2 + Valor3 + ... + ValorN) / N
```

Onde:
- `Valor1, Valor2, ..., ValorN` são os valores a serem calculados.
- `N` é a quantidade de valores.

## Utilizando Variáveis e Operadores

Em programação, utilizamos **variáveis** para armazenar os valores e **operadores aritméticos** para realizar os cálculos.

### Exemplo Prático em Pseudocódigo

Vamos calcular a média aritmética de três números informados pelo usuário.

```pseudocode
Início
    Declare num1, num2, num3, media como real

    Escreva "Digite o primeiro número:"
    Leia num1

    Escreva "Digite o segundo número:"
    Leia num2

    Escreva "Digite o terceiro número:"
    Leia num3

    media <- (num1 + num2 + num3) / 3

    Escreva "A média aritmética é: ", media
Fim
```

### Explicação do Exemplo

- **Variáveis:** `num1`, `num2`, `num3` armazenam os números informados pelo usuário. `media` armazena o resultado do cálculo.
- **Operadores:** O operador `+` soma os valores das variáveis, e o operador `/` divide o resultado pela quantidade de números (3).
- **Entrada e Saída:** O programa solicita ao usuário que digite três números e, ao final, exibe a média calculada.

### Exemplo em Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia num1]
    B --> C[Leia num2]
    C --> D[Leia num3]
    D --> E[media = (num1 + num2 + num3) / 3]
    E --> F[Escreva media]
    F --> G[Fim]
```

### Exemplo em Linguagem de Programação (Python)

```python
# Solicita ao usuário que digite três números
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
num3 = float(input("Digite o terceiro número: "))

# Calcula a média aritmética
media = (num1 + num2 + num3) / 3

# Exibe o resultado
print("A média aritmética é:", media)
```

## Pontos Importantes

- **Tipo de Dados:** É importante garantir que as variáveis possam armazenar números decimais, caso o resultado da média não seja inteiro.
- **Reutilização:** O mesmo conceito pode ser aplicado para qualquer quantidade de números, bastando ajustar a fórmula e a quantidade de variáveis.
- **Boas Práticas:** Use nomes de variáveis claros e significativos para facilitar a leitura e manutenção do código.

## Conclusão

O cálculo da média aritmética é um excelente exemplo para praticar o uso de variáveis e operadores. Compreender esse conceito é essencial para resolver problemas mais complexos na programação, além de ser uma base sólida para o desenvolvimento de algoritmos eficientes.
```
