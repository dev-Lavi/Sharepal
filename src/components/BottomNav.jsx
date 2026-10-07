import React from 'react';
import { Home, LayoutGrid, Search, ShoppingCart } from 'lucide-react';

export default function BottomNav({ cartCount, onOpenCart, onOpenSearch }) {
  return (
    <nav className="sp-bottom-nav" aria-label="Mobile navigation">
      <button className="sp-bottom-nav-item sp-bottom-nav-active" aria-label="Home">
        <Home size={22} strokeWidth={2} />
        <span>Home</span>
      </button>
      <button className="sp-bottom-nav-item" aria-label="Category">
        <LayoutGrid size={22} strokeWidth={2} />
        <span>Category</span>
      </button>
      <button className="sp-bottom-nav-item" aria-label="Search" onClick={onOpenSearch}>
        <Search size={22} strokeWidth={2} />
        <span>Search</span>
      </button>
      <button className="sp-bottom-nav-item" aria-label="Cart" onClick={onOpenCart} style={{ position: 'relative' }}>
        <ShoppingCart size={22} strokeWidth={2} />
        {cartCount > 0 && (
          <span className="sp-bottom-nav-badge">{cartCount}</span>
        )}
        <span>Cart</span>
      </button>
    </nav>
  );
}
