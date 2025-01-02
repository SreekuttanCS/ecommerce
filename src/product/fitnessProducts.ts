import { Product } from "./types"; // Import the Product type

export const fitnessEquipment: Product[] = [
  {
    id: "F1",
    name: "Adjustable Weight Bench",
    image:
      "https://m.media-amazon.com/images/I/416jU1p4hyL._SX300_SY300_QL70_FMwebp_.jpg",
    price: {
      original: 8999,
      discounted: 7499,
    },
    rating: 4.5,
    reviews: 220,
    category: "Fitness Equipment",
    description:
      "Enhance your workouts with the FitPro Resistance Bands Set, featuring multiple resistance levels for strength training, yoga, and rehabilitation exercises. Durable and portable, perfect for home and travel use.",
    specifications: {
      item_weight: "750g",
      color: ["Red", "Blue", "Green", "Yellow", "Black"],
      material: "Natural Latex",
      product_dimensions: "Bands Length: 120cm each",
      pattern: "Plain",
      size: ["Light", "Medium", "Heavy", "X-Heavy", "XX-Heavy"],
    },
    brand: "FitPro",
  },
  {
    id: "F2",
    name: "Multi-Function Home Gym Machine",
    image: "https://m.media-amazon.com/images/I/61huUfZbqlL._SX679_.jpg",
    price: {
      original: 25999,
      discounted: 21999,
    },
    rating: 4.7,
    reviews: 315,
    category: "Fitness Equipment",
    description:
      "Enhance your workouts with the FitPro Resistance Bands Set, featuring multiple resistance levels for strength training, yoga, and rehabilitation exercises. Durable and portable, perfect for home and travel use.",
    specifications: {
      item_weight: "750g",
      color: ["Red", "Blue", "Green", "Yellow", "Black"],
      material: "Natural Latex",
      product_dimensions: "Bands Length: 120cm each",
      pattern: "Plain",
      size: ["Light", "Medium", "Heavy", "X-Heavy", "XX-Heavy"],
    },
    brand: "FitPro",
  },
  {
    id: "F3",
    name: "Adjustable Kettlebell",
    image:
      "https://m.media-amazon.com/images/I/41VcfwwcTSL._SX300_SY300_QL70_FMwebp_.jpg",
    price: {
      original: 3499,
      discounted: 2999,
    },
    rating: 4.4,
    reviews: 190,
    category: "Fitness Equipment",
    description:
      "Enhance your workouts with the FitPro Resistance Bands Set, featuring multiple resistance levels for strength training, yoga, and rehabilitation exercises. Durable and portable, perfect for home and travel use.",
    specifications: {
      item_weight: "750g",
      color: ["Red", "Blue", "Green", "Yellow", "Black"],
      material: "Natural Latex",
      product_dimensions: "Bands Length: 120cm each",
      pattern: "Plain",
      size: ["Light", "Medium", "Heavy", "X-Heavy", "XX-Heavy"],
    },
    brand: "FitPro",
  },
  {
    id: "F4",
    name: "Rowing Machine",
    image:
      "https://m.media-amazon.com/images/I/419YRu3mx-L._SX300_SY300_QL70_FMwebp_.jpg",
    price: {
      original: 18999,
      discounted: 15999,
    },
    rating: 4.6,
    reviews: 275,
    category: "Fitness Equipment",
    description:
      "Enhance your workouts with the FitPro Resistance Bands Set, featuring multiple resistance levels for strength training, yoga, and rehabilitation exercises. Durable and portable, perfect for home and travel use.",
    specifications: {
      item_weight: "750g",
      color: ["Red", "Blue", "Green", "Yellow", "Black"],
      material: "Natural Latex",
      product_dimensions: "Bands Length: 120cm each",
      pattern: "Plain",
      size: ["Light", "Medium", "Heavy", "X-Heavy", "XX-Heavy"],
    },
    brand: "FitPro",
  },
  {
    id: "F5",
    name: "Stationary Exercise Bike",
    image:
      "https://m.media-amazon.com/images/I/41Wys7e-12L._SX300_SY300_QL70_FMwebp_.jpg",
    price: {
      original: 14999,
      discounted: 129999,
    },
    rating: 4.5,
    reviews: 185,
    category: "Fitness Equipment",
    description:
      "Enhance your workouts with the FitPro Resistance Bands Set, featuring multiple resistance levels for strength training, yoga, and rehabilitation exercises. Durable and portable, perfect for home and travel use.",
    specifications: {
      item_weight: "750g",
      color: ["Red", "Blue", "Green", "Yellow", "Black"],
      material: "Natural Latex",
      product_dimensions: "Bands Length: 120cm each",
      pattern: "Plain",
      size: ["Light", "Medium", "Heavy", "X-Heavy", "XX-Heavy"],
    },
    brand: "FitPro",
  },
  // {
  //   id: "F6",
  //   name: "Power Tower Dip Station",
  //   image:
  //     "https://m.media-amazon.com/images/I/41LPW3JRtdL._SX300_SY300_QL70_FMwebp_.jpg",
  //   price: {
  //     original: 9999,
  //     discounted: 8499,
  //   },
  //   rating: 4.3,
  //   reviews: 145,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: "F7",
  //   name: "Battle Rope Set",
  //   image: "https://m.media-amazon.com/images/I/81xro-UMS0L._SX679_.jpg",
  //   price: {
  //     original: 4999,
  //     discounted: 4499,
  //   },
  //   rating: 4.4,
  //   reviews: 200,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: "F8",
  //   name: "Folding Weight Rack",
  //   image:
  //     "https://m.media-amazon.com/images/I/61GsgHouU1L._SY300_SX300_QL70_FMwebp_.jpg",
  //   price: {
  //     original: 5999,
  //     discounted: 5299,
  //   },
  //   rating: 4.6,
  //   reviews: 180,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: "F9",
  //   name: "Dumbbell Set with Stand",
  //   image:
  //     "https://m.media-amazon.com/images/I/41ZfmsLuUyL._SX300_SY300_QL70_FMwebp_.jpg",
  //   price: {
  //     original: 6999,
  //     discounted: 5999,
  //   },
  //   rating: 4.5,
  //   reviews: 230,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: F10,
  //   name: "Smith Machine",
  //   image:
  //     "https://m.media-amazon.com/images/I/41aRHyVGONL._SX300_SY300_QL70_FMwebp_.jpg",
  //   price: {
  //     original: 34999,
  //     discounted: 29999,
  //   },
  //   rating: 4.8,
  //   reviews: 120,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: F11,
  //   name: "Adjustable Barbell Set",
  //   image: "https://m.media-amazon.com/images/I/41ttd03BaUL._SX679_.jpg",
  //   price: {
  //     original: 7999,
  //     discounted: 6999,
  //   },
  //   rating: 4.5,
  //   reviews: 250,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: F12,
  //   name: "Pull-Up Tower",
  //   image:
  //     "https://m.media-amazon.com/images/I/41LPW3JRtdL._SX300_SY300_QL70_FMwebp_.jpg",
  //   price: {
  //     original: 7499,
  //     discounted: 6499,
  //   },
  //   rating: 4.4,
  //   reviews: 175,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: F13,
  //   name: "Compact Elliptical Trainer",
  //   image: "https://m.media-amazon.com/images/I/71fQwlOov0L._SX679_.jpg",
  //   price: {
  //     original: 24999,
  //     discounted: 21999,
  //   },
  //   rating: 4.6,
  //   reviews: 290,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: F14,
  //   name: "Plyometric Jump Box Set",
  //   image:
  //     "https://m.media-amazon.com/images/I/31V4Qec5AvL._SX300_SY300_QL70_FMwebp_.jpg",
  //   price: {
  //     original: 5999,
  //     discounted: 4999,
  //   },
  //   rating: 4.3,
  //   reviews: 140,
  //   category: "Fitness Equipment",
  // },
  // {
  //   id: F15,
  //   name: "Ab Roller with Knee Pad",
  //   image: "https://m.media-amazon.com/images/I/51rj+W-XtjL._SY300_SX300_.jpg",
  //   price: {
  //     original: 1199,
  //     discounted: 999,
  //   },
  //   rating: 4.6,
  //   reviews: 400,
  //   category: "Fitness Equipment",
  // },
];
