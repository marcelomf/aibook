# Avaliação de Performance: Métricas e Indicadores para Modelos de Detecção de Fraudes

A detecção de fraudes no mercado financeiro é uma das aplicações mais relevantes e sensíveis de machine learning. Modelos preditivos são treinados para identificar transações suspeitas, minimizando perdas financeiras e protegendo clientes e instituições. No entanto, avaliar a performance desses modelos exige atenção especial, pois o contexto de fraude apresenta desafios únicos, como o desbalanceamento de classes (fraudes são raras em relação ao volume total de transações) e o alto custo de falsos negativos. Neste tópico, abordamos as principais métricas e indicadores utilizados para avaliar modelos de detecção de fraudes, destacando suas vantagens, limitações e aplicações práticas.

---

## 1. Desbalanceamento de Classes: O Desafio Central

Em detecção de fraudes, a maioria das transações é legítima, enquanto apenas uma pequena fração é fraudulenta. Isso faz com que métricas tradicionais, como **acurácia**, possam ser enganosas. Por exemplo, um modelo que classifica todas as transações como legítimas pode atingir uma acurácia de 99,9%, mas falha completamente em identificar fraudes.

---

## 2. Principais Métricas de Avaliação

### 2.1. Matriz de Confusão

A matriz de confusão é a base para calcular diversas métricas. Ela apresenta:

- **Verdadeiros Positivos (VP):** Fraudes corretamente identificadas.
- **Falsos Positivos (FP):** Transações legítimas classificadas como fraude (falsos alarmes).
- **Verdadeiros Negativos (VN):** Transações legítimas corretamente identificadas.
- **Falsos Negativos (FN):** Fraudes não detectadas pelo modelo.

### 2.2. Precisão (Precision)

Indica a proporção de transações identificadas como fraude que realmente são fraudes.

\[
\text{Precisão} = \frac{VP}{VP + FP}
\]

- **Importância:** Alta precisão significa menos falsos alarmes, reduzindo custos operacionais e insatisfação do cliente.

### 2.3. Revocação (Recall) ou Sensibilidade

Mede a capacidade do modelo de identificar todas as fraudes.

\[
\text{Revocação} = \frac{VP}{VP + FN}
\]

- **Importância:** Alta revocação é crucial para minimizar fraudes não detectadas, que podem gerar grandes prejuízos.

### 2.4. F1-Score

É a média harmônica entre precisão e revocação, equilibrando ambas as métricas.

\[
\text{F1-Score} = 2 \times \frac{\text{Precisão} \times \text{Revocação}}{\text{Precisão} + \text{Revocação}}
\]

- **Importância:** Útil quando é necessário balancear o custo de falsos positivos e falsos negativos.

### 2.5. Curva ROC e AUC (Área sob a Curva)

A curva ROC (Receiver Operating Characteristic) mostra a relação entre a taxa de verdadeiros positivos (sensibilidade) e a taxa de falsos positivos para diferentes limiares de decisão. O AUC (Area Under the Curve) resume a performance do modelo em um único valor.

- **AUC próximo de 1:** Excelente separação entre fraudes e transações legítimas.
- **AUC próximo de 0,5:** Modelo não melhor que o acaso.

### 2.6. Curva de Precisão-Revocação (PR Curve)

Em cenários altamente desbalanceados, a curva de precisão-revocação pode ser mais informativa que a ROC, pois foca no desempenho da classe minoritária (fraude).

---

## 3. Indicadores Complementares

### 3.1. Custo de Erros

Nem todo erro tem o mesmo impacto financeiro. Falsos negativos (fraudes não detectadas) geralmente têm custo maior que falsos positivos (falsos alarmes). Algumas instituições utilizam métricas customizadas que ponderam o custo de cada tipo de erro.

### 3.2. Tempo de Resposta

A detecção de fraude precisa ser rápida para permitir bloqueio ou reversão de transações suspeitas. O tempo de processamento do modelo é um indicador operacional relevante.

### 3.3. Taxa de Alarme

Refere-se à proporção de transações sinalizadas como suspeitas. Taxas muito altas podem sobrecarregar equipes de análise manual e gerar insatisfação dos clientes.

---

## 4. Boas Práticas na Avaliação

- **Validação cruzada estratificada:** Garante que a proporção de fraudes seja mantida em todos os conjuntos de validação.
- **Acompanhamento contínuo:** O perfil das fraudes pode mudar ao longo do tempo (conceito de _drift_), exigindo reavaliação periódica do modelo.
- **Testes em ambiente real:** Métricas offline podem não refletir o desempenho em produção, onde o comportamento dos usuários e fraudadores pode ser diferente.

---

## 5. Exemplo Prático

Suponha um modelo que analisa 1 milhão de transações, das quais 1.000 são fraudes. O modelo identifica 900 fraudes corretamente (VP), mas gera 2.000 falsos alarmes (FP) e deixa passar 100 fraudes (FN).

- **Precisão:** 900 / (900 + 2.000) = 0,31 (31%)
- **Revocação:** 900 / (900 + 100) = 0,90 (90%)
- **F1-Score:** 2 × (0,31 × 0,90) / (0,31 + 0,90) ≈ 0,46 (46%)

Neste cenário, o modelo é muito bom em capturar fraudes (alta revocação), mas ainda gera muitos falsos alarmes (baixa precisão). Ajustes podem ser feitos para melhorar o equilíbrio entre precisão e revocação, conforme a estratégia da instituição.

---

## 6. Conclusão

A avaliação de modelos de detecção de fraudes vai além da acurácia. É fundamental utilizar métricas que reflitam o impacto real dos erros, considerando o desbalanceamento de classes e o custo operacional e financeiro de cada decisão. A escolha das métricas deve estar alinhada aos objetivos do negócio e à tolerância a riscos, garantindo que a tecnologia contribua efetivamente para a segurança e eficiência do mercado financeiro.

---

**Leitura complementar:**  
- [Scikit-learn: Métricas para classificação desbalanceada](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics)
- [Kaggle: Credit Card Fraud Detection](https://www.kaggle.com/mlg-ulb/creditcardfraud)
- [FICO: Best Practices for Fraud Detection Analytics](https://www.fico.com/blogs/analytics-optimization/best-practices-fraud-detection-analytics)

---

**Dica para profissionais:**  
Ao implementar modelos de detecção de fraudes, envolva equipes multidisciplinares (dados, negócios, compliance) para definir as métricas mais relevantes e monitorar continuamente a performance do sistema.