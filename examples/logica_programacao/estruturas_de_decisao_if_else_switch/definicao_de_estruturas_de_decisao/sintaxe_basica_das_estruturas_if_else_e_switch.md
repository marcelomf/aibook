
# Sintaxe Básica das Estruturas if, else e switch

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que um algoritmo tome diferentes caminhos de execução de acordo com determinadas condições. As principais estruturas de decisão são o `if`, o `else` e o `switch`. A seguir, apresentamos a sintaxe básica dessas estruturas, utilizando pseudocódigo e exemplos em linguagens populares, para facilitar a compreensão.

---

## 1. Estrutura `if`

A estrutura `if` (do inglês, "se") é utilizada para executar um bloco de código apenas se uma condição for verdadeira.

### Sintaxe em Pseudocódigo

```pseudocode
se (condição) então
    // bloco de comandos
fim_se
```

### Exemplo em Pseudocódigo

```pseudocode
se (idade >= 18) então
    escreva("Você é maior de idade.")
fim_se
```

### Sintaxe em Linguagens Populares

**Em Python:**
```python
if idade >= 18:
    print("Você é maior de idade.")
```

**Em JavaScript:**
```javascript
if (idade >= 18) {
    console.log("Você é maior de idade.");
}
```

---

## 2. Estrutura `if...else`

A estrutura `if...else` permite definir um caminho alternativo caso a condição não seja satisfeita.

### Sintaxe em Pseudocódigo

```pseudocode
se (condição) então
    // bloco se verdadeiro
senão
    // bloco se falso
fim_se
```

### Exemplo em Pseudocódigo

```pseudocode
se (nota >= 7) então
    escreva("Aprovado")
senão
    escreva("Reprovado")
fim_se
```

### Sintaxe em Linguagens Populares

**Em Python:**
```python
if nota >= 7:
    print("Aprovado")
else:
    print("Reprovado")
```

**Em JavaScript:**
```javascript
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

---

## 3. Estrutura `if...else if...else`

Quando há mais de duas possibilidades, pode-se usar a estrutura `else if` (ou `elif` em Python).

### Sintaxe em Pseudocódigo

```pseudocode
se (condição1) então
    // bloco 1
senão_se (condição2) então
    // bloco 2
senão
    // bloco 3
fim_se
```

### Exemplo em Pseudocódigo

```pseudocode
se (nota >= 7) então
    escreva("Aprovado")
senão_se (nota >= 5) então
    escreva("Recuperação")
senão
    escreva("Reprovado")
fim_se
```

### Sintaxe em Linguagens Populares

**Em Python:**
```python
if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

**Em JavaScript:**
```javascript
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
```

---

## 4. Estrutura `switch`

A estrutura `switch` é utilizada quando se deseja comparar o valor de uma variável com várias opções (casos). É uma alternativa ao uso de múltiplos `if...else if`.

### Sintaxe em Pseudocódigo

```pseudocode
escolha (variável)
    caso valor1:
        // comandos
        pare
    caso valor2:
        // comandos
        pare
    caso valorN:
        // comandos
        pare
    caso padrão:
        // comandos
        pare
fim_escolha
```

### Exemplo em Pseudocódigo

```pseudocode
escolha (opcao)
    caso 1:
        escreva("Novo jogo")
        pare
    caso 2:
        escreva("Carregar jogo")
        pare
    caso 3:
        escreva("Sair")
        pare
    caso padrão:
        escreva("Opção inválida")
        pare
fim_escolha
```

### Sintaxe em Linguagens Populares

**Em JavaScript:**
```javascript
switch (opcao) {
    case 1:
        console.log("Novo jogo");
        break;
    case 2:
        console.log("Carregar jogo");
        break;
    case 3:
        console.log("Sair");
        break;
    default:
        console.log("Opção inválida");
        break;
}
```

**Em C:**
```c
switch (opcao) {
    case 1:
        printf("Novo jogo\n");
        break;
    case 2:
        printf("Carregar jogo\n");
        break;
    case 3:
        printf("Sair\n");
        break;
    default:
        printf("Opção inválida\n");
        break;
}
```

> **Observação:** Nem todas as linguagens possuem a estrutura `switch` (por exemplo, Python não possui um `switch` tradicional, mas a partir da versão 3.10, introduziu o `match-case`).

---

## Resumo

- **`if`**: executa um bloco se a condição for verdadeira.
- **`else`**: executa um bloco alternativo se a condição for falsa.
- **`else if`/`elif`**: permite múltiplas condições.
- **`switch`**: seleciona um bloco de acordo com o valor de uma variável.

Essas estruturas são essenciais para controlar o fluxo de execução dos programas, tornando possível a criação de algoritmos que se adaptam a diferentes situações e entradas do usuário.
```
