import { useState, useEffect } from "react";
import { Button } from "@workspace/ui/components/button";
import { Menu, X } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) {
        toggleMenu();
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-[#C6FF00] rounded-md flex items-center justify-center">
              <span className="font-bold text-black">G</span>
            </div>
            <span className="text-xl font-bold">
              Global<span className="text-[#C6FF00]">Square</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm hover:text-[#C6FF00] transition-colors"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-sm hover:text-[#C6FF00] transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm hover:text-[#C6FF00] transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-sm hover:text-[#C6FF00] transition-colors"
            >
              Testimonials
            </a>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            className="hidden md:flex bg-[#C6FF00] text-black hover:bg-[#a8d900] transition-colors"
          >
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-black z-40">
          <nav className="flex flex-col p-6 space-y-6">
            <a
              href="#services"
              className="text-lg font-medium"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#features"
              className="text-lg font-medium"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#about"
              className="text-lg font-medium"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-lg font-medium"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <Button
              onClick={scrollToContact}
              className="bg-[#C6FF00] text-black hover:bg-[#a8d900] w-full"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
