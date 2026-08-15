const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 45000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 75000,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Minimal Backpack',
    category: 'Fashion',
    price: 32000,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    name: 'Premium Sneakers',
    category: 'Fashion',
    price: 58000,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    name: 'Modern Desk Lamp',
    category: 'Home',
    price: 28000,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 6,
    name: 'Ceramic Coffee Mug',
    category: 'Home',
    price: 12000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 7,
    name: 'Luxury Skincare Set',
    category: 'Beauty',
    price: 42000,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 8,
    name: 'Aromatic Candle',
    category: 'Beauty',
    price: 18000,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 9,
    name: 'Classic Leather Handbag',
    category: 'Fashion',
    price: 68000,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 10,
    name: 'Elegant Sunglasses',
    category: 'Fashion',
    price: 35000,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 11,
    name: 'Classic Wristwatch',
    category: 'Fashion',
    price: 85000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 12,
    name: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 39000,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 13,
    name: 'Wireless Keyboard',
    category: 'Electronics',
    price: 42000,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 14,
    name: 'Premium Coffee Maker',
    category: 'Home',
    price: 95000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 15,
    name: 'Soft Linen Cushion',
    category: 'Home',
    price: 16000,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 16,
    name: 'Minimal Table Clock',
    category: 'Home',
    price: 22000,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 17,
    name: 'Hydrating Face Serum',
    category: 'Beauty',
    price: 27500,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 18,
    name: 'Luxury Perfume',
    category: 'Beauty',
    price: 55000,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 19,
    name: 'Makeup Brush Collection',
    category: 'Beauty',
    price: 24000,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 20,
    name: 'Elegant Ceramic Vase',
    category: 'Home',
    price: 30000,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 21,
    name: 'Premium Leather Wallet',
    category: 'Fashion',
    price: 28000,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 22,
    name: 'Everyday Running Shoes',
    category: 'Fashion',
    price: 52000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 23,
    name: 'Compact Digital Camera',
    category: 'Electronics',
    price: 185000,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 24,
    name: 'Premium Laptop',
    category: 'Electronics',
    price: 850000,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 25,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 65000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 26,
    name: 'Modern Floor Lamp',
    category: 'Home',
    price: 62000,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 27,
    name: 'Silk Hair Care Set',
    category: 'Beauty',
    price: 38000,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8c6e8f8f5?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 28,
    name: 'Statement Shoulder Bag',
    category: 'Fashion',
    price: 72000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 29,
    name: 'Minimalist Desk Organizer',
    category: 'Home',
    price: 14500,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 30,
    name: 'Premium Tablet',
    category: 'Electronics',
    price: 420000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85',
  },
]

export default products