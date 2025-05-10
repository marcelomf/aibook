
## Repetição de Condições Redundantes em if/else

Ao aprender e aplicar estruturas de decisão como `if`, `else if` e `else`, um erro comum entre iniciantes é a **repetição de condições redundantes**. Esse problema ocorre quando a mesma condição, ou condições logicamente equivalentes, são verificadas mais de uma vez dentro de uma cadeia de decisões. Isso pode tornar o código mais difícil de entender, menos eficiente e propenso a erros.

### O que são condições redundantes?

Condições redundantes acontecem quando você verifica, em diferentes blocos de decisão, a mesma expressão lógica ou expressões que se sobrepõem. Isso pode ocorrer por falta de atenção, desconhecimento das regras de avaliação das estruturas de decisão, ou por não perceber que uma condição já foi tratada anteriormente.

#### Exemplo de código com redundância

Veja o exemplo abaixo em pseudocódigo:

```pseudocode
se (idade >= 18) então
    escreva("Maior de idade")
senão se (idade >= 18 e idade < 60) então
    escreva("Adulto")
senão
    escreva("Menor de idade")
fim se
```

No exemplo acima, a segunda condição `idade >= 18 e idade < 60` é redundante, pois o bloco anterior já trata todos os casos em que `idade >= 18`. Assim, o segundo bloco nunca será executado.

### Por que evitar condições redundantes?

- **Clareza:** Código redundante dificulta a leitura e compreensão, especialmente em projetos maiores.
- **Manutenção:** Torna a manutenção mais trabalhosa, pois alterações precisam ser feitas em vários lugares.
- **Desempenho:** Embora o impacto seja pequeno em códigos simples, redundâncias podem afetar a performance em sistemas maiores.
- **Erros lógicos:** Redundâncias podem mascarar erros e dificultar a identificação de bugs.

### Como evitar condições redundantes

1. **Analise a lógica das condições:** Antes de escrever, pense na ordem e abrangência de cada condição.
2. **Utilize else e else if corretamente:** Lembre-se que, ao usar `else`, você já está tratando todos os casos não contemplados anteriormente.
3. **Simplifique expressões:** Procure simplificar as condições, evitando repetições desnecessárias.
4. **Teste seu código:** Teste diferentes cenários para garantir que cada bloco está sendo executado como esperado.

#### Exemplo corrigido

Veja como o exemplo anterior pode ser reescrito de forma correta:

```pseudocode
se (idade < 18) então
    escreva("Menor de idade")
senão se (idade < 60) então
    escreva("Adulto")
senão
    escreva("Maior de 60 anos")
fim se
```

Agora, cada condição é avaliada apenas uma vez, sem sobreposição.

### Dica prática

Sempre que criar uma cadeia de decisões, pergunte-se: **"Esta condição já foi tratada acima?"** Se sim, ela é redundante e pode ser removida ou ajustada.

---

**Resumo:**  
Evitar a repetição de condições redundantes em estruturas `if/else` é fundamental para escrever códigos mais claros, eficientes e fáceis de manter. Analise cuidadosamente a lógica das suas decisões e simplifique sempre que possível.
```
