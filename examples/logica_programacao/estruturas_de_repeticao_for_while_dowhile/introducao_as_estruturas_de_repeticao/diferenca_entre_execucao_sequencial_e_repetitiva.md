
## Diferença entre Execução Sequencial e Repetitiva

Ao aprender lógica de programação, é fundamental compreender como as instruções de um algoritmo são executadas. Dois conceitos essenciais nesse contexto são a **execução sequencial** e a **execução repetitiva**. Entender a diferença entre eles é o primeiro passo para criar programas mais eficientes e capazes de resolver problemas complexos.

### Execução Sequencial

A **execução sequencial** é o modo mais simples de execução de um algoritmo. Nesse modelo, as instruções são realizadas uma após a outra, na ordem em que aparecem no código, sem desvios ou repetições automáticas. Cada comando é executado exatamente uma vez, e o fluxo do programa segue linearmente do início ao fim.

#### Exemplo de Execução Sequencial

```pseudocode
início
    ler número1
    ler número2
    soma ← número1 + número2
    escrever soma
fim
```

No exemplo acima, cada linha é executada uma única vez, seguindo a ordem em que foi escrita.

#### Características da Execução Sequencial

- **Simplicidade:** Fácil de entender e implementar.
- **Previsibilidade:** O fluxo do programa é linear e previsível.
- **Limitação:** Não permite repetir tarefas automaticamente, o que pode levar à duplicação de código caso seja necessário realizar a mesma ação várias vezes.

---

### Execução Repetitiva

A **execução repetitiva** ocorre quando um conjunto de instruções precisa ser executado várias vezes, seja por um número determinado de vezes ou enquanto uma condição for verdadeira. Para isso, utilizamos as chamadas **estruturas de repetição** (ou laços), como `for`, `while` e `do-while`.

Essas estruturas permitem automatizar tarefas repetitivas, tornando o código mais eficiente, organizado e fácil de manter.

#### Exemplo de Execução Repetitiva

```pseudocode
início
    para i de 1 até 5 faça
        escrever "Esta é a repetição número ", i
    fim_para
fim
```

Neste exemplo, a instrução dentro do laço `para` será executada cinco vezes, uma para cada valor de `i` de 1 a 5.

#### Características da Execução Repetitiva

- **Eficiência:** Permite executar blocos de código múltiplas vezes sem duplicação.
- **Flexibilidade:** Pode repetir ações com base em condições dinâmicas.
- **Redução de Erros:** Menos código duplicado significa menos chances de erros e mais facilidade para manutenção.

---

### Comparação Resumida

| Execução Sequencial         | Execução Repetitiva           |
|----------------------------|-------------------------------|
| Instruções executadas uma a uma, na ordem em que aparecem | Um bloco de instruções pode ser executado várias vezes |
| Não há repetições automáticas | Utiliza laços (`for`, `while`, `do-while`) para repetir tarefas |
| Simples, mas limitada para tarefas repetitivas | Ideal para processar listas, validar entradas, cálculos repetidos, etc. |
| Exemplo: ler dois números e somar | Exemplo: somar vários números em uma lista |

---

### Quando Usar Cada Uma?

- **Execução sequencial** é adequada para tarefas simples, onde cada passo deve ser realizado apenas uma vez.
- **Execução repetitiva** é indispensável quando há necessidade de repetir ações, como processar todos os itens de uma lista, validar entradas até que estejam corretas, ou realizar cálculos até atingir um determinado resultado.

---

### Conclusão

Compreender a diferença entre execução sequencial e repetitiva é essencial para criar algoritmos eficientes e adaptáveis. Enquanto a execução sequencial é a base de qualquer programa, as estruturas de repetição permitem automatizar tarefas e resolver problemas mais complexos de forma elegante e eficaz. Dominar esses conceitos é um passo fundamental para evoluir na lógica de programação e no desenvolvimento de software.
```
