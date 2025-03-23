"use client";

import { Check, MapPin, Calendar, Clock } from "lucide-react";
import { SelectedSkip, OrderSummary as OrderSummaryType } from "../client/src/lib/types";
import { cn } from "../client/src/lib/utils";

// These UI components need to be moved to the components/ui folder later
import { Button } from "../client/src/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../client/src/components/ui/card";

interface OrderSummaryProps {
  selectedSkip: SelectedSkip | null;
  orderSummary: OrderSummaryType;
  address: string;
  onContinue: () => void;
}

export default function OrderSummary({
  selectedSkip,
  orderSummary,
  address,
  onContinue
}: OrderSummaryProps) {
  const formatPrice = (price: number) => {
    return `£${price.toFixed(2)}`;
  };

  return (
    <Card className="mt-10 shadow-md border-gray-100 overflow-hidden">
      <CardHeader className="px-6 py-5 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
          {selectedSkip && (
            <div className="ml-auto">
              <span className="inline-flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
                <Check className="h-3.5 w-3.5 mr-1" />
                Skip Selected
              </span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-6">
          {!selectedSkip ? (
            <div className="bg-gray-50 rounded-lg p-5 text-center border border-dashed border-gray-200">
              <p className="text-gray-500">Please select a skip to continue</p>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-medium text-gray-900 text-lg">{selectedSkip.name}</span>
                </div>
                <div className="font-bold text-primary text-lg">
                  {formatPrice(selectedSkip.price)}
                </div>
              </div>
              
              <div className="flex items-start mb-5 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                <span>Delivery to: <span className="text-gray-900">{address}</span></span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center mb-1">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-xs font-medium text-gray-700">ESTIMATED DELIVERY</span>
                  </div>
                  <p className="text-gray-900 font-medium">Within 2-3 business days</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center mb-1">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-xs font-medium text-gray-700">HIRE DURATION</span>
                  </div>
                  <p className="text-gray-900 font-medium">2-week hire included</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Skip Price</span>
            <span className="font-medium text-gray-900">{formatPrice(orderSummary.subtotal)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Delivery Fee</span>
            <span className={cn(
              "font-medium",
              orderSummary.delivery === 0 ? "text-green-600" : "text-gray-900"
            )}>
              {orderSummary.delivery === 0 ? "FREE" : formatPrice(orderSummary.delivery)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">VAT (20%)</span>
            <span className="font-medium text-gray-900">{formatPrice(orderSummary.vat)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-gray-100 p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6 w-full">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-xl font-bold text-gray-900">{formatPrice(orderSummary.total)}</span>
        </div>
        
        <Button
          onClick={onContinue}
          disabled={!selectedSkip}
          className="w-full py-6 font-medium text-base bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:pointer-events-none"
        >
          Continue to Schedule Delivery
        </Button>
      </CardFooter>
    </Card>
  );
}