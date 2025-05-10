# Conversão de Estruturas de Repetição (for, while) em Fluxogramas

A compreensão das estruturas de repetição é fundamental para a lógica de programação, pois permitem executar um conjunto de instruções várias vezes, de acordo com uma condição. Entre as estruturas mais comuns estão o **for** e o **while**. Saber converter essas estruturas de pseudocódigo para fluxogramas é essencial para visualizar o fluxo de execução de um algoritmo e facilitar seu entendimento.

Neste tópico, você aprenderá como representar as estruturas de repetição **for** e **while** em fluxogramas, identificando seus elementos principais e a lógica de conversão.

---

## 1. Estrutura de Repetição **while**

A estrutura **while** executa um bloco de comandos enquanto uma condição for verdadeira. Sua forma geral em pseudocódigo é:

```plaintext
enquanto (condição) faça
    // comandos
fim_enquanto
```

### Representação em Fluxograma

No fluxograma, a estrutura **while** é representada por um ciclo que verifica a condição antes de executar o bloco de comandos (laço pré-teste). O fluxo é o seguinte:

1. **Início**
2. **Verificação da Condição** (losango)
   - Se **verdadeira**, executa o bloco de comandos e retorna à verificação.
   - Se **falsa**, sai do laço e segue para o próximo passo.
3. **Fim**

#### Exemplo

**Pseudocódigo:**
```plaintext
i ← 1
enquanto (i ≤ 5) faça
    escreva(i)
    i ← i + 1
fim_enquanto
```

**Fluxograma:**

```mermaid
flowchart TD
    A[Início] --> B[i ← 1]
    B --> C{ i ≤ 5? }
    C -- Sim --> D[escreva(i)]
    D --> E[i ← i + 1]
    E --> C
    C -- Não --> F[Fim]
```

---

## 2. Estrutura de Repetição **for**

A estrutura **for** é usada quando se sabe previamente o número de repetições. Sua forma geral em pseudocódigo é:

```plaintext
para i de valor_inicial até valor_final faça
    // comandos
fim_para
```

### Representação em Fluxograma

O **for** pode ser visto como uma variação do **while**, com inicialização, condição e incremento definidos. No fluxograma, a estrutura é semelhante, mas inclui explicitamente a inicialização e o incremento do contador.

1. **Início**
2. **Inicialização do Contador**
3. **Verificação da Condição** (losango)
   - Se **verdadeira**, executa o bloco de comandos, incrementa o contador e retorna à verificação.
   - Se **falsa**, sai do laço.
4. **Fim**

#### Exemplo

**Pseudocódigo:**
```plaintext
para i de 1 até 5 faça
    escreva(i)
fim_para
```

**Fluxograma:**

```mermaid
flowchart TD
    A[Início] --> B[i ← 1]
    B --> C{ i ≤ 5? }
    C -- Sim --> D[escreva(i)]
    D --> E[i ← i + 1]
    E --> C
    C -- Não --> F[Fim]
```

> **Observação:** O fluxograma do **for** e do **while** são muito semelhantes. A principal diferença está na forma como a inicialização e o incremento do contador são tratados. No **for**, ambos são explícitos e fazem parte da estrutura; no **while**, podem estar fora do laço.

---

## 3. Boas Práticas na Conversão

- **Identifique a condição de parada:** Ela deve ser representada por um losango (decisão) no fluxograma.
- **Inclua a inicialização do contador:** Geralmente, é um retângulo antes do laço.
- **Represente o incremento/decremento:** Após o bloco de comandos, adicione o passo de atualização do contador.
- **Evite laços infinitos:** Certifique-se de que a condição de saída está clara.

---

## 4. Resumo Visual

| Estrutura | Inicialização | Condição | Incremento | Fluxograma |
|-----------|---------------|----------|------------|------------|
| **while** | Antes do laço | No início do laço | Dentro do laço | Verifica condição antes de executar |
| **for**   | No início do laço | No início do laço | No final de cada iteração | Inicializa, verifica, executa, incrementa |

---

## 5. Conclusão

A conversão de estruturas de repetição do pseudocódigo para fluxogramas é uma habilidade essencial para programadores iniciantes. Ela permite visualizar o fluxo de execução, identificar possíveis erros lógicos e facilitar a transição para a implementação em qualquer linguagem de programação. Pratique a conversão de diferentes exemplos para consolidar seu entendimento!

---

**Dica:** Utilize ferramentas como [draw.io](https://draw.io), [Lucidchart](https://lucidchart.com) ou até mesmo papel e caneta para desenhar seus fluxogramas e aprimorar sua lógica de programação.