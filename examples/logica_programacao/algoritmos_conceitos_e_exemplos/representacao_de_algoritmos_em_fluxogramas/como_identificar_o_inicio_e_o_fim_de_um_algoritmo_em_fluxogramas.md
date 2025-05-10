# Como Identificar o Início e o Fim de um Algoritmo em Fluxogramas

Os fluxogramas são ferramentas visuais fundamentais para representar algoritmos de forma clara e compreensível. Eles utilizam símbolos padronizados para ilustrar o fluxo de execução de um programa, facilitando a análise, o desenvolvimento e a comunicação de soluções lógicas. Entre os elementos mais importantes de um fluxograma estão os pontos de **início** e **fim** do algoritmo, que delimitam o escopo da execução e garantem que o processo seja bem definido.

## Importância de Identificar o Início e o Fim

Definir explicitamente onde um algoritmo começa e termina é essencial para:

- **Organização:** Ajuda a estruturar o pensamento lógico e a evitar ambiguidades.
- **Clareza:** Facilita o entendimento do fluxo, tanto para quem desenvolve quanto para quem analisa o algoritmo.
- **Execução:** Garante que todas as etapas do processo sejam seguidas corretamente, do início ao fim.

## Símbolos Utilizados

No fluxograma, o início e o fim do algoritmo são representados pelo mesmo símbolo: o **elipse** (ou oval). Este símbolo é universalmente reconhecido e padronizado pela norma ISO 5807.

- **Início:** Indica o ponto onde a execução do algoritmo se inicia.
- **Fim:** Indica o ponto onde a execução do algoritmo é finalizada.

### Exemplo de Símbolos

```plaintext
   _________
  /         \
 |  INÍCIO  |
  \_________/

   _________
  /         \
 |   FIM    |
  \_________/
```

## Como Identificar no Fluxograma

1. **Início**
   - Sempre aparece no topo do fluxograma.
   - Contém a palavra “INÍCIO” (ou “START”, em inglês).
   - Não possui setas de entrada, apenas de saída, indicando o fluxo inicial do algoritmo.

2. **Fim**
   - Geralmente aparece na parte inferior do fluxograma.
   - Contém a palavra “FIM” (ou “END”, em inglês).
   - Recebe setas de entrada, mas não possui setas de saída, indicando o término do processo.

## Exemplo Prático

Vamos considerar um algoritmo simples: ler dois números, somá-los e exibir o resultado.

### Fluxograma

```plaintext
   _________
  /         \
 |  INÍCIO  |
  \_________/
       |
       v
+-------------------+
| Ler número 1      |
+-------------------+
       |
       v
+-------------------+
| Ler número 2      |
+-------------------+
       |
       v
+-------------------+
| Somar números     |
+-------------------+
       |
       v
+-------------------+
| Exibir resultado  |
+-------------------+
       |
       v
   _________
  /         \
 |   FIM    |
  \_________/
```

No exemplo acima, o **elipse superior** marca o início do algoritmo, enquanto o **elipse inferior** indica o fim. Todo o processamento ocorre entre esses dois pontos.

## Dicas e Boas Práticas

- Sempre utilize os símbolos corretos para início e fim.
- Não omita o início ou o fim, mesmo em algoritmos simples.
- Em fluxogramas mais complexos, pode haver múltiplos pontos de término (fins alternativos), mas todos devem ser claramente identificados.
- Utilize palavras claras e padronizadas (“INÍCIO” e “FIM”) para evitar confusões.

## Conclusão

Identificar corretamente o início e o fim de um algoritmo em fluxogramas é um passo fundamental para garantir a clareza, a organização e a eficiência na representação de soluções lógicas. Ao seguir as convenções e utilizar os símbolos adequados, você facilita tanto o desenvolvimento quanto a comunicação de algoritmos, tornando o processo de aprendizagem e aplicação da lógica de programação mais acessível e eficaz.