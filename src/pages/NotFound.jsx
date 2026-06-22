import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { Link } from 'react-router-dom';

export function NotFound() {
  useDocumentMetadata('404 - Page Not Found', 'The page you are looking for does not exist on Calsi.');

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--brand-color)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        to="/" 
        style={{
          background: 'var(--brand-color)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
