
# Exercícios Resolvidos de Simulação de Situações do Cotidiano

A lógica de programação é uma ferramenta poderosa para resolver problemas do dia a dia. Ao simular situações cotidianas, como filas em bancos ou o funcionamento de um caixa eletrônico, desenvolvemos a capacidade de analisar cenários, identificar variáveis e criar algoritmos eficientes. Nesta seção, apresentamos exercícios resolvidos que ilustram como aplicar os conceitos aprendidos para simular situações comuns, utilizando pseudocódigo e fluxogramas para facilitar o entendimento.

---

## Exercício 1: Simulação de Fila em uma Padaria

**Enunciado:**  
Em uma padaria, os clientes formam uma fila para serem atendidos. Cada cliente é atendido por ordem de chegada. Simule o atendimento de 5 clientes, mostrando a ordem de atendimento.

### Resolução

#### Análise do Problema

- Precisamos de uma estrutura para armazenar a fila (por exemplo, uma lista).
- Os clientes entram na fila e são atendidos um a um, na ordem de chegada (FIFO - First In, First Out).

#### Pseudocódigo

```plaintext
Início
    Criar uma lista chamada fila
    Para i de 1 até 5 faça
        Ler nome_do_cliente
        Adicionar nome_do_cliente ao final da fila
    FimPara

    Enquanto fila não estiver vazia faça
        cliente_atual = Remover o primeiro elemento da fila
        Escrever "Atendendo o cliente: ", cliente_atual
    FimEnquanto
Fim
```

#### Fluxograma

```plaintext
[Início]
   |
   v
[Para i de 1 até 5]
   |
   v
[Ler nome_do_cliente]
   |
   v
[Adicionar nome_do_cliente à fila]
   |
   v
[Enquanto fila não vazia]
   |
   v
[Remover cliente da fila]
   |
   v
[Atender cliente]
   |
   v
[Fim]
```

#### Exemplo de Execução

Suponha que os clientes sejam: Ana, Bruno, Carla, Daniel, Elisa.

**Saída:**
```
Atendendo o cliente: Ana
Atendendo o cliente: Bruno
Atendendo o cliente: Carla
Atendendo o cliente: Daniel
Atendendo o cliente: Elisa
```

---

## Exercício 2: Simulação de Caixa Eletrônico

**Enunciado:**  
Simule o funcionamento de um caixa eletrônico que permite ao usuário sacar um valor. O caixa possui cédulas de R$100, R$50, R$20, R$10 e R$5. O algoritmo deve informar quantas cédulas de cada valor serão entregues, utilizando o menor número possível de cédulas.

### Resolução

#### Análise do Problema

- O valor do saque deve ser decomposto nas cédulas disponíveis.
- Utilizar a maior cédula possível em cada etapa.

#### Pseudocódigo

```plaintext
Início
    Ler valor_saque
    Para cada cédula em [100, 50, 20, 10, 5] faça
        quantidade = valor_saque div cédula
        valor_saque = valor_saque - (quantidade * cédula)
        Se quantidade > 0 então
            Escrever "Entregar ", quantidade, " cédula(s) de R$", cédula
        FimSe
    FimPara
    Se valor_saque > 0 então
        Escrever "Não é possível sacar o valor restante: R$", valor_saque
    FimSe
Fim
```

#### Fluxograma

```plaintext
[Início]
   |
   v
[Ler valor_saque]
   |
   v
[Para cada cédula]
   |
   v
[Calcular quantidade de cédulas]
   |
   v
[Atualizar valor_saque]
   |
   v
[Se quantidade > 0, exibir quantidade]
   |
   v
[Se valor_saque > 0, exibir mensagem de valor não sacado]
   |
   v
[Fim]
```

#### Exemplo de Execução

**Entrada:**  
Valor do saque: R$ 185

**Saída:**
```
Entregar 1 cédula(s) de R$100
Entregar 1 cédula(s) de R$50
Entregar 1 cédula(s) de R$20
Entregar 1 cédula(s) de R$10
Entregar 1 cédula(s) de R$5
```

---

## Exercício 3: Simulação de Controle de Acesso em Estacionamento

**Enunciado:**  
Um estacionamento possui 3 vagas. Simule a entrada e saída de carros, garantindo que não haja mais carros do que vagas disponíveis.

### Resolução

#### Análise do Problema

- Controlar o número de carros no estacionamento.
- Permitir entrada apenas se houver vaga.
- Permitir saída apenas se houver carros estacionados.

#### Pseudocódigo

```plaintext
Início
    vagas_totais = 3
    carros_estacionados = 0

    Enquanto verdadeiro faça
        Escrever "Digite 1 para entrada, 2 para saída, 0 para encerrar:"
        Ler opcao
        Se opcao == 1 então
            Se carros_estacionados < vagas_totais então
                carros_estacionados = carros_estacionados + 1
                Escrever "Carro entrou. Vagas disponíveis: ", vagas_totais - carros_estacionados
            Senão
                Escrever "Estacionamento cheio!"
            FimSe
        Senão se opcao == 2 então
            Se carros_estacionados > 0 então
                carros_estacionados = carros_estacionados - 1
                Escrever "Carro saiu. Vagas disponíveis: ", vagas_totais - carros_estacionados
            Senão
                Escrever "Estacionamento vazio!"
            FimSe
        Senão se opcao == 0 então
            Escrever "Encerrando sistema."
            Pare
        FimSe
    FimEnquanto
Fim
```

#### Exemplo de Execução

```
Digite 1 para entrada, 2 para saída, 0 para encerrar: 1
Carro entrou. Vagas disponíveis: 2

Digite 1 para entrada, 2 para saída, 0 para encerrar: 1
Carro entrou. Vagas disponíveis: 1

Digite 1 para entrada, 2 para saída, 0 para encerrar: 1
Carro entrou. Vagas disponíveis: 0

Digite 1 para entrada, 2 para saída, 0 para encerrar: 1
Estacionamento cheio!

Digite 1 para entrada, 2 para saída, 0 para encerrar: 2
Carro saiu. Vagas disponíveis: 1

Digite 1 para entrada, 2 para saída, 0 para encerrar: 0
Encerrando sistema.
```

---

## Conclusão

A simulação de situações do cotidiano é uma excelente forma de praticar lógica de programação. Exercícios como os apresentados ajudam a desenvolver o raciocínio lógico, a capacidade de abstração e a habilidade de transformar problemas reais em algoritmos eficientes. Com a prática, você estará cada vez mais preparado para desafios do mundo da programação!
```
