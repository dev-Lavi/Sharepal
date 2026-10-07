import React from 'react';
import ProductCard from './ProductCard';
import { Calendar, RefreshCw } from 'lucide-react';

export default function ProductGrid({
  products,
  rentalDates,
  onOpenQuickView,
  onAddToCart,
  cartItems,
  onOpenDateModal,
  onResetFilters
}) {
  const isDateActive = rentalDates && rentalDates.days > 0;

  return (
    <div>
      {/* Active Duration Dynamic Pricing Banner */}
      {isDateActive && (
        <div className="sp-duration-active-banner">
          <div className="sp-banner-left">
            <div className="sp-banner-icon">
              <Calendar size={20} />
            </div>
            <div className="sp-banner-text">
              <strong>
                Active Rental Period: {rentalDates.startDateFormatted} to {rentalDates.endDateFormatted} ({rentalDates.days} Days)
              </strong>
              <p>
                Special Tiered Discount Applied! Enjoy up to 45% lower effective per-day rental rates.
              </p>
            </div>
          </div>
          <button 
            type="button" 
            className="sp-banner-change-btn"
            onClick={() => onOpenDateModal()}
          >
            Change Rental Dates
          </button>
        </div>
      )}

      {/* Grid or Empty State */}
      {products.length === 0 ? (
        <div className="sp-empty-catalog">
          <h3>No matching gaming gear found</h3>
          <p>Try modifying your search query or reset filter options to view available consoles.</p>
          <button
            type="button"
            className="sp-btn-rent-now"
            style={{ margin: '0 auto', padding: '10px 24px', display: 'inline-flex' }}
            onClick={onResetFilters}
          >
            <RefreshCw size={16} />
            <span>Reset All Filters</span>
          </button>
        </div>
      ) : (
        <div className="sp-product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              rentalDates={rentalDates}
              onOpenQuickView={onOpenQuickView}
              onAddToCart={onAddToCart}
              isInCart={cartItems.some(item => item.id === product.id)}
              onOpenDateModal={onOpenDateModal}
            />
          ))}
        </div>
      )}
    </div>
  );
}
