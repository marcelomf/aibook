```markdown
# Exemplo Prático de Arquitetura Simples de Rede Neural em JavaScript/TypeScript

Neste tópico, vamos construir uma arquitetura básica de rede neural artificial (RNA) utilizando JavaScript/TypeScript, demonstrando na prática como funcionam as camadas, neurônios e funções de ativação. O objetivo é criar uma rede simples, mas funcional, que pode ser expandida para aplicações mais complexas.

## 1. Conceitos Fundamentais

Antes de partirmos para o código, vale relembrar os principais componentes de uma rede neural:

- **Camada de entrada:** Recebe os dados de entrada.
- **Camadas ocultas:** Realizam transformações intermediárias nos dados.
- **Camada de saída:** Produz o resultado final.
- **Neurônios:** Unidades básicas de processamento em cada camada.
- **Função de ativação:** Define a saída de cada neurônio, introduzindo não-linearidade.

## 2. Estrutura Básica em TypeScript

Vamos implementar uma rede neural com:

- Uma camada de entrada (2 neurônios)
- Uma camada oculta (2 neurônios)
- Uma camada de saída (1 neurônio)
- Função de ativação sigmoid

### 2.1. Função de Ativação Sigmoid

```typescript
function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}
```

### 2.2. Classe Neuron

```typescript
class Neuron {
  weights: number[];
  bias: number;

  constructor(numInputs: number) {
    // Inicializa pesos e bias aleatoriamente
    this.weights = Array.from({ length: numInputs }, () => Math.random() * 2 - 1);
    this.bias = Math.random() * 2 - 1;
  }

  activate(inputs: number[]): number {
    // Soma ponderada + bias
    const sum = this.weights.reduce((acc, w, i) => acc + w * inputs[i], this.bias);
    return sigmoid(sum);
  }
}
```

### 2.3. Classe Layer (Camada)

```typescript
class Layer {
  neurons: Neuron[];

  constructor(numNeurons: number, numInputsPerNeuron: number) {
    this.neurons = Array.from({ length: numNeurons }, () => new Neuron(numInputsPerNeuron));
  }

  forward(inputs: number[]): number[] {
    return this.neurons.map(neuron => neuron.activate(inputs));
  }
}
```

### 2.4. Classe NeuralNetwork

```typescript
class NeuralNetwork {
  inputLayer: Layer;
  hiddenLayer: Layer;
  outputLayer: Layer;

  constructor() {
    this.inputLayer = new Layer(2, 2); // Não usada explicitamente, mas para clareza
    this.hiddenLayer = new Layer(2, 2);
    this.outputLayer = new Layer(1, 2);
  }

  predict(inputs: number[]): number[] {
    const hiddenOutputs = this.hiddenLayer.forward(inputs);
    const output = this.outputLayer.forward(hiddenOutputs);
    return output;
  }
}
```

## 3. Utilizando a Rede Neural

Vamos criar uma instância da rede e fazer uma previsão simples:

```typescript
const nn = new NeuralNetwork();

// Exemplo de entrada: [0.5, 0.8]
const input = [0.5, 0.8];
const output = nn.predict(input);

console.log('Saída da rede:', output);
```

## 4. Considerações

- **Treinamento:** O exemplo acima mostra apenas a arquitetura e a propagação direta (forward pass). O treinamento (ajuste dos pesos via backpropagation) não está implementado, pois envolve mais complexidade matemática.
- **Expansão:** Você pode aumentar o número de camadas, neurônios ou trocar a função de ativação conforme a necessidade.
- **Bibliotecas:** Para aplicações reais, recomenda-se usar bibliotecas como [TensorFlow.js](https://www.tensorflow.org/js) ou [ONNX.js](https://github.com/microsoft/onnxjs), que oferecem otimizações e suporte a GPU.

## 5. Conclusão

Este exemplo prático ilustra como construir uma arquitetura simples de rede neural em JavaScript/TypeScript, reforçando os conceitos de camadas, neurônios e funções de ativação. Compreender essa base é fundamental para avançar no desenvolvimento de soluções de IA generativa no ecossistema web.

---
**Referências:**
- [TensorFlow.js: Neural Network Basics](https://www.tensorflow.org/js/tutorials)
- [Neural Networks from Scratch in JavaScript](https://victorzhou.com/blog/intro-to-neural-networks/)
```
