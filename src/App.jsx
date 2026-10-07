import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SuperCategoryNav from './components/SuperCategoryNav';
import HeroBanner from './components/HeroBanner';
import SubCategoryFilter from './components/SubCategoryFilter';
import ProductFilterBar from './components/ProductFilterBar';
import ProductGrid from './components/ProductGrid';
import ReviewsMarquee from './components/ReviewsMarquee';
import ImpactStats from './components/ImpactStats';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import DatePickerModal from './components/DatePickerModal';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import CityModal from './components/CityModal';

import { products, cities } from './data/products';

export default function App() {
  // Navigation & Category State
  const [activeSuperCat, setActiveSuperCat] = useState('gaming');
  const [selectedSubCat, setSelectedSubCat] = useState('all');

  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Location State
  const [currentCity, setCurrentCity] = useState(cities[0]); // Bangalore default

  // Rental Dates State
  const [rentalDates, setRentalDates] = useState(null);

  // Cart State
  const [cartItems, setCartItems] = useState([]);

  // Modal Visibility States
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Cart Management Handlers
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [cartItems]);

  // Filtering Pipeline
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Subcategory filter from vertical dock
    if (selectedSubCat !== 'all') {
      if (selectedSubCat === 'ps5') {
        result = result.filter(p => p.name.includes('PS5'));
      } else if (selectedSubCat === 'gta-vi') {
        result = result.filter(p => 
          p.name.includes('FC') || 
          p.name.includes('God Of War') || 
          p.name.includes('Spider-Man') || 
          p.name.includes('Uncharted') ||
          p.name.includes('Cricket') ||
          p.name.includes('Ghost')
        );
      } else if (selectedSubCat === 'xbox') {
        result = result.filter(p => p.name.toLowerCase().includes('xbox'));
      } else if (selectedSubCat === 'vr') {
        result = result.filter(p => p.name.includes('Portal') || p.name.includes('VR') || p.name.includes('Racing'));
      }
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.tag && p.tag.toLowerCase().includes(q))
      );
    }

    return result;
  }, [products, selectedSubCat, searchQuery]);

  return (
    <div className="sp-app-root">
      
      {/* 1. Header with exact blue logo, date/city selector, search, cart, login */}
      <Header
        currentCity={currentCity}
        onOpenCityModal={() => setIsCityModalOpen(true)}
        onOpenDateModal={() => setIsDateModalOpen(true)}
        rentalDates={rentalDates}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(!isSearchOpen)}
      />

      {/* 2. Super Category Navigation Bar */}
      <SuperCategoryNav
        activeCategory={activeSuperCat}
        onSelectCategory={(catId) => setActiveSuperCat(catId)}
      />

      {/* 3. Main Split View: Vertical Dock (Left) + Content Area (Right) as shown in Images 1-3 */}
      <div className="sp-container sp-main-catalog-layout">
        
        {/* Left: Vertical Category Dock */}
        <SubCategoryFilter
          selectedSubCat={selectedSubCat}
          onSelectSubCat={setSelectedSubCat}
        />

        {/* Right: Banners + Product Grid */}
        <div className="sp-catalog-main-content">
          
          {/* 3-Banner Carousel */}
          <HeroBanner />

          {/* Section Title & Total Count */}
          <ProductFilterBar
            totalCount={products.length}
            isSearchOpen={isSearchOpen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* 4-Column Product Grid */}
          <ProductGrid
            products={filteredProducts}
            rentalDates={rentalDates}
            onOpenQuickView={(p) => setQuickViewProduct(p)}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            onOpenDateModal={() => setIsDateModalOpen(true)}
            onResetFilters={() => {
              setSelectedSubCat('all');
              setSearchQuery('');
            }}
          />

        </div>

      </div>

      {/* 4. Customer Social Proof & Marquee (Image 4) */}
      <ReviewsMarquee />

      {/* 5. Platform Impact Metrics (Image 4) */}
      <ImpactStats />

      {/* 6. FAQs Accordion */}
      <FAQSection />

      {/* 7. Midnight Blue Footer with Logo & 5 Columns (Image 5) */}
      <Footer />

      {/* 8. Floating Actions: Black/Lime Date Pill + Lime/Blue Chat Bubble */}
      <FloatingActions
        onOpenDateModal={() => setIsDateModalOpen(true)}
        rentalDates={rentalDates}
      />

      {/* 9. Interactive Modals & Drawers */}
      <DatePickerModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        onApplyDates={(dates) => setRentalDates(dates)}
        currentDates={rentalDates}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        rentalDates={rentalDates}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenDateModal={() => {
          setIsCartOpen(false);
          setIsDateModalOpen(true);
        }}
      />

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        rentalDates={rentalDates}
        onAddToCart={handleAddToCart}
        isInCart={quickViewProduct ? cartItems.some(i => i.id === quickViewProduct.id) : false}
        onOpenDateModal={() => {
          setQuickViewProduct(null);
          setIsDateModalOpen(true);
        }}
      />

      <CityModal
        isOpen={isCityModalOpen}
        onClose={() => setIsCityModalOpen(false)}
        currentCity={currentCity}
        onSelectCity={(city) => setCurrentCity(city)}
      />

    </div>
  );
}
