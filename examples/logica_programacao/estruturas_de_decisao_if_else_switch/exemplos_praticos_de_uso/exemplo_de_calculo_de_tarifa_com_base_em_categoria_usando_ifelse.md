
## Exemplo de Cálculo de Tarifa com Base em Categoria usando if/else

Ao desenvolver sistemas, é comum nos depararmos com situações em que precisamos tomar decisões baseadas em diferentes condições. Um exemplo prático é o cálculo de tarifas diferenciadas conforme a categoria de um usuário ou cliente. Utilizando a estrutura de decisão `if/else`, podemos implementar facilmente essa lógica em nossos algoritmos.

### Cenário do Exemplo

Imagine um sistema de transporte público que possui diferentes categorias de passageiros, cada uma com uma tarifa específica:

- **Estudante:** paga 50% do valor da tarifa normal.
- **Idoso:** tem isenção, ou seja, não paga tarifa.
- **Comum:** paga o valor integral da tarifa.

Nosso objetivo é criar um algoritmo que, ao receber a categoria do passageiro, calcule e exiba o valor da tarifa a ser paga.

### Algoritmo em Pseudocódigo

```pseudocode
INICIO
    Definir tarifa_normal como 4.00
    Ler categoria

    SE categoria = "estudante" ENTAO
        tarifa = tarifa_normal * 0.5
    SENAO SE categoria = "idoso" ENTAO
        tarifa = 0
    SENAO
        tarifa = tarifa_normal
    FIM SE

    Escrever "A tarifa a ser paga é: R$ ", tarifa
FIM
```

### Explicação do Algoritmo

1. **Definição da Tarifa Normal:** O valor padrão da tarifa é definido (por exemplo, R$ 4,00).
2. **Leitura da Categoria:** O algoritmo solicita ao usuário que informe sua categoria.
3. **Estrutura de Decisão:**
   - Se a categoria for "estudante", o valor da tarifa é reduzido pela metade.
   - Se a categoria for "idoso", a tarifa é zerada.
   - Para qualquer outra categoria (incluindo "comum"), o valor integral é cobrado.
4. **Exibição do Resultado:** O valor calculado é exibido ao usuário.

### Exemplo em Python

Abaixo, veja como esse algoritmo pode ser implementado em Python, uma das linguagens mais populares para iniciantes:

```python
tarifa_normal = 4.00
categoria = input("Informe a categoria (estudante, idoso, comum): ").lower()

if categoria == "estudante":
    tarifa = tarifa_normal * 0.5
elif categoria == "idoso":
    tarifa = 0
else:
    tarifa = tarifa_normal

print(f"A tarifa a ser paga é: R$ {tarifa:.2f}")
```

### Pontos Importantes

- **Validação de Entrada:** Em aplicações reais, é importante validar a entrada do usuário para evitar erros de digitação ou categorias inválidas.
- **Clareza e Organização:** O uso do `if/else` torna o código fácil de entender e manter.
- **Reutilização:** Essa lógica pode ser adaptada para outros contextos, como descontos em lojas, cálculo de impostos, entre outros.

### Conclusão

O uso de estruturas de decisão como `if/else` é fundamental para implementar regras de negócio que dependem de condições específicas. O exemplo apresentado mostra como é simples e eficiente calcular tarifas diferenciadas com base em categorias, um conceito amplamente utilizado no desenvolvimento de sistemas.

---
```