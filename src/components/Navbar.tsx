
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignRight, X, Book, BarChart3, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Dome</span>
              <span className="text-2xl font-bold text-secondary">of</span>
              <span className="text-2xl font-bold text-primary">Money</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-primary font-medium transition-colors">Courses</a>
            <a href="#trading" className="text-gray-700 hover:text-primary font-medium transition-colors">Trading</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</a>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link to="/login">
                  <LogIn className="h-4 w-4" /> Login
                </Link>
              </Button>
              <Button className="cta-button flex items-center gap-2" asChild>
                <Link to="/signup">
                  <UserPlus className="h-4 w-4" /> Sign Up
                </Link>
              </Button>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <AlignRight size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-4 bg-white shadow-lg">
            <a 
              href="#courses" 
              className="block py-2 px-3 rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <Book size={18} className="mr-2" />
                Courses
              </div>
            </a>
            <a 
              href="#trading" 
              className="block py-2 px-3 rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <BarChart3 size={18} className="mr-2" />
                Trading
              </div>
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 px-3 rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-2 px-3 rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Link to="/login" className="block w-full" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-center flex items-center gap-2">
                <LogIn className="h-4 w-4" /> Login
              </Button>
            </Link>
            <Link to="/signup" className="block w-full" onClick={() => setIsOpen(false)}>
              <Button className="w-full cta-button justify-center flex items-center gap-2">
                <UserPlus className="h-4 w-4" /> Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
