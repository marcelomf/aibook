
# Exercícios de Validação de Entrada de Dados com Decisões

A validação de entrada de dados é uma etapa fundamental no desenvolvimento de algoritmos e programas. Ela garante que as informações fornecidas pelo usuário estejam corretas, dentro dos limites esperados e no formato adequado antes de serem processadas. Utilizando estruturas de decisão como `if`, `else` e `switch`, é possível criar algoritmos robustos que evitam erros e comportamentos inesperados.

Neste tópico, você encontrará exercícios práticos para fixar o uso dessas estruturas na validação de dados. Os exemplos utilizam pseudocódigo e fluxogramas, facilitando a compreensão dos conceitos antes da implementação em uma linguagem de programação específica.

---

## Exercício 1: Validação de Idade

**Enunciado:**  
Solicite ao usuário que informe sua idade. O programa deve verificar se a idade está entre 0 e 120 anos. Caso contrário, exiba uma mensagem de erro.

**Pseudocódigo:**
```
Leia idade
Se idade >= 0 e idade <= 120 então
    Escreva "Idade válida!"
Senão
    Escreva "Idade inválida! Digite um valor entre 0 e 120."
FimSe
```

---

## Exercício 2: Validação de Opção de Menu

**Enunciado:**  
Apresente um menu com três opções ao usuário (1 - Cadastrar, 2 - Consultar, 3 - Sair). O programa deve validar se a opção escolhida é válida. Caso contrário, exiba uma mensagem de erro.

**Pseudocódigo:**
```
Escreva "Menu:"
Escreva "1 - Cadastrar"
Escreva "2 - Consultar"
Escreva "3 - Sair"
Leia opcao

Se opcao == 1 então
    Escreva "Opção Cadastrar selecionada."
Senão se opcao == 2 então
    Escreva "Opção Consultar selecionada."
Senão se opcao == 3 então
    Escreva "Saindo do programa."
Senão
    Escreva "Opção inválida! Escolha 1, 2 ou 3."
FimSe
```

---

## Exercício 3: Validação de Nota

**Enunciado:**  
Peça ao usuário para digitar uma nota de 0 a 10. Se a nota estiver fora desse intervalo, informe que a nota é inválida.

**Pseudocódigo:**
```
Leia nota
Se nota >= 0 e nota <= 10 então
    Escreva "Nota registrada com sucesso."
Senão
    Escreva "Nota inválida! Digite um valor entre 0 e 10."
FimSe
```

---

## Exercício 4: Validação de Sexo

**Enunciado:**  
Solicite ao usuário que informe o sexo, aceitando apenas 'M' para masculino ou 'F' para feminino. Qualquer outro valor deve ser considerado inválido.

**Pseudocódigo:**
```
Leia sexo
Se sexo == 'M' ou sexo == 'F' então
    Escreva "Sexo registrado."
Senão
    Escreva "Sexo inválido! Digite 'M' ou 'F'."
FimSe
```

---

## Exercício 5: Validação de Dia da Semana (com switch)

**Enunciado:**  
Peça ao usuário para digitar um número de 1 a 7, representando os dias da semana (1 - Domingo, 2 - Segunda, ..., 7 - Sábado). Utilize a estrutura `switch` para exibir o nome do dia correspondente ou uma mensagem de erro para valores inválidos.

**Pseudocódigo:**
```
Leia dia
Switch dia
    Caso 1:
        Escreva "Domingo"
    Caso 2:
        Escreva "Segunda-feira"
    Caso 3:
        Escreva "Terça-feira"
    Caso 4:
        Escreva "Quarta-feira"
    Caso 5:
        Escreva "Quinta-feira"
    Caso 6:
        Escreva "Sexta-feira"
    Caso 7:
        Escreva "Sábado"
    Padrão:
        Escreva "Dia inválido! Digite um número de 1 a 7."
FimSwitch
```

---

## Dicas para Validação de Dados

- Sempre verifique se os dados estão dentro dos limites esperados antes de processá-los.
- Utilize mensagens claras para orientar o usuário em caso de erro.
- Repita a solicitação de entrada até que um valor válido seja informado, se necessário.
- Lembre-se de considerar possíveis variações de formato (maiúsculas/minúsculas, espaços, etc.).

---

## Conclusão

A validação de entrada de dados é uma prática essencial para garantir a confiabilidade e a segurança dos programas. Com o uso adequado das estruturas de decisão, é possível criar algoritmos que previnem erros e melhoram a experiência do usuário. Pratique os exercícios propostos para consolidar seu entendimento e desenvolver soluções cada vez mais robustas!
```
