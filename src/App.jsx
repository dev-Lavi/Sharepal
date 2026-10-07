import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SuperCategoryNav from './components/SuperCategoryNav';
import HeroBanner from './components/HeroBanner';
import SubCategoryFilter from './components/SubCategoryFilter';
import ProductFilterBar from './components/ProductFilterBar';
import ProductGrid from './components/ProductGrid';
import ReviewsMarquee from './components/ReviewsMarquee';
import ImpactStats from './components/ImpactStats';
import WhySharePal from './components/WhySharePal';
import FAQSection from './components/FAQSection';
import SeoGuide from './components/SeoGuide';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import DatePickerModal from './components/DatePickerModal';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import CityModal from './components/CityModal';
import ArchitectUpgradeModal from './components/ArchitectUpgradeModal';

import { products, cities } from './data/products';

export default function App() {
  // Navigation & Category State
  const [activeSuperCat, setActiveSuperCat] = useState('gaming');
  const [selectedSubCat, setSelectedSubCat] = useState('all');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('trending');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Location State
  const [currentCity, setCurrentCity] = useState(cities[0]); // Bangalore default

  // Rental Dates State (Preloaded with 3-day default for rich instant pricing feedback)
  const [rentalDates, setRentalDates] = useState({
    startDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    endDate: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
    days: 3,
    startDateFormatted: new Date(Date.now() + 86400000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
    endDateFormatted: new Date(Date.now() + 86400000 * 4).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
  });

  // Cart State
  const [cartItems, setCartItems] = useState([]);

  // Modal Visibility States
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isArchitectModalOpen, setIsArchitectModalOpen] = useState(false);
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

  // Filtering & Sorting Pipeline
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Subcategory filter
    if (selectedSubCat !== 'all') {
      if (selectedSubCat === 'ps5') {
        result = result.filter(p => p.category === 'ps5' || p.name.includes('PS5'));
      } else if (selectedSubCat === 'gta-vi') {
        result = result.filter(p => p.category === 'gta-vi' || p.name.includes('FC') || p.name.includes('God Of War') || p.name.includes('Spider-Man') || p.name.includes('Uncharted'));
      } else if (selectedSubCat === 'xbox') {
        result = result.filter(p => p.category === 'xbox' || p.name.toLowerCase().includes('xbox'));
      } else if (selectedSubCat === 'vr') {
        result = result.filter(p => p.category === 'vr' || p.name.includes('Portal') || p.name.includes('VR'));
      } else if (selectedSubCat === 'racing-wheel') {
        result = result.filter(p => p.category === 'racing-wheel' || p.name.includes('Racing') || p.name.includes('Wheel'));
      } else if (selectedSubCat === 'big-screen') {
        result = result.filter(p => p.name.includes('Combo') || p.name.includes('Racing'));
      }
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.tag && p.tag.toLowerCase().includes(q))
      );
    }

    // 3. In-stock filter
    if (inStockOnly) {
      result = result.filter(p => !p.out_of_stock);
    }

    // 4. Sorting logic
    if (sortBy === 'trending') {
      result.sort((a, b) => (b.tag === 'Trending' ? 1 : 0) - (a.tag === 'Trending' ? 1 : 0) || b.booked_count - a.booked_count);
    } else if (sortBy === 'booked') {
      result.sort((a, b) => b.booked_count - a.booked_count);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price-asc') {
      result.sort((a, b) => a.per_day_rent - b.per_day_rent);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.per_day_rent - a.per_day_rent);
    }

    return result;
  }, [products, selectedSubCat, searchQuery, inStockOnly, sortBy]);

  const handleResetFilters = () => {
    setSelectedSubCat('all');
    setSearchQuery('');
    setInStockOnly(false);
    setSortBy('trending');
  };

  return (
    <div className="sp-app-root">
      
      {/* 1. Sticky Main Header */}
      <Header
        currentCity={currentCity}
        onOpenCityModal={() => setIsCityModalOpen(true)}
        onOpenDateModal={() => setIsDateModalOpen(true)}
        rentalDates={rentalDates}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 2. Sticky Super Category Navigation */}
      <SuperCategoryNav
        activeCategory={activeSuperCat}
        onSelectCategory={(catId) => setActiveSuperCat(catId)}
      />

      {/* 3. Hero Banner with Flanking Controller Visuals */}
      <HeroBanner />

      {/* 4. Sub-Category Pill Carousel */}
      <SubCategoryFilter
        selectedSubCat={selectedSubCat}
        onSelectSubCat={setSelectedSubCat}
        totalProductsCount={products.length}
      />

      {/* 5. Main Catalog Area (Controls + Product Grid) */}
      <main className="sp-container" style={{ paddingTop: '8px', paddingBottom: '32px' }}>
        <ProductFilterBar
          totalCount={products.length}
          filteredCount={filteredProducts.length}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}
        />

        <ProductGrid
          products={filteredProducts}
          rentalDates={rentalDates}
          onOpenQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
          onOpenDateModal={() => setIsDateModalOpen(true)}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* 6. Customer Social Proof & Marquee */}
      <ReviewsMarquee />

      {/* 7. Platform Impact & Environmental Metrics */}
      <ImpactStats />

      {/* 8. Why Bangalore Gamers Choose SharePal (4 Pillars) */}
      <WhySharePal />

      {/* 9. FAQs Accordions */}
      <FAQSection />

      {/* 10. Bangalore Gaming Guide & SEO Breadcrumbs */}
      <SeoGuide />

      {/* 11. Comprehensive Footer with Mega Category Menu */}
      <Footer />

      {/* 12. Floating Actions (WhatsApp + Mobile Quick Dates) */}
      <FloatingActions
        onOpenDateModal={() => setIsDateModalOpen(true)}
        rentalDates={rentalDates}
      />

      {/* 13. Modals & Drawers */}
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

      <ArchitectUpgradeModal
        isOpen={isArchitectModalOpen}
        onClose={() => setIsArchitectModalOpen(false)}
      />

    </div>
  );
}
