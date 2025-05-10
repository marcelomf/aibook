
# Exercícios de if/else if/else: Múltiplas Condições

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa tome diferentes caminhos de execução conforme determinadas condições. Entre essas estruturas, o uso combinado de `if`, `else if` e `else` é essencial para lidar com múltiplas possibilidades em um mesmo bloco de código.

Neste tópico, você encontrará explicações, exemplos e exercícios práticos para fixar o uso dessas estruturas em situações com múltiplas condições.

---

## Revisando a Estrutura if/else if/else

A estrutura básica para múltiplas condições é:

```pseudo
se (condição1) então
    // bloco de código 1
senão se (condição2) então
    // bloco de código 2
senão
    // bloco de código 3
fim se
```

- **if**: avalia a primeira condição.
- **else if**: avalia condições adicionais, caso as anteriores sejam falsas.
- **else**: executa um bloco caso nenhuma das condições anteriores seja verdadeira.

---

## Exemplo Prático

Vamos supor que você queira classificar a faixa etária de uma pessoa com base em sua idade:

```pseudo
leia idade

se (idade < 12) então
    escreva "Criança"
senão se (idade < 18) então
    escreva "Adolescente"
senão se (idade < 60) então
    escreva "Adulto"
senão
    escreva "Idoso"
fim se
```

Neste exemplo, o programa verifica cada condição em ordem. Assim que uma delas for verdadeira, o bloco correspondente é executado e as demais são ignoradas.

---

## Exercícios Propostos

### 1. Classificação de Notas

**Enunciado:**  
Leia uma nota (de 0 a 10) e informe o conceito correspondente:
- Nota menor que 5: "Insuficiente"
- Nota entre 5 (inclusive) e 7: "Regular"
- Nota entre 7 (inclusive) e 9: "Bom"
- Nota igual ou maior que 9: "Excelente"

**Pseudocódigo:**
```pseudo
leia nota

se (nota < 5) então
    escreva "Insuficiente"
senão se (nota < 7) então
    escreva "Regular"
senão se (nota < 9) então
    escreva "Bom"
senão
    escreva "Excelente"
fim se
```

---

### 2. Calculadora de Tarifas

**Enunciado:**  
Dado o valor do consumo de energia elétrica (em kWh), aplique a seguinte tarifa:
- Até 100 kWh: R$ 0,50 por kWh
- De 101 a 200 kWh: R$ 0,70 por kWh
- Acima de 200 kWh: R$ 0,90 por kWh

**Pseudocódigo:**
```pseudo
leia consumo

se (consumo <= 100) então
    tarifa = 0.50
senão se (consumo <= 200) então
    tarifa = 0.70
senão
    tarifa = 0.90
fim se

valor_total = consumo * tarifa
escreva "Valor a pagar: R$ ", valor_total
```

---

### 3. Verificação de Triângulo

**Enunciado:**  
Dadas três medidas, verifique se formam um triângulo e classifique-o:
- Se todos os lados são iguais: "Equilátero"
- Se dois lados são iguais: "Isósceles"
- Se todos os lados são diferentes: "Escaleno"
- Se não formam um triângulo: "Não é um triângulo"

**Dica:** Para formar um triângulo, a soma de dois lados deve ser maior que o terceiro, para todos os lados.

**Pseudocódigo:**
```pseudo
leia a, b, c

se (a < b + c) e (b < a + c) e (c < a + b) então
    se (a == b) e (b == c) então
        escreva "Equilátero"
    senão se (a == b) ou (a == c) ou (b == c) então
        escreva "Isósceles"
    senão
        escreva "Escaleno"
    fim se
senão
    escreva "Não é um triângulo"
fim se
```

---

## Dicas para Resolver Exercícios com Múltiplas Condições

- **Ordem das condições:** Sempre coloque as condições mais restritivas ou específicas primeiro.
- **Evite sobreposição:** Certifique-se de que as condições não se sobrepõem, para evitar resultados inesperados.
- **Teste com diferentes valores:** Experimente diferentes entradas para garantir que todas as possibilidades sejam cobertas.

---

## Conclusão

O domínio das estruturas de decisão com múltiplas condições é essencial para criar programas que se comportam de maneira inteligente e adaptável. Pratique bastante os exercícios propostos, tente criar variações e, sempre que possível, escreva o pseudocódigo antes de implementar em uma linguagem de programação. Assim, você estará cada vez mais preparado para resolver problemas computacionais de forma lógica e eficiente.
```
