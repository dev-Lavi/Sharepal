import React from 'react';

/* ================= BANNER 1: GAMING CONSOLES BANNER ================= */
export function GamingBanner() {
  return (
    <div className="sp-banner-slide-standalone sp-banner-gaming">
      <div className="sp-banner-gaming-left">
        <img 
          src="https://images.sharepal.in/super-categories/gaming-left.webp" 
          alt="Xbox and Gaming Consoles" 
          className="sp-banner-art"
        />
      </div>

      <div className="sp-banner-gaming-center">
        <h1 className="sp-banner-gaming-title">Gaming Consoles</h1>
        <p className="sp-banner-gaming-sub">
          Rent the latest gaming gadgets from <span className="sp-brand-inline">Share<span style={{ color: '#9EFF00' }}>Pal</span></span>
          {' '}PS5, Xbox, Oculus VR, Racing Wheel on rent.
        </p>

        {/* Official Brand SVGs: XBOX | PS5 | Sony */}
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
          <img 
            src="https://images.sharepal.in/super-categories-brand-logos/gaming/Sony.svg" 
            alt="Sony" 
            className="sp-brand-svg-logo"
          />
        </div>
      </div>

      <div className="sp-banner-gaming-right">
        <img 
          src="https://images.sharepal.in/super-categories/gaming-right.webp" 
          alt="PS5 and VR Headset" 
          className="sp-banner-art"
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
