const fs = require('fs');

const files = [
  { file: 'HomeLoanCalculator.jsx', comp: 'HomeLoanContent' },
  { file: 'IncomeTaxCalculator.jsx', comp: 'IncomeTaxContent' },
  { file: 'CarLoanCalculator.jsx', comp: 'CarLoanContent' },
  { file: 'PersonalLoanCalculator.jsx', comp: 'PersonalLoanContent' },
  { file: 'BikeLoanCalculator.jsx', comp: 'BikeLoanContent' },
  { file: 'CreditCardEMICalculator.jsx', comp: 'CreditCardEMIContent' },
  { file: 'NPSCalculator.jsx', comp: 'NPSContent' },
  { file: 'RetirementCalculator.jsx', comp: 'RetirementContent' },
  { file: 'TermInsuranceCalculator.jsx', comp: 'TermInsuranceContent' },
  { file: 'HealthInsuranceCalculator.jsx', comp: 'HealthInsuranceContent' },
  { file: 'LTCGCalculator.jsx', comp: 'LTCGContent' },
  { file: 'InflationCalculator.jsx', comp: 'InflationContent' },
  { file: 'ULIPCalculator.jsx', comp: 'ULIPContent' }
];

files.forEach(({file, comp}) => {
  const p = 'src/pages/' + file;
  if (!fs.existsSync(p)) return;
  
  let code = fs.readFileSync(p, 'utf8');

  if (!code.includes(comp)) {
    code = code.replace(/import \{ useDocumentMetadata \}.*?;/, match => match + '\nimport { ' + comp + ' } from \'../content/' + comp + '\';');
  }

  if (code.includes('<section className="calc-faq"')) {
    code = code.replace(/<section className="calc-faq"[\s\S]*?<\/section>/, '<' + comp + ' />');
  } else {
    code = code.replace(/(<\/div>\s*<\/div>\s*);\s*\n}/, '  <' + comp + ' />\n    $1');
  }

  fs.writeFileSync(p, code);
  console.log('Updated ' + file);
});
