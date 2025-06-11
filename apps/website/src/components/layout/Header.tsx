import { useState, useEffect } from "react";
import { Button } from "@workspace/ui/components/Button";
import { X } from "lucide-react";
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
        "fixed top-0 left-0 w-full h-[90px] z-50 transition-all duration-300 pt-[14px]",
        scrolled ? "backdrop-blur-md" : "bg-black",
        isMenuOpen ? "bg-black" : "backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between lg:pl-[156px]">
          <a href="#">
            <div className="flex items-center gap-2">
              <img src="Logo.svg" alt="Logo" />
            </div>
          </a>

          <nav className="hidden font-medium text-lg lg:flex  items-center gap-6 h-[68px] px-[28px] py-5 rounded-[63px] bg-[var(--titlescolor)] lg:border lg:border-[var(--border)] text-[var(--whitetext)]">
            <a
              href="#services"
              className="text-lg hover:text-[color:var(--green)] transition-colors"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-lg hover:text-[color:var(--green)] transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-lg hover:text-[color:var(--green)] transition-colors"
            >
              About
            </a>
          </nav>

          <Button
            onClick={scrollToContact}
            className="cursor-pointer text-lg hidden h-12 lg:flex bg-[color:var(--greenyellow)] hover:bg-[color:var(--darkergreen)] text-black transition-colors rounded-full mr-[156px] font-medium"
            style={{
              animationDelay: "0.3s",
              borderRight:
                "2px solid var(--color-yellow-60, var(--greenbackground))",
              borderBottom:
                "4px solid var(--color-yellow-60, var(--greenbackground))",
            }}
          >
            Contact Us{" "}
            <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
              <img src="Component1.svg" alt="component" />
            </div>
          </Button>

          <button
            className="cursor-pointer lg:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <HamMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden h-screen fixed inset-0 top-[64px] bg-black lg:pl-[156px]">
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
