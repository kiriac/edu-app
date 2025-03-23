import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

export default function ProgressTracker() {
  const steps = [
    { id: 1, name: 'Address', status: 'complete' },
    { id: 2, name: 'Service', status: 'complete' },
    { id: 3, name: 'Skip Selection', status: 'current' },
    { id: 4, name: 'Schedule', status: 'upcoming' },
    { id: 5, name: 'Payment', status: 'upcoming' }
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="hidden sm:flex items-center">
              {steps.map((step, stepIdx) => (
                <div key={step.id} className="flex items-center">
                  {step.status === 'complete' ? (
                    <div className="rounded-full h-8 w-8 flex items-center justify-center bg-primary text-white">
                      <Check className="h-4 w-4" />
                    </div>
                  ) : (
                    <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
                      step.status === 'current' 
                        ? 'bg-primary/10 text-primary border-2 border-primary' 
                        : 'bg-gray-100 text-gray-500 border border-gray-200'
                    }`}>
                      {step.id}
                    </div>
                  )}
                  
                  <div className={`ml-2 text-sm font-medium ${
                    step.status === 'upcoming' 
                      ? 'text-gray-500' 
                      : step.status === 'current'
                        ? 'text-primary'
                        : 'text-gray-900'
                  }`}>
                    {step.name}
                  </div>
                  
                  {stepIdx < steps.length - 1 && (
                    <div className="relative">
                      <div className="h-0.5 w-12 mx-3 bg-gray-200"></div>
                      {(step.status === 'complete' && steps[stepIdx + 1].status !== 'upcoming') && (
                        <div className="h-0.5 w-12 mx-3 bg-primary absolute top-0"></div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="sm:hidden flex items-center bg-primary/10 px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium text-primary">Step 3 of 5: Skip Selection</span>
            </div>
            
            <Link href="#">
              <span className="text-gray-700 hover:text-primary transition-colors duration-200 text-sm font-medium flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1.5" />
                Back
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
