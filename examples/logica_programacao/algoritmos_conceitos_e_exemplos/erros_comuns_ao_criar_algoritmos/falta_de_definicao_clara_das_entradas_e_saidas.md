## Erros Comuns ao Criar Algoritmos

### Falta de Definição Clara das Entradas e Saídas

Um dos erros mais frequentes e prejudiciais ao criar algoritmos é a **falta de definição clara das entradas e saídas**. Esse problema pode comprometer todo o desenvolvimento do algoritmo, dificultando sua compreensão, implementação e manutenção. Vamos entender por que isso acontece, quais são as consequências e como evitar esse erro.

---

#### O que são Entradas e Saídas em um Algoritmo?

- **Entradas**: São os dados ou informações que o algoritmo recebe para processar. Podem ser valores fornecidos pelo usuário, arquivos, sensores, entre outros.
- **Saídas**: São os resultados produzidos pelo algoritmo após o processamento das entradas. Podem ser valores exibidos na tela, arquivos gerados, sinais enviados, etc.

---

#### Por que a Definição Clara é Importante?

1. **Compreensão do Problema**  
   Definir claramente as entradas e saídas ajuda a entender o que o algoritmo deve fazer. Sem isso, é fácil perder o foco e criar soluções que não resolvem o problema proposto.

2. **Facilidade de Implementação**  
   Quando as entradas e saídas estão bem definidas, fica mais simples escrever o pseudocódigo, desenhar o fluxograma e, posteriormente, implementar o algoritmo em uma linguagem de programação.

3. **Testes e Validação**  
   Com entradas e saídas bem especificadas, é possível criar casos de teste para verificar se o algoritmo está funcionando corretamente.

---

#### Exemplos de Falta de Definição

- **Exemplo 1:**  
  *Problema:* "Calcule a média dos alunos."  
  *Erro:* Não está claro quantos alunos são, quais notas devem ser consideradas, se há pesos, etc.  
  *Consequência:* O algoritmo pode ser implementado de forma errada ou incompleta.

- **Exemplo 2:**  
  *Problema:* "Exiba o resultado."  
  *Erro:* Não está especificado o que deve ser exibido, em qual formato, para quem, etc.  
  *Consequência:* O resultado pode ser apresentado de forma inadequada ou incompreensível.

---

#### Como Evitar esse Erro?

1. **Descreva Detalhadamente as Entradas**
   - Liste todos os dados necessários.
   - Especifique o tipo de cada entrada (número, texto, lista, etc.).
   - Informe restrições (valores mínimos/máximos, formatos, etc.).

2. **Defina Claramente as Saídas**
   - Explique o que o algoritmo deve produzir.
   - Especifique o formato da saída (número, mensagem, arquivo, etc.).
   - Indique como e onde a saída será apresentada.

3. **Utilize Exemplos**
   - Mostre exemplos de entradas e as respectivas saídas esperadas.
   - Isso ajuda a validar se a definição está clara e completa.

---

#### Exemplo Prático

**Problema Mal Definido:**  
"Crie um algoritmo para calcular o desconto em uma compra."

**Problema Bem Definido:**  
"Crie um algoritmo que receba como entrada o valor total de uma compra (número decimal) e a porcentagem de desconto (número inteiro entre 0 e 100). O algoritmo deve calcular o valor final com desconto e exibir esse valor formatado com duas casas decimais."

- **Entradas:**  
  - Valor total da compra (número decimal, maior que zero)
  - Porcentagem de desconto (número inteiro, de 0 a 100)

- **Saída:**  
  - Valor final da compra após o desconto (número decimal, duas casas decimais)

---

#### Conclusão

A definição clara das entradas e saídas é um passo fundamental na criação de algoritmos eficientes e corretos. Sempre que for desenvolver um algoritmo, dedique tempo para especificar detalhadamente quais dados serão recebidos e quais resultados devem ser produzidos. Isso evitará erros, retrabalho e facilitará o aprendizado e a evolução na lógica de programação.