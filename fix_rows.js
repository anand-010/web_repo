const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find src/app -name "page.tsx"').toString().trim().split('\n');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/rows="(\d+)"/g, 'rows={$1}');
  fs.writeFileSync(file, content);
}
