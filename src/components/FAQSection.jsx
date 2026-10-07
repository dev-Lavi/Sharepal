import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIds, setOpenIds] = useState([1]); // First FAQ open by default
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="sp-faq-section">
      <div className="sp-container">
        
        <div className="sp-faq-header">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', marginTop: '6px' }}>
            Everything you need to know about renting gaming gadgets in Bangalore
          </p>
        </div>

        <div className="sp-faq-accordion-list">
          {displayedFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div key={faq.id} className={`sp-faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="sp-faq-trigger"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={18} className="sp-faq-chevron" />
                </button>

                {isOpen && (
                  <div className="sp-faq-answer">
                    <p>{faq.answer}</p>
                    <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '0.75rem', color: '#8a2be2', fontWeight: 600 }}>
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {faqs.length > 5 && (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              style={{
                background: '#f3f4f6',
                color: '#4c187c',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '12px 28px',
                borderRadius: '9999px',
                transition: 'background 200ms ease'
              }}
            >
              {showAll ? "Show Less FAQ's" : "View More FAQ's"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
