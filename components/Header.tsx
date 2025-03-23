"use client";

import React from "react";
import { Menu, X, ShoppingBag, Phone, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-gray-900">
                We Want <span className="text-primary">Waste</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Skip Hire</a>
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Areas</a>
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">About Us</a>
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Contact</a>
          </nav>
          
          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a href="tel:01234567890" className="hidden md:flex items-center text-primary hover:text-primary/80">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">01234 567890</span>
            </a>
            
            <Button variant="outline" size="sm" className="hidden md:flex items-center">
              <UserCircle className="h-4 w-4 mr-1" />
              <span>My Account</span>
            </Button>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-gray-200">
          <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Skip Hire</a>
          <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Areas</a>
          <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About Us</a>
          <a href="#" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          
          <div className="pt-4">
            <a href="tel:01234567890" className="flex items-center text-primary hover:text-primary/80 px-3 py-2">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-base font-medium">01234 567890</span>
            </a>
            
            <a href="#" className="flex items-center text-gray-600 hover:text-primary px-3 py-2">
              <UserCircle className="h-4 w-4 mr-2" />
              <span className="text-base font-medium">My Account</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}