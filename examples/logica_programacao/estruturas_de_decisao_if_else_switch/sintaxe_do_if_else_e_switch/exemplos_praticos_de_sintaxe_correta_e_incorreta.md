
# Estruturas de Decisão: if, else, switch

## Sintaxe do if, else e switch

As estruturas de decisão são fundamentais na lógica de programação, pois permitem que o programa tome diferentes caminhos de execução conforme determinadas condições. As mais comuns são `if`, `else` e `switch`. A seguir, apresentamos exemplos práticos de sintaxe correta e incorreta dessas estruturas, utilizando pseudocódigo e exemplos em uma linguagem de programação popular (como Python e C), para facilitar o entendimento.

---

## 1. Estrutura `if` e `else`

### Sintaxe Correta

#### Pseudocódigo

```pseudocode
se (idade >= 18) então
    escreva("Você é maior de idade")
senão
    escreva("Você é menor de idade")
fimse
```

#### Exemplo em Python

```python
idade = 20
if idade >= 18:
    print("Você é maior de idade")
else:
    print("Você é menor de idade")
```

#### Exemplo em C

```c
int idade = 20;
if (idade >= 18) {
    printf("Você é maior de idade\n");
} else {
    printf("Você é menor de idade\n");
}
```

### Sintaxe Incorreta

#### Pseudocódigo

```pseudocode
se idade >= 18
    escreva("Você é maior de idade")
senão
    escreva("Você é menor de idade")
```
**Erro:** Falta dos parênteses na condição e do comando `então`.

#### Exemplo em Python

```python
idade = 20
if idade >= 18
    print("Você é maior de idade")
else
    print("Você é menor de idade")
```
**Erro:** Falta dos dois pontos `:` após a condição do `if`.

#### Exemplo em C

```c
int idade = 20;
if idade >= 18 {
    printf("Você é maior de idade\n");
} else
    printf("Você é menor de idade\n");
}
```
**Erros:**  
- Falta dos parênteses na condição do `if`.
- Chaves mal posicionadas.

---

## 2. Estrutura `switch`

A estrutura `switch` é útil quando há várias condições baseadas no valor de uma mesma variável.

### Sintaxe Correta

#### Pseudocódigo

```pseudocode
escolha (opcao)
    caso 1:
        escreva("Opção 1 selecionada")
        pare
    caso 2:
        escreva("Opção 2 selecionada")
        pare
    outrocaso:
        escreva("Opção inválida")
fimescolha
```

#### Exemplo em C

```c
int opcao = 2;
switch (opcao) {
    case 1:
        printf("Opção 1 selecionada\n");
        break;
    case 2:
        printf("Opção 2 selecionada\n");
        break;
    default:
        printf("Opção inválida\n");
}
```

### Sintaxe Incorreta

#### Pseudocódigo

```pseudocode
escolha opcao
    caso 1
        escreva("Opção 1 selecionada")
    caso 2
        escreva("Opção 2 selecionada")
    outrocaso
        escreva("Opção inválida")
```
**Erros:**  
- Falta dos parênteses em `escolha (opcao)`.
- Falta dos dois pontos após `caso` e `outrocaso`.
- Ausência do comando `pare` para evitar execução de múltiplos casos.
- Não finalizou com `fimescolha`.

#### Exemplo em C

```c
int opcao = 2;
switch opcao {
    case 1:
        printf("Opção 1 selecionada\n")
    case 2:
        printf("Opção 2 selecionada\n")
    default:
        printf("Opção inválida\n")
}
```
**Erros:**  
- Falta dos parênteses em `switch (opcao)`.
- Falta de ponto e vírgula `;` após os comandos `printf`.
- Ausência do comando `break` após cada caso, o que pode causar o chamado "fall-through" (execução de múltiplos casos).
- Chaves mal posicionadas.

---

## 3. Dicas para Evitar Erros Comuns

- Sempre utilize os símbolos de abertura e fechamento corretos: parênteses, chaves, dois pontos, etc.
- Em linguagens como C, lembre-se de usar `break` em cada caso do `switch`.
- Em Python, lembre-se dos dois pontos `:` após as condições e da indentação correta.
- No pseudocódigo, siga o padrão adotado para facilitar a leitura e compreensão.

---

## Conclusão

Compreender e praticar a sintaxe correta das estruturas de decisão é essencial para evitar erros e garantir que o programa funcione conforme o esperado. Sempre revise seu código e, em caso de dúvidas, consulte a documentação da linguagem utilizada ou exemplos confiáveis.
```
