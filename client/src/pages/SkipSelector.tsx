import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import ProgressTracker from "@/components/ProgressTracker";
import InfoBanner from "@/components/InfoBanner";
import SkipCard from "@/components/SkipCard";
import OrderSummary from "@/components/OrderSummary";
import Footer from "@/components/Footer";
import { Skip, SelectedSkip, OrderSummary as OrderSummaryType } from "@/lib/types";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const handleSelectSkip = (skip: Skip, quantity: number) => {
    const skipTotal = skip.price * quantity;
    
    setSelectedSkip({
      id: skip.id,
      name: skip.name,
      quantity: quantity,
      price: skip.price,
      totalPrice: skipTotal
    });
  };

  const handleQuantityChange = (skipId: number, quantity: number) => {
    if (!selectedSkip || selectedSkip.id !== skipId) return;
    
    const updatedTotal = selectedSkip.price * quantity;
    
    setSelectedSkip({
      ...selectedSkip,
      quantity: quantity,
      totalPrice: updatedTotal
    });
  };

  useEffect(() => {
    if (selectedSkip) {
      const subtotal = selectedSkip.totalPrice;
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProgressTracker />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Choose Your Skip</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Select the appropriate skip size for your garden waste at <span className="font-medium">{address}</span>
            </p>
          </div>

          <InfoBanner />

          {/* Skip grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center py-16">
                <Loader2 className="h-8 w-8 text-primary animate-spin mr-2" />
                <span className="text-lg font-medium">Loading available skips...</span>
              </div>
            ) : isError ? (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-neutral-900 mb-2">Error Loading Skips</h3>
                <p className="text-neutral-600 mb-4">We encountered a problem while loading available skips. Please try again.</p>
                <Button 
                  variant="default" 
                  onClick={() => refetch()}
                  className="px-4 py-2 bg-primary-700 hover:bg-primary-800"
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
                  onQuantityChange={handleQuantityChange}
                />
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-neutral-900 mb-2">No Skips Available</h3>
                <p className="text-neutral-600 mb-4">We couldn't find any skips available for your location at this time.</p>
                <Button className="px-4 py-2 bg-primary-700 hover:bg-primary-800">
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
