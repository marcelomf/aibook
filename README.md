# aiBook - Generate books with Generative Artificial Intelligence

### I wrote this project in a few hours, don't be too strict with your evaluation :).

#### RUN:
```bash
git clone https://github.com/marcelomf/aibook
cd aibook
npm install -g pnpm
pnpm install
echo "OPENROUTER_KEY=YOUR_OPENROUTER_KEY" > .env
pnpm run start gen --subject "Generative Artificial Intelligence with Typescript/Javascript"
```
Wait... and your book will be in the ./data directory

#### Examples:
https://github.com/marcelomf/aibook/examples

#### TODO:
- i18n support
- Improve the order of ratings
- Subtopics are no longer mandatory
- Remove ```markdown and other unwanted variations