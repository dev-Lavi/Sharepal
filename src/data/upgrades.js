export const componentUpgrades = [
  {
    id: "rental-date-picker",
    category: "Conversion Funnel & Core UX",
    componentName: "Universal Rental Date & Duration Engine",
    currentFlaw: "The current page has detached date pill triggers with ambiguous start/end day calculation rules and no visual calendar feedback on the product cards. Users only see base daily rates without understanding total duration or tiered discounts.",
    architectSolution: "Replace with an unified 'Sticky Rental Range Synthesizer' featuring bidirectional date sync, pre-configured tenure presets ('Weekend Warrior (3D)', 'Weekly Binge (7D)', 'Monthly Pro (30D)'), and real-time live price calculation on each product card. Incorporate visual date sliders and delivery slot verification by Bangalore PIN code.",
    techStackProposal: "Radix UI Popover + DayPicker headless primitive with custom range hooks, Zustand global date context, and optimistic price recalculation micro-memoization.",
    businessImpact: "+24% increase in checkout progression; eliminates customer confusion regarding 'starts next day of delivery' policy."
  },
  {
    id: "product-card-ecosystem",
    category: "Catalog Browsing & Merchandising",
    componentName: "Hyper-Interactive Smart Product Card with Bundle Configurator",
    currentFlaw: "Current cards are static tiles with truncated titles, missing quick inclusions (e.g. how many controllers, which games are pre-installed), and a binary 'Booked count' text with no social proof velocity.",
    architectSolution: "Upgrade to a 3D-tilt responsive card featuring controller selector chips (1 Controller vs. 2 Controllers toggle directly on card), game library preview drawer, real-time live availability pill, and an instant 'Quick Rent Drawer' that bypasses multi-page navigation.",
    techStackProposal: "Framer Motion layout animations, CSS container queries for adaptive multi-column layouts, WebP image blur-up placeholders with priority decoding.",
    businessImpact: "+31% reduction in bounce rate, 18% higher average order value via in-card controller upsells."
  },
  {
    id: "faceted-filter-system",
    category: "Information Architecture",
    componentName: "Elastic Multi-Facet Filter & Fast-Search Bar",
    currentFlaw: "Current page only provides a basic horizontal scroll tab with zero multi-select capabilities (cannot filter by In-Stock + 2 Controllers + 4K PS5 simultaneously). Zero price range slider and no fast fuzzy search.",
    architectSolution: "Implement a combined desktop sticky sidebar & mobile bottom-sheet with faceted criteria: Platform (PS5, Xbox, VR), Inclusions (EA Play, FIFA/FC25, God of War), Stock Status, Daily Budget range slider, and an instant fuzzy search with autocomplete chips.",
    techStackProposal: "Web Worker-based MiniSearch/Fuse.js index for zero main-thread lag, URL query-param synchronization via History API for shareable filtered URLs.",
    businessImpact: "Improves product findability speed from 42s to under 4s; drastically increases conversion for targeted searchers."
  },
  {
    id: "reviews-social-proof",
    category: "Trust & Credibility",
    componentName: "Interactive Verified Proof Wall with UGC Media",
    currentFlaw: "Current reviews section is a static-feeling marquee with mixed categories (showing trekking shoes on a gaming page) and lack of customer photos or video unboxings.",
    architectSolution: "Transform into an interactive category-filtered 'Gamer Proof Wall' showing verified Bangalore customer unboxings, console setup photos, Google Review API badge, and filterable pills ('PS5 Renters', 'FIFA Tournaments', 'Bangalore Delivery Speed').",
    techStackProposal: "Virtual marquee with pause-on-hover, CSS subgrid for equalized testimonial cards, and Lightbox modal for customer setup photos.",
    businessImpact: "Builds high trust in gadget condition and hygiene, reducing rental hesitation."
  },
  {
    id: "floating-cart-summary",
    category: "E-Commerce Checkout",
    componentName: "Persisted Mini-Cart & Rental Timeline Drawer",
    currentFlaw: "Cart button in header is a plain link without slide-over preview, zero live cart badge feedback, and lack of visual timeline showing delivery vs. pickup vs. active gaming days.",
    architectSolution: "Build a slide-over sliding cart drawer with an interactive visual Gantt timeline: 'Day 1: Free Delivery to doorstep' -> 'Day 2-4: Game On' -> 'Day 5: Free Pickup', with clear ₹0 Deposit guarantee and promo coupon applicator.",
    techStackProposal: "React Portal, Accessible Dialog primitive (focus lock, ESC key support, ARIA-describedby), LocalStorage persistence with cross-tab BroadcastChannel sync.",
    businessImpact: "Reduces cart abandonment by clearly reinforcing ₹0 deposit and free doorstep logistics."
  },
  {
    id: "performance-vital-layer",
    category: "Core Web Vitals & Technical Excellence",
    componentName: "Next-Gen Image & Lazy Pipeline with Speculative Preloading",
    currentFlaw: "Raw WebP images loaded without responsive srcSet, causing layout shifts (CLS) on slow 4G connections and missing skeleton placeholders during dynamic loads.",
    architectSolution: "Implement progressive blur-up image loaders with SVG shimmer skeletons, dynamic intersection observers, predictive prefetching for hovering products, and strict aspect-ratio containers.",
    techStackProposal: "Native loading='lazy', decoding='async', fetchPriority='high' on Hero, and Content-Visibility: auto on below-the-fold FAQ and footer sections.",
    businessImpact: "Achieves 98+ Lighthouse Performance Score, CLS = 0.00, LCP under 1.2s on mobile networks."
  }
];
