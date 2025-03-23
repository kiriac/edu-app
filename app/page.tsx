"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skip, OrderSummary, SelectedSkip } from "../types";

// Import components
import Header from "../components/Header";
import ProgressTracker from "../components/ProgressTracker";
import InfoBanner from "../components/InfoBanner";
import SkipCard from "../components/SkipCard";
import OrderSummaryComponent from "../components/OrderSummary";
import Footer from "../components/Footer";

/**
 * Main Skip Selector Page Component
 */
export default function SkipSelectorPage() {
  const [selectedSkip, setSelectedSkip] = useState<SelectedSkip | null>(null);
  
  const { data: skips = [], isLoading, error } = useQuery({
    queryKey: ["skips"],
    queryFn: async () => {
      const response = await fetch("/api/skips");
      if (!response.ok) {
        throw new Error("Failed to fetch skips");
      }
      return response.json() as Promise<Skip[]>;
    }
  });

  // Mock address (in a real app, this would come from previous step)
  const address = "123 Main Street, Lowestoft, NR32 1AB";
  
  // Calculate order summary based on selected skip
  const orderSummary: OrderSummary = {
    subtotal: selectedSkip ? selectedSkip.price : 0,
    delivery: 0, // Free delivery
    vat: selectedSkip ? selectedSkip.price * 0.2 : 0, // 20% VAT
    total: selectedSkip ? selectedSkip.price * 1.2 : 0 // Price + VAT
  };
  
  const handleSelectSkip = (skip: Skip) => {
    // If this skip is already selected, unselect it
    if (selectedSkip && selectedSkip.id === skip.id) {
      setSelectedSkip(null);
      return;
    }
    
    // Otherwise, select the skip
    setSelectedSkip({
      id: skip.id,
      name: skip.name,
      price: skip.price
    });
  };
  
  // Placeholder function for continuing to next step
  const handleContinue = () => {
    alert("Continue to delivery scheduling - this would navigate to next step");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ProgressTracker />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Select Your Skip</h1>
            <p className="text-gray-600 max-w-3xl">
              Choose the perfect skip size for your needs. We offer a range of options suitable for different projects, from small garden clearances to major renovations.
            </p>
          </div>
          
          <InfoBanner />
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl h-[550px]"></div>
              ))}
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              There was an error loading skip options. Please try again later.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skips.map((skip: Skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkip?.id === skip.id}
                  onSelect={handleSelectSkip}
                />
              ))}
            </div>
          )}
          
          <div className="max-w-xl mx-auto">
            <OrderSummaryComponent
              selectedSkip={selectedSkip}
              orderSummary={orderSummary}
              address={address}
              onContinue={handleContinue}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}