import { useState } from "react";
import neutrinologo from "/neutrinologo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    "Home",
    "Process",
    "Usecases",
    "Testimonials",
    "About",
    "FAQ",
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xs bg-black/30 border-b border-white/10">
      <div className="w-full max-w-[1140px] px-[10px] mx-auto py-4 relative flex items-center justify-between">
        {/* Logo (Left) */}
        <div className="text-xl font-bold text-white">
          <a href="#" className="w-36 h-4 flex items-center ml-2">
            <img
              src={neutrinologo}
              alt="Neutrino Logo"
              className="w-full h-auto block"
            />
          </a>
        </div>

        {/* Nav Links (Center on Desktop) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg text-gray-100 hover:text-[var(--brand-primary-color)] transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button (Right on Desktop) */}
        <div className="hidden md:block">
          <Button className="primary-btn btn">Get in Touch</Button>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-base hover:text-[var(--brand-primary-color)] transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="primary-btn btn mt-4 w-full">
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
