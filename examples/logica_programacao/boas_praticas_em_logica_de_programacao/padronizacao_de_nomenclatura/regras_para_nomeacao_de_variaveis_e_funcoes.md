# Regras para Nomeação de Variáveis e Funções

A padronização de nomenclatura é uma das boas práticas mais importantes em lógica de programação. Nomear variáveis e funções de forma clara, consistente e significativa facilita a leitura, manutenção e evolução do código, além de evitar ambiguidades e erros. A seguir, apresentamos as principais regras e recomendações para nomeação de variáveis e funções, válidas tanto para pseudocódigo quanto para a maioria das linguagens de programação.

---

## 1. **Seja Descritivo e Significativo**

- **Variáveis e funções devem ter nomes que indiquem claramente seu propósito.**
- Evite nomes genéricos como `x`, `y`, `temp`, `data1`, exceto em situações muito específicas (como variáveis temporárias em laços curtos).
- Exemplos:
  - **Ruim:** `a`, `b`, `c`
  - **Bom:** `idadeUsuario`, `totalVendas`, `calcularMedia`

---

## 2. **Use Padrões de Escrita Consistentes**

Existem diferentes convenções de escrita para nomes de variáveis e funções. As mais comuns são:

- **Camel Case:** Primeira palavra em minúsculo, demais palavras com a inicial maiúscula.  
  Exemplo: `nomeCompleto`, `calcularSoma`
- **Snake Case:** Todas as letras minúsculas, palavras separadas por underline.  
  Exemplo: `nome_completo`, `calcular_soma`
- **Pascal Case:** Todas as palavras com a inicial maiúscula (usado mais para nomes de classes).  
  Exemplo: `NomeCompleto`, `CalcularSoma`

> **Dica:** Escolha um padrão e mantenha-o em todo o projeto.

---

## 3. **Evite Palavras Reservadas**

- Não utilize palavras reservadas da linguagem como nomes de variáveis ou funções, como `if`, `for`, `while`, `int`, `return`, etc.
- Isso pode causar erros ou comportamentos inesperados.

---

## 4. **Não Use Caracteres Especiais ou Espaços**

- Nomes de variáveis e funções não devem conter espaços, acentos ou caracteres especiais (como `@`, `#`, `!`, etc.).
- Use apenas letras, números e, se permitido, o underline (`_`).
- O nome **não pode começar com número**.

---

## 5. **Prefira o Idioma do Projeto**

- Se o projeto está em português, use nomes em português; se está em inglês, use inglês.
- Evite misturar idiomas nos nomes.

---

## 6. **Seja Conciso, Mas Não Abreviado Demais**

- Nomes devem ser curtos, mas suficientemente descritivos.
- Evite abreviações excessivas ou pouco claras.
- Exemplos:
  - **Ruim:** `vlrTtl` (valor total)
  - **Bom:** `valorTotal`

---

## 7. **Funções Devem Indicar Ação**

- Nomes de funções geralmente começam com um verbo, indicando a ação realizada.
- Exemplos: `calcularMedia`, `buscarUsuario`, `imprimirRelatorio`

---

## 8. **Use Plural para Coleções**

- Se a variável representa uma coleção (lista, array, etc.), use o nome no plural.
- Exemplo: `nomesAlunos`, `listaProdutos`

---

## 9. **Evite Prefixos e Sufixos Desnecessários**

- Não adicione prefixos como `var`, `obj`, `str` sem necessidade.
- Use apenas quando realmente ajudar na compreensão.

---

## 10. **Documente Nomes Ambíguos**

- Se um nome não puder ser totalmente claro, adicione um comentário explicativo.

---

## Exemplos Práticos

```pseudocode
// Ruim
a = 10
b = 20
c = a + b

// Bom
quantidadeProdutos = 10
precoUnitario = 20
valorTotal = quantidadeProdutos * precoUnitario

// Função ruim
function f(x, y)
    return x + y

// Função boa
function somarNumeros(numero1, numero2)
    return numero1 + numero2
```

---

## Resumo

Seguir regras de nomeação de variáveis e funções é fundamental para criar algoritmos claros, organizados e fáceis de manter. Adote padrões consistentes, seja descritivo e evite ambiguidades. Essas práticas, além de facilitarem o seu aprendizado, são essenciais para o trabalho em equipe e para o desenvolvimento de softwares profissionais.

> **Lembre-se:** Um código bem nomeado é um código que se explica por si só!