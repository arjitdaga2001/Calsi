import { RelatedCalculators } from '../components/RelatedCalculators';
import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEPF, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { EPFContent } from '../content/EPFContent';
import { GOVT_RATES } from '../constants/financialRates';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';
import './epf.css';

export function EPFCalculator() {
  useDocumentMetadata(
    'EPF Calculator 2026: Estimate PF Balance at Retirement',
    'Calculate your Employee Provident Fund balance and employer contributions. Plan your retirement corpus with the latest EPF interest rates in India.'
  );

  const [monthlySalary, setMonthlySalary] = useState(50000);
  const [age, setAge] = useState(25);
  const [employeeContribution, setEmployeeContribution] = useState(12);
  const [expectedAnnualIncrease, setExpectedAnnualIncrease] = useState(5);
  
  const retirementAge = 58;
  const interestRate = GOVT_RATES.EPF;

  const results = useMemo(() => {
    return calculateEPF(monthlySalary, age, employeeContribution, expectedAnnualIncrease, retirementAge, interestRate);
  }, [monthlySalary, age, employeeContribution, expectedAnnualIncrease]);

  const chartData = [
    { name: 'Employee Share', value: results.totalEmployeeContribution, color: 'var(--chart-color-2)' },
    { name: 'Employer Share', value: results.totalEmployerContribution, color: 'var(--chart-color-3)' },
    { name: 'Est. Interest', value: results.totalInterest, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout epf-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">EPF Calculator &amp; PF Calculator 2026</h1>
            <p className="calc-subtitle">Calculate your Employee Provident Fund (PF) balance, private sector employer contributions, and maturity amount.</p>
          </div>
          <InputSlider
            label="Monthly Basic Salary + DA"
            value={monthlySalary}
            min={10000}
            max={1000000}
            step={1000}
            onChange={setMonthlySalary}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider
            label="Your Age"
            value={age}
            min={18}
            max={55}
            step={1}
            onChange={setAge}
            suffix="Yr"
          />
          <InputSlider
            label="Your Contribution"
            value={employeeContribution}
            min={12}
            max={20}
            step={1}
            onChange={setEmployeeContribution}
            suffix="%"
          />
          <InputSlider
            label="Annual Salary Increase"
            value={expectedAnnualIncrease}
            min={0}
            max={15}
            step={1}
            onChange={setExpectedAnnualIncrease}
            suffix="%"
          />
          <div className="info-box" style={{ marginTop: '20px', padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
             <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Employer matches 12%, but <strong>8.33%</strong> goes to EPS (capped) and <strong>3.67%</strong> to EPF.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Current EPF Rate</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '16px' }}>{interestRate}% p.a.</span>
            </div>
          </div>
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalMaturity} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />
                Employee's Contrib.
              </span>
              <span className="result-value">{formatCurrency(results.totalEmployeeContribution)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-3)' }} />
                Employer's Contrib.
              </span>
              <span className="result-value">{formatCurrency(results.totalEmployerContribution)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />
                Total Interest
              </span>
              <span className="result-value">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Total Maturity Value</span>
              <span className="result-total-value">{formatCurrency(results.totalMaturity)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">
            Assumes retirement at age {retirementAge}. Calculates EPS threshold capping correctly. Values are estimates and subject to government rate changes.
          </p>
        </div>
      </div>

      <AffiliateWidget />
      <AdSlot />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <EPFContent />
    </div>
  );
}
