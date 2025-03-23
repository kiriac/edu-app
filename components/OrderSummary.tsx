"use client";

import React from "react";
import { MapPin, Calendar } from "lucide-react";
import { OrderSummary as OrderSummaryType, SelectedSkip } from "../types";
import { Button } from "../client/src/components/ui/button";

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
  onContinue,
}: OrderSummaryProps) {
  return (
    <div className="mt-10 bg-white rounded-xl border border-gray-200 divide-y divide-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
        
        {selectedSkip ? (
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{selectedSkip.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Hire includes 2 weeks standard hire period</p>
              </div>
              <div className="text-right">
                <span className="font-medium text-gray-900">£{selectedSkip.price.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <dl className="space-y-3">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">£{orderSummary.subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Delivery</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {orderSummary.delivery === 0 ? "FREE" : `£${orderSummary.delivery.toFixed(2)}`}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">VAT (20%)</dt>
                  <dd className="text-sm font-medium text-gray-900">£{orderSummary.vat.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-3">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">£{orderSummary.total.toFixed(2)}</dd>
                </div>
              </dl>
            </div>
            
            <div className="bg-gray-50 -mx-6 -mb-6 p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Delivery Address</h4>
                    <p className="text-sm text-gray-600 mt-1">{address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Delivery Date</h4>
                    <p className="text-sm text-gray-600 mt-1">To be selected in next step</p>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={onContinue}
                className="w-full mt-6 bg-primary hover:bg-primary/90 text-white py-6 font-medium text-base"
              >
                Continue to Delivery Details
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600 mb-6">Please select a skip to view your order summary</p>
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
              <span className="text-gray-400 text-2xl">?</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}