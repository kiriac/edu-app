"use client";

import { Check, Package, Truck, Leaf } from "lucide-react";
import { Skip } from "../client/src/lib/types";
import { cn } from "../client/src/lib/utils";

// These UI components need to be moved to the components/ui folder later
import { Button } from "../client/src/components/ui/button";
import { Badge } from "../client/src/components/ui/badge";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

export default function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  const handleSelectSkip = () => {
    onSelect(skip);
  };

  // Get skip size visualization dimensions
  const getSkipDimensions = (size: string) => {
    if (size === "2 Yard") return "w-24 h-12";
    if (size === "4 Yard") return "w-32 h-16";
    return "w-40 h-20"; // 6 Yard
  };

  return (
    <div 
      className={cn(
        "skip-card bg-white rounded-xl shadow-sm border-2 overflow-hidden transition-all duration-200",
        isSelected 
          ? "border-primary ring-4 ring-primary/10 scale-[1.01]" 
          : "border-gray-100 hover:border-gray-200 hover:shadow-md"
      )}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="default" className="bg-primary text-white px-3 py-1 flex items-center">
            <Check className="h-3.5 w-3.5 mr-1" />
            Selected
          </Badge>
        </div>
      )}
      
      <div className="h-44 relative flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="text-center z-10">
          <div className={cn(
            "mx-auto bg-yellow-400 mb-2 transform transition-all duration-200 rounded-sm shadow-md",
            getSkipDimensions(skip.size),
            isSelected ? "rotate-0" : "rotate-6"
          )}></div>
          <span className="text-gray-600 text-sm font-medium inline-block bg-white/80 px-2 py-0.5 rounded-full">
            {skip.size} Skip
          </span>
        </div>
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{skip.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{skip.description}</p>
        
        <ul className="mb-5 text-sm text-gray-700 space-y-2.5">
          <li className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Package className="h-3.5 w-3.5 text-primary" />
            </div>
            <span>{skip.capacity}</span>
          </li>
          <li className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Leaf className="h-3.5 w-3.5 text-primary" />
            </div>
            <span>Suitable for {skip.suitableFor}</span>
          </li>
          <li className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Truck className="h-3.5 w-3.5 text-primary" />
            </div>
            <span>{skip.hireIncluded}</span>
          </li>
        </ul>
        
        <div className="flex justify-between items-center mb-5 pb-5 border-b border-gray-100">
          <div className="text-2xl font-bold text-gray-900">£{skip.price.toFixed(2)}</div>
        </div>
        
        <Button 
          onClick={handleSelectSkip}
          className={cn(
            "w-full py-6 font-medium text-base transition-all",
            isSelected 
              ? "bg-gray-100 hover:bg-gray-200 text-gray-800"
              : "bg-primary hover:bg-primary/90 text-white"
          )}
        >
          {isSelected ? "Skip Selected" : "Select This Skip"}
        </Button>
      </div>
    </div>
  );
}