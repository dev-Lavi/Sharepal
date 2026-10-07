import React, { useState, useEffect } from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOpenId, setDrawerOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const toggleDrawerFAQ = (id) => {
    setDrawerOpenId(drawerOpenId === id ? null : id);
  };

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const displayedFaqs = faqs.slice(0, 5);

  return (
    <section className="sp-faq-section-wrapper">
      <div className="sp-container">
        
        {/* White Card Container */}
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

          {/* View More FAQs Button - triggers Sidebar Drawer */}
          <div className="sp-faq-btn-wrapper">
            <button
              type="button"
              className="sp-view-more-faqs-btn"
              onClick={() => setIsDrawerOpen(true)}
            >
              View more FAQ's
            </button>
          </div>
        </div>

      </div>

      {/* Slide-in FAQ Sidebar Drawer */}
      {isDrawerOpen && (
        <div className="sp-faq-drawer-backdrop" onClick={() => setIsDrawerOpen(false)}>
          <aside 
            className="sp-faq-drawer-panel" 
            onClick={(e) => e.stopPropagation()}
            aria-label="All Frequently Asked Questions"
          >
            {/* Drawer Header */}
            <div className="sp-faq-drawer-header">
              <button
                type="button"
                className="sp-faq-drawer-close-btn"
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close FAQs"
              >
                <X size={20} strokeWidth={2.2} />
              </button>
              <h3 className="sp-faq-drawer-heading">FAQs</h3>
            </div>

            {/* Drawer Body with All FAQ Items */}
            <div className="sp-faq-drawer-body">
              {faqs.map((faq) => {
                const isOpen = drawerOpenId === faq.id;

                return (
                  <div key={faq.id} className="sp-faq-drawer-card">
                    <div
                      className="sp-faq-drawer-question-row"
                      onClick={() => toggleDrawerFAQ(faq.id)}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="sp-faq-drawer-question-text">{faq.question}</span>
                      <span className="sp-faq-drawer-chevron">
                        {isOpen ? (
                          <ChevronUp size={16} color="#64748B" />
                        ) : (
                          <ChevronDown size={16} color="#64748B" />
                        )}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="sp-faq-drawer-answer-box">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
