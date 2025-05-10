
# Exemplos de Problemas Computacionais Resolvidos com Lógica

A lógica de programação é a base para a resolução de problemas computacionais. Ela permite que o programador analise situações, identifique padrões e desenvolva soluções eficientes, independentemente da linguagem de programação utilizada. A seguir, apresentamos exemplos práticos de problemas computacionais comuns e como a lógica é aplicada para resolvê-los.

---

## 1. Cálculo de Média de Notas

**Problema:**  
Dado um conjunto de notas de um aluno, calcular a média aritmética e informar se o aluno foi aprovado (média ≥ 7) ou reprovado.

**Solução Lógica:**
- Receber as notas.
- Somar todas as notas.
- Dividir o total pelo número de notas para obter a média.
- Verificar se a média é maior ou igual a 7.
- Exibir o resultado.

**Pseudocódigo:**
```
ler nota1, nota2, nota3
media = (nota1 + nota2 + nota3) / 3
se media >= 7 então
    exibir "Aprovado"
senão
    exibir "Reprovado"
fim se
```

---

## 2. Verificação de Número Par ou Ímpar

**Problema:**  
Receber um número inteiro e informar se ele é par ou ímpar.

**Solução Lógica:**
- Receber o número.
- Dividir o número por 2 e verificar o resto da divisão.
- Se o resto for 0, o número é par; caso contrário, é ímpar.

**Pseudocódigo:**
```
ler numero
se numero % 2 == 0 então
    exibir "Par"
senão
    exibir "Ímpar"
fim se
```

---

## 3. Busca de Elemento em uma Lista

**Problema:**  
Dada uma lista de nomes, verificar se um nome específico está presente na lista.

**Solução Lógica:**
- Receber a lista de nomes e o nome a ser buscado.
- Percorrer a lista elemento por elemento.
- Comparar cada elemento com o nome buscado.
- Se encontrar, exibir mensagem de sucesso; caso contrário, informar que não foi encontrado.

**Pseudocódigo:**
```
ler lista_de_nomes
ler nome_buscado
encontrado = falso
para cada nome em lista_de_nomes faça
    se nome == nome_buscado então
        encontrado = verdadeiro
        pare
    fim se
fim para
se encontrado então
    exibir "Nome encontrado"
senão
    exibir "Nome não encontrado"
fim se
```

---

## 4. Cálculo de Fatorial

**Problema:**  
Calcular o fatorial de um número inteiro positivo (n!), que é o produto de todos os inteiros de 1 até n.

**Solução Lógica:**
- Receber o número.
- Inicializar uma variável resultado com 1.
- Multiplicar resultado por cada número de 1 até n.

**Pseudocódigo:**
```
ler n
fatorial = 1
para i de 1 até n faça
    fatorial = fatorial * i
fim para
exibir fatorial
```

---

## 5. Validação de Senha

**Problema:**  
Solicitar ao usuário uma senha e verificar se ela atende aos critérios: pelo menos 8 caracteres, contém letras e números.

**Solução Lógica:**
- Receber a senha.
- Verificar o comprimento da senha.
- Verificar se há pelo menos uma letra e um número.
- Informar se a senha é válida ou não.

**Pseudocódigo:**
```
ler senha
se comprimento(senha) >= 8 e
   senha contém pelo menos uma letra e
   senha contém pelo menos um número então
    exibir "Senha válida"
senão
    exibir "Senha inválida"
fim se
```

---

## Conclusão

Esses exemplos demonstram como a lógica de programação é fundamental para resolver problemas computacionais do dia a dia. Ao decompor o problema em etapas lógicas, o programador consegue criar algoritmos claros, eficientes e reutilizáveis. O domínio desses conceitos é essencial para o desenvolvimento em qualquer linguagem de programação e para a construção de soluções inovadoras na área de tecnologia.
```
