import React from 'react';
import { subCategories } from '../data/products';
import { Gamepad2, Flame, Tv, Disc, Glasses, CircleDot, MonitorPlay } from 'lucide-react';

const iconMap = {
  Gamepad2,
  Flame,
  Tv,
  Disc,
  Glasses,
  CircleDot,
  MonitorPlay
};

export default function SubCategoryFilter({ selectedSubCat, onSelectSubCat, totalProductsCount }) {
  return (
    <section className="sp-subcat-section">
      <div className="sp-container">
        <div className="sp-subcat-scroll-container">
          {subCategories.map((cat) => {
            const isActive = selectedSubCat === cat.id;
            const IconComponent = iconMap[cat.icon] || Gamepad2;

            return (
              <button
                key={cat.id}
                type="button"
                className={`sp-subcat-pill ${isActive ? 'active' : ''}`}
                onClick={() => onSelectSubCat(cat.id)}
              >
                {cat.image ? (
                  <img src={cat.image} alt={cat.name} className="sp-subcat-pill-thumb" />
                ) : (
                  <IconComponent size={16} />
                )}
                <span>{cat.name}</span>
                <span className="sp-subcat-badge">
                  {cat.id === 'all' ? totalProductsCount : cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
