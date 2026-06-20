import { TAX_CONFIG, GOVT_RATES } from '../constants/financialRates';

// Financial Math Functions

export const calculateSIP = (monthlyInvestment, expectedReturnRate, timePeriodYears) => {
  const r = (expectedReturnRate / 100) / 12; // monthly rate
  const n = timePeriodYears * 12; // number of months
  const P = monthlyInvestment; // periodic investment
  
  const investedAmount = P * n;
  let FV = investedAmount; // Future Value
  
  if (r !== 0) {
    // Formula: FV = P * {[(1 + r)^n - 1] / r} * (1 + r) (Annuity Due)
    FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  }
  
  const estimatedReturns = FV - investedAmount;
  
  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(FV)
  };
};

export const calculateLumpsum = (totalInvestment, expectedReturnRate, timePeriodYears) => {
  const r = expectedReturnRate / 100;
  const totalValue = totalInvestment * Math.pow(1 + r, timePeriodYears);
  const estimatedReturns = totalValue - totalInvestment;

  return {
    investedAmount: Math.round(totalInvestment),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue)
  };
};

export const calculateEMI = (loanAmount, interestRate, tenureYears) => {
  const r = (interestRate / 100) / 12;
  const n = tenureYears * 12;
  
  let monthlyEMI;
  if (r === 0) {
    monthlyEMI = loanAmount / n;
  } else {
    monthlyEMI = loanAmount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
  }
  
  const totalAmount = monthlyEMI * n;
  const totalInterest = totalAmount - loanAmount;

  return {
    monthlyEMI: Math.round(monthlyEMI),
    principalAmount: Math.round(loanAmount),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount)
  };
};

export const calculateFD = (totalInvestment, interestRate, timePeriodYears) => {
  const r = interestRate / 100;
  const t = timePeriodYears;
  
  // Quarterly compounding: A = P(1 + r/4)^(4t)
  const totalValue = totalInvestment * Math.pow(1 + r / 4, 4 * t);
  const estimatedReturns = totalValue - totalInvestment;

  return {
    investedAmount: Math.round(totalInvestment),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue)
  };
};

export const calculateSWP = (totalInvestment, withdrawalPerMonth, expectedReturnRate, timePeriodYears, withdrawalTiming = 'end') => {
  const r = (expectedReturnRate / 100) / 12;
  const n = timePeriodYears * 12;
  const P = totalInvestment;
  const W = withdrawalPerMonth;

  const totalWithdrawn = W * n;

  let finalValue;
  if (r === 0) {
    finalValue = P - totalWithdrawn;
  } else if (withdrawalTiming === 'end') {
    // Ordinary annuity — withdrawal at END of each month
    // FV = P(1+r)^n  -  W × [((1+r)^n - 1) / r]
    finalValue = (P * Math.pow(1 + r, n)) - (W * ((Math.pow(1 + r, n) - 1) / r));
  } else {
    // Annuity Due — withdrawal at BEGINNING of each month
    // Each withdrawal is taken one period earlier, so the corpus earns one less
    // period of interest for each withdrawal → multiply withdrawal factor by (1+r)
    // FV = P(1+r)^n  -  W × [((1+r)^n - 1) / r] × (1+r)
    finalValue = (P * Math.pow(1 + r, n)) - (W * ((Math.pow(1 + r, n) - 1) / r) * (1 + r));
  }

  return {
    totalInvestment: Math.round(P),
    totalWithdrawn: Math.round(totalWithdrawn),
    finalValue: Math.round(finalValue > 0 ? finalValue : 0)
  };
};

export const calculatePPF = (yearlyInvestment, timePeriodYears) => {
  const r = GOVT_RATES.PPF / 100;
  const n = timePeriodYears;
  const P = yearlyInvestment;
  
  const investedAmount = P * n;
  // Future Value of Annuity Due (invested at start of year)
  const totalValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const estimatedReturns = totalValue - investedAmount;

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue)
  };
};

export const calculateSSY = (yearlyInvestment, girlsAge) => {
  const r = GOVT_RATES.SSY / 100;
  const INVESTMENT_YEARS = 15; // Deposits made for first 15 years from account opening
  const ACCOUNT_TERM    = 21; // Account matures 21 years from opening (fixed by scheme)
  const PASSIVE_YEARS   = ACCOUNT_TERM - INVESTMENT_YEARS; // Always 6 years of passive growth

  const investedAmount = yearlyInvestment * INVESTMENT_YEARS;

  const yearlyData = [];
  let balance = 0;

  // Phase 1: 15 years of active investment
  // SSY credits interest annually on (opening balance + deposit made that year)
  for (let yr = 1; yr <= INVESTMENT_YEARS; yr++) {
    const opening  = balance;
    const deposit  = yearlyInvestment;
    const interest = (opening + deposit) * r;
    balance = opening + deposit + interest;

    yearlyData.push({
      year: yr,
      age: girlsAge + yr,
      deposit: Math.round(deposit),
      interest: Math.round(interest),
      balance: Math.round(balance),
      phase: 'Investment',
    });
  }

  // Phase 2: 6 years of passive growth (no deposits, interest only)
  for (let yr = 1; yr <= PASSIVE_YEARS; yr++) {
    const opening  = balance;
    const interest = opening * r;
    balance = opening + interest;

    yearlyData.push({
      year: INVESTMENT_YEARS + yr,
      age: girlsAge + INVESTMENT_YEARS + yr,
      deposit: 0,
      interest: Math.round(interest),
      balance: Math.round(balance),
      phase: 'Passive',
    });
  }

  const estimatedReturns = balance - investedAmount;

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(balance),
    yearlyData,
  };
};

export const calculateEPF = (
  monthlyBasicSalary,
  currentAge,
  employeeContributionPercent,
  annualIncreasePercent,
  retirementAge = 58,
  expectedInterestRate = GOVT_RATES.EPF
) => {
  const r = expectedInterestRate / 100;
  const increaseRate = annualIncreasePercent / 100;
  const years = retirementAge - currentAge;
  
  let balance = 0;
  let totalEmployeeInvested = 0;
  let totalEmployerInvested = 0;
  let currentMonthlySalary = monthlyBasicSalary;
  
  const yearlyData = [];
  
  for (let year = 1; year <= years; year++) {
    let yearlyInterest = 0;
    let yearlyEmployeeContrib = 0;
    let yearlyEmployerContrib = 0;
    
    for (let month = 1; month <= 12; month++) {
      // 1. Employee contribution (user-defined %, e.g., 12% to 20%)
      const employeeContrib = currentMonthlySalary * (employeeContributionPercent / 100);
      
      // 2. Employer contribution (12% of basic salary matched, with EPS capping)
      // 8.33% goes to EPS, capped at 1250.
      const employerTotal = currentMonthlySalary * 0.12;
      const epsContrib = Math.min(currentMonthlySalary * 0.0833, 1250);
      const employerContrib = employerTotal - epsContrib;
      
      const monthlyTotalEPF = employeeContrib + employerContrib;
      
      yearlyEmployeeContrib += employeeContrib;
      yearlyEmployerContrib += employerContrib;
      totalEmployeeInvested += employeeContrib;
      totalEmployerInvested += employerContrib;
      
      // Interest is calculated on the OPENING balance of the month
      const monthlyInterest = balance * (r / 12);
      yearlyInterest += monthlyInterest;
      
      // Add the new contribution to the balance so it earns interest next month
      balance += monthlyTotalEPF;
    }
    
    // At the end of the year, accrued interest is credited to the principal
    balance += yearlyInterest;
    
    yearlyData.push({
      year,
      age: currentAge + year,
      basicSalary: Math.round(currentMonthlySalary),
      yearlyEmployeeContrib: Math.round(yearlyEmployeeContrib),
      yearlyEmployerContrib: Math.round(yearlyEmployerContrib),
      yearlyContribution: Math.round(yearlyEmployeeContrib + yearlyEmployerContrib),
      earnedInterest: Math.round(yearlyInterest),
      totalBalance: Math.round(balance)
    });
    
    // Salary increment applied for the next year
    currentMonthlySalary *= (1 + increaseRate);
  }
  
  const totalInvested = totalEmployeeInvested + totalEmployerInvested;
  const estimatedReturns = balance - totalInvested;
  
  return {
    totalEmployeeContribution: Math.round(totalEmployeeInvested),
    totalEmployerContribution: Math.round(totalEmployerInvested),
    totalInterest: Math.round(estimatedReturns),
    totalMaturity: Math.round(balance),
    yearlyData
  };
};

export const calculateRD = (monthlyDeposit, interestRate, timePeriodMonths) => {
  // Standard RD formula used by Indian banks (RBI prescribed):
  // M = R × [(1 + i)^n – 1] / [1 – (1 + i)^(-1/3)]
  // where:
  //   R = monthly deposit
  //   i = quarterly interest rate = annualRate / 4 / 100
  //   n = number of quarters = months / 3

  const investedAmount = monthlyDeposit * timePeriodMonths;
  const i = interestRate / 4 / 100; // quarterly interest rate
  const n = timePeriodMonths / 3;   // total quarters

  const totalValue = monthlyDeposit * (Math.pow(1 + i, n) - 1) / (1 - Math.pow(1 + i, -1/3));
  const estimatedReturns = totalValue - investedAmount;

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue)
  };
};

export const calculateGST = (amount, gstRate, calculationType) => {
  // calculationType: 'exclusive' = add GST on top, 'inclusive' = extract GST from amount
  if (calculationType === 'exclusive') {
    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = amount + gstAmount;
    return {
      preGSTAmount: Math.round(amount * 100) / 100,
      cgst: Math.round((gstAmount / 2) * 100) / 100,
      sgst: Math.round((gstAmount / 2) * 100) / 100,
      igst: Math.round(gstAmount * 100) / 100,
      totalGST: Math.round(gstAmount * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100
    };
  } else {
    // inclusive: extract GST from given amount
    const preGSTAmount = (amount * 100) / (100 + gstRate);
    const gstAmount = amount - preGSTAmount;
    return {
      preGSTAmount: Math.round(preGSTAmount * 100) / 100,
      cgst: Math.round((gstAmount / 2) * 100) / 100,
      sgst: Math.round((gstAmount / 2) * 100) / 100,
      igst: Math.round(gstAmount * 100) / 100,
      totalGST: Math.round(gstAmount * 100) / 100,
      totalAmount: Math.round(amount * 100) / 100
    };
  }
};

// XIRR using Newton-Raphson with multiple starting points for robustness
export const calculateXIRR = (cashflows) => {
  if (!cashflows || cashflows.length < 2) return null;

  // Must have at least one negative and one positive cash flow
  const hasNeg = cashflows.some(cf => cf.amount < 0);
  const hasPos = cashflows.some(cf => cf.amount > 0);
  if (!hasNeg || !hasPos) return null;

  // Use the EARLIEST date as the base (day-0), matching Excel's XIRR
  const dates = cashflows.map(cf => new Date(cf.date).getTime());
  const baseTime = Math.min(...dates);

  // t = fractional years from base date for each cash flow
  const times = cashflows.map(cf =>
    (new Date(cf.date).getTime() - baseTime) / (1000 * 60 * 60 * 24 * 365)
  );

  // XNPV: sum of CF_i / (1 + rate)^t_i
  const xnpv = (rate) => {
    if (rate <= -1) return Infinity;
    return cashflows.reduce((sum, cf, i) => {
      return sum + cf.amount / Math.pow(1 + rate, times[i]);
    }, 0);
  };

  // Derivative of XNPV with respect to rate
  const xnpvDeriv = (rate) => {
    if (rate <= -1) return -Infinity;
    return cashflows.reduce((sum, cf, i) => {
      if (times[i] === 0) return sum;
      return sum - (times[i] * cf.amount) / Math.pow(1 + rate, times[i] + 1);
    }, 0);
  };

  // Try multiple initial guesses to avoid local-minima traps
  const guesses = [0.1, 0.5, -0.1, 1.0, 0.0001];

  for (const guess of guesses) {
    let rate = guess;
    let converged = false;

    for (let i = 0; i < 300; i++) {
      const npv   = xnpv(rate);
      const deriv = xnpvDeriv(rate);

      if (!isFinite(npv) || !isFinite(deriv) || Math.abs(deriv) < 1e-12) break;

      const newRate = rate - npv / deriv;

      // Clamp to avoid going below -100% (meaningless)
      const clamped = Math.max(newRate, -0.9999);

      if (Math.abs(clamped - rate) < 1e-10) {
        rate = clamped;
        converged = true;
        break;
      }
      rate = clamped;
    }

    if (converged && isFinite(rate) && Math.abs(xnpv(rate)) < 0.01) {
      // Round to 2 decimal places as a percentage
      return Math.round(rate * 10000) / 100;
    }
  }

  return null; // Could not converge
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};

// ─── NEW CALCULATORS ──────────────────────────────────────────────

// Generic EMI (reused for Home, Car, Personal, Bike loans)
// calculateEMI is already exported above — no duplicate needed.

// Credit Card EMI (converts outstanding into an instalment plan)
export const calculateCreditCardEMI = (outstandingBalance, interestRate, tenureMonths) => {
  const r = (interestRate / 100) / 12;
  let monthlyEMI;
  if (r === 0) {
    monthlyEMI = outstandingBalance / tenureMonths;
  } else {
    monthlyEMI = outstandingBalance * r * Math.pow(1 + r, tenureMonths) / (Math.pow(1 + r, tenureMonths) - 1);
  }
  const totalAmount = monthlyEMI * tenureMonths;
  const totalInterest = totalAmount - outstandingBalance;
  return {
    monthlyEMI: Math.round(monthlyEMI),
    principalAmount: Math.round(outstandingBalance),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount)
  };
};

// NPS Calculator
export const calculateNPS = (monthlyContribution, currentAge, retirementAge, expectedReturnRate, annuityRate, annuityPercent) => {
  const years = retirementAge - currentAge;
  const r = (expectedReturnRate / 100) / 12;
  const n = years * 12;
  let corpus;
  if (r === 0) {
    corpus = monthlyContribution * n;
  } else {
    corpus = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  }
  const investedAmount = monthlyContribution * n;
  const estimatedReturns = corpus - investedAmount;
  const annuityCorpus = corpus * (annuityPercent / 100);
  const lumpsum = corpus - annuityCorpus;
  // Monthly pension estimate from annuity corpus
  const monthlyPension = (annuityCorpus * (annuityRate / 100)) / 12;
  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalCorpus: Math.round(corpus),
    lumpsum: Math.round(lumpsum),
    annuityCorpus: Math.round(annuityCorpus),
    monthlyPension: Math.round(monthlyPension)
  };
};

// Income Tax Calculator — AY 2026-27 (FY 2025-26) — Union Budget 2025
export const calculateIncomeTax = (grossIncome, regime, age, deductions) => {
  const std80CLimit = 150000;
  const std80DLimit = age >= 60 ? 50000 : 25000;

  let taxableIncome;
  let tax = 0;
  let rebate = 0;

  if (regime === 'new') {
    // New Regime: Standard deduction from TAX_CONFIG
    const standardDeduction = TAX_CONFIG.STANDARD_DEDUCTION;
    taxableIncome = Math.max(0, grossIncome - standardDeduction);

    // New regime slabs — AY 2026-27 (Budget 2025)
    const slabs = [
      { limit: 400000,  rate: 0    },
      { limit: 800000,  rate: 0.05 },
      { limit: 1200000, rate: 0.10 },
      { limit: 1600000, rate: 0.15 },
      { limit: 2000000, rate: 0.20 },
      { limit: 2400000, rate: 0.25 },
      { limit: Infinity, rate: 0.30 },
    ];
    tax = calcSlabTax(taxableIncome, slabs);

    // Section 87A rebate: full rebate if taxable income ≤ rebate limit
    if (taxableIncome <= TAX_CONFIG.NEW_REGIME_REBATE_LIMIT) rebate = tax;

  } else {
    // Old Regime — unchanged slabs
    const sec80C  = Math.min(deductions.section80C  || 0, std80CLimit);
    const sec80D  = Math.min(deductions.section80D  || 0, std80DLimit);
    const hra     = deductions.hra     || 0;
    const lta     = deductions.lta     || 0;
    const others  = deductions.otherDeductions || 0;
    const standardDeduction = 50000;

    taxableIncome = Math.max(0, grossIncome - standardDeduction - sec80C - sec80D - hra - lta - others);

    let slabs;
    if (age < 60) {
      slabs = [
        { limit: 250000,  rate: 0    },
        { limit: 500000,  rate: 0.05 },
        { limit: 1000000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 },
      ];
    } else if (age < 80) {
      slabs = [
        { limit: 300000,  rate: 0    },
        { limit: 500000,  rate: 0.05 },
        { limit: 1000000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 },
      ];
    } else {
      slabs = [
        { limit: 500000,  rate: 0    },
        { limit: 1000000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 },
      ];
    }
    tax = calcSlabTax(taxableIncome, slabs);

    // Old regime 87A rebate: ≤ ₹5L
    if (taxableIncome <= 500000) rebate = tax;
  }

  const taxAfterRebate = Math.max(0, tax - rebate);
  const surcharge = calcSurcharge(taxableIncome, taxAfterRebate);
  const cess = Math.round((taxAfterRebate + surcharge) * 0.04);
  const totalTax = taxAfterRebate + surcharge + cess;
  const takeHome = grossIncome - totalTax;

  return {
    grossIncome: Math.round(grossIncome),
    taxableIncome: Math.round(taxableIncome),
    incomeTax: Math.round(tax),
    rebate: Math.round(rebate),
    taxAfterRebate: Math.round(taxAfterRebate),
    surcharge: Math.round(surcharge),
    cess: Math.round(cess),
    totalTax: Math.round(totalTax),
    takeHome: Math.round(takeHome),
    effectiveRate: grossIncome > 0 ? +((totalTax / grossIncome) * 100).toFixed(2) : 0
  };
};

function calcSlabTax(income, slabs) {
  let tax = 0;
  let prev = 0;
  for (const slab of slabs) {
    if (income <= prev) break;
    const taxable = Math.min(income, slab.limit) - prev;
    tax += taxable * slab.rate;
    prev = slab.limit;
  }
  return Math.round(tax);
}

function calcSurcharge(taxableIncome, tax) {
  if (taxableIncome > 50000000) return Math.round(tax * 0.37);
  if (taxableIncome > 20000000) return Math.round(tax * 0.25);
  if (taxableIncome > 10000000) return Math.round(tax * 0.15);
  if (taxableIncome > 5000000)  return Math.round(tax * 0.10);
  return 0;
}

// Retirement Calculator
export const calculateRetirement = (currentAge, retirementAge, monthlyExpenses, inflationRate, returnRate, currentSavings) => {
  const yearsToRetire = retirementAge - currentAge;
  const lifeExpectancy = 85;
  const retirementYears = lifeExpectancy - retirementAge;
  const r = returnRate / 100;
  const inf = inflationRate / 100;

  // Monthly expenses at retirement (inflation-adjusted)
  const monthlyExpensesAtRetirement = monthlyExpenses * Math.pow(1 + inf, yearsToRetire);
  const annualExpensesAtRetirement = monthlyExpensesAtRetirement * 12;

  // Corpus needed at retirement (present value of annuity during retirement)
  // Using real rate of return: (1 + r) / (1 + inf) - 1
  const realRate = (1 + r) / (1 + inf) - 1;
  let corpusNeeded;
  if (Math.abs(realRate) < 0.0001) {
    corpusNeeded = annualExpensesAtRetirement * retirementYears;
  } else {
    corpusNeeded = annualExpensesAtRetirement * (1 - Math.pow(1 + realRate, -retirementYears)) / realRate;
  }

  // Current savings grown to retirement
  const currentSavingsGrown = currentSavings * Math.pow(1 + r, yearsToRetire);
  const additionalCorpusNeeded = Math.max(0, corpusNeeded - currentSavingsGrown);

  // Monthly investment required (SIP) to build additional corpus
  const rMonthly = r / 12;
  const n = yearsToRetire * 12;
  let monthlyInvestmentRequired;
  if (rMonthly === 0 || n === 0) {
    monthlyInvestmentRequired = additionalCorpusNeeded / (n || 1);
  } else {
    monthlyInvestmentRequired = additionalCorpusNeeded * rMonthly / ((Math.pow(1 + rMonthly, n) - 1) * (1 + rMonthly));
  }

  return {
    corpusNeeded: Math.round(corpusNeeded),
    currentSavingsGrown: Math.round(currentSavingsGrown),
    additionalCorpusNeeded: Math.round(additionalCorpusNeeded),
    monthlyInvestmentRequired: Math.round(monthlyInvestmentRequired),
    monthlyExpensesAtRetirement: Math.round(monthlyExpensesAtRetirement),
    yearsToRetire,
    retirementYears
  };
};

// Term Insurance Calculator (Human Life Value method)
export const calculateTermInsurance = (annualIncome, currentAge, retirementAge, inflationRate, existingCover) => {
  const yearsToRetire = retirementAge - currentAge;
  const discountRate = 0.07;
  const inf = inflationRate / 100;

  // PV of future income stream (growing annuity)
  let humanLifeValue = 0;
  for (let y = 1; y <= yearsToRetire; y++) {
    const incomeInYear = annualIncome * Math.pow(1 + inf, y);
    humanLifeValue += incomeInYear / Math.pow(1 + discountRate, y);
  }

  const recommendedCover = Math.max(0, humanLifeValue - existingCover);
  const suggestedCover = Math.ceil(recommendedCover / 1000000) * 1000000; // round up to nearest ₹10L

  return {
    humanLifeValue: Math.round(humanLifeValue),
    recommendedCover: Math.round(recommendedCover),
    suggestedCover: Math.round(suggestedCover),
    yearsToRetire
  };
};

// Health Insurance Premium Estimator
export const calculateHealthInsurance = (age, members, cityTier, existingConditions, coverAmount) => {
  // Base rates per ₹1L of cover per year (per person)
  const ageFactors = age < 25 ? 0.9 : age < 35 ? 1.0 : age < 45 ? 1.4 : age < 55 ? 2.0 : age < 65 ? 3.2 : 4.5;
  const tierFactor = cityTier === 'metro' ? 1.3 : cityTier === 'tier1' ? 1.1 : 1.0;
  const memberFactor = members === 1 ? 1 : members === 2 ? 1.7 : members <= 4 ? 2.2 : 2.8;
  const conditionFactor = existingConditions ? 1.5 : 1.0;

  const basePremiumPer1L = 350; // ₹350 per lakh of cover
  const coverInLakhs = coverAmount / 100000;
  const annualPremium = basePremiumPer1L * coverInLakhs * ageFactors * tierFactor * memberFactor * conditionFactor;
  const monthlyPremium = annualPremium / 12;
  const gst = annualPremium * 0.18;
  const totalWithGST = annualPremium + gst;

  return {
    annualPremium: Math.round(annualPremium),
    monthlyPremium: Math.round(monthlyPremium),
    gst: Math.round(gst),
    totalWithGST: Math.round(totalWithGST)
  };
};

// ULIP Calculator
export const calculateULIP = (annualPremium, policyTerm, returnRate, mortalityCharge, fundManagementCharge) => {
  const r = returnRate / 100;
  const fmc = fundManagementCharge / 100;
  const netRate = r - fmc;
  const LOCK_IN = 5;

  let corpus = 0;
  let totalInvested = 0;
  const yearlyData = [];

  for (let y = 1; y <= policyTerm; y++) {
    // First-year allocation: 70%, subsequent: 97.5% (standard ULIP structure)
    const allocationRate = y === 1 ? 0.70 : 0.975;
    const allocated = annualPremium * allocationRate;
    const mortality = annualPremium * (mortalityCharge / 100);
    const investedUnit = allocated - mortality;
    totalInvested += annualPremium;
    corpus = (corpus + investedUnit) * (1 + netRate);
    yearlyData.push({ year: y, corpus: Math.round(corpus), invested: Math.round(totalInvested) });
  }

  const estimatedReturns = corpus - totalInvested;
  const surrenderValue = corpus * (policyTerm >= LOCK_IN ? 1 : 0); // No surrender before 5 years

  return {
    investedAmount: Math.round(totalInvested),
    estimatedReturns: Math.round(estimatedReturns),
    maturityValue: Math.round(corpus),
    surrenderValue: Math.round(surrenderValue),
    yearlyData
  };
};

// LTCG / Capital Gains Tax Calculator
export const calculateLTCG = (
  assetType,
  purchasePrice,
  salePrice,
  purchaseDate,
  saleDate,
  purchaseExpenses = 0,
  sellingExpenses = 0,
  taxSlabRate = 30
) => {
  const holdingDays = Math.round((new Date(saleDate) - new Date(purchaseDate)) / (1000 * 60 * 60 * 24));
  const holdingMonths = holdingDays / 30.436875;
  const holdingYears = holdingDays / 365;

  // Holding period threshold (in months) for LTCG categorization
  let ltcgThresholdMonths = 24; // default for property/gold
  if (assetType === 'equity') {
    ltcgThresholdMonths = 12;
  } else if (assetType === 'debt') {
    // Debt mutual funds are always taxed at slab rates as STCG
    ltcgThresholdMonths = Infinity;
  }

  const isLongTerm = holdingMonths >= ltcgThresholdMonths;

  // Math:
  // Net Sale Consideration = Sale Price - Selling Expenses
  // Net Cost of Acquisition = Purchase Price + Purchase Expenses
  // Gains = Net Sale Consideration - Net Cost of Acquisition
  const netSaleConsideration = Math.max(0, salePrice - sellingExpenses);
  const netCostOfAcquisition = purchasePrice + purchaseExpenses;
  const gains = Math.max(0, netSaleConsideration - netCostOfAcquisition);

  // Cost Inflation Index (CII) tables for indexation
  const CII_TABLE = {
    2001: 100, 2002: 105, 2003: 109, 2004: 113, 2005: 117,
    2006: 122, 2007: 129, 2008: 137, 2009: 148, 2010: 167,
    2011: 184, 2012: 200, 2013: 220, 2014: 240, 2015: 254,
    2016: 264, 2017: 272, 2018: 280, 2019: 289, 2020: 301,
    2021: 317, 2022: 331, 2023: 348, 2024: 363, 2025: 380
  };

  const getFinancialYearStart = (dateStr) => {
    const d = new Date(dateStr);
    if (isNaN(d)) return 2024;
    const year = d.getFullYear();
    const month = d.getMonth();
    return month < 3 ? year - 1 : year;
  };

  const purchaseFY = getFinancialYearStart(purchaseDate);
  const saleFY = getFinancialYearStart(saleDate);

  const ciiPurchase = CII_TABLE[Math.max(2001, Math.min(2025, purchaseFY))] || 100;
  const ciiSale = CII_TABLE[Math.max(2001, Math.min(2025, saleFY))] || 363;

  const indexedCost = netCostOfAcquisition * (ciiSale / ciiPurchase);
  const indexedGains = Math.max(0, netSaleConsideration - indexedCost);

  // Exemption limit (1.25 Lakhs for equity LTCG post Budget 2024)
  const exemptionLimit = (assetType === 'equity' && isLongTerm) ? 125000 : 0;

  // Let's calculate the tax.
  let taxRate = 0;
  let tax = 0;
  let hasIndexationOption = false;

  // Real estate bought before July 23, 2024 has the indexation option (20% with indexation vs 12.5% without)
  if (assetType === 'property' && isLongTerm) {
    const cutoffDate = new Date('2024-07-23');
    const purDate = new Date(purchaseDate);
    if (purDate < cutoffDate) {
      hasIndexationOption = true;
    }
  }

  // Standard Tax calculation
  let standardTax = 0;
  let indexedTax = 0;

  if (isLongTerm) {
    if (assetType === 'equity') {
      taxRate = 0.125; // 12.5%
      tax = Math.max(0, gains - exemptionLimit) * taxRate;
    } else if (assetType === 'property') {
      if (hasIndexationOption) {
        standardTax = gains * 0.125;
        indexedTax = indexedGains * 0.20;
        // We choose the lower tax option by default
        tax = Math.min(standardTax, indexedTax);
        taxRate = tax === standardTax ? 0.125 : 0.20;
      } else {
        taxRate = 0.125;
        tax = gains * taxRate;
      }
    } else if (assetType === 'gold') {
      taxRate = 0.125;
      tax = gains * taxRate;
    }
  } else {
    // STCG
    if (assetType === 'equity') {
      taxRate = 0.20;
      tax = gains * taxRate;
    } else {
      // Property, Gold, Debt: Taxed at slab rates
      taxRate = taxSlabRate / 100;
      tax = gains * taxRate;
    }
  }

  if (assetType === 'property' && isLongTerm && hasIndexationOption) {
    // Already calculated standardTax & indexedTax
  } else {
    standardTax = tax;
  }

  // Surcharge & Cess calculation
  const surcharge = tax ? calcSurcharge(gains, tax) : 0;
  const cess = tax ? Math.round((tax + surcharge) * 0.04) : 0;
  const totalTax = tax + surcharge + cess;

  // Calculate options
  let optionStandardTotal = 0;
  let optionIndexedTotal = 0;
  if (hasIndexationOption) {
    const surchargeStd = standardTax ? calcSurcharge(gains, standardTax) : 0;
    const cessStd = Math.round((standardTax + surchargeStd) * 0.04);
    optionStandardTotal = standardTax + surchargeStd + cessStd;

    const surchargeIdx = indexedTax ? calcSurcharge(indexedGains, indexedTax) : 0;
    const cessIdx = Math.round((indexedTax + surchargeIdx) * 0.04);
    optionIndexedTotal = indexedTax + surchargeIdx + cessIdx;
  }

  return {
    netSaleConsideration: Math.round(netSaleConsideration),
    netCostOfAcquisition: Math.round(netCostOfAcquisition),
    gains: Math.round(gains),
    indexedCost: Math.round(indexedCost),
    indexedGains: Math.round(indexedGains),
    taxableGains: Math.round(Math.max(0, (hasIndexationOption && tax === indexedTax ? indexedGains : gains) - exemptionLimit)),
    tax: Math.round(tax),
    surcharge: Math.round(surcharge),
    cess: Math.round(cess),
    totalTax: Math.round(totalTax),
    isLongTerm,
    holdingMonths: +holdingMonths.toFixed(1),
    holdingYears: +holdingYears.toFixed(2),
    taxRate: +(taxRate * 100).toFixed(1),
    hasIndexationOption,
    optionStandardTax: Math.round(standardTax),
    optionStandardTotal: Math.round(optionStandardTotal),
    optionIndexedTax: Math.round(indexedTax),
    optionIndexedTotal: Math.round(optionIndexedTotal),
    chosenOption: hasIndexationOption ? (tax === indexedTax ? 'indexed' : 'standard') : null,
    ciiPurchase,
    ciiSale
  };
};

// Inflation Calculator
export const calculateInflation = (currentValue, inflationRate, years, mode) => {
  const r = inflationRate / 100;
  if (mode === 'future') {
    // How much will ₹X be worth in future?
    const futureValue = currentValue * Math.pow(1 + r, years);
    const purchasingPowerLoss = futureValue - currentValue;
    return {
      presentValue: Math.round(currentValue),
      futureValue: Math.round(futureValue),
      purchasingPowerLoss: Math.round(purchasingPowerLoss),
      effectivePurchasingPower: Math.round(currentValue / Math.pow(1 + r, years))
    };
  } else {
    // How much do you need today to match future ₹X?
    const presentValue = currentValue / Math.pow(1 + r, years);
    const loss = currentValue - presentValue;
    return {
      presentValue: Math.round(presentValue),
      futureValue: Math.round(currentValue),
      purchasingPowerLoss: Math.round(loss),
      effectivePurchasingPower: Math.round(presentValue)
    };
  }
};
