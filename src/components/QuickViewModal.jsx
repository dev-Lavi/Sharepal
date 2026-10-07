import React from 'react';
import { X, Star, CheckCircle, Shield, Truck, Calendar, ShoppingBag } from 'lucide-react';

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
  rentalDates,
  onAddToCart,
  isInCart,
  onOpenDateModal
}) {
  if (!isOpen || !product) return null;

  const days = rentalDates && rentalDates.days > 0 ? rentalDates.days : 1;
  const isOutOfStock = product.out_of_stock;

  let discountMultiplier = 1;
  if (days >= 30) discountMultiplier = 0.55;
  else if (days >= 14) discountMultiplier = 0.65;
  else if (days >= 7) discountMultiplier = 0.75;
  else if (days >= 3) discountMultiplier = 0.88;

  const effectivePerDay = Math.round(product.per_day_rent * discountMultiplier);
  const totalPrice = effectivePerDay * days;

  return (
    <div className="sp-modal-backdrop" onClick={onClose}>
      <div className="sp-modal-dialog" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="sp-modal-header">
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>Product Overview</h3>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280' }}>
              SharePal Bangalore Lifestyle & Gaming Gadgets
            </p>
          </div>
          <button type="button" className="sp-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '24px', alignItems: 'start' }}>
            
            {/* Left Media */}
            <div style={{
              background: '#f9fafb',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e5e7eb'
            }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', maxHeight: '240px', objectFit: 'contain' }}
              />
            </div>

            {/* Right Information */}
            <div>
              {product.tag && (
                <span className={`sp-badge-tag ${
                  product.tag === 'Trending' ? 'sp-badge-trending' :
                  product.tag === 'New' ? 'sp-badge-new' :
                  'sp-badge-vote'
                }`} style={{ position: 'static', display: 'inline-block', marginBottom: '8px' }}>
                  {product.tag}
                </span>
              )}

              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111827', lineHeight: 1.3, marginBottom: '8px' }}>
                {product.name}
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '0.85rem' }}>
                {product.rating > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#fef3c7', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <span>{product.rating.toFixed(1)}</span>
                  </div>
                )}
                <span style={{ color: '#6b7280' }}>{product.booked_count} orders served in Bangalore</span>
              </div>

              {/* Inclusions checklist */}
              <div style={{ background: '#f8f9fa', padding: '12px 14px', borderRadius: '12px', marginBottom: '16px', fontSize: '0.82rem' }}>
                <div style={{ fontWeight: 700, color: '#374151', marginBottom: '6px' }}>Kit Inclusions:</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', color: '#4b5563' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="#10b981" /> Original Sony / Microsoft Gaming Hardware
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="#10b981" /> High-Speed HDMI 2.1 & AC Power Cable
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="#10b981" /> Sanitized, Tested & Sealed with QC Sticker
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="#10b981" /> 100+ Games Access or Requested Digital Titles
                  </li>
                </ul>
              </div>

              {/* Pricing breakdown */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '18px' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#4c187c' }}>₹{effectivePerDay}</span>
                <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>/ day</span>
                {days > 1 && (
                  <span style={{ marginLeft: 'auto', fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>
                    Total: ₹{totalPrice.toLocaleString()} ({days} Days)
                  </span>
                )}
              </div>

              {/* Action */}
              {isOutOfStock ? (
                <button type="button" className="sp-btn-out-of-stock" style={{ width: '100%', padding: '12px' }} disabled>
                  Currently Out of Stock
                </button>
              ) : (
                <button
                  type="button"
                  className="sp-btn-rent-now"
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => {
                    if (!rentalDates || rentalDates.days <= 0) {
                      onClose();
                      onOpenDateModal(product);
                    } else {
                      onAddToCart(product);
                      onClose();
                    }
                  }}
                >
                  <ShoppingBag size={18} />
                  <span>{rentalDates && rentalDates.days > 0 ? 'Add to Rental Cart' : 'Select Rental Dates'}</span>
                </button>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
