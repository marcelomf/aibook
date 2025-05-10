```markdown
# Exemplos de Falhas Comuns em C/C++ versus Linguagens Modernas (Rust, Go, Java)

A escolha da linguagem de programação tem impacto direto na segurança de memória dos softwares desenvolvidos. Linguagens como C e C++ oferecem grande controle sobre recursos do sistema, mas também expõem o programador a riscos significativos de corrupção de memória. Em contrapartida, linguagens modernas como Rust, Go e Java foram projetadas com mecanismos que mitigam ou eliminam classes inteiras de vulnerabilidades. A seguir, exploramos exemplos práticos dessas falhas e como cada linguagem lida com elas.

---

## Falhas Comuns em C/C++

C e C++ são linguagens de baixo nível, amplamente utilizadas em sistemas operacionais, drivers e aplicações de alto desempenho. No entanto, sua flexibilidade e ausência de verificações automáticas de segurança tornam-nas propensas a diversos tipos de falhas de memória:

### 1. **Buffer Overflow**

**Exemplo:**
```c
char buffer[10];
strcpy(buffer, "Esta string é muito longa para o buffer");
```
**Descrição:**  
O código acima copia uma string maior do que o espaço alocado para `buffer`, sobrescrevendo áreas adjacentes da memória. Isso pode permitir execução de código arbitrário ou causar falhas no programa.

### 2. **Use-After-Free**

**Exemplo:**
```c
char *ptr = malloc(10);
free(ptr);
strcpy(ptr, "dados"); // Uso após liberação
```
**Descrição:**  
Após liberar a memória apontada por `ptr`, o ponteiro ainda é utilizado, podendo causar corrupção de dados, vazamento de informações ou execução de código malicioso.

### 3. **Double Free**

**Exemplo:**
```c
char *ptr = malloc(10);
free(ptr);
free(ptr); // Liberação dupla
```
**Descrição:**  
Liberar a mesma região de memória mais de uma vez pode corromper o heap e ser explorado para execução de código.

### 4. **Integer Overflow/Underflow**

**Exemplo:**
```c
size_t len = UINT_MAX;
char *buffer = malloc(len + 1); // len + 1 pode causar overflow e alocar menos memória que o esperado
```
**Descrição:**  
Operações aritméticas sem verificação podem causar alocação incorreta de memória, levando a vulnerabilidades.

---

## Como Linguagens Modernas Mitigam Essas Falhas

### Rust

Rust foi projetada com foco em segurança de memória, utilizando um sistema de propriedade e empréstimo (ownership/borrowing) que impede acessos inválidos à memória em tempo de compilação.

- **Buffer Overflow:**  
  Arrays e slices em Rust verificam limites automaticamente.  
  ```rust
  let arr = [1, 2, 3];
  println!("{}", arr[10]); // Panic em tempo de execução
  ```
- **Use-After-Free e Double Free:**  
  O sistema de ownership impede que referências aponte para memória liberada ou que a mesma memória seja liberada duas vezes.
- **Null Pointer:**  
  Rust não possui ponteiros nulos por padrão; utiliza o tipo `Option<T>` para representar ausência de valor.

### Go

Go gerencia memória automaticamente com garbage collector e não expõe ponteiros aritméticos ao programador.

- **Buffer Overflow:**  
  Arrays e slices são verificados em tempo de execução.
  ```go
  arr := []int{1, 2, 3}
  fmt.Println(arr[10]) // Panic: index out of range
  ```
- **Use-After-Free/Double Free:**  
  O garbage collector impede uso de memória já liberada e elimina a possibilidade de double free.
- **Null Pointer:**  
  Go possui o valor `nil`, mas o acesso a ponteiros nulos resulta em panic, não em corrupção silenciosa.

### Java

Java também utiliza garbage collector e abstrai o gerenciamento de memória do programador.

- **Buffer Overflow:**  
  Arrays e strings são verificados em tempo de execução.
  ```java
  int[] arr = new int[3];
  System.out.println(arr[10]); // ArrayIndexOutOfBoundsException
  ```
- **Use-After-Free/Double Free:**  
  Não existe liberação manual de memória; o garbage collector gerencia tudo.
- **Null Pointer:**  
  O acesso a referências nulas lança `NullPointerException`.

---

## Comparativo Resumido

| Falha                | C/C++         | Rust           | Go            | Java          |
|----------------------|---------------|----------------|---------------|---------------|
| Buffer Overflow      | Comum         | Impossível*    | Impossível*   | Impossível*   |
| Use-After-Free       | Comum         | Impossível     | Impossível    | Impossível    |
| Double Free          | Comum         | Impossível     | Impossível    | Impossível    |
| Integer Overflow     | Possível      | Detectável     | Possível      | Possível      |
| Null Pointer         | Possível      | Controlado     | Controlado    | Controlado    |

\* Impossível em código seguro (safe code). Em Rust, código "unsafe" pode introduzir riscos semelhantes aos de C/C++.

---

## Considerações Finais

Enquanto C e C++ oferecem desempenho e controle, exigem extrema cautela do programador para evitar falhas de corrupção de memória. Linguagens modernas como Rust, Go e Java incorporam mecanismos automáticos de segurança, reduzindo drasticamente a superfície de ataque relacionada à memória. A escolha da linguagem deve considerar o contexto do projeto, requisitos de desempenho e, principalmente, o nível de segurança desejado.

---
```