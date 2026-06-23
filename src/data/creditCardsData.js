/**
 * Credit Cards Data — Single Source of Truth
 * Update card details here and the website will automatically reflect all changes
 * on both the widget table AND the individual review pages.
 */

export const CREDIT_CARDS_DATA = [
  {
    slug: 'sbi-cashback-credit-card',
    name: 'SBI Cashback Credit Card',
    bank: 'State Bank of India',
    affiliateKey: 'sbiCashback',
    cardColor: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #0d47a1 100%)',
    accentColor: '#FFD700',
    image: '/cards/sbi-cashback-credit-card.png',
    tagline: 'India\'s Most Popular Cashback Card',
    description: 'The SBI Cashback Credit Card is the go-to card for every online shopper in India. With a flat 5% cashback on all online transactions—regardless of the merchant—this card saves you thousands every year without any complicated reward point calculations.',
    ctaDescription: 'Join millions of Indians saving up to ₹48,000 per year. Apply now and start earning 5% back on every rupee you spend online — no merchant restrictions.',
    highlights: [
      { icon: '💰', title: '5% Online Cashback', desc: 'On every online transaction, all websites & apps' },
      { icon: '🛒', title: 'No Merchant Restriction', desc: 'Works on Amazon, Flipkart, Swiggy, Zomato & more' },
      { icon: '⛽', title: 'Fuel Surcharge Waiver', desc: '1% waiver on transactions between ₹500 – ₹3,000' },
      { icon: '🔄', title: 'Auto Cashback Credit', desc: 'Credited within 2 working days of statement generation' }
    ],
    fees: {
      joining: '₹999 + GST',
      annual: '₹999 + GST',
      annualWaiver: 'Waived on ₹2,00,000 annual spend',
      fuelSurchargeWaiver: 'Capped at ₹100 per statement cycle'
    },
    rewards: [
      { category: 'All Online Spends', rate: '5% Cashback', cap: '₹4,000/month combined' },
      { category: 'All Offline Spends', rate: '1% Cashback', cap: '₹4,000/month combined' },
      { category: 'Fuel Transactions', rate: '1% Surcharge Waiver', cap: '₹100/statement' },
      { category: 'Wallet Loads / EMI', rate: '0% Cashback', cap: 'Not Applicable' }
    ],
    eligibility: {
      age: '21 to 65 years',
      employment: 'Salaried or Self-Employed',
      income: '₹30,000/month',
      creditScore: '650+',
      newToCredit: 'Allowed only for salaried applicants'
    },
    documents: [
      'PAN Card / Form 60',
      'Aadhaar Card / Passport / Utility Bills (Address Proof)',
      'Bank Statements or Salary Slips (Income Proof)',
      'Recent Passport-Sized Photograph'
    ],
    prosAndCons: {
      pros: [
        'No merchant restrictions — 5% works everywhere online',
        'Low annual fee of just ₹999 (waived on ₹2L spend)',
        'Cashback auto-credited — no redemption hassle',
        'Backed by SBI — India\'s most trusted bank'
      ],
      cons: [
        'Cashback capped at ₹4,000/month (₹48,000/year)',
        'No lounge access benefits',
        'Existing SBI cardholders are not eligible'
      ]
    },
    tcNotes: [
      'A minimum transaction of ₹100 within 30 days is mandatory to activate your card.',
      'VKYC done over 50km from your Aadhaar/communication address will result in rejection.',
      'Profit confirmation timeline: Within 75 Days of Card Activation.'
    ]
  },
  {
    slug: 'axis-flipkart-credit-card',
    name: 'Axis Flipkart Credit Card',
    bank: 'Axis Bank',
    affiliateKey: 'axisFlipkart',
    cardColor: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 50%, #e65100 100%)',
    accentColor: '#FFFFFF',
    image: '/cards/axis-flipkart-credit-card.png',
    tagline: 'Best Co-Branded Card for Online Shoppers',
    description: 'The Axis Bank Flipkart Credit Card is designed for avid shoppers who love Flipkart, Swiggy, Uber and more. With the highest cashback rates on preferred partners and unlimited 1.5% on everything else, this card pays for itself almost instantly.',
    ctaDescription: 'Get 5% cashback on Flipkart & Cleartrip and 4% on Swiggy, Uber, PVR, and more. Apply today and start saving on every swipe!',
    highlights: [
      { icon: '🛍️', title: '5% on Flipkart', desc: 'Unlimited 5% cashback on Flipkart & Cleartrip' },
      { icon: '🍔', title: '4% on Partners', desc: '4% back on Swiggy, Uber, PVR & Cure.fit' },
      { icon: '💳', title: '1.5% Unlimited', desc: 'On all other spending categories' },
      { icon: '✈️', title: 'Lounge Access', desc: '4 complimentary domestic airport lounge visits/year' }
    ],
    fees: {
      joining: '₹500 + GST',
      annual: '₹500 + GST',
      annualWaiver: 'Waived on ₹3,50,000 annual spend',
      fuelSurchargeWaiver: '1% fuel surcharge waiver'
    },
    rewards: [
      { category: 'Flipkart & Cleartrip', rate: '5% Unlimited Cashback', cap: 'No Cap' },
      { category: 'Swiggy, Uber, PVR, Cure.fit', rate: '4% Cashback', cap: 'No Cap' },
      { category: 'All Other Categories', rate: '1.5% Unlimited Cashback', cap: 'No Cap' },
      { category: 'Fuel Transactions', rate: '1% Surcharge Waiver', cap: '₹400/month' }
    ],
    eligibility: {
      age: '18 to 70 years',
      employment: 'Salaried or Self-Employed',
      income: '₹15,000/month',
      creditScore: '700+',
      newToCredit: 'Allowed'
    },
    documents: [
      'PAN Card / Form 60',
      'Aadhaar Card / Passport / Utility Bills (Address Proof)',
      'Bank Statements or Salary Slips (Income Proof)',
      'Recent Passport-Sized Photograph'
    ],
    prosAndCons: {
      pros: [
        'Very low annual fee of just ₹500',
        'No cap on cashback for most categories',
        '4 complimentary lounge visits per year',
        'Suitable for students (lower income requirement)'
      ],
      cons: [
        'Best value only if you shop on Flipkart regularly',
        'Lounge access requires minimum spend'
      ]
    },
    tcNotes: [
      'Cashback is credited as per statement cycle.',
      'Lounge access terms subject to Axis Bank policy.',
      'A minimum transaction of ₹100 within 30 days is required for activation.'
    ]
  },
  {
    slug: 'hdfc-millennia-credit-card',
    name: 'HDFC Millennia Credit Card',
    bank: 'HDFC Bank',
    affiliateKey: 'hdfcMillennia',
    cardColor: 'linear-gradient(135deg, #b06ab3 0%, #4568dc 100%)',
    accentColor: '#FFFFFF',
    image: '/cards/hdfc-millennia-credit-card.png',
    tagline: 'Built for Online Shoppers, Foodies & Travellers',
    description: 'The HDFC Millennia Credit Card is the quintessential millennial credit card. Earn massive 5% CashPoints on popular platforms like Amazon, BookMyShow, Myntra, Swiggy, Zomato and Uber — covering every aspect of your lifestyle.',
    ctaDescription: 'Earn 5% cashback on Amazon, Flipkart, Myntra, Swiggy, Zomato & BookMyShow. Get 1000 welcome CashPoints on joining. Apply now!',
    highlights: [
      { icon: '🛍️', title: '5% on Top Apps', desc: 'Amazon, Myntra, Swiggy, Zomato, BookMyShow & more' },
      { icon: '🎁', title: '1000 Welcome Points', desc: 'On payment of joining fee' },
      { icon: '💳', title: '1% on All Else', desc: 'On all other spends except fuel' },
      { icon: '✈️', title: 'Lounge Access', desc: '8 complimentary domestic lounge visits/year' }
    ],
    fees: {
      joining: '₹1,000 + GST',
      annual: '₹1,000 + GST',
      annualWaiver: 'Waived on ₹1,00,000 annual spend',
      fuelSurchargeWaiver: '1% fuel surcharge waiver'
    },
    rewards: [
      { category: 'Amazon, BookMyShow, Flipkart, Myntra, Sony LIV, Swiggy, Tata CLiQ, Uber, Zomato', rate: '5% CashPoints', cap: '₹1,000/quarter per merchant' },
      { category: 'All Other Online Spends', rate: '1% CashPoints', cap: 'No Cap' },
      { category: 'All Offline Spends', rate: '1% CashPoints', cap: 'No Cap' },
      { category: 'Fuel', rate: '1% Surcharge Waiver', cap: 'Applicable' }
    ],
    eligibility: {
      age: '21 to 40 years',
      employment: 'Salaried or Self-Employed',
      income: '₹35,000/month',
      creditScore: '700+',
      newToCredit: 'Not recommended'
    },
    documents: [
      'PAN Card / Form 60',
      'Aadhaar Card / Passport / Utility Bills (Address Proof)',
      'Bank Statements or Salary Slips (Income Proof)',
      'Recent Passport-Sized Photograph'
    ],
    prosAndCons: {
      pros: [
        'Covers virtually every popular app/platform in India',
        '8 domestic lounge visits per year',
        'CashPoints never expire',
        'Backed by HDFC — most trusted private bank in India'
      ],
      cons: [
        '5% cashback capped at ₹1,000 per merchant per quarter',
        'Annual fee waiver requires ₹1L spend'
      ]
    },
    tcNotes: [
      '1,000 CashPoints credited on payment of joining fee.',
      '5% CashPoints on partner merchants, capped at 1,000 CashPoints per merchant per quarter.',
      'CashPoints can be redeemed for cashback, flight/hotel bookings, or gifts.'
    ]
  },
  {
    slug: 'au-lit-credit-card',
    name: 'AU LIT Credit Card',
    bank: 'AU Small Finance Bank',
    affiliateKey: 'auLit',
    cardColor: 'linear-gradient(135deg, #00b4db 0%, #0083b0 100%)',
    accentColor: '#FFFFFF',
    image: '/cards/au-lit-credit-card.png',
    tagline: 'India\'s 1st Fully Customizable Lifetime Free Card',
    description: 'The AU LIT Credit Card is a revolutionary concept in Indian banking. It\'s a lifetime free card that lets you choose and activate only the features you need — pay for lounge access only when you travel, activate higher reward rates only when you\'re shopping. Total control, zero waste.',
    ctaDescription: 'Pay ₹0 forever. Activate features like lounge access, 5X rewards, and milestone cashback only when you need them. The most flexible credit card in India.',
    highlights: [
      { icon: '🆓', title: 'Lifetime Free', desc: 'Zero joining fee, zero annual fee. Forever.' },
      { icon: '🔧', title: 'Customizable Features', desc: 'Toggle rewards, lounge & cashback on/off via app' },
      { icon: '✈️', title: 'Toggle Lounge Access', desc: 'Activate airport lounge only for months you travel' },
      { icon: '🎯', title: 'Milestone Cashback', desc: '2% to 5% cashback on achieving spend milestones' }
    ],
    fees: {
      joining: '₹0 (Lifetime Free)',
      annual: '₹0 (Lifetime Free)',
      annualWaiver: 'Not required — always free',
      fuelSurchargeWaiver: 'Applicable'
    },
    rewards: [
      { category: 'Standard Online Transactions', rate: '5X Reward Points (Feature Toggle)', cap: 'Toggle fee applies' },
      { category: 'Standard Offline Transactions', rate: '10X Reward Points (Feature Toggle)', cap: 'Toggle fee applies' },
      { category: 'Milestone Spend (₹50,000/month)', rate: '2% - 5% Cashback', cap: 'As per milestone tier' },
      { category: 'Lounge Access Feature', rate: 'Domestic & International', cap: 'Activate monthly' }
    ],
    eligibility: {
      age: '21 to 60 years',
      employment: 'Salaried or Self-Employed',
      income: '₹25,000/month',
      creditScore: '700+',
      newToCredit: 'Allowed with conditions'
    },
    documents: [
      'PAN Card / Form 60',
      'Aadhaar Card / Passport / Utility Bills (Address Proof)',
      'Bank Statements or Salary Slips (Income Proof)',
      'Recent Passport-Sized Photograph'
    ],
    prosAndCons: {
      pros: [
        'Truly lifetime free — no hidden charges',
        'Unique customizable feature concept',
        'Activate only what you need, save on unused fees',
        'Rewards points never expire'
      ],
      cons: [
        'Premium features require a small toggle fee',
        'Rewards program can be complex to understand initially'
      ]
    },
    tcNotes: [
      'Feature toggling activates additional charges for that billing cycle only.',
      'Milestone cashback calculated on total retail spends per statement cycle.',
      'Lounge access available only when the lounge feature is activated.'
    ]
  },
  {
    slug: 'indusind-tiger-credit-card',
    name: 'IndusInd Tiger Credit Card',
    bank: 'IndusInd Bank',
    affiliateKey: 'indusIndTiger',
    cardColor: 'linear-gradient(135deg, #0f0f0f 0%, #2d1a00 50%, #4a2800 100%)',
    accentColor: '#FF6B00',
    image: '/cards/indusind-tiger-credit-card.png',
    tagline: 'Lifetime Free Card with Premium Travel Benefits',
    description: 'The IndusInd Tiger Credit Card is perfect for someone who wants premium lifestyle benefits like airport lounge access without ever paying an annual fee. It\'s one of the few lifetime free cards in India that gives you complimentary lounge visits every quarter.',
    ctaDescription: 'Get complimentary airport lounge access, up to 6X reward points, and 1% fuel surcharge waiver — all for a grand total of ₹0/year. Apply now!',
    highlights: [
      { icon: '🆓', title: 'Lifetime Free', desc: 'No joining fee, no annual fee — ever' },
      { icon: '✈️', title: '2 Lounge Visits/Quarter', desc: 'Complimentary domestic airport lounge access' },
      { icon: '🏆', title: 'Up to 6X Reward Points', desc: 'On specific spending categories' },
      { icon: '⛽', title: 'Fuel Surcharge Waiver', desc: '1% waiver at all petrol pumps in India' }
    ],
    fees: {
      joining: '₹0 (Lifetime Free)',
      annual: '₹0 (Lifetime Free)',
      annualWaiver: 'Not required — always free',
      fuelSurchargeWaiver: '1% at all fuel stations'
    },
    rewards: [
      { category: 'Entertainment & Dining', rate: '6X Reward Points', cap: 'Category-specific' },
      { category: 'Online Transactions', rate: '3X Reward Points', cap: 'No Cap' },
      { category: 'Offline Transactions', rate: '1X Reward Points', cap: 'No Cap' },
      { category: 'Fuel Transactions', rate: '1% Surcharge Waiver', cap: 'Per transaction limit' }
    ],
    eligibility: {
      age: '21 to 65 years',
      employment: 'Salaried or Self-Employed',
      income: '₹25,000/month',
      creditScore: '700+',
      newToCredit: 'Allowed'
    },
    documents: [
      'PAN Card / Form 60',
      'Aadhaar Card / Passport / Utility Bills (Address Proof)',
      'Bank Statements or Salary Slips (Income Proof)',
      'Recent Passport-Sized Photograph'
    ],
    prosAndCons: {
      pros: [
        'Completely free — no annual fee forever',
        '2 lounge visits per quarter (8 per year)',
        'Great starter premium card for young professionals',
        'Easy eligibility — ₹25,000/month income'
      ],
      cons: [
        'Reward point value is lower than premium cards',
        'No international lounge access'
      ]
    },
    tcNotes: [
      '2 complimentary domestic lounge visits per calendar quarter.',
      'Lounge access is via the Visa/Mastercard lounge program at select airports.',
      'Reward points valid for 2 years from date of accumulation.'
    ]
  },
  {
    slug: 'axis-magnus-credit-card',
    name: 'Axis Magnus Credit Card',
    bank: 'Axis Bank',
    affiliateKey: 'axisMagnus',
    cardColor: 'linear-gradient(135deg, #1a0533 0%, #4a0e8f 50%, #2d0a6b 100%)',
    accentColor: '#FFD700',
    image: '/cards/axis-magnus-credit-card.png',
    tagline: 'India\'s Most Rewarding Premium Travel Card',
    description: 'The Axis Magnus Credit Card is the pinnacle of Indian premium credit cards. Designed for high-income travelers and foodies, it offers massive EDGE reward multipliers, unlimited international lounge access via Priority Pass, and a ₹12,500 welcome voucher that completely offsets the joining fee.',
    ctaDescription: 'Get a ₹12,500 travel voucher as a welcome gift (choose Luxe, Postcard Hotels, or Yatra). Unlimited international lounge access. 35X EDGE points on high spends. This card pays for itself.',
    highlights: [
      { icon: '🎁', title: '₹12,500 Welcome Voucher', desc: 'Choose Luxe / Postcard Hotels / Yatra on joining' },
      { icon: '✈️', title: 'Unlimited Intl. Lounge', desc: 'Priority Pass — access 1,400+ lounges worldwide' },
      { icon: '🏆', title: '35X EDGE Points', desc: 'On spends above ₹1.5L in a month' },
      { icon: '🍽️', title: '30% off Dining', desc: 'At 4,000+ restaurants via Axis Dining Delights' }
    ],
    fees: {
      joining: '₹12,500 + GST',
      annual: '₹12,500 + GST',
      annualWaiver: 'Waived on ₹25,00,000 annual spend',
      fuelSurchargeWaiver: 'Not a primary benefit'
    },
    rewards: [
      { category: 'Spends up to ₹1.5L/month', rate: '12 EDGE Points per ₹200', cap: 'Monthly limit: ₹1.5L' },
      { category: 'Incremental spends above ₹1.5L', rate: '35 EDGE Points per ₹200', cap: 'No cap' },
      { category: 'Axis Travel Portal Bookings', rate: 'Up to 5X Bonus Points', cap: 'Category-specific' },
      { category: 'Miles Transfer (Regular)', rate: '5 EDGE = 2 Partner Miles', cap: 'Transfer caps apply' }
    ],
    eligibility: {
      age: '21 to 65 years',
      employment: 'Salaried or Self-Employed',
      income: '₹1,50,000/month (or ITR > ₹18L/year)',
      creditScore: '736+',
      newToCredit: 'Not Allowed'
    },
    documents: [
      'PAN Card / Form 60',
      'Aadhaar Card / Passport / Utility Bills (Address Proof)',
      'Bank Statements or Salary Slips (Income Proof)',
      'Recent Passport-Sized Photograph'
    ],
    prosAndCons: {
      pros: [
        '₹12,500 welcome voucher offsets the first-year fee completely',
        'Unlimited Priority Pass international lounge access',
        'Best EDGE points multiplier for high spenders',
        '30% dining discount at 4,000+ premium restaurants'
      ],
      cons: [
        'Very high annual fee of ₹12,500',
        'Requires ₹1.5L/month income — not for everyone',
        'Domestic lounge requires ₹50,000 spend in previous 3 months',
        'VKYC within 50km of address is mandatory'
      ]
    },
    tcNotes: [
      'Welcome voucher credited within 30 days of joining fee payment.',
      'Domestic lounge access requires ₹50,000+ spends in the preceding 3 calendar months.',
      'A minimum transaction of ₹100 within 30 days is mandatory to activate the card.',
      'VKYC done over 50km from your Aadhaar/communication address results in rejection.'
    ]
  }
];
