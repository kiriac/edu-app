import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkipQuantityControlProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (value: number) => void;
}

export default function SkipQuantityControl({
  value,
  onIncrement,
  onDecrement,
  onChange
}: SkipQuantityControlProps) {
  return (
    <div className="flex items-center bg-gray-50 rounded-lg p-0.5 border border-gray-200">
      <button
        onClick={onDecrement}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
          value > 1 
            ? "text-gray-700 hover:bg-gray-200" 
            : "text-gray-400 cursor-not-allowed"
        )}
        disabled={value <= 1}
        aria-label="Decrease quantity"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 1)}
        className="w-10 h-8 text-center bg-transparent border-none focus:outline-none text-gray-900 font-medium"
        aria-label="Quantity"
      />
      <button
        onClick={onIncrement}
        className="w-8 h-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
