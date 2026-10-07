import React from 'react';

export default function ImpactStats() {
  return (
    <section className="sp-impact-metrics-section">
      <div className="sp-container">
        <div className="sp-impact-metrics-grid">
          
          {/* Metric 1 */}
          <div className="sp-metric-col">
            <div className="sp-metric-figure">
              <span className="sp-num-blue">250Cr</span>
              <span className="sp-num-green">+</span>
            </div>
            <div className="sp-metric-text">Saved Together</div>
          </div>

          {/* Metric 2 */}
          <div className="sp-metric-col">
            <div className="sp-metric-figure">
              <span className="sp-num-green">4.5M Kg</span>
            </div>
            <div className="sp-metric-text">CO₂e Emissions Saved</div>
          </div>

          {/* Metric 3 */}
          <div className="sp-metric-col">
            <div className="sp-metric-figure">
              <span className="sp-num-blue">100K</span>
              <span className="sp-num-green">+</span>
            </div>
            <div className="sp-metric-text">Products In Circulation</div>
          </div>

        </div>
      </div>
    </section>
  );
}
