import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, Search, User } from 'lucide-react';
import { User as UserType } from '../types';

interface HeaderProps {
  cartItemCount: number;
  user: UserType | null;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold hover:text-purple-200 transition-colors">
          <Store className="mr-2 animate-bounce" />
          Shri Web Wonders
        </Link>
        <div className="flex items-center mt-4 md:mt-0">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-white text-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          <Link to="/cart" className="flex items-center mr-4 hover:text-purple-200 transition-colors relative">
            <ShoppingCart className="mr-1" />
            <span className="bg-white text-purple-600 rounded-full px-2 py-1 text-xs font-bold absolute -top-2 -right-2 transition-all duration-300 hover:bg-purple-200 hover:text-purple-600">
              {cartItemCount}
            </span>
          </Link>
          {user ? (
            <span className="flex items-center hover:text-purple-200 transition-colors">
              <User className="mr-1" />
              {user.name}
            </span>
          ) : (
            <Link to="/login" className="hover:text-purple-200 transition-colors">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;