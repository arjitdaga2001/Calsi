const fs = require('fs');
const path = require('path');
const dir = 'e:/calculator app/src/content';
let changed = 0;
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Fix blue box
    content = content.replace(
      /style=\{\{ background: 'rgba\(59, 130, 246, 0\.1\)', borderLeft: '4px solid var\(--accent-blue\)', padding: '16px', marginBottom: '24px', borderRadius: '4px' \}\}/g,
      "style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--accent-blue)', padding: '16px', margin: '0 auto 24px auto', borderRadius: '4px', maxWidth: '1100px', width: '100%', boxSizing: 'border-box' }}"
    );
    
    // Fix ul bullet points padding
    content = content.replace(
      /<ul style=\{\{ fontSize: '14px', color: 'var\(--text-secondary\)' \}\}>/g,
      "<ul style={{ fontSize: '14px', color: 'var(--text-secondary)', paddingLeft: '24px' }}>"
    );
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      changed++;
    }
  }
});
console.log('Fixed ' + changed + ' content files.');
