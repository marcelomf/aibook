# Principais Símbolos Utilizados em Fluxogramas

Os fluxogramas são representações gráficas de algoritmos ou processos, amplamente utilizados na lógica de programação para facilitar o entendimento, a análise e a comunicação de soluções. Para garantir clareza e padronização, os fluxogramas utilizam símbolos específicos, cada um com um significado próprio. Conhecer esses símbolos é fundamental para criar e interpretar fluxogramas de forma eficiente.

A seguir, apresentamos os principais símbolos utilizados em fluxogramas, suas funções e exemplos de uso:

---

## 1. **Elipse (Terminal)**

**Função:** Indica o início e o fim do fluxograma.

- **Início:** Marca o ponto de partida do algoritmo.
- **Fim:** Indica onde o algoritmo termina.

**Exemplo:**
```
+-----------------+
|    Início       |
+-----------------+
```

---

## 2. **Retângulo (Processo)**

**Função:** Representa uma operação ou ação a ser executada, como cálculos, atribuições de valores ou qualquer processamento de dados.

**Exemplo:**
```
+-----------------+
|  Soma = A + B   |
+-----------------+
```

---

## 3. **Paralelogramo (Entrada/Saída)**

**Função:** Indica operações de entrada (leitura de dados) ou saída (exibição de informações).

- **Entrada:** Leitura de dados do usuário.
- **Saída:** Exibição de resultados.

**Exemplo:**
```
+-----------------+
|  Leia número    |
+-----------------+
```
ou
```
+-----------------+
|  Mostre soma    |
+-----------------+
```

---

## 4. **Losango (Decisão)**

**Função:** Representa um ponto de decisão, onde o fluxo pode seguir por dois ou mais caminhos, dependendo de uma condição (verdadeira ou falsa).

**Exemplo:**
```
+-----------------+
|  A > B ?        |
+-----------------+
      /    \
   Sim      Não
```

---

## 5. **Seta (Fluxo de Controle)**

**Função:** Indica a direção do fluxo do processo, conectando os diferentes símbolos e mostrando a ordem de execução das operações.

**Exemplo:**
```
[Início] --> [Leia A] --> [Leia B] --> [Soma = A+B] --> [Mostre Soma] --> [Fim]
```

---

## 6. **Círculo (Conector)**

**Função:** Utilizado para conectar diferentes partes do fluxograma, especialmente quando o diagrama é muito grande ou se estende por mais de uma página.

**Exemplo:**
```
+---+
| A |
+---+
```
O conector "A" indica que o fluxo continua em outro ponto do fluxograma com o mesmo símbolo.

---

## 7. **Símbolo de Preparação (Hexágono)**

**Função:** Indica a preparação ou inicialização de uma variável ou configuração inicial necessária antes do início do processo principal.

**Exemplo:**
```
+-----------------+
|  Inicialize X   |
+-----------------+
```

---

## 8. **Símbolo de Subprocesso (Retângulo com linhas duplas)**

**Função:** Representa um subprocesso ou chamada de outro algoritmo, útil para modularização e reutilização de código.

**Exemplo:**
```
+=================+
||  Subprocesso  ||
+=================+
```

---

## Tabela Resumo dos Símbolos

| Símbolo         | Nome                | Função Principal                  |
|-----------------|---------------------|-----------------------------------|
| Elipse          | Terminal            | Início/Fim do algoritmo           |
| Retângulo       | Processo            | Operação ou processamento         |
| Paralelogramo   | Entrada/Saída       | Leitura ou exibição de dados      |
| Losango         | Decisão             | Ponto de escolha/condição         |
| Seta            | Fluxo de Controle   | Direção do fluxo do algoritmo     |
| Círculo         | Conector            | Continuação do fluxo              |
| Hexágono        | Preparação          | Inicialização de variáveis        |
| Retângulo Duplo | Subprocesso         | Chamada de outro processo         |

---

## Considerações Finais

O uso correto dos símbolos em fluxogramas é essencial para garantir a clareza e a compreensão dos algoritmos, tanto para quem os cria quanto para quem os interpreta. Ao dominar esses símbolos, você estará apto a representar visualmente qualquer processo lógico, facilitando o desenvolvimento e a comunicação de soluções em programação.

Lembre-se: a padronização dos símbolos torna os fluxogramas universais, permitindo que pessoas de diferentes áreas e níveis de conhecimento compreendam facilmente o funcionamento de um algoritmo.