import { Button } from "@/components/ui/button";
import { SelectedSkip, OrderSummary as OrderSummaryType } from "@/lib/types";

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
    <div className="mt-10 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Order Summary</h2>
        
        <div className="mb-6">
          {!selectedSkip ? (
            <div className="bg-neutral-50 rounded-md p-4 text-center">
              <p className="text-neutral-600">Please select a skip to continue</p>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-medium text-neutral-900">{selectedSkip.name}</span>
                  <span className="text-neutral-500 ml-1">x</span>
                  <span className="text-neutral-500">{selectedSkip.quantity}</span>
                </div>
                <div className="font-medium text-neutral-900">
                  {formatPrice(selectedSkip.totalPrice)}
                </div>
              </div>
              <p className="text-neutral-600 text-sm mb-4">
                Delivery to: <span className="font-medium">{address}</span>
              </p>
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-200 pt-4 pb-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-neutral-600">Subtotal</span>
            <span className="font-medium text-neutral-900">{formatPrice(orderSummary.subtotal)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-neutral-600">Delivery</span>
            <span className="font-medium text-neutral-900">{formatPrice(orderSummary.delivery)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-600">VAT (20%)</span>
            <span className="font-medium text-neutral-900">{formatPrice(orderSummary.vat)}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-neutral-900">Total</span>
            <span className="text-lg font-bold text-neutral-900">{formatPrice(orderSummary.total)}</span>
          </div>
          
          <Button
            onClick={onContinue}
            disabled={!selectedSkip}
            className="w-full py-3 bg-primary-800 hover:bg-primary-900 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Schedule Delivery
          </Button>
        </div>
      </div>
    </div>
  );
}
