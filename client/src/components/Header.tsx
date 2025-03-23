import { useState } from "react";
import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="https://wewantwaste.co.uk/wp-content/uploads/2024/02/logo.png" 
                alt="We Want Waste Logo" 
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-neutral-600 hover:text-primary-800 px-3 py-2 text-sm font-medium">Home</a>
            </Link>
            <Link href="/services">
              <a className="text-neutral-600 hover:text-primary-800 px-3 py-2 text-sm font-medium">Services</a>
            </Link>
            <Link href="/about">
              <a className="text-neutral-600 hover:text-primary-800 px-3 py-2 text-sm font-medium">About Us</a>
            </Link>
            <Link href="/contact">
              <a className="text-neutral-600 hover:text-primary-800 px-3 py-2 text-sm font-medium">Contact</a>
            </Link>
          </nav>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button 
                  type="button" 
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                >
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <a className="text-neutral-800 hover:text-primary-800 py-2 text-lg font-medium">Home</a>
                  </Link>
                  <Link href="/services" onClick={() => setIsOpen(false)}>
                    <a className="text-neutral-800 hover:text-primary-800 py-2 text-lg font-medium">Services</a>
                  </Link>
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    <a className="text-neutral-800 hover:text-primary-800 py-2 text-lg font-medium">About Us</a>
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <a className="text-neutral-800 hover:text-primary-800 py-2 text-lg font-medium">Contact</a>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
