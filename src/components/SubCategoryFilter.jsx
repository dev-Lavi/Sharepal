import React from 'react';
import { Smile } from 'lucide-react';

export const verticalCategories = [
  {
    id: 'all',
    name: 'All',
    isSmiley: true
  },
  {
    id: 'gta-vi',
    name: 'GTA VI',
    image: 'https://images.sharepal.in/category-icons/gta-vi.webp'
  },
  {
    id: 'ps5',
    name: 'PS5 Console',
    image: 'https://images.sharepal.in/sub-category-card/ps5-console-on-rent-sharepal.webp'
  },
  {
    id: 'xbox',
    name: 'Xbox Console',
    image: 'https://images.sharepal.in/sub-category-card/xbox-console-on-rent-sharepal.webp'
  },
  {
    id: 'vr',
    name: 'VR',
    image: 'https://images.sharepal.in/sub-category-card/vr-on-rent-sharepal.webp'
  }
];

export default function SubCategoryFilter({ selectedSubCat, onSelectSubCat }) {
  return (
    <aside className="sp-vertical-category-dock" aria-label="Product Categories">
      <div className="sp-vertical-dock-inner">
        {verticalCategories.map((item) => {
          const isActive = selectedSubCat === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`sp-vertical-dock-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectSubCat(item.id)}
            >
              <div className={`sp-vertical-dock-icon-box ${isActive ? 'active' : ''}`}>
                {item.isSmiley ? (
                  <Smile size={28} color="#2563EB" strokeWidth={2.2} />
                ) : (
                  <img src={item.image} alt={item.name} className="sp-dock-thumb" />
                )}
              </div>
              <span className={`sp-vertical-dock-label ${isActive ? 'active' : ''}`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
