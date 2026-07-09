const fs = require('fs');

// Fix Home.jsx
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
home = home.replace(
  `<img src="/logo.png" alt="CALSI.IN" style={{ height: '32px' }} />`,
  `<img src="/logo.png" alt="CALSI.IN" width="32" height="32" />`
);
fs.writeFileSync('src/pages/Home.jsx', home);

// Fix CreditCardReview.jsx
let ccr = fs.readFileSync('src/pages/CreditCardReview.jsx', 'utf8');
ccr = ccr.replace(
  `<img src={card.image} alt={card.name} className="ccr-hero-image" loading="lazy" />`,
  `<img src={card.image} alt={card.name} className="ccr-hero-image" loading="lazy" width="280" height="176" />`
);
fs.writeFileSync('src/pages/CreditCardReview.jsx', ccr);

// Fix AffiliateWidget.jsx
let widget = fs.readFileSync('src/components/AffiliateWidget.jsx', 'utf8');
widget = widget.replace(
  `src={widget.ctaImage} 
                  alt={widget.ctaTitle}
                  loading="lazy"`,
  `src={widget.ctaImage} 
                  alt={widget.ctaTitle}
                  loading="lazy"
                  width="300"
                  height="200"`
);
fs.writeFileSync('src/components/AffiliateWidget.jsx', widget);

console.log('Fixed Image explicit widths and heights!');
