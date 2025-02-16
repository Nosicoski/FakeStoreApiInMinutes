import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                FakeStore
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
              Products
            </Link>
            <Link
              to="/cart"
              className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="ml-1 bg-indigo-600 text-white rounded-full px-2 py-1 text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}