import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get skips data for the given location
  app.get('/api/skips', async (req, res) => {
    try {
      // This would normally fetch data from a database based on user's location
      // For this example, we'll return the sample data as seen in the API response
      const skips = [
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
      
      res.json(skips);
    } catch (error) {
      console.error("Error fetching skips data:", error);
      res.status(500).json({ message: "Failed to fetch skips data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
