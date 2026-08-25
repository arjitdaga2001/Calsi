import { Link } from 'react-router-dom';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { guidesData } from '../data/guidesData';
import { BookOpen, Clock, Calendar } from 'lucide-react';
import './guides.css';

export function GuidesList() {
  useDocumentMetadata(
    'Financial Guides & Articles 2026 | Expert Insights | CALSI',
    'Read in-depth financial guides on tax saving, SIP strategies, home loans, retirement planning, and wealth building in India.'
  );

  return (
    <div className="guides-list-wrap">
      <div className="guides-header">
        <div className="guides-icon"><BookOpen size={32} /></div>
        <h1>Financial Guides</h1>
        <p>Master your personal finance with our expert-written articles and calculators.</p>
      </div>

      <div className="guides-grid">
        {guidesData.map(guide => (
          <Link key={guide.id} to={`/articles/${guide.slug}`} className="guide-card">
            <div className="guide-card-category">{guide.category}</div>
            <h2 className="guide-card-title">{guide.title}</h2>
            <p className="guide-card-excerpt">{guide.excerpt}</p>
            <div className="guide-card-meta">
              <span className="guide-meta-item"><Calendar size={14} /> {new Date(guide.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="guide-meta-item"><Clock size={14} /> {guide.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
