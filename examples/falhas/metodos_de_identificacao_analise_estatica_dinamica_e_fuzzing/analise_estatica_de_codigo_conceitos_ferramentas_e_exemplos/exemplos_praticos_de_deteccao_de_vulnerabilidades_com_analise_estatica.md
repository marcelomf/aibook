```markdown
# Exemplos Práticos de Detecção de Vulnerabilidades com Análise Estática

A análise estática de código é uma das principais técnicas para identificar vulnerabilidades de corrupção de memória antes mesmo da execução do software. Por meio da inspeção do código-fonte ou do binário, ferramentas automatizadas e revisores humanos podem detectar padrões inseguros, uso incorreto de funções e potenciais falhas que podem ser exploradas por atacantes. A seguir, apresentamos exemplos práticos de como a análise estática pode ser empregada para detectar vulnerabilidades comuns em softwares.

---

## 1. Detecção de Buffer Overflow

### Exemplo de Código Vulnerável

```c
void copia_nome(char *nome) {
    char buffer[16];
    strcpy(buffer, nome); // Uso inseguro de strcpy
}
```

### Como a Análise Estática Detecta

Ferramentas como **Cppcheck**, **Clang Static Analyzer** ou **SonarQube** analisam o uso de funções conhecidas por não realizar verificação de limites, como `strcpy`, `gets` e `scanf` sem especificação de tamanho. Elas emitem alertas quando detectam que o tamanho do dado copiado pode exceder o tamanho do buffer de destino.

**Exemplo de alerta:**
> "Possível buffer overflow: uso de strcpy sem verificação de tamanho em 'buffer' (linha 3)."

---

## 2. Identificação de Use-After-Free

### Exemplo de Código Vulnerável

```c
void exemplo() {
    char *ptr = malloc(10);
    free(ptr);
    strcpy(ptr, "teste"); // Uso após liberação
}
```

### Como a Análise Estática Detecta

Ferramentas como **Coverity** e **CodeQL** rastreiam o ciclo de vida dos ponteiros. Elas identificam quando um ponteiro é liberado e, posteriormente, utilizado, caracterizando um use-after-free.

**Exemplo de alerta:**
> "Uso de ponteiro após liberação detectado: 'ptr' foi utilizado após chamada de free (linha 4)."

---

## 3. Detecção de Double Free

### Exemplo de Código Vulnerável

```c
void exemplo() {
    char *ptr = malloc(10);
    free(ptr);
    free(ptr); // Liberação dupla
}
```

### Como a Análise Estática Detecta

A análise estática pode rastrear múltiplas chamadas de `free` sobre o mesmo ponteiro sem que ele seja reatribuído, sinalizando um possível double free.

**Exemplo de alerta:**
> "Possível double free: 'ptr' foi liberado mais de uma vez (linha 5)."

---

## 4. Identificação de Falhas de Inteiro (Integer Overflow/Underflow)

### Exemplo de Código Vulnerável

```c
void aloca_buffer(int tamanho) {
    char *buffer = malloc(tamanho * sizeof(char));
    // ...
}
```

Se `tamanho` for grande o suficiente, pode ocorrer um overflow, resultando em alocação de menos memória do que o esperado.

### Como a Análise Estática Detecta

Ferramentas como **Flawfinder** e **PVS-Studio** analisam operações aritméticas e alertam para possíveis overflows ou underflows de inteiros, especialmente em operações de alocação de memória.

**Exemplo de alerta:**
> "Possível integer overflow ao multiplicar 'tamanho' por sizeof(char) (linha 2)."

---

## 5. Uso de Funções Depreciadas ou Inseguras

### Exemplo de Código Vulnerável

```c
gets(buffer); // Função insegura e depreciada
```

### Como a Análise Estática Detecta

A maioria das ferramentas de análise estática mantém uma lista de funções inseguras e depreciadas, alertando sempre que são encontradas no código.

**Exemplo de alerta:**
> "Uso de função insegura 'gets' detectado. Considere utilizar 'fgets' com verificação de tamanho."

---

## Ferramentas Populares para Análise Estática

- **Cppcheck**: Focado em C/C++, detecta diversos tipos de vulnerabilidades.
- **Clang Static Analyzer**: Integrado ao compilador Clang, oferece análise detalhada para C, C++ e Objective-C.
- **SonarQube**: Plataforma que suporta múltiplas linguagens e integra-se a pipelines de CI/CD.
- **Coverity**: Ferramenta comercial com alta precisão na detecção de falhas complexas.
- **CodeQL**: Permite consultas personalizadas para encontrar padrões de vulnerabilidade.

---

## Considerações Finais

A análise estática é uma etapa fundamental no ciclo de desenvolvimento seguro, permitindo a identificação precoce de vulnerabilidades de corrupção de memória. Embora não substitua testes dinâmicos e fuzzing, ela complementa essas abordagens ao fornecer uma visão abrangente dos riscos presentes no código. A integração de ferramentas de análise estática ao processo de desenvolvimento contínuo é uma prática recomendada para aumentar a segurança e a qualidade do software.

---
```