import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { SIPCalculator } from './pages/SIPCalculator';
import { LumpsumCalculator } from './pages/LumpsumCalculator';
import { EMICalculator } from './pages/EMICalculator';
import { FDCalculator } from './pages/FDCalculator';
import { RDCalculator } from './pages/RDCalculator';
import { SWPCalculator } from './pages/SWPCalculator';
import { MutualFundCalculator } from './pages/MutualFundCalculator';
import { SSYCalculator } from './pages/SSYCalculator';
import { PPFCalculator } from './pages/PPFCalculator';
import { EPFCalculator } from './pages/EPFCalculator';
import { GSTCalculator } from './pages/GSTCalculator';
import { XIRRCalculator } from './pages/XIRRCalculator';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import './App.css';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sip" element={<SIPCalculator />} />
          <Route path="/lumpsum" element={<LumpsumCalculator />} />
          <Route path="/emi" element={<EMICalculator />} />
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
