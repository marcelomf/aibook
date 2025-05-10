```markdown
# Exemplos de Implementação de Modelos de Linguagem com JavaScript/TypeScript

A evolução das arquiteturas de modelos de linguagem, como RNN, LSTM e Transformer, permitiu avanços significativos em tarefas de processamento de linguagem natural (PLN). Com o crescimento do ecossistema JavaScript/TypeScript, tornou-se possível implementar e executar esses modelos diretamente no navegador ou em ambientes Node.js, utilizando bibliotecas como [TensorFlow.js](https://www.tensorflow.org/js) e [ONNX.js](https://github.com/microsoft/onnxjs).

Neste tópico, apresentamos exemplos práticos de implementação dessas arquiteturas, destacando suas aplicações e peculiaridades no contexto JavaScript/TypeScript.

---

## 1. RNN (Redes Neurais Recorrentes) com TensorFlow.js

As RNNs são adequadas para sequências de dados, como texto ou séries temporais. Em JavaScript, podemos criar e treinar uma RNN simples para tarefas como previsão de próxima palavra.

### Exemplo: RNN para Previsão de Sequência

```typescript
import * as tf from '@tensorflow/tfjs';

// Definindo o modelo RNN
const model = tf.sequential();
model.add(tf.layers.simpleRNN({
  units: 32,
  inputShape: [10, 1], // 10 passos de tempo, 1 feature
  activation: 'tanh'
}));
model.add(tf.layers.dense({ units: 1, activation: 'linear' }));

model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

// Treinamento (exemplo com dados fictícios)
const xs = tf.randomNormal([100, 10, 1]);
const ys = tf.randomNormal([100, 1]);

await model.fit(xs, ys, { epochs: 10 });
```

**Observação:** RNNs simples podem sofrer com o problema do gradiente desaparecendo em sequências longas. Para mitigar isso, arquiteturas como LSTM são preferidas.

---

## 2. LSTM (Long Short-Term Memory) com TensorFlow.js

LSTMs são uma evolução das RNNs, capazes de capturar dependências de longo prazo em sequências. São amplamente utilizadas em tarefas como geração de texto.

### Exemplo: LSTM para Geração de Texto

```typescript
import * as tf from '@tensorflow/tfjs';

// Definindo o modelo LSTM
const model = tf.sequential();
model.add(tf.layers.lstm({
  units: 64,
  inputShape: [20, 50], // 20 passos de tempo, 50 features (ex: embeddings)
  returnSequences: false
}));
model.add(tf.layers.dense({ units: 50, activation: 'softmax' }));

model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy' });

// Treinamento (exemplo com dados fictícios)
const xs = tf.randomNormal([200, 20, 50]);
const ys = tf.randomUniform([200, 50]);

await model.fit(xs, ys, { epochs: 5 });
```

**Dica:** Para tarefas reais, utilize embeddings de palavras e prepare os dados de texto adequadamente.

---

## 3. Transformer com TensorFlow.js e ONNX.js

Transformers revolucionaram o PLN, permitindo paralelização e melhor desempenho em tarefas como tradução automática e geração de texto. Embora o treinamento de Transformers do zero seja custoso, é possível utilizar modelos pré-treinados e realizar inferência no navegador.

### Exemplo: Inferência com Modelo Transformer Pré-treinado (ONNX.js)

Você pode exportar modelos como BERT ou GPT para o formato ONNX e carregá-los no navegador usando ONNX.js.

```typescript
import * as onnx from 'onnxjs';

// Carregar o modelo ONNX
const session = new onnx.InferenceSession();
await session.loadModel('./bert.onnx');

// Preparar entrada (exemplo simplificado)
const inputTensor = new onnx.Tensor(new Float32Array([...]), 'float32', [1, 128]);

// Executar inferência
const outputMap = await session.run({ input_ids: inputTensor });
const output = outputMap.values().next().value;

console.log('Saída do modelo:', output.data);
```

### Exemplo: Transformer Simplificado com TensorFlow.js

Para fins didáticos, é possível implementar um bloco Transformer básico:

```typescript
import * as tf from '@tensorflow/tfjs';

// Camada de atenção simplificada
function attention(query: tf.Tensor, key: tf.Tensor, value: tf.Tensor) {
  const scores = tf.matMul(query, key, false, true);
  const weights = tf.softmax(scores);
  return tf.matMul(weights, value);
}

// Exemplo de uso
const query = tf.randomNormal([1, 10, 64]);
const key = tf.randomNormal([1, 10, 64]);
const value = tf.randomNormal([1, 10, 64]);

const attended = attention(query, key, value);
console.log(attended.shape); // [1, 10, 64]
```

---

## Considerações Finais

- **TensorFlow.js** permite criar, treinar e executar modelos de linguagem diretamente em JavaScript/TypeScript, tanto no navegador quanto no Node.js.
- **ONNX.js** facilita a execução de modelos complexos, como Transformers, exportados de outros frameworks.
- Para aplicações reais, recomenda-se utilizar modelos pré-treinados e focar em fine-tuning ou inferência, devido ao alto custo computacional do treinamento do zero.
- O ecossistema JavaScript/TypeScript está em constante evolução, com novas bibliotecas e modelos sendo disponibilizados para IA generativa.

---

### Referências

- [TensorFlow.js Documentation](https://www.tensorflow.org/js)
- [ONNX.js GitHub](https://github.com/microsoft/onnxjs)
- [Hugging Face Transformers.js](https://github.com/xenova/transformers.js) (execução de modelos Transformers no navegador)
```
