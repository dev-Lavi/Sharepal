import React from 'react';
import { ShieldCheck, Truck, Sparkles, CreditCard } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="sp-hero-section">
      <div className="sp-container">
        <div className="sp-hero-container">
          
          {/* Authentic Left Controller Graphic */}
          <img 
            src="https://images.sharepal.in/super-categories/gaming-left.webp" 
            alt="PS5 DualSense Controller Left" 
            className="sp-hero-left-art"
            loading="eager"
          />

          {/* Centered Hero Content */}
          <div className="sp-hero-content">
            <h1 className="sp-hero-title">Gaming Consoles</h1>
            <p className="sp-hero-subtitle">
              Rent the latest gaming gadgets from PS5, Xbox, Oculus VR, Racing Wheel on rent in Bangalore.
            </p>

            <div className="sp-hero-trust-badges">
              <div className="sp-trust-chip">
                <ShieldCheck size={16} />
                <span>Zero Deposit Rentals</span>
              </div>
              <div className="sp-trust-chip">
                <Truck size={16} />
                <span>Free Doorstep Delivery</span>
              </div>
              <div className="sp-trust-chip">
                <Sparkles size={16} />
                <span>Sanitized & Tested Gear</span>
              </div>
              <div className="sp-trust-chip">
                <CreditCard size={16} />
                <span>Pay on Delivery</span>
              </div>
            </div>
          </div>

          {/* Authentic Right Controller Graphic */}
          <img 
            src="https://images.sharepal.in/super-categories/gaming-right.webp" 
            alt="Gaming Controller Right" 
            className="sp-hero-right-art"
            loading="eager"
          />

        </div>
      </div>
    </section>
  );
}
