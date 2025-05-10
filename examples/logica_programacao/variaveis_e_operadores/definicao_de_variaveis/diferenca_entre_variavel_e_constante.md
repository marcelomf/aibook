# Diferença entre Variável e Constante

No estudo da lógica de programação, compreender a diferença entre **variáveis** e **constantes** é fundamental para o desenvolvimento de algoritmos eficientes e organizados. Ambos são utilizados para armazenar valores durante a execução de um programa, mas possuem características e finalidades distintas.

## O que é uma Variável?

Uma **variável** é um espaço na memória do computador reservado para armazenar um valor que pode ser alterado durante a execução do programa. O nome “variável” vem justamente da sua principal característica: a **capacidade de variar**. Ou seja, o valor armazenado em uma variável pode ser modificado quantas vezes forem necessárias ao longo do algoritmo.

### Exemplo de uso de variável

```pseudocode
idade = 20
idade = idade + 1  // Agora, idade vale 21
```

No exemplo acima, a variável `idade` inicialmente armazena o valor 20. Em seguida, seu valor é alterado para 21.

## O que é uma Constante?

Uma **constante** também é um espaço na memória utilizado para armazenar um valor, porém, **esse valor não pode ser alterado** durante a execução do programa. Uma vez definida, a constante mantém o mesmo valor até o final do algoritmo. Constantes são utilizadas para representar valores fixos, que não devem ser modificados, como por exemplo o valor de PI (3,14159) ou a quantidade de dias em uma semana (7).

### Exemplo de uso de constante

```pseudocode
const PI = 3.14159
raio = 5
area = PI * raio * raio
```

No exemplo acima, `PI` é uma constante e seu valor não pode ser alterado em nenhum momento do programa.

## Principais Diferenças

| Característica         | Variável                              | Constante                          |
|-----------------------|---------------------------------------|------------------------------------|
| Alteração de valor    | Pode ser alterado durante o programa  | Não pode ser alterado              |
| Declaração            | Geralmente, apenas nome e tipo         | Geralmente, nome, tipo e valor fixo|
| Uso                   | Armazenar dados que mudam             | Armazenar dados fixos              |
| Exemplo               | idade, saldo, contador                | PI, DIAS_DA_SEMANA, TAXA_JUROS     |

## Por que usar constantes?

O uso de constantes traz diversos benefícios para o desenvolvimento de algoritmos:

- **Clareza:** Facilita a leitura e o entendimento do código, pois valores fixos recebem nomes significativos.
- **Manutenção:** Caso seja necessário alterar o valor de uma constante, basta modificar sua declaração, sem precisar procurar e substituir em todo o código.
- **Segurança:** Evita alterações acidentais de valores que não deveriam ser modificados.

## Resumindo

- **Variáveis** são usadas para armazenar valores que podem mudar durante a execução do programa.
- **Constantes** armazenam valores fixos, que não podem ser alterados após sua definição.

Saber quando utilizar variáveis e constantes é essencial para escrever algoritmos claros, seguros e fáceis de manter, além de ser uma prática comum em todas as linguagens de programação.