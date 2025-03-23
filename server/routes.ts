import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Define Skip interface
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

// Interface for the external API data
interface ExternalSkip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

// External API endpoint for skip data
const EXTERNAL_API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location";

// Function to transform external API data to our Skip interface
function transformSkipData(externalSkips: ExternalSkip[]): Skip[] {
  return externalSkips.map(skip => {
    // Generate a descriptive name based on the skip size
    const name = `${skip.size} Yard ${getSkipSizeCategory(skip.size)} Skip`;
    
    // Generate description based on size and features
    const description = generateSkipDescription(skip);
    
    // Calculate price including VAT
    const priceWithVAT = skip.price_before_vat * (1 + skip.vat / 100);
    
    // Generate features array
    const features = [
      `${skip.hire_period_days}-day hire period included`,
      `Holds approximately ${getCapacityEstimate(skip.size)} bin bags`,
      skip.allowed_on_road ? "Can be placed on road with permit" : "Not suitable for road placement",
      skip.allows_heavy_waste ? "Suitable for heavy waste" : "Not suitable for heavy waste"
    ];
    
    return {
      id: skip.id,
      name,
      description,
      size: `${skip.size} Yard`,
      price: Math.round(priceWithVAT), // Round to nearest pound
      features,
      capacity: getCapacityEstimate(skip.size),
      suitableFor: getSuitabilityDescription(skip),
      hireIncluded: `${skip.hire_period_days}-day hire period`
    };
  });
}

// Helper functions for data transformation
function getSkipSizeCategory(size: number): string {
  if (size <= 4) return "Mini";
  if (size <= 8) return "Builder's";
  if (size <= 12) return "Maxi";
  return "Roll-On";
}

function generateSkipDescription(skip: ExternalSkip): string {
  if (skip.size <= 4) {
    return "Perfect for small garden projects and household clearance";
  } else if (skip.size <= 8) {
    return "Ideal for home renovations, building waste, and larger clearances";
  } else if (skip.size <= 12) {
    return "Great for large construction projects and commercial waste";
  } else {
    return "Industrial-sized skip for major construction and demolition projects";
  }
}

function getCapacityEstimate(size: number): string {
  return `${size * 10}-${size * 15} bin bags`;
}

function getSuitabilityDescription(skip: ExternalSkip): string {
  if (skip.size <= 4) {
    return "Garden waste, household waste, small clearances";
  } else if (skip.size <= 8) {
    return "Construction waste, home renovations, garden clearances";
  } else if (skip.size <= 12) {
    return "Commercial waste, large renovations, building sites";
  } else {
    return "Industrial waste, major construction, demolition projects";
  }
}

// Sample data as fallback if the external API fails
const sampleSkipsData: Skip[] = [
  {
    id: 1,
    name: "2 Yard Mini Skip",
    description: "Perfect for small garden projects and household clearance",
    size: "2 Yard",
    price: 125.00,
    features: [
      "Holds approximately 20-30 bin bags",
      "Suitable for garden waste",
      "2-week hire included"
    ],
    capacity: "20-30 bin bags",
    suitableFor: "garden waste",
    hireIncluded: "2-week hire included"
  },
  {
    id: 2,
    name: "4 Yard Midi Skip",
    description: "Ideal for medium garden projects and home renovations",
    size: "4 Yard",
    price: 175.00,
    features: [
      "Holds approximately 40-60 bin bags",
      "Suitable for garden and construction waste",
      "2-week hire included"
    ],
    capacity: "40-60 bin bags",
    suitableFor: "garden and construction waste",
    hireIncluded: "2-week hire included"
  },
  {
    id: 3,
    name: "6 Yard Builder's Skip",
    description: "Great for large garden clearance and building projects",
    size: "6 Yard",
    price: 225.00,
    features: [
      "Holds approximately a third of a garage",
      "Suitable for all waste types",
      "2-week hire included"
    ],
    capacity: "a third of a garage",
    suitableFor: "all waste types",
    hireIncluded: "2-week hire included"
  }
];

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get skips data for the given location
  app.get('/api/skips', async (req, res) => {
    try {
      // Get query parameters
      const postcode = req.query.postcode as string || 'NR32';
      const area = req.query.area as string || 'Lowestoft';
      
      // Try to fetch from external API
      try {
        // Construct the external API URL with the parameters
        const apiUrl = `${EXTERNAL_API_URL}?postcode=${postcode}&area=${area}`;
        
        // Fetch data from the external API
        const response = await fetch(apiUrl, {
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (response.ok) {
          // Parse the response data
          const externalSkipsData: ExternalSkip[] = await response.json();
          
          // Only include skips that aren't forbidden
          const validSkips = externalSkipsData.filter(skip => !skip.forbidden);
          
          // Transform the data to match our interface
          const transformedSkips = transformSkipData(validSkips);
          
          return res.json(transformedSkips);
        }
      } catch (apiError) {
        console.error("Error fetching from external API:", apiError);
        // If external API fails, we'll fall back to sample data below
      }
      
      // Return sample data as fallback
      res.json(sampleSkipsData);
    } catch (error) {
      console.error("Error fetching skips data:", error);
      res.status(500).json({ message: "Failed to fetch skips data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
