
## Algoritmo para Calcular o Fatorial de um Número

O cálculo do fatorial de um número é um dos exemplos clássicos utilizados para ilustrar conceitos fundamentais da lógica de programação, como variáveis, estruturas de repetição e controle de fluxo. O fatorial de um número inteiro positivo **n** (representado por **n!**) é o produto de todos os inteiros positivos de 1 até **n**. Por definição, o fatorial de 0 é igual a 1.

### Definição Matemática

- **n! = n × (n-1) × (n-2) × ... × 2 × 1**, para n > 0
- **0! = 1**

Por exemplo:
- 5! = 5 × 4 × 3 × 2 × 1 = 120

### Passos para Construir o Algoritmo

Para calcular o fatorial de um número, podemos seguir os seguintes passos:

1. **Ler o número** do usuário.
2. **Inicializar** uma variável para armazenar o resultado do fatorial (geralmente começando em 1).
3. **Repetir** a multiplicação do resultado pelo valor atual do contador, que vai de 1 até o número informado.
4. **Exibir** o resultado final.

### Pseudocódigo

Abaixo está um exemplo de pseudocódigo para calcular o fatorial de um número inteiro positivo:

```
Início
    Ler n
    fatorial ← 1
    Para i de 1 até n faça
        fatorial ← fatorial × i
    FimPara
    Escrever "O fatorial de", n, "é", fatorial
Fim
```

### Fluxograma

O fluxograma a seguir representa o algoritmo descrito acima:

```
[Início]
   |
[Ler n]
   |
[fatorial ← 1]
   |
[i ← 1]
   |
[ i ≤ n ? ]---Não---> [Exibir fatorial] ---> [Fim]
   |
  Sim
   |
[fatorial ← fatorial × i]
   |
[i ← i + 1]
   |
[Volta para condição i ≤ n]
```

### Exemplo Prático

Vamos supor que o usuário informe o número 4:

- Inicialmente, `fatorial = 1`
- i = 1: fatorial = 1 × 1 = 1
- i = 2: fatorial = 1 × 2 = 2
- i = 3: fatorial = 2 × 3 = 6
- i = 4: fatorial = 6 × 4 = 24

Portanto, 4! = 24.

### Exercício

Implemente o algoritmo acima utilizando pseudocódigo ou fluxograma. Teste com diferentes valores de entrada e verifique se o resultado está correto.

### Dicas e Boas Práticas

- Sempre verifique se o número informado é inteiro e não-negativo, pois o fatorial não está definido para números negativos.
- Utilize variáveis com nomes claros, como `fatorial` e `contador`, para facilitar o entendimento do algoritmo.
- Compreender o cálculo do fatorial é importante, pois ele serve de base para problemas mais complexos, como permutações e combinações em matemática e ciência da computação.

---

O entendimento desse algoritmo é fundamental para quem está começando a programar, pois envolve conceitos essenciais de lógica, como repetição e manipulação de variáveis.
```
