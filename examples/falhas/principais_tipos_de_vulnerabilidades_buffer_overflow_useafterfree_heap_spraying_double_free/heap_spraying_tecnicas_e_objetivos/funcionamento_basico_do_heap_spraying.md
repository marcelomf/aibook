```markdown
## Heap Spraying: Funcionamento Básico

O **heap spraying** é uma técnica de exploração de vulnerabilidades amplamente utilizada por atacantes para aumentar as chances de execução de código malicioso em softwares vulneráveis. Seu objetivo principal é "pulverizar" (spray) grandes áreas da heap — uma região de memória dinâmica utilizada por aplicações — com dados cuidadosamente preparados, geralmente contendo shellcode (código malicioso) e instruções específicas. Dessa forma, o atacante aumenta a probabilidade de que, ao explorar uma vulnerabilidade, o fluxo de execução do programa seja desviado para o código injetado.

### Conceito Fundamental

A heap é uma área de memória alocada dinamicamente durante a execução de um programa. Diferente da stack, que possui um crescimento e gerenciamento mais previsíveis, a heap é utilizada para armazenar objetos, buffers e estruturas de dados que podem variar em tamanho e tempo de vida. Essa imprevisibilidade é explorada por atacantes para posicionar código malicioso em locais estratégicos.

O heap spraying não explora diretamente uma vulnerabilidade, mas prepara o ambiente de memória para que, quando uma vulnerabilidade (como um ponteiro corrompido ou um desreferenciamento inválido) for explorada, haja uma alta probabilidade de que o controle do fluxo de execução seja transferido para o código malicioso.

### Funcionamento Passo a Passo

1. **Preparação do Payload**  
   O atacante cria um payload, geralmente composto por um grande número de instruções NOP (No Operation) — conhecido como *NOP sled* — seguido pelo shellcode. O NOP sled serve para aumentar a área de acerto: se a execução cair em qualquer parte do sled, ela "escorrega" até o shellcode.

2. **Alocação Massiva na Heap**  
   Utilizando funções de alocação dinâmica (como `malloc` em C/C++ ou objetos em linguagens de alto nível), o atacante preenche a heap com múltiplas cópias do payload. Em ambientes web, por exemplo, é comum usar JavaScript para criar grandes strings ou arrays contendo o shellcode.

3. **Exploração da Vulnerabilidade**  
   O atacante explora uma vulnerabilidade de corrupção de memória, como um ponteiro de função sobrescrito ou um buffer overflow, para desviar o fluxo de execução para um endereço dentro da heap.

4. **Execução do Shellcode**  
   Como a heap está repleta de cópias do shellcode, a chance de o fluxo de execução cair em uma dessas áreas é alta, resultando na execução do código malicioso.

### Exemplo Simplificado em JavaScript

No contexto de navegadores, o heap spraying pode ser realizado assim:

```javascript
var shellcode = unescape("%u9090%u9090..."); // NOP sled + shellcode
var bigblock = shellcode;
while (bigblock.length < 0x10000) bigblock += bigblock; // Aumenta o tamanho do bloco

var memory = [];
for (var i = 0; i < 1000; i++) {
    memory[i] = bigblock.substring(0, bigblock.length);
}
```

Neste exemplo, o atacante cria grandes blocos de memória preenchidos com o shellcode, aumentando a probabilidade de sucesso da exploração.

### Objetivos do Heap Spraying

- **Aumentar a Probabilidade de Exploração**: Ao preencher a heap com o payload, o atacante não precisa conhecer exatamente o endereço de memória para onde o fluxo será desviado.
- **Contornar Proteções**: Técnicas como ASLR (Address Space Layout Randomization) dificultam a previsão de endereços de memória. O heap spraying mitiga esse desafio ao aumentar a área de acerto.
- **Facilitar Exploração Remota**: Em ambientes como navegadores web, onde o atacante não tem acesso direto à memória, o heap spraying é uma das poucas formas viáveis de preparar o ambiente para a execução do shellcode.

### Limitações e Mitigações

Com a evolução das técnicas de defesa, como randomização de heap, validação de ponteiros e execução restrita de memória (DEP/NX), o heap spraying tornou-se menos eficaz, mas ainda é relevante em cenários onde tais proteções são fracas ou inexistentes.

### Conclusão

O heap spraying é uma técnica fundamental no arsenal de exploração de vulnerabilidades, especialmente em ambientes onde o controle preciso de endereços de memória é difícil. Compreender seu funcionamento é essencial tanto para quem desenvolve sistemas seguros quanto para profissionais de segurança que buscam identificar e mitigar esse tipo de ameaça.
```
