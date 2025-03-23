"use client";

import React from "react";
import { Check } from "lucide-react";

export default function ProgressTracker() {
  // In a real app, these would be props or from a context
  const currentStep = 1;
  const steps = [
    { id: 1, name: "Select Skip" },
    { id: 2, name: "Delivery Details" },
    { id: 3, name: "Payment" },
    { id: 4, name: "Confirmation" }
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex justify-between items-center">
          <ol className="hidden md:flex items-center w-full">
            {steps.map((step, stepIdx) => (
              <li key={step.id} className="relative flex-1">
                {step.id < currentStep ? (
                  <div className="group flex items-center">
                    <span className="flex-shrink-0 h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-900">{step.name}</span>
                  </div>
                ) : step.id === currentStep ? (
                  <div className="flex items-center" aria-current="step">
                    <span className="flex-shrink-0 h-9 w-9 rounded-full border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-bold">{step.id}</span>
                    </span>
                    <span className="ml-3 text-sm font-medium text-primary">{step.name}</span>
                  </div>
                ) : (
                  <div className="group flex items-center">
                    <span className="flex-shrink-0 h-9 w-9 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">{step.id}</span>
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-500">{step.name}</span>
                  </div>
                )}
                
                {stepIdx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-0 right-0 h-full w-5">
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </li>
            ))}
          </ol>
          
          {/* Mobile view - simplified */}
          <div className="flex md:hidden items-center w-full justify-between">
            <span className="text-sm font-medium text-primary">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
            </span>
            <div className="bg-gray-100 h-2 flex-1 mx-4 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full" 
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}