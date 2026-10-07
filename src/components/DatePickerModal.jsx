import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function DatePickerModal({ isOpen, onClose, onApplyDates, currentDates }) {
  if (!isOpen) return null;

  // Default to today + 1 day for delivery
  const today = new Date();
  const formatInputDate = (d) => d.toISOString().split('T')[0];

  const defaultStart = new Date(today);
  defaultStart.setDate(today.getDate() + 1);

  const defaultEnd = new Date(defaultStart);
  defaultEnd.setDate(defaultStart.getDate() + 3);

  const [startDate, setStartDate] = useState(
    currentDates?.startDate ? currentDates.startDate : formatInputDate(defaultStart)
  );
  const [endDate, setEndDate] = useState(
    currentDates?.endDate ? currentDates.endDate : formatInputDate(defaultEnd)
  );

  // Calculate rental days
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isValid = diffDays >= 2;

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handleApplyPreset = (daysCount) => {
    const s = new Date(startDate || defaultStart);
    const e = new Date(s);
    e.setDate(s.getDate() + daysCount);
    setEndDate(formatInputDate(e));
  };

  const handleConfirm = () => {
    if (!isValid) return;
    onApplyDates({
      startDate,
      endDate,
      days: diffDays,
      startDateFormatted: formatDateDisplay(startDate),
      endDateFormatted: formatDateDisplay(endDate)
    });
    onClose();
  };

  return (
    <div className="sp-modal-backdrop" onClick={onClose}>
      <div className="sp-modal-dialog" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="sp-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px', 
              height: '38px', 
              borderRadius: '50%', 
              background: '#f4ecfc', 
              color: '#4c187c', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}>
              <Calendar size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#111827' }}>Select Rental Dates</h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280' }}>
                Delivery in Bangalore • Zero Security Deposit
              </p>
            </div>
          </div>

          <button type="button" className="sp-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px' }}>
          
          {/* Quick Presets */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Popular Rental Durations
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              <button
                type="button"
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: diffDays === 3 ? '2px solid #4c187c' : '1px solid #e5e7eb',
                  background: diffDays === 3 ? '#faf5ff' : '#fff',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                onClick={() => handleApplyPreset(3)}
              >
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#111827' }}>Weekend Blast (3 Days)</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Perfect for weekend gaming</div>
              </button>

              <button
                type="button"
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: diffDays === 7 ? '2px solid #4c187c' : '1px solid #e5e7eb',
                  background: diffDays === 7 ? '#faf5ff' : '#fff',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                onClick={() => handleApplyPreset(7)}
              >
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#111827' }}>
                  1 Week (7 Days) <span style={{ color: '#10b981', fontSize: '0.75rem' }}>Save 25%</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Most popular choice</div>
              </button>

              <button
                type="button"
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: diffDays === 14 ? '2px solid #4c187c' : '1px solid #e5e7eb',
                  background: diffDays === 14 ? '#faf5ff' : '#fff',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                onClick={() => handleApplyPreset(14)}
              >
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#111827' }}>
                  2 Weeks (14 Days) <span style={{ color: '#10b981', fontSize: '0.75rem' }}>Save 35%</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Vacation & holidays</div>
              </button>

              <button
                type="button"
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: diffDays === 30 ? '2px solid #4c187c' : '1px solid #e5e7eb',
                  background: diffDays === 30 ? '#faf5ff' : '#fff',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                onClick={() => handleApplyPreset(30)}
              >
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#111827' }}>
                  1 Month (30 Days) <span style={{ color: '#10b981', fontSize: '0.75rem' }}>Save 45%</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Unbeatable per-day rate</div>
              </button>
            </div>
          </div>

          {/* Date Range Inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                Delivery Date (Between 10 AM - 6 PM)
              </label>
              <input
                type="date"
                min={formatInputDate(today)}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #d1d5db',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                Pickup / Return Date
              </label>
              <input
                type="date"
                min={startDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #d1d5db',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          {/* Duration Summary */}
          {isValid ? (
            <div style={{
              background: '#ecfdf5',
              border: '1px solid #10b981',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <CheckCircle2 size={20} color="#10b981" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#065f46' }}>
                  {diffDays} Days Rental Selected
                </div>
                <div style={{ fontSize: '0.78rem', color: '#047857' }}>
                  Delivery: {formatDateDisplay(startDate)} • Pickup: {formatDateDisplay(endDate)}
                </div>
              </div>
            </div>
          ) : (
            <div style={{
              background: '#fef2f2',
              border: '1px solid #ef4444',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <AlertCircle size={20} color="#ef4444" />
              <div style={{ fontSize: '0.85rem', color: '#991b1b', fontWeight: 600 }}>
                Minimum rental period is 2 days. Please choose a later return date.
              </div>
            </div>
          )}

          {/* Confirm Button */}
          <button
            type="button"
            className="sp-btn-rent-now"
            style={{ width: '100%', padding: '14px', borderRadius: '9999px', fontSize: '1rem' }}
            disabled={!isValid}
            onClick={handleConfirm}
          >
            Confirm Rental Dates ({diffDays} Days)
          </button>

        </div>

      </div>
    </div>
  );
}
