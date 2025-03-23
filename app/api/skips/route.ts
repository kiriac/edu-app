import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Get the query parameters from the request URL
    const url = new URL(request.url);
    const postcode = url.searchParams.get("postcode") || "NR32";
    const area = url.searchParams.get("area") || "Lowestoft";
    
    // Fetch skip data from the external API
    const response = await fetch(
      `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch skip data: ${response.statusText}`);
    }

    const skips = await response.json();
    
    return NextResponse.json(skips);
  } catch (error) {
    console.error("Error fetching skips:", error);
    return NextResponse.json(
      { error: "Failed to fetch skip data" },
      { status: 500 }
    );
  }
}