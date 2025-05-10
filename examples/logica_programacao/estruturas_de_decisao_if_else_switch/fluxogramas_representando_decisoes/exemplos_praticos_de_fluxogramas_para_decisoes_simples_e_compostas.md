
# Exemplos Práticos de Fluxogramas para Decisões Simples e Compostas

As **estruturas de decisão** são fundamentais na lógica de programação, pois permitem que um algoritmo escolha diferentes caminhos de execução conforme determinadas condições. Para facilitar o entendimento dessas estruturas, utilizamos **fluxogramas**, que são representações gráficas do fluxo de um algoritmo, tornando mais visual a análise das decisões tomadas pelo programa.

Neste tópico, vamos apresentar exemplos práticos de fluxogramas para decisões simples e compostas, explicando cada caso e mostrando como essas representações auxiliam na construção de algoritmos eficientes.

---

## 1. Decisão Simples

A decisão simples ocorre quando há apenas uma condição a ser avaliada e, caso ela seja verdadeira, uma ação é executada. Se a condição for falsa, o fluxo do algoritmo segue normalmente, sem executar nenhuma ação alternativa.

### Exemplo: Verificar se um número é positivo

**Descrição:**  
Dado um número, verificar se ele é positivo. Se for, exibir a mensagem "Número positivo".

#### Fluxograma:

```plaintext
+-------------------+
|   Início          |
+-------------------+
         |
         v
+-------------------+
| Ler número        |
+-------------------+
         |
         v
+-------------------------------+
| número > 0 ?                  |
+-------------------------------+
      | Sim           | Não
      v               v
+-------------------+   |
| Exibir "Positivo" |   |
+-------------------+   |
      |               |
      v               |
+-------------------+  |
|     Fim           |<-+
+-------------------+
```

#### Explicação:
- O algoritmo começa lendo um número.
- Avalia se o número é maior que zero.
- Se for verdadeiro, exibe a mensagem "Positivo".
- Independentemente do resultado, o algoritmo termina.

---

## 2. Decisão Composta

A decisão composta ocorre quando, além de uma ação para o caso verdadeiro, existe também uma ação alternativa para o caso falso. Isso é representado pelas estruturas `if-else` ou `switch` em linguagens de programação.

### Exemplo: Verificar se um número é par ou ímpar

**Descrição:**  
Dado um número, verificar se ele é par ou ímpar e exibir a mensagem correspondente.

#### Fluxograma:

```plaintext
+-------------------+
|   Início          |
+-------------------+
         |
         v
+-------------------+
| Ler número        |
+-------------------+
         |
         v
+-------------------------------+
| número % 2 == 0 ?             |
+-------------------------------+
      | Sim           | Não
      v               v
+-------------------+ +-------------------+
| Exibir "Par"      | | Exibir "Ímpar"    |
+-------------------+ +-------------------+
      |               |
      v               v
+-------------------+
|     Fim           |
+-------------------+
```

#### Explicação:
- O algoritmo lê um número.
- Avalia se o resto da divisão do número por 2 é igual a zero.
- Se for verdadeiro, exibe "Par".
- Se for falso, exibe "Ímpar".
- O algoritmo termina após exibir a mensagem.

---

## 3. Decisão Composta com Múltiplas Condições (Encadeamento)

Em alguns casos, é necessário avaliar mais de uma condição, utilizando estruturas como `if-else if-else` ou `switch-case`.

### Exemplo: Classificar idade

**Descrição:**  
Dada a idade de uma pessoa, classificar como "Criança" (idade < 12), "Adolescente" (12 ≤ idade < 18) ou "Adulto" (idade ≥ 18).

#### Fluxograma:

```plaintext
+-------------------+
|   Início          |
+-------------------+
         |
         v
+-------------------+
| Ler idade         |
+-------------------+
         |
         v
+-------------------------------+
| idade < 12 ?                  |
+-------------------------------+
      | Sim           | Não
      v               v
+-------------------+ +-------------------------------+
| Exibir "Criança"  | | idade < 18 ?                  |
+-------------------+ +-------------------------------+
      |               | Sim           | Não
      v               v               v
+-------------------+ +-------------------+ +-------------------+
|     Fim           | | Exibir "Adolescente" | | Exibir "Adulto"|
+-------------------+ +-------------------+ +-------------------+
                        |                   |
                        v                   v
                  +-------------------+
                  |     Fim           |
                  +-------------------+
```

#### Explicação:
- O algoritmo lê a idade.
- Se idade < 12, exibe "Criança".
- Se não, verifica se idade < 18. Se sim, exibe "Adolescente".
- Caso contrário, exibe "Adulto".
- O algoritmo termina após exibir a classificação.

---

## Conclusão

Os fluxogramas são ferramentas essenciais para visualizar e planejar a lógica de decisões em algoritmos. Eles facilitam a compreensão do fluxo de execução, tornando mais simples a identificação de possíveis erros e a comunicação entre membros de uma equipe. Ao dominar a representação de decisões simples e compostas em fluxogramas, você estará mais preparado para criar algoritmos claros, eficientes e fáceis de manter.

---
```