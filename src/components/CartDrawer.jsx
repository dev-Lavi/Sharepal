import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, Tag, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  rentalDates,
  onUpdateQuantity,
  onRemoveItem,
  onOpenDateModal
}) {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const days = rentalDates && rentalDates.days > 0 ? rentalDates.days : 1;

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, item) => {
    let multiplier = 1;
    if (days >= 30) multiplier = 0.55;
    else if (days >= 14) multiplier = 0.65;
    else if (days >= 7) multiplier = 0.75;
    else if (days >= 3) multiplier = 0.88;

    const effective = Math.round(item.per_day_rent * multiplier);
    return acc + (effective * days * item.quantity);
  }, 0);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'SHAREPAL100') {
      setAppliedDiscount(100);
      setCouponSuccess(true);
    } else if (couponCode.trim().toUpperCase() === 'GAMER10') {
      setAppliedDiscount(Math.round(subtotal * 0.10));
      setCouponSuccess(true);
    } else {
      alert('Try coupon code: SHAREPAL100 or GAMER10');
    }
  };

  const finalTotal = Math.max(0, subtotal - appliedDiscount);

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

  return (
    <div className="sp-drawer-backdrop" onClick={onClose}>
      <div className="sp-cart-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Drawer Header */}
        <div className="sp-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="#4c187c" />
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#111827' }}>
              Your Rental Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})
            </h3>
          </div>
          <button type="button" className="sp-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="sp-drawer-body">
          {checkoutComplete ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <ShieldCheck size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                Rental Request Submitted! 🎉
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '24px' }}>
                Our Bangalore operations hub in Indiranagar has received your gaming console order. We will reach out shortly for doorstep delivery coordination.
              </p>
              <button
                type="button"
                className="sp-btn-rent-now"
                style={{ width: '100%', padding: '12px' }}
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
              >
                Continue Browsing
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6b7280' }}>
              <ShoppingBag size={48} color="#d1d5db" style={{ margin: '0 auto 12px auto' }} />
              <h4 style={{ color: '#111827', fontSize: '1.1rem', marginBottom: '4px' }}>Your Cart is Empty</h4>
              <p style={{ fontSize: '0.85rem' }}>Browse our PS5, Xbox & VR consoles to begin your rental.</p>
            </div>
          ) : (
            <div>
              
              {/* Rental Dates Summary Card */}
              <div style={{
                background: '#faf5ff',
                border: '1px solid #d8b4fe',
                borderRadius: '12px',
                padding: '12px 14px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Rental Tenure</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#4c187c' }}>
                    {rentalDates ? `${rentalDates.startDateFormatted} - ${rentalDates.endDateFormatted} (${days} Days)` : 'Dates Not Selected'}
                  </div>
                </div>
                <button
                  type="button"
                  style={{ fontSize: '0.8rem', color: '#4c187c', fontWeight: 700, textDecoration: 'underline' }}
                  onClick={onOpenDateModal}
                >
                  Change
                </button>
              </div>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px',
                      background: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px'
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '70px', height: '70px', objectFit: 'contain', background: '#f9fafb', borderRadius: '8px' }}
                    />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>
                          {item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          style={{ color: '#ef4444', padding: '2px' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #d1d5db', borderRadius: '6px', padding: '2px 6px' }}>
                          <button 
                            type="button" 
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            style={{ color: '#4b5563' }}
                          >
                            <Minus size={13} />
                          </button>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>{item.quantity}</span>
                          <button 
                            type="button" 
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            style={{ color: '#4b5563' }}
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#4c187c' }}>
                            ₹{(Math.round(item.per_day_rent * (days >= 7 ? 0.75 : 1)) * days * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Applicator */}
              <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. SHAREPAL100)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #d1d5db',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: '#111827',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.82rem'
                  }}
                >
                  Apply
                </button>
              </form>

              {couponSuccess && (
                <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600, marginBottom: '16px' }}>
                  ✓ Coupon applied successfully! ₹{appliedDiscount} discount saved.
                </div>
              )}

              {/* Trust Callout */}
              <div style={{
                background: '#ecfdf5',
                borderRadius: '8px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: '#065f46'
              }}>
                <ShieldCheck size={18} color="#10b981" />
                <span><strong>₹0 Security Deposit!</strong> Verified Bangalore delivery.</span>
              </div>

            </div>
          )}
        </div>

        {/* Drawer Footer with Price Breakdown */}
        {cartItems.length > 0 && !checkoutComplete && (
          <div className="sp-drawer-footer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b7280' }}>
                <span>Rental Subtotal ({days} Days)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              {appliedDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981', fontWeight: 600 }}>
                  <span>Discount Code</span>
                  <span>- ₹{appliedDiscount.toLocaleString()}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b7280' }}>
                <span>Refundable Deposit</span>
                <span style={{ color: '#10b981', fontWeight: 700 }}>₹0 (Zero Deposit)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b7280' }}>
                <span>Doorstep Delivery & Pickup</span>
                <span style={{ color: '#10b981', fontWeight: 700 }}>FREE</span>
              </div>
              <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                fontWeight: 800, 
                fontSize: '1.15rem', 
                color: '#111827',
                borderTop: '1px solid #e5e7eb',
                paddingTop: '8px',
                marginTop: '4px'
              }}>
                <span>Total Amount</span>
                <span>₹{finalTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              className="sp-btn-rent-now"
              style={{ width: '100%', padding: '14px', borderRadius: '9999px', fontSize: '0.96rem' }}
              onClick={handleCheckout}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
