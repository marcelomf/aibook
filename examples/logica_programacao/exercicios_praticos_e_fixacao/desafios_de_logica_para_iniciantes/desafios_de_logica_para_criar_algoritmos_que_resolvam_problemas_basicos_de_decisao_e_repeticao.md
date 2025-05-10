# Desafios de Lógica para Criar Algoritmos que Resolvem Problemas Básicos de Decisão e Repetição

A prática é fundamental para consolidar o aprendizado em lógica de programação. Após compreender os conceitos teóricos, é essencial aplicar esse conhecimento na resolução de problemas reais. Os desafios de lógica são exercícios que estimulam o raciocínio, desenvolvem a capacidade de análise e ajudam a fixar estruturas fundamentais, como decisões (if, else, switch) e repetições (for, while, do-while).

Neste tópico, você encontrará exemplos de desafios clássicos e sugestões de como abordá-los utilizando pseudocódigo e fluxogramas. Esses exercícios são ideais para quem está começando e deseja fortalecer a base lógica antes de avançar para linguagens de programação específicas.

---

## 1. Desafios de Decisão

As estruturas de decisão permitem que o algoritmo escolha diferentes caminhos de execução, dependendo de condições avaliadas durante a execução. Veja alguns exemplos:

### Desafio 1: Par ou Ímpar

**Enunciado:**  
Peça ao usuário para digitar um número inteiro e informe se ele é par ou ímpar.

**Pseudocódigo:**
```
Leia número
Se número % 2 == 0 então
    Escreva "O número é par"
Senão
    Escreva "O número é ímpar"
FimSe
```

### Desafio 2: Maior de Dois Números

**Enunciado:**  
Solicite dois números ao usuário e informe qual deles é o maior.

**Pseudocódigo:**
```
Leia número1
Leia número2
Se número1 > número2 então
    Escreva "O maior número é", número1
SenãoSe número2 > número1 então
    Escreva "O maior número é", número2
Senão
    Escreva "Os números são iguais"
FimSe
```

---

## 2. Desafios de Repetição

As estruturas de repetição permitem executar um bloco de código várias vezes, facilitando a resolução de problemas que envolvem listas, contagens ou cálculos repetitivos.

### Desafio 3: Contagem Progressiva

**Enunciado:**  
Peça ao usuário um número inteiro positivo N e exiba na tela todos os números de 1 até N.

**Pseudocódigo:**
```
Leia N
Para i de 1 até N faça
    Escreva i
FimPara
```

### Desafio 4: Soma de Números

**Enunciado:**  
Solicite ao usuário que informe 5 números e, ao final, exiba a soma deles.

**Pseudocódigo:**
```
soma <- 0
Para i de 1 até 5 faça
    Leia número
    soma <- soma + número
FimPara
Escreva "A soma é", soma
```

---

## 3. Desafios Combinando Decisão e Repetição

Muitos problemas exigem o uso combinado dessas estruturas. Veja exemplos:

### Desafio 5: Números Pares em um Intervalo

**Enunciado:**  
Peça dois números inteiros (início e fim) e exiba todos os números pares nesse intervalo.

**Pseudocódigo:**
```
Leia início
Leia fim
Para i de início até fim faça
    Se i % 2 == 0 então
        Escreva i
    FimSe
FimPara
```

### Desafio 6: Validação de Entrada

**Enunciado:**  
Solicite ao usuário uma senha até que ele digite a senha correta (por exemplo, "1234").

**Pseudocódigo:**
```
Repita
    Leia senha
    Se senha != "1234" então
        Escreva "Senha incorreta, tente novamente."
    FimSe
Até senha == "1234"
Escreva "Acesso permitido."
```

---

## 4. Dicas para Resolver Desafios de Lógica

- **Leia atentamente o enunciado:** Entenda o que está sendo pedido antes de começar a escrever o algoritmo.
- **Divida o problema:** Separe o desafio em pequenas etapas e resolva uma de cada vez.
- **Use fluxogramas:** Eles ajudam a visualizar o fluxo do algoritmo e identificar possíveis erros.
- **Teste com diferentes entradas:** Verifique se o algoritmo funciona para todos os casos possíveis.
- **Pratique regularmente:** Quanto mais desafios você resolver, mais natural será o raciocínio lógico.

---

## 5. Conclusão

Os desafios de lógica são essenciais para fixar os conceitos de decisão e repetição. Eles preparam o iniciante para enfrentar problemas mais complexos e facilitam a transição para qualquer linguagem de programação. Pratique os exemplos apresentados, crie seus próprios desafios e compartilhe soluções com outros aprendizes. Assim, você estará construindo uma base sólida para sua jornada no desenvolvimento de software.

---

**Exercício Extra:**  
Crie um algoritmo que leia 10 números e informe quantos deles são positivos, negativos e zeros.

---

> **Lembre-se:** A lógica de programação é a chave para resolver qualquer problema computacional. Domine-a e você estará pronto para aprender qualquer linguagem!