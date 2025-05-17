#!/bin/bash
find . -name "*.md" -type f -exec sed -i '' '1s/^```markdown//' {} +
find . -name "*.md" -type f -exec sed -i '' '$s/```//g' {} +
find ./../examples/logica_paraconsistente/ -name "*.md" -type f -exec sed -i '' 's/---/___/g' {} +
