import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateCreditCardEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { CreditCardEMIContent } from '../content/CreditCardEMIContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function CreditCardEMICalculator() {
  useDocumentMetadata(
    'Credit Card EMI Calculator 2026: Calculate Interest & Processing Fee',
    'Calculate credit card EMI conversion charges, monthly interest rate & total payback amount. Compare credit card EMI vs Personal Loan.'
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

          <div style={{ background: 'var(--surface-color, #1e293b)', border: '1px solid var(--accent-blue, #3b82f6)', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-blue, #3b82f6)', fontWeight: '600', fontSize: '14px' }}>
              <span>⚡ Quick Summary: Credit Card EMI vs Rolling Debt</span>
            </div>
            <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Converting an outstanding balance of <strong>{formatCurrency(balance)}</strong> at <strong>{interestRate}% p.a.</strong> over <strong>{tenure} months</strong> results in a monthly EMI of <strong>{formatCurrency(results.monthlyEMI)}</strong> and total interest cost of <strong>{formatCurrency(results.totalInterest)}</strong> (+18% GST).
            </p>
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

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <CreditCardEMIContent />
    </div>
  );
}
