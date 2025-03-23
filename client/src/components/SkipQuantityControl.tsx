import { Plus, Minus } from "lucide-react";

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
    <div className="flex items-center">
      <button
        onClick={onDecrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-l-md border border-gray-300"
        aria-label="Decrease quantity"
      >
        <Minus className="h-3 w-3" />
      </button>
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 1)}
        className="w-12 h-8 text-center border-t border-b border-gray-300 focus:outline-none"
        aria-label="Quantity"
      />
      <button
        onClick={onIncrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-r-md border border-gray-300"
        aria-label="Increase quantity"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}
