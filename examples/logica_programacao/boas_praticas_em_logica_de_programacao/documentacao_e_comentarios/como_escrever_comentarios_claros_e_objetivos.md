
# Boas Práticas em Lógica de Programação

## Documentação e Comentários

### Como Escrever Comentários Claros e Objetivos

Comentários são elementos fundamentais em qualquer código, especialmente para quem está começando a programar. Eles servem para explicar trechos do código, facilitar o entendimento de quem lê (inclusive do próprio autor, no futuro) e documentar decisões importantes tomadas durante o desenvolvimento. No entanto, para que cumpram seu papel, é essencial que sejam claros, objetivos e realmente agreguem valor ao entendimento do algoritmo.

#### Por que comentar o código?

- **Facilita a manutenção:** Comentários ajudam a lembrar a lógica implementada, tornando mais fácil corrigir ou modificar o código no futuro.
- **Apoia o trabalho em equipe:** Em projetos colaborativos, comentários claros permitem que outros desenvolvedores compreendam rapidamente o funcionamento do código.
- **Documenta decisões:** Explica escolhas de implementação, restrições e possíveis limitações.

#### Características de um bom comentário

1. **Clareza:** O comentário deve ser fácil de entender, evitando jargões desnecessários ou explicações vagas.
2. **Objetividade:** Seja direto ao ponto. Explique o que é necessário, sem se alongar em detalhes irrelevantes.
3. **Relevância:** Comente apenas o que realmente precisa ser explicado. Não é necessário comentar linhas óbvias ou autoexplicativas.
4. **Atualização:** Mantenha os comentários atualizados conforme o código evolui. Comentários desatualizados podem confundir mais do que ajudar.

#### Boas práticas ao escrever comentários

- **Explique o “porquê”, não apenas o “o quê”:** Em vez de apenas descrever o que o código faz, explique o motivo de uma decisão, especialmente se não for óbvia.
- **Evite redundância:** Não repita o que já está claro pelo próprio código.
- **Use frases curtas e objetivas:** Comentários longos tendem a ser ignorados ou esquecidos.
- **Padronize o idioma:** Utilize sempre o mesmo idioma nos comentários, preferencialmente o mesmo da equipe ou do projeto.
- **Comente blocos, não cada linha:** Prefira comentar blocos de código ou funções inteiras, ao invés de comentar linha por linha.

#### Exemplos de comentários claros e objetivos

**Exemplo 1: Comentário explicando a finalidade de uma função**
```pseudo
// Calcula o fatorial de um número inteiro positivo usando recursão
função fatorial(n: inteiro): inteiro
```

**Exemplo 2: Comentário explicando uma decisão**
```pseudo
// Utiliza busca binária para melhorar a performance na pesquisa
```

**Exemplo 3: Comentário de bloco**
```pseudo
// Verifica se o usuário possui saldo suficiente para realizar a transação
se saldo >= valorTransacao então
    // prossegue com a transação
senão
    // exibe mensagem de saldo insuficiente
fimse
```

#### O que evitar nos comentários

- Comentários óbvios:
  ```pseudo
  // Soma 1 ao contador
  contador = contador + 1
  ```
- Comentários desatualizados ou contraditórios com o código.
- Comentários excessivos que poluem o código e dificultam a leitura.

#### Conclusão

Comentários são ferramentas valiosas para tornar o código mais compreensível e fácil de manter. Escrever comentários claros e objetivos é uma habilidade essencial para qualquer programador, contribuindo para a qualidade e a longevidade dos projetos. Lembre-se: um bom comentário explica o necessário, é direto e sempre agrega valor ao entendimento do código.
```
