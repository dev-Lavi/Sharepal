import React from 'react';

export default function ImpactStats() {
  return (
    <section className="sp-impact-metrics-section">
      <div className="sp-container">
        <div className="sp-impact-metrics-grid">
          
          {/* Metric 1: 250Cr+ with Blue-to-Green Horizontal Gradient */}
          <div className="sp-metric-col">
            <div className="sp-metric-figure">
              <span className="sp-gradient-metric-1">250Cr+</span>
            </div>
            <div className="sp-metric-text">Saved Together</div>
          </div>

          {/* Metric 2: 4.5M Kg with Blue-to-Green Gradient */}
          <div className="sp-metric-col">
            <div className="sp-metric-figure">
              <span className="sp-gradient-metric-2">4.5M Kg</span>
            </div>
            <div className="sp-metric-text">CO₂e Emissions Saved</div>
          </div>

          {/* Metric 3: 100K+ with Blue-to-Green Gradient */}
          <div className="sp-metric-col">
            <div className="sp-metric-figure">
              <span className="sp-gradient-metric-3">100K+</span>
            </div>
            <div className="sp-metric-text">Products In Circulation</div>
          </div>

        </div>
      </div>
    </section>
  );
}
