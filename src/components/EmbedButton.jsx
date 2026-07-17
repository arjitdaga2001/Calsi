import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Code, Check, X } from 'lucide-react';
import './EmbedButton.css';

export function EmbedButton() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Only show on calculator pages
  if (!location.pathname.includes('/calculators/')) return null;

  const url = `https://calsi.in${location.pathname}?embed=true`;
  const embedCode = `<iframe src="${url}" width="100%" height="650" frameborder="0" style="border-radius: 12px; border: 1px solid #e2e8f0;"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button className="embed-floating-btn" onClick={() => setIsOpen(true)} title="Get Embed Code">
        <Code size={20} />
      </button>

      {isOpen && (
        <div className="embed-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="embed-modal" onClick={e => e.stopPropagation()}>
            <div className="embed-modal-header">
              <h3>Embed this Calculator</h3>
              <button className="embed-close-btn" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <p className="embed-modal-desc">
              Want to use this calculator on your blog or website? Copy the code below to embed it for free!
            </p>
            
            <div className="embed-code-box">
              <code>{embedCode}</code>
            </div>
            
            <button className="embed-copy-btn" onClick={handleCopy}>
              {copied ? <><Check size={18} /> Copied!</> : <><Code size={18} /> Copy Code</>}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
