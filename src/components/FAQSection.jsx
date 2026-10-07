import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="sp-faq-section-wrapper">
      <div className="sp-container">
        
        {/* Single White Card Container as shown in Image 5 */}
        <div className="sp-faq-card-container">
          <h2 className="sp-faq-card-title">Frequently Asked Questions (FAQs)</h2>

          <div className="sp-faq-clean-list">
            {displayedFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div key={faq.id} className="sp-faq-clean-item">
                  <div
                    className="sp-faq-clean-question-row"
                    onClick={() => toggleFAQ(faq.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="sp-faq-clean-question-text">{faq.question}</span>
                    <span className="sp-faq-clean-chevron">
                      {isOpen ? (
                        <ChevronUp size={15} color="#94A3B8" />
                      ) : (
                        <ChevronDown size={15} color="#94A3B8" />
                      )}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="sp-faq-clean-answer-box">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* View More FAQs Button as shown in Image 5 */}
          <div className="sp-faq-btn-wrapper">
            <button
              type="button"
              className="sp-view-more-faqs-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show less FAQ's" : "View more FAQ's"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
