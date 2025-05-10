# Desafios de Lógica Utilizando if, else e switch em Pseudocódigo

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que algoritmos tomem diferentes caminhos de execução conforme determinadas condições. Entre as principais estruturas de decisão, destacam-se o `if`, o `else` e o `switch`. Neste tópico, vamos explorar como aplicar essas estruturas em pseudocódigo, apresentando desafios práticos para fixação do conteúdo.

---

## 1. Revisão das Estruturas de Decisão

- **if**: Executa um bloco de comandos se uma condição for verdadeira.
- **else**: Executa um bloco alternativo caso a condição do `if` seja falsa.
- **switch**: Permite selecionar entre múltiplas opções, facilitando a escolha entre vários caminhos possíveis.

---

## 2. Exemplos Práticos em Pseudocódigo

### Exemplo 1: Verificação de Número Par ou Ímpar

```pseudocode
INICIO
    LEIA numero
    SE numero % 2 = 0 ENTAO
        ESCREVA "O número é par."
    SENAO
        ESCREVA "O número é ímpar."
    FIMSE
FIM
```

---

### Exemplo 2: Classificação de Notas

```pseudocode
INICIO
    LEIA nota
    SE nota >= 7 ENTAO
        ESCREVA "Aprovado"
    SENAO SE nota >= 5 ENTAO
        ESCREVA "Recuperação"
    SENAO
        ESCREVA "Reprovado"
    FIMSE
FIM
```

---

### Exemplo 3: Menu de Opções com switch

```pseudocode
INICIO
    ESCREVA "Escolha uma opção:"
    ESCREVA "1 - Cadastrar"
    ESCREVA "2 - Alterar"
    ESCREVA "3 - Excluir"
    LEIA opcao

    ESCOLHA opcao
        CASO 1:
            ESCREVA "Opção Cadastrar selecionada."
        CASO 2:
            ESCREVA "Opção Alterar selecionada."
        CASO 3:
            ESCREVA "Opção Excluir selecionada."
        CASO CONTRARIO:
            ESCREVA "Opção inválida."
    FIMESCOLHA
FIM
```

---

## 3. Desafios Propostos

### Desafio 1: Calculadora Simples

**Enunciado:**  
Crie um pseudocódigo que leia dois números e uma operação (`+`, `-`, `*`, `/`). Utilize `if`, `else` ou `switch` para realizar a operação escolhida e exibir o resultado.

**Solução:**

```pseudocode
INICIO
    LEIA numero1
    LEIA numero2
    LEIA operacao

    ESCOLHA operacao
        CASO "+":
            resultado <- numero1 + numero2
        CASO "-":
            resultado <- numero1 - numero2
        CASO "*":
            resultado <- numero1 * numero2
        CASO "/":
            SE numero2 != 0 ENTAO
                resultado <- numero1 / numero2
            SENAO
                ESCREVA "Divisão por zero não permitida."
                PARE
            FIMSE
        CASO CONTRARIO:
            ESCREVA "Operação inválida."
            PARE
    FIMESCOLHA

    ESCREVA "Resultado: ", resultado
FIM
```

---

### Desafio 2: Classificação de Idade

**Enunciado:**  
Leia a idade de uma pessoa e informe se ela é criança (0-12), adolescente (13-17), adulto (18-59) ou idoso (60+).

**Solução:**

```pseudocode
INICIO
    LEIA idade
    SE idade >= 0 E idade <= 12 ENTAO
        ESCREVA "Criança"
    SENAO SE idade >= 13 E idade <= 17 ENTAO
        ESCREVA "Adolescente"
    SENAO SE idade >= 18 E idade <= 59 ENTAO
        ESCREVA "Adulto"
    SENAO SE idade >= 60 ENTAO
        ESCREVA "Idoso"
    SENAO
        ESCREVA "Idade inválida."
    FIMSE
FIM
```

---

### Desafio 3: Sistema de Notas com switch

**Enunciado:**  
Leia uma letra (A, B, C, D, E) e informe o conceito correspondente:  
- A: Excelente  
- B: Bom  
- C: Regular  
- D: Ruim  
- E: Péssimo

**Solução:**

```pseudocode
INICIO
    LEIA conceito

    ESCOLHA conceito
        CASO "A":
            ESCREVA "Excelente"
        CASO "B":
            ESCREVA "Bom"
        CASO "C":
            ESCREVA "Regular"
        CASO "D":
            ESCREVA "Ruim"
        CASO "E":
            ESCREVA "Péssimo"
        CASO CONTRARIO:
            ESCREVA "Conceito inválido."
    FIMESCOLHA
FIM
```

---

## 4. Dicas para Resolver Desafios de Lógica

- **Leia atentamente o enunciado** para entender o problema.
- **Identifique as condições** que precisam ser avaliadas.
- **Escolha a estrutura de decisão adequada** (`if`, `else` ou `switch`).
- **Teste diferentes entradas** para garantir que todas as possibilidades estão cobertas.
- **Comente seu pseudocódigo** para facilitar o entendimento.

---

## 5. Conclusão

Praticar desafios de lógica utilizando estruturas de decisão é essencial para desenvolver o raciocínio lógico e a capacidade de resolver problemas computacionais. O domínio de `if`, `else` e `switch` em pseudocódigo prepara o iniciante para transitar com facilidade para qualquer linguagem de programação, tornando a aprendizagem mais sólida e eficiente.

---

**Exercite!**  
Crie seus próprios desafios e tente resolvê-los utilizando as estruturas apresentadas. Quanto mais você praticar, mais natural será o desenvolvimento de algoritmos eficientes e bem estruturados.