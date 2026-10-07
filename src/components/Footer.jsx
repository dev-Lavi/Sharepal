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

const footerCategoryGroups = [
  {
    title: 'Action Cameras',
    items: ['Action Cameras', 'Pocket Cameras', 'GoPro Cameras', 'DJI Cameras', 'DJI Drones', '360 Cameras']
  },
  {
    title: 'Cameras',
    items: ['DSLR Cameras', 'Cameras', 'iPhones', 'DSLR Gimbal Combos', 'Wildlife Photography', 'Tripod and camera accessories', 'DSLR Lens']
  },
  {
    title: 'Trekking Gear',
    items: ['Trekking Gear', 'Trekking Jackets', 'Trek/Snow Pants', 'Trekking Shoes', 'Trek Accessories']
  },
  {
    title: 'Riding Gear',
    items: ['Riding Gear', 'Riding Luggage', 'Riding Jackets', 'Riding Essentials', 'Riding Boots', 'Binoculars']
  },
  {
    title: 'Creator Gear',
    items: ['Wireless & Collar Mics', 'Professional Cameras', 'Mirrorless Cameras', 'UNLMTD Vlogging', 'Mobile Gimbals', 'Vlogging']
  },
  {
    title: 'Gaming Console',
    items: ['PS5 Console', 'VR', 'Racing Wheel', 'Big Screen Gaming', 'Xbox Console']
  },
  {
    title: 'Winter Wear',
    items: ['Snow Boots', 'Winter Jackets', 'Backpacks']
  },
  {
    title: 'Camping Gear',
    items: ['Camping Gear', 'Camping Stools & Tables', 'Camping Tents', 'Sleeping Bags & Mats']
  },
  {
    title: 'Audio Visual Equipment',
    items: ['Projectors', 'VR', 'Mics', 'Speakers']
  }
];

export default function Footer() {
  const [readMore, setReadMore] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState('Cameras'); // 'Cameras' open by default matching reference

  const toggleMobileGroup = (title) => {
    setOpenMobileGroup(openMobileGroup === title ? null : title);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sp-website-footer">
      <div className="sp-container">

        {/* ── 1. DESKTOP: CATEGORY MEGA-GRID (5 COLUMNS) ── */}
        <div className="sp-footer-mega-grid desktop-only">
          {footerCategoryGroups.map((group) => (
            <div key={group.title} className="sp-footer-mega-col">
              <h4 className="sp-footer-mega-title">{group.title}</h4>
              <ul className="sp-footer-mega-list">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── 1B. MOBILE: CATEGORY ACCORDIONS ── */}
        <div className="sp-footer-accordions-mobile mobile-only">
          {footerCategoryGroups.map((group) => {
            const isOpen = openMobileGroup === group.title;
            return (
              <div key={group.title} className="sp-footer-accordion-card">
                <button
                  type="button"
                  className="sp-footer-accordion-header"
                  onClick={() => toggleMobileGroup(group.title)}
                  aria-expanded={isOpen}
                >
                  <span>{group.title}</span>
                  {isOpen ? (
                    <ChevronUp size={18} color="#94A3B8" />
                  ) : (
                    <ChevronDown size={18} color="#94A3B8" />
                  )}
                </button>
                {isOpen && (
                  <div className="sp-footer-accordion-content">
                    {group.items.map((item) => (
                      <a key={item} href="#">{item}</a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── 2. "RENTING FROM SHAREPAL IN BANGALORE" ── */}
        <div className="sp-footer-city-description">
          <a href="#" className="sp-footer-city-heading">Renting from SharePal in Bangalore</a>
          <p className="sp-footer-city-text">
            Discover the convenience of renting from SharePal, your trusted partner in Bangalore for all your rental needs. Whether you're exploring the vibrant streets of Koramangala, setting up a shoot in Indiranagar, or planning a trek from the outskirts of Whitefield, SharePal has you covered. We offer a wide range of products, including cameras, action cameras, gaming consoles, projectors, speakers, trekking gear, riding gear, and creator gear. With free home delivery and pickup services, flexible rental tenures, and an easy-to-use platform, renting has never been easier. Experience the freedom to rent what you need, when you need it, without the commitment of buying.
          </p>
        </div>

        {/* ── 3. CATEGORIES ON RENT SEO SUMMARY ── */}
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

        {/* ── 4. BRAND LOGO BAR ── */}
        <div className="sp-footer-brand-row">
          <div className="sp-footer-brand-bar">
            <span className="sp-footer-brand-share">Share</span>
            <span className="sp-footer-brand-pal">Pal</span>
          </div>
        </div>

        {/* ── 5. 5 FOOTER NAVIGATION COLUMNS ── */}
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
              <li><a href="#">How It works?</a></li>
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
              <li><a href="#">Privacy Policy</a></li>
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

        {/* ── 6. BOTTOM BAR ── */}
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
