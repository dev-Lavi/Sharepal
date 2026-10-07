import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Headphones, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Heart,
  ChevronUp as ArrowUp 
} from 'lucide-react';

export default function Footer() {
  const [readMore, setReadMore] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sp-website-footer">
      <div className="sp-container">
        
        {/* Top SEO Category Summary as shown in Image 5 */}
        <div className="sp-footer-seo-top">
          <div className="sp-footer-cat-heading">Categories on Rent</div>
          <div className="sp-footer-subcat-heading">Action Cameras on Rent</div>
          <p className="sp-footer-seo-desc">
            Capture your adventures in stunning detail with our range of action cameras. Choose from top brands like GoPro, Insta360, and DJI, perfect for everything from extreme sports to casual vlogging. Whether you need high-quality video for your next trek or a 360-degree camera to capture every angle, we've got you covered.
          </p>
          {readMore && (
            <p className="sp-footer-seo-desc" style={{ marginTop: '8px' }}>
              We offer doorstep delivery and pickup in Bangalore across all gaming consoles, DSLR cameras, trekking gear, riding gear, and lifestyle gadgets with zero security deposit.
            </p>
          )}
          <button 
            type="button" 
            className="sp-footer-read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            <span>{readMore ? 'Read Less' : 'Read More'}</span>
            {readMore ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {/* SharePal Brand Logo in Footer as shown in Image 5 */}
        <div className="sp-footer-brand-row">
          <div className="sp-footer-logo">
            <span className="sp-logo-share" style={{ color: '#2563EB', fontSize: '1.9rem', fontWeight: 900 }}>Share</span>
            <span className="sp-logo-pal" style={{ color: '#9EFF00', fontSize: '1.9rem', fontWeight: 900, fontStyle: 'italic' }}>Pal</span>
          </div>
        </div>

        {/* 5 Footer Columns as shown in Image 5 */}
        <div className="sp-footer-links-grid">
          
          {/* Col 1: Sharepal */}
          <div className="sp-footer-col">
            <h4>Sharepal</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Why SharePal</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">CarePal</a></li>
            </ul>
          </div>

          {/* Col 2: Become a Pal */}
          <div className="sp-footer-col">
            <h4>Become a Pal</h4>
            <ul>
              <li><a href="#">Sharepal for Creators</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sharepal for Brands</a></li>
              <li>
                <a href="#">
                  Asset Funding Program <span className="sp-green-new-pill">New</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Rent Your Gear <span className="sp-green-new-pill">New</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Information */}
          <div className="sp-footer-col">
            <h4>Information</h4>
            <ul>
              <li><a href="#">How it works?</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Verification</a></li>
              <li><a href="#">Cancellation Policy</a></li>
              <li><a href="#">Life at Sharepal</a></li>
            </ul>
          </div>

          {/* Col 4: Policies */}
          <div className="sp-footer-col">
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Shipping policy</a></li>
              <li><a href="#">Damage Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 5: Need Help */}
          <div className="sp-footer-col">
            <h4>Need Help</h4>
            <ul>
              <li className="sp-help-item">
                <Headphones size={15} color="#94A3B8" />
                <a href="#">Contact Support</a>
              </li>
              <li><a href="#">Contact Us</a></li>
              <li className="sp-help-item">
                <Mail size={15} color="#94A3B8" />
                <a href="mailto:care@sharepal.in">care@sharepal.in</a>
              </li>
              {/* Social Icons */}
              <li className="sp-social-icons-row">
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar matching Image 5 */}
        <div className="sp-footer-bottom-row">
          <button type="button" className="sp-footer-go-up" onClick={scrollToTop}>
            <span>Go up</span>
            <ArrowUp size={14} />
          </button>

          <div className="sp-footer-copyright">
            © 2026. SWNAC E-Kiraya Services Pvt Ltd
          </div>

          <div className="sp-footer-made-with">
            Made with <Heart size={14} fill="#EF4444" color="#EF4444" style={{ display: 'inline', margin: '0 2px', verticalAlign: 'middle' }} /> for India
          </div>
        </div>

      </div>
    </footer>
  );
}
