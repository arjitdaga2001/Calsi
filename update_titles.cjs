const fs = require('fs');

function updateFile(file, oldTitle, newMetaTitle, newMetaDesc, oldH1, oldP, newH1, newP) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace metadata
    const metaRegex = new RegExp(`useDocumentMetadata\\(\\s*['"\`].*?['"\`]\\s*,\\s*['"\`].*?['"\`]\\s*\\);`, 's');
    content = content.replace(metaRegex, `useDocumentMetadata(\n    '${newMetaTitle}',\n    '${newMetaDesc}'\n  );`);
    
    // Replace H1 and P
    content = content.replace(new RegExp(`<h1 className="calc-title">.*?</h1>`, 's'), `<h1 className="calc-title">${newH1}</h1>`);
    content = content.replace(new RegExp(`<p className="calc-subtitle">.*?</p>`, 's'), `<p className="calc-subtitle">${newP}</p>`);
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
}

updateFile('src/pages/RDCalculator.jsx', 
  '', 
  'RD Calculator 2026: Calculate Recurring Deposit Interest in India', 
  'Calculate your monthly Recurring Deposit maturity value and interest. Compare RD rates from SBI, Post Office, HDFC, and ICICI Bank.',
  '', '', 
  'RD Calculator 2026', 
  'Calculate your monthly Recurring Deposit maturity value and interest'
);

updateFile('src/pages/PPFCalculator.jsx', 
  '', 
  'PPF Calculator 2026: Check Public Provident Fund Maturity Value', 
  'Calculate tax-free returns and maturity amount for your PPF account. Check latest PPF interest rates and plan your retirement savings in India.',
  '', '', 
  'PPF Calculator 2026', 
  'Calculate tax-free returns and maturity amount for your PPF account'
);

updateFile('src/pages/EPFCalculator.jsx', 
  '', 
  'EPF Calculator 2026: Estimate PF Balance at Retirement', 
  'Calculate your Employee Provident Fund balance and employer contributions. Plan your retirement corpus with the latest EPF interest rates in India.',
  '', '', 
  'EPF Calculator 2026', 
  'Calculate your Employee Provident Fund balance and employer contributions'
);
