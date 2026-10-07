import React, { useState } from 'react';
import { Plus, Check, Heart, Sparkles } from 'lucide-react';

export default function ProductCard({
  product,
  rentalDates,
  onOpenQuickView,
  onAddToCart,
  isInCart,
  onOpenDateModal
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const isOutOfStock = product.out_of_stock;
  const hasDates = rentalDates && rentalDates.days > 0;
  const days = hasDates ? rentalDates.days : 34; // default rental duration

  // Tiered rental discount calculation
  let discountMultiplier = 1;
  if (days >= 30) discountMultiplier = 0.55;
  else if (days >= 14) discountMultiplier = 0.65;
  else if (days >= 7) discountMultiplier = 0.75;
  else if (days >= 3) discountMultiplier = 0.88;

  const perDayRent = Math.round(product.per_day_rent * discountMultiplier);
  const totalRent = Math.round(perDayRent * days);

  const handleActionClick = (e) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    if (!hasDates) {
      onOpenDateModal(product);
    } else {
      onAddToCart(product);
    }
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const isVoteToLaunch = product.tag && product.tag.toLowerCase().includes('vote');

  return (
    <div 
      className={`sp-clean-product-card ${isOutOfStock ? 'out-of-stock' : ''}`}
      onClick={() => onOpenQuickView(product)}
    >
      {/* Top Bar: Tag on Left, Wishlist Heart on Right */}
      <div className="sp-card-top-bar">
        {product.tag ? (
          <span className={`sp-card-tag-pill ${
            product.tag.toLowerCase().includes('trend') ? 'trending' :
            product.tag.toLowerCase().includes('new') ? 'new' :
            product.tag.toLowerCase().includes('vote') ? 'vote' : ''
          }`}>
            {product.tag}
          </span>
        ) : <div />}

        <button 
          type="button" 
          className="sp-card-heart-btn"
          onClick={handleHeartClick}
          aria-label="Add to wishlist"
        >
          <Heart 
            size={18} 
            color={isWishlisted ? '#ef4444' : '#cbd5e1'} 
            fill={isWishlisted ? '#ef4444' : 'none'} 
            strokeWidth={1.8}
          />
        </button>
      </div>

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

      {/* Special "Vote to Launch" Bottom Card Footer */}
      {isVoteToLaunch ? (
        <div className="sp-card-vote-footer">
          <div className="sp-card-vote-banner">
            <Sparkles size={14} color="#16a34a" />
            <span>We launch if 1k people join the waitlist</span>
          </div>
        </div>
      ) : (
        /* Regular Card Content Footer */
        <div className="sp-clean-card-footer">
          <h3 className="sp-clean-card-title" title={product.name}>
            {product.name}
          </h3>

          <div className="sp-clean-card-price-row">
            <div className="sp-price-col">
              {/* Duration line */}
              <div className="sp-rent-duration-text">
                Rent for <strong>{days}</strong> days
              </div>

              {/* Price line */}
              <div className="sp-rent-amount-text">
                ₹{totalRent.toLocaleString('en-IN')}
              </div>

              {/* GST Inclusive badge */}
              <div className="sp-gst-badge-container">
                <span className="sp-green-gst-tag">Incl. of GST</span>
              </div>
            </div>

            {/* Desktop Circle Plus Button */}
            <button
              type="button"
              className={`sp-circle-plus-btn desktop-only ${isInCart ? 'in-cart' : ''} ${isOutOfStock ? 'disabled' : ''}`}
              onClick={handleActionClick}
              disabled={isOutOfStock}
              aria-label="Add to cart or select dates"
              title={isInCart ? 'In Cart' : 'Rent Now'}
            >
              {isInCart ? <Check size={16} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.2} />}
            </button>
          </div>

          {/* Mobile "Add to Cart" Full Width Button */}
          <button
            type="button"
            className={`sp-mobile-add-btn mobile-only ${isInCart ? 'in-cart' : ''}`}
            onClick={handleActionClick}
            disabled={isOutOfStock}
          >
            <span>{isInCart ? 'Added to Cart ✓' : 'Add to Cart'}</span>
          </button>
        </div>
      )}
    </div>
  );
}
