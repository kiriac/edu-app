"use client";

import React from "react";
import { Check, Truck, TruckIcon, Package, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define Skip interface directly in the component
interface Skip {
  id: number;
  name: string;
  description: string;
  size: string;
  price: number;
  features: string[];
  capacity: string;
  suitableFor: string;
  hireIncluded: string;
}

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

export default function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  return (
    <div 
      className={`
        relative rounded-xl overflow-hidden border-2 transition-all duration-200
        ${isSelected 
          ? 'border-primary shadow-md shadow-primary/20' 
          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
        }
      `}
      onClick={() => onSelect(skip)}
    >
      {/* Selected Badge */}
      {isSelected && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-primary hover:bg-primary px-2.5 py-0.5">
            <Check className="h-3.5 w-3.5 mr-1" />
            <span>Selected</span>
          </Badge>
        </div>
      )}
      
      {/* Skip Image/Visual */}
      <div className="bg-gray-50 aspect-square relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/4 h-3/4">
            {/* Skip illustration - this could be a real image in a production app */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <TruckIcon className="h-12 w-12 text-primary mb-2" />
              <div className="bg-gray-200 w-full h-24 rounded-md flex items-center justify-center">
                <Trash className="h-8 w-8 text-gray-500" />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-600">{skip.size}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skip Details */}
      <div className="p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-900">{skip.name}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-3">{skip.description}</p>
        
        <div className="space-y-3 mb-5">
          <div className="flex items-center text-sm">
            <Package className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span className="text-gray-600">Capacity: {skip.capacity}</span>
          </div>
          <div className="flex items-center text-sm">
            <Truck className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span className="text-gray-600">Suitable for: {skip.suitableFor}</span>
          </div>
        </div>
        
        {/* Features List */}
        <ul className="space-y-2 mb-4">
          {skip.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Price */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-900">£{skip.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500 ml-1">+ VAT</span>
          </div>
          <button 
            className={`
              rounded-full px-4 py-2 text-sm font-medium transition-colors
              ${isSelected 
                ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                : 'bg-primary text-white hover:bg-primary/90'
              }
            `}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(skip);
            }}
          >
            {isSelected ? 'Selected' : 'Select'}
          </button>
        </div>
      </div>
    </div>
  );
}