import React from 'react';
import { reviews } from '../data/reviews';
import { Star } from 'lucide-react';

export default function ReviewsMarquee() {
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="sp-reviews-section">
      <div className="sp-container">
        
        {/* Title as shown in Image 4 */}
        <div className="sp-reviews-header">
          <h2 className="sp-reviews-title-clean">
            Served more than <span style={{ color: '#ea580c' }}>1 Lakh Orders</span>
          </h2>
        </div>

      </div>

      {/* Marquee Track Container */}
      <div className="sp-marquee-wrapper">
        <div className="sp-marquee-track">
          {doubledReviews.map((rev, index) => (
            <div key={`${rev.id}-${index}`} className="sp-review-clean-card">
              
              {/* Google + Stars Header */}
              <div className="sp-review-card-top-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53" />
                </svg>
                <div className="sp-clean-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>

              {/* Review Quote Text */}
              <p className="sp-clean-review-quote">
                “ {rev.text} ”
              </p>

              {/* Author Row */}
              <div className="sp-clean-author-row">
                <div className="sp-clean-author-avatar">
                  {rev.initials}
                </div>
                <div className="sp-clean-author-meta">
                  <strong className="sp-author-name">{rev.name}</strong>
                  <span className="sp-author-location-cat">{rev.city} • {rev.category}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
