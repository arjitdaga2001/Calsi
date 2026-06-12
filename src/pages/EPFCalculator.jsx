import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEPF, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import './epf.css';

export function EPFCalculator() {
  useDocumentMetadata(
    'EPF Calculator – Employees\' Provident Fund Returns | Calsi',
    'Determine your accumulated EPF corpus at retirement, including interest and employer contribution, with our free provident fund calculator.'
  );

  const [monthlyBasicSalary, setMonthlyBasicSalary] = useState(50000);
  const [employeeContribution, setEmployeeContribution] = useState(12);
  const [employerContribution, setEmployerContribution] = useState(12);
  const [annualIncrease, setAnnualIncrease] = useState(5);
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(58);
  const [expectedInterestRate, setExpectedInterestRate] = useState(8.25);

  const results = useMemo(() => {
    return calculateEPF(
      monthlyBasicSalary,
      employeeContribution,
      employerContribution,
      annualIncrease,
      expectedInterestRate,
      currentAge,
      retirementAge
    );
  }, [monthlyBasicSalary, employeeContribution, employerContribution, annualIncrease, expectedInterestRate, currentAge, retirementAge]);

  const chartData = [
    { name: "Your Contribution", value: results.employeeContribution, color: 'var(--chart-color-1)' },
    { name: "Employer's Contribution", value: results.employerContribution, color: 'var(--chart-color-3)' },
    { name: 'Interest Earned', value: results.estimatedReturns, color: 'var(--cat-govt)' },
  ];


  const yearsToRetirement = retirementAge - currentAge;

  return (
    <div>
      <h1 className="page-title">EPF Calculator</h1>
      <p className="page-subtitle">
        Estimate your EPF maturity corpus based on your salary, contributions, and retirement horizon.
      </p>

      <div className="calculator-layout">
        {/* ── Inputs ── */}
        <div className="calc-inputs">
          <InputSlider
            label="Monthly Basic Salary + DA"
            value={monthlyBasicSalary}
            min={10000}
            max={500000}
            step={1000}
            onChange={setMonthlyBasicSalary}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider
            label="Your Contribution"
            value={employeeContribution}
            min={1}
            max={100}
            step={1}
            onChange={setEmployeeContribution}
            suffix="%"
          />
          <InputSlider
            label="Employer's Contribution"
            value={employerContribution}
            min={1}
            max={20}
            step={1}
            onChange={setEmployerContribution}
            suffix="%"
          />
          <InputSlider
            label="Annual Salary Increase"
            value={annualIncrease}
            min={0}
            max={20}
            step={1}
            onChange={setAnnualIncrease}
            suffix="%"
          />
          <InputSlider
            label="Expected EPF Interest Rate"
            value={expectedInterestRate}
            min={5}
            max={15}
            step={0.05}
            onChange={setExpectedInterestRate}
            suffix="%"
          />
          <InputSlider
            label="Your Age"
            value={currentAge}
            min={18}
            max={55}
            step={1}
            onChange={(v) => {
              setCurrentAge(v);
              if (retirementAge <= v) setRetirementAge(v + 1);
            }}
            suffix=" Yr"
          />
          <InputSlider
            label="Retirement Age"
            value={retirementAge}
            min={40}
            max={65}
            step={1}
            onChange={(v) => setRetirementAge(Math.max(v, currentAge + 1))}
            suffix=" Yr"
          />
          <div className="epf-info-note">
            📅 Years to retirement: <strong>{yearsToRetirement} years</strong>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="calc-results">
          <DonutChart data={chartData} />

          {/* Legend */}
          <div className="epf-legend">
            {chartData.map((item) => (
              <div key={item.name} className="epf-legend-item">
                <span className="epf-legend-dot" style={{ background: item.color }} />
                <span className="epf-legend-label">{item.name}</span>
              </div>
            ))}
          </div>

          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Your Contribution</span>
              <span className="result-value" style={{ color: 'var(--chart-color-1)' }}>
                {formatCurrency(results.employeeContribution)}
              </span>
            </div>
            <div className="result-row">
              <span className="result-label">Employer's Contribution</span>
              <span className="result-value" style={{ color: 'var(--chart-color-3)' }}>
                {formatCurrency(results.employerContribution)}
              </span>
            </div>
            <div className="result-row">
              <span className="result-label">Interest Earned</span>
              <span className="result-value" style={{ color: 'var(--cat-govt)' }}>
                {formatCurrency(results.estimatedReturns)}
              </span>
            </div>
            <div className="result-row epf-total-row">
              <span className="result-label">Total at Retirement</span>
              <span className="result-total">{formatCurrency(results.totalValue)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Yearly Breakdown Table ── */}
      {results.yearlyData && results.yearlyData.length > 0 && (
        <div className="epf-table-container">
          <h2 className="epf-table-title">Year-by-Year Growth</h2>
          <div className="epf-table-scroll">
            <table className="epf-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Age</th>
                  <th>Monthly Basic</th>
                  <th>Your Contribution</th>
                  <th>Employer's Contribution</th>
                  <th>Interest Earned</th>
                  <th>Closing Balance</th>
                </tr>
              </thead>
              <tbody>
                {results.yearlyData.map((data) => (
                  <tr key={data.year}>
                    <td className="epf-year-cell">{data.year}</td>
                    <td>{data.age} yrs</td>
                    <td>{formatCurrency(data.basicSalary)}</td>
                    <td style={{ color: 'var(--chart-color-1)' }}>{formatCurrency(data.yearlyEmployeeContrib)}</td>
                    <td style={{ color: 'var(--chart-color-3)' }}>{formatCurrency(data.yearlyEmployerContrib)}</td>
                    <td style={{ color: 'var(--cat-govt)' }}>{formatCurrency(data.earnedInterest)}</td>
                    <td className="epf-balance-cell">{formatCurrency(data.totalBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
