import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';
import './related.css';

export function RelatedCalculators({ calculators }) {
  if (!calculators || calculators.length === 0) return null;

  return (
    <section className="related-guides">
      <div className="related-header">
        <Calculator className="related-icon" size={20} />
        <h2>Related Calculators</h2>
      </div>
      <div className="related-grid">
        {calculators.map((calc, i) => (
          <Link key={i} to={calc.path} className="related-card">
            <div className="related-card-content">
              <h3>{calc.name}</h3>
              <p>{calc.desc}</p>
            </div>
            <div className="related-card-arrow">
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
