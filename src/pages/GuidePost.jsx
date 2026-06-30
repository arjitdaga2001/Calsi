import { useParams, Navigate, Link } from 'react-router-dom';
import { RelatedCalculators } from '../components/RelatedCalculators';
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
    "image": "https://calsi.in/og-image.png",
    "datePublished": guide.date,
    "dateModified": guide.date,
    "author": {
      "@type": "Organization",
      "name": "CALSI.IN"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CALSI.IN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calsi.in/logo.png"
      }
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
        <Link to="/articles" className="guide-back-link">
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
        
          <div style={{ marginTop: '40px' }}><RelatedCalculators calculators={[
            { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
            { name: 'Income Tax Calculator', path: '/calculators/income-tax-calculator', desc: 'Compare Old vs New Regimes' },
            { name: 'Home Loan Calculator', path: '/calculators/home-loan-calculator', desc: 'Calculate Home Loan EMI' }
          ]} /></div>
        </main>
      </div>
    </div>
  );
}
