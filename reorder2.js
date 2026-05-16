const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find src/app -name "page.tsx"').toString().trim().split('\n');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // We are looking for the exact block that was moved previously
  const headerRegex = /<div className="container section-header">\s*<h3>Product Walkthrough<\/h3>\s*<p>Explore the stunning visual experience.*?<\/p>\s*<\/div>\s*(<div className="container"[\s\S]*?<img[\s\S]*?<\/div>)/;
  
  const match = content.match(headerRegex);
  if (match) {
    const fullMatch = match[0];
    const imageContainer = match[1];
    
    // Remove the full match from its current location
    let newContent = content.replace(fullMatch, '');
    
    // Inject the imageContainer right before the closing tag of page-hero
    const heroRegex = /(<section className="page-hero">[\s\S]*?)(<\/section>)/;
    
    newContent = newContent.replace(heroRegex, (heroMatch, p1, p2) => {
      // Add a little margin-top to the image container if not present
      let modifiedImageContainer = imageContainer;
      if (!modifiedImageContainer.includes('marginTop')) {
         modifiedImageContainer = modifiedImageContainer.replace('"margin":"0 auto"', '"margin":"3rem auto 0"');
      }
      return p1 + '\n            ' + modifiedImageContainer + '\n        ' + p2;
    });
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      console.log(`Updated ${file}`);
    }
  }
}
