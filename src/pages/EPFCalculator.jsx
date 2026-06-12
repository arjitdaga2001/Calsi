import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEPF, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { EPFContent } from '../content/EPFContent';
import './epf.css';

export function EPFCalculator() {
  useDocumentMetadata(
    'EPF Calculator 2026 – Employees Provident Fund | Calsi',
    'Calculate your EPF maturity amount, interest earned, and post-retirement corpus. Plan your Employee Provident Fund investments accurately.'
  );

  const [monthlySalary, setMonthlySalary] = useState(50000);
  const [age, setAge] = useState(25);
  const [employeeContribution, setEmployeeContribution] = useState(12);
  const [expectedAnnualIncrease, setExpectedAnnualIncrease] = useState(5);
  
  const retirementAge = 58;
  const interestRate = 8.25;

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
      <h1 className="page-title">EPF Calculator</h1>
      <p className="page-subtitle">Estimate your Employee Provident Fund maturity at retirement</p>

      <div className="calculator-layout epf-layout">
        <div className="calc-inputs">
          <InputSlider
            label="Monthly Basic Salary + DA"
            value={monthlySalary}
            min={10000}
            max={500000}
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
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Employee's Contrib.</span>
              <span className="result-value">{formatCurrency(results.totalEmployeeContribution)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Employer's Contrib.</span>
              <span className="result-value">{formatCurrency(results.totalEmployerContribution)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Total Interest</span>
              <span className="result-value">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label">Total Maturity Value</span>
              <span className="result-total">{formatCurrency(results.totalMaturity)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">
            Assumes retirement at age {retirementAge}. Calculates EPS threshold capping correctly. Values are estimates and subject to government rate changes.
          </p>
        </div>
      </div>

      <EPFContent />
    </div>
  );
}
