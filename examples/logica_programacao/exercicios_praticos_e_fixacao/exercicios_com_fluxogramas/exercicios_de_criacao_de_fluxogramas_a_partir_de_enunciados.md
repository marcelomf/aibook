# Exercícios de Criação de Fluxogramas a partir de Enunciados

A criação de fluxogramas é uma etapa fundamental no processo de aprendizagem da lógica de programação. Eles permitem visualizar, de forma gráfica, o fluxo de execução de um algoritmo, facilitando a compreensão e a identificação de possíveis melhorias ou erros lógicos. Neste tópico, você encontrará exercícios práticos que envolvem a elaboração de fluxogramas a partir de enunciados, desenvolvendo sua capacidade de análise e representação de soluções lógicas.

## Por que praticar com fluxogramas?

- **Visualização clara:** Fluxogramas tornam o raciocínio lógico mais acessível, especialmente para iniciantes.
- **Facilidade de comunicação:** São úteis para explicar algoritmos a outras pessoas, mesmo que não tenham conhecimento em programação.
- **Base para codificação:** Um fluxograma bem elaborado serve como guia para a implementação em qualquer linguagem de programação.

## Dicas para criar fluxogramas

- **Leia atentamente o enunciado:** Identifique entradas, saídas, decisões e repetições.
- **Defina os símbolos corretos:** Use retângulos para processos, losangos para decisões, paralelogramos para entrada/saída e setas para indicar o fluxo.
- **Seja objetivo:** Mantenha o fluxograma simples e direto, evitando complexidade desnecessária.
- **Teste mentalmente:** Percorra o fluxograma com exemplos para verificar se cobre todos os casos do enunciado.

---

## Exercício 1: Verificação de Número Par ou Ímpar

**Enunciado:**  
Crie um fluxograma que leia um número inteiro e informe se ele é par ou ímpar.

**Passos para resolução:**
1. Início
2. Ler o número
3. Verificar se o número é divisível por 2
4. Se sim, exibir "Par"
5. Se não, exibir "Ímpar"
6. Fim

**Sugestão de fluxograma:**

```
[Início]
   |
[Ler número]
   |
[O número % 2 == 0?]
   |         \
[Sim]      [Não]
   |           \
[Exibe "Par"] [Exibe "Ímpar"]
   |           /
   [Fim]
```

---

## Exercício 2: Cálculo da Média de Três Notas

**Enunciado:**  
Desenvolva um fluxograma que leia três notas de um aluno, calcule a média e informe se o aluno foi aprovado (média ≥ 7) ou reprovado.

**Passos para resolução:**
1. Início
2. Ler as três notas
3. Calcular a média
4. Verificar se a média é maior ou igual a 7
5. Se sim, exibir "Aprovado"
6. Se não, exibir "Reprovado"
7. Fim

**Sugestão de fluxograma:**

```
[Início]
   |
[Ler nota1, nota2, nota3]
   |
[Calcular média = (nota1 + nota2 + nota3) / 3]
   |
[Média >= 7?]
   |         \
[Sim]      [Não]
   |           \
[Exibe "Aprovado"] [Exibe "Reprovado"]
   |           /
   [Fim]
```

---

## Exercício 3: Contagem de 1 a 10

**Enunciado:**  
Elabore um fluxograma que exiba os números de 1 a 10 na tela.

**Passos para resolução:**
1. Início
2. Inicializar variável `i` com 1
3. Enquanto `i` ≤ 10, faça:
    - Exibir `i`
    - Incrementar `i` em 1
4. Fim

**Sugestão de fluxograma:**

```
[Início]
   |
[i = 1]
   |
[i <= 10?]
   |         \
[Sim]      [Não]
   |           \
[Exibe i]     [Fim]
   |
[i = i + 1]
   |
[Volta para verificação]
```

---

## Exercício 4: Soma de Números Positivos

**Enunciado:**  
Crie um fluxograma que leia números inteiros positivos até que o usuário digite zero. Ao final, exiba a soma dos números digitados.

**Passos para resolução:**
1. Início
2. Inicializar soma = 0
3. Ler número
4. Enquanto número ≠ 0:
    - Adicionar número à soma
    - Ler próximo número
5. Exibir soma
6. Fim

**Sugestão de fluxograma:**

```
[Início]
   |
[soma = 0]
   |
[Ler número]
   |
[número != 0?]
   |         \
[Sim]      [Não]
   |           \
[soma = soma + número] [Exibe soma]
   |           /
[Ler número]  [Fim]
   |
[Volta para verificação]
```

---

## Praticando

Tente criar os fluxogramas dos exercícios acima utilizando papel e caneta ou ferramentas digitais como [draw.io](https://draw.io), [Lucidchart](https://www.lucidchart.com/) ou [yEd](https://www.yworks.com/products/yed). Após desenhar, percorra cada fluxograma com exemplos práticos para garantir que a lógica está correta.

---

## Conclusão

A prática com exercícios de criação de fluxogramas a partir de enunciados é essencial para consolidar o entendimento da lógica de programação. Ao dominar essa habilidade, você estará mais preparado para analisar problemas, estruturar soluções e implementar algoritmos em qualquer linguagem de programação. Continue praticando com diferentes tipos de problemas para aprimorar ainda mais sua capacidade de raciocínio lógico!