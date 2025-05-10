# Pseudocódigo para Cálculo de Fatorial de um Número

O cálculo do fatorial de um número é um dos exemplos clássicos para o estudo de lógica de programação. O fatorial de um número inteiro positivo **n** (representado por **n!**) é o produto de todos os inteiros positivos menores ou iguais a **n**. Por definição, **0! = 1**.

## Definição Matemática

- **n! = n × (n-1) × (n-2) × ... × 2 × 1**
- **Exemplo:** 5! = 5 × 4 × 3 × 2 × 1 = 120

## Importância do Pseudocódigo

O pseudocódigo é uma ferramenta fundamental para descrever algoritmos de forma clara e independente de qualquer linguagem de programação. Ele permite que o programador foque na lógica do problema, facilitando a transição para qualquer linguagem posteriormente.

## Algoritmo para Cálculo de Fatorial

Existem duas abordagens principais para calcular o fatorial: **iterativa** e **recursiva**. A seguir, apresentamos exemplos de pseudocódigo para ambas.

---

### 1. Pseudocódigo Iterativo

Neste método, utilizamos uma estrutura de repetição para multiplicar os números de 1 até **n**.

```plaintext
Início
    Ler n
    fatorial ← 1
    Para i de 1 até n faça
        fatorial ← fatorial × i
    FimPara
    Escrever "O fatorial de", n, "é", fatorial
Fim
```

#### Explicação dos Passos

1. **Ler n:** Recebe o número do usuário.
2. **fatorial ← 1:** Inicializa a variável que armazenará o resultado.
3. **Para i de 1 até n:** Laço que percorre todos os valores de 1 até n.
4. **fatorial ← fatorial × i:** Multiplica o valor atual de fatorial pelo valor de i.
5. **Escrever:** Exibe o resultado final.

---

### 2. Pseudocódigo Recursivo

A abordagem recursiva utiliza o conceito de que o fatorial de n é n multiplicado pelo fatorial de (n-1).

```plaintext
Função Fatorial(n)
    Se n = 0 então
        Retorne 1
    Senão
        Retorne n × Fatorial(n-1)
    FimSe
FimFunção

Início
    Ler n
    resultado ← Fatorial(n)
    Escrever "O fatorial de", n, "é", resultado
Fim
```

#### Explicação dos Passos

1. **Função Fatorial(n):** Define uma função recursiva.
2. **Se n = 0:** Caso base da recursão, retorna 1.
3. **Senão:** Chama a função novamente com (n-1).
4. **No programa principal:** Lê o valor de n, chama a função e exibe o resultado.

---

## Exercício Proposto

**Modifique o pseudocódigo iterativo para que ele também trate o caso em que o usuário digite um número negativo, exibindo uma mensagem de erro.**

---

## Conclusão

O uso do pseudocódigo para o cálculo do fatorial é uma excelente forma de praticar estruturas de repetição e recursão, além de reforçar a importância de planejar a lógica antes de implementar em uma linguagem de programação. Compreender e praticar esses exemplos é fundamental para desenvolver habilidades sólidas em lógica de programação.