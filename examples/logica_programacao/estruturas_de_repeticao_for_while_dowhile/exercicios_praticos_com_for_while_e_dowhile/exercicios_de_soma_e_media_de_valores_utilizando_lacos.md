
# Exercícios de Soma e Média de Valores Utilizando Laços

As estruturas de repetição são fundamentais na lógica de programação, pois permitem executar um bloco de código várias vezes, facilitando tarefas como somar valores ou calcular médias. Neste tópico, vamos explorar exercícios práticos utilizando os laços `for`, `while` e `do-while` para realizar operações de soma e média de valores.

## 1. Entendendo o Problema

Calcular a soma e a média de uma sequência de valores é uma tarefa comum em programação. Por exemplo, podemos querer somar as notas de uma turma e calcular a média final, ou somar os números digitados por um usuário até que ele decida parar.

Para isso, utilizamos laços de repetição para percorrer todos os valores, acumulando a soma e, ao final, dividindo pelo total de elementos para obter a média.

## 2. Exercício 1: Soma e Média de N Números com `for`

**Enunciado:**  
Peça ao usuário para informar quantos números deseja somar. Em seguida, solicite cada número, calcule a soma e a média.

**Pseudocódigo:**
```
ler N
soma ← 0
para i de 1 até N faça
    ler valor
    soma ← soma + valor
fim_para
media ← soma / N
escrever "Soma:", soma
escrever "Média:", media
```

**Explicação:**  
- O laço `for` é ideal quando sabemos a quantidade de repetições.
- A cada iteração, lemos um valor e somamos ao acumulador.
- Ao final, a média é a soma dividida pelo número de elementos.

---

## 3. Exercício 2: Soma e Média com `while` (Quantidade Indefinida)

**Enunciado:**  
Solicite números ao usuário até que ele digite um valor negativo. Calcule a soma e a média dos valores positivos informados.

**Pseudocódigo:**
```
soma ← 0
contador ← 0
ler valor
enquanto valor ≥ 0 faça
    soma ← soma + valor
    contador ← contador + 1
    ler valor
fim_enquanto
se contador > 0 então
    media ← soma / contador
    escrever "Soma:", soma
    escrever "Média:", media
senão
    escrever "Nenhum valor positivo foi informado."
fim_se
```

**Explicação:**  
- O laço `while` é útil quando não sabemos quantas vezes o usuário irá digitar valores.
- O laço continua enquanto o valor for positivo.
- O contador armazena quantos valores foram somados, necessário para calcular a média.

---

## 4. Exercício 3: Soma e Média com `do-while`

**Enunciado:**  
Solicite números ao usuário e some-os até que ele digite zero. Depois, mostre a soma e a média dos valores digitados (excluindo o zero).

**Pseudocódigo:**
```
soma ← 0
contador ← 0
faça
    ler valor
    se valor ≠ 0 então
        soma ← soma + valor
        contador ← contador + 1
    fim_se
enquanto valor ≠ 0
se contador > 0 então
    media ← soma / contador
    escrever "Soma:", soma
    escrever "Média:", media
senão
    escrever "Nenhum valor foi informado."
fim_se
```

**Explicação:**  
- O laço `do-while` garante que o bloco será executado pelo menos uma vez.
- O teste para encerrar o laço ocorre após a leitura do valor.
- O zero não é incluído na soma nem na contagem.

---

## 5. Boas Práticas

- **Inicialize as variáveis** de soma e contador antes do laço.
- **Valide as entradas** do usuário para evitar erros.
- **Evite divisão por zero** ao calcular a média, verificando se o contador é maior que zero.
- **Comente o código** para facilitar o entendimento.

---

## 6. Conclusão

Os exercícios de soma e média utilizando laços são excelentes para fixar o funcionamento das estruturas de repetição. Eles mostram como processar sequências de dados de forma eficiente e lógica, habilidades essenciais para qualquer programador iniciante.

Pratique adaptando esses exemplos para diferentes situações, como somar apenas números pares, calcular médias ponderadas ou processar listas de nomes e notas. Assim, você estará cada vez mais preparado para desafios reais na programação!
```
