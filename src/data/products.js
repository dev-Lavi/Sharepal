import productData from '../../product-list.json';

export const products = productData.products.map(p => ({
  ...p,
  category: p.name.toLowerCase().includes('fc') || p.name.toLowerCase().includes('fifa') 
    ? 'gta-vi' // game combo category
    : p.name.toLowerCase().includes('wheel') || p.name.toLowerCase().includes('racing')
    ? 'racing-wheel'
    : p.name.toLowerCase().includes('portal')
    ? 'vr'
    : p.name.toLowerCase().includes('xbox')
    ? 'xbox'
    : 'ps5'
}));

export const subCategories = [
  { id: 'all', name: 'All', count: 23, icon: 'Gamepad2' },
  { id: 'ps5', name: 'PS5 Console', count: 18, icon: 'Tv', image: 'https://images.sharepal.in/sub-category-card/ps5-console-on-rent-sharepal.webp' },
  { id: 'gta-vi', name: 'GTA VI & Games', count: 7, icon: 'Flame', image: 'https://images.sharepal.in/category-icons/gta-vi.webp' },
  { id: 'xbox', name: 'Xbox Console', count: 2, icon: 'Disc', image: 'https://images.sharepal.in/sub-category-card/xbox-console-on-rent-sharepal.webp' },
  { id: 'vr', name: 'VR & Portal', count: 2, icon: 'Glasses', image: 'https://images.sharepal.in/sub-category-card/vr-on-rent-sharepal.webp' },
  { id: 'racing-wheel', name: 'Racing Wheel', count: 2, icon: 'CircleDot', image: 'https://images.sharepal.in/categories/gaming-consoles/gaming-accessories/logitech-G29-driving-force-racing-wheel/logitech-g29-racing-wheel-on-rent-sharepal-1.webp' },
  { id: 'big-screen', name: 'Big Screen Gaming', count: 2, icon: 'MonitorPlay', image: 'https://images.sharepal.in/categories/gaming-consoles/big-screen-gaming/products/ps5-with-2-controllers-with-projector-on-rent+.webp' }
];

export const cities = [
  { id: 'bangalore', name: 'Bangalore', state: 'Karnataka', active: true, hub: 'Indiranagar Hub (Same Day Delivery)' },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', active: false, hub: 'Andheri West Hub' },
  { id: 'delhi', name: 'Delhi-NCR', state: 'Delhi', active: false, hub: 'Gurugram Cyber City' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', active: false, hub: 'Hitec City Hub' },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', active: false, hub: 'Koregaon Park Hub' },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', active: false, hub: 'Salt Lake Sector V' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', active: false, hub: 'T Nagar Hub' }
];
