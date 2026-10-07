# SharePal - Gaming Gadgets Rental Web Platform

A high-performance, responsive web application for renting gaming consoles and lifestyle gadgets in Bangalore. Built with **React 18**, **Vite**, and **Vanilla CSS Design System**, featuring dynamic tenure pricing, interactive calendar scheduling, and responsive catalog browsing.

---

## 🚀 Live Demo & Deployment

- **Local Preview**: `http://localhost:3000/`
- **Deploy to Vercel**: Import repository, Framework Preset: `Vite`, Build Command: `npm run build`, Output Directory: `dist`.
- **Deploy to Netlify**: Connect repository, Build Command: `npm run build`, Publish Directory: `dist`.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology | Details |
|---|---|---|
| **Core Framework** | React 18 + Vite 6 | Fast HMR, zero unnecessary abstractions, modular component structure |
| **Styling** | Vanilla CSS Design System | Custom CSS variables, fluid typography, responsive layout breakpoints |
| **Icons** | Lucide React | High-performance vector geometry |
| **Fonts** | Google Fonts (`Inter` & `Ubuntu`) | Clean modern typography |
| **Data Engine** | Local JSON Data + State Hooks | Dynamic pricing calculation based on rental duration, faceted filtering |

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-link>
cd sharepal

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000/` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 💎 Features

1. **Header & Navigation**:
   - Brand logo badge with category switchers.
   - City selector modal (Bangalore delivery hub).
   - Dynamic date range selector with instant summary pills.
   - Header search bar and real-time cart badge.

2. **Hero Gaming Banner**:
   - Full-width hero banner highlighting featured consoles (PS5, Xbox, VR, Racing Wheels).
   - Partner brand logos and responsive artwork presentation.

3. **Product Catalog & Filtering**:
   - Vertical category navigation dock with active category indicators.
   - Real-time catalog search and faceted filtering.
   - Dynamic price engine recalculating discounted per-day and total rates based on tenure.
   - In-stock and wishlist indicators.

4. **Rental Calendar & Scheduler**:
   - Dual-month interactive calendar modal with custom tenure selection.
   - Flexible delivery and return date configuration.

5. **Customer Reviews & Platform Metrics**:
   - Continuous marquee of verified customer testimonials.
   - Environmental and economic impact metrics.

6. **Interactive FAQ Drawer**:
   - Comprehensive FAQs with accordion expand/collapse.
   - Full-panel slide-in sidebar drawer with backdrop blur.

7. **Responsive Mobile Design**:
   - Adaptive mobile navigation and bottom actions bar.
   - Touch-friendly card sizing, centered buttons, and optimized layout.

---

## 📄 License & Attribution

All product trademarks and brand assets belong to their respective owners. Project created for educational and portfolio demonstration purposes.
