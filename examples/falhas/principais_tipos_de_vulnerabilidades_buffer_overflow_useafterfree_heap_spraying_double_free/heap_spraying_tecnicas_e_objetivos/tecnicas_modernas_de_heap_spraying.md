```markdown
# Heap Spraying: Técnicas Modernas

Heap spraying é uma técnica de exploração utilizada por atacantes para aumentar a probabilidade de execução de código malicioso após a exploração de vulnerabilidades de corrupção de memória, especialmente em ambientes onde a localização exata do payload na memória é incerta. Com a evolução das defesas em sistemas operacionais e navegadores, as técnicas de heap spraying também evoluíram, tornando-se mais sofisticadas e adaptáveis aos novos cenários de segurança.

## O que é Heap Spraying?

Heap spraying consiste em preencher (ou "pulverizar") a heap de um processo com grandes quantidades de dados controlados pelo atacante, geralmente contendo shellcode ou instruções específicas. O objetivo é que, ao explorar uma vulnerabilidade (como um ponteiro corrompido ou um desvio de execução), o fluxo do programa acabe executando o código malicioso injetado na heap.

## Objetivos do Heap Spraying

- **Aumentar a probabilidade de execução do payload:** Ao espalhar o shellcode por grandes áreas da heap, o atacante aumenta as chances de que um desvio de execução acidentalmente caia em uma região controlada.
- **Contornar randomização de endereços (ASLR):** Heap spraying pode ajudar a mitigar a incerteza introduzida por técnicas de randomização de layout de memória.
- **Facilitar a exploração de vulnerabilidades de uso após liberação (use-after-free), double free, ou buffer overflows na heap.**

## Técnicas Modernas de Heap Spraying

Com o fortalecimento das defesas, como Data Execution Prevention (DEP), Address Space Layout Randomization (ASLR) e heap hardening, as técnicas de heap spraying precisaram se adaptar. A seguir, destacam-se as abordagens mais atuais:

### 1. **Heap Feng Shui**

O "Heap Feng Shui" é uma técnica que manipula cuidadosamente as alocações e liberações de memória para posicionar objetos maliciosos em locais previsíveis da heap. O atacante faz uma série de alocações e liberações para "organizar" a heap, criando buracos e preenchendo-os com dados controlados.

- **Exemplo:** Em navegadores, o atacante pode criar e remover objetos JavaScript de tamanhos específicos para influenciar o layout da heap antes de disparar a vulnerabilidade.

### 2. **Spraying com Objetos de Alto Nível**

Em ambientes modernos, como navegadores web, o heap spraying é frequentemente realizado usando linguagens de alto nível (JavaScript, ActionScript, etc.). O atacante cria grandes arrays ou strings preenchidas com o payload, aproveitando a facilidade de manipulação de memória dessas linguagens.

- **Exemplo:** Criar milhares de objetos `ArrayBuffer` ou strings longas em JavaScript, cada uma contendo o shellcode ou gadgets ROP.

### 3. **JIT Spraying**

Com a introdução de Just-In-Time (JIT) compilation em navegadores, surgiu o JIT spraying. O atacante injeta código malicioso em trechos de código gerados dinamicamente pelo JIT, explorando instruções legítimas para construir gadgets que executam o payload.

- **Vantagem:** O código gerado pelo JIT geralmente reside em regiões executáveis da memória, contornando DEP.
- **Exemplo:** Manipular código JavaScript para forçar o JIT a gerar instruções específicas que, quando encadeadas, formam o shellcode.

### 4. **Typed Array Spraying**

Com a popularização dos `TypedArray` em JavaScript (como `Uint8Array`, `Float64Array`), atacantes passaram a utilizá-los para criar regiões de memória contíguas e previsíveis, facilitando a injeção de payloads e a exploração de vulnerabilidades de corrupção de memória.

- **Exemplo:** Preencher um `Uint8Array` com o shellcode e manipular ponteiros para desviar a execução para essa região.

### 5. **Heap Spraying em Ambientes Mobile e IoT**

Com a expansão do uso de dispositivos móveis e IoT, técnicas de heap spraying também foram adaptadas para esses ambientes, explorando APIs específicas e limitações de memória para maximizar a eficácia do ataque.

### 6. **Bypassing Modern Defenses**

- **Heap Isolation:** Algumas implementações modernas isolam diferentes tipos de objetos na heap. Atacantes precisam identificar e explorar tipos de objetos que compartilham a mesma região de heap.
- **Pointer Authentication (PAC):** Em arquiteturas ARM modernas, técnicas de spraying podem ser combinadas com ataques de bypass de PAC.
- **Heap Grooming:** Manipulação precisa do heap para alinhar objetos e buracos de memória, facilitando a exploração mesmo com randomização.

## Exemplo Prático: Heap Spraying em JavaScript

```javascript
// Exemplo simplificado de heap spraying em JavaScript
var spray = [];
var shellcode = unescape("%u9090%u9090..."); // NOP sled + shellcode

for (var i = 0; i < 10000; i++) {
    spray[i] = shellcode + "A".repeat(10000);
}
```

Neste exemplo, o atacante preenche a heap do navegador com milhares de strings contendo o shellcode, aumentando a chance de execução após a exploração de uma vulnerabilidade.

## Considerações Finais

Heap spraying continua sendo uma técnica relevante na exploração de falhas de corrupção de memória, mas sua eficácia depende da criatividade do atacante e do conhecimento das defesas implementadas no alvo. O estudo contínuo das técnicas modernas de heap spraying é fundamental para profissionais de segurança, tanto para identificar vulnerabilidades quanto para desenvolver mecanismos de mitigação mais robustos.

**Referências:**
- [Project Zero: Heap Exploitation](https://googleprojectzero.blogspot.com/search/label/heap%20exploitation)
- [OWASP: Heap Spraying](https://owasp.org/www-community/attacks/Heap_Spraying)
- [Black Hat: Heap Feng Shui in JavaScript](https://www.blackhat.com/presentations/bh-europe-07/Liu/Whitepaper/bh-eu-07-liu-WP.pdf)
```
