const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find src/app -name "page.tsx"').toString().trim().split('\n');
let stylesExtracted = false;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    if (!stylesExtracted) {
       fs.appendFileSync('src/app/globals.css', '\n' + styleMatch[1] + '\n');
       stylesExtracted = true;
    }
    content = content.replace(/<style>[\s\S]*?<\/style>/, '');
    fs.writeFileSync(file, content);
  }
}
