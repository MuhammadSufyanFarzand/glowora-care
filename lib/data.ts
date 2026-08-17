import { Product, CategoryInfo, FAQItem, UserInquiry, SiteSettings } from './types';

export const INITIAL_CATEGORIES: CategoryInfo[] = [
  {
    id: 'skin-care',
    name: 'Skin Care',
    productsCount: '120+ Products',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    description: 'Cleanse, hydrate and protect with clinical-grade active ingredients.'
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    productsCount: '95+ Products',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    description: 'Deep nourishing shampoos, keratin treatments, and botanical oils.'
  },
  {
    id: 'body-care',
    name: 'Body Care',
    productsCount: '80+ Products',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    description: 'Luxurious bath salts, softening lotions, and hydrating body scrubs.'
  },
  {
    id: 'makeup',
    name: 'Makeup',
    productsCount: '150+ Products',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    description: 'Vibrant matte lipsticks, lightweight foundations, and glow balms.'
  },
  {
    id: 'mehndi-designs',
    name: 'Mehndi Designs',
    productsCount: '45+ Designs',
    image: '/images/mehndi_bridal_hands_1786879695626.jpg',
    description: 'Exquisite bridal & party Mehndi designs for hands and feet with diverse artistic styles & price points.'
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    productsCount: '90+ Products',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    description: 'Holistic wellness formulas, aromatherapy, and daily vitality boosters.'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  // Sensitive Skin Showcase
  {
    id: 'prod-cetaphil-sun',
    name: 'Cetaphil Sun SPF 50+ Light Gel',
    category: 'Sensitive Skin',
    subcategory: 'Sun Care',
    price: 22.00,
    originalPrice: 28.00,
    rating: 4.2,
    reviewsCount: 696,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    volume: '50ml',
    description: 'Very high SPF 50+ protection against UVA and UVB rays. Lightweight gel formula that is quickly absorbed with no white cast.',
    ingredients: ['Cellular Protection Complex', 'Vitamin E', 'Glycerin', 'Broad Spectrum Filters'],
    benefits: ['Non-comedogenic', 'Water resistant', 'Fragrance-free', 'Suitable for sensitive & reactive skin'],
    howToUse: 'Apply generously to face and neck 20 minutes before sun exposure. Reapply every 2 hours.',
    inStock: true,
    featured: true,
    isSensitiveCare: true
  },
  {
    id: 'prod-daily-exfoliating',
    name: 'Daily Exfoliating Cleanser',
    category: 'Sensitive Skin',
    subcategory: 'Cleansers',
    price: 16.50,
    originalPrice: 21.00,
    rating: 4.4,
    reviewsCount: 19063,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1556228722-d0b5d03a5be6?q=80&w=800&auto=format&fit=crop',
    volume: '178ml',
    description: 'Gently buffs away dead skin cells without stripping natural hydration. Packed with soothing micro-exfoliants.',
    ingredients: ['Hydrating Glycerin', 'Vitamin B5', 'Bamboo Micro-beads', 'Aloe Vera Leaf Extract'],
    benefits: ['Maintains skin natural pH', 'Non-irritating', 'Hypoallergenic', 'Dermatologist tested'],
    howToUse: 'Massage gently over damp face using circular motions. Rinse thoroughly with lukewarm water.',
    inStock: true,
    featured: true,
    isSensitiveCare: true
  },
  {
    id: 'prod-advanced-relief',
    name: 'Advanced Relief Lotion',
    category: 'Sensitive Skin',
    subcategory: 'Moisturizers',
    price: 18.00,
    originalPrice: 24.00,
    rating: 4.7,
    reviewsCount: 2800,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1608248597249-c976906e6188?q=80&w=800&auto=format&fit=crop',
    volume: '237ml',
    description: 'Continuous 48-hour moisture barrier repair for intensely dry, irritated, or compromised skin.',
    ingredients: ['Ceramide NP', 'Hyaluronic Acid', 'Shea Butter', 'Colloidal Oatmeal'],
    benefits: ['Calms itchy sensation', 'Restores lipid barrier', 'Fast absorbing', 'Steroid-free'],
    howToUse: 'Apply liberally to affected areas as often as needed throughout the day.',
    inStock: true,
    featured: true,
    isSensitiveCare: true
  },

  // Star Featured Hero Items
  {
    id: 'prod-peach-70-serum',
    name: 'Peach 70 Niacin Serum',
    category: 'Skin Care',
    subcategory: 'Serums',
    price: 24.99,
    originalPrice: 32.00,
    rating: 4.9,
    reviewsCount: 1420,
    tag: '70% Peach Extract',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    volume: '30ml',
    description: 'Formulated with 70% fermented peach extract and 5% niacinamide to restore dull tone, refine pores, and deliver instant glass-skin radiance.',
    ingredients: ['70% Prunus Persica Extract', '5% Niacinamide', 'Triple Hyaluronic Acid', 'Alpha-Arbutin', 'Desert Yeast Oil'],
    benefits: ['Deep hydration for glass skin', 'Reduces dark spots & blemish marks', 'Instant absorption with non-sticky finish', 'Enhances makeup adherence'],
    howToUse: 'Dispense 2-3 drops onto clean skin morning and evening. Gently pat into face and neck until absorbed.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-anti-pigmentation',
    name: 'Catalyst Anti Pigmentation Serum',
    category: 'Skin Care',
    subcategory: 'Serums',
    price: 28.50,
    originalPrice: 38.00,
    rating: 4.8,
    reviewsCount: 890,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop',
    volume: '30ml',
    description: 'Targeted brightening formula with concentrated Kojic Acid, Alpha Arbutin and Tranexamic Acid to correct hyperpigmentation and sun damage.',
    ingredients: ['Kojic Acid 2%', 'Alpha Arbutin 2%', 'Tranexamic Acid 3%', 'Licorice Root Extract'],
    benefits: ['Fades stubborn dark spots', 'Evens patchy skin tone', 'Accelerates skin renewal', 'Antioxidant defense'],
    howToUse: 'Apply 3 drops onto targeted areas or full face before heavier creams. Always use SPF in daytime.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-curated-essentials-bundle',
    name: 'Curated Essentials Skincare Kit',
    category: 'Skin Care',
    subcategory: 'Bundles',
    price: 89.99,
    originalPrice: 149.99,
    rating: 5.0,
    reviewsCount: 3120,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    volume: 'Full 5-Piece Routine Kit',
    description: 'Elevate your daily routine with our handpicked selection of premium skincare essentials bundled in a signature luxury tote.',
    ingredients: ['Cleansing Milk 100ml', 'Hydrating Essence Toner 100ml', 'Glow Serum 30ml', 'Barrier Cream 50ml', 'SPF Shield 50ml'],
    benefits: ['Complete morning & night regimen', 'Save $60 over individual prices', 'Dermatologist tested', 'Travel-friendly packaging'],
    howToUse: 'Follow steps 1 to 5 printed on the bundle guide inside the package.',
    inStock: true,
    featured: true
  },

  // Best Sellers Grid
  {
    id: 'prod-vitamin-c-serum',
    name: 'Vitamin C Face Serum',
    category: 'Skin Care',
    subcategory: 'Serums',
    price: 24.99,
    originalPrice: 34.00,
    rating: 4.8,
    reviewsCount: 2310,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop',
    volume: '30ml',
    description: 'Pure 15% L-Ascorbic Acid infused with Ferulic Acid and Vitamin E for luminous glow and antioxidant defense against urban pollution.',
    ingredients: ['15% L-Ascorbic Acid', '1% Vitamin E', '0.5% Ferulic Acid', 'Hyaluronic Acid'],
    benefits: ['Boosts collagen synthesis', 'Protects against UV damage', 'Brightens complexions', 'Smooths fine lines'],
    howToUse: 'Apply 3-4 drops to cleansed face in the morning before moisturizer and sunscreen.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-hydrating-face-cream',
    name: 'Hydrating Face Cream',
    category: 'Skin Care',
    subcategory: 'Moisturizers',
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviewsCount: 1845,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1567928815104-b63795123d57?q=80&w=800&auto=format&fit=crop',
    volume: '50g',
    description: 'Velvety rich barrier repair cream with multi-molecular hyaluronic acid and botanical squalane that locks in moisture for 72 hours.',
    ingredients: ['Centella Asiatica', 'Plant-derived Squalane', 'Hyaluronic Acid', 'Shea Butter'],
    benefits: ['Intense hydration', 'Non-greasy finish', 'Soothes redness', 'Plumps skin texture'],
    howToUse: 'Smooth a dime-sized amount over face and neck as the final step in your routine.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-keratin-shampoo',
    name: 'Keratin Nourishing Shampoo',
    category: 'Hair Care',
    subcategory: 'Cleansers',
    price: 15.99,
    originalPrice: 22.99,
    rating: 4.6,
    reviewsCount: 940,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop',
    volume: '200ml',
    description: 'Sulfate-free keratin restorative shampoo designed to rebuild damaged strands, eliminate frizz, and add mirror-like shine.',
    ingredients: ['Hydrolyzed Keratin', 'Bamboo Fiber Extract', 'Argan Oil', 'Biotin'],
    benefits: ['Repairs heat and color damage', 'Sulfate-free & color safe', 'Volumizes fine strands', 'Reduces breakage by 80%'],
    howToUse: 'Lather into wet hair, massage scalp for 2 minutes, and rinse thoroughly.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-aloe-vera-gel',
    name: 'Organic Aloe Vera Soothing Gel',
    category: 'Body Care',
    subcategory: 'Moisturizers',
    price: 12.99,
    originalPrice: 18.99,
    rating: 4.9,
    reviewsCount: 3100,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    volume: '150ml',
    description: '99% pure cold-pressed organic aloe vera that instantly cools irritated skin, relieves sunburns, and hydrates after shaving.',
    ingredients: ['99% Organic Aloe Barbadensis Leaf Juice', 'Cucumber Extract', 'Allantoin', 'Green Tea'],
    benefits: ['Instant cooling relief', 'Multi-purpose for face, body and hair', 'Oil-free soothing', 'Non-sticky fast absorption'],
    howToUse: 'Apply freely onto dry, heated, or sensitive skin as needed.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-matte-lipstick',
    name: 'Velvet Matte Long-Wear Lipstick',
    category: 'Makeup',
    subcategory: 'Lip Products',
    makeupType: 'Lip',
    makeupStyles: ['Matte', 'HD / Airbrush', 'Smokey Eye'],
    price: 16.00,
    originalPrice: 22.00,
    rating: 4.8,
    reviewsCount: 1650,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
    volume: '4.2g (Solid Color Tube)',
    description: 'Solid color tube for lips with a rich, velvety high-pigment formula enriched with nourishing jojoba and vitamin E for comfortable 12-hour wear.',
    ingredients: ['Jojoba Seed Oil', 'Vitamin E', 'Natural Mineral Pigments', 'Candelilla Wax'],
    benefits: ['Solid color tube for lips', '12-hour transfer-resistant wear', 'Non-drying velvet finish', 'Cruelty-free & vegan'],
    howToUse: 'Glide directly across lips from the center outward. Layer for intensified coverage.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-niacinamide-zinc',
    name: 'Niacinamide 10% + Zinc 1% Serum',
    category: 'Skin Care',
    subcategory: 'Serums',
    price: 21.99,
    originalPrice: 28.00,
    rating: 4.8,
    reviewsCount: 184,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1608248597359-561330366a5a?q=80&w=800&auto=format&fit=crop',
    volume: '30ml',
    description: 'High-potency mineral blemish formula that regulates sebum activity, shrinks enlarged pores, and calms redness.',
    ingredients: ['10% Niacinamide', '1% Zinc PCA', 'Tamarindus Indica Seed Gum', 'Isoceteth-20'],
    benefits: ['Controls excess shine', 'Minimizes pore appearance', 'Clears congestion', 'Balances skin oiliness'],
    howToUse: 'Apply a few drops across the entire face morning and evening before heavier creams.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-rose-water-toner',
    name: 'Pure Rose Water Facial Toner',
    category: 'Skin Care',
    subcategory: 'Cleansers',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.9,
    reviewsCount: 142,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop',
    volume: '100ml',
    description: 'Steam-distilled from organic Damask rose petals to rebalance skin pH, refresh tired complexions, and prep pores for serums.',
    ingredients: ['100% Rosa Damascena Flower Distillate', 'Vegetable Glycerin', 'Rosemary Leaf Extract'],
    benefits: ['Instantly hydrates & refreshes', 'Refines pores', 'Anti-inflammatory botanicals', 'Delicate natural aroma'],
    howToUse: 'Mist directly onto face with closed eyes or apply with a cotton pad after cleansing.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-tea-tree-wash',
    name: 'Tea Tree Purifying Face Wash',
    category: 'Skin Care',
    subcategory: 'Cleansers',
    price: 16.99,
    originalPrice: 24.00,
    rating: 4.7,
    reviewsCount: 95,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop',
    volume: '120ml',
    description: 'Foaming gel cleanser powered by Australian tea tree oil and salicylic acid to deep clean pores and prevent breakouts without irritation.',
    ingredients: ['Melaleuca Alternifolia (Tea Tree) Leaf Oil', 'Salicylic Acid 1%', 'Eucalyptus Oil', 'Witch Hazel'],
    benefits: ['Fights acne-causing bacteria', 'Removes waterproof impurities', 'Refreshes congested pores', 'Soothes inflammation'],
    howToUse: 'Lather into hands with water, massage over face for 60 seconds, and rinse.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-argan-hair-oil',
    name: 'Moroccan Argan Hair Nourishing Oil',
    category: 'Hair Care',
    subcategory: 'Serums',
    price: 22.99,
    originalPrice: 32.00,
    rating: 4.9,
    reviewsCount: 203,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop',
    volume: '50ml',
    description: '100% cold-pressed organic Moroccan argan oil packed with fatty acids and vitamin E to tame flyaways, mend split ends, and add glossy softness.',
    ingredients: ['Pure Argania Spinosa Kernel Oil', 'Sweet Almond Oil', 'Rosehip Oil'],
    benefits: ['Thermal heat protection up to 450°F', 'Tames frizz without weighing down', 'Intense luster & softness', 'Promotes healthy scalp'],
    howToUse: 'Work 1-2 pumps through towel-dried or dry hair focusing on mid-lengths to ends.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-lavender-bath-salt',
    name: 'Organic Lavender Detox Bath Salt',
    category: 'Body Care',
    subcategory: 'Body Care',
    price: 18.99,
    originalPrice: 26.00,
    rating: 4.8,
    reviewsCount: 88,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    volume: '300g',
    description: 'Hand-harvested Dead Sea salts infused with pure French lavender essential oil and dried botanicals for tranquil stress relief and deep muscle relaxation.',
    ingredients: ['Dead Sea Mineral Salt', 'Epsom Salt (Magnesium Sulfate)', 'French Lavender Oil', 'Dried Chamomile Flowers'],
    benefits: ['Relieves tired muscles & tension', 'Softens rough skin', 'Promotes restful sleep', 'Aromatherapeutic calm'],
    howToUse: 'Add 2-3 generous scoops into warm running bathwater and soak for 20 minutes.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-wellness-gua-sha',
    name: 'Rose Quartz Sculpting Gua Sha & Facial Roller Set',
    category: 'Health & Wellness',
    subcategory: 'Beauty Tools',
    price: 24.00,
    originalPrice: 35.00,
    rating: 4.9,
    reviewsCount: 420,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1512290900672-1f41634b8c6f?q=80&w=800&auto=format&fit=crop',
    volume: 'Dual-Piece Crystal Kit',
    description: 'Authentic 100% Brazilian rose quartz tools engineered to stimulate lymphatic drainage, relieve facial muscle tension, and sculpt cheekbone contours.',
    ingredients: ['100% Natural Rose Quartz Crystal', 'Zinc Alloy Rust-Proof Frame', 'Protective Velvet Pouch'],
    benefits: ['Reduces morning puffiness', 'Boosts collagen & blood circulation', 'Aids serum absorption', 'Cooling soothing crystal energy'],
    howToUse: 'Glide roller outwards from center of face; scrape gently upward along jawline and neck with the curved gua sha stone.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-wellness-herbal-tea',
    name: 'Organic Glow Botanical Herbal Detox Infusion',
    category: 'Health & Wellness',
    subcategory: 'Wellness Teas',
    price: 16.50,
    originalPrice: 22.00,
    rating: 4.8,
    reviewsCount: 310,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    volume: '100g Loose Leaf Botanical Blend',
    description: 'Handcrafted antioxidant-rich herbal blend of whole chamomile blossoms, organic rose petals, peppermint, and spearmint that clears complexion from within.',
    ingredients: ['Organic Chamomile', 'Rose Petals', 'Spearmint', 'Dandelion Root', 'Hibiscus'],
    benefits: ['Caffeine-free gut & skin detox', 'Calms stress and cortisol levels', 'Promotes sound sleep', 'Rich in natural polyphenols'],
    howToUse: 'Steep 1 heaping teaspoon in freshly boiled water for 5-7 minutes. Sip morning and evening.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-wellness-lavender-oil',
    name: 'Pure Therapeutic French Lavender Essential Oil',
    category: 'Health & Wellness',
    subcategory: 'Aromatherapy',
    price: 19.00,
    originalPrice: 26.00,
    rating: 5.0,
    reviewsCount: 560,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop',
    volume: '15ml Amber Dropper Bottle',
    description: '100% pure steam-distilled French lavender oil for aromatherapy diffusion, bath ritual enhancement, and evening relaxation.',
    ingredients: ['100% Pure Lavandula Angustifolia Oil (France)'],
    benefits: ['Induces deep calm & restful sleep', 'Soothes minor skin irritations', '100% therapeutic grade', 'Zero synthetic additives'],
    howToUse: 'Add 4-5 drops to an ultrasonic diffuser or mix 2 drops with a carrier oil before massage.',
    inStock: true,
    featured: true
  },

  // Mehndi Designs Collection (Hands & Feet with varied styles and prices)
  {
    id: 'prod-mehndi-bridal-hands',
    name: 'Royal Dulhan Bridal Hand Mehndi Design',
    category: 'Mehndi Designs',
    subcategory: 'Hands - Bridal',
    price: 85.00,
    originalPrice: 115.00,
    rating: 5.0,
    reviewsCount: 420,
    tag: 'Bestseller',
    image: '/images/mehndi_bridal_hands_1786879695626.jpg',
    volume: 'Full Both Hands & Forearms (Includes Stencil + 4 Organic Cones)',
    description: 'Ultra-intricate Royal Dulhan bridal Mehndi design featuring ornate peacock pairs, delicate mandala wrists, intricate jali mesh lace, and floral paisleys. Yields a deep mahogany-burgundy stain.',
    ingredients: ['100% Rajasthani Organic Sojat Henna', 'Eucalyptus & Tea Tree Essential Oils', 'Clove Oil', 'Lemon Sugar Glaze Sealant'],
    benefits: ['Rich 48-hour peak dark stain', 'Long-lasting 10-14 days', 'Zero chemical dyes or PPD', 'Step-by-step master application template included'],
    howToUse: 'Apply paste with fine-tip cone, let dry 4-6 hours, dab lemon-sugar syrup, and scrape gently without water for 12 hours.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-mehndi-arabic-feet',
    name: 'Arabic Floral Feet & Anklet Mehndi Design',
    category: 'Mehndi Designs',
    subcategory: 'Feet - Arabic',
    price: 35.00,
    originalPrice: 48.00,
    rating: 4.9,
    reviewsCount: 310,
    tag: 'Top Rated',
    image: '/images/mehndi_arabic_feet_1786879714547.jpg',
    volume: 'Both Feet & Ankles (Includes 2 Fine Cones + Sealant Spray)',
    description: 'Graceful and breezy Arabic henna art contouring the feet with floral vine cascades, delicate lace anklet cuffs, and elegant open space geometry.',
    ingredients: ['Pure Organic Henna Powder', 'Lavender Essential Oil', 'Natural Cane Sugar', 'Distilled Rose Water'],
    benefits: ['Quick 20-minute application', 'Deep chestnut color', 'Gentle on sensitive skin', 'Perfect for weddings, parties & Eid'],
    howToUse: 'Trace the floral vine starting from the big toe leading up across the instep to the ankle bracelet band.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-mehndi-minimal-hands',
    name: 'Modern Minimalist Mandala Hand Henna',
    category: 'Mehndi Designs',
    subcategory: 'Hands - Minimalist',
    price: 22.00,
    originalPrice: 30.00,
    rating: 4.8,
    reviewsCount: 195,
    tag: 'New',
    image: '/images/mehndi_minimal_hands_1786879730597.jpg',
    volume: 'Both Palms & Fingers (Includes 2 Precision Cones)',
    description: 'Chic contemporary Bohemian minimalist design centering a dainty solar mandala on the palm with delicate chevron finger rings and wrist chain accents.',
    ingredients: ['Organic Sojat Henna', 'Eucalyptus Oil', 'Pure Molasses', 'Tea Tree Infusion'],
    benefits: ['Dries in 15 minutes', 'Understated luxury aesthetic', 'Skin-nourishing essential oils', 'Includes precision transfer stencil'],
    howToUse: 'Draw the central focal mandala first, then complete delicate knuckle line patterns and wrist bracelet.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-mehndi-dulhan-feet',
    name: 'Grand Traditional Bridal Dulhan Feet Mehndi',
    category: 'Mehndi Designs',
    subcategory: 'Feet - Bridal',
    price: 65.00,
    originalPrice: 90.00,
    rating: 4.9,
    reviewsCount: 280,
    tag: 'Bestseller',
    image: '/images/mehndi_dulhan_feet_1786879748808.jpg',
    volume: 'Full Bridal Feet & Shin Coverage (Includes 3 Henna Cones + Aftercare Balm)',
    description: 'Heavy traditional bridal foot Mehndi adorned with dense lotus carvings, checks-jali, intricate toe caps, and royal paisley side bands extending up the calf.',
    ingredients: ['Triple-Sifted Organic Henna', 'Nilgiri Eucalyptus Extract', 'Cold-Pressed Clove Oil', 'Beeswax Sealant Balm'],
    benefits: ['Intense dark maroon stain', 'Waterproof aftercare balm included', 'Long durability 12-16 days', 'Traditional dulhan ceremony favorite'],
    howToUse: 'Cover soles edges and toes first, then craft the dense jaal pattern upward to the mid-calf.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-mehndi-khafif-hands',
    name: 'Khafif Gulf Floral Hands Henna Art',
    category: 'Mehndi Designs',
    subcategory: 'Hands - Indo-Arabic',
    price: 42.00,
    originalPrice: 55.00,
    rating: 4.7,
    reviewsCount: 165,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    volume: 'Full Back-Hand & Wrist Pair (Includes 2 Gulf Dark Cones)',
    description: 'Exquisite Gulf Khafif style highlighting bold floral outlines shaded with fine micro-hatching, cascading diagonal trails, and decorative cuff bands.',
    ingredients: ['Dark Henna Paste', 'Eucalyptus Leaf Extract', 'Fructose Syrup', 'Rosemary Oil'],
    benefits: ['High contrast shading', 'Fast stain development (24h)', 'All-natural plant formulation', 'Free design flash card'],
    howToUse: 'Outline large petals with steady pressure, fill with 45-degree micro-shading strokes, and let rest.',
    inStock: true,
    featured: false
  },
  {
    id: 'prod-mehndi-jaal-feet',
    name: 'Festive Jaal Net & Toe Ring Feet Henna',
    category: 'Mehndi Designs',
    subcategory: 'Feet - Casual & Party',
    price: 28.00,
    originalPrice: 38.00,
    rating: 4.8,
    reviewsCount: 140,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop',
    volume: 'Feet Tops & Toe Bands (Includes 2 Cones)',
    description: 'Delicate diagonal net jaal with micro-dot intersections across the instep, paired with ornate toe ring bands and side scallop borders.',
    ingredients: ['Organic Henna Leaf Powder', 'Tea Tree Oil', 'Cane Sugar Sealant', 'Almond Oil'],
    benefits: ['Clean modern geometry', 'Crisp line definition', 'Quick drying', 'Great for sangeet & festive gatherings'],
    howToUse: 'Lay down grid lines evenly across the instep and place fine dots at each crosshair.',
    inStock: true,
    featured: false
  },

  // ----------------------------------------------------
  // MAKEUP COLLECTION: FACE, CHEEK, EYE & LIP PRODUCTS
  // ----------------------------------------------------
    // FACE PRODUCTS
  {
    id: 'prod-makeup-primer',
    name: 'Hydro-Grip Pore-Blurring Face Primer',
    category: 'Makeup',
    subcategory: 'Face Products',
    makeupType: 'Face',
    makeupStyles: ['Natural / No-Makeup Look', 'Matte', 'Dewy / Glowy', 'HD / Airbrush'],
    price: 24.00,
    originalPrice: 32.00,
    rating: 4.9,
    reviewsCount: 520,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    volume: '30ml Gel-Base Bottle',
    description: 'Primer: A base gel or cream used before foundation. Creates a smooth, blurred canvas that grips makeup for 16-hour crease-proof wear.',
    ingredients: ['Hyaluronic Acid 2%', 'Niacinamide', 'Aloe Water', 'Agave Extract'],
    benefits: ['A base gel or cream used before foundation', 'Blurs enlarged pores & texture', 'Prevents foundation oxidation', 'Hydrating gel texture'],
    howToUse: 'Pump 1-2 drops onto clean fingers and blend evenly over the face before applying foundation. Wait 60 seconds to set.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-makeup-foundation',
    name: 'Lumi-Silk Breathable Liquid Foundation',
    category: 'Makeup',
    subcategory: 'Face Products',
    makeupType: 'Face',
    makeupStyles: ['Matte', 'Dewy / Glowy', 'HD / Airbrush'],
    price: 34.00,
    originalPrice: 45.00,
    rating: 4.8,
    reviewsCount: 780,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1631730486784-545631bc2a0b?q=80&w=800&auto=format&fit=crop',
    volume: '35ml Pump Glass Bottle',
    description: 'Foundation: Liquid or cream skin-tone base. Provides buildable medium-to-full coverage with a seamless skin-like luminous finish that never cakes.',
    ingredients: ['Plant Squalane', 'Vitamin E', 'Micro-Mineral Pigments', 'Rosehip Seed Oil'],
    benefits: ['Liquid or cream skin-tone base', 'Seamless 24-hour weightless coverage', 'Evens skin discoloration', 'Non-comedogenic & dermatologist tested'],
    howToUse: 'Apply 1-2 pumps onto the back of your hand and buff into skin using a damp sponge or foundation brush.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-makeup-concealer',
    name: 'Total Camouflage Cream Concealer',
    category: 'Makeup',
    subcategory: 'Face Products',
    makeupType: 'Face',
    makeupStyles: ['Natural / No-Makeup Look', 'Matte', 'HD / Airbrush', 'Smokey Eye'],
    price: 18.00,
    originalPrice: 25.00,
    rating: 4.9,
    reviewsCount: 640,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1599733589046-10c005738ef0?q=80&w=800&auto=format&fit=crop',
    volume: '10ml Precision Wand',
    description: 'Concealer: Thick cream to hide spots or dark circles. High-coverage creamy formula enriched with caffeine and peptides to instantly erase blemishes.',
    ingredients: ['Caffeine Extract', 'Peptide Complex', 'Shea Butter', 'Centella Asiatica'],
    benefits: ['Thick cream to hide spots or dark circles', 'Crease-resistant 18-hour hold', 'Brightens under-eye shadows', 'Self-setting velvety finish'],
    howToUse: 'Dot directly onto blemishes, dark under-eye circles, or redness, and gently blend with fingertip or small brush.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-makeup-bb-cream',
    name: 'Hydra-Dew Tinted Moisturizer / BB Cream',
    category: 'Makeup',
    subcategory: 'Face Products',
    makeupType: 'Face',
    makeupStyles: ['Natural / No-Makeup Look', 'Dewy / Glowy'],
    price: 26.00,
    originalPrice: 35.00,
    rating: 4.8,
    reviewsCount: 410,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    volume: '50ml Squeeze Tube',
    description: 'Tinted Moisturizer / BB Cream: Light, skin-hydrating coverage. 3-in-1 multi-tasker combining deep hydration, broad-spectrum SPF 30, and a sheer natural tint.',
    ingredients: ['SPF 30 Mineral Zinc', 'Hyaluronic Acid', 'Green Tea Extract', 'Jojoba Oil'],
    benefits: ['Light, skin-hydrating coverage', 'Natural dewy second-skin glow', 'SPF 30 daily sun protection', 'Evens skin tone effortlessly'],
    howToUse: 'Smooth generously over cleansed face using clean fingers like a daily moisturizer for an effortless fresh face.',
    inStock: true,
    featured: false
  },
  {
    id: 'prod-makeup-setting-powder-spray',
    name: 'All-Day Lock Setting Powder & Mist Duo',
    category: 'Makeup',
    subcategory: 'Face Products',
    makeupType: 'Face',
    makeupStyles: ['Matte', 'HD / Airbrush', 'Smokey Eye'],
    price: 22.00,
    originalPrice: 30.00,
    rating: 4.9,
    reviewsCount: 390,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    volume: '20g Powder + 100ml Mist',
    description: 'Setting Powder / Spray: Locks makeup in place. Ultra-fine translucent silica powder and micro-mist spray duo that prevents shine, smudging, and transfer all day.',
    ingredients: ['Micro-Fine Silica', 'Niacinamide', 'Aloe Mist', 'Witch Hazel Extract'],
    benefits: ['Locks makeup in place', 'Zero flashback for 4K HD cameras', 'Controls midday oily shine', 'Waterproof lock for 24 hours'],
    howToUse: 'Dust translucent powder onto T-zone with a fluffy brush, then spritz setting mist in an X and T motion over the face.',
    inStock: true,
    featured: true
  },

  // CHEEK PRODUCTS
  {
    id: 'prod-makeup-blush',
    name: 'Petal Silk Soft Powder & Cream Blush',
    category: 'Makeup',
    subcategory: 'Cheek Products',
    makeupType: 'Cheek',
    makeupStyles: ['Natural / No-Makeup Look', 'Dewy / Glowy', 'Matte'],
    price: 19.00,
    originalPrice: 26.00,
    rating: 4.9,
    reviewsCount: 490,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    volume: '8g Compact (Peach & Pink Duo)',
    description: 'Blush: Adds pink or peach color to cheeks. Silky micronized formula that melts seamlessly into the skin for a healthy, youthful flush of color.',
    ingredients: ['Micronized Mineral Pigments', 'Vitamin E', 'Shea Butter', 'Chamomile Extract'],
    benefits: ['Adds pink or peach color to cheeks', 'Buildable sheer-to-vibrant tint', 'Silky blendable texture', 'Long-lasting 12-hour wear'],
    howToUse: 'Smile and sweep across the apples of cheeks, blending upwards toward the temples.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-makeup-bronzer',
    name: 'Sun-Drenched Warm Glow Bronzer',
    category: 'Makeup',
    subcategory: 'Cheek Products',
    makeupType: 'Cheek',
    makeupStyles: ['Natural / No-Makeup Look', 'Dewy / Glowy', 'HD / Airbrush'],
    price: 22.00,
    originalPrice: 30.00,
    rating: 4.8,
    reviewsCount: 350,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    volume: '10g Luxury Embossed Compact',
    description: 'Bronzer: Adds a warm, sun-tanned look. Infused with golden undertones and cocoa butter to create radiant warmth without orange cast or muddy streaks.',
    ingredients: ['Cocoa Seed Butter', 'Mineral Mica', 'Argan Oil', 'Silica'],
    benefits: ['Adds a warm, sun-tanned look', 'Soft-focus blurring finish', 'Silky non-chalky formula', 'Subtle natural warmth'],
    howToUse: 'Dust lightly in the shape of a "3" along your hairline, hollow of cheeks, and jawline.',
    inStock: true,
    featured: false
  },
  {
    id: 'prod-makeup-highlighter',
    name: 'Starlight Prism Liquid & Powder Highlighter',
    category: 'Makeup',
    subcategory: 'Cheek Products',
    makeupType: 'Cheek',
    makeupStyles: ['Dewy / Glowy', 'HD / Airbrush', 'Smokey Eye'],
    price: 21.00,
    originalPrice: 28.00,
    rating: 4.9,
    reviewsCount: 580,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1590156206657-e9a8f2a2491a?q=80&w=800&auto=format&fit=crop',
    volume: '15ml Liquid Dropper + 6g Compact',
    description: 'Highlighter: Adds a bright, shiny glow to high points of the face. Ultra-refined light-refracting pearls give a glass-skin luminous sheen without chunky glitter.',
    ingredients: ['Ultra-Fine Pearl Pigments', 'Squalane', 'Rosehip Oil', 'Vitamin C'],
    benefits: ['Adds a bright, shiny glow to high points of the face', 'Dewy wet-look reflective shine', 'Zero chalkiness or glitter fallout', 'Stays vibrant for 14 hours'],
    howToUse: 'Dab onto cheekbone peaks, bridge of nose, brow bone, and cupid’s bow. Tap with fingertips to melt in.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-makeup-contour',
    name: 'Sculpt & Define Precision Cream Contour',
    category: 'Makeup',
    subcategory: 'Cheek Products',
    makeupType: 'Cheek',
    makeupStyles: ['Matte', 'HD / Airbrush', 'Smokey Eye'],
    price: 19.50,
    originalPrice: 27.00,
    rating: 4.7,
    reviewsCount: 310,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop',
    volume: '7.5g Dual-Ended Stick',
    description: 'Contour: Darker shade used to shape and slim features. Cool-toned matte formula mimics natural facial shadows to carve out cheekbones and define the jaw.',
    ingredients: ['Candelilla Wax', 'Jojoba Oil', 'Mineral Iron Oxides', 'Kaolin Clay'],
    benefits: ['Darker shade used to shape and slim features', 'Cool-toned natural shadow effect', 'Effortless cream-to-powder glide', 'HD camera approved definition'],
    howToUse: 'Swipe directly under cheekbones, along nose sides, and under jawline; blend upward with a contour brush.',
    inStock: true,
    featured: false
  },

  // EYE PRODUCTS
  {
    id: 'prod-makeup-eyeshadow',
    name: 'Velvet Horizon 12-Pan Eyeshadow Palette',
    category: 'Makeup',
    subcategory: 'Eye Products',
    makeupType: 'Eye',
    makeupStyles: ['Smokey Eye', 'Natural / No-Makeup Look', 'HD / Airbrush'],
    price: 36.00,
    originalPrice: 48.00,
    rating: 4.9,
    reviewsCount: 710,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1583241800698-e9ab01830a27?q=80&w=800&auto=format&fit=crop',
    volume: '12 Shades Palette (Mattes & Shimmers)',
    description: 'Eyeshadow: Colored powder or cream for eyelids. 12 buttery rich warm neutral, smokey charcoal, and molten shimmer shades for versatile day-to-night looks.',
    ingredients: ['Triple-Milled Mineral Powders', 'Zinc Stearate', 'Vitamin E', 'Jojoba Esters'],
    benefits: ['Colored powder or cream for eyelids', 'Intense one-swipe color payoff', 'Zero fallout and crease-proof', 'Mix of velvety mattes and multidimensional shimmers'],
    howToUse: 'Sweep base transition shades across crease, pack deep smokey tones on outer corners, and pat metallic shimmer onto lid center.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-makeup-eyeliner',
    name: 'Precision 24H Waterproof Liquid & Gel Eyeliner',
    category: 'Makeup',
    subcategory: 'Eye Products',
    makeupType: 'Eye',
    makeupStyles: ['Smokey Eye', 'HD / Airbrush', 'Natural / No-Makeup Look'],
    price: 15.00,
    originalPrice: 20.00,
    rating: 4.8,
    reviewsCount: 890,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1583241801142-113b9f5bbde5?q=80&w=800&auto=format&fit=crop',
    volume: '0.55ml Felt Tip Pen + Gel Pencil',
    description: 'Eyeliner: Pencil or liquid to line the eyes. 0.1mm micro-fine flexible brush tip delivers crisp jet-black lines that resist water, sweat, and smudging.',
    ingredients: ['Carbon Black Pigment', 'Acrylates Copolymer', 'Castor Oil', 'Aloe Leaf Extract'],
    benefits: ['Pencil or liquid to line the eyes', '24-hour smudge-proof waterproof hold', 'Ultra-sharp fine wing precision', 'Deep midnight black intensity'],
    howToUse: 'Trace along upper lash line starting from inner corner outward, flicking up slightly at outer edge for a sharp cat-eye wing.',
    inStock: true,
    featured: false
  },
  {
    id: 'prod-makeup-mascara',
    name: 'Ultra-Volume 4D Panoramic Mascara',
    category: 'Makeup',
    subcategory: 'Eye Products',
    makeupType: 'Eye',
    makeupStyles: ['Smokey Eye', 'Natural / No-Makeup Look', 'HD / Airbrush', 'Dewy / Glowy'],
    price: 18.00,
    originalPrice: 24.00,
    rating: 4.9,
    reviewsCount: 1120,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?q=80&w=800&auto=format&fit=crop',
    volume: '12ml Hourglass Brush Wand',
    description: 'Mascara: Dark liquid to darken and lengthen eyelashes. Innovative tubing fiber formula that coats lashes from root to tip for dramatic volume without clumping.',
    ingredients: ['Biotinoyl Tripeptide', 'Panthenol (Pro-Vitamin B5)', 'Carnauba Wax', 'Carbon Mineral Black'],
    benefits: ['Dark liquid to darken and lengthen eyelashes', '300% visible lash lift and volume', 'Clump-free hourglass silicone brush', 'Easy warm-water removal'],
    howToUse: 'Wiggle brush wand at lash roots and pull through to tips in an upward rolling motion. Layer for extra drama.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-makeup-eyebrow',
    name: 'Dual Sculpt Micro Eyebrow Pencil & Clear Gel',
    category: 'Makeup',
    subcategory: 'Eye Products',
    makeupType: 'Eye',
    makeupStyles: ['Natural / No-Makeup Look', 'Matte', 'HD / Airbrush'],
    price: 14.50,
    originalPrice: 19.00,
    rating: 4.7,
    reviewsCount: 460,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?q=80&w=800&auto=format&fit=crop',
    volume: '0.08g Micro-Lead + 4ml Brow Gel',
    description: 'Eyebrow Pencil / Gel: Shapes and fills in brows. 1.5mm ultra-fine pencil to mimic natural hair strokes paired with a laminated hold setting gel.',
    ingredients: ['Plant Wax Matrix', 'Hydrolyzed Silk', 'Vitamin E', 'Mineral Pigments'],
    benefits: ['Shapes and fills in brows', 'Mimics realistic individual brow hairs', 'All-day laminated brow hold', 'Spoolie brush included'],
    howToUse: 'Flick fine upward strokes to fill sparse areas, then brush through with clear setting gel to lock hairs in place.',
    inStock: true,
    featured: false
  },

  // LIP PRODUCTS
  {
    id: 'prod-makeup-lip-gloss',
    name: 'Glass-Shine Hydrating Plumping Lip Gloss',
    category: 'Makeup',
    subcategory: 'Lip Products',
    makeupType: 'Lip',
    makeupStyles: ['Dewy / Glowy', 'Natural / No-Makeup Look'],
    price: 14.00,
    originalPrice: 18.00,
    rating: 4.8,
    reviewsCount: 840,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
    volume: '6.5ml Gloss Tube',
    description: 'Lip Gloss: Shiny, wet-look finish for lips. Non-sticky high-shine mirror glaze enriched with hyaluronic spheres for visibly plumper, fuller lips.',
    ingredients: ['Hyaluronic Filling Spheres', 'Peppermint Essential Oil', 'Sweet Almond Oil', 'Vitamin E'],
    benefits: ['Shiny, wet-look finish for lips', 'Non-sticky ultra-comfortable shine', 'Visibly plumps & softens dry lips', 'Delicious vanilla scent'],
    howToUse: 'Swipe generously over bare lips or layer over lip liner/lipstick for high-wattage shine.',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-makeup-lip-liner',
    name: 'Stay-All-Day Precision Velvet Lip Liner',
    category: 'Makeup',
    subcategory: 'Lip Products',
    makeupType: 'Lip',
    makeupStyles: ['Matte', 'Smokey Eye', 'HD / Airbrush'],
    price: 12.00,
    originalPrice: 16.00,
    rating: 4.7,
    reviewsCount: 380,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop',
    volume: '1.2g Slim Pencil',
    description: 'Lip Liner: Pencil to outline the lips. Creamy water-resistant pencil that defines, reshapes, and prevents lipstick from feathering or bleeding.',
    ingredients: ['Carnauba Wax', 'Jojoba Oil', 'Mineral Pigments', 'Vitamin C'],
    benefits: ['Pencil to outline the lips', 'Prevents feathering and bleeding', 'Creamy glide without tugging', 'Long-wear waterproof barrier'],
    howToUse: 'Trace the outer perimeter of your lip line, slightly contouring the cupid’s bow. Fill in entire lips as a base if desired.',
    inStock: true,
    featured: false
  },
  {
    id: 'prod-makeup-lip-stain',
    name: 'Water-Tint 24H Weightless Lip Stain',
    category: 'Makeup',
    subcategory: 'Lip Products',
    makeupType: 'Lip',
    makeupStyles: ['Natural / No-Makeup Look', 'Dewy / Glowy'],
    price: 15.50,
    originalPrice: 21.00,
    rating: 4.9,
    reviewsCount: 620,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    volume: '5ml Glass Bottle',
    description: 'Lip Stain: Long-lasting light color liquid. Water-based juice tint that sinks into lips for a weightless, transfer-proof popsicle gradient stain.',
    ingredients: ['Pomegranate Fruit Water', 'Glycerin', 'Aloe Vera Extract', 'Natural Fruit Pigments'],
    benefits: ['Long-lasting light color liquid', 'Transfer-proof & mask-proof color', 'Feather-light watery texture', 'Does not crack or dry lips'],
    howToUse: 'Dab 2-3 drops on center of lips and quickly tap outwards with your fingertip for a natural blotted gradient.',
    inStock: true,
    featured: true
  }
];

export interface MakeupStyleInfo {
  id: string;
  name: string;
  badge: string;
  description: string;
  recommendedProducts: string[];
  tags: string[];
}

export const POPULAR_MAKEUP_STYLES: MakeupStyleInfo[] = [
  {
    id: 'natural-no-makeup',
    name: 'Natural / No-Makeup Look',
    badge: '🌿 Fresh & Minimal',
    description: 'Minimal products for a fresh face. Enhances your natural features with tinted hydrators, subtle cream blush, sheer lip stains, and groomed brows.',
    recommendedProducts: ['BB Cream / Tinted Moisturizer', 'Poreless Primer', 'Petal Cream Blush', 'Lip Stain', 'Brow Gel'],
    tags: ['Light Coverage', 'Skin-First', 'Everyday']
  },
  {
    id: 'matte',
    name: 'Matte',
    badge: '✨ Shine-Free Elegance',
    description: 'Shine-free, flat finish. Long-lasting velvet textures, pore-blurring primers, oil-control setting powders, and rich matte lipsticks for a velvety smooth look.',
    recommendedProducts: ['Matte Liquid Foundation', 'Setting Powder & Mist', 'Velvet Matte Lipstick', 'Cream Contour', 'Gel Liner'],
    tags: ['Zero Shine', '16H Wear', 'All Skin Types']
  },
  {
    id: 'dewy-glowy',
    name: 'Dewy / Glowy',
    badge: '💧 Glass Skin Shine',
    description: 'Shiny, dewy, wet skin look. Focuses on reflective light with liquid highlighters, plumping lip glosses, luminous foundations, and radiant bronzers.',
    recommendedProducts: ['Prism Liquid Highlighter', 'Hydra-Dew BB Cream', 'Glass-Shine Lip Gloss', 'Sun Glow Bronzer'],
    tags: ['Radiant Glow', 'Glass Skin', 'Hydrated']
  },
  {
    id: 'smokey-eye',
    name: 'Smokey Eye',
    badge: '🔥 Dramatic & Sultry',
    description: 'Dark, blended eyeshadow around the eyes. Creates depth and intensity with gradient charcoal and warm chocolate eyeshadows, waterproof jet-black eyeliner, and 4D mascara.',
    recommendedProducts: ['Velvet 12-Pan Eyeshadow', 'Waterproof Eyeliner', '4D Volumizing Mascara', 'Precision Lip Liner', 'Camouflage Concealer'],
    tags: ['Evening Glam', 'Blended Depth', 'Iconic']
  },
  {
    id: 'hd-airbrush',
    name: 'HD / Airbrush',
    badge: '📸 4K Camera Ready',
    description: 'High-coverage, smooth finish meant for cameras. Ultra-refined full coverage that blurs every texture, hides spots, and stays flawless under studio lights and lenses.',
    recommendedProducts: ['Full Liquid Foundation', 'Total Cover Concealer', 'Precision Contour Stick', 'Setting Powder Duo', 'Grip Primer'],
    tags: ['Full Coverage', 'Studio Grade', 'Zero Flashback']
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Saqib Visuals',
    question: 'What is Saqib Visuals?',
    answer: 'Saqib Visuals is the creative brand of Muhammad Saqib, specializing in Full-Stack Web Development, AI-powered solutions, UI/UX architecture, and digital content creation.'
  },
  {
    id: 'faq-2',
    category: 'Saqib Visuals',
    question: 'What services do you offer?',
    answer: 'I offer a wide range of services including modern web development (Next.js, React, Tailwind CSS), mobile app development, UI/UX design, custom AI integration, database architecture, graphic design, and video editing.'
  },
  {
    id: 'faq-3',
    category: 'Saqib Visuals',
    question: 'Where are you based?',
    answer: 'I am based in Faisalabad, Pakistan, but I work with clients globally to deliver premium digital solutions, customized software, and high-converting e-commerce web experiences.'
  },
  {
    id: 'faq-4',
    category: 'Skincare & Orders',
    question: 'How fast is delivery & what are the shipping rates?',
    answer: 'We offer free delivery on all orders over $50. Standard delivery takes 2–4 business days within major metro areas. All packages are insured and tracked.'
  },
  {
    id: 'faq-5',
    category: 'Skincare & Orders',
    question: 'Are all Glowora beauty products 100% original and dermatologically tested?',
    answer: 'Yes! Every product in our collection is 100% authentic, cruelty-free, and formulated with dermatologically tested botanical and clinical actives suitable for sensitive skin.'
  },
  {
    id: 'faq-6',
    category: 'Development Services',
    question: 'Can Muhammad Saqib build custom e-commerce and web apps for my business?',
    answer: 'Absolutely! Whether you need a high-speed e-commerce storefront like Glowora, a SaaS platform, a mobile application, or custom AI workflows, reach out directly through our contact form or WhatsApp (+92 347 8936242).'
  }
];

export const INITIAL_INQUIRIES: UserInquiry[] = [
  {
    id: 'inq-101',
    name: 'Ayesha Khan',
    email: 'ayesha.k@example.com',
    phone: '+92 300 1234567',
    subject: 'Skin Care Routine for Dry Sensitive Skin',
    serviceType: 'Skincare Consultation',
    message: 'Hello, I have very sensitive skin prone to redness. Which serum from your collection would you recommend between Peach 70 and Catalyst Anti-Pigmentation?',
    status: 'new',
    priority: 'normal',
    createdAt: '2026-08-15T08:30:00Z',
    adminNotes: 'Customer interested in Peach 70 and gentle care products.'
  },
  {
    id: 'inq-102',
    name: 'David Miller',
    email: 'david.miller@techflow.io',
    phone: '+1 415 890 1234',
    subject: 'Custom Next.js E-commerce Project',
    serviceType: 'Website Development',
    message: 'Hi Saqib, I loved the UI and fluid animations of Glowora! We are looking to build a multi-brand beauty storefront and would love to discuss a contract with Saqib Visuals.',
    status: 'in_progress',
    priority: 'high',
    createdAt: '2026-08-14T14:20:00Z',
    adminNotes: 'Initial portfolio review sent. Scheduled discovery call.'
  },
  {
    id: 'inq-103',
    name: 'Zainab Fatima',
    email: 'zainab.f@gmail.com',
    phone: '+92 321 9876543',
    subject: 'Bulk Order Inquiry for Salon in Lahore',
    serviceType: 'Order Question',
    message: 'We run a premier beauty salon and want to order 20 units of the Curated Essentials Skincare Kit and 30 bottles of Peach 70 Niacin Serum. Do you provide wholesale pricing?',
    status: 'resolved',
    priority: 'urgent',
    createdAt: '2026-08-13T10:15:00Z',
    adminNotes: 'Wholesale catalog & 25% bulk quote shared via email.',
    replySent: 'Wholesale quotation sent with delivery within 48 hours.'
  }
];

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  announcementText: '✨ Radiate Confidence Every Day • Free Worldwide Shipping on orders over $50 • Use Code: GLOW20',
  announcementActive: true,
  heroBadgeText: 'Radiate Confidence Every Day',
  heroTitle: 'Beauty & Wellness',
  heroSubtitle: 'Discover premium health & beauty products formulated to nourish your skin, hair & body from the inside out.',
  promoDiscountPercent: 20,
  contactEmail: 'mrsaqib242242@gmail.com',
  contactPhone: '+92 347 8936242',
  contactLocation: 'Faisalabad, Pakistan'
};

export const SAQIB_PORTFOLIO_DATA = {
  name: 'Muhammad Saqib',
  brandName: 'Saqib Visuals',
  role: 'Senior Full-Stack & AI Solutions Engineer',
  tagline: 'Turning ideas into modern digital experiences through technology, creativity, and innovation.',
  location: 'Faisalabad, Pakistan',
  phone: '+92 347 8936242',
  email: 'mrsaqib242242@gmail.com',
  stats: [
    { label: 'Projects Completed', value: '85+' },
    { label: 'Global Clients', value: '40+' },
    { label: 'Client Satisfaction', value: '99.4%' },
    { label: 'Years Experience', value: '5+' }
  ],
  skills: [
    { category: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js'] },
    { category: 'Backend & Cloud', items: ['Node.js', 'Express', 'PostgreSQL', 'Firestore / Firebase', 'REST / GraphQL', 'Cloud Run'] },
    { category: 'AI & Intelligence', items: ['Gemini API', 'LLM Integration', 'LangChain', 'Prompt Architecture', 'RAG Pipelines'] },
    { category: 'Design & Creative', items: ['UI/UX Prototyping', 'Figma', 'Graphic Design', 'Motion Design', 'Video Editing'] }
  ],
  featuredProjects: [
    {
      title: 'Glowora Skincare & Beauty Commerce',
      category: 'Full-Stack E-Commerce',
      description: 'Modern luxury beauty storefront with dynamic product catalog, interactive before/after sliders, cart & real-time admin content portal.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API']
    },
    {
      title: 'AI Studio Smart Assistant Platform',
      category: 'AI Application',
      description: 'Enterprise AI dashboard leveraging Gemini models for real-time document analysis, multi-modal chat, and automated content generation.',
      tech: ['Next.js', 'Google GenAI SDK', 'Tailwind CSS']
    },
    {
      title: 'NexGen Cloud Asset Manager',
      category: 'SaaS Platform',
      description: 'High-performance digital asset pipeline with secure permissions, analytics visualization, and real-time collaboration.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind']
    }
  ]
};

// ============================================================================
// MAKEOVER STUDIO COLLECTION: 20 DISTINCT MAKEUP TRANSFORMATIONS
// ============================================================================

export interface MakeoverFaceProductSpec {
  name: string; // e.g. Primer, Foundation, Concealer, Tinted Moisturizer / BB Cream, Setting Powder / Spray
  description: string;
  recommendedId?: string;
}

export interface MakeoverStyle {
  id: string;
  number: number;
  name: string;
  tagline: string;
  isImportant: boolean; // Most important / common ones: Day, Night, Party, Bridal, Engagement, Reception, Natural, Soft Glam, Full Glam, HD, Airbrush
  category: 'Bridal & Wedding' | 'Evening & Glam' | 'Everyday & Natural' | 'High-Definition & Technique' | 'Festive & Special Events';
  image: string;
  accentColor: string;
  finish: string;
  coverage: string;
  duration: string;
  idealFor: string;
  description: string;
  faceProducts: {
    primer: string;
    foundation: string;
    concealer: string;
    bbCreamOrTint?: string;
    settingPowderSpray: string;
  };
  cheekProducts: {
    blush: string;
    bronzer?: string;
    highlighter?: string;
    contour?: string;
  };
  eyeProducts: {
    eyeshadow: string;
    eyeliner: string;
    mascara: string;
    eyebrows: string;
  };
  lipProducts: {
    lipstick?: string;
    lipGloss?: string;
    lipLiner?: string;
    lipStain?: string;
  };
  steps: string[];
  artistTip: string;
}

export const MAKEOVER_COLLECTION: MakeoverStyle[] = [
  {
    id: 'makeover-day',
    number: 1,
    name: 'Day Makeup',
    tagline: 'Sunlit Freshness & Clean Breathable Radiance',
    isImportant: true,
    category: 'Everyday & Natural',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-amber-500/20 to-orange-500/20 text-amber-800',
    finish: 'Natural Satin Glow',
    coverage: 'Light to Medium Sheer',
    duration: '30 - 40 mins',
    idealFor: 'Daytime brunches, meetings, casual outings, natural daylight photography',
    description: 'Designed for daytime illumination with sheer breathable textures, soft sun-kissed warmth, and gentle rose tones that look flawless in bright natural lighting.',
    faceProducts: {
      primer: 'Hydrating gel primer with light-diffusing botanicals',
      foundation: 'Lightweight water-infused liquid foundation or sheer skin tint',
      concealer: 'Brightening lightweight liquid concealer for under-eye circles',
      bbCreamOrTint: 'Hydra-Dew Tinted Moisturizer with SPF 30 for sun defense',
      settingPowderSpray: 'Micro-fine hydrating translucent mist with dewy locking action'
    },
    cheekProducts: {
      blush: 'Soft warm peach cream blush melted onto cheek apples',
      bronzer: 'Subtle sun-swept terracotta bronzer across high cheekbones',
      highlighter: 'Champagne liquid dew drop on cheekbone peaks',
      contour: 'Soft sheer cream contour blended upward'
    },
    eyeProducts: {
      eyeshadow: 'Warm beige, golden peach, and soft hazelnut wash',
      eyeliner: 'Soft brown smudge pencil tightlined at lash base',
      mascara: 'Brown-black lengthening mascara with separated lashes',
      eyebrows: 'Feathered micro-strokes with clear setting brow gel'
    },
    lipProducts: {
      lipstick: 'Creamy satin nude pink lipstick',
      lipGloss: 'Sheer vanilla honey gloss on center of lips',
      lipLiner: 'Natural rosewood precision lip liner',
      lipStain: 'Fruit-tinted water stain'
    },
    steps: [
      'Prep skin with hydrating gel primer for moisture grip.',
      'Blend light liquid foundation or BB cream evenly using a damp sponge.',
      'Spot-conceal under eyes and any redness.',
      'Dab cream peach blush and feather soft brown liner along the upper lash line.',
      'Finish with satin nude lips and a revitalizing hydration mist.'
    ],
    artistTip: 'Keep pigments sheer and avoid heavy powdering so skin reflects soft natural daylight.'
  },
  {
    id: 'makeover-night',
    number: 2,
    name: 'Night Makeup',
    tagline: 'Sultry Evening Drama with Luminous Definition',
    isImportant: true,
    category: 'Evening & Glam',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-purple-900/30 to-indigo-900/30 text-purple-900',
    finish: 'Velvet Satin Glow',
    coverage: 'Medium to Full Build',
    duration: '50 - 65 mins',
    idealFor: 'Dinner dates, night clubs, evening galas, dim amber-lit venues',
    description: 'A striking nighttime aesthetic featuring high-pigment definition, deep sultry tones, and radiant highlights calculated to catch artificial and candlelit environments.',
    faceProducts: {
      primer: 'Pore-refining smoothing silicone-free grip primer',
      foundation: 'Long-wear medium-to-full coverage velvet liquid foundation',
      concealer: 'Full-coverage creamy concealer to sculpt and brighten',
      settingPowderSpray: 'Fine baking powder for T-zone + 18-hour waterproof setting spray'
    },
    cheekProducts: {
      blush: 'Deep dusty rose and spiced mauve powder blush',
      bronzer: 'Warm golden cocoa bronzer sculpting temples and cheeks',
      highlighter: 'Reflective molten gold prism highlighter',
      contour: 'Cool-toned sculpting contour stick for chiselled cheekbones'
    },
    eyeProducts: {
      eyeshadow: 'Deep bronze, espresso shimmer, and midnight plum outer v',
      eyeliner: 'Jet black waterproof gel liner with subtle lifted wing',
      mascara: '4D volumizing deep black mascara with dramatic curl',
      eyebrows: 'Sculpted defined arch filled with micro-fine brow pencil'
    },
    lipProducts: {
      lipstick: 'Rich velvet matte wine or berry red lipstick',
      lipLiner: 'Deep mahogany waterproof lip liner',
      lipGloss: 'Optional diamond shimmer topper'
    },
    steps: [
      'Apply smoothing primer and sculpt base with velvet foundation.',
      'Brighten under-eyes with full-coverage concealer and set the center face.',
      'Build rich bronze and espresso gradients across eyelids.',
      'Carve cheekbones with contour and dust molten gold highlight.',
      'Line lips with deep liner and coat with velvet berry lipstick.'
    ],
    artistTip: 'Night lights wash out lighter colors, so deepen your crease shadow and lip pigment by 20%.'
  },
  {
    id: 'makeover-party',
    number: 3,
    name: 'Party Makeup',
    tagline: 'Vibrant Shimmer, Dazzling Sparkle & High-Energy Glamour',
    isImportant: true,
    category: 'Evening & Glam',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-pink-500/20 to-fuchsia-500/20 text-pink-900',
    finish: 'High-Luminescence Glitter Finish',
    coverage: 'Buildable Full Glam',
    duration: '60 - 75 mins',
    idealFor: 'Birthday celebrations, festive parties, anniversaries, weekend bashes',
    description: 'High-energy playful glam with multi-dimensional shimmer, fluttery lashes, glowing cheeks, and punchy statement lips designed to dance all night.',
    faceProducts: {
      primer: 'Illuminating glow primer with pearl essence',
      foundation: 'Sweat-resistant 24-hour radiant liquid foundation',
      concealer: 'High-coverage crease-proof camouflage concealer',
      settingPowderSpray: 'Flashback-safe micro-fine powder and ultra-lock setting mist'
    },
    cheekProducts: {
      blush: 'Vibrant punchy coral and petal pink blush duo',
      bronzer: 'Warm radiant sun-kissed bronzer with micro-pearl',
      highlighter: 'High-impact diamond strobe highlighter on cheek peaks',
      contour: 'Medium cream contour for lifted sculpted dimension'
    },
    eyeProducts: {
      eyeshadow: 'Molten rose gold shimmer and duo-chrome glitter pigments',
      eyeliner: 'Metallic glitter liquid liner or sharp black cat-eye',
      mascara: 'Volumizing false-lash effect mascara with fiber extensions',
      eyebrows: 'Clean laminated brow shape locked with brow wax'
    },
    lipProducts: {
      lipstick: 'Long-lasting vibrant candy pink or rich ruby lipstick',
      lipGloss: 'Ultra-reflective plumping wet glass lip gloss',
      lipLiner: 'Anti-feathering transfer-proof lip pencil'
    },
    steps: [
      'Layer illuminating primer with long-wear foundation for all-night radiance.',
      'Press duo-chrome metallic shimmer onto center eyelid over warm base.',
      'Flick a sharp winged eyeliner and apply volumizing 4D mascara.',
      'Apply punchy coral blush and high-impact diamond strobe highlight.',
      'Complete with juicy plumping gloss or bold transfer-proof lipstick.'
    ],
    artistTip: 'Use a glitter adhesive base on eyelids so shimmers stay vibrant without any fallout.'
  },
  {
    id: 'makeover-bridal',
    number: 4,
    name: 'Bridal Makeup',
    tagline: 'Timeless Royal Elegance & 24-Hour Flawless Longevity',
    isImportant: true,
    category: 'Bridal & Wedding',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-rose-600/20 to-red-600/20 text-rose-950',
    finish: 'Porcelain HD Bridal Glow',
    coverage: 'Full Waterproof Luxury Coverage',
    duration: '90 - 120 mins',
    idealFor: 'Wedding ceremonies, Dulhan bridal entry, HD photography & cinematic 4K video',
    description: 'The pinnacle of wedding artistry: tear-proof, sweat-proof porcelain base paired with ornate gold/champagne eyes, regal crimson lips, and soft-focus camera readiness.',
    faceProducts: {
      primer: 'Poreless silicone grip primer layered with 24K gold serum base',
      foundation: 'Waterproof high-coverage HD liquid foundation with zero flashback',
      concealer: 'Total camouflage cream concealer for sculpted flawless skin',
      settingPowderSpray: 'Micro-milled HD baking powder + dual layer bridal setting seal'
    },
    cheekProducts: {
      blush: 'Layered cream rose blush topped with luminous coral powder',
      bronzer: 'Rich warm terracotta bronzer for regal depth',
      highlighter: 'Custom crushed champagne pearl highlighter',
      contour: 'Precision cream-to-powder contour carving jawline and nose'
    },
    eyeProducts: {
      eyeshadow: 'Warm sunset gold, deep maroon cut-crease, and metallic foiled lids',
      eyeliner: 'Waterproof jet black gel liner with extended winged bridal flick',
      mascara: 'Waterproof panoramic mascara with luxury 3D mink-feel lashes',
      eyebrows: 'Impeccably arched and shaded micro-feathered brows'
    },
    lipProducts: {
      lipstick: 'Transfer-proof velvet matte royal crimson red or deep rose',
      lipLiner: 'Long-wear waterproof matching bridal lip liner',
      lipGloss: 'Center gold shimmer gloss seal'
    },
    steps: [
      'Comprehensive skin hydration and 24K gold primer application.',
      'Flawless airbrushed HD foundation application with waterproof sealer.',
      'Artisanal bridal cut-crease eye makeup with foiled gold pigments.',
      'Surgical cheekbone contouring, radiant blush, and tear-proof eye setting.',
      'Iconic regal red velvet lip lining and 24-hour setting lock.'
    ],
    artistTip: 'Layer cream and powder products sequentially to lock the makeup for over 18 hours through tears and humidity.'
  },
  {
    id: 'makeover-engagement',
    number: 5,
    name: 'Engagement Makeup',
    tagline: 'Romantic Soft Elegance with Pastel Shimmer & Dewy Charm',
    isImportant: true,
    category: 'Bridal & Wedding',
    image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-pink-400/20 to-rose-400/20 text-pink-950',
    finish: 'Luminous Romantic Dewy',
    coverage: 'Medium Buildable HD',
    duration: '60 - 75 mins',
    idealFor: 'Ring ceremonies, engagement shoots, pastel bridal lehengas/gowns',
    description: 'A delicate romantic makeover blending soft pastel rose pigments, luminous champagne eyelids, glowing glass-skin cheeks, and refined elegance.',
    faceProducts: {
      primer: 'Hyaluronic hydrating grip primer for plump bouncy skin',
      foundation: 'Luminous medium-coverage HD liquid foundation',
      concealer: 'Crease-resistant brightening wand concealer',
      settingPowderSpray: 'Translucent soft-focus blur powder + glow mist'
    },
    cheekProducts: {
      blush: 'Soft baby pink and petal peach glowing blush',
      bronzer: 'Warm soft-focus almond bronzer',
      highlighter: 'Soft rose gold liquid highlighter on cheekbones',
      contour: 'Gentle warm sculpting contour'
    },
    eyeProducts: {
      eyeshadow: 'Rose quartz, soft mauve, and champagne shimmer wash',
      eyeliner: 'Ultra-thin espresso brown or winged black gel eyeliner',
      mascara: 'Fluttery wispy lash mascara with natural lash extensions',
      eyebrows: 'Soft natural arched brows set with tinted brow gel'
    },
    lipProducts: {
      lipstick: 'Velvety nude rose or petal pink satin lipstick',
      lipGloss: 'Plumping rosewater crystalline lip gloss',
      lipLiner: 'Dusty mauve precision lip liner'
    },
    steps: [
      'Infuse skin with hyaluronic moisture primer.',
      'Apply luminous HD foundation for a radiant romantic base.',
      'Soft blend of rose quartz and champagne eyeshadow on lids.',
      'Sweep baby pink blush and rose-gold strobe highlight over cheekbones.',
      'Coat lips in velvety nude rose lipstick and high-shine gloss.'
    ],
    artistTip: 'Harmonize your eye shimmer and lip tint to the pastel embroidery of your engagement outfit.'
  },
  {
    id: 'makeover-reception',
    number: 6,
    name: 'Reception Makeup',
    tagline: 'High-Impact Evening Glamour with Polished Metallic Sheen',
    isImportant: true,
    category: 'Bridal & Wedding',
    image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-amber-600/20 to-yellow-600/20 text-amber-950',
    finish: 'Glossy Metallic Ultra-Glam',
    coverage: 'Full HD High-Glamour',
    duration: '75 - 90 mins',
    idealFor: 'Wedding receptions, grand evening celebrations, cocktail galas',
    description: 'Sophisticated modern bridal reception glamour balancing metallic foiled eyes, chiselled cheekbone sculpting, and glossy ombre lips for an opulent entrance.',
    faceProducts: {
      primer: 'Pore-blurring satin primer with radiance booster',
      foundation: '24-hour long-wear full coverage luminous foundation',
      concealer: 'High-definition brightening concealer with peptide complex',
      settingPowderSpray: 'Micro-fine silica setting powder + waterproof seal'
    },
    cheekProducts: {
      blush: 'Terracotta rose baked mineral blush',
      bronzer: 'Deep golden bronze sculpting powder',
      highlighter: 'Molten champagne gold intense strobe highlight',
      contour: 'High-precision cream contour for sharp jawline definition'
    },
    eyeProducts: {
      eyeshadow: 'Smoked bronze, molten gold metallic foil, and deep espresso crease',
      eyeliner: 'Intense midnight gel liner with winged double flick',
      mascara: '3D volume waterproof mascara with statement falsies',
      eyebrows: 'Bold defined structured brows'
    },
    lipProducts: {
      lipstick: 'Deep caramel nude or rich burgundy satin lipstick',
      lipGloss: 'High-wattage gold infused lip lacquer',
      lipLiner: 'Dark chocolate precision velvet lip pencil'
    },
    steps: [
      'Create high-coverage flawless base with satin primer and HD foundation.',
      'Construct a dramatic smoked-bronze and metallic gold eye palette.',
      'Sculpt jaw and cheekbones with high-precision contour.',
      'Apply molten champagne highlight to catch the reception spotlights.',
      'Finish with ombre caramel lips topped with glass lacquer.'
    ],
    artistTip: 'Accentuate inner eye corners with reflective gold pigment for luminous camera catchlights.'
  },
  {
    id: 'makeover-natural',
    number: 7,
    name: 'Natural Makeup',
    tagline: 'Your Skin But Better: Effortless Second-Skin Glow',
    isImportant: true,
    category: 'Everyday & Natural',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-950',
    finish: 'Second-Skin Natural Dew',
    coverage: 'Sheer Hydrating Tint',
    duration: '20 - 30 mins',
    idealFor: 'Everyday wear, college, relaxed weekends, clean-girl aesthetic',
    description: 'Minimalist skin-first approach focusing on hydration, sheer spot correction, groomed feathered brows, cream blush, and soft juicy lip tints.',
    faceProducts: {
      primer: 'Hydrating aloe and green tea calming face primer',
      foundation: 'Ultra-sheer skin tint or light BB cream',
      concealer: 'Serum-infused concealer tapped only on blemishes/dark circles',
      bbCreamOrTint: 'Hydra-Dew BB Cream with SPF 30',
      settingPowderSpray: 'Hydrating facial mist with zero powder texture'
    },
    cheekProducts: {
      blush: 'Translucent dewy cream cheek tint in soft peach',
      bronzer: 'Optional light cream bronzer melted into temples',
      highlighter: 'Clear balm highlighter for natural glass sheen'
    },
    eyeProducts: {
      eyeshadow: 'Translucent warm wash or bare eyelid with hydration balm',
      eyeliner: 'Tightlined brown pencil between lashes only',
      mascara: 'Clear or natural brown defining mascara',
      eyebrows: 'Feathered upward with clear brow gel'
    },
    lipProducts: {
      lipStain: 'Water-based strawberry juice lip stain',
      lipGloss: 'Nourishing peptide lip balm or clear oil'
    },
    steps: [
      'Prep skin thoroughly with hydrating serum and soothing primer.',
      'Even tone using sheer BB cream or skin tint.',
      'Spot-conceal selectively with fingers.',
      'Tap cream blush onto cheeks and nose bridge for a natural flush.',
      'Groom brows upward and swipe nourishing lip stain.'
    ],
    artistTip: 'Use your fingers to apply cream products — the warmth of your hands melts formulas seamlessly into the skin.'
  },
  {
    id: 'makeover-soft-glam',
    number: 8,
    name: 'Soft Glam Makeup',
    tagline: 'Seamless Blending, Fluffy Lashes & Warm Neutral Elegance',
    isImportant: true,
    category: 'Evening & Glam',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-stone-500/20 to-amber-700/20 text-amber-950',
    finish: 'Velvety Soft Focus Glow',
    coverage: 'Medium Seamless Flawless',
    duration: '45 - 60 mins',
    idealFor: 'Red carpet events, engagement parties, dinner dates, portrait shoots',
    description: 'The universally loved soft glam: perfectly diffused neutral shadows, fluffy wispy lashes, airbrushed skin with no harsh lines, and pillowy nude lips.',
    faceProducts: {
      primer: 'Silk pore-blurring primer base',
      foundation: 'Breathable medium-coverage satin liquid foundation',
      concealer: 'Creamy radiant concealer for seamless under-eye brightness',
      settingPowderSpray: 'Translucent blurring powder + micro-mist fixing spray'
    },
    cheekProducts: {
      blush: 'Soft warm terracotta and dusty rose blush blend',
      bronzer: 'Buttery cocoa bronzer warming perimeter of face',
      highlighter: 'Soft-focus champagne highlighter on cheek peaks',
      contour: 'Subtle cream contour blended without harsh edges'
    },
    eyeProducts: {
      eyeshadow: 'Warm caramel, soft chocolate, and satin champagne crease',
      eyeliner: 'Smudged brown-black liner smoked into the outer lash line',
      mascara: 'Fluffy lash mascara paired with wispy corner clusters',
      eyebrows: 'Softly filled ombre brows with micro-lead pencil'
    },
    lipProducts: {
      lipstick: 'Velvet nude-pink matte lipstick',
      lipLiner: 'Cool nude-brown precision lip pencil',
      lipGloss: 'Subtle satin gloss in the lip center'
    },
    steps: [
      'Layer silk primer with breathable medium foundation.',
      'Blend warm caramel and soft chocolate shadows with zero harsh lines.',
      'Apply smudged brown liner and fluffy wispy lash clusters.',
      'Dust buttery cocoa bronzer and soft-focus champagne highlighter.',
      'Line with cool nude pencil and fill with velvet nude-pink lipstick.'
    ],
    artistTip: 'The secret to soft glam is blending: spend 30 seconds extra blending every edge with a clean fluffy brush.'
  },
  {
    id: 'makeover-full-glam',
    number: 9,
    name: 'Full Glam Makeup',
    tagline: 'Dramatic Cut-Crease, Chiselled Contours & Statement Impact',
    isImportant: true,
    category: 'Evening & Glam',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-violet-600/20 to-purple-600/20 text-purple-950',
    finish: 'Ultra-Matte High Glamour',
    coverage: 'Full Maximum Coverage',
    duration: '75 - 90 mins',
    idealFor: 'Gala nights, fashion runway, music videos, dramatic stage events',
    description: 'Unapologetic, high-octane artistry: sculpted bone structure, razor-sharp cut crease, dramatic 3D lashes, intense baked base, and sculpted ombre lips.',
    faceProducts: {
      primer: 'Pore-erasing matte grip primer',
      foundation: 'High-pigment full coverage long-wear matte foundation',
      concealer: 'Total camouflage high-coverage cream concealer',
      settingPowderSpray: 'Baking powder for reverse contour + heavy-duty shield spray'
    },
    cheekProducts: {
      blush: 'High-pigment magenta and spiced peach powder blush',
      bronzer: 'Deep sculpted matte bronzer',
      highlighter: 'High-beam blinding strobe powder',
      contour: 'Deep cool cream contour carving cheek hollows and jaw'
    },
    eyeProducts: {
      eyeshadow: 'Dramatic sharp cut-crease with foiled metallics & deep obsidian',
      eyeliner: 'Razor-sharp graphic black liquid winged eyeliner',
      mascara: '4D volume mascara layered with dramatic 25mm 3D lashes',
      eyebrows: 'Sharp structured high-definition arched brows'
    },
    lipProducts: {
      lipstick: 'Full-coverage transfer-proof matte liquid lipstick',
      lipLiner: 'Deep contrast lip pencil for ombre lip contouring',
      lipGloss: 'High-shine vinyl lacquer topper'
    },
    steps: [
      'Apply matte pore primer and build full-coverage matte foundation.',
      'Sculpt facial architecture with cream contour and bake with translucent powder.',
      'Cut crease with precision concealer and pack foiled metallic pigment.',
      'Wing liquid eyeliner razor-sharp and apply dramatic 3D faux lashes.',
      'Ombre-line lips with deep pencil and lock with matte liquid lipstick.'
    ],
    artistTip: 'Bake your under-eyes and jawline with translucent powder for 3 minutes to achieve surgical line definition.'
  },
  {
    id: 'makeover-smokey-eye',
    number: 10,
    name: 'Smokey Eye Makeup',
    tagline: 'Smoldering Charcoal, Kohl-Rimmed Gaze & Nude Satin Lips',
    isImportant: true,
    category: 'Evening & Glam',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-zinc-700/20 to-black/20 text-zinc-950',
    finish: 'Velvet Smoldering Seduction',
    coverage: 'Medium to Full Coverage',
    duration: '50 - 65 mins',
    idealFor: 'Rock concerts, black-tie events, evening parties, dramatic photoshoots',
    description: 'Iconic sultry eye focus: gradient layers of jet black kohl, charcoal, and warm espresso smoked outward, balanced with clean sculpted skin and muted nude lips.',
    faceProducts: {
      primer: 'Smoothing matte canvas primer',
      foundation: 'Velvet medium-to-full coverage liquid foundation',
      concealer: 'Brightening cream concealer to contrast against dark eyes',
      settingPowderSpray: 'Velvet matte setting powder + all-night fixing mist'
    },
    cheekProducts: {
      blush: 'Muted warm nude-peach blush',
      bronzer: 'Soft warm bronze warming the outer face',
      highlighter: 'Subtle champagne glow (keeping eyes as star focus)',
      contour: 'Cool contour defining cheekbones'
    },
    eyeProducts: {
      eyeshadow: 'Obsidian black, gunmetal shimmer, slate gray, and espresso brown',
      eyeliner: 'Smudgeable waterproof gel kohl liner along upper and lower waterlines',
      mascara: 'Deep carbon black volume mascara with flared corner lashes',
      eyebrows: 'Naturally defined soft arch to frame the smoky eyes'
    },
    lipProducts: {
      lipstick: 'Classic satin pale peach or warm nude lipstick',
      lipLiner: 'Nude-beige lip pencil',
      lipGloss: 'Non-sticky clear satin balm'
    },
    steps: [
      'Do eye makeup first: lay down black kohl base and diffuse into espresso tones.',
      'Blend slate and obsidian shadows with circular smoking motions.',
      'Clean under-eye fallout with makeup wipe and apply velvet foundation.',
      'Brighten under-eyes with concealer and set with translucent powder.',
      'Pair dramatic eyes with muted satin nude lipstick.'
    ],
    artistTip: 'Always do eye makeup first when doing a smokey eye to easily clean up black eyeshadow fallout before foundation.'
  },
  {
    id: 'makeover-hd',
    number: 11,
    name: 'HD Makeup',
    tagline: 'Micro-Fine Seamless Pigments for 4K & 8K Camera Precision',
    isImportant: true,
    category: 'High-Definition & Technique',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-blue-500/20 to-cyan-500/20 text-blue-950',
    finish: 'High-Definition Soft-Focus Blur',
    coverage: 'Seamless Medium to Full HD',
    duration: '60 - 75 mins',
    idealFor: 'High-resolution television, cinema, weddings, close-up fashion photography',
    description: 'Engineered with micronized quartz and light-refracting silicone spheres that eliminate visible pore texture, cakeyness, and flashback under ultra-sharp 4K lenses.',
    faceProducts: {
      primer: 'HD pore-filling silicon-elastomer optical blurring primer',
      foundation: 'High-definition micro-pigment liquid foundation with zero flash back',
      concealer: 'Reflective optical blur concealer for under-eyes and blemishes',
      settingPowderSpray: 'Micronized silica HD setting powder and anti-shine fine mist'
    },
    cheekProducts: {
      blush: 'Micro-milled HD mineral blush in soft coral-rose',
      bronzer: 'Soft-diffusion HD matte bronzer',
      highlighter: 'Micro-pearl liquid glow with zero visible glitter flakes',
      contour: 'Natural bone structure shading cream'
    },
    eyeProducts: {
      eyeshadow: 'High-pigment triple-milled neutral and bronze shades',
      eyeliner: 'Crisp precision HD waterproof liquid eyeliner',
      mascara: 'Separating HD panoramic mascara',
      eyebrows: 'Hair-stroke micro-pencil for undetectable brow filling'
    },
    lipProducts: {
      lipstick: 'Smooth hydrating satin HD lipstick',
      lipLiner: 'Clean anti-feathering lip contour pencil',
      lipGloss: 'Optical plumping gloss'
    },
    steps: [
      'Apply HD optical primer to blur pore textures completely.',
      'Stipple micro-pigment HD foundation with a dual-fiber brush.',
      'Blend optical blur concealer to neutralize discoloration under camera lights.',
      'Dust micro-fine silica powder with a light rolling press.',
      'Lock with anti-shine HD fixing mist for 18-hour lens perfection.'
    ],
    artistTip: 'Avoid heavy powdering: HD makeup is all about buffing micro-pigments into the skin for a seamless optical finish.'
  },
  {
    id: 'makeover-airbrush',
    number: 12,
    name: 'Airbrush Makeup',
    tagline: 'Feather-Light Micro-Mist for Ultra-Smooth Porcelain Longevity',
    isImportant: true,
    category: 'High-Definition & Technique',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-sky-500/20 to-indigo-500/20 text-sky-950',
    finish: 'Porcelain Airbrushed Flawlessness',
    coverage: 'Customizable Featherlight Full',
    duration: '60 - 80 mins',
    idealFor: 'Brides, red carpet appearances, humid weather events, sensitive skin',
    description: 'Applied via professional micro-compressor spraying billions of micronized droplets that sit weightlessly on the skin for unmatched waterproof, friction-proof durability.',
    faceProducts: {
      primer: 'Water-based silicone airbrush primer prep',
      foundation: 'Airbrush compressor micro-droplet silicone/water foundation formula',
      concealer: 'Precision airbrush concealer stream for targeted correction',
      settingPowderSpray: 'Airbrush sealing barrier mist with zero transfer guarantee'
    },
    cheekProducts: {
      blush: 'Airbrushed soft rose mist blush',
      bronzer: 'Airbrushed soft amber contour shading',
      highlighter: 'Airbrushed molten pearl glow mist',
      contour: 'Micro-stream facial contouring'
    },
    eyeProducts: {
      eyeshadow: 'Waterproof airbrushed eyeshadow gradients + pressed shimmer',
      eyeliner: 'Ultra-fine waterproof black liquid liner',
      mascara: 'Waterproof panoramic lash mascara',
      eyebrows: 'Airbrushed stencil brow shaping with natural hair strokes'
    },
    lipProducts: {
      lipstick: 'Long-wear velvet lip color sealed with waterproof topcoat',
      lipLiner: 'Waterproof matching lip liner'
    },
    steps: [
      'Prep skin with water-based airbrush primer.',
      'Mist silicone airbrush foundation in circular motions from 6 inches away.',
      'Layer targeted airbrush concealer over blemishes and under-eyes.',
      'Mist airbrush blush and subtle contour for seamless gradients.',
      'Lock with waterproof airbrush barrier spray.'
    ],
    artistTip: 'Hold the airbrush stylus at a consistent 6-inch distance and keep the hand moving in gentle circular motions.'
  },
  {
    id: 'makeover-dewy',
    number: 13,
    name: 'Dewy Makeup',
    tagline: 'Glass-Skin Luminous Sheen & Hydrated Wet-Look Radiance',
    isImportant: false,
    category: 'Everyday & Natural',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-cyan-400/20 to-blue-400/20 text-cyan-950',
    finish: 'Ultra-Dewy Glass Skin',
    coverage: 'Light to Medium Luminous',
    duration: '35 - 45 mins',
    idealFor: 'Dry skin types, summer festivals, editorial photoshoots, Korean glass skin look',
    description: 'A quenching, light-reflective look featuring liquid highlighters, serum-infused bases, glossy eyelids, and wet-look plumping lip oils that beam with hydration.',
    faceProducts: {
      primer: 'Glycerin and squalane luminous hydrating glow primer',
      foundation: 'Serum-infused sheer-to-medium radiant foundation',
      concealer: 'Hydrating liquid concealer with hyaluronic spheres',
      bbCreamOrTint: 'Hydra-Dew BB Cream with SPF 30',
      settingPowderSpray: 'Glow booster dewy facial mist (zero matte powder)'
    },
    cheekProducts: {
      blush: 'Juicy liquid cheek tint in watermelon peach',
      bronzer: 'Dewy cream bronzing balm',
      highlighter: 'Liquid glass strobe highlighter on cheekbones, nose bridge, and brow arch',
      contour: 'Sheer warm bronze cream contour'
    },
    eyeProducts: {
      eyeshadow: 'Glossy champagne lid tint or sheer liquid shimmer',
      eyeliner: 'Soft brown tightline eyeliner',
      mascara: 'Glossy deep black lash defining mascara',
      eyebrows: 'Fluffy laminated soap brows'
    },
    lipProducts: {
      lipGloss: 'Glass-shine plumping lip gloss with hyaluronic spheres',
      lipStain: 'Water-tint popsicle gradient stain'
    },
    steps: [
      'Drench skin in hyaluronic serum and luminous glow primer.',
      'Buff serum foundation into skin with a damp sponge.',
      'Tap liquid highlighter onto high points and blend liquid blush into temples.',
      'Apply glossy champagne wash across eyelids.',
      'Douse in dewy fixing mist and apply high-shine plumping lip gloss.'
    ],
    artistTip: 'Skip powder entirely on the cheeks and only lightly powder the sides of the nose if needed.'
  },
  {
    id: 'makeover-matte',
    number: 14,
    name: 'Matte Makeup',
    tagline: 'Velvet Oil-Control, Poreless Flat Finish & 24H Freshness',
    isImportant: false,
    category: 'High-Definition & Technique',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-amber-700/20 to-stone-700/20 text-stone-950',
    finish: 'Full Matte Velvet',
    coverage: 'Medium to Full Matte',
    duration: '45 - 55 mins',
    idealFor: 'Oily and combination skin types, hot summer weather, long office days',
    description: 'A sophisticated shine-free finish utilizing pore-blurring primers, oil-absorbing setting powders, and transfer-resistant matte lipsticks that remain fresh all day.',
    faceProducts: {
      primer: 'Oil-control mattifying primer with witch hazel & clay',
      foundation: '24-hour transfer-proof velvet matte foundation',
      concealer: 'Full-coverage self-setting matte concealer',
      settingPowderSpray: 'Micro-fine oil-absorbing translucent powder + matte lock spray'
    },
    cheekProducts: {
      blush: 'Velvety matte peach or rose powder blush',
      bronzer: 'Shine-free matte contouring bronzer',
      contour: 'Cool-toned matte powder contour'
    },
    eyeProducts: {
      eyeshadow: 'Velvety all-matte earth tones and warm neutral shadows',
      eyeliner: 'Matte jet-black liquid or gel liner',
      mascara: 'Volumizing matte carbon mascara',
      eyebrows: 'Structured matte brow powder and pencil'
    },
    lipProducts: {
      lipstick: 'Comfortable transfer-proof velvet matte lipstick',
      lipLiner: 'Matte precision waterproof lip pencil'
    },
    steps: [
      'Apply mattifying primer to T-zone and oily areas.',
      'Blend velvet matte foundation evenly with a dense foundation brush.',
      'Spot-conceal and bake T-zone with oil-absorbing translucent powder.',
      'Sweep matte powder blush and cool contour across cheeks.',
      'Coat lips with velvet matte lipstick and seal with matte lock spray.'
    ],
    artistTip: 'Press powder into oily zones with a velour powder puff rather than sweeping with a loose brush.'
  },
  {
    id: 'makeover-festive',
    number: 15,
    name: 'Festive Makeup',
    tagline: 'Warm Golden Sparkle, Jewel Tones & Celebratory Radiance',
    isImportant: false,
    category: 'Festive & Special Events',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-yellow-500/20 to-amber-600/20 text-yellow-950',
    finish: 'Golden Shimmer Festive Glow',
    coverage: 'Medium to Full Glam',
    duration: '60 - 75 mins',
    idealFor: 'Eid, Diwali, holiday celebrations, family reunions, festive parties',
    description: 'Rich celebratory radiance featuring warm molten gold eyelids, jewel-toned liners, flushed coral-rose cheeks, and luscious berry or ruby lips.',
    faceProducts: {
      primer: 'Illuminating gold-infused hydration primer',
      foundation: 'Long-wear radiant finish liquid foundation',
      concealer: 'High-coverage brightening concealer',
      settingPowderSpray: 'Flashback-safe translucent powder + gold shimmer fixing mist'
    },
    cheekProducts: {
      blush: 'Baked warm terracotta and rose-gold shimmer blush',
      bronzer: 'Warm golden amber bronzer',
      highlighter: 'Golden goddess reflective prism highlighter',
      contour: 'Cream contour defining cheekbones and nose bridge'
    },
    eyeProducts: {
      eyeshadow: 'Molten gold foil, copper shimmer, warm sienna, and deep plum',
      eyeliner: 'Emerald green or jet-black winged gel eyeliner',
      mascara: '4D volumizing deep black mascara with full lashes',
      eyebrows: 'Defined structured festive brows'
    },
    lipProducts: {
      lipstick: 'Vibrant ruby red or warm berry satin lipstick',
      lipGloss: 'Gold glitter flecked lip topper',
      lipLiner: 'Deep rosewood lip pencil'
    },
    steps: [
      'Layer illuminating primer with radiant long-wear foundation.',
      'Pack molten gold foil eyeshadow onto lids with warm sienna crease.',
      'Add a crisp winged eyeliner and volumizing 4D mascara.',
      'Dust baked rose-gold blush and golden goddess highlighter.',
      'Complete with rich ruby lipstick and gold fleck lip topper.'
    ],
    artistTip: 'Pair warm gold eye foil with jewel-toned attire for an elevated regal festive aura.'
  },
  {
    id: 'makeover-traditional',
    number: 16,
    name: 'Traditional Makeup',
    tagline: 'Classical Heritage, Kohl-Rimmed Eyes & Timeless Bindi Accent',
    isImportant: false,
    category: 'Festive & Special Events',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-red-600/20 to-orange-600/20 text-red-950',
    finish: 'Heritage Velvet Glow',
    coverage: 'Medium to Full Coverage',
    duration: '60 - 75 mins',
    idealFor: 'Traditional cultural ceremonies, ethnic events, classical dance recitals',
    description: 'Honoring heritage aesthetics with bold kohl-rimmed kajal eyes, warm saffron undertones, sculpted red/maroon lips, and classical symmetry.',
    faceProducts: {
      primer: 'Long-wear smoothing grip primer',
      foundation: 'Full-coverage golden undertone liquid foundation',
      concealer: 'Creamy high-coverage spot concealer',
      settingPowderSpray: 'Traditional setting powder + humidity-resistant spray'
    },
    cheekProducts: {
      blush: 'Warm sindoor red-coral and rose blush',
      bronzer: 'Deep warm terracotta sculpting powder',
      highlighter: 'Traditional gold temple jewelry highlighter',
      contour: 'Sharp contour defining classical facial symmetry'
    },
    eyeProducts: {
      eyeshadow: 'Warm turmeric gold, deep rust, and rich brown',
      eyeliner: 'Deep black Ayurvedic kohl kajal heavily rimming upper and lower waterlines',
      mascara: 'Deep black lengthening and thickening mascara',
      eyebrows: 'Dark, arched, neatly filled traditional brows'
    },
    lipProducts: {
      lipstick: 'Traditional scarlet red or crimson maroon velvet lipstick',
      lipLiner: 'Deep red waterproof lip liner'
    },
    steps: [
      'Create a balanced, even golden undertone canvas with foundation.',
      'Heavily line both upper and lower waterlines with deep Ayurvedic kajal.',
      'Blend warm gold and rust tones across the eyelids.',
      'Sculpt cheeks with warm terracotta blush and gold highlight.',
      'Apply traditional crimson lipstick and position a center bindi.'
    ],
    artistTip: 'Smudge your lower waterline kohl slightly with a small pencil brush for that authentic, intense gaze.'
  },
  {
    id: 'makeover-office',
    number: 17,
    name: 'Office Makeup',
    tagline: 'Polished Professional Minimalism & Understated Confidence',
    isImportant: false,
    category: 'Everyday & Natural',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-slate-500/20 to-zinc-600/20 text-slate-950',
    finish: 'Matte-Satin Clean Professional',
    coverage: 'Light to Medium Breathable',
    duration: '25 - 35 mins',
    idealFor: 'Boardroom presentations, executive meetings, daily office, Zoom video calls',
    description: 'Refined corporate elegance focused on even skin tone, understated neutral matte eyes, tidy groomed brows, and long-wearing satin nude lips.',
    faceProducts: {
      primer: 'Pore-blurring oil-control primer',
      foundation: 'Lightweight satin long-wear foundation or BB Cream',
      concealer: 'Brightening under-eye concealer for a well-rested look',
      bbCreamOrTint: 'Hydra-Dew BB Cream',
      settingPowderSpray: 'Translucent compact powder for T-zone touch-ups'
    },
    cheekProducts: {
      blush: 'Subtle dusty peach or neutral rose powder blush',
      bronzer: 'Light matte bronze warming cheekbones',
      contour: 'Subtle definition under cheekbones'
    },
    eyeProducts: {
      eyeshadow: 'Matte taupe, beige, and soft mocha crease',
      eyeliner: 'Thin brown or charcoal liner tightlined at lash base',
      mascara: 'Clean separating smudge-proof mascara',
      eyebrows: 'Neatly groomed structured brows filled with micro-pencil'
    },
    lipProducts: {
      lipstick: 'Long-wear satin mauve-nude or rosy-brown lipstick',
      lipLiner: 'Matching nude lip pencil',
      lipStain: 'All-day tint'
    },
    steps: [
      'Prep T-zone with oil-control primer and smooth lightweight foundation.',
      'Conceal under-eye fatigue with brightening concealer.',
      'Sweep matte taupe across eyelids and tightline with brown pencil.',
      'Dust subtle dusty peach blush and groom brows neatly.',
      'Apply smudge-proof satin mauve lipstick.'
    ],
    artistTip: 'Keep eyes matte so there is zero distracting glare under bright fluorescent office or Zoom camera lighting.'
  },
  {
    id: 'makeover-photoshoot',
    number: 18,
    name: 'Photoshoot Makeup',
    tagline: 'Studio Lighting Contrast, Sculpted Contours & Flashback-Proof',
    isImportant: false,
    category: 'High-Definition & Technique',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-fuchsia-600/20 to-pink-600/20 text-fuchsia-950',
    finish: 'Studio HD Flashback-Proof Satin',
    coverage: 'Full Sculpted Studio Coverage',
    duration: '60 - 80 mins',
    idealFor: 'Editorial modeling, portfolio headshots, studio strobes, magazine covers',
    description: 'Calibrated for intense flash strobes and studio softboxes with heightened contour contrast, zero flashback powders, and ultra-defined bone structure.',
    faceProducts: {
      primer: 'Anti-reflection HD matte grip primer',
      foundation: 'Pro studio full-coverage foundation with micro-mineral pigments',
      concealer: 'High-contrast sculpting and brightening concealer duo',
      settingPowderSpray: 'Zero-flashback silica setting powder + studio seal spray'
    },
    cheekProducts: {
      blush: 'High-saturation coral and rose dual-stage blush',
      bronzer: 'Warm studio bronze for 3D depth',
      highlighter: 'Directional strobe highlighter reflecting studio key lights',
      contour: 'High-contrast cream and powder contour duo'
    },
    eyeProducts: {
      eyeshadow: 'High-contrast matte and dimensional metallic eyeshadows',
      eyeliner: 'Jet black waterproof gel liner with graphic precision',
      mascara: 'Extreme volume mascara with custom photoshoot false lashes',
      eyebrows: 'Architectural high-definition sculpted brows'
    },
    lipProducts: {
      lipstick: 'High-pigment matte or vinyl satin lipstick',
      lipLiner: 'Overlined precision lip contour pencil',
      lipGloss: 'Optical high-gloss center reflector'
    },
    steps: [
      'Apply anti-reflection primer and buff pro studio foundation.',
      'Execute dual-stage contouring to exaggerate cheek and jaw shadows under studio strobes.',
      'Construct a high-contrast eye look with customized false lash strips.',
      'Bake T-zone with zero-flashback powder to eliminate studio shine.',
      'Line and sculpt lips with high-pigment long-wear color.'
    ],
    artistTip: 'Flash photography absorbs up to 30% of makeup intensity, so deepen your contour and blush for studio sessions.'
  },
  {
    id: 'makeover-cocktail',
    number: 19,
    name: 'Cocktail Makeup',
    tagline: 'Chic Twilight Sparkle, Winged Drama & Berry Ombre Lips',
    isImportant: false,
    category: 'Evening & Glam',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-rose-500/20 to-purple-500/20 text-rose-950',
    finish: 'Chic Twilight Shimmer Glow',
    coverage: 'Medium to Full Build',
    duration: '50 - 65 mins',
    idealFor: 'Cocktail hours, rooftop lounges, bachelorette parties, chic evening mixers',
    description: 'Effortlessly chic and sultry: champagne twilight shimmer, sharp extended cat-eye wings, radiant cheek glow, and tempting berry ombre lips.',
    faceProducts: {
      primer: 'Illuminating satin grip primer',
      foundation: 'Radiant medium-to-full buildable foundation',
      concealer: 'Brightening creamy concealer',
      settingPowderSpray: 'Translucent soft blur powder + luminous setting spray'
    },
    cheekProducts: {
      blush: 'Berry-rose baked luminous blush',
      bronzer: 'Warm glowing amber bronzer',
      highlighter: 'Champagne and rose-gold liquid strobe highlight',
      contour: 'Sculpted cheek contour'
    },
    eyeProducts: {
      eyeshadow: 'Champagne shimmer, spiced plum, and deep bronze crease',
      eyeliner: 'Sharp graphic winged black liquid eyeliner',
      mascara: 'Volumizing false-lash effect mascara',
      eyebrows: 'Feathered arched brows'
    },
    lipProducts: {
      lipstick: 'Ombre berry or rich plum satin lipstick',
      lipLiner: 'Deep wine precision lip liner',
      lipGloss: 'Crystalline lip glaze topper'
    },
    steps: [
      'Layer illuminating primer with buildable radiant foundation.',
      'Blend champagne shimmer onto lids and deepen outer crease with spiced plum.',
      'Draw an ultra-sharp winged cat-eye liner.',
      'Sweep berry-rose luminous blush across cheeks and strobe high points.',
      'Create an ombre lip with deep wine liner and berry satin lipstick.'
    ],
    artistTip: 'Extend your winged eyeliner slightly upward towards the tail of the brow for an instant eye-lifting effect.'
  },
  {
    id: 'makeover-special-events',
    number: 20,
    name: 'Makeup for Special Events',
    tagline: 'Custom Tailored Glamour & Weatherproof Celebration Ready',
    isImportant: false,
    category: 'Festive & Special Events',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    accentColor: 'from-pink-600/20 to-amber-600/20 text-pink-950',
    finish: 'Custom All-Day Celebration Radiance',
    coverage: 'Full All-Weather Long-Wear',
    duration: '60 - 80 mins',
    idealFor: 'Graduations, award ceremonies, anniversaries, milestone galas, VIP occasions',
    description: 'A bespoke makeover customized for your unique outfit, lighting, and climate conditions with 24-hour transfer-proof lock and timeless photographic elegance.',
    faceProducts: {
      primer: 'Dual-action grip and pore-smoothing primer',
      foundation: 'All-weather long-wear sweat-resistant HD foundation',
      concealer: 'Full-coverage camouflage cream concealer',
      settingPowderSpray: 'Micro-milled translucent powder + dual-layer event fixing mist'
    },
    cheekProducts: {
      blush: 'Custom blended peach-pink radiant blush',
      bronzer: 'Warm dimensional contour bronzer',
      highlighter: 'Custom crushed pearl prismatic highlighter',
      contour: 'Chiselled facial contouring'
    },
    eyeProducts: {
      eyeshadow: 'Custom color palette matching event theme and attire',
      eyeliner: '24-hour waterproof gel liner with lifted wing',
      mascara: 'Waterproof volumizing panoramic mascara',
      eyebrows: 'Impeccably tailored sculpted brows'
    },
    lipProducts: {
      lipstick: 'Long-wear transfer-proof custom lipstick',
      lipLiner: 'Waterproof precision contour pencil',
      lipGloss: 'Optional plumping crystalline shine'
    },
    steps: [
      'Tailor skin preparation according to skin type and event weather.',
      'Apply sweat-resistant HD foundation and conceal imperfections.',
      'Craft customized eye look harmonizing with your event attire.',
      'Sculpt cheekbones and highlight key facial high points.',
      'Lock with dual-layer fixing mist and seal with transfer-proof lip color.'
    ],
    artistTip: 'Carry an oil-blotting paper and matching lip color in your clutch for effortless mid-event touch-ups.'
  }
];

