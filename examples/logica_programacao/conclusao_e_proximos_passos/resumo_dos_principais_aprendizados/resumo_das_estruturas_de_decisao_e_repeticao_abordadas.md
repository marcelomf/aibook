
## Resumo das Estruturas de Decisão e Repetição

Ao longo deste ebook, exploramos as **estruturas de decisão** e **estruturas de repetição**, elementos fundamentais da lógica de programação. Compreender e saber aplicar essas estruturas é essencial para criar algoritmos eficientes e resolver problemas de forma lógica e estruturada. A seguir, apresentamos um resumo dos principais conceitos abordados:

---

### Estruturas de Decisão

As estruturas de decisão permitem que o algoritmo tome diferentes caminhos de execução, de acordo com condições estabelecidas. Elas são essenciais para que o programa possa reagir a diferentes situações e dados de entrada.

#### 1. **If / Else**

A estrutura `if` (se) avalia uma condição. Se a condição for verdadeira, um bloco de código é executado; caso contrário, o bloco `else` (senão) pode ser executado.

**Exemplo em pseudocódigo:**
```
se idade >= 18 então
    escreva("Você é maior de idade")
senão
    escreva("Você é menor de idade")
fimse
```

#### 2. **Else If (Senão Se)**

Permite testar múltiplas condições em sequência, executando o bloco correspondente à primeira condição verdadeira.

**Exemplo em pseudocódigo:**
```
se nota >= 7 então
    escreva("Aprovado")
senão se nota >= 5 então
    escreva("Recuperação")
senão
    escreva("Reprovado")
fimse
```

#### 3. **Switch / Case (Escolha / Caso)**

Utilizada quando há várias alternativas possíveis para uma mesma variável. Torna o código mais organizado quando há muitas condições relacionadas ao mesmo valor.

**Exemplo em pseudocódigo:**
```
escolha diaSemana
    caso 1:
        escreva("Domingo")
    caso 2:
        escreva("Segunda-feira")
    ...
    caso 7:
        escreva("Sábado")
    padrão:
        escreva("Dia inválido")
fimescolha
```

---

### Estruturas de Repetição

As estruturas de repetição permitem executar um bloco de código várias vezes, de acordo com uma condição. São fundamentais para automatizar tarefas repetitivas e processar grandes volumes de dados.

#### 1. **For (Para)**

Usada quando se sabe exatamente o número de repetições. Ideal para percorrer sequências, listas ou intervalos numéricos.

**Exemplo em pseudocódigo:**
```
para i de 1 até 10 faça
    escreva(i)
fimpara
```

#### 2. **While (Enquanto)**

Executa o bloco de código enquanto uma condição for verdadeira. O teste é feito antes de cada repetição.

**Exemplo em pseudocódigo:**
```
enquanto contador < 5 faça
    escreva("Contador: ", contador)
    contador = contador + 1
fimenquanto
```

#### 3. **Do-While (Repita-Até)**

Semelhante ao `while`, mas a condição é testada após a execução do bloco, garantindo que o código seja executado pelo menos uma vez.

**Exemplo em pseudocódigo:**
```
repita
    escreva("Digite um número positivo:")
    leia(numero)
até numero > 0
```

---

### Considerações Finais

O domínio das estruturas de decisão e repetição é indispensável para qualquer programador iniciante. Elas permitem criar algoritmos flexíveis, capazes de lidar com diferentes cenários e automatizar tarefas. Ao praticar com exemplos, pseudocódigo e fluxogramas, você estará preparado para aplicar esses conceitos em qualquer linguagem de programação, tornando-se apto a resolver problemas de forma lógica e eficiente.

Continue praticando e explorando novos desafios para consolidar seu aprendizado!
```
