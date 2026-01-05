import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  Gift,
  Cake,
  Sparkles,
  Music,
  Camera,
  CalendarHeart,
  MessageCircleHeart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const romanticLinks = [
    { name: "Our Love Story", href: "/love-story", icon: Heart },
    { name: "Special Moments", href: "/moments", icon: Camera },
    { name: "Future Dreams", href: "/dreams", icon: Star },
    { name: "Love Letters", href: "/letters", icon: MessageCircleHeart },
  ];

  const birthdayFeatures = [
    { name: "Birthday Wishes", href: "/wishes", icon: Sparkles },
    { name: "Gift Gallery", href: "/gifts", icon: Gift },
    { name: "Celebration Plan", href: "/celebration", icon: Cake },
    { name: "Romantic Playlist", href: "/playlist", icon: Music },
  ];

  // Romantic Social Icons
  const RomanticIcon = ({ children, href, label }) => (
    <a
      href={href}
      className="w-10 h-10 flex items-center justify-center bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 rounded-full text-rose-300 hover:text-rose-200 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-rose-500/30"
      aria-label={label}
    >
      {children}
    </a>
  );

  return (
    <footer className="relative bg-gradient-to-t from-black via-purple-950/80 to-pink-950/90 backdrop-blur-lg border-t border-rose-500/30">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 w-6 h-6 bg-rose-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/4 right-20 w-8 h-8 bg-pink-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Birthday Message Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  For My Vickie 💝
                </span>
                <p className="text-sm text-rose-300/80 mt-1">
                  Afolabi Victoria
                </p>
              </div>
            </div>
            <p className="text-rose-100/90 mb-6 max-w-md text-sm leading-relaxed italic">
              "To the woman who makes every day feel like a celebration. May
              this birthday be the beginning of a year filled with love,
              laughter, and dreams coming true. You are my forever love."
            </p>

            {/* Love Count */}
            <div className="mb-6 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
              <p className="text-rose-200 text-sm">
                <span className="font-bold text-rose-300">∞ Days in Love</span>
                <br />
                <span className="text-xs text-rose-300/70">
                  And counting...
                </span>
              </p>
            </div>

            {/* Romantic Social Links */}
            <div className="flex space-x-3">
              <RomanticIcon href="#" label="Send Love">
                <Heart className="w-5 h-5" fill="currentColor" />
              </RomanticIcon>

              <RomanticIcon href="#" label="Birthday Wishes">
                <Sparkles className="w-5 h-5" />
              </RomanticIcon>

              <RomanticIcon href="#" label="Love Notes">
                <MessageCircleHeart className="w-5 h-5" />
              </RomanticIcon>

              <RomanticIcon href="#" label="Memories">
                <Camera className="w-5 h-5" />
              </RomanticIcon>
            </div>
          </div>

          {/* Our Romance Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Heart
                className="w-5 h-5 mr-2 text-rose-400"
                fill="currentColor"
              />
              Our Romance
            </h3>
            <ul className="space-y-3">
              {romanticLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-rose-100/80 hover:text-rose-300 transition-all duration-300 flex items-center group text-sm hover:translate-x-1"
                  >
                    <link.icon className="w-4 h-4 mr-3 text-rose-400/70 group-hover:text-rose-300 transition-colors" />
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Special Date */}
            <div className="mt-6 p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
              <div className="flex items-center">
                <CalendarHeart className="w-4 h-4 mr-2 text-rose-400" />
                <span className="text-xs text-rose-200">
                  Next Special Date:{" "}
                  <span className="font-bold">December 25th</span>
                </span>
              </div>
            </div>
          </div>

          {/* Birthday Celebration */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cake className="w-5 h-5 mr-2 text-pink-400" />
              Birthday Celebration
            </h3>
            <ul className="space-y-3">
              {birthdayFeatures.map((feature) => (
                <li key={feature.name}>
                  <Link
                    to={feature.href}
                    className="text-rose-100/80 hover:text-pink-300 transition-all duration-300 flex items-center group text-sm hover:translate-x-1"
                  >
                    <feature.icon className="w-4 h-4 mr-3 text-pink-400/70 group-hover:text-pink-300 transition-colors" />
                    <span className="relative">
                      {feature.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Birthday Countdown */}
            <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl">
              <h4 className="text-sm font-bold text-white mb-2">
                🎂 Birthday Timer
              </h4>
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-300">24</div>
                  <div className="text-xs text-pink-200/70">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-rose-300">00</div>
                  <div className="text-xs text-rose-200/70">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-300">00</div>
                  <div className="text-xs text-purple-200/70">Seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Love Notes Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <MessageCircleHeart className="w-5 h-5 mr-2 text-purple-400" />
              Love Notes
            </h3>
            <p className="text-rose-100/80 mb-4 text-sm leading-relaxed italic">
              "My dearest Vickie, you are the melody in my heart, the sunshine
              in my days, and the love of my life. Happy Birthday, my forever
              love."
            </p>

            {/* Write a Love Note */}
            <div className="space-y-3">
              <textarea
                placeholder="Write a love note for Vickie..."
                className="w-full px-3 py-2 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-rose-300/50 focus:outline-none focus:border-rose-500 transition-colors duration-300 text-sm resize-none"
                rows="3"
              />
              <button className="w-full px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-lg hover:from-rose-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-300 border border-rose-500/30 flex items-center justify-center space-x-2 text-sm shadow-lg shadow-rose-500/20">
                <Heart className="w-4 h-4" fill="currentColor" />
                <span>Send Love Note 💌</span>
              </button>
            </div>

            {/* Secret Message */}
            <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <p className="text-xs text-purple-200 text-center">
                💖 Secret Message:{" "}
                <span className="font-bold">You complete me</span>
              </p>
            </div>
          </div>
        </div>

        {/* Birthday Surprise Banner */}
        <div className="mt-8 p-6 bg-gradient-to-r from-rose-500/15 via-pink-500/15 to-purple-500/15 border border-rose-500/30 rounded-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-white mb-1">
                <span className="text-rose-300">
                  🎁 Birthday Surprise Ready!
                </span>
              </h4>
              <p className="text-rose-200/80 text-sm">
                Your special gift is waiting to be revealed at midnight! ✨
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-full hover:from-rose-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 border border-rose-500/30 shadow-lg shadow-rose-500/30 flex items-center">
                <Gift className="w-4 h-4 mr-2" />
                Reveal Gift
              </button>
              <button className="px-4 py-2 bg-transparent border border-purple-500/50 text-purple-300 font-semibold rounded-full hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Make a Wish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Romantic */}
      <div className="border-t border-rose-500/20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="text-rose-200/70 text-xs text-center md:text-left">
              © {currentYear} Made with ❤️ for Afolabi Victoria - My Forever
              Love
            </div>
            <div className="flex space-x-4 text-xs">
              <Link
                to="/our-promise"
                className="text-rose-200/60 hover:text-rose-300 transition-colors duration-300 hover:scale-105"
              >
                Our Promise
              </Link>
              <Link
                to="/future-together"
                className="text-rose-200/60 hover:text-pink-300 transition-colors duration-300 hover:scale-105"
              >
                Future Together
              </Link>
              <Link
                to="/eternal-love"
                className="text-rose-200/60 hover:text-purple-300 transition-colors duration-300 hover:scale-105"
              >
                Eternal Love
              </Link>
            </div>
          </div>

          {/* Romantic Quote */}
          <div className="text-center mt-3">
            <p className="text-xs text-rose-300/50 italic">
              "In your smile, I see something more beautiful than the stars." -
              For my Vickie
            </p>
          </div>
        </div>
      </div>

      {/* Floating Heart Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => alert("I love you to the moon and back, Vickie! 💖")}
          className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 group animate-pulse"
          aria-label="Send Love to Vickie"
        >
          <Heart className="w-6 h-6 text-white" fill="currentColor" />
          <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full px-2 py-1 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            Love!
          </span>
        </button>
      </div>

      {/* Floating Kiss Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() =>
            alert("💋 *Virtual birthday kiss for my beautiful Vickie!*")
          }
          className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-pink-500/30"
          aria-label="Send a Kiss"
        >
          <span className="text-xl">💋</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
