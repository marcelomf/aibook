```markdown
# Vulnerabilidades de Format String: Exploração e Prevenção

As vulnerabilidades de **Format String** (ou "string de formatação") representam uma classe importante de falhas de corrupção de memória, frequentemente negligenciada, mas com potencial de causar sérios impactos em softwares escritos, principalmente, em linguagens como C e C++. Neste tópico, vamos entender o que são essas vulnerabilidades, como podem ser exploradas por atacantes e quais estratégias podem ser adotadas para preveni-las.

---

## O que são Vulnerabilidades de Format String?

Em linguagens como C, funções de formatação de saída, como `printf`, `fprintf`, `sprintf` e suas variantes, utilizam uma **string de formato** para determinar como os argumentos subsequentes devem ser interpretados e exibidos. Por exemplo:

```c
printf("Valor: %d\n", valor);
```

O problema surge quando a string de formato é controlada por um usuário externo, e não pelo programador. Se um dado externo é passado diretamente como string de formato, o atacante pode inserir especificadores de formato (`%x`, `%s`, `%n`, etc.) e manipular a execução do programa.

**Exemplo vulnerável:**
```c
char buffer[100];
scanf("%s", buffer);
printf(buffer); // Vulnerável!
```

Neste exemplo, se o usuário inserir `%x %x %x`, o programa irá tentar ler valores da pilha e exibi-los, podendo vazar informações sensíveis ou até mesmo modificar a memória.

---

## Como as Vulnerabilidades de Format String Podem Ser Exploradas?

As vulnerabilidades de format string podem ser exploradas de diversas formas, dependendo do contexto e das proteções do sistema. Os principais vetores de ataque incluem:

### 1. **Leitura Arbitrária de Memória**

Ao usar especificadores como `%x` ou `%s`, um atacante pode ler valores da pilha ou de endereços arbitrários, vazando informações sensíveis, como senhas, chaves criptográficas ou endereços de funções.

**Exemplo:**
```c
printf(user_input); // user_input = "%x %x %x %x"
```
Isso pode exibir valores da pilha, ajudando o atacante a mapear a memória do processo.

### 2. **Escrita Arbitrária de Memória**

O especificador `%n` instrui o `printf` a escrever o número de caracteres impressos até o momento em um endereço fornecido como argumento. Se o atacante controlar a string de formato e os argumentos, pode escrever valores arbitrários em endereços específicos, potencialmente sobrescrevendo ponteiros de função, variáveis de controle ou endereços de retorno.

**Exemplo:**
```c
printf(user_input); // user_input = "AAAA%n"
```
Se o atacante conseguir alinhar a pilha corretamente, pode sobrescrever valores críticos.

### 3. **Execução de Código Arbitrário**

Combinando leitura e escrita arbitrária, um atacante pode modificar o fluxo de execução do programa, redirecionando a execução para código malicioso (shellcode), especialmente em sistemas sem proteções modernas (como ASLR, DEP, etc.).

---

## Exemplos Reais

Vulnerabilidades de format string já foram exploradas em softwares amplamente utilizados, como servidores FTP, aplicações web e até mesmo sistemas operacionais. Um caso famoso foi a vulnerabilidade no `wu-ftpd`, que permitia execução remota de código via exploração de format string.

---

## Prevenção de Vulnerabilidades de Format String

A prevenção dessas falhas é relativamente simples, mas exige disciplina e atenção dos desenvolvedores. As principais recomendações são:

### 1. **Nunca Use Dados Externos como String de Formato**

Sempre forneça uma string de formato fixa e explícita nas funções de formatação. Por exemplo:

```c
printf("%s", user_input); // Seguro
```
Em vez de:
```c
printf(user_input); // Vulnerável
```

### 2. **Ferramentas de Análise Estática**

Utilize ferramentas de análise estática de código que detectam usos inseguros de funções de formatação.

### 3. **Compiladores e Warnings**

Ative warnings do compilador (como `-Wformat` no GCC) para identificar possíveis usos inseguros de funções de formatação.

### 4. **Funções Seguras**

Prefira funções seguras e modernas, como `snprintf` em vez de `sprintf`, e evite funções obsoletas ou perigosas.

### 5. **Sanitização de Entradas**

Valide e sanitize todas as entradas do usuário, mesmo que não sejam usadas diretamente em funções de formatação.

---

## Considerações Finais

Vulnerabilidades de format string são um exemplo clássico de como pequenas distrações no uso de funções padrão podem resultar em falhas graves de segurança. Compreender seu funcionamento, vetores de exploração e, principalmente, as boas práticas de prevenção é fundamental para o desenvolvimento de softwares robustos e seguros.

---

**Referências:**
- [OWASP: Format String Attack](https://owasp.org/www-community/attacks/Format_string_attack)
- [CWE-134: Use of Externally-Controlled Format String](https://cwe.mitre.org/data/definitions/134.html)
- [The Art of Exploitation, Jon Erickson](https://www.nostarch.com/hacking2.htm)
```
