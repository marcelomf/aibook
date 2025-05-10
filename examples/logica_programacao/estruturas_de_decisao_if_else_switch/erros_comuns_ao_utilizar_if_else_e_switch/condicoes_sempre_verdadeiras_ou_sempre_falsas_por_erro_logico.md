
## Erros Comuns ao Utilizar if, else e switch

### Condições Sempre Verdadeiras ou Sempre Falsas por Erro Lógico

Ao programar utilizando estruturas de decisão como `if`, `else` e `switch`, um dos erros mais frequentes entre iniciantes é criar condições que são **sempre verdadeiras** ou **sempre falsas** devido a falhas lógicas. Esse tipo de erro pode comprometer o funcionamento do algoritmo, levando a resultados inesperados ou até mesmo a comportamentos incorretos do programa.

#### O que são condições sempre verdadeiras ou sempre falsas?

Uma **condição sempre verdadeira** é aquela que, independentemente dos valores das variáveis envolvidas, sempre resulta em `true`. Da mesma forma, uma **condição sempre falsa** é aquela que nunca será satisfeita, resultando sempre em `false`. Isso geralmente ocorre por descuido na formulação da expressão lógica ou por falta de compreensão dos operadores utilizados.

#### Exemplos Práticos

##### 1. Uso incorreto de operadores lógicos

```pseudo
idade = 20
if (idade > 18 || idade < 30) {
    // Esta condição será sempre verdadeira para qualquer idade diferente de 18
}
```
No exemplo acima, a intenção pode ter sido verificar se a idade está **entre 18 e 30 anos**. No entanto, a condição `idade > 18 || idade < 30` será verdadeira para quase todos os valores, exceto para `idade == 18`. O correto seria usar o operador **E** (`&&`):

```pseudo
if (idade > 18 && idade < 30) {
    // Agora sim, verifica se a idade está entre 18 e 30
}
```

##### 2. Comparação com valores fixos

```pseudo
if (1 == 1) {
    // Sempre executa este bloco, pois 1 sempre é igual a 1
}
```
Esse tipo de condição não faz sentido prático, pois não depende de nenhuma variável ou entrada do usuário.

##### 3. Erro de atribuição ao invés de comparação

Em algumas linguagens, como C ou JavaScript, usar `=` (atribuição) ao invés de `==` (comparação) pode causar condições sempre verdadeiras:

```c
int x = 5;
if (x = 10) {
    // x recebe 10 e a condição é avaliada como verdadeira (em C, qualquer valor diferente de 0 é true)
}
```
O correto seria:

```c
if (x == 10) {
    // Agora sim, compara o valor de x com 10
}
```

##### 4. Condições redundantes em switch

No `switch`, repetir casos com o mesmo valor ou usar valores que nunca serão atingidos pode tornar partes do código inacessíveis ou inúteis.

```pseudo
switch (opcao) {
    case 1:
        // código
        break;
    case 1:
        // nunca será executado, pois já existe o case 1 acima
        break;
}
```

#### Como evitar esse erro?

- **Releia e analise suas condições:** Sempre verifique se a lógica da condição realmente representa o que você deseja testar.
- **Utilize operadores corretamente:** Entenda a diferença entre `&&` (E) e `||` (OU).
- **Teste com diferentes valores:** Experimente diferentes entradas para garantir que todas as possibilidades são cobertas.
- **Comente e explique:** Escrever comentários pode ajudar a perceber incoerências lógicas.
- **Use ferramentas de depuração:** Debuggers e testes unitários ajudam a identificar condições que nunca são satisfeitas ou sempre são verdadeiras.

#### Conclusão

Condições sempre verdadeiras ou sempre falsas são erros comuns, mas facilmente evitáveis com atenção e prática. Ao compreender bem os operadores lógicos e revisar cuidadosamente as expressões condicionais, você garante que seu algoritmo tome decisões corretas, tornando seu código mais confiável e eficiente.
```
