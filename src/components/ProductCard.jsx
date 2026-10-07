import React, { useState } from 'react';
import { Star, Eye, ShoppingBag, ThumbsUp, Check } from 'lucide-react';

export default function ProductCard({
  product,
  rentalDates,
  onOpenQuickView,
  onAddToCart,
  isInCart,
  onOpenDateModal
}) {
  const [votes, setVotes] = useState(product.booked_count || 10000);
  const [hasVoted, setHasVoted] = useState(false);

  const isVoteProduct = product.tag === 'Vote to Launch';
  const isOutOfStock = product.out_of_stock;

  // Pricing calculations
  const basePerDay = product.per_day_rent;
  const days = rentalDates && rentalDates.days > 0 ? rentalDates.days : 1;
  
  // SharePal tiered rental discount logic (longer duration = lower effective per-day)
  let discountMultiplier = 1;
  if (days >= 30) discountMultiplier = 0.55;
  else if (days >= 14) discountMultiplier = 0.65;
  else if (days >= 7) discountMultiplier = 0.75;
  else if (days >= 3) discountMultiplier = 0.88;

  const effectivePerDay = Math.round(basePerDay * discountMultiplier);
  const totalPrice = effectivePerDay * days;

  const handleVote = (e) => {
    e.stopPropagation();
    if (!hasVoted) {
      setVotes(v => v + 1);
      setHasVoted(true);
    }
  };

  const handleAction = (e) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    if (isVoteProduct) {
      handleVote(e);
      return;
    }

    if (!rentalDates || rentalDates.days <= 0) {
      onOpenDateModal(product);
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div className={`sp-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
      
      {/* Media Wrapper */}
      <div className="sp-card-media-wrapper" onClick={() => onOpenQuickView(product)}>
        
        {/* Badges */}
        {product.tag && (
          <span className={`sp-badge-tag ${
            product.tag === 'Trending' ? 'sp-badge-trending' :
            product.tag === 'New' ? 'sp-badge-new' :
            'sp-badge-vote'
          }`}>
            {product.tag}
          </span>
        )}

        {isOutOfStock && (
          <span className="sp-out-of-stock-pill">Out of Stock</span>
        )}

        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="sp-card-img" 
          loading="lazy" 
        />

        {/* Quick View Button on Hover */}
        <button
          type="button"
          className="sp-card-quickview-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenQuickView(product);
          }}
        >
          <Eye size={14} />
          <span>Quick View</span>
        </button>
      </div>

      {/* Body Content */}
      <div className="sp-card-body">
        
        {/* Rating and Booking Velocity */}
        <div className="sp-card-social-proof">
          {product.rating > 0 ? (
            <div className="sp-card-rating">
              <Star size={13} fill="#f59e0b" color="#f59e0b" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          ) : (
            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>New Arrival</span>
          )}

          <div className="sp-card-booked">
            <span>{isVoteProduct ? `${votes.toLocaleString()} votes` : `${product.booked_count} booked`}</span>
          </div>
        </div>

        {/* Title */}
        <h3 
          className="sp-card-title" 
          title={product.name}
          onClick={() => onOpenQuickView(product)}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h3>

        {/* Pricing Display */}
        <div className="sp-card-pricing-row">
          <div>
            <span className="sp-rent-label">Rent from</span>
            <div className="sp-rent-price-box">
              <span className="sp-rent-amount">₹{effectivePerDay}</span>
              <span className="sp-rent-unit">/ day</span>
            </div>
          </div>

          {days > 1 && (
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.72rem', color: '#6b7280' }}>Total for {days} days</span>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#4c187c' }}>
                ₹{totalPrice.toLocaleString()}
              </div>
            </div>
          )}
        </div>

        {/* Card CTA Button */}
        {isOutOfStock ? (
          <button type="button" className="sp-card-action-btn sp-btn-out-of-stock" disabled>
            Out of Stock
          </button>
        ) : isVoteProduct ? (
          <button 
            type="button" 
            className="sp-card-action-btn sp-btn-vote"
            onClick={handleVote}
          >
            <ThumbsUp size={16} />
            <span>{hasVoted ? 'Voted! 🎉' : 'Vote to Launch'}</span>
          </button>
        ) : isInCart ? (
          <button 
            type="button" 
            className="sp-card-action-btn sp-btn-in-cart"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            <Check size={16} />
            <span>In Cart (Add More)</span>
          </button>
        ) : (
          <button 
            type="button" 
            className="sp-card-action-btn sp-btn-rent-now"
            onClick={handleAction}
          >
            <ShoppingBag size={16} />
            <span>{rentalDates && rentalDates.days > 0 ? 'Rent Now' : 'Select Dates'}</span>
          </button>
        )}

      </div>
    </div>
  );
}
