import React, { useState } from 'react';
import ProductModal from '../ProductModal'; // Adjust path if needed

const initialProducts = [
  { id: 1, name: 'Vitamin C Serum', category: 'Skincare', price: 499.00, stock: 45, status: 'Active' },
  { id: 2, name: 'Ashwagandha Capsules', category: 'Supplements', price: 349.00, stock: 120, status: 'Active' },
  { id: 3, name: 'Hydrating Face Cream', category: 'Skincare', price: 899.00, stock: 0, status: 'Out of Stock' },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleOpenModal = (product = null) => {
    setProductToEdit(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (productData) => {
    if (productToEdit) {
      // Update existing
      setProducts(products.map(p => p.id === productData.id ? productData : p));
    } else {
      // Add new
      setProducts([...products, productData]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products Database</h1>
        <button 
          onClick={() => handleOpenModal()} // Opens modal for adding
          className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800 transition"
        >
          + Add New Product
        </button>
      </div>

      {/* Table remains exactly the same as before */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 font-semibold text-gray-600">ID</th>
              <th className="p-4 font-semibold text-gray-600">Product Name</th>
              <th className="p-4 font-semibold text-gray-600">Category</th>
              <th className="p-4 font-semibold text-gray-600">Price</th>
              <th className="p-4 font-semibold text-gray-600">Stock</th>
              <th className="p-4 font-semibold text-gray-600">Status</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 text-gray-500">#{product.id}</td>
                <td className="p-4 font-medium text-gray-800">{product.name}</td>
                <td className="p-4 text-gray-600">{product.category}</td>
                <td className="p-4 text-gray-600">₹{product.price.toFixed(2)}</td>
                <td className="p-4 text-gray-600">{product.stock}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-3">
                  <button 
                    onClick={() => handleOpenModal(product)} // Opens modal with product data
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render the Modal Component */}
      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSaveProduct}
        productToEdit={productToEdit}
      />
    </div>
  );
};

export default ProductList;