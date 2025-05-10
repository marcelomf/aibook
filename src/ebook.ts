import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText, generateObject } from 'ai';
import { z } from 'zod';
import fs from 'node:fs';
import { Runner } from './runner';
import 'dotenv/config';

const API_KEY = process.env.OPENROUTER_KEY;
let MODEL = 'openai/gpt-4.1'; // anthropic/claude-3.5-sonnet deepseek/deepseek-chat-v3-0324:free openai/gpt-4.1
let OUT_DIR = './data';
const MIN_RATING = 7;

function simpleString(str: string) {
  return str.normalize("NFD").replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s/g, "_").toLowerCase();
}

export class Ebook {

    subject: string;

    constructor(subject: string, model: string = 'openai/gpt-4.1', outputDir: string = './data') {
        this.subject = subject;
        MODEL = model;
        OUT_DIR = outputDir;
    }

    async persuasive(input: string) {
        const openrouter = createOpenRouter({
          apiKey: API_KEY,
        });
        
        // const { text } = await generateText({
        //   model: openrouter.chat(MODEL),
        //   prompt: 'What is OpenRouter?',
        // });
      
        //const model = openai('gpt-4o');
        const model = openrouter.chat(MODEL);
      
        // First step: Generate marketing copy
        const { text: copy } = await generateText({
          model,
          prompt: `Write persuasive marketing copy for: ${input}. Focus on benefits and emotional appeal.`,
        });
      
        // Perform quality check on copy
        const { object: qualityMetrics } = await generateObject({
          model,
          schema: z.object({
            hasCallToAction: z.boolean(),
            emotionalAppeal: z.number().min(1).max(10),
            clarity: z.number().min(1).max(10),
          }),
          prompt: `Evaluate this marketing copy for:
          1. Presence of call to action (true/false)
          2. Emotional appeal (1-10)
          3. Clarity (1-10)
      
          Copy to evaluate: ${copy}`,
        });
      
        // If quality check fails, regenerate with more specific instructions
        if (
          !qualityMetrics.hasCallToAction ||
          qualityMetrics.emotionalAppeal < MIN_RATING ||
          qualityMetrics.clarity < MIN_RATING
        ) {
          const { text: improvedCopy } = await generateText({
            model,
            prompt: `Rewrite this marketing copy with:
            ${!qualityMetrics.hasCallToAction ? '- A clear call to action' : ''}
            ${qualityMetrics.emotionalAppeal < MIN_RATING ? '- Stronger emotional appeal' : ''}
            ${qualityMetrics.clarity < MIN_RATING ? '- Improved clarity and directness' : ''}
      
            Original copy: ${copy}`,
          });
          return { copy: improvedCopy, qualityMetrics };
        }
      
        console.log({ copy, qualityMetrics });
      
        return { copy, qualityMetrics };
      
    }
      
    async genResume(subject: string) {
        const openrouter = createOpenRouter({
            apiKey: API_KEY,
        });
        
        const { text } = await generateText({
            model: openrouter.chat(MODEL),
            prompt: 'Gere um resumo de um ebook sobre: '+subject,
        });
        
        return text;
    }
    
    async genChapters(resume: string) {
        const openrouter = createOpenRouter({
            apiKey: API_KEY,
        });
        
        const model = openrouter.chat(MODEL);
        
        // Perform quality check on copy
        const { object: result } = await generateObject({
            model,
            schema: z.object({
            title: z.string(),
            description: z.string(),
            resume: z.string(),
            relevantContent: z.number().min(1).max(10),
            clarityContent: z.number().min(1).max(10),
            reliabilityContent: z.number().min(1).max(10),
            chapters: z.array(z.string())
            }),
            prompt: `Avalie este resumo de ebook:
            1. Conteúdo relevante (1-10)
            2. Clareza no conteúdo (1-10)
            3. Confiabilidade no conteúdo (1-10)
        
            Gere um título para o ebook
        
            Gere uma descrição para o ebook
        
            Gere a capitulos para o ebook
        
            Resumo: ${resume}`,
        });
        
        // If quality check fails, regenerate with more specific instructions
        if (
            result.relevantContent < MIN_RATING ||
            result.reliabilityContent < MIN_RATING ||
            result.clarityContent < MIN_RATING
        ) {
            const { text: improvedResume } = await generateText({
            model,
            prompt: `Reescreva este resumo de ebook com:
            ${result.relevantContent < MIN_RATING ? '- Relevância mais forte de conteúdo' : ''}
            ${result.reliabilityContent < MIN_RATING ? '- Confiabilidade maior de conteúdo' : ''}
            ${result.clarityContent < MIN_RATING ? '- Clareza maior no conteúdo' : ''}
        
            Resumo original: ${resume}`,
            });
            return { resume: improvedResume, result };
        }
        
        console.log({ resume, result });
        
        return { resume, result };
    
    }
    
    async genTopics(title: string, description: string, resume: string, chapter: string) {
        const openrouter = createOpenRouter({
            apiKey: API_KEY,
        });
        
        const model = openrouter.chat(MODEL);
        
        // Perform quality check on copy
        const { object: result } = await generateObject({
            model,
            schema: z.object({
            relevantContent: z.number().min(1).max(10),
            updatedContent: z.number().min(1).max(10),
            topics: z.array(z.string())
            }),
            prompt: `Avalie o capítulo deste ebook:
            1. Conteúdo relevante (1-10)
            2. Conteúdo atualizado (1-10)
        
            Título ebook: ${title}
        
            Descrição do ebook: ${description}
        
            Resumo do ebook: ${resume}
        
            Gere tópicos para o capítulo: ${chapter}`,
        });
        
        // If quality check fails, regenerate with more specific instructions
        if (
            result.relevantContent < MIN_RATING ||
            result.updatedContent < MIN_RATING
        ) {
            const { text: improvedChapter } = await generateText({
            model,
            prompt: `Reescreva este capítulo de ebook com:
            ${result.relevantContent < MIN_RATING ? '- Relevância mais forte de conteúdo' : ''}
            ${result.updatedContent < MIN_RATING ? '- Conteúdo mais atualizado' : ''}
        
            Capítulo original: ${chapter}`,
            });
            return { chapter: improvedChapter, result };
        }
        
        console.log({ chapter, result });
        
        return { chapter, result };
    }
    
    async genSubTopics(title: string, description: string, resume: string, chapter: string, topic: string, allSubtopics: any[]) {
        const openrouter = createOpenRouter({
            apiKey: API_KEY,
        });
        
        const model = openrouter.chat(MODEL);
        
        // Perform quality check on copy
        const { object: result } = await generateObject({
            model,
            schema: z.object({
            relevantContent: z.number().min(1).max(10),
            updatedContent: z.number().min(1).max(10),
            subtopics: z.array(z.string())
            }),
            prompt: `Avalie o tópico do capítulo deste ebook:\n
            1. Conteúdo relevante (1-10)\n
            2. Conteúdo atualizado (1-10)\n
        
            Título ebook: ${title}\n
        
            Descrição do ebook: ${description}\n
        
            Resumo do ebook: ${resume}\n
        
            Capítulo do ebook: ${chapter}\n

            Você não deve gerar sub-tópicos similares aos sub-tópicos abaixo:\n
            ${allSubtopics.join("\n")}\n\n
            
            Gere sub-tópicos para o tópico: ${topic}`,
        });
        
        // If quality check fails, regenerate with more specific instructions
        if (
            result.relevantContent < MIN_RATING ||
            result.updatedContent < MIN_RATING
        ) {
            const { text: improvedTopic } = await generateText({
            model,
            prompt: `Reescreva este tópico do ebook com:
            ${result.relevantContent < MIN_RATING ? '- Relevância mais forte de conteúdo' : ''}
            ${result.updatedContent < MIN_RATING ? '- Conteúdo mais atualizado' : ''}
        
            tópico original: ${topic}`,
            });
            return { topic: improvedTopic, result };
        }
        
        console.log({ topic, result });
        
        return { topic, result };
    
    }
    
    async genSubTopicMd(title: string, description: string, resume: string, chapter: string, topic: string, subtopic: string) {
        const openrouter = createOpenRouter({
            apiKey: API_KEY,
        });
        
        const model = openrouter.chat(MODEL);
        
        
        const { text: subtopicMd } = await generateText({
            model,
            prompt: `Referente ao ebook de título: ${title}\n
                     Descrição: ${description}\n
                     Resumo: ${resume}\n
                     Capitulo: ${chapter}\n
                     Topico: ${topic}\n
                     Escreva um texto completo em markdown, com conteúdo relevante, claro, confiável e atualizado sobre: ${subtopic}`,
        });
        
        // Perform quality check on copy
        const { object: result } = await generateObject({
            model,
            schema: z.object({
            relevantContent: z.number().min(1).max(10),
            clarityContent: z.number().min(1).max(10),
            reliabilityContent: z.number().min(1).max(10),
            updatedContent: z.number().min(1).max(10)
            }),
            prompt: `Avalie o subtópico deste ebook:
            1. Conteúdo relevante (1-10)
            2. Conteúdo claro (1-10)
            3. Conteúdo confiável (1-10)
            4. Conteúdo atualizado (1-10)
        
            Título ebook: ${title}
        
            Descrição do ebook: ${description}
        
            Resumo do ebook: ${resume}
        
            Capítulo do ebook: ${chapter}
        
            Tópico do ebook: ${topic}
        
            Sub-Tópico do ebook: ${subtopic}
            
            Conteúdo do sub-tópico: ${subtopicMd}`,
        });
        
        // If quality check fails, regenerate with more specific instructions
        if (
            result.relevantContent < MIN_RATING ||
            result.clarityContent < MIN_RATING ||
            result.reliabilityContent < MIN_RATING ||
            result.updatedContent < MIN_RATING
        ) {
            const { text: improvedSubTopicMd } = await generateText({
            model,
            prompt: `Reescreva este sub-tópico do ebook com:
            ${result.relevantContent < MIN_RATING ? '- Relevância mais forte de conteúdo' : ''}
            ${result.clarityContent < MIN_RATING ? '- Clareza de conteúdo' : ''}
            ${result.reliabilityContent < MIN_RATING ? '- Confiábilidade maior de conteúdo' : ''}
            ${result.updatedContent < MIN_RATING ? '- Conteúdo mais atualizado' : ''}
        
            sub-tópico original: ${subtopicMd}`,
            });
            return { subtopicMd: improvedSubTopicMd, result };
        }
        
        //console.log({ subtopicMd, result });
        
        return { subtopicMd, result };
    
    }
    
    
    async genEbook() {
        const { result } = await this.genChapters(await this.genResume(this.subject));
        
        const { title, description, resume } = result;
        
        fs.writeFileSync(`${OUT_DIR}/README.md`, `
# ${title}\n\n
### Descrição \n
#### ${description}\n\n
### Resumo \n
#### ${resume}\n\n
[SUMMARY](./SUMMARY.md)\n\n
#### Autor: Marcelo M. Fleury\n
#### Goiânia, Go, Brasil - 30/04/2025`, {encoding: "utf-8"});
        
        let summaryChapters = `# ${title}\n\n`;
        for(const chapter of result.chapters) {
            summaryChapters += `[${chapter}](${simpleString(chapter)}/SUMMARY.md)\n\n`;
        }
        fs.writeFileSync(`${OUT_DIR}/SUMMARY.md`, summaryChapters, {encoding: "utf-8"});
        

        async function writeSubTopicMd(ebookInstance: Ebook, title: string, description: string, resume: string, chapter: string, topic: string, subtopic: string) {
            const promise = new Promise(async (resolve, reject) => {
                try {
                    const { subtopicMd, result } = await ebookInstance.genSubTopicMd(title, description, resume, chapter, topic, subtopic);
                    fs.writeFileSync(`${OUT_DIR}/${simpleString(chapter)}/${simpleString(topic)}/${simpleString(subtopic)}.md`, subtopicMd, {encoding: "utf-8"});
                    return resolve(result);
                } catch(e) {
                    console.error(e);
                    fs.writeFileSync(`${OUT_DIR}/${simpleString(chapter)}/${simpleString(topic)}/${simpleString(subtopic)}.md`, String(e), {encoding: "utf-8"});
                    return reject(e);
                } 
            });
            return promise;
        }

        let allSubtopics: any[] = [];

        for(const chapter of result.chapters) {
            fs.mkdirSync(`${OUT_DIR}/${simpleString(chapter)}`);
            const { result } = await this.genTopics(title, description, resume, chapter);
        
            let summaryTopics = `# ${chapter}\n\n`;
            for(const topic of result.topics) {
                summaryTopics += `[${topic}](${simpleString(topic)}/SUMMARY.md)\n\n`;
            }
            fs.writeFileSync(`${OUT_DIR}/${simpleString(chapter)}/SUMMARY.md`, summaryTopics, {encoding: "utf-8"});
        
            for(const topic of result.topics) {
                fs.mkdirSync(`${OUT_DIR}/${simpleString(chapter)}/${simpleString(topic)}`);
                const { result } = await this.genSubTopics(title, description, resume, chapter, topic, allSubtopics);
                allSubtopics = allSubtopics.concat(result.subtopics);

                let summarySubtopics = `# ${topic}\n\n`;
                for(const subtopic of result.subtopics) {
                    summarySubtopics += `[${subtopic}](${simpleString(subtopic)}.md)\n\n`;
                }
                fs.writeFileSync(`${OUT_DIR}/${simpleString(chapter)}/${simpleString(topic)}/SUMMARY.md`, summarySubtopics, {encoding: "utf-8"});
            
                const runner = new Runner(writeSubTopicMd);
                for(const subtopic of result.subtopics) {
                    runner.addExecution(this, title, description, resume, chapter, topic, subtopic);
                }
                await runner.run(10, function(result: any){
                    console.log(result);
                }, function(result: any){
                    console.error(result);
                });
            }
        }
    }
}