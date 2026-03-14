import React, { useState } from 'react';

// Static data mapped directly from your src/data.js MASTER PRODUCT LIST
const initialProducts = [
  { id: 'rosemary-oil-shots', name: 'Rosemary Oil Shots', isBestseller: true },
  { id: 'vitamin-c-serum', name: 'Vitamin C Face Serum', isBestseller: true },
  { id: 'onion-oil-shots', name: 'Onion & Bakuchiol Oil', isBestseller: false },
  { id: 'coffee-body-scrub', name: 'Coffee Body Scrub', isBestseller: false },
  { id: 'rose-royale-gift-set', name: 'Rose Royale Luxury Gift Set', isBestseller: true },
];

const BestsellerList = () => {
  const [products, setProducts] = useState(initialProducts);

  const toggleBestseller = (id) => {
    // In the future, this will trigger an API call to update the database
    setProducts(products.map(product => 
      product.id === id ? { ...product, isBestseller: !product.isBestseller } : product
    ));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Manage Best Sellers</h1>
      <p className="text-gray-600 mb-6">Toggle which products are featured in the "Best Sellers" section on the homepage.</p>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-800">{product.name}</span>
            
            <button 
              onClick={() => toggleBestseller(product.id)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                product.isBestseller ? 'bg-slate-900' : 'bg-gray-300'
              }`}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  product.isBestseller ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerList;