# Declaração e Atribuição em uma Única Linha

Ao iniciar os estudos em lógica de programação, um dos primeiros conceitos que encontramos é o de **variáveis**. Variáveis são espaços na memória do computador reservados para armazenar valores que podem ser utilizados e modificados durante a execução de um algoritmo.

## O que é declaração de variáveis?

**Declarar** uma variável significa informar ao computador que você deseja reservar um espaço na memória para armazenar um determinado tipo de dado, como números inteiros, números decimais ou textos. Em pseudocódigo, a declaração geralmente envolve especificar o nome da variável e, em algumas linguagens, o tipo de dado.

Exemplo de declaração em pseudocódigo:
```
inteiro idade
real salario
texto nome
```

## O que é atribuição de variáveis?

**Atribuir** um valor a uma variável significa armazenar um dado específico naquele espaço de memória reservado. A atribuição é feita utilizando o operador de atribuição, geralmente representado pelo símbolo `←` em pseudocódigo ou `=` em muitas linguagens de programação.

Exemplo de atribuição em pseudocódigo:
```
idade ← 25
salario ← 3500.50
nome ← "Ana"
```

## Declaração e atribuição em uma única linha

Para tornar o código mais conciso e organizado, é comum realizar a declaração e a atribuição de uma variável em uma única linha. Isso significa que você cria a variável e já define o seu valor inicial ao mesmo tempo.

### Em Pseudocódigo

No pseudocódigo, a declaração e atribuição em uma única linha pode ser feita assim:
```
inteiro idade ← 25
real salario ← 3500.50
texto nome ← "Ana"
```
Neste exemplo, cada variável é declarada e recebe um valor inicial na mesma linha, facilitando a leitura e a manutenção do algoritmo.

### Em Linguagens de Programação

A sintaxe pode variar de acordo com a linguagem, mas a ideia é a mesma. Veja alguns exemplos:

#### Python
```python
idade = 25
salario = 3500.50
nome = "Ana"
```
Em Python, não é necessário declarar o tipo da variável explicitamente; o tipo é definido automaticamente conforme o valor atribuído.

#### Java
```java
int idade = 25;
double salario = 3500.50;
String nome = "Ana";
```
Em Java, é obrigatório informar o tipo da variável na declaração.

#### C
```c
int idade = 25;
float salario = 3500.50;
char nome[] = "Ana";
```
Em C, também é necessário declarar o tipo da variável.

## Vantagens da declaração e atribuição em uma única linha

- **Clareza:** O código fica mais limpo e fácil de entender, pois já mostra o valor inicial da variável.
- **Organização:** Facilita a visualização das variáveis utilizadas e seus valores iniciais.
- **Praticidade:** Reduz a quantidade de linhas de código, tornando o algoritmo mais enxuto.

## Boas práticas

- Sempre utilize nomes de variáveis que representem claramente o seu propósito.
- Inicialize variáveis sempre que possível, evitando erros causados por valores indefinidos.
- Em algoritmos mais complexos, agrupe declarações e atribuições de variáveis no início do código para facilitar a manutenção.

## Exercício

**Exemplo prático:**  
Declare e atribua, em uma única linha, as seguintes variáveis:
- Um número inteiro chamado `quantidade` com valor 10.
- Um número real chamado `preco` com valor 5.75.
- Um texto chamado `produto` com valor "Caderno".

**Resposta em pseudocódigo:**
```
inteiro quantidade ← 10
real preco ← 5.75
texto produto ← "Caderno"
```

---

A declaração e atribuição em uma única linha é uma prática comum e recomendada, especialmente em algoritmos simples ou quando já se conhece o valor inicial da variável. Compreender esse conceito é fundamental para escrever códigos mais claros, eficientes e organizados.