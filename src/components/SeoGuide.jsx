import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function SeoGuide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="sp-seo-guide-section">
      <div className="sp-container">
        
        {/* Breadcrumb Navigation */}
        <nav className="sp-breadcrumb-nav" aria-label="Breadcrumb">
          <a href="#">Bangalore</a>
          <ChevronRight size={14} />
          <span style={{ color: '#111827', fontWeight: 600 }}>Gaming gadgets on rent</span>
        </nav>

        {/* Informational SEO Article Card */}
        <div className="sp-seo-article-card">
          <h2>Renting from SharePal in Bangalore</h2>
          <p>
            Discover the convenience of renting gaming consoles and gadgets from SharePal, your trusted partner in Bangalore for all your lifestyle entertainment needs. Whether you are hosting a FIFA or FC25 tournament in Koramangala, having friends over for a gaming weekend in Indiranagar, or chilling in your apartment in Whitefield or HSR Layout, SharePal has you covered.
          </p>
          <p>
            We offer the full range of gaming hardware including Sony PlayStation 5 (Digital & Disc Editions), PlayStation Portal Remote Players, Oculus VR headsets, Logitech G29 Racing Wheels, and Big-Screen Projector Gaming combos with 100+ top titles pre-loaded. With free doorstep delivery and return pickup, zero security deposit options, and flexible rental periods, experiencing high-end next-gen console gaming without the heavy buying commitment has never been easier.
          </p>

          {expanded && (
            <div style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                Why Rent a PS5 in Bangalore Instead of Buying?
              </h3>
              <p>
                A brand new PS5 setup with 2 DualSense controllers and multiple AAA titles easily costs upwards of ₹65,000. For casual gamers, students, corporate teams, and weekend enthusiasts, renting from SharePal starting at just ₹160/day lets you play the newest blockbusters like EA Sports FC25, God of War Ragnarök, Spider-Man Miles Morales, and GTA without the upfront financial burden or hardware depreciation.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                Same-Day Delivery Locations Across Bengaluru
              </h3>
              <p>
                Our Bengaluru operations center services all major neighborhoods including Electronic City, Bellandur, Marathahalli, BTM Layout, Jayanagar, JP Nagar, Malleshwaram, Rajajinagar, and Hebbal. All consoles are rigorously sanitised and packed in durable shockproof carrying cases.
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            style={{
              color: '#4c187c',
              fontWeight: 700,
              fontSize: '0.88rem',
              marginTop: '6px',
              textDecoration: 'underline'
            }}
          >
            {expanded ? 'Show Less' : 'Read Full Bangalore Gaming Guide'}
          </button>
        </div>

      </div>
    </section>
  );
}
