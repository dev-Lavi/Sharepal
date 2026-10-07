import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

export default function FloatingActions({ onOpenDateModal, rentalDates }) {
  const hasDates = rentalDates && rentalDates.days > 0;

  return (
    <>
      {/* Floating WhatsApp Support Button */}
      <a
        href="https://wa.me/919999999999?text=Hi%20SharePal,%20I%20want%20to%20rent%20a%20gaming%20console%20in%20Bangalore"
        target="_blank"
        rel="noopener noreferrer"
        className="sp-floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat with SharePal Support on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Floating Bottom Pill for Quick Rental Date Selection */}
      <button
        type="button"
        className="sp-floating-mobile-date-pill"
        onClick={onOpenDateModal}
      >
        <Calendar size={18} color="#9eff00" />
        <span>
          {hasDates 
            ? `${rentalDates.days} Days Selected (${rentalDates.startDateFormatted})`
            : 'Select rental dates to view prices'}
        </span>
      </button>
    </>
  );
}
