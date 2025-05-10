
# Validação e Tratamento de Dados de Diferentes Tipos

Ao desenvolver algoritmos e programas, é fundamental garantir que os dados manipulados estejam corretos e adequados ao contexto da aplicação. A validação e o tratamento de dados são etapas essenciais para evitar erros, garantir a integridade das informações e proporcionar uma melhor experiência ao usuário. Neste tópico, vamos abordar como validar e tratar dados dos principais tipos: inteiro, real, caractere e booleano.

---

## 1. Por que validar e tratar dados?

A entrada de dados pode vir de diversas fontes: usuários, arquivos, sensores, bancos de dados, entre outros. Muitas vezes, esses dados podem estar em formatos inesperados, conter erros ou não atender aos requisitos do programa. Sem validação, o programa pode apresentar comportamentos indesejados, falhas ou até mesmo vulnerabilidades de segurança.

**Exemplos de problemas comuns:**
- Usuário digita letras onde se espera um número.
- Um valor fora do intervalo permitido é informado.
- Dados obrigatórios são deixados em branco.

---

## 2. Validação de Dados por Tipo

### 2.1. Inteiro

**O que validar:**
- Se o valor informado é realmente um número inteiro.
- Se está dentro de um intervalo permitido (ex: idade entre 0 e 120).

**Exemplo em pseudocódigo:**
```pseudocode
leia valor
se valor não é inteiro então
    exiba "Digite um número inteiro válido."
senão se valor < 0 ou valor > 120 então
    exiba "Valor fora do intervalo permitido."
senão
    prossiga com o valor
fim se
```

### 2.2. Real (Números com casas decimais)

**O que validar:**
- Se o valor é um número real (pode conter ponto ou vírgula, dependendo do padrão).
- Se está dentro do intervalo esperado (ex: nota entre 0.0 e 10.0).

**Exemplo em pseudocódigo:**
```pseudocode
leia nota
se nota não é número real então
    exiba "Digite um número válido."
senão se nota < 0.0 ou nota > 10.0 então
    exiba "Nota fora do intervalo permitido."
senão
    prossiga com a nota
fim se
```

### 2.3. Caractere (char) e Cadeia de caracteres (string)

**O que validar:**
- Se o valor possui o tamanho esperado (ex: apenas uma letra, ou um nome com no mínimo 3 caracteres).
- Se contém apenas caracteres permitidos (ex: apenas letras, sem números ou símbolos).
- Se não está vazio.

**Exemplo em pseudocódigo:**
```pseudocode
leia letra
se tamanho(letra) ≠ 1 então
    exiba "Digite apenas um caractere."
senão se letra não está entre 'A' e 'Z' ou 'a' e 'z' então
    exiba "Digite uma letra válida."
senão
    prossiga com a letra
fim se
```

### 2.4. Booleano (lógico)

**O que validar:**
- Se o valor informado corresponde a uma opção válida (ex: "sim" ou "não", "verdadeiro" ou "falso", 1 ou 0).
- Se o valor não está em branco ou nulo.

**Exemplo em pseudocódigo:**
```pseudocode
leia resposta
se resposta ≠ "sim" e resposta ≠ "não" então
    exiba "Responda apenas com 'sim' ou 'não'."
senão
    prossiga com a resposta
fim se
```

---

## 3. Tratamento de Dados

Após a validação, pode ser necessário tratar os dados para garantir que estejam no formato adequado para uso no programa.

**Exemplos de tratamento:**
- Converter letras maiúsculas para minúsculas (ou vice-versa).
- Remover espaços em branco no início ou fim de uma string.
- Arredondar números reais para um determinado número de casas decimais.
- Substituir valores nulos por um padrão (ex: 0, "desconhecido", falso).

---

## 4. Boas Práticas

- **Sempre valide dados de entrada:** Nunca confie cegamente nos dados recebidos.
- **Forneça mensagens claras:** Ajude o usuário a entender o que está errado e como corrigir.
- **Evite repetições:** Crie funções ou procedimentos para validação reutilizáveis.
- **Considere o contexto:** As regras de validação podem variar conforme a aplicação.

---

## 5. Exemplo Prático

**Fluxograma de validação de idade:**

```plaintext
[Início]
   |
[Leia idade]
   |
[Idade é inteiro?] --NÃO--> [Exiba "Digite um número inteiro"]
   |
  SIM
   |
[Idade >= 0 e <= 120?] --NÃO--> [Exiba "Idade fora do intervalo"]
   |
  SIM
   |
[Prossiga]
   |
[Fim]
```

---

## 6. Conclusão

A validação e o tratamento de dados são etapas fundamentais para garantir a robustez e a confiabilidade dos programas. Ao dominar essas práticas para diferentes tipos de dados, você estará mais preparado para criar algoritmos seguros, eficientes e fáceis de manter, independentemente da linguagem de programação escolhida.

---
```