# Exercícios Práticos sobre Conversão de Tipos

A conversão de tipos, também chamada de **casting**, é um conceito fundamental na lógica de programação. Ela permite transformar um dado de um tipo para outro, como de texto para número, de inteiro para decimal, entre outros. Isso é essencial para garantir que operações matemáticas, comparações e manipulações de dados ocorram corretamente.

A seguir, você encontrará exercícios práticos para fixar o conceito de conversão de tipos, utilizando pseudocódigo e exemplos de fluxogramas. Esses exercícios ajudarão a entender quando e como aplicar a conversão de tipos em situações reais.

---

## Exercício 1: Somando Números Digitados como Texto

**Enunciado:**  
Peça ao usuário para digitar dois números. Considere que os valores digitados são recebidos como texto (string). Converta-os para números inteiros e exiba a soma.

**Pseudocódigo:**
```
INÍCIO
    ESCREVA "Digite o primeiro número:"
    LEIA texto1
    ESCREVA "Digite o segundo número:"
    LEIA texto2

    numero1 <- CONVERTER_PARA_INTEIRO(texto1)
    numero2 <- CONVERTER_PARA_INTEIRO(texto2)

    soma <- numero1 + numero2

    ESCREVA "A soma é: ", soma
FIM
```

**Explicação:**  
Se não convertermos `texto1` e `texto2` para inteiros, a operação de soma pode resultar em uma concatenação de textos, e não em uma soma matemática.

---

## Exercício 2: Calculando a Média com Conversão para Decimal

**Enunciado:**  
Solicite ao usuário três notas (podem ser números com casas decimais, recebidos como texto). Converta para o tipo decimal (float) e calcule a média.

**Pseudocódigo:**
```
INÍCIO
    ESCREVA "Digite a primeira nota:"
    LEIA nota1_texto
    ESCREVA "Digite a segunda nota:"
    LEIA nota2_texto
    ESCREVA "Digite a terceira nota:"
    LEIA nota3_texto

    nota1 <- CONVERTER_PARA_DECIMAL(nota1_texto)
    nota2 <- CONVERTER_PARA_DECIMAL(nota2_texto)
    nota3 <- CONVERTER_PARA_DECIMAL(nota3_texto)

    media <- (nota1 + nota2 + nota3) / 3

    ESCREVA "A média é: ", media
FIM
```

**Dica:**  
Sempre que for realizar cálculos com números decimais, garanta que os valores estejam no tipo correto para evitar erros de arredondamento ou perda de precisão.

---

## Exercício 3: Verificando a Idade

**Enunciado:**  
Peça ao usuário para digitar sua idade. O valor será recebido como texto. Converta para inteiro e verifique se a pessoa é maior de idade (18 anos ou mais).

**Pseudocódigo:**
```
INÍCIO
    ESCREVA "Digite sua idade:"
    LEIA idade_texto

    idade <- CONVERTER_PARA_INTEIRO(idade_texto)

    SE idade >= 18 ENTÃO
        ESCREVA "Você é maior de idade."
    SENÃO
        ESCREVA "Você é menor de idade."
    FIMSE
FIM
```

---

## Exercício 4: Concatenando Números e Texto

**Enunciado:**  
Receba um número inteiro e um texto do usuário. Converta o número para texto e exiba uma mensagem concatenando ambos.

**Pseudocódigo:**
```
INÍCIO
    ESCREVA "Digite um número:"
    LEIA numero_texto
    ESCREVA "Digite uma mensagem:"
    LEIA mensagem

    numero <- CONVERTER_PARA_INTEIRO(numero_texto)
    numero_como_texto <- CONVERTER_PARA_TEXTO(numero)

    ESCREVA "Sua mensagem: " + mensagem + " (" + numero_como_texto + ")"
FIM
```

**Observação:**  
A conversão de número para texto é útil quando queremos exibir valores numéricos junto com mensagens.

---

## Exercício 5: Fluxograma de Conversão de Tipos

**Desafio:**  
Desenhe um fluxograma que represente o processo de ler um valor como texto, converter para inteiro e verificar se é par ou ímpar.

**Passos:**
1. Início
2. Ler valor como texto
3. Converter para inteiro
4. Dividir por 2 e verificar o resto
5. Se resto = 0, exibir "Par"
6. Senão, exibir "Ímpar"
7. Fim

---

## Dicas para Praticar

- Sempre teste o que acontece se tentar converter um texto que não representa um número (exemplo: "abc").
- Experimente converter entre diferentes tipos: inteiro para decimal, decimal para inteiro, número para texto, etc.
- Em linguagens reais, as funções de conversão podem ter nomes diferentes, como `int()`, `float()`, `str()`, `parseInt()`, `toString()`, etc.

---

## Conclusão

A conversão de tipos é uma habilidade essencial para evitar erros e garantir que os dados sejam tratados corretamente em algoritmos e programas. Pratique bastante com diferentes tipos de dados e situações para dominar esse conceito fundamental da lógica de programação!