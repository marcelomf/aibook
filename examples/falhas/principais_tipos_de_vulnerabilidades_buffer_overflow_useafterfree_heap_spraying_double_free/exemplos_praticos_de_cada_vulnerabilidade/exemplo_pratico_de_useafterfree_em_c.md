```markdown
# Exemplo Prático de Use-After-Free em C++

O **Use-After-Free (UAF)** é uma vulnerabilidade de corrupção de memória que ocorre quando um programa continua a usar um ponteiro para uma área de memória que já foi liberada (free). Esse tipo de falha pode permitir que um atacante execute código arbitrário, cause falhas no programa ou acesse informações sensíveis.

Neste exemplo prático, vamos demonstrar como um Use-After-Free pode ocorrer em C++ e como ele pode ser explorado.

---

## Exemplo de Código Vulnerável

Considere o seguinte código em C++:

```cpp
#include <iostream>

class Pessoa {
public:
    std::string nome;
    Pessoa(const std::string& n) : nome(n) {}
    void saudacao() {
        std::cout << "Olá, meu nome é " << nome << std::endl;
    }
};

int main() {
    Pessoa* p = new Pessoa("Alice");
    p->saudacao();

    delete p; // Libera a memória ocupada por 'p'

    // Uso do ponteiro após a liberação (Use-After-Free)
    p->saudacao(); // Comportamento indefinido!

    return 0;
}
```

### O que está acontecendo?

1. Um objeto `Pessoa` é criado dinamicamente.
2. O método `saudacao()` é chamado normalmente.
3. O objeto é deletado com `delete p;`.
4. O ponteiro `p` ainda aponta para o endereço de memória liberado.
5. Ao chamar `p->saudacao()` novamente, ocorre um **Use-After-Free**.

---

## Possíveis Consequências

- **Comportamento indefinido:** O programa pode funcionar aparentemente, travar, ou imprimir dados corrompidos.
- **Exploração:** Um atacante pode tentar alocar outro objeto no mesmo endereço de memória, manipulando o programa para executar código malicioso.

---

## Demonstração de Exploração Simples

Vamos modificar o exemplo para ilustrar como um atacante pode explorar essa vulnerabilidade:

```cpp
#include <iostream>

class Pessoa {
public:
    virtual void saudacao() {
        std::cout << "Olá, sou uma pessoa!" << std::endl;
    }
};

class Atacante {
public:
    virtual void saudacao() {
        std::cout << "Código malicioso executado!" << std::endl;
    }
};

int main() {
    Pessoa* p = new Pessoa();
    delete p; // Libera a memória

    // Aloca um objeto de outra classe no mesmo local
    Atacante* a = new Atacante();

    // Reutiliza o ponteiro antigo
    p->saudacao(); // Pode chamar o método de Atacante!

    delete a;
    return 0;
}
```

### Explicação

- Após `delete p`, a memória pode ser reutilizada por `new Atacante()`.
- Como ambas as classes têm métodos virtuais, a tabela de métodos virtuais (vtable) pode ser sobrescrita.
- Ao chamar `p->saudacao()`, o método de `Atacante` pode ser executado, simulando a execução de código arbitrário.

---

## Como Prevenir Use-After-Free

- **Zerar ponteiros após liberar:** Após `delete p;`, faça `p = nullptr;`.
- **Utilizar smart pointers:** Prefira `std::unique_ptr` ou `std::shared_ptr` para gerenciamento automático de memória.
- **Ferramentas de análise:** Use ferramentas como AddressSanitizer, Valgrind ou sanitizadores de compilador para detectar UAF.

---

## Conclusão

O Use-After-Free é uma vulnerabilidade crítica que pode ser explorada para execução de código malicioso. O exemplo acima mostra como o uso incorreto de ponteiros pode levar a falhas graves. Práticas seguras de programação e o uso de ferramentas de análise são essenciais para evitar esse tipo de problema em softwares modernos.
```
