
# Utilização de Constantes e Variáveis para Condições

Ao trabalhar com estruturas de decisão, como `if`, `else` e `switch`, é fundamental compreender o papel das **constantes** e **variáveis** na formulação das condições. O uso adequado desses elementos contribui para a clareza, manutenção e eficiência do código, além de evitar erros comuns durante o desenvolvimento de algoritmos.

## O que são Constantes e Variáveis?

- **Variáveis** são espaços na memória do computador que armazenam valores que podem ser alterados durante a execução do programa. Por exemplo: idade, nota, saldo.
- **Constantes** são valores fixos, definidos uma única vez, que não mudam durante a execução do programa. Por exemplo: a quantidade máxima de tentativas permitidas, o valor de uma taxa fixa, ou um limite de aprovação.

## Por que Utilizar Constantes e Variáveis nas Condições?

Ao criar condições em estruturas de decisão, é comum comparar valores para determinar o fluxo do programa. Utilizar variáveis e constantes nessas comparações traz diversos benefícios:

- **Clareza**: Nomes significativos tornam o código mais legível e fácil de entender.
- **Manutenção**: Alterar o valor de uma constante em um único lugar reflete em todo o código, evitando erros e retrabalho.
- **Evita "números mágicos"**: Substituir valores literais por constantes nomeadas torna o código mais autoexplicativo.
- **Flexibilidade**: Variáveis permitem que as condições se adaptem a diferentes entradas e situações.

## Exemplos Práticos

### Exemplo 1: Utilizando Constantes

```pseudocode
const LIMITE_IDADE = 18

se idade >= LIMITE_IDADE então
    escreva("Acesso permitido")
senão
    escreva("Acesso negado")
fimse
```

Neste exemplo, o valor `18` é atribuído à constante `LIMITE_IDADE`. Se futuramente o limite mudar, basta alterar o valor da constante, sem a necessidade de procurar e modificar todas as ocorrências no código.

### Exemplo 2: Utilizando Variáveis

```pseudocode
se nota >= media_para_aprovacao então
    escreva("Aprovado")
senão
    escreva("Reprovado")
fimse
```

Aqui, `nota` e `media_para_aprovacao` são variáveis. O valor de `nota` pode variar conforme a entrada do usuário, enquanto `media_para_aprovacao` pode ser definida no início do programa ou recebida de outra fonte.

### Exemplo 3: Combinando Constantes e Variáveis em um Switch

```pseudocode
const OPCAO_SAIR = 0

escolha opcao
    caso 1:
        escreva("Cadastrar usuário")
    caso 2:
        escreva("Listar usuários")
    caso OPCAO_SAIR:
        escreva("Encerrar programa")
    outrocaso:
        escreva("Opção inválida")
fimescolha
```

O uso da constante `OPCAO_SAIR` torna o código mais legível e fácil de modificar.

## Boas Práticas

- **Dê nomes significativos** às constantes e variáveis, facilitando o entendimento do código.
- **Evite valores literais** ("números mágicos") diretamente nas condições; prefira constantes nomeadas.
- **Centralize a definição de constantes** no início do programa ou em um local apropriado.
- **Atualize valores em um único lugar** ao utilizar constantes, reduzindo a chance de inconsistências.
- **Utilize variáveis para dados que mudam** durante a execução, como entradas do usuário ou resultados de cálculos.

## Conclusão

A utilização adequada de constantes e variáveis nas condições das estruturas de decisão é uma prática essencial para a criação de algoritmos claros, organizados e fáceis de manter. Ao adotar essas boas práticas, você estará construindo uma base sólida para o desenvolvimento de programas eficientes e profissionais, independentemente da linguagem de programação escolhida.
```
