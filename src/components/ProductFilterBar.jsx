import React from 'react';
import { Search, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export default function ProductFilterBar({
  totalCount,
  filteredCount,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  inStockOnly,
  setInStockOnly
}) {
  return (
    <div className="sp-catalog-controls-bar">
      <div className="sp-catalog-title-group">
        <h2>gaming gadgets on rent</h2>
        <p className="sp-catalog-count-label">
          Total items: {totalCount} items • Showing {filteredCount} results
        </p>
      </div>

      <div className="sp-filter-actions-right">
        {/* Instant Search Bar */}
        <div className="sp-search-input-wrapper">
          <Search size={16} color="#6b7280" />
          <input
            type="text"
            className="sp-search-input"
            placeholder="Search consoles, games, controllers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 700 }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Sort Selector */}
        <select
          className="sp-sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort products"
        >
          <option value="trending">Sort by: Trending</option>
          <option value="booked">Most Booked</option>
          <option value="rating">Highest Rated</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        {/* In-stock toggle */}
        <button
          type="button"
          className={`sp-stock-toggle-btn ${inStockOnly ? 'active' : ''}`}
          onClick={() => setInStockOnly(!inStockOnly)}
        >
          <CheckCircle2 size={16} />
          <span>In Stock Only</span>
        </button>
      </div>
    </div>
  );
}
