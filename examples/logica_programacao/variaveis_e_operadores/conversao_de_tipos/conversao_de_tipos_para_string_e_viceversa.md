# Conversão de Tipos para String e Vice-versa

A conversão de tipos, também conhecida como **casting** ou **coerção de tipos**, é um conceito fundamental na lógica de programação. Ela permite transformar valores de um tipo de dado para outro, facilitando operações e manipulações de dados em algoritmos. Um dos casos mais comuns é a conversão entre **strings** (cadeias de caracteres) e outros tipos, como números inteiros ou reais.

## Por que converter tipos?

Durante o desenvolvimento de algoritmos, é comum receber dados do usuário em formato de texto (string), mesmo quando o valor representa um número. Para realizar cálculos ou comparações, é necessário converter essa string para um tipo numérico. Da mesma forma, ao exibir resultados, muitas vezes precisamos transformar números em strings para apresentá-los ao usuário.

## Conversão para String

Converter um valor para string significa transformar qualquer tipo de dado (número, booleano, etc.) em uma sequência de caracteres. Isso é útil, por exemplo, ao concatenar valores em mensagens ou gerar relatórios.

### Exemplos em Pseudocódigo

```pseudocode
inteiro idade = 25
real altura = 1.75

// Conversão para string
string idadeTexto = CONVERTER_PARA_STRING(idade)
string alturaTexto = CONVERTER_PARA_STRING(altura)

// Exemplo de concatenação
string mensagem = "Idade: " + idadeTexto + ", Altura: " + alturaTexto
ESCREVA(mensagem)
```

### Exemplos em Linguagens Populares

- **Python:**  
  ```python
  idade = 25
  idade_texto = str(idade)
  ```
- **JavaScript:**  
  ```javascript
  let idade = 25;
  let idadeTexto = String(idade);
  ```
- **Java:**  
  ```java
  int idade = 25;
  String idadeTexto = Integer.toString(idade);
  ```

## Conversão de String para Outros Tipos

Quando recebemos dados do usuário ou de arquivos, geralmente eles vêm como strings. Para realizar operações matemáticas, é necessário converter essas strings para tipos numéricos.

### Exemplos em Pseudocódigo

```pseudocode
string entrada = "42"
inteiro numero = CONVERTER_PARA_INTEIRO(entrada)

string valor = "3.14"
real numeroReal = CONVERTER_PARA_REAL(valor)
```

### Exemplos em Linguagens Populares

- **Python:**  
  ```python
  entrada = "42"
  numero = int(entrada)
  valor = "3.14"
  numero_real = float(valor)
  ```
- **JavaScript:**  
  ```javascript
  let entrada = "42";
  let numero = parseInt(entrada);
  let valor = "3.14";
  let numeroReal = parseFloat(valor);
  ```
- **Java:**  
  ```java
  String entrada = "42";
  int numero = Integer.parseInt(entrada);
  String valor = "3.14";
  double numeroReal = Double.parseDouble(valor);
  ```

## Cuidados ao Converter Tipos

- **Validação:** Antes de converter uma string para número, verifique se ela contém um valor válido. Caso contrário, pode ocorrer erro ou exceção.
- **Perda de Informação:** Converter de um tipo mais complexo para um mais simples pode causar perda de dados (por exemplo, de real para inteiro).
- **Internacionalização:** Em alguns países, o separador decimal é a vírgula (`,`), não o ponto (`.`). Fique atento ao converter strings para números.

## Resumo

A conversão de tipos é essencial para manipular dados de diferentes naturezas em algoritmos. Saber como transformar valores entre strings e outros tipos permite criar programas mais flexíveis, seguros e interativos. Pratique a conversão de tipos em diferentes situações para dominar esse conceito fundamental da lógica de programação.