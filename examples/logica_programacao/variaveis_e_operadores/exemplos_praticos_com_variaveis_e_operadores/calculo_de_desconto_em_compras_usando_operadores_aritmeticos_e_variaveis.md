
# Cálculo de Desconto em Compras usando Operadores Aritméticos e Variáveis

O cálculo de desconto em compras é um dos exemplos mais práticos e comuns para entender o uso de variáveis e operadores aritméticos na lógica de programação. Esse tipo de problema envolve armazenar valores, realizar operações matemáticas e apresentar o resultado ao usuário, sendo uma ótima oportunidade para aplicar os conceitos fundamentais da programação.

## Conceitos Envolvidos

- **Variáveis:** Espaços na memória do computador usados para armazenar valores que podem mudar durante a execução do programa, como o preço de um produto, a porcentagem de desconto e o valor final a ser pago.
- **Operadores aritméticos:** Símbolos usados para realizar operações matemáticas, como adição (`+`), subtração (`-`), multiplicação (`*`) e divisão (`/`).

## Exemplo Prático: Cálculo de Desconto

Imagine que você está desenvolvendo um sistema simples para calcular o valor final de uma compra após aplicar um desconto percentual.

### Passos para resolver o problema

1. **Receber o valor original da compra.**
2. **Receber a porcentagem de desconto a ser aplicada.**
3. **Calcular o valor do desconto.**
4. **Calcular o valor final a ser pago.**
5. **Exibir o resultado.**

### Pseudocódigo

```pseudocode
Início
    Leia valor_compra
    Leia percentual_desconto
    desconto = valor_compra * (percentual_desconto / 100)
    valor_final = valor_compra - desconto
    Escreva "Valor do desconto: ", desconto
    Escreva "Valor final a pagar: ", valor_final
Fim
```

### Exemplo com valores

Suponha que o valor da compra seja R$ 200,00 e o desconto seja de 15%.

- **valor_compra = 200**
- **percentual_desconto = 15**

Cálculo do desconto:

```
desconto = 200 * (15 / 100)
desconto = 200 * 0,15
desconto = 30
```

Cálculo do valor final:

```
valor_final = 200 - 30
valor_final = 170
```

**Resultado:**  
O valor do desconto é R$ 30,00 e o valor final a pagar é R$ 170,00.

### Exemplo em Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia valor_compra]
    B --> C[Leia percentual_desconto]
    C --> D[desconto = valor_compra * (percentual_desconto / 100)]
    D --> E[valor_final = valor_compra - desconto]
    E --> F[Exiba desconto e valor_final]
    F --> G[Fim]
```

### Exemplo em Código (Python)

```python
# Solicita os dados ao usuário
valor_compra = float(input("Digite o valor da compra: R$ "))
percentual_desconto = float(input("Digite o percentual de desconto: "))

# Calcula o valor do desconto
desconto = valor_compra * (percentual_desconto / 100)

# Calcula o valor final
valor_final = valor_compra - desconto

# Exibe os resultados
print(f"Valor do desconto: R$ {desconto:.2f}")
print(f"Valor final a pagar: R$ {valor_final:.2f}")
```

## Boas Práticas

- **Nomeie as variáveis de forma clara** para facilitar o entendimento do código.
- **Valide os dados de entrada** para evitar erros, como descontos negativos ou superiores a 100%.
- **Comente o código** para explicar etapas importantes, especialmente em exemplos didáticos.

## Conclusão

O cálculo de desconto em compras é um excelente exercício para fixar o uso de variáveis e operadores aritméticos. Compreender como armazenar valores, realizar operações matemáticas e apresentar resultados é fundamental para resolver problemas do dia a dia na programação. Pratique criando variações desse exemplo, como descontos progressivos ou múltiplos produtos, para aprofundar ainda mais seu entendimento.
```
