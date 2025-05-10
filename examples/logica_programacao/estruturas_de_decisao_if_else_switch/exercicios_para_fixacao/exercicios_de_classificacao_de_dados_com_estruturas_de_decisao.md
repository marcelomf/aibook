
# Exercícios de Classificação de Dados com Estruturas de Decisão

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa tome diferentes caminhos de execução conforme determinadas condições. Entre as estruturas mais utilizadas estão o `if`, `else if`, `else` e o `switch`. Uma das aplicações mais comuns dessas estruturas é a **classificação de dados**, ou seja, analisar um valor e determinar a qual categoria ele pertence.

Neste tópico, você encontrará explicações e exercícios práticos para fixar o uso das estruturas de decisão na classificação de dados. Os exemplos são apresentados em pseudocódigo, facilitando a compreensão independente da linguagem de programação escolhida futuramente.

---

## O que é Classificação de Dados?

Classificar dados significa analisar um valor (ou conjunto de valores) e determinar a qual grupo, faixa ou categoria ele pertence. Por exemplo:

- Classificar uma nota em "Aprovado" ou "Reprovado".
- Determinar a faixa etária de uma pessoa.
- Identificar o tipo de triângulo com base em seus lados.

Para realizar essas classificações, utilizamos as estruturas de decisão para comparar valores e executar diferentes blocos de código conforme o resultado das comparações.

---

## Exemplos Práticos

### 1. Classificação de Notas

**Problema:** Dada a nota de um aluno, classifique-o como "Aprovado" se a nota for maior ou igual a 6, ou "Reprovado" caso contrário.

**Pseudocódigo:**
```
leia nota
se nota >= 6 então
    escreva "Aprovado"
senão
    escreva "Reprovado"
fimse
```

---

### 2. Classificação de Faixa Etária

**Problema:** Dada a idade de uma pessoa, classifique-a em:
- "Criança" (0 a 12 anos)
- "Adolescente" (13 a 17 anos)
- "Adulto" (18 a 59 anos)
- "Idoso" (60 anos ou mais)

**Pseudocódigo:**
```
leia idade
se idade < 0 então
    escreva "Idade inválida"
senão se idade <= 12 então
    escreva "Criança"
senão se idade <= 17 então
    escreva "Adolescente"
senão se idade <= 59 então
    escreva "Adulto"
senão
    escreva "Idoso"
fimse
```

---

### 3. Classificação de Triângulos

**Problema:** Dados os comprimentos dos três lados de um triângulo, classifique-o como:
- "Equilátero" (três lados iguais)
- "Isósceles" (dois lados iguais)
- "Escaleno" (todos os lados diferentes)

**Pseudocódigo:**
```
leia lado1, lado2, lado3
se lado1 = lado2 e lado2 = lado3 então
    escreva "Equilátero"
senão se lado1 = lado2 ou lado1 = lado3 ou lado2 = lado3 então
    escreva "Isósceles"
senão
    escreva "Escaleno"
fimse
```

---

## Exercícios Propostos

1. **Classificação de Temperatura**
   - Leia uma temperatura em graus Celsius e classifique:
     - "Frio" se menor que 15
     - "Agradável" se entre 15 e 25 (inclusive)
     - "Quente" se maior que 25

2. **Classificação de Números**
   - Leia um número inteiro e classifique:
     - "Positivo" se maior que zero
     - "Negativo" se menor que zero
     - "Zero" se igual a zero

3. **Classificação de Dias da Semana**
   - Leia um número de 1 a 7 e escreva o dia correspondente (1 = Domingo, 2 = Segunda, ..., 7 = Sábado) usando a estrutura `switch`.

---

## Dicas para Resolver Exercícios de Classificação

- **Analise as condições:** Identifique claramente os limites de cada categoria.
- **Ordem das condições:** Em casos de faixas, comece pelas condições mais restritivas.
- **Utilize else if/elif:** Para evitar múltiplas verificações desnecessárias.
- **Use switch para valores fixos:** Quando a classificação depende de valores exatos, como dias da semana ou meses.

---

## Conclusão

A classificação de dados com estruturas de decisão é uma habilidade essencial para qualquer programador iniciante. Praticar esses exercícios ajuda a desenvolver o raciocínio lógico e a capacidade de estruturar soluções eficientes para problemas do dia a dia da programação. Ao dominar essas técnicas, você estará preparado para desafios mais complexos em qualquer linguagem de programação.

---
```