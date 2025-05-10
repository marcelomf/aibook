
# Exercícios de Identificação e Correção de Erros em Decisões

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa escolha diferentes caminhos de execução com base em condições. No entanto, é comum que iniciantes cometam erros ao implementar essas estruturas, seja por problemas de sintaxe, lógica ou compreensão das condições. Por isso, a identificação e correção de erros em decisões é uma habilidade essencial para quem está aprendendo a programar.

Neste tópico, você encontrará exercícios práticos que simulam situações reais onde há erros em estruturas de decisão. O objetivo é analisar o código apresentado, identificar os problemas e propor as correções necessárias. Esse tipo de exercício desenvolve o raciocínio lógico, a atenção aos detalhes e a capacidade de depuração (debugging), competências indispensáveis para qualquer programador.

---

## Exercício 1: Corrigindo a Estrutura If-Else

**Enunciado:**  
Analise o pseudocódigo abaixo e identifique o erro na estrutura de decisão. Em seguida, escreva a versão corrigida.

```pseudocode
Leia idade
Se idade > 18
    Escreva "Maior de idade"
Senao
    Escreva "Menor de idade"
FimSe
```

**Erro:**  
O operador `>` está sendo usado para verificar se a idade é maior que 18, mas, em muitos contextos, a maioridade é considerada a partir dos 18 anos completos. Portanto, a condição correta deve ser `idade >= 18`.

**Correção:**

```pseudocode
Leia idade
Se idade >= 18
    Escreva "Maior de idade"
Senao
    Escreva "Menor de idade"
FimSe
```

---

## Exercício 2: Corrigindo o Uso do Else If

**Enunciado:**  
O seguinte pseudocódigo apresenta um erro lógico. Identifique e corrija:

```pseudocode
Leia nota
Se nota >= 7
    Escreva "Aprovado"
SenaoSe nota >= 5
    Escreva "Recuperação"
Senao
    Escreva "Reprovado"
FimSe
```

**Erro:**  
A condição `SenaoSe nota >= 5` não considera que notas maiores ou iguais a 7 já foram tratadas. Portanto, a condição está correta, mas é importante garantir que as faixas não se sobreponham. O código está correto, mas pode ser melhorado para maior clareza.

**Sugestão de melhoria:**

```pseudocode
Leia nota
Se nota >= 7
    Escreva "Aprovado"
SenaoSe nota >= 5 e nota < 7
    Escreva "Recuperação"
Senao
    Escreva "Reprovado"
FimSe
```

---

## Exercício 3: Corrigindo o Uso do Switch/Case

**Enunciado:**  
O pseudocódigo abaixo contém um erro na estrutura de decisão múltipla. Identifique e corrija:

```pseudocode
Leia opcao
Escolha opcao
    Caso 1:
        Escreva "Novo Jogo"
    Caso 2:
        Escreva "Carregar Jogo"
    Caso 3:
        Escreva "Sair"
FimEscolha
```

**Erro:**  
Falta o tratamento para opções inválidas (caso o usuário digite um valor diferente de 1, 2 ou 3).

**Correção:**

```pseudocode
Leia opcao
Escolha opcao
    Caso 1:
        Escreva "Novo Jogo"
    Caso 2:
        Escreva "Carregar Jogo"
    Caso 3:
        Escreva "Sair"
    Caso Contrario:
        Escreva "Opção inválida"
FimEscolha
```

---

## Exercício 4: Corrigindo Condições Aninhadas

**Enunciado:**  
O código a seguir apresenta um erro de lógica. Identifique e corrija:

```pseudocode
Leia numero
Se numero > 0
    Escreva "Positivo"
SenaoSe numero < 0
    Escreva "Negativo"
SenaoSe numero == 0
    Escreva "Zero"
FimSe
```

**Erro:**  
A última condição `SenaoSe numero == 0` é desnecessária, pois se o número não for maior nem menor que zero, só pode ser igual a zero. Pode ser substituída por um simples `Senao`.

**Correção:**

```pseudocode
Leia numero
Se numero > 0
    Escreva "Positivo"
SenaoSe numero < 0
    Escreva "Negativo"
Senao
    Escreva "Zero"
FimSe
```

---

## Dicas para Identificação e Correção de Erros

- **Leia atentamente as condições:** Certifique-se de que as condições cobrem todos os casos possíveis e não se sobrepõem.
- **Verifique a ordem das condições:** Em estruturas aninhadas, a ordem pode afetar o resultado.
- **Teste com diferentes valores:** Simule entradas variadas para garantir que todas as possibilidades são tratadas corretamente.
- **Use comentários:** Comente o código para explicar a lógica, facilitando a identificação de possíveis erros.

---

## Conclusão

A prática de identificar e corrigir erros em estruturas de decisão é fundamental para o desenvolvimento de algoritmos corretos e eficientes. Ao exercitar essa habilidade, você se tornará mais atento aos detalhes e estará mais preparado para resolver problemas reais na programação. Continue praticando com diferentes exemplos e, sempre que possível, revise e teste seu código para garantir seu funcionamento adequado.
```
