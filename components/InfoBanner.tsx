"use client";

import React from "react";
import { Truck, Recycle, Clock, HelpCircle } from "lucide-react";

export default function InfoBanner() {
  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 mb-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Fast Delivery */}
        <div className="flex items-center p-5 border-b md:border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Truck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Fast Delivery</h3>
            <p className="text-sm text-gray-600">Usually next day delivery for orders before 12pm</p>
          </div>
        </div>
        
        {/* Eco-Friendly */}
        <div className="flex items-center p-5 border-b md:border-b lg:border-b-0 md:border-r lg:border-r border-gray-200">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Recycle className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Eco-Friendly Disposal</h3>
            <p className="text-sm text-gray-600">Over 90% of waste is recycled or reused</p>
          </div>
        </div>
        
        {/* Extended Hire */}
        <div className="flex items-center p-5 border-b md:border-b-0 md:border-r lg:border-r border-gray-200">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Extended Hire Available</h3>
            <p className="text-sm text-gray-600">Flexible extensions for your convenience</p>
          </div>
        </div>
        
        {/* Help & Support */}
        <div className="flex items-center p-5">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <HelpCircle className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Expert Advice</h3>
            <p className="text-sm text-gray-600">Call us if you need help selecting the right skip</p>
          </div>
        </div>
      </div>
    </div>
  );
}