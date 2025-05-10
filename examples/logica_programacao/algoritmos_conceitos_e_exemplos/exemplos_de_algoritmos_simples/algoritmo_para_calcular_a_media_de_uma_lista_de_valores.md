
## Algoritmo para Calcular a Média de uma Lista de Valores

Calcular a média de uma lista de valores é uma tarefa comum em programação e um excelente exemplo para entender a aplicação dos conceitos fundamentais da lógica de programação. A média aritmética é obtida somando todos os valores de uma lista e dividindo o resultado pela quantidade de elementos presentes nessa lista.

### Passos para Construção do Algoritmo

1. **Definir a lista de valores**: Os valores podem ser inseridos pelo usuário ou definidos previamente no algoritmo.
2. **Inicializar uma variável para a soma**: Essa variável irá acumular o total dos valores.
3. **Percorrer a lista de valores**: Utilizar uma estrutura de repetição para somar cada elemento da lista.
4. **Calcular a média**: Dividir a soma total pelo número de elementos da lista.
5. **Exibir o resultado**: Mostrar a média calculada ao usuário.

### Pseudocódigo

Abaixo, apresentamos um pseudocódigo simples para calcular a média de uma lista de valores:

```
Início
    Leia N  // quantidade de valores
    soma ← 0
    Para i de 1 até N faça
        Leia valor
        soma ← soma + valor
    FimPara
    media ← soma / N
    Escreva "A média é: ", media
Fim
```

### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[Leia N]
    B --> C[soma ← 0]
    C --> D{i = 1 até N?}
    D -- Sim --> E[Leia valor]
    E --> F[soma ← soma + valor]
    F --> D
    D -- Não --> G[media ← soma / N]
    G --> H[Escreva "A média é: ", media]
    H --> I[Fim]
```

### Exemplo Prático

Suponha que o usuário deseja calcular a média de 4 valores: 7, 8, 6 e 9.

- **Soma dos valores:** 7 + 8 + 6 + 9 = 30
- **Quantidade de valores:** 4
- **Média:** 30 / 4 = 7,5

O algoritmo irá solicitar os valores, calcular a soma, dividir pelo número de elementos e exibir o resultado: `A média é: 7,5`.

### Exercício Proposto

Implemente o algoritmo acima em pseudocódigo ou em uma linguagem de sua preferência, permitindo que o usuário informe a quantidade de valores e os valores em si. Teste com diferentes conjuntos de números para verificar o funcionamento.

### Boas Práticas

- **Validação de entrada:** Certifique-se de que o número de valores informado seja maior que zero.
- **Clareza:** Use nomes de variáveis que representem bem seu propósito, como `soma`, `media` e `valor`.
- **Reutilização:** O algoritmo pode ser adaptado para calcular médias de diferentes tipos de dados, como notas, temperaturas, etc.

---

Compreender e implementar algoritmos simples como o cálculo da média é fundamental para desenvolver o raciocínio lógico e preparar-se para desafios mais complexos na programação.
```
