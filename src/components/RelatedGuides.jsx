import React from 'react';
import { Link } from 'react-router-dom';
import { guidesData } from '../data/guidesData';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import './components.css';

export function RelatedGuides({ slugs = [], title = "Related Financial Guides" }) {
  if (!slugs || slugs.length === 0) return null;

  // Map slugs to guide objects and filter out any invalid slugs
  const related = slugs.map(slug => guidesData.find(g => g.slug === slug)).filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className="related-guides-widget">
      <div className="related-guides-header">
        <BookOpen className="related-guides-icon" size={20} />
        <h2 className="related-guides-title">{title}</h2>
      </div>
      <div className="related-guides-grid">
        {related.map(guide => (
          <Link key={guide.slug} to={`/articles/${guide.slug}`} className="related-guide-card">
            <div className="related-guide-cat">{guide.category}</div>
            <h3 className="related-guide-name">{guide.title}</h3>
            <div className="related-guide-meta">
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} /> {guide.readTime}
              </span>
              <span className="related-guide-read">
                Read Guide <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
