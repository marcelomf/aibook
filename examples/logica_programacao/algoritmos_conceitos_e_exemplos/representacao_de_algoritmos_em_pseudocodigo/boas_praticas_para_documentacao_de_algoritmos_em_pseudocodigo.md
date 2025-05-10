
# Boas Práticas para Documentação de Algoritmos em Pseudocódigo

A documentação adequada de algoritmos em pseudocódigo é fundamental para garantir clareza, compreensão e manutenção do raciocínio lógico por parte de quem escreve e de quem lê. Um pseudocódigo bem documentado facilita a transição para linguagens de programação, a colaboração em equipe e a identificação de possíveis melhorias ou correções. A seguir, apresentamos as principais boas práticas para documentar algoritmos em pseudocódigo.

---

## 1. **Clareza e Simplicidade**

- **Use linguagem simples e direta:** O objetivo do pseudocódigo é ser facilmente compreendido, independentemente do conhecimento prévio em linguagens de programação.
- **Evite ambiguidade:** Cada instrução deve ter um único significado, evitando interpretações duvidosas.
- **Seja conciso:** Descreva as ações de forma objetiva, sem informações desnecessárias.

---

## 2. **Padronização da Sintaxe**

- **Defina um padrão:** Utilize sempre a mesma estrutura para comandos, como início e fim do algoritmo, declaração de variáveis, estruturas de decisão e repetição.
- **Palavras-chave em destaque:** Utilize palavras-chave em maiúsculas (EX: INÍCIO, FIM, SE, ENQUANTO) para facilitar a identificação das estruturas.
- **Indentação:** Utilize recuos (indentação) para indicar blocos de comandos, especialmente dentro de estruturas condicionais e de repetição.

**Exemplo:**
```plaintext
INÍCIO
    LEIA número
    SE número > 0 ENTÃO
        ESCREVA "Número positivo"
    SENÃO
        ESCREVA "Número não positivo"
    FIMSE
FIM
```

---

## 3. **Comentários Explicativos**

- **Comente trechos importantes:** Utilize comentários para explicar partes complexas ou justificar decisões de lógica.
- **Padronize os comentários:** Use um símbolo ou palavra reservada para indicar comentários (ex: // ou #