
## Diferença entre Repetição Controlada por Contador e por Condição

No estudo da lógica de programação, as **estruturas de repetição** são fundamentais para automatizar tarefas que exigem a execução de um mesmo bloco de código múltiplas vezes. Compreender as diferenças entre os tipos de repetição é essencial para escolher a estrutura mais adequada a cada situação. Entre as principais classificações, destacam-se:

- **Repetição controlada por contador**
- **Repetição controlada por condição**

A seguir, explicamos cada uma delas e suas principais diferenças.

---

### Repetição Controlada por Contador

Neste tipo de repetição, o número de vezes que o bloco de código será executado é **pré-determinado**. Ou seja, você sabe exatamente quantas vezes o laço deve se repetir antes mesmo de começar a execução. Para isso, utiliza-se uma **variável de controle** (contador), que é incrementada ou decrementada a cada iteração.

#### Exemplos de uso:
- Imprimir os números de 1 a 10.
- Processar uma lista de 20 alunos.
- Repetir uma ação exatamente 5 vezes.

#### Estruturas comuns:
- `for` (na maioria das linguagens)
- `while` (quando o contador é manipulado manualmente)

#### Exemplo em pseudocódigo:
```pseudocode
para i de 1 até 5 faça
    escreva("Repetição número ", i)
fim_para
```

#### Características:
- O número de repetições é conhecido antes do início do laço.
- Utiliza-se um contador para controlar as iterações.
- Ideal para situações em que a quantidade de repetições é fixa.

---

### Repetição Controlada por Condição

Neste caso, o laço é executado **enquanto uma condição for verdadeira**. Não é necessário saber previamente quantas vezes o bloco será repetido; a execução depende do resultado de uma expressão lógica avaliada a cada iteração.

#### Exemplos de uso:
- Ler dados do usuário até que ele digite "sair".
- Processar elementos de uma lista até encontrar um valor específico.
- Continuar solicitando uma senha até que seja digitada corretamente.

#### Estruturas comuns:
- `while`
- `do-while`

#### Exemplo em pseudocódigo:
```pseudocode
enquanto senha_incorreta faça
    leia(senha)
    se senha == "1234" então
        senha_incorreta = falso
    fim_se
fim_enquanto
```

#### Características:
- O número de repetições **não é conhecido** antecipadamente.
- A execução depende de uma condição lógica.
- Ideal para situações em que a repetição deve ocorrer até que um evento aconteça.

---

### Comparação Resumida

| Tipo de Repetição                | Controle           | Quando Usar                                      | Estruturas Comuns |
|----------------------------------|--------------------|--------------------------------------------------|-------------------|
| **Por contador**                 | Número fixo        | Quando o total de repetições é conhecido         | for, while        |
| **Por condição**                 | Expressão lógica   | Quando não se sabe quantas repetições serão feitas, depende de um evento ou condição | while, do-while   |

---

### Conclusão

Saber diferenciar entre repetição controlada por contador e por condição é essencial para escrever algoritmos eficientes e claros. Use **repetição por contador** quando o número de iterações for conhecido e **repetição por condição** quando a quantidade de repetições depender de uma situação dinâmica. Essa escolha impacta diretamente na legibilidade, eficiência e manutenção do seu código.
```
