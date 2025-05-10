
# Exercícios de Identificação e Correção de Laços Infinitos

As **estruturas de repetição** são fundamentais na lógica de programação, permitindo que um bloco de código seja executado várias vezes de acordo com uma condição. No entanto, um dos erros mais comuns cometidos por iniciantes é a criação de **laços infinitos** — situações em que o loop nunca termina, consumindo recursos do computador e, muitas vezes, travando o programa.

Neste tópico, você aprenderá a identificar e corrigir laços infinitos em estruturas `for`, `while` e `do-while`, por meio de exemplos práticos e exercícios.

---

## O que é um Laço Infinito?

Um **laço infinito** ocorre quando a condição de parada de um loop nunca é satisfeita, fazendo com que o bloco de código seja executado indefinidamente. Isso pode acontecer por:

- Esquecimento de atualizar a variável de controle;
- Condição de parada incorreta;
- Erros de lógica na estrutura do loop.

---

## Exemplos de Laços Infinitos

### 1. Laço `while` Infinito

```pseudo
contador ← 1
enquanto contador < 5 faça
    escreva(contador)
    // contador não é incrementado!
fimenquanto
```

**Problema:** O valor de `contador` nunca muda, então a condição `contador < 5` será sempre verdadeira.

**Correção:**

```pseudo
contador ← 1
enquanto contador < 5 faça
    escreva(contador)
    contador ← contador + 1
fimenquanto
```

---

### 2. Laço `for` Infinito

```pseudo
para i de 0 até 10 faça
    escreva(i)
    i ← i - 1 // Modificando a variável de controle de forma errada
fimapara
```

**Problema:** Alterar a variável de controle dentro do laço pode impedir que a condição de parada seja atingida.

**Correção:**

```pseudo
para i de 0 até 10 faça
    escreva(i)
fimapara
```

---

### 3. Laço `do-while` Infinito

```pseudo
x ← 10
faça
    escreva(x)
enquanto x > 0
```

**Problema:** `x` nunca é alterado, então a condição `x > 0` será sempre verdadeira.

**Correção:**

```pseudo
x ← 10
faça
    escreva(x)
    x ← x - 1
enquanto x > 0
```

---

## Exercícios Práticos

### Exercício 1

Analise o código abaixo e identifique se há um laço infinito. Se houver, corrija-o.

```pseudo
n ← 1
enquanto n ≠ 0 faça
    escreva("Digite um número (0 para sair): ")
    leia(n)
fimenquanto
```

**Resposta:**  
Não há laço infinito, pois o valor de `n` é atualizado dentro do loop. O laço termina quando o usuário digita 0.

---

### Exercício 2

Corrija o laço infinito no código a seguir:

```pseudo
i ← 1
enquanto i < 5 faça
    escreva(i)
fimenquanto
```

**Correção:**

```pseudo
i ← 1
enquanto i < 5 faça
    escreva(i)
    i ← i + 1
fimenquanto
```

---

### Exercício 3

O código abaixo possui um laço infinito. Explique o motivo e corrija-o.

```pseudo
para j de 10 até 1 faça
    escreva(j)
fimapara
```

**Explicação:**  
O laço `para` está configurado para ir de 10 até 1, mas o incremento padrão é +1. Como 10 nunca será menor ou igual a 1 ao incrementar, o laço pode não executar ou entrar em loop dependendo da linguagem.

**Correção:**

```pseudo
para j de 10 até 1 passo -1 faça
    escreva(j)
fimapara
```

---

## Dicas para Evitar Laços Infinitos

- **Sempre atualize a variável de controle** dentro do loop.
- **Verifique a condição de parada**: ela deve ser atingível.
- **Evite modificar a variável de controle** de forma não planejada dentro do laço.
- **Teste seus loops** com diferentes valores para garantir que eles terminam como esperado.

---

## Conclusão

Identificar e corrigir laços infinitos é uma habilidade essencial para qualquer programador iniciante. Ao praticar a análise de loops e entender como as condições de parada funcionam, você evitará travamentos e garantirá que seus algoritmos sejam eficientes e confiáveis.

Continue praticando com diferentes exemplos e, sempre que possível, revise seu código em busca de possíveis laços infinitos!
```
