
# Exercícios Práticos e Fixação

## Resolução Comentada de Problemas

### Explicação das Decisões Tomadas Durante a Resolução

Ao resolver problemas de lógica de programação, cada decisão tomada durante o processo é fundamental para garantir que a solução seja correta, eficiente e compreensível. Nesta seção, vamos analisar como essas decisões são feitas, utilizando exemplos práticos e destacando os principais pontos de atenção.

---

#### 1. **Compreensão do Problema**

Antes de começar a escrever qualquer código ou pseudocódigo, é essencial entender completamente o enunciado do problema. Isso inclui identificar:

- **Entradas:** Quais dados o programa receberá?
- **Saídas:** O que o programa deve exibir ou retornar?
- **Restrições:** Existem limites para os valores de entrada? Há condições especiais a serem consideradas?

**Exemplo:**  
*Problema: Ler dois números inteiros e exibir o maior deles.*

**Decisão:**  
Antes de tudo, é preciso garantir que o programa leia corretamente dois valores inteiros e, em seguida, compare-os para determinar qual é o maior.

---

#### 2. **Escolha das Estruturas de Dados**

A seleção das variáveis e estruturas de dados adequadas é crucial. Para problemas simples, variáveis do tipo inteiro ou real podem ser suficientes. Para problemas mais complexos, pode ser necessário utilizar vetores, matrizes ou até estruturas mais avançadas.

**Exemplo:**  
No problema acima, duas variáveis inteiras (`num1` e `num2`) são suficientes.

---

#### 3. **Definição do Algoritmo**

Com o problema compreendido e as variáveis definidas, o próximo passo é criar um algoritmo que resolva o problema de forma lógica e sequencial. O uso de pseudocódigo ou fluxogramas pode ajudar a visualizar o fluxo da solução.

**Exemplo de Pseudocódigo:**
```
Leia num1
Leia num2
Se num1 > num2 então
    Escreva num1
Senão
    Escreva num2
FimSe
```

**Decisão:**  
Optou-se por uma estrutura de decisão simples (`Se...Senão`) porque o problema exige uma comparação direta entre dois valores.

---

#### 4. **Seleção das Estruturas de Controle**

A escolha entre estruturas de decisão (if, else, switch) e de repetição (for, while, do-while) depende do problema. Para comparações, estruturas de decisão são ideais. Para processar listas ou repetir ações, estruturas de repetição são mais adequadas.

**Exemplo:**  
Se o problema pedisse para ler 10 números e exibir o maior, seria necessário usar uma estrutura de repetição (`para`, `enquanto`).

---

#### 5. **Tratamento de Casos Especiais**

É importante considerar situações que podem não estar explícitas no enunciado, como entradas inválidas ou empates.

**Exemplo:**  
Se os dois números forem iguais, o que fazer?  
Neste caso, pode-se decidir exibir uma mensagem informando que os números são iguais.

---

#### 6. **Clareza e Organização do Código**

Durante a resolução, é fundamental manter o código organizado, com nomes de variáveis claros e comentários explicativos. Isso facilita a manutenção e o entendimento por outras pessoas (ou por você mesmo no futuro).

---

#### 7. **Testes e Validação**

Após implementar a solução, é essencial testá-la com diferentes entradas, incluindo casos extremos, para garantir que todas as situações foram contempladas.

---

### **Resumo das Decisões Tomadas**

- **Entender o problema** antes de começar a resolver.
- **Escolher variáveis** e estruturas de dados adequadas.
- **Definir o algoritmo** usando pseudocódigo ou fluxogramas.
- **Selecionar as estruturas de controle** apropriadas (decisão ou repetição).
- **Tratar casos especiais** e entradas inválidas.
- **Manter o código claro e organizado**.
- **Testar a solução** com diferentes entradas.

---

### **Exemplo Completo: Encontrar o Maior de Três Números**

**Enunciado:**  
Ler três números inteiros e exibir o maior deles.

**Decisões Tomadas:**

1. **Variáveis:** Três inteiros (`a`, `b`, `c`).
2. **Estrutura de decisão:** Utilizar `if...else` aninhados para comparar os valores.
3. **Tratamento de empate:** Se houver empate, exibir mensagem apropriada.

**Pseudocódigo:**
```
Leia a
Leia b
Leia c
Se a >= b e a >= c então
    Escreva "Maior: ", a
Senão se b >= a e b >= c então
    Escreva "Maior: ", b
Senão
    Escreva "Maior: ", c
FimSe
```

**Explicação:**  
- Comparações são feitas para garantir que o maior valor seja exibido, mesmo em caso de empate.
- O uso de `>=` garante que empates sejam tratados corretamente.

---

## **Conclusão**

Explicar as decisões tomadas durante a resolução de problemas é fundamental para o aprendizado da lógica de programação. Esse processo desenvolve o raciocínio lógico, a capacidade de análise e a habilidade de criar soluções eficientes e robustas. Ao praticar e comentar cada etapa, o iniciante constrói uma base sólida para avançar no desenvolvimento de software.
```
