"use client";

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Button } from "../client/src/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter section */}
        <div className="py-10 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Join our newsletter</h3>
              <p className="text-gray-400">Stay updated with our latest offers and waste management tips</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white py-3 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://wewantwaste.co.uk/wp-content/uploads/2024/02/logo-white.png" 
                alt="We Want Waste Logo" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm mb-6">
                We Want Waste provides efficient waste management solutions tailored to your needs.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                  <Facebook className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                  <Twitter className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-5">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Skip Hire</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Garden Waste Removal</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Commercial Waste</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Recycling Services</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 bg-gray-800 p-2 rounded-full mr-3">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">0800 123 4567</p>
                    <p className="text-gray-400 text-sm">Mon-Fri 8am to 6pm</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-gray-800 p-2 rounded-full mr-3">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">info@wewantwaste.co.uk</p>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-gray-800 p-2 rounded-full mr-3">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">123 Waste Street</p>
                    <p className="text-gray-400 text-sm">Lowestoft, UK</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 We Want Waste. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}