
## Exemplo Prático de Laço Pós-Condicional (do-while)

O laço **do-while** é uma estrutura de repetição conhecida como laço de pós-condição. Isso significa que o bloco de comandos dentro do laço será executado **ao menos uma vez**, independentemente da condição de parada. A verificação da condição ocorre **após** a execução do bloco de código. Esse comportamento é útil em situações onde precisamos garantir que determinada ação seja realizada pelo menos uma vez antes de verificar se deve ser repetida.

### Sintaxe Geral do do-while (Pseudocódigo)

```plaintext
faça
    // comandos a serem executados
enquanto (condição)
```

### Exemplo Prático: Validação de Entrada do Usuário

Imagine que você está desenvolvendo um programa que solicita ao usuário que digite um número positivo. Caso o usuário digite um valor inválido (zero ou negativo), o programa deve pedir novamente até que um valor válido seja informado. O laço **do-while** é ideal para esse cenário, pois a solicitação deve ser feita pelo menos uma vez.

#### Pseudocódigo

```plaintext
declare numero

faça
    escreva("Digite um número positivo: ")
    leia(numero)
enquanto (numero <= 0)

escreva("Você digitou o número: ", numero)
```

#### Explicação

1. O bloco dentro do `faça` é executado, solicitando ao usuário que digite um número.
2. O valor digitado é lido e armazenado na variável `numero`.
3. Após a execução do bloco, a condição `(numero <= 0)` é verificada.
   - Se a condição for **verdadeira** (ou seja, o número é zero ou negativo), o laço se repete.
   - Se a condição for **falsa** (número positivo), o laço termina e o programa segue para a próxima instrução.

### Exemplo em Fluxograma

```plaintext
+-----------------------------+
|   Início                    |
+-----------------------------+
            |
            v
+-----------------------------+
|   Solicita número           |
+-----------------------------+
            |
            v
+-----------------------------+
|   Lê número                 |
+-----------------------------+
            |
            v
+-----------------------------+
|   número <= 0 ?             |
+-----------------------------+
      |           |
     Sim         Não
      |           |
      v           v
+-----------------------------+
|   Repete laço               |
+-----------------------------+
                  |
                  v
+-----------------------------+
|   Exibe número válido       |
+-----------------------------+
            |
            v
+-----------------------------+
|   Fim                       |
+-----------------------------+
```

### Quando Utilizar o do-while

O laço **do-while** é recomendado quando:
- É necessário garantir que o bloco de comandos seja executado pelo menos uma vez.
- A condição de parada só pode ser verificada após a primeira execução do bloco.

Exemplos comuns incluem validação de entrada, menus interativos e processos que exigem pelo menos uma iteração antes da verificação de continuidade.

---

**Resumo:**  
O laço pós-condicional `do-while` é uma ferramenta poderosa para situações em que a execução inicial do bloco de comandos é obrigatória, como na validação de dados de entrada. Compreender seu funcionamento é fundamental para criar programas robustos e interativos.
```
