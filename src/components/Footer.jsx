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

        {/* Category Directory Links Grid */}
        <div className="sp-footer-mega-grid">
          
          {/* Row 1 Columns */}
          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Action Cameras</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">Action Cameras</a></li>
              <li><a href="#">Pocket Cameras</a></li>
              <li><a href="#">GoPro Cameras</a></li>
              <li><a href="#">DJI Cameras</a></li>
              <li><a href="#">DJI Drones</a></li>
              <li><a href="#">360 Cameras</a></li>
            </ul>
          </div>

          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Cameras</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">DSLR Cameras</a></li>
              <li><a href="#">Cameras</a></li>
              <li><a href="#">iPhones</a></li>
              <li><a href="#">DSLR Gimbal Combos</a></li>
              <li><a href="#">Wildlife Photography</a></li>
              <li><a href="#">Tripod and camera accessories</a></li>
            </ul>
          </div>

          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Trekking Gear</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">Trekking Gear</a></li>
              <li><a href="#">Trekking Jackets</a></li>
              <li><a href="#">Trek/Snow Pants</a></li>
              <li><a href="#">Trekking Shoes</a></li>
              <li><a href="#">Trek Accessories</a></li>
            </ul>
          </div>

          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Riding Gear</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">Riding Gear</a></li>
              <li><a href="#">Riding Luggage</a></li>
              <li><a href="#">Riding Jackets</a></li>
              <li><a href="#">Riding Essentials</a></li>
              <li><a href="#">Riding Boots</a></li>
              <li><a href="#">Binoculars</a></li>
            </ul>
          </div>

          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Creator Gear</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">Wireless & Collar Mics</a></li>
              <li><a href="#">Professional Cameras</a></li>
              <li><a href="#">Mirrorless Cameras</a></li>
              <li><a href="#">UNLMTD Vlogging</a></li>
              <li><a href="#">Mobile Gimbals</a></li>
              <li><a href="#">Vlogging</a></li>
            </ul>
          </div>

          {/* Row 2 Columns */}
          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Gaming Console</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">PS5 Console</a></li>
              <li><a href="#">VR</a></li>
              <li><a href="#">Racing Wheel</a></li>
              <li><a href="#">Big Screen Gaming</a></li>
              <li><a href="#">Xbox Console</a></li>
            </ul>
          </div>

          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Winter Wear</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">Snow Boots</a></li>
              <li><a href="#">Winter Jackets</a></li>
              <li><a href="#">Backpacks</a></li>
            </ul>
          </div>

          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Camping Gear</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">Camping Gear</a></li>
              <li><a href="#">Camping Stools & Tables</a></li>
              <li><a href="#">Camping Tents</a></li>
              <li><a href="#">Sleeping Bags & Mats</a></li>
            </ul>
          </div>

          <div className="sp-footer-mega-col">
            <h4 className="sp-footer-mega-title">Audio Visual Equipment</h4>
            <ul className="sp-footer-mega-list">
              <li><a href="#">Projectors</a></li>
              <li><a href="#">VR</a></li>
              <li><a href="#">Mics</a></li>
              <li><a href="#">Speakers</a></li>
            </ul>
          </div>

        </div>

        {/* City Info Description */}
        <div className="sp-footer-city-description">
          <h4 className="sp-footer-city-heading">Renting from SharePal in Bangalore</h4>
          <p className="sp-footer-city-text">
            Discover the convenience of renting from SharePal, your trusted partner for premium gear in Bangalore. Whether you're exploring the vibrant streets of Koramangala, setting up a shoot in Indiranagar, or planning a trek from the outskirts of Whitefield, SharePal has you covered. We offer a wide range of products, including cameras, action cameras, gaming consoles, projectors, speakers, trekking gear, riding gear, and creator gear. With free home delivery and pickup services, flexible rental tenures, and an easy-to-use platform, renting has never been easier. Experience the freedom to rent what you need, when you need it, without the commitment of buying.
          </p>
        </div>

        {/* Categories on Rent SEO Summary */}
        <div className="sp-footer-seo-top">
          <div className="sp-footer-cat-heading">Categories on Rent</div>
          <a href="#" className="sp-footer-subcat-heading">Action Cameras on Rent</a>
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

        {/* Brand Logo */}
        <div className="sp-footer-brand-row">
          <div className="sp-footer-logo-svg">
            <span style={{ color: '#2563eb', fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.5px' }}>Share</span>
            <span style={{ color: '#9eff00', fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.5px' }}>Pal</span>
          </div>
        </div>

        {/* Footer Navigation Columns */}
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

        {/* Bottom Bar */}
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
