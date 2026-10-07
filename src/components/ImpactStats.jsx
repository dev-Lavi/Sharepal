import React from 'react';
import { PiggyBank, Leaf, RefreshCw } from 'lucide-react';

export default function ImpactStats() {
  return (
    <section className="sp-impact-section">
      <div className="sp-container">
        <div className="sp-impact-grid">
          
          <div className="sp-impact-item">
            <div style={{ display: 'inline-flex', padding: '12px', background: '#f4ecfc', color: '#4c187c', borderRadius: '50%', marginBottom: '12px' }}>
              <PiggyBank size={28} />
            </div>
            <div className="sp-impact-number">₹250Cr+</div>
            <div className="sp-impact-label">Saved by Renters Together</div>
          </div>

          <div className="sp-impact-item">
            <div style={{ display: 'inline-flex', padding: '12px', background: '#ecfdf5', color: '#10b981', borderRadius: '50%', marginBottom: '12px' }}>
              <Leaf size={28} />
            </div>
            <div className="sp-impact-number">4.5M Kg</div>
            <div className="sp-impact-label">CO₂e Emissions Prevented</div>
          </div>

          <div className="sp-impact-item">
            <div style={{ display: 'inline-flex', padding: '12px', background: '#fff7ed', color: '#ff7a00', borderRadius: '50%', marginBottom: '12px' }}>
              <RefreshCw size={28} />
            </div>
            <div className="sp-impact-number">100K+</div>
            <div className="sp-impact-label">Products in Circulation</div>
          </div>

        </div>
      </div>
    </section>
  );
}
