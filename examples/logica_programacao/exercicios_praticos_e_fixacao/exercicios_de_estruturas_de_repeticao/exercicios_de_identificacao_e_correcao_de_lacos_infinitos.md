# Exercícios de Identificação e Correção de Laços Infinitos

Os laços (ou estruturas de repetição) são fundamentais na lógica de programação, permitindo que um bloco de código seja executado várias vezes. No entanto, um dos erros mais comuns cometidos por iniciantes é a criação de **laços infinitos** — situações em que o laço nunca termina, fazendo com que o programa fique preso em uma execução sem fim.

Neste tópico, você aprenderá a identificar e corrigir laços infinitos por meio de exemplos práticos e exercícios.

---

## O que é um Laço Infinito?

Um laço infinito ocorre quando a condição de parada de uma estrutura de repetição nunca é satisfeita. Isso pode acontecer por diversos motivos, como:

- Esquecimento de atualizar a variável de controle;
- Condição de parada incorreta;
- Erros de lógica na expressão condicional.

Laços infinitos podem travar o programa, consumir recursos do computador e, em casos mais graves, causar falhas no sistema.

---

## Exemplos de Laços Infinitos

### Exemplo 1: Esquecendo de Atualizar a Variável

```pseudocode
i ← 0
enquanto i < 5 faça
    escreva(i)
fim-enquanto
```

**Problema:**  
A variável `i` nunca é incrementada, então a condição `i < 5` será sempre verdadeira.

**Correção:**

```pseudocode
i ← 0
enquanto i < 5 faça
    escreva(i)
    i ← i + 1
fim-enquanto
```

---

### Exemplo 2: Condição de Parada Incorreta

```pseudocode
contador ← 10
enquanto contador > 0 faça
    escreva(contador)
    contador ← contador + 1
fim-enquanto
```

**Problema:**  
O valor de `contador` está sendo incrementado, nunca atingindo a condição `contador > 0` falsa.

**Correção:**

```pseudocode
contador ← 10
enquanto contador > 0 faça
    escreva(contador)
    contador ← contador - 1
fim-enquanto
```

---

## Exercícios Práticos

### Exercício 1

Analise o seguinte pseudocódigo e identifique se há um laço infinito. Se houver, corrija o erro.

```pseudocode
x ← 1
enquanto x ≠ 10 faça
    escreva(x)
fim-enquanto
```

**Resposta:**

Sim, há um laço infinito. A variável `x` nunca é alterada dentro do laço.  
**Correção:**

```pseudocode
x ← 1
enquanto x ≠ 10 faça
    escreva(x)
    x ← x + 1
fim-enquanto
```

---

### Exercício 2

O código abaixo está correto? Justifique sua resposta e corrija se necessário.

```pseudocode
n ← 5
enquanto n < 10 faça
    escreva(n)
    n ← n - 1
fim-enquanto
```

**Resposta:**

Não está correto. O valor de `n` está sendo decrementado, ficando cada vez menor, e nunca atingirá `n ≥ 10`.  
**Correção:**

```pseudocode
n ← 5
enquanto n < 10 faça
    escreva(n)
    n ← n + 1
fim-enquanto
```

---

### Exercício 3

Encontre e corrija o erro no laço abaixo:

```pseudocode
i ← 0
enquanto i <= 3 faça
    escreva(i)
    // falta atualizar i
fim-enquanto
```

**Resposta:**

A variável `i` não está sendo atualizada, causando laço infinito.  
**Correção:**

```pseudocode
i ← 0
enquanto i <= 3 faça
    escreva(i)
    i ← i + 1
fim-enquanto
```

---

## Dicas para Evitar Laços Infinitos

- **Sempre atualize a variável de controle** dentro do laço.
- **Verifique a condição de parada**: ela deve ser atingível.
- **Teste seus laços** com diferentes valores iniciais.
- **Use fluxogramas** para visualizar o fluxo do laço.

---

## Conclusão

Identificar e corrigir laços infinitos é uma habilidade essencial para todo programador iniciante. Praticar com exercícios como os apresentados acima ajuda a desenvolver o raciocínio lógico e a atenção aos detalhes, prevenindo erros comuns e tornando seus algoritmos mais eficientes e confiáveis.

Continue praticando e, sempre que criar um laço, pergunte-se: "Minha condição de parada será realmente atingida?" Essa simples reflexão pode evitar muitos problemas no seu código!