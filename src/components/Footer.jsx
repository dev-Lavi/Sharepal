import React from 'react';
import { footerMegaCategories } from '../data/categories';
import { ArrowUp, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sp-footer">
      <div className="sp-container">
        
        {/* Mega Category Matrix */}
        <div className="sp-footer-mega-grid">
          {footerMegaCategories.map((col, idx) => (
            <div key={idx} className="sp-footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.items.map((item, i) => (
                  <li key={i}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company & Support Columns */}
        <div className="sp-footer-company-row">
          <div className="sp-footer-col">
            <h4>Sharepal</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Why SharePal</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">CarePal</a></li>
            </ul>
          </div>

          <div className="sp-footer-col">
            <h4>Become a Pal</h4>
            <ul>
              <li><a href="#">Sharepal for Creators</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sharepal for Brands</a></li>
              <li><a href="#">Asset Funding Program <span style={{ background: '#9eff00', color: '#111827', fontSize: '0.65rem', fontWeight: 700, padding: '1px 5px', borderRadius: '4px' }}>NEW</span></a></li>
              <li><a href="#">Rent Your Gear <span style={{ background: '#9eff00', color: '#111827', fontSize: '0.65rem', fontWeight: 700, padding: '1px 5px', borderRadius: '4px' }}>NEW</span></a></li>
            </ul>
          </div>

          <div className="sp-footer-col">
            <h4>Information</h4>
            <ul>
              <li><a href="#">How it works?</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Verification & KYC</a></li>
              <li><a href="#">Cancellation Policy</a></li>
              <li><a href="#">Life at Sharepal</a></li>
            </ul>
          </div>

          <div className="sp-footer-col">
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Damage Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="sp-footer-col">
            <h4>Need Help?</h4>
            <ul>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Contact Us</a></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#9eff00', fontWeight: 600 }}>
                <Mail size={14} />
                <a href="mailto:care@sharepal.in" style={{ color: '#9eff00' }}>care@sharepal.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="sp-footer-bottom-bar">
          <div>
            © 2026 SWNAC E-Kiraya Services Pvt Ltd. Made with <Heart size={14} fill="#ef4444" color="#ef4444" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }} /> for India.
          </div>

          <button type="button" className="sp-back-to-top-btn" onClick={scrollToTop}>
            <span>Go up</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
