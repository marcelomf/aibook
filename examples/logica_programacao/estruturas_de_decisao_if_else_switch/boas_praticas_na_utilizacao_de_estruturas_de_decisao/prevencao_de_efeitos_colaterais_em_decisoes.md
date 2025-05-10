
# Prevenção de Efeitos Colaterais em Decisões

Ao utilizar estruturas de decisão como `if`, `else` e `switch` na lógica de programação, é fundamental adotar boas práticas para evitar efeitos colaterais indesejados. Efeitos colaterais ocorrem quando uma decisão altera o estado do programa de maneira inesperada ou não controlada, dificultando a manutenção, depuração e evolução do código. A seguir, apresentamos orientações essenciais para prevenir esses problemas e garantir decisões mais seguras e previsíveis.

## 1. **Evite Modificar Variáveis Fora do Escopo Necessário**

Ao tomar decisões, limite as alterações de variáveis apenas ao escopo necessário. Modificar variáveis globais ou externas dentro de blocos de decisão pode causar comportamentos inesperados em outras partes do programa.

**Exemplo ruim:**
```pseudo
global contador

if (condição) {
    contador = contador + 1  // Modifica variável global
}
```

**Exemplo recomendado:**
```pseudo
local contadorLocal

if (condição) {
    contadorLocal = contadorLocal + 1  // Modifica apenas variável local
}
```

## 2. **Evite Efeitos Colaterais em Expressões de Condição**

As expressões usadas nas condições dos blocos `if`, `else` e `switch` devem ser puras, ou seja, não devem alterar o estado do programa. Funções chamadas nessas expressões não devem modificar variáveis ou realizar operações de entrada/saída.

**Exemplo ruim:**
```pseudo
if (incrementaEVerifica(x)) { ... }  // incrementaEVerifica altera o valor de x
```

**Exemplo recomendado:**
```pseudo
if (verifica(x)) { ... }  // verifica apenas consulta o valor de x, sem alterá-lo
```

## 3. **Mantenha a Clareza e a Simplicidade**

Decisões complexas, com múltiplas condições e ações, aumentam o risco de efeitos colaterais. Prefira dividir decisões complexas em funções menores e bem definidas, facilitando o entendimento e a manutenção.

**Exemplo:**
```pseudo
if (usuarioAutenticado && permissaoValida) {
    executarAcao()
}
```
Se a lógica for mais complexa, extraia para funções auxiliares.

## 4. **Evite Dependências Ocultas**

Certifique-se de que todas as variáveis e estados utilizados nas decisões estejam claramente definidos e inicializados. Dependências ocultas podem causar efeitos colaterais difíceis de identificar.

**Dica:** Documente as pré-condições e pós-condições das funções e blocos de decisão.

## 5. **Utilize Estruturas de Dados Imutáveis Quando Possível**

Quando apropriado, utilize estruturas de dados imutáveis. Isso reduz a possibilidade de alterações inesperadas durante a execução de decisões, tornando o código mais previsível.

## 6. **Teste e Revise o Código Regularmente**

Implemente testes para verificar se as decisões estão produzindo os resultados esperados sem alterar outros comportamentos do programa. Revisões de código também ajudam a identificar possíveis efeitos colaterais.

## 7. **Evite Efeitos Colaterais em Funções de Utilidade**

Funções utilizadas em decisões devem ser, preferencialmente, puras: para um mesmo conjunto de entradas, sempre retornam o mesmo resultado e não alteram o estado do programa.

---

## **Resumo**

A prevenção de efeitos colaterais em estruturas de decisão é essencial para garantir a previsibilidade, a manutenção e a confiabilidade dos algoritmos. Ao adotar boas práticas como limitar o escopo das alterações, evitar dependências ocultas e manter a clareza do código, o programador desenvolve soluções mais robustas e fáceis de evoluir. Essas práticas são fundamentais para quem está iniciando na lógica de programação e deseja construir uma base sólida para o desenvolvimento de software.
```
