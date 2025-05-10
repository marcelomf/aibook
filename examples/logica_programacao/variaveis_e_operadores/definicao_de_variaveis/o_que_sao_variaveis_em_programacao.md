# O que são Variáveis em Programação

Em programação, **variáveis** são elementos fundamentais que permitem armazenar, manipular e recuperar dados durante a execução de um programa. Elas funcionam como “caixas” ou “espaços” na memória do computador, onde podemos guardar valores temporários que serão utilizados ao longo do desenvolvimento de algoritmos e programas.

## Definição de Variável

Uma variável pode ser definida como um **nome simbólico** associado a um espaço de memória, destinado a armazenar um valor que pode ser alterado durante a execução do programa. O valor armazenado em uma variável pode ser de diferentes tipos, como números inteiros, números decimais, textos (strings), caracteres, entre outros.

Em outras palavras, variáveis são recursos que permitem ao programador trabalhar com dados de forma dinâmica, facilitando a criação de soluções flexíveis e eficientes.

## Por que usar variáveis?

O uso de variáveis é essencial porque:

- Permite armazenar informações temporárias necessárias para o processamento de dados.
- Facilita a reutilização e a manipulação de valores ao longo do programa.
- Torna o código mais legível, organizado e fácil de manter.
- Permite a criação de algoritmos genéricos, que podem trabalhar com diferentes valores de entrada.

## Como declarar uma variável

A declaração de uma variável depende da linguagem de programação utilizada, mas geralmente envolve:

1. **Definir o tipo de dado** que a variável irá armazenar (em linguagens tipadas, como C, Java, etc.).
2. **Atribuir um nome** à variável, seguindo regras específicas de nomenclatura.
3. (Opcional) **Atribuir um valor inicial** à variável.

**Exemplo em pseudocódigo:**
```plaintext
inteiro idade
real salario
texto nome
```

**Exemplo em Python:**
```python
idade = 25
salario = 1500.50
nome = "Maria"
```

**Exemplo em Java:**
```java
int idade = 25;
double salario = 1500.50;
String nome = "Maria";
```

## Regras para nomes de variáveis

- Devem começar por uma letra ou sublinhado (_).
- Não podem conter espaços ou caracteres especiais (exceto _).
- Não podem ser palavras reservadas da linguagem (como if, for, while).
- Devem ser descritivos, indicando o propósito da variável.

## Tipos de variáveis

As variáveis podem armazenar diferentes tipos de dados, como:

- **Inteiros**: números sem casas decimais (ex: 10, -5, 0)
- **Reais/float**: números com casas decimais (ex: 3.14, -0.5)
- **Texto/String**: sequências de caracteres (ex: "Olá, mundo!")
- **Booleanos**: valores lógicos (verdadeiro ou falso)

## Atribuição de valores

Atribuir um valor a uma variável significa armazenar um dado nela. Isso é feito usando o operador de atribuição (geralmente o sinal de igual =).

**Exemplo:**
```plaintext
idade = 30
```
Neste exemplo, o valor 30 é armazenado na variável `idade`.

## Alteração de valores

O valor de uma variável pode ser alterado ao longo do programa, conforme necessário.

**Exemplo:**
```plaintext
idade = 30
idade = idade + 1  // Agora, idade vale 31
```

## Conclusão

Variáveis são componentes essenciais em qualquer linguagem de programação. Elas permitem armazenar e manipular dados de forma eficiente, tornando possível a criação de algoritmos dinâmicos e adaptáveis. Compreender o conceito de variáveis é o primeiro passo para desenvolver programas mais complexos e eficientes, sendo uma base sólida para o aprendizado de lógica de programação e de qualquer linguagem de desenvolvimento.