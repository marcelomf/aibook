
# Exercícios de Tomada de Decisão com Operadores Lógicos

A tomada de decisão é um dos pilares da lógica de programação. Ela permite que um algoritmo escolha diferentes caminhos de execução com base em condições avaliadas durante a execução do programa. Para isso, utilizamos estruturas de decisão (como `if`, `else if`, `else` e `switch`) em conjunto com **operadores lógicos**.

Os operadores lógicos (`E`, `OU`, `NÃO` ou, em muitas linguagens, `&&`, `||`, `!`) são fundamentais para criar condições compostas, ou seja, condições que dependem de mais de um critério para serem verdadeiras ou falsas. Com eles, é possível construir decisões mais complexas e precisas.

## Principais Operadores Lógicos

- **E (AND, `&&`)**: A condição composta só é verdadeira se **todas** as condições forem verdadeiras.
- **OU (OR, `||`)**: A condição composta é verdadeira se **pelo menos uma** das condições for verdadeira.
- **NÃO (NOT, `!`)**: Inverte o valor lógico de uma condição (verdadeiro vira falso e vice-versa).

## Exemplos Práticos

### Exemplo 1: Verificação de faixa etária

```pseudocode
Leia idade

Se idade >= 18 E idade <= 65 então
    Escreva "Você está em idade ativa para o trabalho."
Senão
    Escreva "Você não está em idade ativa para o trabalho."
FimSe
```

**Explicação:**  
A condição só será verdadeira se a idade for maior ou igual a 18 **e** menor ou igual a 65 ao mesmo tempo.

---

### Exemplo 2: Acesso permitido com múltiplas condições

```pseudocode
Leia usuario
Leia senha

Se (usuario = "admin" OU usuario = "root") E senha = "1234" então
    Escreva "Acesso permitido."
Senão
    Escreva "Acesso negado."
FimSe
```

**Explicação:**  
O acesso só será permitido se o usuário for "admin" **ou** "root" **e** a senha for "1234".

---

### Exemplo 3: Verificação de múltiplos critérios

```pseudocode
Leia nota
Leia frequencia

Se nota >= 7 OU frequencia >= 75 então
    Escreva "Aprovado em pelo menos um critério."
Senão
    Escreva "Reprovado."
FimSe
```

**Explicação:**  
O aluno será aprovado se tiver nota maior ou igual a 7 **ou** frequência maior ou igual a 75%.

---

## Exercícios Propostos

1. **Verificação de Voto Obrigatório**  
   Peça ao usuário para informar sua idade. Escreva um algoritmo que informe se o voto é obrigatório (idade entre 18 e 70 anos, inclusive) ou não.

2. **Acesso a Evento**  
   Um evento só permite a entrada de pessoas maiores de 16 anos **ou** acompanhadas de um responsável. Solicite a idade e se está acompanhado (S/N). Informe se a entrada é permitida.

3. **Desconto em Compra**  
   Um cliente só recebe desconto se for cliente VIP **e** a compra for acima de R$ 100,00. Solicite se o cliente é VIP (S/N) e o valor da compra. Informe se o desconto será aplicado.

4. **Aprovação em Concurso**  
   Para ser aprovado, o candidato precisa ter nota maior ou igual a 60 **e** não ter sido eliminado por falta (frequência maior que 75%). Solicite a nota e a frequência e informe se o candidato foi aprovado.

---

## Dicas para Resolver Exercícios

- Leia atentamente o enunciado e identifique quais condições precisam ser avaliadas.
- Use operadores lógicos para combinar as condições conforme necessário.
- Teste seu algoritmo com diferentes valores para garantir que todas as possibilidades foram consideradas.
- Utilize fluxogramas ou pseudocódigo para organizar o raciocínio antes de implementar em uma linguagem de programação.

---

## Conclusão

A prática com exercícios de tomada de decisão utilizando operadores lógicos é essencial para desenvolver o raciocínio lógico e a capacidade de resolver problemas computacionais. Dominar esses conceitos permitirá que você crie algoritmos mais eficientes e preparados para lidar com situações do mundo real, servindo como base sólida para o aprendizado de qualquer linguagem de programação.
```
