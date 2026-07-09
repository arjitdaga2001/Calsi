import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Home } from './pages/Home';
import './App.css';
import { usePageTracking } from './hooks/usePageTracking';
import { useLazyScripts } from './hooks/useLazyScripts';

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
const ProgrammaticSIP = lazy(() => import('./pages/ProgrammaticSIP').then(module => ({ default: module.ProgrammaticSIP })));
const HomeLoanCalculator = lazy(() => import('./pages/HomeLoanCalculator').then(module => ({ default: module.HomeLoanCalculator })));
const CarLoanCalculator = lazy(() => import('./pages/CarLoanCalculator').then(module => ({ default: module.CarLoanCalculator })));
const PersonalLoanCalculator = lazy(() => import('./pages/PersonalLoanCalculator').then(module => ({ default: module.PersonalLoanCalculator })));
const BikeLoanCalculator = lazy(() => import('./pages/BikeLoanCalculator').then(module => ({ default: module.BikeLoanCalculator })));
const CreditCardEMICalculator = lazy(() => import('./pages/CreditCardEMICalculator').then(module => ({ default: module.CreditCardEMICalculator })));
const NPSCalculator = lazy(() => import('./pages/NPSCalculator').then(module => ({ default: module.NPSCalculator })));
const IncomeTaxCalculator = lazy(() => import('./pages/IncomeTaxCalculator').then(module => ({ default: module.IncomeTaxCalculator })));
const RetirementCalculator = lazy(() => import('./pages/RetirementCalculator').then(module => ({ default: module.RetirementCalculator })));
const TermInsuranceCalculator = lazy(() => import('./pages/TermInsuranceCalculator').then(module => ({ default: module.TermInsuranceCalculator })));
const HealthInsuranceCalculator = lazy(() => import('./pages/HealthInsuranceCalculator').then(module => ({ default: module.HealthInsuranceCalculator })));
const ULIPCalculator = lazy(() => import('./pages/ULIPCalculator').then(module => ({ default: module.ULIPCalculator })));
const LTCGCalculator = lazy(() => import('./pages/LTCGCalculator').then(module => ({ default: module.LTCGCalculator })));
const InflationCalculator = lazy(() => import('./pages/InflationCalculator').then(module => ({ default: module.InflationCalculator })));

const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));
const GuidesList = lazy(() => import('./pages/GuidesList').then(module => ({ default: module.GuidesList })));
const GuidePost = lazy(() => import('./pages/GuidePost').then(module => ({ default: module.GuidePost })));
const CreditCardReview = lazy(() => import('./pages/CreditCardReview'));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
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

  // Defer heavy third-party scripts (GA4 & AdSense) to boost PageSpeed
  useLazyScripts('G-CZETXN5MXW', 'ca-pub-4163850944046836');

  // Automatically track pageviews for all route changes
  usePageTracking();

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
            <Route path="/calculators/sip-calculator" element={<SIPCalculator />} />
            <Route path="/calculators/lumpsum-calculator" element={<LumpsumCalculator />} />
            <Route path="/calculators/emi-calculator" element={<EMICalculator />} />
            <Route path="/emi/:loanSlug" element={<ProgrammaticEMI />} />
            <Route path="/sip/:sipSlug" element={<ProgrammaticSIP />} />
            <Route path="/calculators/fd-calculator" element={<FDCalculator />} />
            <Route path="/calculators/rd-calculator" element={<RDCalculator />} />
            <Route path="/calculators/swp-calculator" element={<SWPCalculator />} />
            <Route path="/calculators/mf-returns-calculator" element={<MutualFundCalculator />} />
            <Route path="/calculators/ssy-calculator" element={<SSYCalculator />} />
            <Route path="/calculators/ppf-calculator" element={<PPFCalculator />} />
            <Route path="/calculators/epf-calculator" element={<EPFCalculator />} />
            <Route path="/calculators/gst-calculator" element={<GSTCalculator />} />
            <Route path="/calculators/xirr-calculator" element={<XIRRCalculator />} />
            <Route path="/calculators/home-loan-calculator" element={<HomeLoanCalculator />} />
            <Route path="/calculators/car-loan-calculator" element={<CarLoanCalculator />} />
            <Route path="/calculators/personal-loan-calculator" element={<PersonalLoanCalculator />} />
            <Route path="/calculators/bike-loan-calculator" element={<BikeLoanCalculator />} />
            <Route path="/calculators/credit-card-emi-calculator" element={<CreditCardEMICalculator />} />
            <Route path="/calculators/nps-calculator" element={<NPSCalculator />} />
            <Route path="/calculators/income-tax-calculator" element={<IncomeTaxCalculator />} />
            <Route path="/calculators/retirement-calculator" element={<RetirementCalculator />} />
            <Route path="/calculators/term-insurance-calculator" element={<TermInsuranceCalculator />} />
            <Route path="/calculators/health-insurance-calculator" element={<HealthInsuranceCalculator />} />
            <Route path="/calculators/ulip-calculator" element={<ULIPCalculator />} />
            <Route path="/calculators/ltcg-calculator" element={<LTCGCalculator />} />
            <Route path="/calculators/inflation-calculator" element={<InflationCalculator />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/articles" element={<GuidesList />} />
            <Route path="/articles/:slug" element={<GuidePost />} />
            <Route path="/credit-cards/:slug" element={<CreditCardReview />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {!isHome && <Footer />}
      </main>
      <CookieConsent />
    </div>
  );
}

import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}

export default App;
