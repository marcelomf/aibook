
# Exercícios de Classificação de Dados usando Estruturas de Decisão

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa tome diferentes caminhos de execução conforme determinadas condições. Um dos usos mais comuns dessas estruturas é a **classificação de dados**, onde, a partir de valores de entrada, o algoritmo determina a qual categoria ou grupo aquele dado pertence.

Neste tópico, você encontrará explicações, exemplos e exercícios práticos para fixar o conceito de classificação de dados utilizando estruturas de decisão como `if`, `else if`, `else` e `switch`.

---

## O que é Classificação de Dados?

Classificar dados significa analisar um valor ou conjunto de valores e determinar a qual categoria eles pertencem, de acordo com critérios previamente definidos. Por exemplo, classificar uma nota escolar em conceitos (A, B, C, D, E), identificar se um número é positivo, negativo ou zero, ou ainda determinar a faixa etária de uma pessoa.

---

## Estruturas de Decisão Aplicadas à Classificação

As principais estruturas de decisão utilizadas para classificação são:

- **if/else if/else**: Permite testar múltiplas condições em sequência.
- **switch/case**: Útil quando se deseja comparar um valor com várias opções fixas.

### Exemplo 1: Classificação de Notas

Vamos classificar uma nota (de 0 a 10) em conceitos:

```pseudocode
Leia nota

Se nota >= 9
    Escreva "Conceito A"
Senão se nota >= 7
    Escreva "Conceito B"
Senão se nota >= 5
    Escreva "Conceito C"
Senão se nota >= 3
    Escreva "Conceito D"
Senão
    Escreva "Conceito E"
Fim Se
```

### Exemplo 2: Classificação de Idade

Classifique a idade de uma pessoa em faixas etárias:

```pseudocode
Leia idade

Se idade < 12
    Escreva "Criança"
Senão se idade < 18
    Escreva "Adolescente"
Senão se idade < 60
    Escreva "Adulto"
Senão
    Escreva "Idoso"
Fim Se
```

---

## Exercícios Práticos

### Exercício 1: Classificação de Números

**Enunciado:**  
Leia um número inteiro e classifique-o como "Positivo", "Negativo" ou "Zero".

**Sugestão de Resolução:**

```pseudocode
Leia numero

Se numero > 0
    Escreva "Positivo"
Senão se numero < 0
    Escreva "Negativo"
Senão
    Escreva "Zero"
Fim Se
```

---

### Exercício 2: Classificação de IMC

**Enunciado:**  
Leia o valor do IMC (Índice de Massa Corporal) de uma pessoa e classifique conforme a tabela:

- Menor que 18,5: "Abaixo do peso"
- Entre 18,5 e 24,9: "Peso normal"
- Entre 25,0 e 29,9: "Sobrepeso"
- 30,0 ou mais: "Obesidade"

**Sugestão de Resolução:**

```pseudocode
Leia imc

Se imc < 18.5
    Escreva "Abaixo do peso"
Senão se imc < 25
    Escreva "Peso normal"
Senão se imc < 30
    Escreva "Sobrepeso"
Senão
    Escreva "Obesidade"
Fim Se
```

---

### Exercício 3: Classificação de Dias da Semana

**Enunciado:**  
Leia um número de 1 a 7 e escreva o dia da semana correspondente (1 = Domingo, 2 = Segunda, ..., 7 = Sábado). Se o número for inválido, escreva "Dia inválido".

**Sugestão de Resolução:**

```pseudocode
Leia dia

Escolha dia
    Caso 1: Escreva "Domingo"
    Caso 2: Escreva "Segunda-feira"
    Caso 3: Escreva "Terça-feira"
    Caso 4: Escreva "Quarta-feira"
    Caso 5: Escreva "Quinta-feira"
    Caso 6: Escreva "Sexta-feira"
    Caso 7: Escreva "Sábado"
    Outro caso: Escreva "Dia inválido"
Fim Escolha
```

---

## Dicas para Resolver Exercícios de Classificação

- **Defina claramente as faixas ou categorias** antes de implementar a lógica.
- **Atenção à ordem das condições**: em classificações por faixa, comece da condição mais restritiva para a mais ampla, ou vice-versa, conforme o caso.
- **Teste com diferentes valores de entrada** para garantir que todas as categorias estão sendo corretamente identificadas.
- **Utilize fluxogramas** para visualizar o fluxo de decisão antes de codificar.

---

## Conclusão

A classificação de dados usando estruturas de decisão é uma habilidade essencial para qualquer programador iniciante. Praticar com diferentes tipos de dados e critérios de classificação ajuda a consolidar o entendimento dessas estruturas e prepara o estudante para desafios mais complexos na programação.

Continue praticando com outros exemplos do seu cotidiano e tente criar seus próprios exercícios de classificação!
```
