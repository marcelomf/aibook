# Exercícios de Depuração: Identificação e Correção de Erros em Algoritmos

A depuração (ou **debugging**) é uma das habilidades mais importantes para quem está aprendendo lógica de programação. Identificar e corrigir erros em algoritmos é fundamental para garantir que as soluções desenvolvidas funcionem corretamente e de forma eficiente. Neste tópico, você encontrará explicações, dicas e exercícios práticos para aprimorar sua capacidade de depuração.

---

## O que é Depuração?

Depuração é o processo de encontrar, analisar e corrigir erros (bugs) em algoritmos ou programas. Esses erros podem ser de diversos tipos, como:

- **Erros de sintaxe:** Quando a estrutura do pseudocódigo ou do programa está incorreta.
- **Erros lógicos:** Quando o algoritmo executa, mas não produz o resultado esperado.
- **Erros de execução:** Quando o algoritmo para de funcionar devido a condições inesperadas (ex: divisão por zero).

---

## Por que praticar depuração?

- **Desenvolve o raciocínio lógico:** Ao buscar a origem do erro, você aprende a analisar cada etapa do algoritmo.
- **Aumenta a autonomia:** Você se torna capaz de resolver problemas sem depender de terceiros.
- **Prepara para o mundo real:** No desenvolvimento de software, a depuração é uma atividade constante.

---

## Dicas para Depurar Algoritmos

1. **Leia o algoritmo com atenção:** Muitas vezes, o erro está em um detalhe despercebido.
2. **Teste com diferentes entradas:** Use valores variados para verificar se o algoritmo responde corretamente.
3. **Utilize fluxogramas:** Visualizar o fluxo pode ajudar a identificar onde o erro ocorre.
4. **Divida o problema:** Analise partes menores do algoritmo para isolar o erro.
5. **Explique para alguém (ou para si mesmo):** O método “Rubber Duck Debugging” consiste em explicar o código em voz alta, o que pode ajudar a perceber inconsistências.

---

## Exercícios Práticos de Depuração

A seguir, apresentamos alguns exercícios para você praticar a identificação e correção de erros em algoritmos escritos em pseudocódigo.

---

### Exercício 1: Soma de Números

**Pseudocódigo com erro:**

```plaintext
Início
    Leia A, B
    Soma <- A - B
    Escreva "A soma é: ", Soma
Fim
```

**Tarefa:**  
Identifique e corrija o erro para que o algoritmo calcule corretamente a soma de dois números.

---

### Exercício 2: Verificação de Número Par

**Pseudocódigo com erro:**

```plaintext
Início
    Leia N
    Se N % 2 = 1 então
        Escreva "O número é par"
    Senão
        Escreva "O número é ímpar"
Fim
```

**Tarefa:**  
Encontre o erro lógico e corrija para que o algoritmo identifique corretamente se o número é par ou ímpar.

---

### Exercício 3: Contagem Regressiva

**Pseudocódigo com erro:**

```plaintext
Início
    Para i de 10 até 1 faça
        Escreva i
    FimPara
Fim
```

**Tarefa:**  
O algoritmo não executa a contagem regressiva corretamente. Identifique o problema e corrija.

---

### Exercício 4: Média de Três Números

**Pseudocódigo com erro:**

```plaintext
Início
    Leia X, Y, Z
    Média <- X + Y + Z / 3
    Escreva "A média é: ", Média
Fim
```

**Tarefa:**  
O cálculo da média está incorreto devido à ordem das operações. Corrija o algoritmo.

---

## Respostas Comentadas

<details>
<summary><strong>Exercício 1 - Resposta</strong></summary>

**Erro:** O operador usado foi de subtração (-) ao invés de soma (+).

**Correção:**
```plaintext
Início
    Leia A, B
    Soma <- A + B
    Escreva "A soma é: ", Soma
Fim
```
</details>

<details>
<summary><strong>Exercício 2 - Resposta</strong></summary>

**Erro:** A condição está invertida. Números pares têm resto 0 na divisão por 2.

**Correção:**
```plaintext
Início
    Leia N
    Se N % 2 = 0 então
        Escreva "O número é par"
    Senão
        Escreva "O número é ímpar"
Fim
```
</details>

<details>
<summary><strong>Exercício 3 - Resposta</strong></summary>

**Erro:** O comando "Para" normalmente incrementa, não decrementa. É necessário especificar o passo.

**Correção:**
```plaintext
Início
    Para i de 10 até 1 passo -1 faça
        Escreva i
    FimPara
Fim
```
</details>

<details>
<summary><strong>Exercício 4 - Resposta</strong></summary>

**Erro:** A divisão está sendo feita apenas no Z, devido à precedência dos operadores.

**Correção:**
```plaintext
Início
    Leia X, Y, Z
    Média <- (X + Y + Z) / 3
    Escreva "A média é: ", Média
Fim
```
</details>

---

## Conclusão

A prática de depuração é essencial para o desenvolvimento de habilidades em lógica de programação. Ao identificar e corrigir erros, você aprimora seu raciocínio lógico e se prepara para desafios mais complexos no futuro. Continue praticando com diferentes algoritmos e, sempre que encontrar um erro, tente entender sua causa antes de buscar a solução.

---

**Dica:** Sempre que possível, escreva seus próprios algoritmos e peça para colegas revisarem. A troca de experiências é uma excelente forma de aprender a depurar!