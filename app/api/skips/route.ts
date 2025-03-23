import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Sample skip data
const skips = [
  {
    id: 1,
    name: "2 Yard Mini Skip",
    description: "Our smallest skip, perfect for small home projects and garden waste.",
    size: "2 Yard",
    price: 120.00,
    features: ["Free delivery", "2-week hire", "Environmentally friendly disposal"],
    capacity: "20-30 bin bags",
    suitableFor: "small garden waste & home projects",
    hireIncluded: "2-week hire included"
  },
  {
    id: 2,
    name: "4 Yard Midi Skip",
    description: "Medium-sized skip suitable for moderate renovation projects and larger garden clearance.",
    size: "4 Yard",
    price: 160.00,
    features: ["Free delivery", "2-week hire", "Environmentally friendly disposal"],
    capacity: "40-50 bin bags",
    suitableFor: "home renovations & larger garden waste",
    hireIncluded: "2-week hire included"
  },
  {
    id: 3,
    name: "6 Yard Maxi Skip",
    description: "Large skip ideal for major renovation projects, house clearances and bulky waste disposal.",
    size: "6 Yard",
    price: 200.00,
    features: ["Free delivery", "2-week hire", "Environmentally friendly disposal"],
    capacity: "60-70 bin bags",
    suitableFor: "major renovations & house clearances",
    hireIncluded: "2-week hire included"
  }
];

export async function GET(request: NextRequest) {
  // Get query parameters if needed
  // const { searchParams } = new URL(request.url);
  // const postcode = searchParams.get('postcode');
  // const area = searchParams.get('area');
  
  // In a real-world scenario, you would filter skips based on postcode/area
  // or fetch the data from a database/external API
  
  return NextResponse.json(skips);
}