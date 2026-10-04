export const FOOD_ITEMS = [
  // BREAKFAST
  {
    id: 'eggs-benedict',
    name: 'Classic Royale Eggs Benedict',
    category: 'BREAKFAST',
    price: 360,
    currency: '₹',
    image: '/src/assets/images/vexmo_margherita_slice_1791082371702.jpg',
    description: 'Poached free-range eggs on toasted brioche with smoked salmon and silky tarragon hollandaise.',
    prepTime: '12 mins',
    tags: ['Chef Special', 'Organic']
  },
  {
    id: 'french-toast',
    name: 'Belgian Brioche French Toast',
    category: 'BREAKFAST',
    price: 320,
    currency: '₹',
    image: '/src/assets/images/vexmo_gourmet_pasta_1791082435271.jpg',
    description: 'Caramelized thick-cut brioche topped with wild berry compote, Madagascar vanilla cream, and pure maple syrup.',
    prepTime: '15 mins',
    tags: ['Sweet', 'Bakery']
  },
  {
    id: 'avocado-tartine',
    name: 'Artisan Sourdough Avocado Tartine',
    category: 'BREAKFAST',
    price: 340,
    currency: '₹',
    image: '/src/assets/images/vexmo_spicy_tuna_sushi_1791082421124.jpg',
    description: 'Crushed Hass avocado, heirloom cherry tomatoes, feta snow, and toasted pumpkin seeds on stone-ground sourdough.',
    prepTime: '10 mins',
    tags: ['Vegetarian', 'Healthy']
  },
  {
    id: 'imperial-chai-breakfast',
    name: 'Royal Heritage Breakfast Platter',
    category: 'BREAKFAST',
    price: 490,
    currency: '₹',
    image: '/src/assets/images/vexmo_double_cheeseburger_1791082383743.jpg',
    description: 'Fluffy stuffed parathas, artisanal butter, homemade pickles, spiced yogurt, and freshly brewed saffron tea.',
    prepTime: '18 mins',
    tags: ['Traditional', 'Hearty']
  },

  // LUNCH
  {
    id: 'paneer-tikka',
    name: 'Char-Grilled Paneer Tikka',
    category: 'LUNCH',
    price: 380,
    currency: '₹',
    image: '/src/assets/images/vexmo_steak_fajitas_1791082405470.jpg',
    description: 'Char-grilled cottage cheese marinated in Kashmiri chili, hung curd, and roasted gram flour with mint chutney.',
    prepTime: '16 mins',
    tags: ['Clay Oven', 'Vegetarian']
  },
  {
    id: 'margherita-pizza',
    name: 'Wood-Fired Margherita Slice',
    category: 'LUNCH',
    price: 350,
    currency: '₹',
    image: '/src/assets/images/vexmo_margherita_slice_1791082371702.jpg',
    description: 'Wood-fired sourdough crust with San Marzano tomatoes, molten buffalo mozzarella di bufala, and fresh basil leaves.',
    prepTime: '10 mins',
    tags: ['Italian', 'Wood-Fired']
  },
  {
    id: 'wagyu-cheeseburger',
    name: 'Double Wagyu Cheese Reveal Burger',
    category: 'LUNCH',
    price: 520,
    currency: '₹',
    image: '/src/assets/images/vexmo_double_cheeseburger_1791082383743.jpg',
    description: 'Two seared wagyu beef patties blanketed under stretching molten aged cheddar cheese, butterhead lettuce, and pickles.',
    prepTime: '15 mins',
    tags: ['Signature', 'Gourmet']
  },
  {
    id: 'spicy-tuna-sushi',
    name: 'Spicy Bluefin Tuna Sushi Roll',
    category: 'LUNCH',
    price: 680,
    currency: '₹',
    image: '/src/assets/images/vexmo_spicy_tuna_sushi_1791082421124.jpg',
    description: 'Sashimi-grade bluefin tuna tossed in Japanese spicy mayo, wrapped in toasted Ariake nori with avocado fan and sesame.',
    prepTime: '14 mins',
    tags: ['Japanese', 'Raw Seafood']
  },

  // DINNER
  {
    id: 'truffle-pasta',
    name: 'Truffle Tagliatelle Pasta',
    category: 'DINNER',
    price: 650,
    currency: '₹',
    image: '/src/assets/images/vexmo_gourmet_pasta_1791082435271.jpg',
    description: 'Handmade 30-egg-yolk tagliatelle tossed in a rich velvety parmesan sauce with shaved black winter truffles.',
    prepTime: '20 mins',
    tags: ['Signature', 'Pasta']
  },
  {
    id: 'butter-chicken',
    name: 'Heritage Slow-Cooked Butter Chicken',
    category: 'DINNER',
    price: 480,
    currency: '₹',
    image: '/src/assets/images/vexmo_steak_fajitas_1791082405470.jpg',
    description: 'Traditional slow-cooked tandoori chicken simmered in a velvety San Marzano tomato, cashew, and churned butter gravy.',
    prepTime: '22 mins',
    tags: ['Royal North Indian', 'Non-Vegetarian']
  },
  {
    id: 'truffle-risotto',
    name: 'Forest Truffle Mushroom Risotto',
    category: 'DINNER',
    price: 720,
    currency: '₹',
    image: '/src/assets/images/vexmo_truffle_risotto_1791082394524.jpg',
    description: 'Carnaroli rice slow-stirred in golden vegetable reduction, pan-seared chanterelles, shaved black truffle, and aged parmigiano.',
    prepTime: '25 mins',
    tags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'steak-fajitas',
    name: 'Sizzling Prime Ribeye Fajitas',
    category: 'DINNER',
    price: 850,
    currency: '₹',
    image: '/src/assets/images/vexmo_steak_fajitas_1791082405470.jpg',
    description: 'Prime Angus sliced steak seared on a 260°C cast-iron skillet with caramelized bell peppers, onions, fresh coriander, and lime.',
    prepTime: '18 mins',
    tags: ['Sizzling', 'Chef Special']
  },
  {
    id: 'dal-makhani-heritage',
    name: 'Dal Makhani 24-Hour Heritage',
    category: 'DINNER',
    price: 340,
    currency: '₹',
    image: '/src/assets/images/vexmo_hero_pov_scene_1791082354397.jpg',
    description: 'Black lentils slow-cooked overnight over glowing charcoal with whole spices, churned white butter, and cream.',
    prepTime: '15 mins',
    tags: ['Vegetarian', 'Traditional']
  },
  {
    id: 'awadhi-biryani',
    name: 'Royal Awadhi Saffron Biryani',
    category: 'DINNER',
    price: 540,
    currency: '₹',
    image: '/src/assets/images/vexmo_margherita_slice_1791082371702.jpg',
    description: 'Long-grain aged basmati rice layered with tender meat, Kashmiri saffron, and rose water, sealed in dough for slow dum cooking.',
    prepTime: '25 mins',
    tags: ['Dum Pukht', 'Signature']
  },

  // DESSERTS
  {
    id: 'chocolate-lava-cake',
    name: 'Valrhona Chocolate Lava Cake',
    category: 'DESSERTS',
    price: 320,
    currency: '₹',
    image: '/src/assets/images/vexmo_double_cheeseburger_1791082383743.jpg',
    description: 'Warm 70% dark Valrhona molten chocolate cake served with Madagascar bourbon vanilla bean gelato.',
    prepTime: '14 mins',
    tags: ['Warm Dessert', 'Bespoke']
  },
  {
    id: 'tiramisu-classico',
    name: 'Grand Palace Tiramisu al Mascarpone',
    category: 'DESSERTS',
    price: 360,
    currency: '₹',
    image: '/src/assets/images/vexmo_truffle_risotto_1791082394524.jpg',
    description: 'Espresso-soaked savoiardi sponge cookies layered with airy zabaglione mascarpone mousse and Dutch cocoa dust.',
    prepTime: '10 mins',
    tags: ['Italian Classic', 'Chilled']
  },
  {
    id: 'saffron-tres-leches',
    name: 'Rasmalai Saffron Tres Leches',
    category: 'DESSERTS',
    price: 310,
    currency: '₹',
    image: '/src/assets/images/vexmo_gourmet_pasta_1791082435271.jpg',
    description: 'Delicate sponge cake saturated with cardamom saffron condensed milk, crowned with pistachios and edible silver foil.',
    prepTime: '10 mins',
    tags: ['Fusion Royal', 'Signature']
  },

  // BEVERAGES
  {
    id: 'imperial-masala-chai',
    name: 'Imperial Assam Masala Chai',
    category: 'BEVERAGES',
    price: 180,
    currency: '₹',
    image: '/src/assets/images/vexmo_hero_pov_scene_1791082354397.jpg',
    description: 'Single-estate second flush Assam tea brewed with crushed green cardamom, ginger, cloves, and whole cream milk.',
    prepTime: '8 mins',
    tags: ['Hot Tea', 'Heritage']
  },
  {
    id: 'ethiopian-cold-brew',
    name: 'Single-Origin Ethiopian Cold Brew',
    category: 'BEVERAGES',
    price: 220,
    currency: '₹',
    image: '/src/assets/images/vexmo_hero_pov_scene_1791082354397.jpg',
    description: 'Steeped for 18 hours with notes of bergamot, dark chocolate, and candied orange peel over artisanal crystal ice.',
    prepTime: '5 mins',
    tags: ['Coffee', 'Chilled']
  },
  {
    id: 'smoked-mocktail',
    name: 'Smoked Orange & Rosemary Mocktail',
    category: 'BEVERAGES',
    price: 290,
    currency: '₹',
    image: '/src/assets/images/vexmo_steak_fajitas_1791082405470.jpg',
    description: 'Fresh blood orange reduction, smoked torched rosemary sprig, sparkling elderflower tonic, and aromatic bitters.',
    prepTime: '6 mins',
    tags: ['Artisanal Bar', 'Signature']
  }
];
