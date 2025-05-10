# Elementos Básicos de Fluxogramas: Significado e Função de Cada Símbolo

Os fluxogramas são ferramentas visuais fundamentais na lógica de programação, pois permitem representar graficamente o fluxo de execução de um algoritmo ou processo. Utilizando símbolos padronizados, eles facilitam a compreensão, análise e comunicação de soluções lógicas, tornando o desenvolvimento de programas mais organizado e eficiente.

A seguir, apresentamos os principais símbolos utilizados em fluxogramas, seus significados e funções:

---

## 1. **Elipse (Terminal)**

**Símbolo:**  
![Terminal](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flowchart_Terminator.svg/60px-Flowchart_Terminator.svg.png)

**Significado:**  
Indica o início e o fim do fluxograma.

**Função:**  
- **Início:** Marca o ponto de partida do algoritmo.
- **Fim:** Indica onde o algoritmo termina.

**Exemplo de uso:**  
```
Início
...
Fim
```

---

## 2. **Retângulo (Processo)**

**Símbolo:**  
![Processo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flowchart_Process.svg/60px-Flowchart_Process.svg.png)

**Significado:**  
Representa uma ação, operação ou instrução a ser executada.

**Função:**  
- Executar cálculos (ex: soma, subtração)
- Atribuir valores a variáveis
- Qualquer processamento de dados

**Exemplo de uso:**  
```
x = x + 1
```

---

## 3. **Paralelogramo (Entrada/Saída de Dados)**

**Símbolo:**  
![Entrada/Saída](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flowchart_IO.svg/60px-Flowchart_IO.svg.png)

**Significado:**  
Indica operações de entrada (leitura) ou saída (exibição) de dados.

**Função:**  
- **Entrada:** Receber dados do usuário (ex: ler um número)
- **Saída:** Exibir informações (ex: mostrar resultado)

**Exemplo de uso:**  
```
Ler idade
Exibir resultado
```

---

## 4. **Losango (Decisão)**

**Símbolo:**  
![Decisão](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flowchart_Decision.svg/60px-Flowchart_Decision.svg.png)

**Significado:**  
Representa um ponto de decisão, onde o fluxo pode seguir por dois ou mais caminhos, dependendo de uma condição lógica.

**Função:**  
- Estruturas condicionais (ex: if, else)
- Perguntas de sim/não, verdadeiro/falso

**Exemplo de uso:**  
```
Idade >= 18?
Sim → Maior de idade
Não → Menor de idade
```

---

## 5. **Seta (Fluxo de Controle)**

**Símbolo:**  
→

**Significado:**  
Indica a direção do fluxo de execução entre os símbolos.

**Função:**  
- Conectar os símbolos do fluxograma
- Mostrar a ordem das operações

---

## 6. **Retângulo com Bordas Duplas (Subprocesso/Chamada de Sub-rotina)**

**Símbolo:**  
![Subprocesso](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flowchart_Predefined_Process.svg/60px-Flowchart_Predefined_Process.svg.png)

**Significado:**  
Representa a chamada de um processo ou algoritmo já definido em outro local (sub-rotina ou função).

**Função:**  
- Modularizar o fluxograma
- Reutilizar processos

**Exemplo de uso:**  
```
Calcular Média
```

---

## 7. **Círculo (Conector)**

**Símbolo:**  
![Conector](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Flowchart_Connector.svg/60px-Flowchart_Connector.svg.png)

**Significado:**  
Utilizado para conectar diferentes partes do fluxograma, especialmente quando o diagrama é extenso ou se estende por mais de uma página.

**Função:**  
- Evitar cruzamento de linhas
- Continuar o fluxo em outro ponto do fluxograma

---

## 8. **Símbolos Especiais**

- **Documentos:** Representam documentos impressos ou digitais.
- **Armazenamento:** Indicam operações de leitura ou gravação em arquivos ou bancos de dados.

---

## **Resumo Visual dos Principais Símbolos**

| Símbolo | Nome                | Função Principal                  |
|---------|---------------------|-----------------------------------|
| ⬭      | Terminal            | Início/Fim                        |
| ▭      | Processo            | Ação/Operação                     |
| ⧫      | Decisão             | Condição/Desvio de Fluxo          |
| ⧫      | Entrada/Saída       | Leitura/Exibição de Dados         |
| →       | Fluxo de Controle   | Direção do Fluxo                  |
| ⧈      | Subprocesso         | Chamada de Sub-rotina             |
| ◯       | Conector            | Continuação do Fluxo              |

---

## **Conclusão**

Conhecer o significado e a função de cada símbolo em um fluxograma é essencial para criar representações claras e precisas de algoritmos. O uso correto desses elementos facilita a comunicação entre programadores, analistas e demais envolvidos no desenvolvimento de software, além de contribuir para a organização e eficiência dos projetos.

Ao dominar os símbolos básicos, você estará apto a desenhar fluxogramas que servem como base para a implementação de soluções em qualquer linguagem de programação.