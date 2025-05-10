
# Exemplos Práticos de Escolha entre if/else e switch

Ao aprender lógica de programação, é fundamental compreender quando utilizar as estruturas de decisão `if/else` e `switch`. Ambas permitem que o programa tome decisões com base em condições, mas cada uma possui características próprias que as tornam mais adequadas para situações específicas. A seguir, apresentamos exemplos práticos para ajudar na escolha entre essas estruturas.

---

## 1. Quando Usar if/else

A estrutura `if/else` é indicada quando:

- As condições envolvem comparações complexas (maior, menor, diferente, intervalos, múltiplas variáveis).
- As decisões dependem de expressões booleanas ou combinações lógicas.
- O número de alternativas não é fixo ou é pequeno.

### Exemplo 1: Verificação de faixa etária

```pseudo
se idade < 12 então
    escreva "Criança"
senão se idade < 18 então
    escreva "Adolescente"
senão se idade < 60 então
    escreva "Adulto"
senão
    escreva "Idoso"
fimse
```

**Por que usar if/else?**  
Neste caso, as condições envolvem intervalos de valores, o que não pode ser tratado diretamente com `switch`.

---

## 2. Quando Usar switch

A estrutura `switch` é recomendada quando:

- A decisão depende do valor exato de uma única variável (normalmente números inteiros ou caracteres).
- Existem várias alternativas fixas e conhecidas.
- O código fica mais legível e organizado do que com múltiplos `if/else`.

### Exemplo 2: Menu de opções

```pseudo
escreva "Escolha uma opção: 1- Novo, 2- Abrir, 3- Salvar, 4- Sair"
leia opcao

switch opcao
    caso 1:
        escreva "Novo arquivo criado"
        pare
    caso 2:
        escreva "Arquivo aberto"
        pare
    caso 3:
        escreva "Arquivo salvo"
        pare
    caso 4:
        escreva "Saindo do programa"
        pare
    padrão:
        escreva "Opção inválida"
fimswitch
```

**Por que usar switch?**  
Aqui, a escolha depende do valor exato de `opcao`, e cada caso é tratado separadamente, tornando o código mais limpo e fácil de manter.

---

## 3. Comparando os Dois em um Mesmo Problema

### Exemplo 3: Identificação de dias da semana

#### Usando if/else

```pseudo
se dia == 1 então
    escreva "Domingo"
senão se dia == 2 então
    escreva "Segunda-feira"
...
senão se dia == 7 então
    escreva "Sábado"
senão
    escreva "Dia inválido"
fimse
```

#### Usando switch

```pseudo
switch dia
    caso 1:
        escreva "Domingo"
        pare
    caso 2:
        escreva "Segunda-feira"
        pare
    ...
    caso 7:
        escreva "Sábado"
        pare
    padrão:
        escreva "Dia inválido"
fimswitch
```

**Qual é melhor?**  
Neste caso, o `switch` é mais indicado, pois há várias alternativas fixas baseadas em um único valor.

---

## 4. Limitações e Boas Práticas

- O `switch` geralmente não aceita intervalos ou expressões complexas, apenas valores exatos.
- O `if/else` é mais flexível, mas pode deixar o código extenso e menos legível quando há muitas alternativas simples.
- Em algumas linguagens, o `switch` aceita apenas tipos específicos (inteiros, caracteres, strings).

---

## 5. Resumo

- **Use `if/else`** para condições complexas, intervalos, múltiplas variáveis ou quando as alternativas não são fixas.
- **Use `switch`** para múltiplas alternativas baseadas em um único valor exato, tornando o código mais organizado e fácil de entender.

A escolha correta entre `if/else` e `switch` contribui para a clareza, manutenção e eficiência do seu código, sendo uma habilidade essencial para todo programador iniciante.
```
