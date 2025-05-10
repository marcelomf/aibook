
# Exercícios Práticos com Operadores Lógicos

Os operadores lógicos são fundamentais na lógica de programação, pois permitem combinar condições e tomar decisões mais complexas em algoritmos. Eles são amplamente utilizados em estruturas de decisão (como `if`, `else if`, `while`, etc.) para avaliar múltiplas expressões booleanas ao mesmo tempo.

Os principais operadores lógicos são:

- **E (AND)**: `&&` — Retorna verdadeiro se **todas** as condições forem verdadeiras.
- **OU (OR)**: `||` — Retorna verdadeiro se **pelo menos uma** das condições for verdadeira.
- **NÃO (NOT)**: `!` — Inverte o valor lógico da condição.

A seguir, apresentamos exercícios práticos para fixar o uso desses operadores.

---

## Exercício 1: Verificação de faixa etária

**Enunciado:**  
Peça ao usuário para informar sua idade. Verifique se a idade está entre 18 e 65 anos (inclusive). Exiba uma mensagem informando se a pessoa está na faixa etária considerada "ativa" para o trabalho.

**Pseudocódigo:**
```
Leia idade
Se idade >= 18 E idade <= 65 então
    Escreva "Você está na faixa etária ativa para o trabalho."
Senão
    Escreva "Você não está na faixa etária ativa para o trabalho."
FimSe
```

---

## Exercício 2: Acesso permitido

**Enunciado:**  
Solicite ao usuário um nome de usuário e uma senha. Considere que o acesso só é permitido se o nome de usuário for "admin" **E** a senha for "1234".

**Pseudocódigo:**
```
Leia usuario
Leia senha
Se usuario = "admin" E senha = "1234" então
    Escreva "Acesso permitido."
Senão
    Escreva "Acesso negado."
FimSe
```

---

## Exercício 3: Desconto especial

**Enunciado:**  
Uma loja oferece desconto especial para clientes que são membros do clube de fidelidade **OU** que realizaram compras acima de R$ 200,00. Solicite ao usuário se ele é membro do clube (S/N) e o valor da compra. Informe se ele tem direito ao desconto.

**Pseudocódigo:**
```
Leia membro (S/N)
Leia valorCompra
Se membro = "S" OU valorCompra > 200 então
    Escreva "Você tem direito ao desconto especial."
Senão
    Escreva "Você não tem direito ao desconto especial."
FimSe
```

---

## Exercício 4: Validação de entrada

**Enunciado:**  
Peça ao usuário para digitar um número inteiro. Verifique se o número **NÃO** está no intervalo de 10 a 20 (inclusive). Se não estiver, exiba "Fora do intervalo".

**Pseudocódigo:**
```
Leia numero
Se NÃO (numero >= 10 E numero <= 20) então
    Escreva "Fora do intervalo."
Senão
    Escreva "Dentro do intervalo."
FimSe
```

---

## Exercício 5: Aprovação em disciplina

**Enunciado:**  
Solicite ao usuário as notas das duas provas. O aluno será aprovado se **ambas** as notas forem maiores ou iguais a 6 **E** a média for maior ou igual a 7.

**Pseudocódigo:**
```
Leia nota1
Leia nota2
media = (nota1 + nota2) / 2
Se nota1 >= 6 E nota2 >= 6 E media >= 7 então
    Escreva "Aprovado."
Senão
    Escreva "Reprovado."
FimSe
```

---

## Dicas para Resolver os Exercícios

- Identifique quais operadores lógicos são necessários para cada condição.
- Lembre-se de que o operador **E** (`&&`) exige que todas as condições sejam verdadeiras.
- O operador **OU** (`||`) aceita que apenas uma das condições seja verdadeira.
- O operador **NÃO** (`!`) inverte o resultado lógico da condição.
- Use parênteses para garantir a ordem correta de avaliação das expressões.

---

## Conclusão

A prática com operadores lógicos é essencial para desenvolver algoritmos eficientes e tomar decisões corretas em programas. Ao resolver exercícios como os apresentados acima, você aprimora sua capacidade de analisar situações e combinar condições de forma lógica, habilidades fundamentais para qualquer programador iniciante.
```
