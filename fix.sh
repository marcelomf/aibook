#!/bin/bash
find . -type f -exec sed -i '' '1s/^```markdown//' {} +
