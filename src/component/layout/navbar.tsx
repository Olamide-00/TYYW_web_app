import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Heart,
  GalleryVerticalEnd,
  Camera,
  Home,
  Gift,
  MessageCircleHeart,
  Sparkles,
  Music,
  CalendarDays,
  Star,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Track scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    {
      name: "Gallery",
      href: "#",
      icon: GalleryVerticalEnd,
      submenu: [
        { name: "Love Photos", href: "/gallery/photos", icon: Camera },
        { name: "Memories", href: "/gallery/memories", icon: Star },
        { name: "Future Dreams", href: "/gallery/dreams", icon: Sparkles },
        { name: "Special Moments", href: "/gallery/moments", icon: Heart },
      ],
    },
    { name: "Messages", href: "/messages", icon: MessageCircleHeart },
    { name: "Birthday", href: "/birthday", icon: Gift },
    { name: "Our Story", href: "/story", icon: Heart },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menuName) => {
    if (openDropdown === menuName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menuName);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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
                {/* Pulsing animation */}
                <div className="absolute inset-0 rounded-full bg-rose-500/30 animate-ping opacity-70"></div>
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
                const isActive =
                  location.pathname === item.href ||
                  (item.submenu &&
                    item.submenu.some((sub) => sub.href === location.pathname));

                if (item.submenu) {
                  return (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={`flex items-center space-x-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 shadow-lg shadow-rose-500/20"
                            : "text-rose-200 hover:text-white hover:bg-rose-500/10"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-rose-500/30 rounded-2xl shadow-2xl shadow-rose-500/20 overflow-hidden z-50">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-sm text-rose-100/80 hover:text-white hover:bg-rose-500/10 transition-all duration-300 group"
                            >
                              <subItem.icon className="w-4 h-4 text-rose-400 group-hover:text-rose-300" />
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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

              {/* Special Birthday Button */}
              <Link
                to="/birthday-surprise"
                className="ml-2 px-5 py-3 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-rose-700 hover:via-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 border border-rose-500/30 shadow-lg shadow-rose-500/30 flex items-center space-x-2 group"
              >
                <Sparkles className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
                <span>Birthday Surprise! 🎁</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Love Counter */}
              <div className="hidden sm:flex items-center space-x-1 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full">
                <Heart className="w-3 h-3 text-rose-400" fill="currentColor" />
                <span className="text-xs text-rose-300">∞</span>
              </div>

              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-rose-200 hover:text-white hover:bg-rose-500/20 focus:outline-none transition-all duration-300 border border-rose-500/30"
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
            <div className="md:hidden mobile-menu absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-xl rounded-2xl border border-rose-500/30 shadow-2xl shadow-rose-500/20 overflow-hidden z-50">
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
                <div className="space-y-1">
                  {navigation.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = location.pathname === item.href;

                    if (item.submenu) {
                      return (
                        <div key={item.name} className="mb-2">
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                              isActive || openDropdown === item.name
                                ? "text-white bg-gradient-to-r from-rose-500/20 to-pink-500/20"
                                : "text-rose-200 hover:text-white hover:bg-rose-500/10"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <IconComponent className="w-5 h-5" />
                              <span>{item.name}</span>
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                openDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Mobile Submenu */}
                          {openDropdown === item.name && (
                            <div className="ml-6 mt-1 space-y-1 border-l-2 border-rose-500/30 pl-3">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-rose-100/80 hover:text-white hover:bg-rose-500/10 transition-all duration-300"
                                >
                                  <subItem.icon className="w-4 h-4 text-rose-400" />
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-rose-500/20 to-pink-500/20"
                            : "text-rose-200 hover:text-white hover:bg-rose-500/10"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Birthday Action Buttons */}
                <div className="mt-6 space-y-3">
                  <Link
                    to="/birthday-surprise"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl hover:from-rose-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 border border-rose-500/30 text-center shadow-lg shadow-rose-500/20"
                  >
                    🎂 Open Birthday Gift
                  </Link>

                  <Link
                    to="/send-love"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 border border-purple-500/30 text-center"
                  >
                    💌 Send Love Message
                  </Link>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button className="flex flex-col items-center justify-center p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl hover:bg-rose-500/20 transition-all duration-300">
                    <Music className="w-5 h-5 text-rose-400 mb-1" />
                    <span className="text-xs text-rose-300">Love Songs</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 bg-pink-500/10 border border-pink-500/20 rounded-xl hover:bg-pink-500/20 transition-all duration-300">
                    <CalendarDays className="w-5 h-5 text-pink-400 mb-1" />
                    <span className="text-xs text-pink-300">Special Dates</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl hover:bg-purple-500/20 transition-all duration-300">
                    <Camera className="w-5 h-5 text-purple-400 mb-1" />
                    <span className="text-xs text-purple-300">Take Photo</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl hover:bg-rose-500/20 transition-all duration-300">
                    <Sparkles className="w-5 h-5 text-rose-400 mb-1" />
                    <span className="text-xs text-rose-300">Make Wish</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add padding for fixed navbar */}
      <div className="h-16 md:h-20"></div>

      {/* Floating Love Button for Mobile */}
      <div className="fixed bottom-20 right-4 md:hidden z-40">
        <button
          onClick={() =>
            alert("I love you more than words can say, Vickie! 💖")
          }
          className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 animate-bounce"
          aria-label="Send Love"
        >
          <Heart className="w-6 h-6 text-white" fill="currentColor" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
