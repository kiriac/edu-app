"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import ProgressTracker from "@/components/ProgressTracker";
import InfoBanner from "@/components/InfoBanner";
import SkipCard from "@/components/SkipCard";
import OrderSummaryComponent from "@/components/OrderSummary";
import Footer from "@/components/Footer";

// Define types within the page component for simplicity
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

interface OrderSummary {
  subtotal: number;
  delivery: number;
  vat: number;
  total: number;
}

interface SelectedSkip {
  id: number;
  name: string;
  price: number;
}

/**
 * Main Skip Selector Page Component using Next.js App Router
 */
export default function SkipSelectorPage() {
  const [selectedSkip, setSelectedSkip] = useState<SelectedSkip | null>(null);
  const [address, setAddress] = useState("123 Sample Street, London, SW1A 1AA");

  // Fetch skips data from our API route which connects to the external API
  const { data: skips = [], isLoading, error } = useQuery<Skip[]>({
    queryKey: ['skips'],
    queryFn: async () => {
      const response = await fetch('/api/skips');
      if (!response.ok) {
        throw new Error('Failed to fetch skips');
      }
      const data = await response.json();
      return data;
    }
  });

  // Calculate order summary based on selected skip
  const orderSummary: OrderSummary = {
    subtotal: selectedSkip ? selectedSkip.price : 0,
    delivery: 0, // Free delivery
    vat: selectedSkip ? selectedSkip.price * 0.2 : 0, // 20% VAT
    total: selectedSkip ? selectedSkip.price * 1.2 : 0, // Subtotal + VAT
  };

  // Handle skip selection
  const handleSelectSkip = (skip: Skip) => {
    if (selectedSkip && selectedSkip.id === skip.id) {
      setSelectedSkip(null); // Deselect if already selected
    } else {
      setSelectedSkip({
        id: skip.id,
        name: skip.name,
        price: skip.price
      });
    }
  };

  // Mock function for continuing to next step
  const handleContinue = () => {
    alert("Continuing to delivery details. This would navigate to the next page in a complete application.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProgressTracker />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Select Your Skip</h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose the right skip for your project from our range of sizes
          </p>
          
          <InfoBanner />
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading skip options...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-red-50 rounded-xl border border-red-200 p-6">
              <p className="text-red-600 mb-2 font-medium">Error loading skip options</p>
              <p className="text-gray-600">Please try refreshing the page or contact our support team.</p>
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
          
          <OrderSummaryComponent
            selectedSkip={selectedSkip}
            orderSummary={orderSummary}
            address={address}
            onContinue={handleContinue}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}