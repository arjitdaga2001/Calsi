import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import './App.css';

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`app-container ${isHome ? 'no-sidebar' : ''}`}>
      {!isHome && <Sidebar />}
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
