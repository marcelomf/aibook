
## Diferença no Momento da Verificação da Condição: Pré-condição vs Pós-condição

Ao estudar as **estruturas de repetição** em lógica de programação, é fundamental compreender como e quando a condição de continuidade do laço é verificada. Esse momento determina se o bloco de comandos será executado ou não, influenciando diretamente o comportamento do algoritmo. As estruturas mais comuns — `for`, `while` e `do-while` — diferem principalmente no momento em que essa verificação ocorre, sendo classificadas em **pré-condição** e **pós-condição**.

### Estruturas de Pré-condição

Nas estruturas de **pré-condição**, a verificação da condição ocorre **antes** da execução do bloco de comandos. Ou seja, o laço só será executado se a condição for verdadeira logo na primeira checagem. Se a condição for falsa desde o início, o bloco de comandos **não será executado nenhuma vez**.

#### Exemplos de Estruturas de Pré-condição

- **while**
- **for**

#### Funcionamento

```pseudocode
enquanto (condição) faça
    // bloco de comandos
fim-enquanto
```

No exemplo acima, a condição é avaliada antes da execução do bloco. Se a condição for falsa, o bloco é ignorado.

##### Exemplo prático (while):

```pseudocode
contador ← 1
enquanto (contador ≤ 5) faça
    escreva(contador)
    contador ← contador + 1
fim-enquanto
```
Neste caso, se `contador` já começar maior que 5, o bloco nunca será executado.

##### Exemplo prático (for):

```pseudocode
para i de 1 até 5 faça
    escreva(i)
fim-para
```
O laço `for` também verifica a condição antes de cada execução do bloco.

---

### Estruturas de Pós-condição

Nas estruturas de **pós-condição**, a verificação da condição ocorre **após** a execução do bloco de comandos. Isso significa que o bloco será executado **pelo menos uma vez**, independentemente do valor inicial da condição. Só após a primeira execução é que a condição será avaliada para decidir se o laço continua ou não.

#### Exemplo de Estrutura de Pós-condição

- **do-while**

#### Funcionamento

```pseudocode
faça
    // bloco de comandos
enquanto (condição)
```

Aqui, o bloco de comandos é executado primeiro, e só depois a condição é verificada.

##### Exemplo prático (do-while):

```pseudocode
contador ← 1
faça
    escreva(contador)
    contador ← contador + 1
enquanto (contador ≤ 5)
```
Mesmo que `contador` comece maior que 5, o bloco será executado ao menos uma vez.

---

### Resumindo: Pré-condição vs Pós-condição

| Estrutura   | Momento da Verificação | Executa o bloco pelo menos uma vez? |
|-------------|-----------------------|-------------------------------------|
| while       | Antes (pré-condição)  | Não                                 |
| for         | Antes (pré-condição)  | Não                                 |
| do-while    | Depois (pós-condição) | Sim                                 |

- **Pré-condição**: a condição é verificada antes da execução do bloco. Se for falsa, o bloco não é executado.
- **Pós-condição**: a condição é verificada após a execução do bloco. O bloco é sempre executado pelo menos uma vez.

---

### Quando Usar Cada Estrutura?

- Use **while** ou **for** quando não for necessário garantir que o bloco execute ao menos uma vez, ou quando a condição de parada deve ser checada antes de qualquer execução.
- Use **do-while** quando for necessário que o bloco execute pelo menos uma vez, independentemente da condição inicial.

---

Compreender essa diferença é essencial para escolher a estrutura de repetição mais adequada ao problema que você está resolvendo, garantindo algoritmos corretos e eficientes.
```
