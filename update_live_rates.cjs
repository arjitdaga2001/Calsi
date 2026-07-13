const fs = require('fs');
const cheerio = require('cheerio');

const FILE_PATH = 'src/constants/financialRates.js';

async function fetchHTML(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      }
    });
    if (!res.ok) return null;
    return await res.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
}

async function scrapeRates() {
  console.log('Starting live rate fetch...');
  
  let newPPF = null;
  let newEPF = null;

  // 1. Scrape PPF Rate (Example source: Cleartax or BankBazaar)
  const ppfHtml = await fetchHTML('https://cleartax.in/s/ppf');
  if (ppfHtml) {
    const $ = cheerio.load(ppfHtml);
    // Usually, the rate is mentioned as "7.1%" in the content
    const text = $('body').text();
    const ppfMatch = text.match(/PPF interest rate.*?(\d\.\d+)%/i) || text.match(/interest rate of (\d\.\d+)%/i);
    if (ppfMatch) {
      const rate = parseFloat(ppfMatch[1]);
      if (rate >= 6.0 && rate <= 9.0) newPPF = rate;
    }
  }

  // 2. Scrape EPF Rate
  const epfHtml = await fetchHTML('https://cleartax.in/s/epf-interest-rate');
  if (epfHtml) {
    const $ = cheerio.load(epfHtml);
    const text = $('body').text();
    const epfMatch = text.match(/EPF interest rate is (\d\.\d+)/i) || text.match(/rate of (\d\.\d+)/i);
    if (epfMatch) {
      const rate = parseFloat(epfMatch[1]);
      if (rate >= 7.0 && rate <= 9.5) newEPF = rate;
    }
  }

  // Read current file
  let content = fs.readFileSync(FILE_PATH, 'utf8');
  let updated = false;

  if (newPPF) {
    content = content.replace(/(PPF:\s*)([0-9.]+)/, `$1${newPPF}`);
    console.log(`✅ Extracted live PPF rate: ${newPPF}%`);
    updated = true;
  } else {
    console.log('⚠️ Could not extract live PPF rate. Keeping existing.');
  }

  if (newEPF) {
    content = content.replace(/(EPF:\s*)([0-9.]+)/, `$1${newEPF}`);
    console.log(`✅ Extracted live EPF rate: ${newEPF}%`);
    updated = true;
  } else {
    console.log('⚠️ Could not extract live EPF rate. Keeping existing.');
  }

  if (updated) {
    fs.writeFileSync(FILE_PATH, content);
    console.log('Successfully updated financialRates.js with live data.');
  } else {
    console.log('No updates were made to financialRates.js.');
  }
}

scrapeRates();
