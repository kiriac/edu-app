import { useState } from "react";
import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
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
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/">
              <span className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/5">Home</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/5">Services</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/5">About Us</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/5">Contact</span>
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center">
            <a href="tel:0800-123-4567" className="flex items-center text-primary font-medium">
              <Phone className="h-4 w-4 mr-2" />
              <span>0800 123 4567</span>
            </a>
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col space-y-5 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <span className="text-gray-800 hover:text-primary transition-colors duration-200 py-2 text-lg font-medium">Home</span>
                  </Link>
                  <Link href="/services" onClick={() => setIsOpen(false)}>
                    <span className="text-gray-800 hover:text-primary transition-colors duration-200 py-2 text-lg font-medium">Services</span>
                  </Link>
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    <span className="text-gray-800 hover:text-primary transition-colors duration-200 py-2 text-lg font-medium">About Us</span>
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <span className="text-gray-800 hover:text-primary transition-colors duration-200 py-2 text-lg font-medium">Contact</span>
                  </Link>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <a href="tel:0800-123-4567" className="flex items-center text-primary font-medium">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>0800 123 4567</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
