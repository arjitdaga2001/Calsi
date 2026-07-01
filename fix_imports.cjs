const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if RelatedCalculators is used in the JSX
  if (content.includes('<RelatedCalculators')) {
    // Check if it is imported
    if (!content.includes("import { RelatedCalculators }")) {
      // Find the last import statement
      const importRegex = /import .* from .*\n/g;
      let lastIndex = 0;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        lastIndex = match.index + match[0].length;
      }
      
      const importStatement = "import { RelatedCalculators } from '../components/RelatedCalculators';\n";
      
      if (lastIndex > 0) {
        content = content.substring(0, lastIndex) + importStatement + content.substring(lastIndex);
      } else {
        content = importStatement + content;
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed missing import in ${file}`);
    }
  }
});
console.log('All missing imports fixed.');
