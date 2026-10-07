import React from 'react';
import { Calendar } from 'lucide-react';
import ChatbotWidget from './ChatbotWidget';

export default function FloatingActions({ onOpenDateModal, rentalDates }) {
  const hasDates = rentalDates && rentalDates.days > 0;

  return (
    <>
      {/* Floating Bottom Center Date Pill with Lime Green Border */}
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

      {/* Floating Chatbot Widget with Exact SVG & Animation (Requirement 4) */}
      <ChatbotWidget />
    </>
  );
}
