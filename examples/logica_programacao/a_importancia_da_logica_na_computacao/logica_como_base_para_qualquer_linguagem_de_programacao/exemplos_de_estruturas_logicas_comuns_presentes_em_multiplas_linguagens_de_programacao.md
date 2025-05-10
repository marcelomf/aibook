
# Exemplos de Estruturas Lógicas Comuns Presentes em Múltiplas Linguagens de Programação

A lógica de programação é o alicerce sobre o qual todas as linguagens de programação são construídas. Independentemente da linguagem escolhida — seja Python, Java, C, JavaScript ou qualquer outra — certos conceitos e estruturas lógicas são universais. Compreender essas estruturas é fundamental para quem deseja se tornar um programador eficiente e capaz de transitar entre diferentes tecnologias.

Neste tópico, vamos explorar exemplos das principais estruturas lógicas presentes em praticamente todas as linguagens de programação, destacando sua sintaxe e funcionamento.

---

## 1. Estruturas de Decisão

As estruturas de decisão permitem que o programa tome diferentes caminhos de execução com base em condições avaliadas durante a execução.

### **If / Else**

A estrutura `if/else` é utilizada para executar um bloco de código caso uma condição seja verdadeira, e outro bloco caso seja falsa.

**Exemplo em pseudocódigo:**
```pseudocode
se idade >= 18 então
    escreva("Você é maior de idade")
senão
    escreva("Você é menor de idade")
fimse
```

**Exemplo em Python:**
```python
if idade >= 18:
    print("Você é maior de idade")
else:
    print("Você é menor de idade")
```

### **Switch / Case**

O `switch/case` é uma alternativa ao `if/else` quando há múltiplas condições a serem avaliadas para uma mesma variável.

**Exemplo em C:**
```c
switch (opcao) {
    case 1:
        printf("Opção 1 selecionada");
        break;
    case 2:
        printf("Opção 2 selecionada");
        break;
    default:
        printf("Opção inválida");
}
```

---

## 2. Estruturas de Repetição

Estruturas de repetição, ou laços, permitem executar um bloco de código várias vezes, de acordo com uma condição.

### **For**

O laço `for` é utilizado quando se sabe previamente o número de repetições.

**Exemplo em JavaScript:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Repetição número " + i);
}
```

### **While**

O laço `while` executa o bloco de código enquanto uma condição for verdadeira.

**Exemplo em Python:**
```python
contador = 0
while contador < 5:
    print("Contador:", contador)
    contador += 1
```

### **Do-While**

O `do-while` garante que o bloco de código seja executado pelo menos uma vez, pois a condição é verificada após a execução.

**Exemplo em C:**
```c
int contador = 0;
do {
    printf("Contador: %d\n", contador);
    contador++;
} while (contador < 5);
```

---

## 3. Declaração de Variáveis

Variáveis são espaços na memória para armazenar valores que podem ser utilizados e modificados durante a execução do programa.

**Exemplo em diferentes linguagens:**

- **Python:** `idade = 20`
- **Java:** `int idade = 20;`
- **JavaScript:** `let idade = 20;`

---

## 4. Operadores Lógicos e Relacionais

Operadores são utilizados para comparar valores ou realizar operações lógicas.

- **Operadores Relacionais:** `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Operadores Lógicos:** `&&` (E), `||` (OU), `!` (NÃO)

**Exemplo em pseudocódigo:**
```pseudocode
se (idade >= 18) e (possui_carteira) então
    escreva("Pode dirigir")
fimse
```

---

## 5. Funções e Procedimentos

Funções (ou procedimentos) são blocos de código reutilizáveis que executam uma tarefa específica.

**Exemplo em Python:**
```python
def saudacao(nome):
    print("Olá,", nome)

saudacao("Maria")
```

---

## Conclusão

Essas estruturas lógicas são a base da programação em qualquer linguagem. Ao dominar esses conceitos, o programador desenvolve a capacidade de resolver problemas de forma estruturada e eficiente, facilitando a aprendizagem de novas linguagens e tecnologias. Praticar a implementação dessas estruturas em diferentes linguagens é um excelente exercício para consolidar o raciocínio lógico e a adaptabilidade no mundo da programação.
```
