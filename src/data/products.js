// All product images are now in public/images/ folders
// No imports needed - we reference them directly via public URLs

export const products = [
  // ========== KHATTA MEETHA RANGE ==========
  {
    id: "km-1",
    name: "Aampak (Khatta Meetha)",
    category: "Khatta Meetha Range",
    description: "A tangy-sweet mix of dried mango pulp blended with spices and herbs; perfect as a flavorful appetizer.",
    price: 199,
    weight: "195g",
    image: "/images/Khata meetha/Aampak (Khatta Meetha).png"
  },
  {
    id: "km-2",
    name: "Anardana Goli (Khatta Meetha)",
    category: "Khatta Meetha Range",
    description: "Sweet and tangy digestive made from pomegranate seeds and spices; aids digestion and boosts gut health.",
    price: 179,
    weight: "180g",
    image: "/images/Khata meetha/Anardana Goli (Khatta Meetha).png"
  },
  {
    id: "km-3",
    name: "Chatpat Amla (Khatta Meetha)",
    category: "Khatta Meetha Range",
    description: "A delicious balance of tangy amla and sugar, rich in Vitamin C, boosts immunity, and aids digestion.",
    price: 189,
    weight: "175g",
    image: "/images/Khata meetha/Chatpat Amla (Khatta Meetha).png"
  },
  {
    id: "km-4",
    name: "Teekha Amla",
    category: "Khatta Meetha Range",
    description: "Spicy and tangy treat made from Indian gooseberry and spices; packed with antioxidants and minerals.",
    price: 189,
    weight: "175g",
    image: "/images/Khata meetha/Teekha Amla.png"
  },
  {
    id: "km-5",
    name: "Aam Goli (Khatta Meetha)",
    category: "Khatta Meetha Range",
    description: "Sweet and tangy mango pulp candy with aromatic spices; a refreshing twist to traditional flavors.",
    price: 179,
    weight: "170g",
    image: "/images/Khata meetha/Aam Goli (Khatta Mitha).png"
  },
  {
    id: "km-6",
    name: "Jeera Goli (Khatta Meetha)",
    category: "Khatta Meetha Range",
    description: "Tangy digestive ball with cumin and mango powder; supports digestion and metabolism.",
    price: 159,
    weight: "160g",
    image: "/images/Khata meetha/Jeera Goli (Khatta Meetha).png"
  },
  {
    id: "km-7",
    name: "Imli Laddu (Khatta Meetha)",
    category: "Khatta Meetha Range",
    description: "Sweet-tangy tamarind treat rich in antioxidants; aids digestion and balances acidity.",
    price: 189,
    weight: "160g",
    image: "/images/Khata meetha/Imli Laddu (Khatta Meetha).png"
  },
  {
    id: "km-8",
    name: "Manchali Imli (Khatta Meetha)",
    category: "Khatta Meetha Range",
    description: "Bold, tangy tamarind candy with dry mango and neem; an irresistible chatpata delight.",
    price: 159,
    weight: "155g",
    image: "/images/Khata meetha/Manchali Imli (Khatta Meetha).png"
  },

  // ========== MOUTH FRESHENER RANGE ==========
  {
    id: "mf-1",
    name: "Dilbhar Mix",
    category: "Mouth Freshener Range",
    description: "Premium mix of coriander seeds, fennel, areca nut & menthol; sweet and minty freshness.",
    price: 199,
    weight: "200g",
    image: "/images/Khata meetha/Dilbhar Mix (Mouth Freshener).png"
  },
  {
    id: "mf-2",
    name: "Mitha Pan",
    category: "Mouth Freshener Range",
    description: "Aromatic and refreshing mouth freshener with betel leaf essence and cardamom.",
    price: 199,
    weight: "200g",
    image: "/images/MouthFreshner/Mitha Pan (Mouth Freshener).png"
  },
  {
    id: "mf-3",
    name: "Gulab Mix",
    category: "Mouth Freshener Range",
    description: "Supari-based rose-flavored freshener with sweet, floral notes.",
    price: 179,
    weight: "190g",
    image: "/images/MouthFreshner/Gulab Mix (Mouth Freshener).png"
  },
  {
    id: "mf-4",
    name: "Jet Chuhara",
    category: "Mouth Freshener Range",
    description: "Spicy-sweet dry date mix; rich in vitamins, calcium, and iron.",
    price: 189,
    weight: "185g",
    image: "/images/MouthFreshner/Jet Chuhara (Mouth Freshener).png"
  },
  {
    id: "mf-5",
    name: "Madrasi Sonff",
    category: "Mouth Freshener Range",
    description: "Crunchy, sweet fennel coated with sugar and cardamom for post-meal freshness.",
    price: 159,
    weight: "180g",
    image: "/images/MouthFreshner/Madrasi Sonff (Mouth Freshener).png"
  },
  {
    id: "mf-6",
    name: "Jhilmil Supari",
    category: "Mouth Freshener Range",
    description: "Colorful blend of betel nut, menthol, and dry papaya (tooty fruity); rich and aromatic.",
    price: 199,
    weight: "195g",
    image: "/images/MouthFreshner/Jhilmil Supari (Mouth Freshener).png"
  },
  {
    id: "mf-7",
    name: "Milky Gulab Supari",
    category: "Mouth Freshener Range",
    description: "Sweet rose-flavored supari offering a refreshing after-meal indulgence.",
    price: 189,
    weight: "190g",
    image: "/images/MouthFreshner/Milky Gulab Supari (Mouth Freshener).png"
  },
  {
    id: "mf-8",
    name: "Navratan Mix",
    category: "Mouth Freshener Range",
    description: "A rich blend of fennel, cardamom, silver leaves, and saffron; aids digestion and refreshes.",
    price: 179,
    weight: "185g",
    image: "/images/MouthFreshner/Navratan Mix (Mouth Freshener).png"
  },
  {
    id: "mf-9",
    name: "Mitha Sonff",
    category: "Mouth Freshener Range",
    description: "Sugar-coated aniseed freshener with a crunchy, aromatic taste.",
    price: 159,
    weight: "175g",
    image: "/images/MouthFreshner/Mitha Sonff (Mouth Freshener).png"
  },
  {
    id: "mf-10",
    name: "Punjabi Mix",
    category: "Mouth Freshener Range",
    description: "Fennel, menthol, and rose-flavored blend; sweet and cooling freshness.",
    price: 189,
    weight: "190g",
    image: "/images/MouthFreshner/Punjabi Mix (Mouth Freshener).png"
  },
  {
    id: "mf-11",
    name: "Pan Mix",
    category: "Mouth Freshener Range",
    description: "Traditional pan masala mix with betel nut, aniseed, and tutti-frutti; refreshing after meals.",
    price: 199,
    weight: "195g",
    image: "/images/MouthFreshner/Pan Mix (Mouth Freshener).png"
  },
  {
    id: "mf-12",
    name: "Satrangee Mix",
    category: "Mouth Freshener Range",
    description: "Colorful blend of sugar-coated aniseed and rose essence; a sweet post-meal treat.",
    price: 179,
    weight: "180g",
    image: "/images/MouthFreshner/Satrangee Mix (Mouth Freshener).png"
  },
  {
    id: "mf-13",
    name: "Shai Mix",
    category: "Mouth Freshener Range",
    description: "Premium silver-leafed mix with dry dates and sugar-coated fennel; elegant freshness.",
    price: 199,
    weight: "195g",
    image: "/images/MouthFreshner/Shai Mix (Mouth Freshener).png"
  },
  {
    id: "mf-14",
    name: "Rasbhari Sonff",
    category: "Mouth Freshener Range",
    description: "Rose-flavored aniseed candy with menthol; prevents gas and bad breath.",
    price: 179,
    weight: "180g",
    image: "/images/MouthFreshner/Rasbhari Sonff (Mouth Freshener).png"
  },

  // ========== MUKHWAS RANGE ==========
  {
    id: "mw-1",
    name: "Royal Kitty (Mukhwas)",
    category: "Mukhwas Range",
    description: "Fennel, sesame, coriander, and menthol mix for natural post-meal freshness.",
    price: 189,
    weight: "200g",
    image: "/images/Mukhwas/Royal Kitty (Mukhwas).png"
  },
  {
    id: "mw-2",
    name: "Royal Rajwadi (Mukhwas)",
    category: "Mukhwas Range",
    description: "Sugar-coated fennel and dry fruit mix with rose petals; royal aromatic taste.",
    price: 199,
    weight: "200g",
    image: "/images/Mukhwas/Royal Rajwadi (Mukhwas).png"
  },
  {
    id: "mw-3",
    name: "Royal Roasted (Mukhwas)",
    category: "Mukhwas Range",
    description: "Roasted fennel and sesame seeds for a rich, healthy digestive experience.",
    price: 189,
    weight: "195g",
    image: "/images/Mukhwas/Royal Roasted (Mukhwas).png"
  },
  {
    id: "mw-4",
    name: "Royal Kashmiri (Mukhwas)",
    category: "Mukhwas Range",
    description: "Fennel and dry date mix with menthol and watermelon seeds; flavorful crunch.",
    price: 199,
    weight: "200g",
    image: "/images/Mukhwas/Royal Kashmiri (Mukhwas).png"
  },

  // ========== REFRESHING CANDY RANGE ==========
  {
    id: "rc-1",
    name: "Pan Candy",
    category: "Refreshing Candy Range",
    description: "Sweet, refreshing candy infused with traditional pan flavor.",
    price: 99,
    weight: "150g",
    image: "/images/Candy/Pan Candy.png"
  },
  {
    id: "rc-2",
    name: "Chatpat Fatka Candy",
    category: "Refreshing Candy Range",
    description: "Tangy-spicy candy with cumin, black salt, and mango for a zesty punch.",
    price: 99,
    weight: "145g",
    image: "/images/Candy/Chatpat Fatka Candy.png"
  },
  {
    id: "rc-3",
    name: "Mini Candy",
    category: "Refreshing Candy Range",
    description: "Menthol-based cooling candy with balanced sweetness.",
    price: 89,
    weight: "140g",
    image: "/images/Candy/Mini Candy.png"
  },
  {
    id: "rc-4",
    name: "Kali Mirch Candy",
    category: "Refreshing Candy Range",
    description: "Sweet and spicy black pepper candy for bold flavor lovers.",
    price: 99,
    weight: "145g",
    image: "/images/Candy/Kali Mirch Candy.png"
  },
  {
    id: "rc-5",
    name: "Orange Candy",
    category: "Refreshing Candy Range",
    description: "Tangy-sweet citrus candy made with real orange essence.",
    price: 89,
    weight: "140g",
    image: "/images/Candy/Orange Candy.png"
  },

  // ========== SPECIAL PAN RANGE ==========
  {
    id: "sp-1",
    name: "Jaipuri Pan Supari",
    category: "Special Pan Range",
    description: "Rich blend of gulkand, betel leaves, menthol, and dry fruits; aromatic and cooling.",
    price: 249,
    weight: "220g",
    image: "/images/pan/Jaipuri Pan Supari.png"
  },
  {
    id: "sp-2",
    name: "Calcutta Pan",
    category: "Special Pan Range",
    description: "Sweet, aromatic mix recreating the authentic pan experience; made with gulkand and betel leaves.",
    price: 249,
    weight: "220g",
    image: "/images/pan/Calcutta Pan.png"
  },
  {
    id: "sp-3",
    name: "Banarasi Pan",
    category: "Special Pan Range",
    description: "Traditional Banarasi-style pan with kewara flavor and refreshing menthol.",
    price: 249,
    weight: "220g",
    image: "/images/pan/Banarasi Pan.png"
  },
  {
    id: "sp-4",
    name: "Gulkand Mix",
    category: "Special Pan Range",
    description: "Sweet gulkand and betel leaf blend offering cooling and digestive benefits.",
    price: 229,
    weight: "215g",
    image: "/images/pan/Gulkand Mix.png"
  }
];

export const categories = [
  "Khatta Meetha Range",
  "Mouth Freshener Range",
  "Mukhwas Range",
  "Refreshing Candy Range",
  "Special Pan Range"
];
