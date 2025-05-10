
# Exercícios de Validação de Entrada de Dados com Laços

A validação de entrada de dados é uma etapa fundamental no desenvolvimento de algoritmos e programas. Ela garante que o usuário forneça informações corretas e dentro dos parâmetros esperados, evitando erros e comportamentos indesejados durante a execução do programa. Para realizar essa validação, as estruturas de repetição (`for`, `while`, `do-while`) são amplamente utilizadas, pois permitem que o programa continue solicitando dados até que uma entrada válida seja fornecida.

Neste tópico, você encontrará exemplos práticos e exercícios que demonstram como utilizar laços para validar entradas de dados, utilizando pseudocódigo e fluxogramas para facilitar o entendimento.

---

## Por que validar entradas com laços?

Imagine um programa que solicita a idade do usuário. Se o usuário digitar um valor negativo ou um texto, o programa pode apresentar resultados incorretos ou até mesmo travar. Utilizando laços, é possível garantir que o programa só prossiga quando a entrada for válida.

---

## Exemplo 1: Validação com `while`

**Problema:** Solicite ao usuário um número inteiro positivo. Caso o valor informado seja inválido, repita a solicitação.

**Pseudocódigo:**
```
leia numero
enquanto numero <= 0 faça
    escreva "Valor inválido! Digite um número inteiro positivo:"
    leia numero
fimenquanto
escreva "Número válido:", numero
```

**Explicação:**  
O laço `enquanto` (while) verifica se o número é menor ou igual a zero. Se for, solicita novamente até que o usuário digite um valor válido.

---

## Exemplo 2: Validação com `do-while`

**Problema:** Solicite ao usuário uma senha até que ele digite a senha correta ("1234").

**Pseudocódigo:**
```
faça
    escreva "Digite a senha:"
    leia senha
enquanto senha ≠ "1234"
escreva "Acesso permitido!"
```

**Explicação:**  
O laço `faça...enquanto` (do-while) garante que o bloco de código seja executado pelo menos uma vez, ideal para situações em que a entrada deve ser solicitada ao menos uma vez antes da validação.

---

## Exemplo 3: Validação com `for`

Embora o laço `for` seja mais utilizado quando o número de repetições é conhecido, ele pode ser adaptado para validação de entradas com limite de tentativas.

**Problema:** Permita que o usuário tente digitar um número entre 1 e 10 no máximo 3 vezes.

**Pseudocódigo:**
```
para tentativas de 1 até 3 faça
    escreva "Digite um número entre 1 e 10:"
    leia numero
    se numero >= 1 e numero <= 10 então
        escreva "Número válido:", numero
        pare
    fimse
    se tentativas = 3 então
        escreva "Número de tentativas excedido."
    fimse
fimpara
```

**Explicação:**  
O laço `para` (for) limita o número de tentativas. Se o usuário não digitar um valor válido após 3 tentativas, o programa exibe uma mensagem de erro.

---

## Exercícios Propostos

1. **Validação de Nota:**  
   Solicite ao usuário uma nota entre 0 e 10. Repita a solicitação até que um valor válido seja informado.

2. **Confirmação de Opção:**  
   Peça ao usuário para escolher uma opção do menu (1 - Iniciar, 2 - Configurações, 3 - Sair). Continue solicitando até que uma opção válida seja escolhida.

3. **Cadastro de Senha:**  
   Permita que o usuário cadastre uma senha com pelo menos 6 caracteres. Repita a solicitação até que a senha atenda ao critério.

4. **Limite de Tentativas:**  
   Solicite ao usuário um número par. Permita no máximo 5 tentativas. Se não acertar, exiba uma mensagem de erro.

---

## Dicas de Boas Práticas

- Sempre informe ao usuário quais são os critérios de validação.
- Utilize mensagens claras para indicar erros e orientar o usuário.
- Evite laços infinitos: sempre garanta uma condição de parada.
- Valide também o tipo de dado, se possível (por exemplo, se o usuário digitou texto ao invés de número).

---

## Conclusão

A validação de entrada de dados com laços é uma habilidade essencial para garantir a robustez e a confiabilidade dos programas. Praticar esses exercícios ajudará você a desenvolver algoritmos mais seguros e eficientes, além de preparar uma base sólida para o aprendizado de qualquer linguagem de programação.

---
```