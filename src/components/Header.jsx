import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Search, 
  ShoppingCart, 
  User, 
  ChevronDown 
} from 'lucide-react';

export default function Header({ 
  currentCity, 
  onOpenCityModal, 
  onOpenDateModal, 
  rentalDates, 
  cartCount, 
  onOpenCart,
  onOpenSearch
}) {
  const hasDates = rentalDates && rentalDates.days > 0;

  return (
    <header className="sp-header">
      <div className="sp-container">
        <div className="sp-header-inner">
          
          {/* Exact SharePal Logo with Royal Blue Background as shown in Image 1 */}
          <a href="#" className="sp-logo-wrapper" aria-label="SharePal Home">
            <div className="sp-logo-blue-badge">
              <span className="sp-logo-share">Share</span>
              <span className="sp-logo-pal">Pal</span>
            </div>
          </a>

          {/* Center Location & Date Selector Bar */}
          <div className="sp-header-center-pill">
            <button 
              type="button" 
              className="sp-city-btn"
              onClick={onOpenCityModal}
              title="Change Delivery City"
            >
              <MapPin size={16} />
              <span>{currentCity.name}</span>
              <ChevronDown size={14} />
            </button>

            <div 
              className="sp-dates-preview"
              onClick={onOpenDateModal}
              title="Configure Rental Dates"
            >
              <div className="sp-date-badge-slot">
                <Calendar size={15} />
                <span>{hasDates ? rentalDates.startDateFormatted : 'Delivery Date'}</span>
              </div>
              <span className="sp-dates-divider"></span>
              <div className="sp-date-badge-slot">
                <Calendar size={15} />
                <span>{hasDates ? rentalDates.endDateFormatted : 'Pickup Date'}</span>
              </div>
            </div>

            <button 
              type="button" 
              className="sp-date-action-btn"
              onClick={onOpenDateModal}
            >
              <Calendar size={14} />
              <span>Select</span>
            </button>
          </div>

          {/* Right Header Icons as shown in Image 1: Search, Cart, Profile */}
          <div className="sp-header-right">
            {/* Search Icon */}
            <button 
              type="button" 
              className="sp-icon-btn-clean"
              onClick={onOpenSearch}
              aria-label="Search Catalog"
              title="Search"
            >
              <Search size={22} color="#ffffff" strokeWidth={2.2} />
            </button>

            {/* Shopping Cart Icon with Badge */}
            <button 
              type="button" 
              className="sp-icon-btn-clean"
              onClick={onOpenCart}
              aria-label="View Rental Cart"
              title="Cart"
            >
              <ShoppingCart size={22} color="#ffffff" strokeWidth={2.2} />
              {cartCount > 0 && (
                <span className="sp-cart-count-badge">{cartCount}</span>
              )}
            </button>

            {/* User Profile Pill */}
            <div className="sp-user-profile-pill">
              <div className="sp-user-avatar-circle">
                <User size={18} color="#4C187C" />
              </div>
              <span className="desktop-only" style={{ color: '#ffffff', fontWeight: 600 }}>Hi, Login</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
