import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Heart,
  GalleryVerticalEnd,
  Camera,
  Home,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplified navigation - removed Birthday and Messages
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Gallery", href: "/gallery", icon: GalleryVerticalEnd },
    { name: "Epistle", href: "/epistle", icon: Mail },
  ];

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleNavigate = (href) => {
    navigate(href);
    setIsOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.querySelector(".mobile-menu");
      const menuButton = document.querySelector(".menu-button");

      if (
        isOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-b from-black/95 via-rose-950/90 to-pink-950/85 backdrop-blur-xl border-b border-rose-500/30 shadow-2xl shadow-rose-500/10"
            : "bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Brand */}
            <Link
              to="/"
              className="flex items-center space-x-2 group relative"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Heart
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-transparent">
                  My Vickie 💝
                </span>
                <span className="text-xs text-rose-300/70 hidden md:block">
                  Afolabi Victoria
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 shadow-lg shadow-rose-500/20"
                        : "text-rose-200 hover:text-white hover:bg-rose-500/10"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="menu-button p-2 rounded-lg text-rose-200 hover:text-white hover:bg-rose-500/20 transition-all duration-300"
                aria-label="Menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mobile-menu bg-black/95 backdrop-blur-xl rounded-b-2xl border-t border-rose-500/30 shadow-2xl shadow-rose-500/20 overflow-hidden">
              <div className="p-4">
                {/* User Info */}
                <div className="flex items-center space-x-3 p-3 mb-4 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-xl border border-rose-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">For My Vickie 💝</h3>
                    <p className="text-xs text-rose-300/70">Afolabi Victoria</p>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = location.pathname === item.href;

                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavigate(item.href)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-rose-500/20 to-pink-500/20"
                            : "text-rose-200 hover:text-white hover:bg-rose-500/10"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleNavigate("/gallery")}
                    className="flex flex-col items-center justify-center p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl hover:bg-rose-500/20 transition-all duration-300"
                  >
                    <Camera className="w-6 h-6 text-rose-400 mb-2" />
                    <span className="text-xs text-rose-300">Gallery</span>
                  </button>
                  <button
                    onClick={() => handleNavigate("/epistle")}
                    className="flex flex-col items-center justify-center p-4 bg-pink-500/10 border border-pink-500/20 rounded-xl hover:bg-pink-500/20 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6 text-pink-400 mb-2" />
                    <span className="text-xs text-pink-300">Epistle</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add padding for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
