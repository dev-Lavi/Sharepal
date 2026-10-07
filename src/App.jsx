import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SuperCategoryNav from './components/SuperCategoryNav';
import { GamingBanner, AssetPartnerBanner, RentOutBanner } from './components/HeroBanner';
import SubCategoryFilter from './components/SubCategoryFilter';
import ProductFilterBar from './components/ProductFilterBar';
import ProductCard from './components/ProductCard';
import AvailableOffers from './components/AvailableOffers';
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

  // Scroll Header Upward Hide Animation State (Requirement 3)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 60 && currentScrollY > lastScrollY) {
        setIsHeaderHidden(true); // scrolling down
      } else if (currentScrollY < lastScrollY || currentScrollY <= 20) {
        setIsHeaderHidden(false); // scrolling up or at top
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Segment products for interleaved banners (Requirement 4)
  const row1Products = filteredProducts.slice(0, 4);
  const row2Products = filteredProducts.slice(4, 8);
  const remainingProducts = filteredProducts.slice(8);

  const renderProductCard = (product) => (
    <ProductCard
      key={product.id}
      product={product}
      rentalDates={rentalDates}
      onOpenQuickView={(p) => setQuickViewProduct(p)}
      onAddToCart={handleAddToCart}
      isInCart={cartItems.some(i => i.id === product.id)}
      onOpenDateModal={() => setIsDateModalOpen(true)}
    />
  );

  return (
    <div className="sp-app-root">
      
      {/* 1. Header with exact official hanging blue logo, date/city selector, search, cart, login */}
      <Header
        currentCity={currentCity}
        onOpenCityModal={() => setIsCityModalOpen(true)}
        onOpenDateModal={() => setIsDateModalOpen(true)}
        rentalDates={rentalDates}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(!isSearchOpen)}
        isHeaderHidden={isHeaderHidden}
      />

      {/* 2. Super Category Navigation Bar (Sticky with dynamic top position) */}
      <div className={`sp-super-nav-sticky-wrap ${isHeaderHidden ? 'is-top-stuck' : ''}`}>
        <SuperCategoryNav
          activeCategory={activeSuperCat}
          onSelectCategory={(catId) => setActiveSuperCat(catId)}
        />
      </div>

      {/* 3. Main Split View: Vertical Dock (Left) + Interleaved Content (Right) */}
      <div className="sp-container sp-main-catalog-layout">
        
        {/* Left: Vertical Category Dock */}
        <SubCategoryFilter
          selectedSubCat={selectedSubCat}
          onSelectSubCat={setSelectedSubCat}
        />

        {/* Right: Interleaved Banners, Products & Offers (Requirement 4 & 5) */}
        <div className="sp-catalog-main-content">
          
          {/* Banner 1: Gaming Consoles Banner */}
          <GamingBanner />

          {/* Section Heading & Item Count */}
          <ProductFilterBar
            totalCount={products.length}
            isSearchOpen={isSearchOpen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Row 1: 4 Products */}
          <div className="sp-product-grid">
            {row1Products.map(renderProductCard)}
          </div>

          {/* Banner 2: Become an Asset Partner Banner */}
          <div style={{ margin: '24px 0' }}>
            <AssetPartnerBanner />
          </div>

          {/* Available Offers (3 Offers) Section (Requirement 5) */}
          <AvailableOffers />

          {/* Row 2: 4 Products */}
          {row2Products.length > 0 && (
            <div className="sp-product-grid" style={{ marginTop: '24px' }}>
              {row2Products.map(renderProductCard)}
            </div>
          )}

          {/* Banner 3: Rent Out Your Gear Banner */}
          <div style={{ margin: '24px 0' }}>
            <RentOutBanner />
          </div>

          {/* Remaining Products */}
          {remainingProducts.length > 0 && (
            <div className="sp-product-grid">
              {remainingProducts.map(renderProductCard)}
            </div>
          )}

        </div>

      </div>

      {/* 4. Customer Social Proof & Marquee (Image 4) */}
      <ReviewsMarquee />

      {/* 5. Platform Impact Metrics with Gradient Text (Requirement 6 / Image 4) */}
      <ImpactStats />

      {/* 6. Clean White Card FAQ Section (Requirement 7 / Image 5) */}
      <FAQSection />

      {/* 7. Midnight Blue Footer with Logo & 5 Columns */}
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
