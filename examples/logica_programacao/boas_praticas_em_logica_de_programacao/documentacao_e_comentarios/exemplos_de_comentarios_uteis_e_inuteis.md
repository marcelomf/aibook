
# Boas Práticas em Lógica de Programação

## Documentação e Comentários

### Exemplos de Comentários Úteis e Inúteis

Comentários são ferramentas essenciais para tornar o código mais compreensível, tanto para quem o escreveu quanto para outros desenvolvedores que possam trabalhar no projeto no futuro. No entanto, nem todo comentário é útil. Saber quando e como comentar faz parte das boas práticas em lógica de programação.

A seguir, apresentamos exemplos de comentários úteis e inúteis, explicando o porquê de cada caso.

---

#### Comentários Úteis

Comentários úteis são aqueles que realmente agregam valor ao entendimento do código. Eles explicam o "porquê" de uma decisão, detalham trechos complexos ou fornecem contexto adicional que não é óbvio apenas lendo o código.

**Exemplo 1: Explicando uma decisão de lógica**
```pseudo
// Utilizamos o método de busca binária para melhorar a performance
resultado = buscaBinaria(lista, valorProcurado)
```

**Exemplo 2: Descrevendo o propósito de uma função**
```pseudo
// Calcula o fatorial de um número inteiro não-negativo usando recursão
funcao fatorial(n: inteiro): inteiro
```

**Exemplo 3: Informando restrições ou pré-condições**
```pseudo
// Atenção: a lista deve estar ordenada antes de chamar esta função
funcao buscaBinaria(lista, valor)
```

**Exemplo 4: Explicando um algoritmo complexo**
```pseudo
// Este laço implementa o algoritmo de ordenação Bubble Sort
para i de 0 até n-1 faça
    ...
```

**Exemplo 5: Marcando pontos de atenção ou melhorias futuras**
```pseudo
// TODO: Otimizar este trecho para evitar duplicidade de código
```

---

#### Comentários Inúteis

Comentários inúteis são aqueles que apenas repetem o que o código já diz de forma clara, ou que não acrescentam nenhuma informação relevante. Eles podem poluir o código e dificultar a manutenção.

**Exemplo 1: Comentando o óbvio**
```pseudo
i = 0 // define i como zero
```
*Desnecessário, pois o código já é autoexplicativo.*

**Exemplo 2: Comentários redundantes**
```pseudo
// Soma a e b
soma = a + b
```
*O nome da variável e a operação já deixam claro o que está acontecendo.*

**Exemplo 3: Comentários desatualizados**
```pseudo
// Remove o último elemento da lista
lista.adicionar(elemento)
```
*O comentário não corresponde mais ao que o código faz, podendo confundir quem lê.*

**Exemplo 4: Comentários genéricos**
```pseudo
// Loop
para i de 0 até 10 faça
```
*Não explica o propósito do laço, apenas repete o que já está explícito.*

---

### Dicas para Escrever Comentários Úteis

- **Explique o "porquê" e não o "como"**: O código mostra o que está sendo feito; use comentários para explicar por que aquela abordagem foi escolhida.
- **Atualize os comentários**: Sempre que modificar o código, revise os comentários para garantir que continuam corretos.
- **Evite comentários óbvios**: Se o código é claro por si só, não há necessidade de comentar.
- **Use comentários para contexto**: Informe restrições, pré-condições, efeitos colaterais ou referências a regras de negócio.

---

### Conclusão

Comentários bem escritos facilitam a manutenção, o entendimento e a evolução do código. Ao praticar a escrita de comentários úteis e evitar os inúteis, você contribui para a qualidade e a longevidade dos seus algoritmos e programas.
```
