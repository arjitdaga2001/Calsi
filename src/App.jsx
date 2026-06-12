import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import './App.css';

// Lazy loaded pages for code splitting
const SIPCalculator = lazy(() => import('./pages/SIPCalculator').then(module => ({ default: module.SIPCalculator })));
const LumpsumCalculator = lazy(() => import('./pages/LumpsumCalculator').then(module => ({ default: module.LumpsumCalculator })));
const EMICalculator = lazy(() => import('./pages/EMICalculator').then(module => ({ default: module.EMICalculator })));
const FDCalculator = lazy(() => import('./pages/FDCalculator').then(module => ({ default: module.FDCalculator })));
const RDCalculator = lazy(() => import('./pages/RDCalculator').then(module => ({ default: module.RDCalculator })));
const SWPCalculator = lazy(() => import('./pages/SWPCalculator').then(module => ({ default: module.SWPCalculator })));
const MutualFundCalculator = lazy(() => import('./pages/MutualFundCalculator').then(module => ({ default: module.MutualFundCalculator })));
const SSYCalculator = lazy(() => import('./pages/SSYCalculator').then(module => ({ default: module.SSYCalculator })));
const PPFCalculator = lazy(() => import('./pages/PPFCalculator').then(module => ({ default: module.PPFCalculator })));
const EPFCalculator = lazy(() => import('./pages/EPFCalculator').then(module => ({ default: module.EPFCalculator })));
const GSTCalculator = lazy(() => import('./pages/GSTCalculator').then(module => ({ default: module.GSTCalculator })));
const XIRRCalculator = lazy(() => import('./pages/XIRRCalculator').then(module => ({ default: module.XIRRCalculator })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then(module => ({ default: module.TermsConditions })));
const ProgrammaticEMI = lazy(() => import('./pages/ProgrammaticEMI').then(module => ({ default: module.ProgrammaticEMI })));

// A simple loading placeholder for lazy routes
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', color: 'var(--text-muted)' }}>
    Loading...
  </div>
);

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Close sidebar on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSidebarOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className={`app-container ${isHome ? 'no-sidebar' : ''}`}>
      {!isHome && (
        <>
          {/* Mobile hamburger button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Overlay */}
          <div
            className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
      )}

      <main className={`main-content ${isHome ? 'full-width' : ''}`}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sip" element={<SIPCalculator />} />
            <Route path="/lumpsum" element={<LumpsumCalculator />} />
            <Route path="/emi" element={<EMICalculator />} />
            <Route path="/emi/:amountStr-home-loan-:tenureStr" element={<ProgrammaticEMI />} />
            <Route path="/fd" element={<FDCalculator />} />
            <Route path="/rd" element={<RDCalculator />} />
            <Route path="/swp" element={<SWPCalculator />} />
            <Route path="/mf-returns" element={<MutualFundCalculator />} />
            <Route path="/ssy" element={<SSYCalculator />} />
            <Route path="/ppf" element={<PPFCalculator />} />
            <Route path="/epf" element={<EPFCalculator />} />
            <Route path="/gst" element={<GSTCalculator />} />
            <Route path="/xirr" element={<XIRRCalculator />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<div className="page-title">Page not found</div>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
