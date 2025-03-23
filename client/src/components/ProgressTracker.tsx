import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ProgressTracker() {
  const steps = [
    { id: 1, name: 'Address', status: 'complete' },
    { id: 2, name: 'Service', status: 'complete' },
    { id: 3, name: 'Skip Selection', status: 'current' },
    { id: 4, name: 'Schedule', status: 'upcoming' },
    { id: 5, name: 'Payment', status: 'upcoming' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="hidden sm:flex items-center">
              {steps.map((step, stepIdx) => (
                <div key={step.id} className="flex items-center">
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
                    step.status === 'upcoming' 
                      ? 'bg-gray-200 text-gray-500' 
                      : 'bg-primary-800 text-white'
                  }`}>
                    {step.id}
                  </div>
                  <div className={`ml-2 text-sm font-medium ${
                    step.status === 'upcoming' 
                      ? 'text-gray-500' 
                      : 'text-primary-800'
                  }`}>
                    {step.name}
                  </div>
                  
                  {stepIdx < steps.length - 1 && (
                    <div className={`h-0.5 w-8 mx-4 ${
                      steps[stepIdx + 1].status === 'upcoming' 
                        ? 'bg-gray-300' 
                        : 'bg-primary-800'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="sm:hidden flex items-center text-sm font-medium text-primary-800">
              <span>Step 3 of 5:</span>
              <span className="ml-2">Skip Selection</span>
            </div>
            
            <Link href="#">
              <a className="text-primary-800 hover:text-primary-900 text-sm font-medium flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
