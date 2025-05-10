
## Exemplo de Decisão Composta com if/else: Verificação de Aprovação em Nota

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que um algoritmo tome diferentes caminhos de acordo com determinadas condições. Um dos exemplos mais comuns de decisão composta é a verificação de aprovação de um aluno com base em sua nota.

### O Problema

Imagine que você precisa criar um algoritmo que receba a nota de um aluno e informe se ele foi **aprovado**, **reprovado** ou se está de **recuperação**. Considere as seguintes regras:

- Se a nota for maior ou igual a 7, o aluno está **aprovado**.
- Se a nota for menor que 5, o aluno está **reprovado**.
- Se a nota estiver entre 5 (inclusive) e 7 (exclusivo), o aluno está de **recuperação**.

### Estrutura if/else

Para resolver esse problema, utilizamos a estrutura de decisão composta `if/else if/else`, que permite avaliar múltiplas condições de forma sequencial.

#### Exemplo em Pseudocódigo

```pseudocode
Leia nota

Se nota >= 7 então
    Escreva "Aprovado"
Senão se nota >= 5 então
    Escreva "Recuperação"
Senão
    Escreva "Reprovado"
FimSe
```

#### Exemplo em Fluxograma

```plaintext
[Início]
   |
[Leia nota]
   |
[nota >= 7?]---Sim--->["Aprovado"]
   | Não
[nota >= 5?]---Sim--->["Recuperação"]
   | Não
["Reprovado"]
   |
[Fim]
```

#### Exemplo em Linguagem de Programação (Python)

```python
nota = float(input("Digite a nota do aluno: "))

if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

### Explicação

- O algoritmo começa lendo a nota do aluno.
- A primeira condição verifica se a nota é maior ou igual a 7. Se for verdadeira, exibe "Aprovado".
- Se a primeira condição for falsa, a segunda condição (`elif` ou `senão se`) verifica se a nota é maior ou igual a 5. Se for verdadeira, exibe "Recuperação".
- Se nenhuma das condições anteriores for satisfeita, o algoritmo exibe "Reprovado".

### Boas Práticas

- **Clareza:** Organize as condições de forma lógica e clara, facilitando a leitura e manutenção do código.
- **Ordem das Condições:** Sempre coloque as condições mais restritivas ou prioritárias primeiro.
- **Testes:** Teste o algoritmo com diferentes valores de nota para garantir que todas as possibilidades sejam cobertas.

### Conclusão

A decisão composta com `if/else` é uma ferramenta poderosa para resolver problemas do cotidiano na programação, como a verificação de aprovação em notas. Compreender e praticar esse conceito é essencial para desenvolver algoritmos eficientes e corretos.
```
