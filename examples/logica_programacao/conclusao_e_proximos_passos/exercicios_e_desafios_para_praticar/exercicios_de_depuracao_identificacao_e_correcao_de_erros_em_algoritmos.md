
## Exercícios de Depuração: Identificação e Correção de Erros em Algoritmos

A depuração (ou debugging) é uma das habilidades mais importantes para qualquer programador. Ela consiste no processo de identificar, analisar e corrigir erros (bugs) em algoritmos e programas. Aprender a depurar é fundamental para garantir que suas soluções funcionem corretamente e para desenvolver o raciocínio lógico necessário na programação.

### Por que praticar depuração?

Mesmo algoritmos bem planejados podem apresentar erros, seja por distração, falta de atenção a detalhes ou desconhecimento de alguma regra lógica. Praticar a depuração ajuda a:

- **Desenvolver o olhar crítico** para encontrar inconsistências.
- **Compreender melhor o funcionamento do algoritmo**.
- **Aprimorar a capacidade de análise e resolução de problemas**.
- **Evitar erros comuns em projetos futuros**.

### Tipos de Erros em Algoritmos

Antes de praticar, é importante conhecer os principais tipos de erros que podem ocorrer:

- **Erros de sintaxe:** Ocorrem quando há problemas na escrita do pseudocódigo ou linguagem, como comandos incorretos ou estruturas mal formadas.
- **Erros lógicos:** O algoritmo executa, mas não produz o resultado esperado devido a uma falha no raciocínio ou na ordem das operações.
- **Erros de execução:** Ocorrem durante a execução, como divisões por zero ou acesso a variáveis não inicializadas.

### Estratégias para Depuração

1. **Leia o algoritmo com atenção:** Muitas vezes, reler o código com calma ajuda a identificar erros simples.
2. **Utilize fluxogramas:** Visualizar o fluxo do algoritmo pode facilitar a identificação de desvios lógicos.
3. **Teste com diferentes entradas:** Experimente valores variados, incluindo casos extremos, para verificar o comportamento do algoritmo.
4. **Divida o problema:** Analise partes menores do algoritmo para isolar o erro.
5. **Explique o algoritmo para outra pessoa:** O chamado "método do pato de borracha" pode ajudar a perceber falhas ao explicar o raciocínio em voz alta.

### Exercícios Práticos de Depuração

A seguir, apresentamos alguns exercícios para praticar a identificação e correção de erros em algoritmos escritos em pseudocódigo.

---

#### Exercício 1: Soma de Números

**Pseudocódigo com erro:**

```
Início
    Leia A, B
    Soma <- A - B
    Escreva "A soma é: ", Soma
Fim
```

**Tarefa:** Identifique e corrija o erro.

**Dica:** O operador utilizado para calcular a soma está correto?

---

#### Exercício 2: Estrutura de Decisão

**Pseudocódigo com erro:**

```
Início
    Leia idade
    Se idade > 18 então
        Escreva "Maior de idade"
    Senão
        Escreva "Menor de idade"
Fim
```

**Tarefa:** O algoritmo está correto para todas as idades? E se a idade for exatamente 18?

**Dica:** Revise a condição do teste lógico.

---

#### Exercício 3: Estrutura de Repetição

**Pseudocódigo com erro:**

```
Início
    i <- 1
    Enquanto i < 5 faça
        Escreva i
        i <- i - 1
Fim
```

**Tarefa:** O que acontece ao executar este algoritmo? Identifique e corrija o erro.

**Dica:** O valor de `i` está sendo atualizado corretamente?

---

### Como Corrigir

Após identificar o erro, reescreva o algoritmo corrigido. Por exemplo, no Exercício 1, o correto seria:

```
Início
    Leia A, B
    Soma <- A + B
    Escreva "A soma é: ", Soma
Fim
```

### Dicas Finais

- **Pratique sempre:** Quanto mais você praticar depuração, mais fácil será identificar e corrigir erros rapidamente.
- **Não tenha medo de errar:** Os erros são parte do processo de aprendizagem.
- **Utilize ferramentas de apoio:** Em linguagens reais, use depuradores (debuggers) e mensagens de saída para acompanhar o valor das variáveis.

### Conclusão

A depuração é uma etapa essencial no desenvolvimento de algoritmos e programas. Ao praticar exercícios de identificação e correção de erros, você aprimora sua lógica, atenção aos detalhes e capacidade de resolver problemas. Continue praticando com diferentes exemplos e, sempre que possível, revise e teste seus algoritmos antes de implementá-los em uma linguagem de programação.

---
```