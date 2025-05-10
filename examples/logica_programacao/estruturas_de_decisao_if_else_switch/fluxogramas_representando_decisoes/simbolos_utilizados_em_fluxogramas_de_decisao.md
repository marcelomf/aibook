# Símbolos Utilizados em Fluxogramas de Decisão

Os fluxogramas são ferramentas visuais fundamentais para representar algoritmos e processos lógicos, especialmente quando envolvem decisões. Eles facilitam a compreensão do fluxo de execução de um programa, tornando mais simples a identificação de etapas, condições e possíveis caminhos a serem seguidos. Para criar fluxogramas claros e padronizados, utiliza-se um conjunto de símbolos específicos, cada um com um significado próprio. Neste tópico, vamos conhecer os principais símbolos utilizados em fluxogramas de decisão e como aplicá-los corretamente.

---

## Principais Símbolos de Fluxogramas

### 1. **Elipse (Terminal)**
- **Função:** Indica o início e o fim do fluxograma.
- **Descrição:** Geralmente contém as palavras "Início" ou "Fim".
- **Exemplo:**
  ```
  +---------+
  |  Início |
  +---------+
  ```

### 2. **Retângulo (Processo)**
- **Função:** Representa uma ação ou instrução a ser executada, como atribuição de valores ou cálculos.
- **Descrição:** Dentro do retângulo, descreve-se a operação realizada.
- **Exemplo:**
  ```
  +-------------------+
  |  soma = a + b     |
  +-------------------+
  ```

### 3. **Losango (Decisão)**
- **Função:** Indica um ponto de decisão, onde o fluxo pode seguir por dois ou mais caminhos, dependendo de uma condição lógica.
- **Descrição:** Dentro do losango, coloca-se a pergunta ou condição a ser avaliada (ex: "idade >= 18?").
- **Saídas:** Normalmente, há duas saídas: "Sim" (Verdadeiro) e "Não" (Falso).
- **Exemplo:**
  ```
      +-----------------+
      | idade >= 18?    |
      +-----------------+
         /         \
      Sim           Não
  ```

### 4. **Setas (Fluxo de Controle)**
- **Função:** Indicam a direção do fluxo de execução, conectando os símbolos.
- **Descrição:** As setas mostram a sequência das operações e decisões.

### 5. **Paralelogramo (Entrada/Saída)**
- **Função:** Representa operações de entrada (leitura de dados) ou saída (exibição de resultados).
- **Descrição:** Especifica a ação, como "Ler valor" ou "Exibir resultado".
- **Exemplo:**
  ```
  +-------------------+
  |  Ler idade        |
  +-------------------+
  ```

---

## Exemplo Prático: Fluxograma de Decisão

Vamos ilustrar o uso dos símbolos em um exemplo simples: verificar se uma pessoa é maior de idade.

```plaintext
+---------+
|  Início |
+---------+
     |
+-------------------+
|  Ler idade        |
+-------------------+
     |
+-------------------+
| idade >= 18?      |
+-------------------+
   /         \
Sim           Não
 |             |
+-------------------+   +-------------------+
| Exibir "Maior"    |   | Exibir "Menor"    |
+-------------------+   +-------------------+
     |                     |
+---------+           +---------+
|   Fim   |           |   Fim   |
+---------+           +---------+
```

---

## Dicas para Utilizar Símbolos de Decisão

- **Clareza:** Use frases curtas e objetivas dentro dos símbolos.
- **Padronização:** Siga sempre os mesmos símbolos para facilitar a leitura.
- **Organização:** Mantenha o fluxo de cima para baixo ou da esquerda para a direita.
- **Conexões:** Certifique-se de que todas as setas estejam corretamente conectadas aos símbolos.

---

## Conclusão

O uso correto dos símbolos em fluxogramas de decisão é essencial para representar de forma clara e eficiente a lógica de um algoritmo. Com a padronização dos elementos — elipse, retângulo, losango, paralelogramo e setas —, é possível criar diagramas compreensíveis tanto para iniciantes quanto para profissionais experientes. Dominar esses símbolos é um passo importante para desenvolver habilidades em lógica de programação e análise de algoritmos.