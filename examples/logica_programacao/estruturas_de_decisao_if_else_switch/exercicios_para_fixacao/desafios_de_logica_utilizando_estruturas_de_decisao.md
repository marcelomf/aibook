
# Desafios de Lógica Utilizando Estruturas de Decisão

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que um algoritmo tome diferentes caminhos de execução conforme determinadas condições. Os comandos `if`, `else` e `switch` são amplamente utilizados para implementar essas decisões. Para fixar o aprendizado, é essencial praticar com desafios que estimulem o raciocínio lógico e a aplicação correta dessas estruturas.

## Por que praticar com desafios?

Resolver desafios de lógica utilizando estruturas de decisão ajuda a:

- **Consolidar o entendimento** sobre como funcionam as condições e os fluxos alternativos em um algoritmo.
- **Desenvolver o raciocínio lógico**, essencial para a programação.
- **Preparar para problemas reais**, já que a tomada de decisão é parte central do desenvolvimento de software.

## Exemplos de Desafios

A seguir, apresentamos alguns desafios práticos para você exercitar o uso das estruturas de decisão. Os exemplos são apresentados em pseudocódigo, facilitando a compreensão independente da linguagem de programação.

---

### 1. Verificação de Número Par ou Ímpar

**Descrição:**  
Peça ao usuário para digitar um número inteiro e informe se ele é par ou ímpar.

**Pseudocódigo:**
```
Leia numero
Se numero % 2 == 0 então
    Escreva "O número é par."
Senão
    Escreva "O número é ímpar."
FimSe
```

---

### 2. Classificação de Idade

**Descrição:**  
Solicite a idade de uma pessoa e classifique-a como "Criança" (0-12), "Adolescente" (13-17), "Adulto" (18-59) ou "Idoso" (60+).

**Pseudocódigo:**
```
Leia idade
Se idade < 0 então
    Escreva "Idade inválida."
SenãoSe idade <= 12 então
    Escreva "Criança"
SenãoSe idade <= 17 então
    Escreva "Adolescente"
SenãoSe idade <= 59 então
    Escreva "Adulto"
Senão
    Escreva "Idoso"
FimSe
```

---

### 3. Calculadora Simples com Switch

**Descrição:**  
Peça dois números e uma operação (+, -, *, /) ao usuário. Use `switch` para realizar a operação escolhida.

**Pseudocódigo:**
```
Leia numero1
Leia numero2
Leia operacao

Switch operacao
    Caso "+"
        resultado = numero1 + numero2
    Caso "-"
        resultado = numero1 - numero2
    Caso "*"
        resultado = numero1 * numero2
    Caso "/"
        Se numero2 != 0 então
            resultado = numero1 / numero2
        Senão
            Escreva "Divisão por zero não permitida."
        FimSe
    Padrão
        Escreva "Operação inválida."
FimSwitch

Se operacao for válida então
    Escreva "Resultado: ", resultado
FimSe
```

---

### 4. Aprovação de Aluno

**Descrição:**  
Solicite a nota final de um aluno. Se a nota for maior ou igual a 7, escreva "Aprovado". Se for entre 5 e 6.9, escreva "Recuperação". Caso contrário, escreva "Reprovado".

**Pseudocódigo:**
```
Leia nota
Se nota >= 7 então
    Escreva "Aprovado"
SenãoSe nota >= 5 então
    Escreva "Recuperação"
Senão
    Escreva "Reprovado"
FimSe
```

---

### 5. Identificação de Triângulo

**Descrição:**  
Peça três valores correspondentes aos lados de um triângulo. Verifique se formam um triângulo e, em caso afirmativo, classifique-o como equilátero, isósceles ou escaleno.

**Pseudocódigo:**
```
Leia lado1, lado2, lado3
Se (lado1 + lado2 > lado3) E (lado1 + lado3 > lado2) E (lado2 + lado3 > lado1) então
    Se lado1 == lado2 E lado2 == lado3 então
        Escreva "Triângulo Equilátero"
    SenãoSe lado1 == lado2 OU lado1 == lado3 OU lado2 == lado3 então
        Escreva "Triângulo Isósceles"
    Senão
        Escreva "Triângulo Escaleno"
    FimSe
Senão
    Escreva "Não é um triângulo"
FimSe
```

---

## Dicas para Resolver os Desafios

- **Leia atentamente o enunciado** e identifique as condições necessárias.
- **Desenhe fluxogramas** para visualizar o fluxo de decisão.
- **Teste diferentes entradas** para garantir que todas as possibilidades foram contempladas.
- **Comente seu código** para facilitar o entendimento.

## Conclusão

Praticar com desafios de lógica utilizando estruturas de decisão é essencial para desenvolver habilidades sólidas em programação. Ao dominar o uso de `if`, `else` e `switch`, você estará preparado para resolver problemas cada vez mais complexos e avançar no aprendizado de qualquer linguagem de programação.

> **Exercite-se!** Escolha um dos desafios acima, escreva o pseudocódigo, desenhe o fluxograma e, se possível, implemente em uma linguagem de sua escolha.
```
