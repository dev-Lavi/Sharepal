import React from 'react';
import { Plus, Check } from 'lucide-react';

export default function ProductCard({
  product,
  rentalDates,
  onOpenQuickView,
  onAddToCart,
  isInCart,
  onOpenDateModal
}) {
  const isOutOfStock = product.out_of_stock;
  const hasDates = rentalDates && rentalDates.days > 0;
  const days = hasDates ? rentalDates.days : 1;

  // Tiered rental discount calculation
  let discountMultiplier = 1;
  if (days >= 30) discountMultiplier = 0.55;
  else if (days >= 14) discountMultiplier = 0.65;
  else if (days >= 7) discountMultiplier = 0.75;
  else if (days >= 3) discountMultiplier = 0.88;

  const effectivePerDay = Math.round(product.per_day_rent * discountMultiplier);

  const handlePlusClick = (e) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    if (!hasDates) {
      onOpenDateModal(product);
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div 
      className={`sp-clean-product-card ${isOutOfStock ? 'out-of-stock' : ''}`}
      onClick={() => onOpenQuickView(product)}
    >
      {/* Status Badge: Trending in Orange outline, New in Blue outline as shown in images */}
      {product.tag && (
        <div className="sp-card-badge-container">
          <span className={`sp-card-tag-pill ${
            product.tag.toLowerCase().includes('trend') ? 'trending' :
            product.tag.toLowerCase().includes('new') ? 'new' : 'vote'
          }`}>
            {product.tag}
          </span>
        </div>
      )}

      {isOutOfStock && (
        <span className="sp-card-tag-pill out-of-stock-pill">Out of Stock</span>
      )}

      {/* Centered Product Image */}
      <div className="sp-card-img-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="sp-clean-card-img"
          loading="lazy"
        />
      </div>

      {/* Card Content Footer */}
      <div className="sp-clean-card-footer">
        <h3 className="sp-clean-card-title" title={product.name}>
          {product.name}
        </h3>

        <div className="sp-clean-card-price-row">
          <div className="sp-price-col">
            {hasDates ? (
              <>
                <span className="sp-clean-price-amount">₹{effectivePerDay}</span>
                <span className="sp-clean-price-unit"> / day</span>
              </>
            ) : (
              <span className="sp-select-dates-label">Select Dates to view price</span>
            )}
          </div>

          {/* Plus Circle Button as shown in Image 3 */}
          <button
            type="button"
            className={`sp-circle-plus-btn ${isInCart ? 'in-cart' : ''} ${isOutOfStock ? 'disabled' : ''}`}
            onClick={handlePlusClick}
            disabled={isOutOfStock}
            aria-label="Add to cart or select dates"
            title={isInCart ? 'In Cart' : 'Rent Now'}
          >
            {isInCart ? <Check size={16} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.2} />}
          </button>
        </div>
      </div>
    </div>
  );
}
