import React, { useState, useEffect } from 'react';

const ProductModal = ({ isOpen, onClose, onSubmit, productToEdit }) => {
  // Default empty state for a new product
  const defaultState = {
    name: '',
    category: 'Skincare',
    price: '',
    stock: '',
    status: 'Active'
  };

  const [formData, setFormData] = useState(defaultState);

  // If we pass a product to edit, populate the form. Otherwise, reset it.
  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
    } else {
      setFormData(defaultState);
    }
  }, [productToEdit, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert price and stock to numbers before submitting
    onSubmit({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
      id: productToEdit ? productToEdit.id : Date.now() // Mock ID for new products
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-xl font-bold mb-4">
          {productToEdit ? 'Edit Product' : 'Add New Product'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input 
              type="text" name="name" required
              value={formData.name} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-slate-500 focus:border-slate-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
              <input 
                type="number" step="0.01" name="price" required
                value={formData.price} onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 focus:ring-slate-500 focus:border-slate-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
              <input 
                type="number" name="stock" required
                value={formData.stock} onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 focus:ring-slate-500 focus:border-slate-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select 
                name="category" 
                value={formData.category} onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="Skincare">Skincare</option>
                <option value="Supplements">Supplements</option>
                <option value="Haircare">Haircare</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select 
                name="status" 
                value={formData.status} onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="Active">Active</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button 
              type="button" onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition"
            >
              {productToEdit ? 'Save Changes' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;