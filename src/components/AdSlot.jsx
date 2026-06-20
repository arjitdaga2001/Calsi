import React from 'react';

export function AdSlot() {
  return (
    <div 
      className="ad-slot-placeholder" 
      style={{
        width: '100%',
        maxWidth: '1100px',
        height: '90px',
        margin: '30px auto',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px dashed rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)',
        fontSize: '11px',
        fontWeight: 650,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        boxSizing: 'border-box'
      }} 
      aria-label="Advertisement Space"
    >
      Advertisement Space
    </div>
  );
}
