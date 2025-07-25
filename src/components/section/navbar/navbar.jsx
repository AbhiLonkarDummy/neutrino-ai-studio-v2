import neutrinologo from "/neutrinologo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
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
      <div className="flex justify-center">
        <div className="w-full max-w-[1140px] px-[10px] mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            <a href="#" className="w-36 h-4 flex items-center ml-2">
              <img
                src={neutrinologo}
                alt="Neutrino Logo"
                className="w-full h-auto block"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="flex space-x-6">
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

          {/* CTA Button */}
          <Button className="primary-btn btn">Get in Touch</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
