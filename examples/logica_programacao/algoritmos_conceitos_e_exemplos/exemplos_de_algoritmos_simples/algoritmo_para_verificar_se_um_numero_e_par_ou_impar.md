
## Algoritmo para Verificar se um Número é Par ou Ímpar

Verificar se um número é par ou ímpar é um dos exemplos mais clássicos e simples de algoritmo na lógica de programação. Esse tipo de exercício é fundamental para quem está começando, pois envolve conceitos básicos como entrada de dados, operadores aritméticos e estruturas de decisão.

### Conceito

Um número é considerado **par** quando é divisível por 2, ou seja, o resto da divisão do número por 2 é igual a zero. Caso contrário, ele é **ímpar**.

Matematicamente:
- Se `n % 2 == 0`, então `n` é par.
- Se `n % 2 != 0`, então `n` é ímpar.

O operador `%` representa o operador **módulo**, que retorna o resto da divisão entre dois números.

### Passos do Algoritmo

1. **Início**
2. Solicitar ao usuário que digite um número inteiro.
3. Ler o número informado.
4. Calcular o resto da divisão do número por 2.
5. Se o resto for igual a zero, informar que o número é par.
6. Caso contrário, informar que o número é ímpar.
7. **Fim**

### Pseudocódigo

Veja abaixo um exemplo de pseudocódigo para esse algoritmo:

```
Início
    Escreva("Digite um número inteiro:")
    Leia(numero)
    Se (numero % 2 == 0) então
        Escreva("O número é par.")
    Senão
        Escreva("O número é ímpar.")
Fim
```

### Fluxograma

Abaixo, um fluxograma simplificado do algoritmo:

```
[Início]
   |
   v
[Solicitar número]
   |
   v
[Ler número]
   |
   v
[Calcular resto da divisão por 2]
   |
   v
[O resto é 0?] --Sim--> [Exibir "Par"] --> [Fim]
         |
         Não
         v
   [Exibir "Ímpar"]
         |
         v
       [Fim]
```

### Exemplo Prático

Vamos supor que o usuário digite o número **7**:

- 7 % 2 = 1 (resto diferente de zero)
- O algoritmo exibirá: "O número é ímpar."

Se o usuário digitar **10**:

- 10 % 2 = 0 (resto igual a zero)
- O algoritmo exibirá: "O número é par."

### Exercício Proposto

Implemente esse algoritmo em pseudocódigo ou em uma linguagem de sua preferência. Teste com diferentes valores para garantir que o algoritmo funciona corretamente.

---

**Resumo:**  
O algoritmo para verificar se um número é par ou ímpar é um excelente exercício introdutório, pois utiliza conceitos fundamentais da lógica de programação, como operadores aritméticos e estruturas de decisão. Compreender e implementar esse algoritmo é um passo importante para desenvolver habilidades em análise e resolução de problemas computacionais.
```
