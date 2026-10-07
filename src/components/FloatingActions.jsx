import React from 'react';
import { Calendar } from 'lucide-react';
import ChatbotWidget from './ChatbotWidget';

export default function FloatingActions({ onOpenDateModal, rentalDates }) {
  const hasDates = rentalDates && rentalDates.days > 0;

  return (
    <>
      {/* Floating Bottom Center Date Pill with Lime Green Border (Desktop only) */}
      <button
        type="button"
        className="sp-floating-date-pill desktop-only hidden md:flex"
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

      {/* Floating Chatbot Widget */}
      <ChatbotWidget />
    </>
  );
}
