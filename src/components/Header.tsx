import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location]);

  // Handler for Contact button
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Wait for navigation
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { label: 'Contact', onClick: handleContactClick },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 flex-1 justify-center">
            {navItems.map((item) =>
              item.onClick ? (
                <motion.button
                  key={item.label}
                  onClick={item.onClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-base font-medium bg-transparent border-none outline-none cursor-pointer"
                  style={{ background: 'none' }}
                >
                  {item.label}
                </motion.button>
              ) : (
                <motion.div key={item.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* Mobile Menu Button - Centered */}
          <div className="md:hidden flex flex-1 justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-dark rounded-lg p-4"
          >
            {navItems.map((item) =>
              item.onClick ? (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="block py-3 text-gray-400 hover:text-white transition-colors duration-200 text-center text-lg w-full bg-transparent border-none outline-none cursor-pointer"
                  style={{ background: 'none' }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block py-3 text-gray-400 hover:text-white transition-colors duration-200 text-center text-lg"
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;