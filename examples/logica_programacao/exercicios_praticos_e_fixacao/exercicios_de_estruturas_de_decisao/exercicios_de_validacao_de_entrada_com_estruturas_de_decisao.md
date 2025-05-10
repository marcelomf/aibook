# Exercícios de Validação de Entrada com Estruturas de Decisão

A validação de entrada é uma etapa fundamental no desenvolvimento de algoritmos e programas. Ela garante que os dados fornecidos pelo usuário estejam dentro dos parâmetros esperados, evitando erros e comportamentos indesejados durante a execução do programa. Neste tópico, vamos explorar exercícios práticos que utilizam **estruturas de decisão** (como `if`, `else if`, `else` e `switch`) para validar entradas, consolidando o entendimento desse conceito essencial na lógica de programação.

---

## Por que validar entradas?

Ao criar um algoritmo, muitas vezes dependemos de informações fornecidas pelo usuário. No entanto, não podemos assumir que o usuário sempre fornecerá dados corretos ou no formato esperado. Por exemplo, se um programa pede a idade de uma pessoa, é importante garantir que o valor informado seja um número inteiro positivo e dentro de um intervalo plausível (por exemplo, entre 0 e 120).

A validação de entrada previne:

- **Erros de execução** (como divisões por zero ou acesso a índices inexistentes)
- **Resultados incorretos** devido a dados inválidos
- **Vulnerabilidades de segurança** em sistemas mais complexos

---

## Estruturas de Decisão na Validação

As estruturas de decisão permitem que o algoritmo tome diferentes caminhos de acordo com as condições avaliadas. Para validação de entrada, geralmente utilizamos:

- **if/else**: Para verificar se a entrada atende a uma condição.
- **else if**: Para testar múltiplas condições.
- **switch**: Para validar opções específicas, como um menu de escolhas.

---

## Exemplos Práticos

### 1. Validação de Idade

```pseudocode
Leia idade
Se idade < 0 ou idade > 120 então
    Escreva "Idade inválida. Digite um valor entre 0 e 120."
Senão
    Escreva "Idade válida!"
FimSe
```

**Explicação:**  
O algoritmo lê a idade e verifica se está fora do intervalo permitido. Se estiver, exibe uma mensagem de erro; caso contrário, confirma a validade.

---

### 2. Validação de Opção de Menu

```pseudocode
Escreva "Escolha uma opção: 1 - Iniciar, 2 - Configurações, 3 - Sair"
Leia opcao
Se opcao = 1 então
    Escreva "Iniciando..."
Senão se opcao = 2 então
    Escreva "Abrindo configurações..."
Senão se opcao = 3 então
    Escreva "Saindo do programa."
Senão
    Escreva "Opção inválida. Tente novamente."
FimSe
```

**Explicação:**  
O algoritmo apresenta um menu e valida se a opção escolhida é válida. Caso contrário, informa o erro ao usuário.

---

### 3. Validação de Nota Escolar

```pseudocode
Leia nota
Se nota < 0 ou nota > 10 então
    Escreva "Nota inválida. Digite um valor entre 0 e 10."
Senão
    Escreva "Nota registrada com sucesso."
FimSe
```

---

## Exercícios Propostos

1. **Validação de Senha:**  
   Peça ao usuário para digitar uma senha. Considere válida apenas se ela tiver pelo menos 8 caracteres.

2. **Validação de Número Par:**  
   Solicite um número inteiro e informe se ele é par ou ímpar. Se o valor não for inteiro, exiba uma mensagem de erro.

3. **Validação de Faixa Etária:**  
   Leia a idade de uma pessoa e classifique-a como:  
   - Criança (0 a 12 anos)  
   - Adolescente (13 a 17 anos)  
   - Adulto (18 a 59 anos)  
   - Idoso (60 anos ou mais)  
   Se a idade for inválida, informe o erro.

---

## Dicas para a Validação de Entrada

- Sempre antecipe possíveis erros do usuário.
- Utilize mensagens claras para orientar o usuário sobre o que é esperado.
- Em casos mais complexos, repita a solicitação até que a entrada seja válida (utilizando estruturas de repetição junto com as de decisão).

---

## Conclusão

A validação de entrada com estruturas de decisão é uma habilidade essencial para qualquer programador iniciante. Ela garante a robustez e a confiabilidade dos algoritmos, além de proporcionar uma melhor experiência ao usuário. Pratique os exercícios propostos e experimente criar suas próprias validações para diferentes tipos de dados!

---

**Próximo passo:**  
Após dominar a validação de entrada, avance para exercícios que combinam estruturas de decisão com estruturas de repetição, tornando seus algoritmos ainda mais interativos e seguros.