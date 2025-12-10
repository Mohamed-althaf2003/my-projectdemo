// Mock API data matching exactly from images
const mockProducts = [
  {
    id: 1,
    name: 'Celery Stick',
    weight: '1lb',
    price: 5.00,
    originalPrice: 6.00,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop&crop=center',
    description: 'Fresh, crisp celery sticks that are perfect for snacking, salads, or cooking. Packed with essential vitamins and minerals.'
  },
  {
    id: 2,
    name: 'Clementines',
    weight: '1lb',
    price: 2.50,
    originalPrice: 3.00,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop&crop=center',
    description: 'Sweet and juicy clementines, perfect for a healthy snack or dessert.'
  },
  {
    id: 3,
    name: 'Sweet Corn',
    weight: '1lb',
    price: 4.00,
    originalPrice: 5.00,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=400&h=400&fit=crop&crop=center',
    description: 'Fresh sweet corn, great for grilling, boiling, or adding to salads.'
  },
  {
    id: 4,
    name: 'Apples',
    weight: '1lb',
    price: 1.60,
    originalPrice: 2.00,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop&crop=center',
    description: 'Crisp and juicy apples, perfect for eating fresh or in recipes.'
  },
  {
    id: 5,
    name: 'Baby Spinach',
    weight: '2lb',
    price: 0.60,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&crop=center',
    description: 'Fresh baby spinach leaves, packed with nutrients and perfect for salads.'
  },
  {
    id: 6,
    name: 'Blueberries',
    weight: '1lb',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400&fit=crop&crop=center',
    description: 'Sweet and antioxidant-rich blueberries, great for smoothies or snacks.'
  },
  {
    id: 7,
    name: 'Brussels Sprout',
    weight: '1lb',
    price: 3.00,
    originalPrice: 5.00,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1589923186741-b5d8b5c0b8e6?w=400&h=400&fit=crop&crop=center',
    description: 'Fresh Brussels sprouts, perfect for roasting or steaming.'
  },
  {
    id: 8,
    name: 'Cucumber',
    weight: '2.5lb',
    price: 2.00,
    image: 'https://images.unsplash.com/photo-1589621318502-4d5c947d2b33?w=400&h=400&fit=crop&crop=center',
    description: 'Crisp and refreshing cucumbers, ideal for salads or snacks.'
  },
  {
    id: 9,
    name: 'Strawberries',
    weight: '1lb',
    price: 4.50,
    originalPrice: 5.00,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop&crop=center',
    description: 'Sweet and juicy strawberries, perfect for desserts or fresh eating.'
  },
  {
    id: 10,
    name: 'Bananas',
    weight: '1lb',
    price: 0.80,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop&crop=center',
    description: 'Fresh bananas, a great source of potassium and energy.'
  }
];

// Mock API functions
export const getProducts = () => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(mockProducts);
    }, 800);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === id);
      resolve(product || null);
    }, 300);
  });
};

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'Fruits & Vegetables',
        'Meat & Fish',
        'Snacks',
        'Pet Care',
        'Home & Cleaning',
        'Dairy',
        'Cooking',
        'Breakfast',
        'Beverage',
        'Health & Beauty'
      ]);
    }, 200);
  });
};