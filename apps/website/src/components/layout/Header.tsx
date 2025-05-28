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
    const contactSection = document.getElementById("footer");
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
          <a href="#">
            <div className="flex items-center gap-2">
              <img src="logo.svg" alt="Logo" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 h-12 pl-9 pr-9 rounded-[25px] bg-[#0F0F0F]">
            <a
              href="#services"
              className="text-sm hover:text-[color:var(--green)] transition-colors"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-sm hover:text-[color:var(--green)] transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm hover:text-[color:var(--green)] transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-sm hover:text-[color:var(--green)] transition-colors"
            >
              Testimonials
            </a>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            className="hidden h-12 lg:flex bg-gradient-to-r from-[#62B904] to-[#EDFE8C] text-black hover:bg-[color:var(--darkergreen)] transition-colors rounded-full"
          >
            Contact Us{" "}
            <div className="bg-black rounded-full p-2 ml-3">
              <img src="Component1.svg" alt="component" />
            </div>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
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
        <div className="lg:hidden h-screen fixed inset-0 top-[64px] bg-black">
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
              className="bg-[color:var(--greenyellow)] text-black hover:bg-[color:var(--darkergreen)] w-full md:w-[50%]"
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
