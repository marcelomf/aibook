
# Exemplos Práticos de Uso de Estruturas de Repetição

As estruturas de repetição são fundamentais na programação, pois permitem executar um bloco de código várias vezes, de acordo com uma condição estabelecida. Elas são essenciais para automatizar tarefas repetitivas, processar listas de dados, realizar cálculos iterativos, entre outras aplicações. A seguir, apresentamos exemplos práticos do uso das principais estruturas de repetição: **for**, **while** e **do-while**.

---

## 1. Estrutura `for`

A estrutura `for` é geralmente utilizada quando se sabe exatamente o número de vezes que o bloco de código deve ser executado. Ela é composta por três partes: inicialização, condição e incremento.

### Exemplo 1: Imprimir números de 1 a 10

```pseudocode
para i de 1 até 10 faça
    escreva(i)
fim-para
```

**Explicação:**  
O laço começa com `i = 1` e, enquanto `i` for menor ou igual a 10, o valor de `i` é impresso. Após cada iteração, `i` é incrementado em 1.

---

## 2. Estrutura `while`

A estrutura `while` é utilizada quando não se sabe previamente quantas vezes o bloco de código deve ser executado. O laço continua enquanto a condição for verdadeira.

### Exemplo 2: Ler números até que o usuário digite zero

```pseudocode
leia(numero)
enquanto numero ≠ 0 faça
    escreva("Você digitou: ", numero)
    leia(numero)
fim-enquanto
```

**Explicação:**  
O programa solicita ao usuário que digite um número. Enquanto o número for diferente de zero, ele é exibido e o usuário é solicitado a digitar outro número. O laço termina quando o usuário digita zero.

---

## 3. Estrutura `do-while`

A estrutura `do-while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, pois a condição é verificada após a execução.

### Exemplo 3: Menu de opções até o usuário escolher sair

```pseudocode
faça
    escreva("1 - Opção A")
    escreva("2 - Opção B")
    escreva("0 - Sair")
    leia(opcao)
enquanto opcao ≠ 0
```

**Explicação:**  
O menu é exibido ao menos uma vez. O usuário escolhe uma opção e, enquanto não escolher "0" para sair, o menu continua sendo apresentado.

---

## 4. Exemplo Prático: Somar os elementos de uma lista

Suponha que você tenha uma lista de números e deseja calcular a soma de todos os elementos.

```pseudocode
lista = [5, 8, 12, 3]
soma = 0
para i de 0 até tamanho(lista) - 1 faça
    soma = soma + lista[i]
fim-para
escreva("A soma é: ", soma)
```

**Explicação:**  
O laço percorre cada elemento da lista, somando-o à variável `soma`. Ao final, o resultado é exibido.

---

## 5. Exemplo Prático: Validar entrada do usuário

Às vezes, é necessário garantir que o usuário forneça uma entrada válida, como um número positivo.

```pseudocode
leia(numero)
enquanto numero < 0 faça
    escreva("Digite um número positivo:")
    leia(numero)
fim-enquanto
```

**Explicação:**  
O laço continua solicitando um número até que o usuário digite um valor positivo.

---

## Conclusão

As estruturas de repetição são ferramentas poderosas para resolver problemas que envolvem tarefas repetitivas ou processamento de grandes volumes de dados. Compreender e praticar o uso de `for`, `while` e `do-while` é essencial para desenvolver algoritmos eficientes e robustos. Ao dominar esses conceitos, você estará preparado para enfrentar desafios mais complexos na programação.
```
