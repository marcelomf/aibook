```markdown
# Demonstração de Ferramentas e Bibliotecas Populares para IA Generativa: Texto, Imagem e Música

A Inteligência Artificial Generativa revolucionou a forma como criamos conteúdo digital, permitindo a geração automática de textos, imagens e músicas. No ecossistema JavaScript/TypeScript, diversas bibliotecas facilitam a implementação dessas soluções diretamente no navegador ou em aplicações Node.js. Neste tópico, vamos explorar e demonstrar as principais ferramentas e bibliotecas para cada tipo de geração: **TensorFlow.js**, **Magenta.js** e **ONNX.js**.

---

## 1. Geração de Texto

### TensorFlow.js

O [TensorFlow.js](https://www.tensorflow.org/js) é uma biblioteca poderosa para treinamento e execução de modelos de machine learning em JavaScript. Para geração de texto, é possível utilizar modelos de linguagem pré-treinados, como GPT-2, adaptados para o ambiente web.

#### Exemplo: Geração de Texto com TensorFlow.js

```javascript
import * as tf from '@tensorflow/tfjs';
// Exemplo ilustrativo: carregando um modelo de linguagem
const model = await tf.loadLayersModel('path/to/model.json');

// Supondo que você tenha um modelo de linguagem treinado
const input = tf.tensor([/* tokens de entrada */]);
const output = model.predict(input);
// Decodifique os tokens de saída para texto
```

> **Nota:** Modelos grandes como GPT-2 podem ser pesados para o navegador. Alternativas mais leves ou APIs externas podem ser usadas para aplicações reais.

### ONNX.js

O [ONNX.js](https://github.com/microsoft/onnxjs) permite executar modelos treinados em outros frameworks (PyTorch, TensorFlow) no navegador. Modelos de linguagem exportados para o formato ONNX podem ser carregados e utilizados para geração de texto.

#### Exemplo: Carregando um modelo ONNX

```javascript
import * as onnx from 'onnxjs';

const session = new onnx.InferenceSession();
await session.loadModel('./model.onnx');

const inputTensor = new onnx.Tensor(new Float32Array([/* dados */]), 'float32', [1, inputLength]);
const outputMap = await session.run([inputTensor]);
const outputTensor = outputMap.values().next().value;
```

---

## 2. Geração de Imagem

### TensorFlow.js

Com TensorFlow.js, é possível rodar modelos generativos como GANs (Redes Generativas Adversariais) diretamente no navegador.

#### Exemplo: Geração de Imagem com GAN

```javascript
import * as tf from '@tensorflow/tfjs';

// Carregue um modelo GAN pré-treinado
const model = await tf.loadLayersModel('path/to/gan/model.json');

// Gere um vetor de ruído aleatório
const noise = tf.randomNormal([1, 100]);
const generatedImage = model.predict(noise);

// Exiba a imagem gerada
const canvas = document.getElementById('output');
await tf.browser.toPixels(generatedImage.squeeze(), canvas);
```

### ONNX.js

Modelos de geração de imagem, como StyleGAN ou modelos de difusão, podem ser exportados para ONNX e executados no navegador.

#### Exemplo: Geração de Imagem com ONNX.js

```javascript
// Similar ao exemplo anterior, mas usando um modelo de imagem
const session = new onnx.InferenceSession();
await session.loadModel('./gan_model.onnx');

const noiseTensor = new onnx.Tensor(new Float32Array([/* ruído */]), 'float32', [1, 100]);
const outputMap = await session.run([noiseTensor]);
const imageTensor = outputMap.values().next().value;
// Converter o tensor para imagem e exibir
```

---

## 3. Geração de Música

### Magenta.js

[Magenta.js](https://magenta.tensorflow.org/js) é uma biblioteca desenvolvida pelo Google para aplicações criativas de IA, focada em música e arte. Ela oferece modelos prontos para geração de melodias, harmonias e até batidas.

#### Exemplo: Geração de Melodia com Magenta.js

```javascript
import * as mm from '@magenta/music';

// Carregue um modelo de geração de melodia
const melodyRNN = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn');
await melodyRNN.initialize();

// Sequência de notas de entrada (opcional)
const seed = {
  notes: [
    {pitch: 60, startTime: 0, endTime: 0.5},
    {pitch: 62, startTime: 0.5, endTime: 1}
  ],
  totalTime: 1
};

// Gere uma nova melodia
const result = await melodyRNN.continueSequence(seed, 20, 1.0);

// Tocar a melodia gerada
const player = new mm.Player();
player.start(result);
```

---

## 4. Considerações Finais

- **TensorFlow.js** é versátil e suporta tanto geração de texto quanto de imagens, com ampla documentação e comunidade ativa.
- **ONNX.js** permite a portabilidade de modelos treinados em outros frameworks, facilitando a execução no navegador.
- **Magenta.js** é especializado em aplicações criativas, especialmente música, e oferece modelos prontos para uso.

Essas bibliotecas tornam a IA generativa acessível para desenvolvedores web, permitindo a criação de aplicações inovadoras diretamente no navegador ou em ambientes Node.js. Ao explorar e combinar essas ferramentas, é possível criar experiências ricas e interativas, democratizando o acesso à inteligência artificial generativa.

---
```
