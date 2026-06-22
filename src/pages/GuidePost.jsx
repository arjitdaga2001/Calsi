import { useParams, Navigate, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { guidesData } from '../data/guidesData';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import './guides.css';

export function GuidePost() {
  const { slug } = useParams();
  const guide = guidesData.find(g => g.slug === slug);

  if (!guide) {
    return <Navigate to="/404" replace />;
  }

  // SEO metadata setup
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.seoDescription || guide.excerpt,
    "datePublished": guide.date,
    "author": {
      "@type": "Organization",
      "name": "Calsi"
    }
  };

  useDocumentMetadata(
    guide.seoTitle || guide.title,
    guide.seoDescription || guide.excerpt,
    schema
  );

  const ContentComponent = guide.component;

  return (
    <div className="guide-post-wrap">
      <div className="guide-post-container">
        <Link to="/guides" className="guide-back-link">
          <ChevronLeft size={16} /> Back to Guides
        </Link>
        
        <header className="guide-post-header">
          <div className="guide-category-badge">{guide.category}</div>
          <h1 className="guide-post-title">{guide.title}</h1>
          <div className="guide-post-meta">
            <span><Calendar size={16} /> {new Date(guide.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span><Clock size={16} /> {guide.readTime}</span>
          </div>
        </header>

        <main className="guide-post-body">
          <Suspense fallback={<div className="guide-loading">Loading article...</div>}>
            <ContentComponent />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
