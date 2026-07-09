const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content');

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('Content.jsx'));

for (const file of files) {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove import { useSchema } from '../hooks/useDocumentMetadata';
  content = content.replace(/import\s*{\s*useSchema\s*}\s*from\s*['"]\.\.\/hooks\/useDocumentMetadata['"];?\n?/g, '');
  
  // Also remove useSchema if it's imported alongside others, e.g. import { useDocumentMetadata, useSchema }
  content = content.replace(/,\s*useSchema\s*/g, '');
  content = content.replace(/useSchema\s*,\s*/g, '');

  // Remove the schema constant definition (e.g., const SIP_SCHEMA = { ... };)
  // This is a bit tricky with regex for nested objects, so we'll look for useSchema(...) calls and just remove the call.
  // The unused constant will just be minified away, but ideally we'd remove it. Let's just remove the useSchema call.
  content = content.replace(/useSchema\([^)]+\);?/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
