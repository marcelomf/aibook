
## Exemplo Prático de Laço com Contador (`for`)

Os laços de repetição são fundamentais na programação, pois permitem executar um bloco de código várias vezes de forma controlada. O laço `for` é especialmente útil quando sabemos exatamente quantas vezes queremos repetir uma ação, pois ele utiliza um **contador** para controlar o número de repetições.

### Estrutura Básica do `for`

A estrutura geral de um laço `for` em pseudocódigo é:

```
para contador de valor_inicial até valor_final passo incremento faça
    // bloco de comandos
fim_para
```

- **contador**: variável que controla o número de repetições.
- **valor_inicial**: valor inicial do contador.
- **valor_final**: valor final até onde o laço irá executar.
- **incremento**: valor que será somado ao contador a cada repetição (geralmente 1).

### Exemplo Prático: Imprimindo Números de 1 a 10

Vamos supor que queremos exibir na tela os números de 1 a 10. Podemos utilizar um laço `for` com um contador para isso.

#### Pseudocódigo

```
para i de 1 até 10 passo 1 faça
    escreva(i)
fim_para
```

#### Explicação

- O laço começa com o contador `i` valendo 1.
- A cada repetição, `i` é incrementado em 1.
- O bloco de comandos (`escreva(i)`) é executado enquanto `i` for menor ou igual a 10.
- Quando `i` ultrapassa 10, o laço termina.

#### Fluxograma

```mermaid
flowchart TD
    A[Início] --> B[i = 1]
    B --> C{ i <= 10? }
    C -- Sim --> D[Escreva(i)]
    D --> E[i = i + 1]
    E --> C
    C -- Não --> F[Fim]
```

#### Exemplo em Linguagem de Programação (Python)

```python
for i in range(1, 11):
    print(i)
```

- `range(1, 11)` gera os números de 1 a 10 (o 11 não é incluído).
- O comando `print(i)` exibe cada número na tela.

### Aplicações Práticas

O laço `for` com contador é amplamente utilizado em diversas situações, como:

- Percorrer listas ou vetores.
- Repetir cálculos um número fixo de vezes.
- Gerar tabelas, sequências numéricas ou relatórios.

### Dicas e Boas Práticas

- Sempre inicialize o contador corretamente.
- Defina claramente a condição de parada para evitar laços infinitos.
- Utilize nomes de variáveis significativos quando possível, para facilitar a leitura do código.

---

O uso do laço `for` com contador é uma das ferramentas mais poderosas e frequentes na lógica de programação, sendo essencial para a construção de algoritmos eficientes e organizados.
```
