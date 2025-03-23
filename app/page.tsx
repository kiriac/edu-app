"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skip, SelectedSkip, OrderSummary } from "../client/src/lib/types";

// Will move these components later to the components folder
import Header from "../client/src/components/Header";
import Footer from "../client/src/components/Footer";
import ProgressTracker from "../client/src/components/ProgressTracker";
import InfoBanner from "../client/src/components/InfoBanner";

/**
 * Main Skip Selector Page Component
 */
export default function SkipSelectorPage() {
  const [selectedSkip, setSelectedSkip] = useState<SelectedSkip | null>(null);
  const [address, setAddress] = useState("123 Main St, Lowestoft, NR32 1AB");
  
  // Order summary calculation
  const orderSummary: OrderSummary = {
    subtotal: selectedSkip ? selectedSkip.price : 0,
    delivery: 35,
    vat: selectedSkip ? (selectedSkip.price + 35) * 0.2 : 0,
    total: selectedSkip ? (selectedSkip.price + 35) * 1.2 : 0,
  };

  // Fetch skips data
  const { data: skips = [], isLoading, error } = useQuery({
    queryKey: ["skips"],
    queryFn: async () => {
      const response = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch skips");
      }
      return response.json();
    },
  });

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip({
      id: skip.id,
      name: skip.name,
      price: skip.price,
    });
  };

  const handleContinue = () => {
    alert("Order placed successfully!");
    // In a real app, we would navigate to the next page or submit the order
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <ProgressTracker />
      <InfoBanner />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Select Your Skip
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Available Skips</h2>
              
              {isLoading ? (
                <div className="flex justify-center items-center h-40">
                  <p>Loading skips...</p>
                </div>
              ) : error ? (
                <div className="bg-red-50 text-red-800 p-4 rounded-md">
                  <p>Error loading skips. Please try again.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skips.map((skip: Skip) => (
                    <div
                      key={skip.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedSkip?.id === skip.id
                          ? "border-primary-500 bg-primary-50 ring-2 ring-primary-500"
                          : "border-gray-200 hover:border-primary-300"
                      }`}
                      onClick={() => handleSelectSkip(skip)}
                    >
                      <h3 className="font-semibold text-lg">{skip.name}</h3>
                      <p className="text-sm text-gray-600">{skip.size}</p>
                      <p className="text-sm mt-1">{skip.description}</p>
                      <p className="mt-2 font-bold text-primary-700">
                        £{skip.price.toFixed(2)}
                      </p>
                      <div className="mt-3 text-xs text-gray-500">
                        <p>Capacity: {skip.capacity}</p>
                        <p>For: {skip.suitableFor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Selected Skip:</span>
                  <span className="font-medium">
                    {selectedSkip ? selectedSkip.name : "None"}
                  </span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Skip Cost:</span>
                  <span>£{orderSummary.subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Delivery Fee:</span>
                  <span>£{orderSummary.delivery.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-600">VAT (20%):</span>
                  <span>£{orderSummary.vat.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>£{orderSummary.total.toFixed(2)}</span>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Delivery Address:</h3>
                  <p className="text-sm text-gray-600">{address}</p>
                </div>
                
                <button
                  onClick={handleContinue}
                  disabled={!selectedSkip}
                  className={`w-full py-3 px-4 text-white font-medium rounded-md mt-6 ${
                    selectedSkip
                      ? "bg-primary-600 hover:bg-primary-700"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  {selectedSkip ? "Continue to Payment" : "Select a Skip"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}