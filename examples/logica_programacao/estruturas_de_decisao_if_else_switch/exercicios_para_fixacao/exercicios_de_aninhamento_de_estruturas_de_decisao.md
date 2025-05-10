
# Exercícios de Aninhamento de Estruturas de Decisão

O aninhamento de estruturas de decisão é um conceito fundamental na lógica de programação. Ele ocorre quando uma estrutura de decisão (como `if`, `else if`, `else` ou `switch`) está contida dentro de outra, permitindo a criação de fluxos de decisão mais complexos e detalhados. Com o aninhamento, é possível tratar múltiplas condições e cenários, tornando os algoritmos mais flexíveis e robustos.

A seguir, apresentamos uma série de exercícios práticos para fixação do conceito de aninhamento de estruturas de decisão. Os exercícios utilizam pseudocódigo e, quando pertinente, fluxogramas, para facilitar o entendimento.

---

## Exercício 1: Classificação de Triângulos

**Enunciado:**  
Receba como entrada os comprimentos dos três lados de um triângulo. Determine e exiba se o triângulo é **equilátero** (todos os lados iguais), **isósceles** (dois lados iguais) ou **escaleno** (todos os lados diferentes). Antes de classificar, verifique se os valores formam um triângulo válido (a soma de dois lados deve ser maior que o terceiro).

**Pseudocódigo:**
```
Leia lado1, lado2, lado3

Se (lado1 + lado2 > lado3) E (lado1 + lado3 > lado2) E (lado2 + lado3 > lado1) então
    Se (lado1 = lado2) E (lado2 = lado3) então
        Escreva "Triângulo Equilátero"
    Senão
        Se (lado1 = lado2) OU (lado1 = lado3) OU (lado2 = lado3) então
            Escreva "Triângulo Isósceles"
        Senão
            Escreva "Triângulo Escaleno"
        FimSe
    FimSe
Senão
    Escreva "Os valores não formam um triângulo"
FimSe
```

---

## Exercício 2: Sistema de Notas Escolar

**Enunciado:**  
Receba a nota final de um aluno (0 a 10) e informe o conceito conforme a tabela abaixo. Se a nota for inválida, exiba uma mensagem de erro.

| Nota         | Conceito |
|--------------|----------|
| 9.0 a 10.0   | A        |
| 7.0 a 8.9    | B        |
| 5.0 a 6.9    | C        |
| 3.0 a 4.9    | D        |
| 0.0 a 2.9    | E        |

**Pseudocódigo:**
```
Leia nota

Se (nota >= 0) E (nota <= 10) então
    Se (nota >= 9) então
        Escreva "Conceito A"
    Senão
        Se (nota >= 7) então
            Escreva "Conceito B"
        Senão
            Se (nota >= 5) então
                Escreva "Conceito C"
            Senão
                Se (nota >= 3) então
                    Escreva "Conceito D"
                Senão
                    Escreva "Conceito E"
                FimSe
            FimSe
        FimSe
    FimSe
Senão
    Escreva "Nota inválida"
FimSe
```

---

## Exercício 3: Calculadora Simples com Switch e If

**Enunciado:**  
Receba dois números e uma operação (`+`, `-`, `*`, `/`). Utilize um `switch` para identificar a operação e, dentro de cada caso, use um `if` para tratar divisões por zero.

**Pseudocódigo:**
```
Leia num1, num2, operacao

Switch (operacao)
    Caso '+':
        resultado = num1 + num2
        Escreva resultado
    Caso '-':
        resultado = num1 - num2
        Escreva resultado
    Caso '*':
        resultado = num1 * num2
        Escreva resultado
    Caso '/':
        Se (num2 != 0) então
            resultado = num1 / num2
            Escreva resultado
        Senão
            Escreva "Erro: divisão por zero"
        FimSe
    Padrão:
        Escreva "Operação inválida"
FimSwitch
```

---

## Exercício 4: Verificação de Ano Bissexto

**Enunciado:**  
Receba um ano e informe se ele é bissexto. Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.

**Pseudocódigo:**
```
Leia ano

Se (ano % 4 = 0) então
    Se (ano % 100 = 0) então
        Se (ano % 400 = 0) então
            Escreva "Ano bissexto"
        Senão
            Escreva "Ano não bissexto"
        FimSe
    Senão
        Escreva "Ano bissexto"
    FimSe
Senão
    Escreva "Ano não bissexto"
FimSe
```

---

## Dicas para Resolver Exercícios de Aninhamento

- **Organize o raciocínio:** Antes de programar, desenhe o fluxograma ou escreva o pseudocódigo.
- **Evite aninhamentos desnecessários:** Sempre que possível, simplifique as condições para tornar o código mais legível.
- **Teste todos os caminhos:** Certifique-se de que todas as possibilidades de entrada são tratadas.
- **Comente o código:** Explique o propósito de cada bloco de decisão, especialmente em aninhamentos complexos.

---

## Conclusão

O domínio do aninhamento de estruturas de decisão é essencial para resolver problemas que exigem múltiplas verificações e condições. Praticar com exercícios variados, como os apresentados acima, ajuda a desenvolver o raciocínio lógico e prepara o estudante para desafios mais avançados em qualquer linguagem de programação.

```
