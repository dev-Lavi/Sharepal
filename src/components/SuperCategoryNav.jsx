import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { superCategoryTabs } from '../data/categories';

export default function SuperCategoryNav({ activeCategory, onSelectCategory }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -120 : 120;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sp-super-category-bar" aria-label="Main Categories">
      <div className="sp-container sp-super-nav-wrapper">
        
        {/* Left Arrow Button */}
        <button 
          type="button" 
          className="sp-nav-arrow-btn sp-nav-arrow-left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="sp-super-nav-scroll-area" ref={scrollContainerRef}>
          <ul className="sp-super-nav-list">
            {superCategoryTabs.map((tab) => {
              const isActive = tab.id === activeCategory;
              return (
                <li 
                  key={tab.id} 
                  className={`sp-super-nav-item ${isActive ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="sp-super-nav-link"
                    onClick={() => onSelectCategory(tab.id)}
                  >
                    {tab.name}
                  </button>
                  {isActive && <div className="sp-super-active-indicator" />}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Arrow Button */}
        <button 
          type="button" 
          className="sp-nav-arrow-btn sp-nav-arrow-right" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>

      </div>
    </nav>
  );
}
