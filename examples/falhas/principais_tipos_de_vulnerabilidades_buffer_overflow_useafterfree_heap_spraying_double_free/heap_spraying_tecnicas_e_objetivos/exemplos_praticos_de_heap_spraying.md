```markdown
# Exemplos Práticos de Heap Spraying

Heap spraying é uma técnica amplamente utilizada por atacantes para explorar vulnerabilidades de corrupção de memória, especialmente em ambientes onde a execução de código arbitrário é dificultada por mecanismos de proteção modernos, como ASLR (Address Space Layout Randomization) e DEP (Data Execution Prevention). O objetivo do heap spraying é "pulverizar" a heap do processo alvo com blocos de dados cuidadosamente preparados, geralmente contendo shellcode, de modo a aumentar a probabilidade de que um desvio de execução (por exemplo, causado por um ponteiro corrompido) aponte para uma área controlada pelo atacante.

Neste tópico, apresentamos exemplos práticos de heap spraying, destacando diferentes linguagens, ambientes e contextos de ataque.

---

## 1. Heap Spraying em JavaScript (Navegadores Web)

Historicamente, navegadores web foram alvos frequentes de heap spraying devido à facilidade de manipulação de memória via JavaScript. Um exemplo clássico envolve a criação de grandes strings contendo shellcode e a alocação repetida dessas strings em objetos, como arrays.

```javascript
// Exemplo simplificado de heap spraying em JavaScript
var shellcode = unescape("%u9090%u9090%u9090%u9090%u4141%u4242%u4343%u4444"); // NOP sled + shellcode
var spray = [];
var block = shellcode;
while (block.length < 0x1000) block += block; // Expande o bloco

for (var i = 0; i < 10000; i++) {
    spray[i] = block.substring(0, 0x1000); // Aloca blocos na heap
}
```

**Objetivo:** Preencher a heap do navegador com blocos contendo o shellcode, aumentando a chance de que um ponteiro corrompido aponte para o shellcode.

**Observação:** Navegadores modernos implementam proteções como randomização de heap e restrições de execução de código em áreas de dados, tornando essa técnica menos eficaz, mas ainda relevante em ambientes desatualizados.

---

## 2. Heap Spraying em ActionScript (Flash)

Antes da descontinuação do Adobe Flash, heap spraying em ActionScript era uma técnica comum para explorar vulnerabilidades em plugins de navegador.

```actionscript
// Exemplo de heap spraying em ActionScript
var shellcode:String = unescape("%u9090%u9090%u4141%u4242%u4343%u4444");
var spray:Array = new Array();
for (var i:int = 0; i < 10000; i++) {
    spray[i] = shellcode;
}
```

**Objetivo:** Similar ao JavaScript, o objetivo é preencher a heap do processo do Flash Player com shellcode.

---

## 3. Heap Spraying em Exploração de Aplicações Desktop

Em aplicações desktop, heap spraying pode ser realizado em linguagens como C ou C++ para preparar a memória antes de explorar uma vulnerabilidade, como um use-after-free.

```c
// Exemplo conceitual em C
#define SPRAY_SIZE 10000
#define BLOCK_SIZE 4096

char *spray[SPRAY_SIZE];
for (int i = 0; i < SPRAY_SIZE; i++) {
    spray[i] = malloc(BLOCK_SIZE);
    memset(spray[i], 0x90, BLOCK_SIZE); // NOP sled
    // Copiar shellcode para o início do bloco, se necessário
}
```

**Objetivo:** Alocar múltiplos blocos na heap, preenchendo-os com instruções NOP e shellcode, para aumentar a probabilidade de execução do código malicioso após a exploração de uma vulnerabilidade.

---

## 4. Heap Spraying em Ambientes Mobile

Em plataformas móveis, como Android, heap spraying pode ser realizado via código Java ou nativo, especialmente em ataques que visam vulnerabilidades em bibliotecas nativas.

```java
// Exemplo conceitual em Java (Android)
byte[] shellcode = new byte[4096];
// Preencher shellcode com payload
ArrayList<byte[]> spray = new ArrayList<>();
for (int i = 0; i < 10000; i++) {
    spray.add(shellcode.clone());
}
```

**Objetivo:** Preencher a heap do processo alvo com blocos controlados, facilitando a exploração de vulnerabilidades de corrupção de memória.

---

## Considerações Finais

Heap spraying é uma técnica poderosa, mas sua eficácia depende do contexto, das proteções do sistema e da criatividade do atacante. Com a evolução das defesas, como randomização de heap, segmentação de permissões de memória e validação de ponteiros, os ataques baseados em heap spraying tornaram-se mais complexos, exigindo abordagens cada vez mais sofisticadas.

No entanto, compreender exemplos práticos de heap spraying é fundamental para analistas de segurança, desenvolvedores e pesquisadores, pois permite identificar padrões de ataque, desenvolver contramedidas eficazes e fortalecer a segurança de aplicações modernas.

---
```