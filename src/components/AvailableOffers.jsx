import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const offersData = [
  {
    id: 1,
    discountBadge: '10% OFF',
    code: 'SHAREPAL',
    description: 'Use code SHAREPAL & get 10% off on orders above ₹1500. Maximum discount: ₹300'
  },
  {
    id: 2,
    discountBadge: '15% OFF',
    code: 'EARLYBIRD15',
    description: 'Use code EARLYBIRD15 & get 15% off up to ₹500. Valid on order above ₹1500, booked 15 days in advance'
  },
  {
    id: 3,
    discountBadge: '20% OFF',
    code: 'EARLYBIRD20',
    description: 'Use code EARLYBIRD20 & get 20% off up to ₹700. Valid on order above ₹1500, booked 20 days in advance'
  }
];

export default function AvailableOffers() {
  return (
    <div className="sp-available-offers-card">
      <div className="sp-offers-header">
        <h3 className="sp-offers-title">Available Offers (3 Offers)</h3>
        <div className="sp-offers-nav-arrows">
          <button type="button" className="sp-offer-arrow-btn" aria-label="Previous Offer">
            <ChevronLeft size={16} color="#6B7280" />
          </button>
          <button type="button" className="sp-offer-arrow-btn" aria-label="Next Offer">
            <ChevronRight size={16} color="#6B7280" />
          </button>
        </div>
      </div>

      <div className="sp-offers-grid">
        {offersData.map((offer) => (
          <div key={offer.id} className="sp-offer-ticket">
            {/* Left Vertical Ribbon */}
            <div className="sp-ticket-ribbon">
              <span className="sp-ticket-ribbon-text">{offer.discountBadge}</span>
            </div>

            {/* Middle Ticket Content */}
            <div className="sp-ticket-content">
              <strong className="sp-ticket-code">{offer.code}</strong>
              <p className="sp-ticket-desc">{offer.description}</p>
            </div>

            {/* Right Silver Coin / Token */}
            <div className="sp-ticket-coin-wrapper">
              <div className="sp-silver-coin">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="url(#silverGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
                  <path d="M12 7L13.5 10.5L17 12L13.5 13.5L12 17L10.5 13.5L7 12L10.5 10.5L12 7Z" fill="#94A3B8" />
                  <defs>
                    <linearGradient id="silverGrad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1F5F9" />
                      <stop offset="0.5" stopColor="#E2E8F0" />
                      <stop offset="1" stopColor="#CBD5E1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
