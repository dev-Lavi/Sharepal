import React from 'react';
import { X, MapPin, CheckCircle } from 'lucide-react';
import { cities } from '../data/products';

export default function CityModal({ isOpen, onClose, currentCity, onSelectCity }) {
  if (!isOpen) return null;

  return (
    <div className="sp-modal-backdrop" onClick={onClose}>
      <div className="sp-modal-dialog" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="sp-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MapPin size={22} color="#4c187c" />
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#111827' }}>Select Delivery City</h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280' }}>
                Delivery slots, product inventory and hubs vary by city
              </p>
            </div>
          </div>
          <button type="button" className="sp-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Cities Grid */}
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {cities.map((city) => {
              const isSelected = city.id === currentCity.id;

              return (
                <div
                  key={city.id}
                  onClick={() => {
                    onSelectCity(city);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: isSelected ? '2px solid #4c187c' : '1px solid #e5e7eb',
                    background: isSelected ? '#faf5ff' : '#fff',
                    cursor: 'pointer',
                    transition: 'all 150ms ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: isSelected ? '#4c187c' : '#f3f4f6',
                      color: isSelected ? '#fff' : '#4b5563',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700
                    }}>
                      {city.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827' }}>
                        {city.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>
                        {city.hub}
                      </div>
                    </div>
                  </div>

                  {isSelected ? (
                    <CheckCircle size={20} color="#4c187c" />
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600 }}>Select</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
