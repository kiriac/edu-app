import { Info } from "lucide-react";

export default function InfoBanner() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-primary-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-primary-800">Need help choosing?</h3>
          <div className="mt-2 text-sm text-primary-700">
            <p>
              Not sure which skip size to choose? Our guide can help you determine the right size for your needs.
              <a href="#" className="font-medium text-primary-800 hover:text-primary-700 underline ml-1">
                View skip size guide
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
