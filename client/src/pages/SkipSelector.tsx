import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import ProgressTracker from "../components/ProgressTracker";
import InfoBanner from "../components/InfoBanner";
import SkipCard from "../components/SkipCard";
import OrderSummary from "../components/OrderSummary";
import Footer from "../components/Footer";
import { Skip, SelectedSkip, OrderSummary as OrderSummaryType } from "../lib/types";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function SkipSelector() {
  const [selectedSkip, setSelectedSkip] = useState<SelectedSkip | null>(null);
  const [orderSummary, setOrderSummary] = useState<OrderSummaryType>({
    subtotal: 0,
    delivery: 0,
    vat: 0,
    total: 0
  });
  const [address] = useState("24 Example Street, Lowestoft, NR32 1AB");

  const { data: skips, isLoading, isError, refetch } = useQuery({
    queryKey: ['/api/skips'],
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip({
      id: skip.id,
      name: skip.name,
      price: skip.price
    });
  };

  useEffect(() => {
    if (selectedSkip) {
      const subtotal = selectedSkip.price;
      const delivery = 0; // Free delivery
      const vat = subtotal * 0.2; // 20% VAT
      const total = subtotal + delivery + vat;
      
      setOrderSummary({
        subtotal,
        delivery,
        vat,
        total
      });
    } else {
      setOrderSummary({
        subtotal: 0,
        delivery: 0,
        vat: 0,
        total: 0
      });
    }
  }, [selectedSkip]);

  const handleContinue = () => {
    if (selectedSkip) {
      alert(`Continuing to schedule delivery with selected skip: ${selectedSkip.name}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ProgressTracker />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Skip</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the appropriate skip size for your garden waste at <span className="font-medium text-gray-800">{address}</span>
            </p>
          </div>

          <InfoBanner />

          {/* Skip grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-16">
                <div className="relative w-16 h-16 mb-4">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-gray-200"></div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                </div>
                <span className="text-lg font-medium text-gray-700">Loading available skips...</span>
              </div>
            ) : isError ? (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white border border-red-100 rounded-xl p-8 text-center shadow-sm">
                <div className="rounded-full bg-red-50 w-20 h-20 flex items-center justify-center mx-auto mb-5">
                  <AlertCircle className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Skips</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">We encountered a problem while loading available skips. Please try again.</p>
                <Button 
                  variant="default" 
                  onClick={() => refetch()}
                  className="px-6 py-2.5"
                >
                  Retry
                </Button>
              </div>
            ) : skips && skips.length > 0 ? (
              skips.map((skip: Skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkip?.id === skip.id}
                  onSelect={handleSelectSkip}
                />
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <div className="rounded-full bg-amber-50 w-20 h-20 flex items-center justify-center mx-auto mb-5">
                  <AlertCircle className="h-10 w-10 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Skips Available</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">We couldn't find any skips available for your location at this time.</p>
                <Button className="px-6 py-2.5">
                  Try a Different Area
                </Button>
              </div>
            )}
          </div>

          {/* Checkout summary */}
          <OrderSummary
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
