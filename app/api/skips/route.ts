import { NextRequest, NextResponse } from "next/server";

// Define Skip interface directly in the file
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

// Sample skip data - in a real app, this would come from a database
const skips: Skip[] = [
  {
    id: 1,
    name: "2 Yard Mini Skip",
    description: "Our smallest skip, perfect for small home clearances and garden waste.",
    size: "2 Yard",
    price: 120,
    features: [
      "Holds approximately 20-30 bin bags",
      "Ideal for small home projects",
      "Compact size fits most spaces",
      "Low sides for easy loading",
    ],
    capacity: "20-30 bin bags",
    suitableFor: "Small household waste, garden waste",
    hireIncluded: "2 week standard hire period"
  },
  {
    id: 2,
    name: "4 Yard Midi Skip",
    description: "Medium-sized skip suitable for bathroom refits and kitchen clearances.",
    size: "4 Yard",
    price: 175,
    features: [
      "Holds approximately 40 bin bags",
      "Perfect for home renovations",
      "Fits in most driveways",
      "Easily accessible height",
    ],
    capacity: "40 bin bags",
    suitableFor: "Kitchen/bathroom refits, household waste",
    hireIncluded: "2 week standard hire period"
  },
  {
    id: 3,
    name: "6 Yard Builder's Skip",
    description: "Our most popular skip, ideal for building waste and large clearances.",
    size: "6 Yard",
    price: 210,
    features: [
      "Holds approximately 60 bin bags",
      "Suitable for construction waste",
      "Great for larger home renovations",
      "Easy to load building materials",
    ],
    capacity: "60 bin bags",
    suitableFor: "Home renovations, building waste",
    hireIncluded: "2 week standard hire period"
  },
  {
    id: 4,
    name: "8 Yard Maxi Skip",
    description: "Large skip for substantial projects and commercial waste disposal.",
    size: "8 Yard",
    price: 245,
    features: [
      "Holds approximately 80 bin bags",
      "Ideal for large-scale projects",
      "Great for commercial use",
      "Accommodates bulky waste items",
    ],
    capacity: "80 bin bags",
    suitableFor: "Office clearances, large renovations",
    hireIncluded: "2 week standard hire period"
  },
  {
    id: 5,
    name: "12 Yard Jumbo Skip",
    description: "Huge capacity for the biggest projects and commercial needs.",
    size: "12 Yard",
    price: 320,
    features: [
      "Holds 120+ bin bags",
      "Largest skip available",
      "Perfect for major construction",
      "Commercial waste disposal",
    ],
    capacity: "120+ bin bags",
    suitableFor: "Major construction, large commercial waste",
    hireIncluded: "2 week standard hire period"
  }
];

export async function GET(request: NextRequest) {
  try {
    // In a real app, you might query based on postcode or other parameters
    // const { searchParams } = new URL(request.url);
    // const postcode = searchParams.get('postcode');
    
    // Return all skips for now
    return NextResponse.json(skips, { status: 200 });
  } catch (error) {
    console.error("Error fetching skips:", error);
    return NextResponse.json(
      { error: "Failed to fetch skip data" },
      { status: 500 }
    );
  }
}