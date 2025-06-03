import { useState, useEffect } from "react";
import { Button } from "@workspace/ui/components/button";
import { Menu, X } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import HamMenu from "@/assets/icons/Menu";

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
        scrolled ? "backdrop-blur-md" : "bg-black",
        isMenuOpen ? "bg-black" : "backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between lg:pl-[156px]">
          {/* Logo */}
          <a href="#">
            <div className="flex items-center gap-2">
              <img src="logo.svg" alt="Logo" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden font-medium text-lg lg:flex items-center gap-6 h-12 pl-9 pr-9 rounded-[25px] bg-[#0F0F0F]">
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
            className="cursor-pointer text-lg hidden h-12 lg:flex bg-gradient-to-r from-[#62B904] to-[#EDFE8C] text-black hover:bg-[color:var(--darkergreen)] transition-colors rounded-full mr-[156px] font-medium"
          >
            Contact Us{" "}
            <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
              <img src="Component1.svg" alt="component" />
            </div>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer lg:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <HamMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden h-screen fixed inset-0 top-[64px] bg-black">
          <nav className="flex flex-col p-6 space-y-6 font-medium">
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
              className="cursor-pointer text-lg bg-[color:var(--greenyellow)] text-black hover:bg-[color:var(--darkergreen)] w-full md:w-[50%]"
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
