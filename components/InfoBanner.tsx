"use client";

import { HelpCircle, ArrowRight } from "lucide-react";

// These UI components need to be moved to the components/ui folder later
import { Card, CardContent } from "../client/src/components/ui/card"; 
import { Button } from "../client/src/components/ui/button";

export default function InfoBanner() {
  return (
    <Card className="mb-8 overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 border-none shadow-sm">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5">
          <div className="flex items-start mb-4 sm:mb-0">
            <div className="rounded-full bg-primary/20 p-2 mr-4">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900 mb-1">Not sure which skip is right for you?</h3>
              <p className="text-sm text-gray-600">
                Our guide will help you determine the perfect skip size for your garden waste.
              </p>
            </div>
          </div>
          <Button variant="outline" className="group" size="sm">
            <span>Skip Size Guide</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}