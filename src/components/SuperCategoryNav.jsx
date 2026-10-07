import React from 'react';
import { superCategoryTabs } from '../data/categories';

export default function SuperCategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <nav className="sp-super-category-bar" aria-label="Main Categories">
      <div className="sp-container">
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
    </nav>
  );
}
