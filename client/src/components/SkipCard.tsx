import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkipQuantityControl from "@/components/SkipQuantityControl";
import { Skip } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip, quantity: number) => void;
  onQuantityChange: (skipId: number, quantity: number) => void;
}

export default function SkipCard({ skip, isSelected, onSelect, onQuantityChange }: SkipCardProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isSelected) {
      onQuantityChange(skip.id, quantity);
    }
  }, [quantity, isSelected, skip.id, onQuantityChange]);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const handleSelectSkip = () => {
    onSelect(skip, quantity);
  };

  return (
    <div 
      className={cn(
        "skip-card bg-white rounded-lg shadow-sm border overflow-hidden transition-all",
        isSelected ? "border-primary-800 bg-blue-50" : "border-gray-200"
      )}
    >
      <div className="h-48 flex items-center justify-center" style={{
        background: "linear-gradient(135deg, #EFF6FF 25%, #DBEAFE 25%, #DBEAFE 50%, #EFF6FF 50%, #EFF6FF 75%, #DBEAFE 75%, #DBEAFE 100%)",
        backgroundSize: "20px 20px"
      }}>
        <div className="text-center">
          <div className={`mx-auto bg-yellow-400 mb-2 transform rotate-6 rounded-sm ${
            skip.size === "2 Yard" ? "w-32 h-16" :
            skip.size === "4 Yard" ? "w-36 h-18" :
            "w-40 h-20"
          }`}></div>
          <span className="text-neutral-500 text-sm">{skip.size} Skip</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900 mb-1">{skip.name}</h3>
        <p className="text-neutral-600 text-sm mb-4">{skip.description}</p>
        
        <ul className="mb-4 text-sm text-neutral-600">
          {skip.features.map((feature, index) => (
            <li key={index} className="flex items-center mb-1">
              <CheckCircle className="h-4 w-4 text-secondary-600 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-neutral-900">£{skip.price.toFixed(2)}</div>
          <SkipQuantityControl
            value={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onChange={handleChange}
          />
        </div>
        
        <Button 
          onClick={handleSelectSkip}
          className="w-full py-3 bg-secondary-700 hover:bg-secondary-800 text-white font-medium"
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </Button>
      </div>
    </div>
  );
}
