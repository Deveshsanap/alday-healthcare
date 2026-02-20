import { Leaf, Droplet, Sun, ShieldCheck, Truck, Star } from 'lucide-react';

// --- 1. Notification Bar ---
export const notifications = [
  "FREE SHIPPING ON ORDERS ABOVE ₹999",
  "BUY 2 GET 1 FREE ON ALL OIL SHOTS",
  "100% NATURAL, CHEMICAL-FREE INGREDIENTS"
];

// --- 2. Hero Slider ---
export const heroSlides = [
  {
    id: 1,
    tag: "New Launch",
    title: "Rosemary Oil Shots",
    subtitle: "Visible Hair Growth in 4 Weeks",
    features: ["Precise 20% Dose", "Promotes hair follicle", "Fights hair thinning"],
    image: "https://www.brillare.co.in/cdn/shop/files/Rosemary-Oil-Shots-For-Visible-Hair-Growth-Front-1_360x.jpg?v=1706698662",
    bgColor: "bg-[#E8DFD6]",
    buttonText: "Shop Now"
  },
  {
    id: 2,
    tag: "Bestseller",
    title: "Vitamin C Face Serum",
    subtitle: "For Bright, Glowing Skin",
    features: ["10% Pure Vitamin C", "Reduces Pigmentation", "Boosts Collagen"],
    image: "https://www.brillare.co.in/cdn/shop/files/10_-Vitamin-C-Face-Serum-Front_360x.jpg?v=1706699151",
    bgColor: "bg-[#F3E9E2]",
    buttonText: "Explore Range"
  },
  {
    id: 3,
    tag: "Clinical Care",
    title: "Hair Fall Control",
    subtitle: "Reduces Hair Fall in 15 Days",
    features: ["Onion & Bakuchiol", "Strengthens Roots", "Zero Dilution"],
    image: "https://www.brillare.co.in/cdn/shop/files/Onion-Oil-Shots-For-Hair-Fall-Reduction-Front-1_360x.jpg?v=1706698468",
    bgColor: "bg-[#E0E6E1]",
    buttonText: "View Kit"
  }
];

// --- 3. Shop By Concern ---
export const concerns = [
  { title: "Hair Growth", image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=300&q=80" },
  { title: "Hair Fall", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=300&q=80" },
  { title: "Dandruff", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=300&q=80" },
  { title: "Dry & Damaged", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=300&q=80" },
  { title: "Pigmentation", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=300&q=80" },
  { title: "Acne Control", image: "https://images.unsplash.com/photo-1556228720-191738e4a2e5?auto=format&fit=crop&w=300&q=80" },
];

// --- 4. MASTER PRODUCT LIST ---
// Used by: ShopPage, ProductDetails, ProductSection, RelatedProducts
export const products = [
  
  // === HAIR CARE ===
  {
    id: "rosemary-oil-shots",
    vendor: 'Brillare',
    category: 'Hair Care',
    name: 'Rosemary Oil Shots',
    title: 'Rosemary Oil Shots',
    subtitle: "Visible Hair Growth in 4 Weeks",
    concern: 'Hair Growth',
    price: 795.00,
    mrp: 995.00,
    rating: 4.9,
    reviewCount: 2150,
    sale: false,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80',
    images: [
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800",
      "https://images.unsplash.com/photo-1599450371636-6d63457b0e27?w=800",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800"
    ],
    description: "A precise dose of 20% Rosemary Oil to reactivate hair follicles. Clinically proven to be as effective as Minoxidil for hair growth, without the side effects.",
    keyActives: [
      { name: "Rosemary Oil", desc: "Blocks DHT & stimulates follicles.", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200" },
      { name: "Caffeine", desc: "Boosts blood circulation.", img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=200" },
      { name: "Pea Sprout", desc: "Extends growth phase.", img: "https://images.unsplash.com/photo-1599450371636-6d63457b0e27?w=200" }
    ],
    ritual: [
      { title: "Uncap", desc: "Uncap the vial." },
      { title: "Apply", desc: "Apply directly on scalp." },
      { title: "Massage", desc: "Massage for 5 mins." }
    ],
    fullIngredients: [
      { name: "Rosemary Leaf Oil", source: "Rosemary", function: "Hair Growth", type: "Natural" },
      { name: "Caffeine", source: "Coffee Bean", function: "Stimulant", type: "Natural" }
    ]
  },
  {
    id: "rosemary-shampoo",
    vendor: 'Brillare',
    category: 'Hair Care',
    name: 'Rosemary Volume Shampoo',
    title: 'Rosemary Volume Shampoo',
    subtitle: "For Thinning, Flat Hair",
    concern: 'Hair Growth',
    price: 495.00,
    mrp: 595.00,
    rating: 4.6,
    reviewCount: 320,
    sale: false,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800",
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800"
    ],
    description: "A gentle, sulphate-free cleanser that adds volume to thinning hair while stimulating the scalp with pure Rosemary essence.",
    keyActives: [
      { name: "Rosemary", desc: "Stimulates roots.", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200" },
      { name: "Wheat Protein", desc: "Adds volume.", img: "https://images.unsplash.com/photo-1574315042620-3b9579c23df7?w=200" }
    ],
    ritual: [
      { title: "Wet", desc: "Wet hair thoroughly." },
      { title: "Lather", desc: "Massage into scalp." },
      { title: "Rinse", desc: "Rinse well." }
    ],
    fullIngredients: [
      { name: "Coco Glucoside", source: "Coconut", function: "Cleanser", type: "Natural" },
      { name: "Rosemary Oil", source: "Rosemary", function: "Active", type: "Natural" }
    ]
  },
  {
    id: "onion-oil-shots",
    vendor: 'Brillare',
    category: 'Hair Care',
    name: 'Onion & Bakuchiol Oil',
    title: 'Onion & Bakuchiol Oil',
    subtitle: "For Hair Fall Reduction",
    concern: 'Hair Fall',
    price: 795.00,
    mrp: 995.00,
    rating: 4.8,
    reviewCount: 1240,
    sale: false,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=800&q=80',
    images: [ "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800" ],
    description: "A clinical blend of Onion oil and Bakuchiol to reduce hair fall and strengthen roots.",
    keyActives: [
      { name: "Onion", desc: "Reduces breakage.", img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=200" }
    ],
    ritual: [{ title: "Apply", desc: "Apply on scalp." }],
    fullIngredients: [{ name: "Onion Oil", source: "Onion", function: "Active", type: "Natural" }]
  },
  {
    id: "tea-tree-oil-shots",
    vendor: 'Brillare',
    category: 'Hair Care',
    name: 'Tea Tree Oil Shots',
    title: 'Tea Tree Oil Shots',
    subtitle: "For Dandruff Free Scalp",
    concern: 'Dandruff',
    price: 650.00,
    mrp: 795.00,
    rating: 4.6,
    reviewCount: 620,
    sale: true,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    images: [ "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800" ],
    description: "Concentrated Tea Tree essence to eliminate dandruff-causing fungus.",
    keyActives: [
      { name: "Tea Tree", desc: "Anti-fungal.", img: "https://images.unsplash.com/photo-1599450371636-6d63457b0e27?w=200" }
    ],
    ritual: [{ title: "Apply", desc: "Apply on itchy scalp." }],
    fullIngredients: [{ name: "Tea Tree Oil", source: "Tea Tree", function: "Anti-Dandruff", type: "Natural" }]
  },
  {
    id: "argan-oil-shots",
    vendor: 'Brillare',
    category: 'Hair Care',
    name: 'Argan Oil Shots',
    title: 'Argan Oil Shots',
    subtitle: "For Dry, Frizzy & Damaged Hair",
    concern: 'Dry/Damaged Hair',
    price: 795.00,
    mrp: 995.00,
    rating: 4.7,
    reviewCount: 850,
    sale: false,
    image: 'https://images.unsplash.com/photo-1556228578-8d8448ad1d4d?auto=format&fit=crop&w=800&q=80',
    images: [ "https://images.unsplash.com/photo-1556228578-8d8448ad1d4d?w=800" ],
    description: "Pure Argan oil shots that deeply penetrate the hair shaft to lock in moisture and banish frizz instantly.",
    keyActives: [
      { name: "Argan Oil", desc: "Liquid Gold.", img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=200" }
    ],
    ritual: [{ title: "Apply", desc: "Apply on damp hair." }],
    fullIngredients: [{ name: "Argania Spinosa", source: "Argan Nut", function: "Conditioning", type: "Natural" }]
  },
  {
    id: "heavy-moisturising-conditioner",
    vendor: 'Brillare',
    category: 'Hair Care',
    name: 'Heavy Moisturising Conditioner',
    title: 'Heavy Moisturising Conditioner',
    subtitle: "For Dry, Frizzy & Brittle Hair",
    concern: 'Dry/Damaged Hair',
    price: 595.00,
    mrp: 695.00,
    rating: 4.8,
    reviewCount: 410,
    sale: true,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800"],
    description: "Deeply nourishing conditioner rich in Shea Butter and Argan Oil to tame frizz and repair damage.",
    keyActives: [
      { name: "Shea Butter", desc: "Intense moisture.", img: "https://images.unsplash.com/photo-1589155797307-2e38c92c7333?w=200" }
    ],
    ritual: [{ title: "Apply", desc: "Apply on ends." }],
    fullIngredients: [{ name: "Butyrospermum Parkii", source: "Shea Nut", function: "Conditioning", type: "Natural" }]
  },

  // === SKIN CARE ===
  {
    id: "vitamin-c-serum",
    vendor: 'Brillare',
    category: 'Skincare',
    name: 'Vitamin C Serum',
    title: 'Vitamin C Face Serum',
    subtitle: "For Bright, Glowing Skin",
    concern: 'Pigmentation',
    price: 895.00,
    mrp: 995.00,
    rating: 4.8,
    reviewCount: 950,
    sale: false,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    images: [ "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800" ],
    description: "10% Pure Vitamin C in a water-free base for maximum stability and glow.",
    keyActives: [
      { name: "Vitamin C", desc: "Brightens skin.", img: "https://images.unsplash.com/photo-1616486029423-aaa478965c96?w=200" }
    ],
    ritual: [{ title: "Apply", desc: "2 drops on face." }],
    fullIngredients: [{ name: "L-Ascorbic Acid", source: "Fruit", function: "Active", type: "Natural" }]
  },
  {
    id: "vitamin-c-face-wash",
    vendor: 'Brillare',
    category: 'Skincare',
    name: 'Vitamin C Face Wash',
    title: 'Vitamin C Face Wash',
    subtitle: "Brightening Powder Cleanser",
    concern: 'Pigmentation',
    price: 395.00,
    mrp: 495.00,
    rating: 4.5,
    reviewCount: 210,
    sale: false,
    image: 'https://images.unsplash.com/photo-1556228720-191738e4a2e5?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1556228720-191738e4a2e5?w=800"],
    description: "100% natural powder face wash that activates with water to cleanse and brighten instantly.",
    keyActives: [
      { name: "Orange Peel", desc: "Exfoliates.", img: "https://images.unsplash.com/photo-1616486029423-aaa478965c96?w=200" }
    ],
    ritual: [{ title: "Mix", desc: "Mix with water." }, { title: "Wash", desc: "Cleanse face." }],
    fullIngredients: [{ name: "Orange Peel Powder", source: "Orange", function: "Exfoliant", type: "Natural" }]
  },
  {
    id: "rose-face-toner",
    vendor: 'Brillare',
    category: 'Skincare',
    name: 'Rose Real Face Toner',
    title: 'Rose Real Face Toner',
    subtitle: "Hydrating & Pore Tightening",
    concern: 'Sensitivity',
    price: 450.00,
    mrp: 450.00,
    rating: 4.7,
    reviewCount: 150,
    sale: false,
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=800"],
    description: "Pure distilled rose water to balance pH and tighten pores.",
    keyActives: [
      { name: "Rose", desc: "Soothing.", img: "https://images.unsplash.com/photo-1597843786271-105124152c92?w=200" }
    ],
    ritual: [{ title: "Spray", desc: "Spray on face." }],
    fullIngredients: [{ name: "Rosa Damascena", source: "Rose", function: "Toner", type: "Natural" }]
  },
  {
    id: "sunscreen-spf50",
    vendor: 'Brillare',
    category: 'Skincare',
    name: 'Mineral Sunscreen SPF 50',
    title: 'Mineral Sunscreen SPF 50',
    subtitle: "No White Cast Protection",
    concern: 'Sun Protection',
    price: 695.00,
    mrp: 895.00,
    rating: 4.9,
    reviewCount: 500,
    sale: true,
    image: 'https://images.unsplash.com/photo-1556228852-80f6e5e9ed2d?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1556228852-80f6e5e9ed2d?w=800"],
    description: "Physical shield against UVA/UVB rays with zero white cast and non-greasy finish.",
    keyActives: [
      { name: "Zinc Oxide", desc: "UV Block.", img: "https://images.unsplash.com/photo-1615485925763-867862780c18?w=200" }
    ],
    ritual: [{ title: "Apply", desc: "Apply generously." }],
    fullIngredients: [{ name: "Zinc Oxide", source: "Mineral", function: "Sunblock", type: "Natural" }]
  },

  // === BODY CARE ===
  {
    id: "body-wash-lavender",
    vendor: 'Brillare',
    category: 'Bodycare',
    name: 'Lavender Body Wash',
    title: 'Lavender & Patchouli Body Wash',
    subtitle: "Relaxing & Hydrating Cleanser",
    concern: 'Dryness',
    price: 395.00,
    mrp: 495.00,
    rating: 4.6,
    reviewCount: 180,
    sale: false,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800"],
    description: "A calming body wash infused with essential oils to relax your senses.",
    keyActives: [
      { name: "Lavender", desc: "Calming.", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=200" }
    ],
    ritual: [{ title: "Lather", desc: "Use loofah." }],
    fullIngredients: [{ name: "Lavender Oil", source: "Flower", function: "Aroma", type: "Natural" }]
  },
  {
    id: "body-lotion-shea",
    vendor: 'Brillare',
    category: 'Bodycare',
    name: 'Shea Butter Body Lotion',
    title: 'Deep Moisture Body Lotion',
    subtitle: "24Hr Hydration",
    concern: 'Dryness',
    price: 495.00,
    mrp: 595.00,
    rating: 4.8,
    reviewCount: 250,
    sale: false,
    image: 'https://images.unsplash.com/photo-1608248546804-d57e3f8319c3?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1608248546804-d57e3f8319c3?w=800"],
    description: "Rich, non-greasy lotion for soft, supple skin all day long.",
    keyActives: [
      { name: "Shea Butter", desc: "Moisturising.", img: "https://images.unsplash.com/photo-1589155797307-2e38c92c7333?w=200" }
    ],
    ritual: [{ title: "Apply", desc: "Massage on body." }],
    fullIngredients: [{ name: "Shea Butter", source: "Nut", function: "Moisture", type: "Natural" }]
  },
  {
    id: "coffee-body-scrub",
    vendor: 'Brillare',
    category: 'Bodycare',
    name: 'Coffee Body Scrub',
    title: 'Energizing Coffee Scrub',
    subtitle: "Exfoliating & Tan Removal",
    concern: 'Tanning',
    price: 550.00,
    mrp: 650.00,
    rating: 4.7,
    reviewCount: 190,
    sale: true,
    image: 'https://images.unsplash.com/photo-1596704017389-77a339908480?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1596704017389-77a339908480?w=800"],
    description: "Raw coffee powder scrub to remove dead skin and tan.",
    keyActives: [
      { name: "Coffee", desc: "Exfoliating.", img: "https://images.unsplash.com/photo-1555038367-9c941324749d?w=200" }
    ],
    ritual: [{ title: "Scrub", desc: "Rub gently on wet skin." }],
    fullIngredients: [{ name: "Coffee Powder", source: "Coffee Bean", function: "Scrub", type: "Natural" }]
  },

  // === GIFTING (New Sets) ===
  {
    id: "rose-royale-gift-set",
    vendor: 'Brillare',
    category: 'Gifting',
    name: 'Rose Royale Gift Set',
    title: 'Rose Royale Luxury Gift Set',
    subtitle: '100% Natural Rose Ritual',
    concern: 'Luxury Gifting',
    price: 1295.00,
    mrp: 1595.00,
    rating: 4.9,
    reviewCount: 120,
    sale: false,
    image: 'https://images.unsplash.com/photo-1595867363690-3b03666bfa72?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1595867363690-3b03666bfa72?w=800"],
    description: "A royal treatment for your skin with the purest essence of Rose. Includes Face Wash, Toner, and Oil.",
    keyActives: [{ name: "Rose", desc: "Hydrating.", img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=200" }],
    ritual: [{ title: "Gift", desc: "Perfect for her." }],
    fullIngredients: [{ name: "Rose Oil", source: "Flower", function: "Glow", type: "Natural" }]
  },
  {
    id: "coffee-connection-gift-set",
    vendor: 'Brillare',
    category: 'Gifting',
    name: 'Coffee Connection Gift Set',
    title: 'Coffee Connection Gift Set',
    subtitle: 'Energizing Coffee Kit',
    concern: 'Luxury Gifting',
    price: 1095.00,
    mrp: 1495.00,
    rating: 4.8,
    reviewCount: 95,
    sale: true,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800"],
    description: "Wake up your skin with raw coffee power. Includes Face Scrub, Face Wash, and Body Scrub.",
    keyActives: [{ name: "Coffee", desc: "Exfoliating.", img: "https://images.unsplash.com/photo-1555038367-9c941324749d?w=200" }],
    ritual: [{ title: "Gift", desc: "For coffee lovers." }],
    fullIngredients: [{ name: "Coffee", source: "Bean", function: "Scrub", type: "Natural" }]
  },
  {
    id: "lavender-love-gift-set",
    vendor: 'Brillare',
    category: 'Gifting',
    name: 'Lavender Love Gift Set',
    title: 'Lavender Love Gift Set',
    subtitle: 'Calming & Soothing Kit',
    concern: 'Luxury Gifting',
    price: 1495.00,
    mrp: 1895.00,
    rating: 5.0,
    reviewCount: 45,
    sale: false,
    image: 'https://images.unsplash.com/photo-1556228722-dca88d380d62?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1556228722-dca88d380d62?w=800"],
    description: "Relax and unwind with the soothing aroma of Lavender. Includes Body Wash, Lotion, and Oil.",
    keyActives: [{ name: "Lavender", desc: "Calming.", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=200" }],
    ritual: [{ title: "Gift", desc: "Relaxation kit." }],
    fullIngredients: [{ name: "Lavender", source: "Flower", function: "Aroma", type: "Natural" }]
  },
  {
    id: "saffron-swirl-gift-set",
    vendor: 'Brillare',
    category: 'Gifting',
    name: 'Saffron Swirl Gifting Set',
    title: 'Saffron Swirl Gifting Set',
    subtitle: 'Glow Boosting Kit',
    concern: 'Luxury Gifting',
    price: 1495.00,
    mrp: 1495.00,
    rating: 4.7,
    reviewCount: 30,
    sale: false,
    image: 'https://images.unsplash.com/photo-1615396899839-a9927db8e473?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1615396899839-a9927db8e473?w=800"],
    description: "Traditional saffron regime for radiant, glowing skin. Perfect for festive gifting.",
    keyActives: [{ name: "Saffron", desc: "Radiance.", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200" }],
    ritual: [{ title: "Gift", desc: "Festive glow." }],
    fullIngredients: [{ name: "Saffron", source: "Flower", function: "Glow", type: "Natural" }]
  },
  {
    id: "minty-fresh-gift-set",
    vendor: 'Brillare',
    category: 'Gifting',
    name: 'Minty Fresh Gift Set',
    title: 'Minty Fresh Gift Set',
    subtitle: 'Cooling & Refreshing',
    concern: 'Luxury Gifting',
    price: 995.00,
    mrp: 1295.00,
    rating: 4.6,
    reviewCount: 88,
    sale: true,
    image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800"],
    description: "A burst of freshness with mint and tea tree. Great for summer gifting.",
    keyActives: [{ name: "Mint", desc: "Cooling.", img: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=200" }],
    ritual: [{ title: "Gift", desc: "Summer fresh." }],
    fullIngredients: [{ name: "Peppermint", source: "Leaf", function: "Cooling", type: "Natural" }]
  },
  {
    id: "natures-symphony-gift-set",
    vendor: 'Brillare',
    category: 'Gifting',
    name: "Nature's Symphony Gift Set",
    title: "Nature's Symphony Gift Set",
    subtitle: 'Assorted Natural Soaps',
    concern: 'Luxury Gifting',
    price: 795.00,
    mrp: 795.00,
    rating: 4.9,
    reviewCount: 200,
    sale: false,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800"],
    description: "A collection of our handmade, 100% natural soaps in one beautiful box.",
    keyActives: [{ name: "Coconut Oil", desc: "Base.", img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=200" }],
    ritual: [{ title: "Gift", desc: "Daily luxury." }],
    fullIngredients: [{ name: "Coconut Oil", source: "Nut", function: "Cleanse", type: "Natural" }]
  },

  // === RITUALS (Bundles/Kits) ===
  {
    id: "hair-growth-ritual-kit",
    vendor: 'Brillare',
    category: 'Rituals', 
    name: '3-Step Hair Growth Ritual',
    title: 'Ultimate Hair Growth Ritual',
    subtitle: 'Oil Shots + Shampoo + Serum',
    concern: 'Hair Growth',
    price: 2385.00,
    mrp: 3180.00,
    rating: 5.0,
    reviewCount: 340,
    sale: true,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800"],
    description: "The complete scientifically proven regime to stop hair fall and boost new growth. Contains 8 vials of Oil, 1 Shampoo, and 1 Serum.",
    keyActives: [{ name: "Rosemary", desc: "Growth.", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200" }],
    ritual: [{ title: "Step 1", desc: "Oil" }, { title: "Step 2", desc: "Cleanse" }, { title: "Step 3", desc: "Treat" }],
    fullIngredients: [{ name: "Rosemary Oil", source: "Herb", function: "Growth", type: "Natural" }]
  },
  {
    id: "clear-skin-ritual-kit",
    vendor: 'Brillare',
    category: 'Rituals',
    name: 'Clear Skin CTM Ritual',
    title: 'Clear Skin CTM Ritual',
    subtitle: 'Face Wash + Toner + Moisturiser',
    concern: 'Acne Control',
    price: 1595.00,
    mrp: 1995.00,
    rating: 4.8,
    reviewCount: 210,
    sale: false,
    image: 'https://images.unsplash.com/photo-1556228720-191738e4a2e5?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1556228720-191738e4a2e5?w=800"],
    description: "Your daily Cleanse-Tone-Moisturise routine for acne-free, clear skin. Powered by Neem and Salicylic Acid.",
    keyActives: [{ name: "Neem", desc: "Purifying.", img: "https://images.unsplash.com/photo-1599450371636-6d63457b0e27?w=200" }],
    ritual: [{ title: "Step 1", desc: "Cleanse" }, { title: "Step 2", desc: "Tone" }, { title: "Step 3", desc: "Hydrate" }],
    fullIngredients: [{ name: "Salicylic Acid", source: "Willow Bark", function: "Anti-Acne", type: "Natural" }]
  },
  {
    id: "anti-dandruff-ritual-kit",
    vendor: 'Brillare',
    category: 'Rituals',
    name: 'Anti-Dandruff Ritual Kit',
    title: 'Anti-Dandruff Ritual Kit',
    subtitle: 'Oil Shots + Shampoo',
    concern: 'Dandruff',
    price: 1145.00,
    mrp: 1390.00,
    rating: 4.7,
    reviewCount: 180,
    sale: true,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800"],
    description: "Eliminate dandruff and soothe itchy scalp with the power of Tea Tree and Celery Seed.",
    keyActives: [{ name: "Tea Tree", desc: "Anti-fungal.", img: "https://images.unsplash.com/photo-1599450371636-6d63457b0e27?w=200" }],
    ritual: [{ title: "Step 1", desc: "Treat" }, { title: "Step 2", desc: "Cleanse" }],
    fullIngredients: [{ name: "Tea Tree Oil", source: "Leaf", function: "Clear Flakes", type: "Natural" }]
  },
  {
    id: "body-glow-ritual-kit",
    vendor: 'Brillare',
    category: 'Rituals',
    name: 'Body Polishing Ritual',
    title: 'Body Polishing Ritual',
    subtitle: 'Scrub + Lotion + Oil',
    concern: 'Dryness',
    price: 1895.00,
    mrp: 2295.00,
    rating: 4.9,
    reviewCount: 95,
    sale: false,
    image: 'https://images.unsplash.com/photo-1596704017389-77a339908480?auto=format&fit=crop&w=800&q=80',
    images: ["https://images.unsplash.com/photo-1596704017389-77a339908480?w=800"],
    description: "Spa-like body polishing at home. Exfoliate with Coffee, moisturise with Shea, and glow with Almond oil.",
    keyActives: [{ name: "Coffee", desc: "Exfoliating.", img: "https://images.unsplash.com/photo-1555038367-9c941324749d?w=200" }],
    ritual: [{ title: "Step 1", desc: "Scrub" }, { title: "Step 2", desc: "Moisturise" }],
    fullIngredients: [{ name: "Coffee", source: "Bean", function: "Glow", type: "Natural" }]
  }
];

// --- 5. Ingredient Spotlight (Static) ---
export const ingredients = [
  {
    id: 'rosemary',
    name: 'Rosemary',
    iconName: 'Leaf',
    title: 'The Hair Growth Powerhouse',
    desc: 'Clinically proven to block DHT and stimulate hair follicles.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    stats: ['Blocks DHT', 'Boosts Circulation', 'Strengthens Roots']
  },
  {
    id: 'vitaminc',
    name: 'Vitamin C',
    iconName: 'Sun',
    title: 'The Glow Booster',
    desc: 'Neutralizes free radicals, reduces pigmentation, and boosts collagen.',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa478965c96?auto=format&fit=crop&w=800&q=80',
    stats: ['Brightens Skin', 'Fades Spots', 'Anti-Aging']
  },
  {
    id: 'teatree',
    name: 'Tea Tree',
    iconName: 'Droplet',
    title: 'The Dandruff Killer',
    desc: 'Eliminates dandruff-causing fungus and soothes itchy scalps.',
    image: 'https://images.unsplash.com/photo-1599450371636-6d63457b0e27?auto=format&fit=crop&w=800&q=80',
    stats: ['Anti-Fungal', 'Soothes Itch', 'Clears Scalp']
  }
];

// --- 6. Bundles (Static for Homepage) ---
export const bundles = [
  {
    id: 1,
    title: "Hair Growth Bundle",
    subtitle: "The ultimate 3-step ritual to stop hair fall and boost new growth.",
    badge: "Best Seller",
    badgeColor: "text-brand-gold",
    saveTag: "Save 25%",
    image: "https://images.unsplash.com/photo-1556228578-8d8448ad1d4d?auto=format&fit=crop&w=800&q=80",
    price: 2385,
    items: [
      { name: "Rosemary Oil Shots", size: "48ml", price: "₹795", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=100" },
      { name: "Rosemary Shampoo", size: "200ml", price: "₹595", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=100" },
      { name: "Scalp Serum", size: "30ml", price: "₹995", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100" }
    ]
  },
  {
    id: 2,
    title: "Brightening Bundle",
    subtitle: "Get glowing, even-toned skin with pure Vitamin C.",
    badge: "New Launch",
    badgeColor: "text-brand-gold",
    saveTag: "Save 30%",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    price: 2085,
    items: [
      { name: "Vitamin C Face Wash", size: "100ml", price: "₹495", img: "https://images.unsplash.com/photo-1556228720-191738e4a2e5?w=100" },
      { name: "10% Vitamin C Serum", size: "30ml", price: "₹895", img: "https://images.unsplash.com/photo-1556228578-8d8448ad1d4d?w=100" },
      { name: "Liquid Moisturizer", size: "50ml", price: "₹695", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100" }
    ]
  }
];

// --- 7. Reviews ---
export const reviews = [
  { name: "Priyanshi Y.", title: "It's really worth hype", body: "My over all experience is so good", product: "Rosemary Oil Shots" },
  { name: "Aditya S.", title: "Oil shots review", body: "It really helped decreasing significant dandruff from my scalp", product: "Tea Tree Oil" },
  { name: "Dhanraj V.", title: "A great bodywash", body: "It has a rich, creamy consistency that feels more like a lotion than a soap.", product: "Lavender Body Wash" }
];

export const pressLogos = [
  { name: "FEMINA", style: "font-serif font-bold" },
  { name: "GRAZIA", style: "font-serif font-bold" },
  { name: "VOGUE", style: "font-serif font-bold italic" },
  { name: "ELLE", style: "font-serif font-bold" },
  { name: "COSMOPOLITAN", style: "font-sans font-bold" },
  { name: "HARPERS BAZAAR", style: "font-serif font-bold" }
];

// --- 8. Blog ---
export const blogArticles = [
  {
    id: 1,
    title: "Why Rosemary is Better Than Minoxidil for Hair Growth",
    category: "Hair Science",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Understanding the Skin Cycling Routine for Acne",
    category: "Skincare 101",
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1556228720-191738e4a2e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "The Truth About Sulfates and Parabens",
    category: "Ingredients",
    date: "Jan 28, 2026",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=600&q=80"
  }
];

// --- 9. FAQs ---
export const faqs = [
  { q: "Are your products truly 100% natural?", a: "Yes. We promise Zero Dilution." },
  { q: "How long does it take to see results?", a: "Visible results in 2-4 weeks." },
  { q: "Is the Vitamin C serum safe?", a: "Absolutely. Potent yet gentle." },
];

// --- 10. Ritual Kits ---
export const ritualKits = [
  {
    title: "Ultimate Rosemary Hair Growth Kit",
    price: "₹2,385",
    mrp: "₹3,180",
    image: "https://images.unsplash.com/photo-1556228578-8d8448ad1d4d?auto=format&fit=crop&w=600&q=80",
    save: "Save 25%"
  },
  {
    title: "Complete Hair Fall Control Kit",
    price: "₹1,599",
    mrp: "₹2,285",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    save: "Save 30%"
  }
];