
# Elementos Básicos de Fluxogramas: Como Identificar e Diferenciar Símbolos

Os fluxogramas são ferramentas visuais fundamentais na lógica de programação, pois permitem representar graficamente o fluxo de execução de um algoritmo. Para interpretar ou criar fluxogramas corretamente, é essencial conhecer os principais símbolos utilizados e seus significados. Cada símbolo possui uma função específica e, ao reconhecê-los, você será capaz de entender e construir fluxogramas de forma clara e eficiente.

## Principais Símbolos de Fluxogramas

A seguir, apresentamos os símbolos mais comuns em fluxogramas, suas representações e como diferenciá-los:

### 1. **Terminal (Início/Fim)**
- **Símbolo:** Oval ou elipse
- **Função:** Indica o ponto de início ou término do algoritmo.
- **Como identificar:** É geralmente o primeiro e o último símbolo do fluxograma, contendo palavras como “Início”, “Start”, “Fim” ou “End”.

```
 _________
|         |
|  Início |
|_________|
```

---

### 2. **Processo**
- **Símbolo:** Retângulo
- **Função:** Representa uma ação, instrução ou processamento, como cálculos, atribuições de valores, etc.
- **Como identificar:** Contém descrições de operações, como “x = x + 1” ou “Calcular média”.

```
 _____________
|             |
| x = x + 1   |
|_____________|
```

---

### 3. **Entrada/Saída (Input/Output)**
- **Símbolo:** Paralelogramo
- **Função:** Indica operações de entrada (leitura de dados) ou saída (exibição de resultados).
- **Como identificar:** Geralmente contém comandos como “Ler número” ou “Exibir resultado”.

```
  _____________
 /             \
|  Ler número   |
 \_____________/
```

---

### 4. **Decisão**
- **Símbolo:** Losango
- **Função:** Representa um ponto de decisão, onde o fluxo pode seguir por caminhos diferentes, dependendo de uma condição (exemplo: if, else).
- **Como identificar:** Contém perguntas ou condições, como “x > 10?”, e possui duas ou mais saídas (normalmente “Sim/Não” ou “Verdadeiro/Falso”).

```
   _________
  /         \
 /  x > 10?  \
 \           /
  \_________/
```

---

### 5. **Conector**
- **Símbolo:** Círculo pequeno
- **Função:** Utilizado para conectar diferentes partes do fluxograma, especialmente quando o diagrama é extenso ou se estende por mais de uma página.
- **Como identificar:** Geralmente contém uma letra ou número para referência.

```
   ___
  ( A )
   ‾‾‾
```

---

### 6. **Fluxo de Direção**
- **Símbolo:** Seta
- **Função:** Indica a direção do fluxo de execução entre os símbolos.
- **Como identificar:** Sempre aponta de um símbolo para outro, mostrando a sequência das operações.

```
[Início] → [Processo] → [Decisão]
```

---

## Dicas para Identificar e Diferenciar Símbolos

- **Formato:** Observe o formato geométrico do símbolo. Cada função possui um formato distinto.
- **Conteúdo:** Leia o texto dentro do símbolo. Ele geralmente indica a ação ou decisão a ser tomada.
- **Posição:** O início e o fim estão nas extremidades; decisões costumam ter ramificações; processos e entradas/saídas estão entre eles.
- **Setas:** Siga as setas para entender o fluxo do algoritmo.

## Tabela Resumo dos Símbolos

| Símbolo         | Formato      | Função                  | Exemplo de Conteúdo      |
|-----------------|-------------|-------------------------|-------------------------|
| Terminal        | Oval        | Início/Fim              | Início, Fim             |
| Processo        | Retângulo   | Ação/Processamento      | x = x + 1               |
| Entrada/Saída   | Paralelogramo | Ler/Exibir dados      | Ler número, Mostrar soma|
| Decisão         | Losango     | Condição/Desvio         | x > 10?                 |
| Conector        | Círculo     | Conexão de fluxos       | A, B, 1, 2              |
| Fluxo de Direção| Seta        | Indica sequência        | →                       |

---

## Conclusão

Saber identificar e diferenciar os símbolos em fluxogramas é fundamental para compreender e criar representações visuais de algoritmos. Com a prática, você reconhecerá rapidamente cada símbolo e entenderá o fluxo lógico de qualquer processo representado. Isso facilitará tanto o aprendizado da lógica de programação quanto a transição para linguagens de programação reais.
```
