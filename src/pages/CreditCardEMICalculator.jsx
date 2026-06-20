import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateCreditCardEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { CreditCardEMIContent } from '../content/CreditCardEMIContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function CreditCardEMICalculator() {
  useDocumentMetadata(
    'Credit Card EMI Calculator 2025 – Convert Outstanding to EMI | Calsi',
    'Calculate the EMI on your Credit Card outstanding balance. Find the exact monthly instalment, interest cost, and total repayment for any credit card.'
  );

  const [balance, setBalance] = useState(50000);
  const [interestRate, setInterestRate] = useState(36);
  const [tenure, setTenure] = useState(12);

  const results = useMemo(() => calculateCreditCardEMI(balance, interestRate, tenure), [balance, interestRate, tenure]);

  const chartData = [
    { name: 'Principal', value: results.principalAmount, color: 'var(--chart-color-2)' },
    { name: 'Interest',  value: results.totalInterest,   color: 'var(--chart-color-1)' },
  ];

  const cards = [
    { name: 'HDFC Diners Club', rate: 42 }, { name: 'ICICI Bank', rate: 40 },
    { name: 'SBI Card', rate: 42 }, { name: 'Axis Bank', rate: 52.86 },
    { name: 'Kotak Mahindra', rate: 36 },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Credit Card EMI Calculator</h1>
            <p className="calc-subtitle">Convert your credit card outstanding into easy EMIs</p>
          </div>
          <InputSlider label="Outstanding Balance" value={balance} min={1000} max={500000} step={1000} onChange={setBalance} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Annual Interest Rate" value={interestRate} min={12} max={60} step={0.1} onChange={setInterestRate} suffix="%" />
          <InputSlider label="Repayment Tenure" value={tenure} min={3} max={60} step={3} onChange={setTenure} suffix="Mo" />

          <div style={{ marginTop: '20px', padding: '14px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--surface-2)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.6' }}>
              ⚠️ <strong>Credit cards charge 3–4% monthly interest</strong> (36–52% p.a.). Always try to pay the full outstanding amount. Use EMI only as a last resort.
            </p>
          </div>
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalAmount} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Monthly EMI</span>
              <span className="result-value" style={{ color: 'var(--accent-blue)', fontSize: '17px' }}>{formatCurrency(results.monthlyEMI)}</span>
            </div>
            <div className="result-row">
              <span className="result-label"><span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />Outstanding Balance</span>
              <span className="result-value">{formatCurrency(results.principalAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label"><span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />Total Interest</span>
              <span className="result-value">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Total Payment</span>
              <span className="result-total-value">{formatCurrency(results.totalAmount)}</span>
            </div>
          </div>
        </div>
      </div>
      <AffiliateWidget />
      <AdSlot />

      <CreditCardEMIContent />
    </div>
  );
}
