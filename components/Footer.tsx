"use client";

import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">We Want Waste</h3>
            <p className="text-gray-400 mb-6">
              Professional and reliable skip hire services for domestic and commercial customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Skip Hire</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Coverage Areas</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">FAQ</a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Environmental Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">Waste Management License</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">01234 567890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">info@wewantwaste.co.uk</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Waste Management Way<br />
                  Lowestoft, Suffolk<br />
                  NR32 1AB
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} We Want Waste. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Licensed waste carrier. Environment Agency registered.
          </p>
        </div>
      </div>
    </footer>
  );
}