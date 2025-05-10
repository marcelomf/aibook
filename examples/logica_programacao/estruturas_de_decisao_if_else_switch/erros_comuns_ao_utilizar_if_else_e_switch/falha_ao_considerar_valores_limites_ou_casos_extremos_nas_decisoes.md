## Falha ao Considerar Valores Limites ou Casos Extremos nas Decisões

Ao utilizar estruturas de decisão como `if`, `else` e `switch`, um dos erros mais comuns cometidos por iniciantes (e até por programadores experientes) é não considerar adequadamente os **valores limites** ou **casos extremos** nas condições avaliadas. Esse descuido pode levar a comportamentos inesperados, bugs difíceis de identificar e falhas no funcionamento do programa.

### O que são valores limites e casos extremos?

- **Valores limites** (ou *boundary values*) são aqueles que estão no limite de um intervalo de dados aceitos por uma condição. Por exemplo, se um programa aceita idades entre 18 e 65 anos, os valores 18 e 65 são limites.
- **Casos extremos** (ou *edge cases*) são situações pouco comuns, mas possíveis, que podem ocorrer devido a entradas inesperadas, valores nulos, listas vazias, números negativos, entre outros.

### Exemplos de falhas comuns

#### 1. Inclusão ou exclusão incorreta dos limites

```pseudo
// Exemplo: Verificar se a idade está entre 18 e 65 anos
if (idade > 18 && idade < 65) {
    // Aceita
} else {
    // Rejeita
}
```
No exemplo acima, as idades 18 e 65 não são aceitas, pois a condição exige que a idade seja **maior que 18** e **menor que 65**. O correto seria usar `>=` e `<=` se os limites devem ser incluídos:

```pseudo
if (idade >= 18 && idade <= 65) {
    // Aceita
}
```

#### 2. Não tratar entradas vazias ou nulas

```pseudo
if (nome.length > 0) {
    // Processa o nome
}
```
Se `nome` for `null`, o programa pode gerar um erro. O ideal é verificar se o valor existe antes de acessar suas propriedades:

```pseudo
if (nome != null && nome.length > 0) {
    // Processa o nome
}
```

#### 3. Ignorar listas ou coleções vazias

Ao processar listas, é importante verificar se elas estão vazias para evitar erros de acesso a elementos inexistentes.

```pseudo
if (lista[0] == 10) {
    // ...
}
```
Se `lista` estiver vazia, haverá um erro. O correto é verificar o tamanho da lista antes:

```pseudo
if (lista.length > 0 && lista[0] == 10) {
    // ...
}
```

#### 4. Não considerar valores negativos ou zero

Em cálculos ou validações, valores negativos ou zero podem causar resultados inesperados se não forem tratados.

```pseudo
if (quantidade > 0) {
    // Processa a quantidade
}
```
Se `quantidade` puder ser zero ou negativa, é importante decidir como o programa deve se comportar nesses casos.

### Boas práticas para evitar esses erros

- **Analise cuidadosamente os requisitos**: Entenda quais valores são válidos e quais devem ser rejeitados.
- **Inclua testes para valores limites e casos extremos**: Teste seu código com os menores e maiores valores possíveis, além de entradas incomuns.
- **Use operadores relacionais corretamente**: Verifique se deve usar `>`, `<`, `>=` ou `<=` de acordo com a lógica desejada.
- **Valide entradas do usuário**: Sempre verifique se os dados recebidos estão no formato e intervalo esperados.
- **Documente as decisões**: Deixe claro no código (com comentários) como os limites estão sendo tratados.

### Conclusão

Considerar valores limites e casos extremos é fundamental para garantir que as estruturas de decisão (`if`, `else`, `switch`) funcionem corretamente em todas as situações possíveis. Ignorar esses casos pode comprometer a confiabilidade e a robustez do seu programa. Por isso, sempre inclua esses cenários em seus testes e validações, tornando seu código mais seguro e profissional.