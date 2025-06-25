import { useState, useEffect } from "react";
import { Button } from "../Button";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import HamMenu from "@/assets/icons/Menu";
import Logo from "@/assets/icons/Logo";
import Component1 from "@/assets/icons/Component1";

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
        "fixed top-0 left-0 w-full max-sm:h-16 h-[90px] z-50 transition-all duration-300 pt-[14px] px-6 md:px-12 lg:px-[156px]",
        scrolled ? "backdrop-blur-md" : "bg-black",
        isMenuOpen ? "bg-black" : "backdrop-blur-md"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <div className="flex items-center gap-2 ">
              <Logo className="w-[90px] h-9 sm:w-[136px] sm:h-[56px]" />
            </div>
          </a>

          <nav className="hidden font-medium text-lg lg:flex items-center gap-6 h-[68px] px-[28px] py-5 rounded-[63px] bg-titlescolor lg:border lg:border-border text-whitetext">
            <a
              href="#services"
              className="text-lg hover:text-green transition-colors"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-lg hover:text-green transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-lg hover:text-green transition-colors"
            >
              FAQ's
            </a>
          </nav>

          <Button
            onClick={scrollToContact}
            className="cursor-pointer border-r-[2px] border-b-[4px] border-greenbackground text-lg hidden h-12 lg:flex bg-yellowgreen hover:bg-darkergreen text-black transition-colors rounded-full font-medium"
            style={{
              animationDelay: "0.3s",
            }}
          >
            Contact Us{" "}
            <div className="ml-3 w-[32px] h-[32px]">
              <Component1 />
            </div>
          </Button>

          <button
            className="cursor-pointer lg:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <HamMenu className="w-9 h-9 sm:w-12 sm:h-12" />
            )}
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
              className="cursor-pointer text-lg bg-yellowgreen border-r-[2px] border-b-[4px] border-greenbackground text-black hover:bg-darkergreen w-full md:w-[50%]"
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
