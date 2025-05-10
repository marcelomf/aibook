
## Exemplos de Projetos Simples em Diferentes Linguagens

Ao concluir o estudo dos fundamentos da lógica de programação, é natural desejar colocar em prática o conhecimento adquirido. Uma excelente forma de consolidar o aprendizado é desenvolver pequenos projetos, que ajudam a entender como os conceitos se aplicam em situações reais. A seguir, apresentamos exemplos de projetos simples em diferentes linguagens de programação populares entre iniciantes. Esses projetos são ótimos pontos de partida para quem está começando.

---

### 1. Calculadora Simples

**Descrição:**  
Uma calculadora que realiza operações básicas (adição, subtração, multiplicação e divisão) a partir de dois números fornecidos pelo usuário.

#### Python
```python
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
operacao = input("Escolha a operação (+, -, *, /): ")

if operacao == '+':
    print("Resultado:", num1 + num2)
elif operacao == '-':
    print("Resultado:", num1 - num2)
elif operacao == '*':
    print("Resultado:", num1 * num2)
elif operacao == '/':
    if num2 != 0:
        print("Resultado:", num1 / num2)
    else:
        print("Erro: divisão por zero!")
else:
    print("Operação inválida.")
```

#### JavaScript
```javascript
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação (+, -, *, /):");

let resultado;
switch (operacao) {
  case '+':
    resultado = num1 + num2;
    break;
  case '-':
    resultado = num1 - num2;
    break;
  case '*':
    resultado = num1 * num2;
    break;
  case '/':
    resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero!";
    break;
  default:
    resultado = "Operação inválida.";
}
alert("Resultado: " + resultado);
```

---

### 2. Jogo de Adivinhação

**Descrição:**  
O computador escolhe um número aleatório, e o usuário deve tentar adivinhar qual é esse número.

#### Python
```python
import random

numero_secreto = random.randint(1, 100)
tentativas = 0

while True:
    palpite = int(input("Adivinhe o número (entre 1 e 100): "))
    tentativas += 1
    if palpite < numero_secreto:
        print("Muito baixo!")
    elif palpite > numero_secreto:
        print("Muito alto!")
    else:
        print(f"Parabéns! Você acertou em {tentativas} tentativas.")
        break
```

#### Java
```java
import java.util.Scanner;
import java.util.Random;

public class JogoAdivinhacao {
    public static void main(String[] args) {
        Random rand = new Random();
        int numeroSecreto = rand.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        int tentativas = 0, palpite;

        do {
            System.out.print("Adivinhe o número (1-100): ");
            palpite = scanner.nextInt();
            tentativas++;
            if (palpite < numeroSecreto) {
                System.out.println("Muito baixo!");
            } else if (palpite > numeroSecreto) {
                System.out.println("Muito alto!");
            } else {
                System.out.println("Parabéns! Você acertou em " + tentativas + " tentativas.");
            }
        } while (palpite != numeroSecreto);
        scanner.close();
    }
}
```

---

### 3. Conversor de Temperatura

**Descrição:**  
Converte uma temperatura de Celsius para Fahrenheit e vice-versa.

#### C
```c
#include <stdio.h>

int main() {
    float temp, convertido;
    char escala;
    printf("Digite a temperatura: ");
    scanf("%f", &temp);
    printf("Converter para (C)elsius ou (F)ahrenheit? ");
    scanf(" %c", &escala);

    if (escala == 'C' || escala == 'c') {
        convertido = (temp - 32) * 5 / 9;
        printf("Temperatura em Celsius: %.2f\n", convertido);
    } else if (escala == 'F' || escala == 'f') {
        convertido = (temp * 9 / 5) + 32;
        printf("Temperatura em Fahrenheit: %.2f\n", convertido);
    } else {
        printf("Escala inválida.\n");
    }
    return 0;
}
```

#### JavaScript
```javascript
let temp = parseFloat(prompt("Digite a temperatura:"));
let escala = prompt("Converter para (C)elsius ou (F)ahrenheit?");

if (escala.toUpperCase() === "C") {
  let convertido = (temp - 32) * 5 / 9;
  alert("Temperatura em Celsius: " + convertido.toFixed(2));
} else if (escala.toUpperCase() === "F") {
  let convertido = (temp * 9 / 5) + 32;
  alert("Temperatura em Fahrenheit: " + convertido.toFixed(2));
} else {
  alert("Escala inválida.");
}
```

---

## Dicas para Praticar

- **Escolha uma linguagem:** Comece com a linguagem que mais lhe agrada ou que seja recomendada para iniciantes, como Python ou JavaScript.
- **Implemente os exemplos:** Digite e execute os exemplos acima, fazendo pequenas modificações para entender o funcionamento.
- **Crie variações:** Tente adicionar novas funcionalidades, como menus, validação de entrada ou repetição dos cálculos.
- **Compartilhe seu código:** Use plataformas como GitHub para compartilhar seus projetos e receber feedback.

Esses projetos simples são excelentes para fixar os conceitos de lógica de programação e servem como base para desafios mais avançados no futuro. O importante é praticar e não ter medo de errar — cada erro é uma oportunidade de aprendizado!
```
