import React from 'react';

export default function ProductFilterBar({ totalCount, isSearchOpen, searchQuery, setSearchQuery }) {
  return (
    <div className="sp-section-heading-row">
      <div className="sp-section-title-left">
        <h2 className="sp-category-main-heading">Gaming Gadgets On Rent</h2>
      </div>

      <div className="sp-section-count-right">
        <span className="sp-total-items-text">Total items: {totalCount} items</span>
      </div>

      {isSearchOpen && (
        <div className="sp-quick-search-bar" style={{ width: '100%', marginTop: '12px' }}>
          <input
            type="text"
            className="sp-search-input"
            placeholder="Search consoles, games, controllers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
      )}
    </div>
  );
}
