# Testes de Múltiplas Condições em Pseudocódigo

Ao desenvolver algoritmos, frequentemente nos deparamos com situações em que precisamos tomar decisões baseadas em mais de uma condição. Saber como estruturar testes de múltiplas condições é fundamental para criar programas eficientes e corretos. Neste tópico, vamos explorar como realizar esses testes em pseudocódigo, utilizando operadores lógicos e estruturas de decisão como `if`, `else if` e `switch`.

---

## 1. Operadores Lógicos

Para testar múltiplas condições, utilizamos operadores lógicos que permitem combinar ou comparar diferentes expressões. Os principais operadores são:

- **E (AND)**: Verdadeiro apenas se todas as condições forem verdadeiras.
- **OU (OR)**: Verdadeiro se pelo menos uma das condições for verdadeira.
- **NÃO (NOT)**: Inverte o valor lógico da condição.

**Exemplo:**
```pseudocode
SE (idade >= 18) E (possui_carteira = VERDADEIRO) ENTÃO
    ESCREVA "Pode dirigir"
SENÃO
    ESCREVA "Não pode dirigir"
FIMSE
```

---

## 2. Estrutura `if` com Múltiplas Condições

A estrutura `if` permite testar uma ou mais condições. Para múltiplas condições, basta utilizar os operadores lógicos.

**Exemplo:**
```pseudocode
SE (nota >= 7) E (frequencia >= 75) ENTÃO
    ESCREVA "Aprovado"
SENÃO
    ESCREVA "Reprovado"
FIMSE
```
Neste exemplo, o aluno só será aprovado se **ambas** as condições forem verdadeiras.

---

## 3. Estrutura `if-else if-else`

Quando há mais de dois caminhos possíveis, podemos usar `else if` (ou `SENÃO SE` em alguns padrões de pseudocódigo) para testar múltiplas condições em sequência.

**Exemplo:**
```pseudocode
SE (media >= 7) ENTÃO
    ESCREVA "Aprovado"
SENÃO SE (media >= 5) E (media < 7) ENTÃO
    ESCREVA "Recuperação"
SENÃO
    ESCREVA "Reprovado"
FIMSE
```
Aqui, o algoritmo avalia as condições em ordem. Assim que uma delas for satisfeita, as demais não são testadas.

---

## 4. Estrutura `switch` para Múltiplos Casos

O `switch` (ou `ESCOLHA` em alguns padrões) é útil quando precisamos comparar uma mesma variável com vários valores possíveis.

**Exemplo:**
```pseudocode
ESCOLHA opcao
    CASO 1:
        ESCREVA "Novo Jogo"
    CASO 2:
        ESCREVA "Carregar Jogo"
    CASO 3:
        ESCREVA "Sair"
    CASO CONTRARIO:
        ESCREVA "Opção inválida"
FIMESCOLHA
```
O `switch` é ideal para situações em que há várias alternativas exclusivas.

---

## 5. Boas Práticas

- **Clareza:** Escreva condições de forma clara e objetiva.
- **Parênteses:** Use parênteses para deixar explícita a ordem de avaliação das condições.
- **Evite Redundâncias:** Não repita condições desnecessariamente.
- **Comente:** Se a lógica for complexa, adicione comentários explicativos.

---

## 6. Exercício Prático

**Problema:** Dado um número, verifique se ele é positivo, negativo ou zero **e** se é par ou ímpar.

**Solução em pseudocódigo:**
```pseudocode
LEIA numero

SE (numero > 0) ENTÃO
    ESCREVA "Positivo"
SENÃO SE (numero < 0) ENTÃO
    ESCREVA "Negativo"
SENÃO
    ESCREVA "Zero"
FIMSE

SE (numero % 2 = 0) ENTÃO
    ESCREVA "Par"
SENÃO
    ESCREVA "Ímpar"
FIMSE
```

---

## 7. Conclusão

Testar múltiplas condições é uma habilidade essencial na lógica de programação. O uso correto de operadores lógicos e estruturas de decisão permite criar algoritmos mais robustos e flexíveis. Pratique a escrita de pseudocódigos com diferentes combinações de condições para aprimorar sua capacidade de análise e resolução de problemas.

---

**Dica:** Sempre que possível, desenhe o fluxograma correspondente ao seu pseudocódigo para visualizar melhor o fluxo de decisões!