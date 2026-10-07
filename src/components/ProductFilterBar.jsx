import React from 'react';

export default function ProductFilterBar({ totalCount }) {
  return (
    <div className="sp-product-filter-bar-container">
      <div className="sp-section-heading-row">
        <div className="sp-section-title-left">
          <h2 className="sp-category-main-heading">Gaming Gadgets On Rent</h2>
        </div>

        <div className="sp-section-count-right">
          <span className="sp-total-items-badge">{totalCount} items</span>
        </div>
      </div>
    </div>
  );
}
