import React from 'react';
import { Calendar } from 'lucide-react';

export default function FloatingActions({ onOpenDateModal, rentalDates }) {
  const hasDates = rentalDates && rentalDates.days > 0;

  return (
    <>
      {/* Floating Bottom Center Date Pill with Lime Green Border as shown in Images 1-4 */}
      <button
        type="button"
        className="sp-floating-date-pill"
        onClick={onOpenDateModal}
        aria-label="Select rental dates"
      >
        <Calendar size={16} color="#ffffff" strokeWidth={2.2} />
        <span>
          {hasDates 
            ? `${rentalDates.days} Days Selected (${rentalDates.startDateFormatted})`
            : 'Select rental dates to view prices'}
        </span>
      </button>

      {/* Floating Bottom Right Chat Widget with Lime Background & Blue Chat Bubble */}
      <a
        href="https://wa.me/919999999999?text=Hi%20SharePal,%20I%20want%20to%20rent%20gaming%20gadgets%20in%20Bangalore"
        target="_blank"
        rel="noopener noreferrer"
        className="sp-floating-chat-bubble"
        aria-label="Chat Support"
        title="Chat Support"
      >
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue Speech Bubble */}
          <path d="M20 6C11.716 6 5 12.044 5 19.5C5 23.368 6.744 26.837 9.563 29.288L8.2 34.5L13.78 32.784C15.65 33.567 17.76 34 20 34C28.284 34 35 27.956 35 19.5C35 12.044 28.284 6 20 6Z" fill="#1544E6" />
          {/* 3 White Dots */}
          <circle cx="14" cy="20" r="2.2" fill="#FFFFFF" />
          <circle cx="20" cy="20" r="2.2" fill="#FFFFFF" />
          <circle cx="26" cy="20" r="2.2" fill="#FFFFFF" />
        </svg>
      </a>
    </>
  );
}
