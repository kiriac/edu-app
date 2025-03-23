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

// External API endpoint for skip data
const EXTERNAL_API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location";

export async function GET(request: NextRequest) {
  try {
    // Get search params from request URL
    const { searchParams } = new URL(request.url);
    
    // Default values if not provided
    const postcode = searchParams.get('postcode') || 'NR32';
    const area = searchParams.get('area') || 'Lowestoft';
    
    // Construct the external API URL with the parameters
    const apiUrl = `${EXTERNAL_API_URL}?postcode=${postcode}&area=${area}`;
    
    // Fetch data from the external API
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`External API returned ${response.status}: ${response.statusText}`);
    }
    
    // Parse the response data
    const skipsData = await response.json();
    
    // Transform the data if needed to match our interface
    // This assumes the external API returns compatible data structure
    // We can add mapping logic here if the structures differ
    
    return NextResponse.json(skipsData, { status: 200 });
  } catch (error) {
    console.error("Error fetching skips:", error);
    return NextResponse.json(
      { error: "Failed to fetch skip data" },
      { status: 500 }
    );
  }
}