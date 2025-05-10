
## Exemplo de Múltiplas Condições com if/else if/else: Classificação de Faixa Etária

Ao desenvolver algoritmos, é comum nos depararmos com situações em que precisamos tomar decisões baseadas em múltiplas condições. O uso das estruturas `if`, `else if` e `else` permite que o programa execute diferentes blocos de código conforme o valor de uma variável ou o resultado de uma expressão lógica.

Um exemplo prático e bastante didático é a **classificação de faixa etária**. Suponha que você deseje criar um algoritmo que, a partir da idade informada pelo usuário, classifique a pessoa em uma das seguintes categorias:

- Criança: 0 a 12 anos
- Adolescente: 13 a 17 anos
- Adulto: 18 a 59 anos
- Idoso: 60 anos ou mais

### Exemplo em Pseudocódigo

Veja como podemos estruturar essa lógica utilizando `if`, `else if` e `else`:

```pseudocode
Leia idade

Se idade < 0 então
    Escreva "Idade inválida."
Senão se idade <= 12 então
    Escreva "Criança"
Senão se idade <= 17 então
    Escreva "Adolescente"
Senão se idade <= 59 então
    Escreva "Adulto"
Senão
    Escreva "Idoso"
FimSe
```

### Explicação do Algoritmo

1. **Validação:** Primeiro, verificamos se a idade é menor que zero, pois não existem idades negativas. Caso seja, informamos que a idade é inválida.
2. **Criança:** Se a idade for de 0 até 12 anos, classificamos como "Criança".
3. **Adolescente:** Se a idade estiver entre 13 e 17 anos, classificamos como "Adolescente".
4. **Adulto:** Se a idade estiver entre 18 e 59 anos, classificamos como "Adulto".
5. **Idoso:** Qualquer idade igual ou superior a 60 anos é classificada como "Idoso".

### Exemplo em Fluxograma

Abaixo, um fluxograma simplificado para ilustrar a lógica:

```
[Início]
   |
[Leia idade]
   |
[idade < 0?] --Sim--> [Idade inválida] --> [Fim]
   |Não
[idade <= 12?] --Sim--> [Criança] --> [Fim]
   |Não
[idade <= 17?] --Sim--> [Adolescente] --> [Fim]
   |Não
[idade <= 59?] --Sim--> [Adulto] --> [Fim]
   |Não
[Idoso] --> [Fim]
```

### Exemplo em Linguagem de Programação (Python)

Para facilitar a compreensão, veja como seria essa lógica em Python:

```python
idade = int(input("Digite a idade: "))

if idade < 0:
    print("Idade inválida.")
elif idade <= 12:
    print("Criança")
elif idade <= 17:
    print("Adolescente")
elif idade <= 59:
    print("Adulto")
else:
    print("Idoso")
```

### Boas Práticas

- **Ordem das Condições:** Sempre organize as condições do caso mais restritivo para o mais amplo, evitando sobreposições.
- **Validação de Dados:** Sempre valide os dados de entrada para evitar resultados inesperados.
- **Clareza:** Use nomes de variáveis e mensagens claras para facilitar a manutenção e o entendimento do código.

---

Utilizar múltiplas condições com `if/else if/else` é fundamental para criar algoritmos que tomam decisões complexas, como a classificação de faixa etária. Com essa estrutura, você pode adaptar facilmente o algoritmo para outras classificações ou critérios, tornando seu código mais flexível e robusto.
```
