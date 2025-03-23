import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://wewantwaste.co.uk/wp-content/uploads/2024/02/logo-white.png" 
              alt="We Want Waste Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-neutral-400 text-sm">
              We Want Waste provides efficient waste management solutions tailored to your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-400 hover:text-white">Skip Hire</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">Garden Waste Removal</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">Commercial Waste</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">Recycling Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-neutral-400" />
                <span className="text-neutral-400">0800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-neutral-400" />
                <span className="text-neutral-400">info@wewantwaste.co.uk</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-neutral-400" />
                <span className="text-neutral-400">123 Waste Street, London, UK</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">© 2024 We Want Waste. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
