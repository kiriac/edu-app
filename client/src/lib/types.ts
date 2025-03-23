export interface Skip {
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

export interface OrderSummary {
  subtotal: number;
  delivery: number;
  vat: number;
  total: number;
}

export interface SelectedSkip {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}
