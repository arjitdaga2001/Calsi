// Financial Math Functions

export const calculateSIP = (monthlyInvestment, expectedReturnRate, timePeriodYears) => {
  const r = (expectedReturnRate / 100) / 12; // monthly rate
  const n = timePeriodYears * 12; // number of months
  const P = monthlyInvestment; // periodic investment
  
  const investedAmount = P * n;
  let FV = investedAmount; // Future Value
  
  if (r !== 0) {
    // Formula: FV = P * {[(1 + r)^n - 1] / r} (Ordinary Annuity, matching SEBI)
    FV = P * ((Math.pow(1 + r, n) - 1) / r);
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
  
  let monthlyEMI = 0;
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
  const n = 4; // Quarterly
  const t = timePeriodYears;
  
  const totalValue = totalInvestment * Math.pow(1 + (r / n), n * t);
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
  const r = 7.1 / 100; // Fixed at 7.1% generally
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
  const r = 8.2 / 100; // Fixed at 8.2% p.a., compounded annually
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

export const calculateEPF = (monthlyBasicSalary, employeeContributionPercent, employerContributionPercent, annualIncreasePercent, expectedInterestRate, currentAge, retirementAge) => {
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
      // 1. Employee contribution (user-defined %)
      const employeeContrib = currentMonthlySalary * (employeeContributionPercent / 100);
      
      // 2. Employer contribution (user-defined %)
      const employerContrib = currentMonthlySalary * (employerContributionPercent / 100);
      
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
    employeeContribution: Math.round(totalEmployeeInvested),
    employerContribution: Math.round(totalEmployerInvested),
    investedAmount: Math.round(totalInvested),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(balance),
    yearlyData
  };
};

export const calculateRD = (monthlyDeposit, interestRate, timePeriodMonths) => {
  const r = interestRate / 100;
  const investedAmount = monthlyDeposit * timePeriodMonths;

  let principal = 0;
  let accumulatedInterest = 0;

  for (let month = 1; month <= timePeriodMonths; month++) {
    // Deposit made at the start of the month
    principal += monthlyDeposit;

    // Interest calculated monthly on the principal
    const monthlyInterest = principal * (r / 12);
    accumulatedInterest += monthlyInterest;

    // Compounding happens quarterly (every 3 months)
    if (month % 3 === 0) {
      principal += accumulatedInterest;
      accumulatedInterest = 0; // Reset as it's now part of principal
    }
  }

  // Add any uncompounded interest remaining if tenure doesn't end on a quarter
  const totalValue = principal + accumulatedInterest;
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

