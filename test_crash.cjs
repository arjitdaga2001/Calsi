const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Listen for console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE EXCEPTION:', err.toString());
  });

  console.log('Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  
  console.log('Clicking SIP Calculator...');
  await page.click('a[href="/calculators/sip-calculator"]');
  await new Promise(r => setTimeout(r, 1000));
  
  console.log('Clicking Lumpsum Calculator...');
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    const lumpsumLink = links.find(l => l.href.includes('/calculators/lumpsum-calculator'));
    if (lumpsumLink) lumpsumLink.click();
  });
  
  await new Promise(r => setTimeout(r, 2000));
  
  console.log('Test complete.');
  await browser.close();
})();
