import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SuperCategoryNav from './components/SuperCategoryNav';
import { GamingBanner, AssetPartnerBanner, RentOutBanner } from './components/HeroBanner';
import SubCategoryFilter from './components/SubCategoryFilter';
import ProductFilterBar from './components/ProductFilterBar';
import ProductCard from './components/ProductCard';
import FAQSection from './components/FAQSection';
import ReviewsMarquee from './components/ReviewsMarquee';
import ImpactStats from './components/ImpactStats';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import DatePickerModal from './components/DatePickerModal';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import CityModal from './components/CityModal';
import BottomNav from './components/BottomNav';

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

  // Pagination / Display limit for product catalog
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Scroll header hide animation state
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
        result = result.filter(p => p.name.includes('Portal') || p.name.includes('VR'));
      } else if (selectedSubCat === 'racing') {
        result = result.filter(p => p.name.toLowerCase().includes('racing') || p.name.toLowerCase().includes('wheel'));
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

  // Layout segmentation for interleaved banners
  const row1Products = filteredProducts.slice(0, 4);
  const row2Products = filteredProducts.slice(4, 8);
  const row3Products = filteredProducts.slice(8, 12);
  const extraProducts = filteredProducts.slice(12);

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
      
      {/* 1. Header with brand logo, date/city selector, search, cart, login */}
      <Header
        currentCity={currentCity}
        onOpenCityModal={() => setIsCityModalOpen(true)}
        onOpenDateModal={() => setIsDateModalOpen(true)}
        rentalDates={rentalDates}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(!isSearchOpen)}
        isHeaderHidden={isHeaderHidden}
        isSearchOpen={isSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 2. Super Category Navigation Bar */}
      <div className={`sp-super-nav-sticky-wrap ${isHeaderHidden ? 'is-top-stuck' : ''}`}>
        <SuperCategoryNav
          activeCategory={activeSuperCat}
          onSelectCategory={(catId) => setActiveSuperCat(catId)}
        />
      </div>

      {/* Mobile Top Hero Banner: Full Width on smaller devices with edge-to-edge purple background */}
      <div className="sp-mobile-hero-banner-wrapper mobile-only w-full">
        <GamingBanner />
      </div>

      {/* 3. Main Split View: Vertical Dock + Catalog Content */}
      <div className="sp-container sp-main-catalog-layout">
        
        {/* Left: Category Navigation */}
        <SubCategoryFilter
          selectedSubCat={selectedSubCat}
          onSelectSubCat={setSelectedSubCat}
        />

        {/* Right: Products and Interleaved Banners */}
        <div className="sp-catalog-main-content">
          
          {/* Desktop Top Hero Banner: Aligned inside catalog column next to vertical dock */}
          <div className="sp-desktop-hero-banner-wrapper desktop-only">
            <GamingBanner />
          </div>

          {/* Section Heading & Item Count */}
          <ProductFilterBar totalCount={50} />

          {/* Row 1: 4 Products */}
          <div className="sp-product-grid">
            {row1Products.map(renderProductCard)}
          </div>

          {/* Banner 2: Asset Partner Banner */}
          <div style={{ margin: '24px 0' }}>
            <AssetPartnerBanner />
          </div>

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

          {/* Row 3: 4 Products */}
          {row3Products.length > 0 && (
            <div className="sp-product-grid" style={{ marginTop: '24px' }}>
              {row3Products.map(renderProductCard)}
            </div>
          )}

          {/* Remaining products if expanded */}
          {showAllProducts && extraProducts.length > 0 && (
            <div className="sp-product-grid" style={{ marginTop: '20px' }}>
              {extraProducts.map(renderProductCard)}
            </div>
          )}

          {/* Pagination summary & expansion toggle */}
          <div className="sp-show-more-container">
            <p className="sp-showing-results-text">
              Showing {showAllProducts ? (12 + extraProducts.length) : 12} of 50 results
            </p>
            <button
              type="button"
              className="sp-show-more-btn"
              onClick={() => setShowAllProducts(!showAllProducts)}
            >
              {showAllProducts ? 'Show Less' : 'Show More'}
            </button>
          </div>

        </div>

      </div>

      {/* 4. FAQ Section */}
      <FAQSection />

      {/* 5. Verified Customer Reviews */}
      <ReviewsMarquee />

      {/* 6. Platform Impact Metrics */}
      <ImpactStats />

      {/* 7. Footer */}
      <Footer />

      {/* 8. Floating Actions: Date pill & Chatbot */}
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

      {/* 10. Mobile Bottom Navigation Bar */}
      <BottomNav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(!isSearchOpen)}
      />

    </div>
  );
}
