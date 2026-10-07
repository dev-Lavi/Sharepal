import React from 'react';

/* ================= BANNER 1: GAMING CONSOLES BANNER ================= */
export function GamingBanner() {
  return (
    <div className="sp-banner-slide-standalone sp-banner-gaming">
      <div className="sp-banner-gaming-left desktop-only">
        <img 
          src="https://images.sharepal.in/super-categories/gaming-left.webp" 
          alt="Xbox and Gaming Consoles" 
          className="sp-banner-art-left"
        />
      </div>

      <div className="sp-banner-gaming-center">
        <h1 className="sp-banner-gaming-title">Gaming Consoles</h1>
        <p className="sp-banner-gaming-sub">
          Rent the latest gaming gadgets from <span className="sp-brand-inline">Share<span style={{ color: '#9EFF00' }}>Pal</span></span>
          {' '}PS5, Xbox, Oculus VR, Racing Wheel on rent.
        </p>

        {/* Brand Partner Logos */}
        <div className="sp-gaming-logos-row">
          <img 
            src="https://images.sharepal.in/super-categories-brand-logos/gaming/XBOX.svg" 
            alt="XBOX" 
            className="sp-brand-svg-logo"
          />
          <span className="sp-brand-logo-sep">|</span>
          <img 
            src="https://images.sharepal.in/super-categories-brand-logos/gaming/PS5.svg" 
            alt="PlayStation 5" 
            className="sp-brand-svg-logo"
          />
          <span className="sp-brand-logo-sep">|</span>
          <div className="sp-brand-meta-item">
            <svg viewBox="0 0 32 18" width="20" height="13" fill="#ffffff">
              <path d="M16 8.5C14.2 4.8 11.5 2 8 2 3.6 2 0 5.6 0 10s3.6 8 8 8c3.5 0 6.2-2.8 8-6.5 1.8 3.7 4.5 6.5 8 6.5 4.4 0 8-3.6 8-8s-3.6-8-8-8c-3.5 0-6.2 2.8-8 6.5zm-8 7C4.7 15.5 2 13 2 10s2.7-5.5 6-5.5c2.6 0 4.8 2.2 6.3 5.5-1.5 3.3-3.7 5.5-6.3 5.5zm16 0c-2.6 0-4.8-2.2-6.3-5.5 1.5-3.3 3.7-5.5 6.3-5.5 3.3 0 6 2.5 6 5.5s-2.7 5.5-6 5.5z"/>
            </svg>
            <span className="sp-brand-meta-text">Meta</span>
          </div>
        </div>
      </div>

      <div className="sp-banner-gaming-right">
        <img 
          src="https://images.sharepal.in/super-categories/gaming-right.webp" 
          alt="PS5, VR Headset and Kratos" 
          className="sp-banner-art-right"
        />
      </div>
    </div>
  );
}

/* ================= BANNER 2: ASSET PARTNER BANNER ================= */
export function AssetPartnerBanner() {
  return (
    <div className="sp-static-banner-card">
      <img 
        src="/assets-fund-banner.webp" 
        alt="Become an Asset Partner. Earn Monthly." 
        className="sp-static-banner-img"
      />
    </div>
  );
}

/* ================= BANNER 3: EWS / EARN WITH SHAREPAL BANNER ================= */
export function RentOutBanner() {
  return (
    <div className="sp-static-banner-card">
      <img 
        src="/ews-generic-banner-desktop.webp" 
        alt="Earn With SharePal" 
        className="sp-static-banner-img"
      />
    </div>
  );
}

export default GamingBanner;
