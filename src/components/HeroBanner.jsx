import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Gift, 
  Tag, 
  RotateCcw, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 3);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 3) % 3);

  return (
    <div className="sp-banner-carousel-wrapper">
      <div className="sp-banner-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        
        {/* ================= SLIDE 1: GAMING CONSOLES BANNER (IMAGE 1) ================= */}
        <div className="sp-banner-slide sp-banner-gaming">
          <div className="sp-banner-gaming-left">
            <img 
              src="https://images.sharepal.in/super-categories/gaming-left.webp" 
              alt="Xbox and Gaming Consoles" 
              className="sp-banner-art"
            />
          </div>

          <div className="sp-banner-gaming-center">
            <h1 className="sp-banner-gaming-title">Gaming Consoles</h1>
            <p className="sp-banner-gaming-sub">
              Rent the latest gaming gadgets from <span className="sp-brand-inline">Share<span style={{ color: '#9EFF00' }}>Pal</span></span> PS5, Xbox, Oculus VR, Racing Wheel on rent.
            </p>

            <div className="sp-gaming-logos-row">
              <span className="sp-brand-pill-logo">XBOX</span>
              <span className="sp-brand-pill-logo">PS5</span>
              <span className="sp-brand-pill-logo">∞ Meta</span>
            </div>
          </div>

          <div className="sp-banner-gaming-right">
            <img 
              src="https://images.sharepal.in/super-categories/gaming-right.webp" 
              alt="PS5 and VR Headset" 
              className="sp-banner-art"
            />
          </div>
        </div>

        {/* ================= SLIDE 2: ASSET PARTNER BANNER (IMAGE 2) ================= */}
        <div className="sp-banner-slide sp-banner-asset-partner">
          <div className="sp-asset-left-content">
            <h2 className="sp-asset-heading">
              Become an <span style={{ color: '#9EFF00' }}>Asset Partner</span>. Earn Monthly.
            </h2>

            <div className="sp-asset-benefits-row">
              {/* Earning Benefits */}
              <div className="sp-asset-card">
                <span className="sp-asset-card-tag">EARNING BENEFITS</span>
                <div className="sp-asset-card-items">
                  <div className="sp-asset-item">
                    <div className="sp-asset-item-top">
                      <span className="sp-asset-highlight" style={{ color: '#9EFF00' }}>Monthly Earnings</span>
                      <Calendar size={14} color="#fff" />
                    </div>
                    <span className="sp-asset-sub">From rental assets</span>
                  </div>

                  <div className="sp-asset-item">
                    <div className="sp-asset-item-top">
                      <span className="sp-asset-highlight" style={{ color: '#9EFF00' }}>Upto ₹10,000</span>
                      <Gift size={14} color="#fff" />
                    </div>
                    <span className="sp-asset-sub">Instant Wallet credits</span>
                  </div>
                </div>
              </div>

              {/* Rental Benefits */}
              <div className="sp-asset-card">
                <span className="sp-asset-card-tag">RENTAL BENEFITS</span>
                <div className="sp-asset-card-items">
                  <div className="sp-asset-item">
                    <div className="sp-asset-item-top">
                      <span className="sp-asset-highlight" style={{ color: '#9EFF00' }}>10% Off</span>
                      <Tag size={14} color="#fff" />
                    </div>
                    <span className="sp-asset-sub">Exclusive discount when you rent</span>
                  </div>

                  <div className="sp-asset-item">
                    <div className="sp-asset-item-top">
                      <span className="sp-asset-highlight" style={{ color: '#9EFF00' }}>Get 10% Cashback</span>
                      <RotateCcw size={14} color="#fff" />
                    </div>
                    <span className="sp-asset-sub">On every order</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-asset-right-content">
            <div className="sp-asset-imagery">
              <img 
                src="https://images.sharepal.in/super-categories/Category+Card+Image.webp" 
                alt="Cameras, Drones and PS5" 
                className="sp-asset-gear-img"
              />
            </div>
            <a href="#" className="sp-btn-lime-cta">
              <span>Know More</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* ================= SLIDE 3: RENT OUT YOUR GEAR (IMAGE 3) ================= */}
        <div className="sp-banner-slide sp-banner-rent-out">
          <div className="sp-rentout-left-art">
            <img 
              src="https://images.sharepal.in/sub-category-card/DJI-Mini-4-Pro-RC2-drone.webp" 
              alt="DJI Drone" 
              className="sp-drone-art"
            />
          </div>

          <div className="sp-rentout-center">
            <p className="sp-rentout-question">
              Got gear you <span className="sp-underline-lime">dont use anymore</span>?
            </p>
            <h2 className="sp-rentout-heading">
              Rent Out Your Gear on SharePal
            </h2>
            <a href="#" className="sp-btn-lime-cta" style={{ margin: '14px auto 0 auto' }}>
              <span>Earn With Us</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="sp-rentout-right-art">
            <img 
              src="https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-1-controller/ps5-console-with-1-controller-on-rent-sharepal-1.webp" 
              alt="PS5 Controller" 
              className="sp-ps5-art"
            />
          </div>
        </div>

      </div>

      {/* Carousel Controls */}
      <button 
        type="button" 
        className="sp-banner-nav-btn prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button 
        type="button" 
        className="sp-banner-nav-btn next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="sp-banner-dots">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            type="button"
            className={`sp-banner-dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
