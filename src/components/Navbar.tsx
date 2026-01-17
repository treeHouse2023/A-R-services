import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/Favicon-tras-gold.png";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<Link
  to="/"
  className="flex items-center gap-3"
>
<img
  src={logo}
  alt="A.R Foods Logo"
  className="w-[85px] h-[85px] object-contain mr-1.5"
 />




  {/* Brand Text */}
  <div className="flex flex-col leading-none text-center">
    <span className="text-2xl font-serif font-bold tracking-tight text-foreground">
      A.R <span className="text-gradient-gold">FOODS</span>
    </span>
    <span className="text-xs md:text-sm font-serif tracking-wide text-foreground/70">
      Culinary Solutions
    </span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative font-medium text-sm tracking-wide transition-colors hover:text-accent ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Get Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="container mx-auto container-padding py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-accent"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-md"
                >
                  Get Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
