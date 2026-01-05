import { useState, useEffect } from "react";
import {
  Heart,
  Camera,
  Sparkles,
  MessageCircleHeart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Home = () => {
  const [timeUntil, setTimeUntil] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedReasons, setExpandedReasons] = useState({});
  const [showKisses, setShowKisses] = useState(false);
  const [loveMessages, setLoveMessages] = useState([
    {
      id: 1,
      name: "Your Best Friend",
      message:
        "Vickie, you light up every room you walk into! Happy birthday to the most amazing friend! 🎉",
      time: "2 hours ago",
      emoji: "💖",
    },
    {
      id: 2,
      message:
        "To the woman with the most beautiful soul! May your birthday be as special as you are! ✨",
      time: "4 hours ago",
      emoji: "🌟",
    },
    {
      id: 3,
      name: "Family",
      message:
        "Our dearest Victoria, you make us so proud every single day. Wishing you endless joy! 🎂",
      time: "6 hours ago",
      emoji: "👨‍👩‍👧",
    },
    {
      id: 4,
      name: "From Me",
      message:
        "My beautiful Vickie, you are the best thing that ever happened to me. Happy birthday my love! 💝",
      time: "Just now",
      emoji: "💘",
    },
  ]);

  // Countdown timer
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeUntil({ hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-sliding carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6); // 6 slides total
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const reasonsWhy = [
    {
      id: 1,
      title: "Your Beautiful Smile",
      fullText:
        "The way your smile lights up the entire room and makes my heart skip a beat every single time I see it. It's the first thing I think about when I wake up and the last thing I imagine before I sleep.",
    },
    {
      id: 2,
      title: "Your Kind Heart",
      fullText:
        "Your incredible kindness that touches everyone around you. You have this amazing ability to make people feel seen, heard, and loved without even trying.",
    },
    {
      id: 3,
      title: "Your Strength",
      fullText:
        "The way you handle challenges with grace and strength inspires me every single day. You're the strongest person I know, and I admire you more than words can express.",
    },
    {
      id: 4,
      title: "Your Intelligence",
      fullText:
        "How smart and witty you are in conversations. You always have something insightful to say, and I love learning from you and growing together.",
    },
    {
      id: 5,
      title: "Your Laughter",
      fullText:
        "The sound of your laughter is my favorite melody in the world. It's contagious, beautiful, and makes everything better instantly.",
    },
    {
      id: 6,
      title: "Your Passion",
      fullText:
        "The way you pursue your dreams with such determination and passion. Watching you chase what you love motivates me to be better every day.",
    },
    {
      id: 7,
      title: "Your Understanding",
      fullText:
        "How well you understand me, sometimes even better than I understand myself. You know exactly what I need, even when I don't say it.",
    },
    {
      id: 8,
      title: "Your Compassion",
      fullText:
        "The depth of your compassion for others. You care so deeply about making the world a better place, and that's one of the most beautiful things about you.",
    },
  ];

  const toggleReason = (id) => {
    setExpandedReasons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSendKisses = () => {
    setShowKisses(true);
    setTimeout(() => {
      setShowKisses(false);
    }, 3000);
  };

  // Generate flying kisses
  useEffect(() => {
    if (!showKisses) return;

    const container = document.querySelector(".kisses-container");
    for (let i = 0; i < 30; i++) {
      const kiss = document.createElement("div");
      kiss.innerHTML = "💋";
      kiss.className = "flying-kiss";
      kiss.style.left = `${Math.random() * 100}vw`;
      kiss.style.animationDuration = `${1 + Math.random() * 2}s`;
      kiss.style.fontSize = `${20 + Math.random() * 30}px`;
      kiss.style.opacity = "0.8";
      container.appendChild(kiss);

      setTimeout(() => {
        kiss.remove();
      }, 3000);
    }
  }, [showKisses]);

  return (
    <div className="text-white space-y-16 md:space-y-24 pb-16">
      {/* Flying kisses container */}
      <div className="fixed inset-0 pointer-events-none kisses-container z-50"></div>

      {/* Hero Section - Birthday Celebration */}
      <section className="text-center px-4 pt-4">
        {/* Birthday Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/30 to-pink-500/30 text-rose-300 px-4 py-2 rounded-full text-sm font-semibold border border-rose-500/50 mb-6 animate-pulse">
          <span>🎂 VICKIE'S BIRTHDAY CELEBRATION 🎂</span>
        </div>

        {/* Main Birthday Heading */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            HAPPY BIRTHDAY
          </span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 block">
            AFOLABI <span className="text-rose-300">VICTORIA</span>
          </span>
        </h1>

        {/* Pet Name */}
        <div className="inline-block bg-rose-500/20 border border-rose-500/40 px-6 py-2 rounded-full mb-6">
          <p className="text-lg md:text-2xl font-semibold text-rose-200">
            To My Dearest <span className="text-pink-300">VICKIE</span> 💝
          </p>
        </div>

        {/* Birthday Countdown */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-rose-200">
              🎉 Celebration Countdown
            </h3>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">
                  {timeUntil.hours}
                </div>
                <div className="text-xs text-rose-300/70">Hours</div>
              </div>
              <div className="text-3xl text-rose-300">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-300">
                  {timeUntil.minutes}
                </div>
                <div className="text-xs text-rose-300/70">Minutes</div>
              </div>
              <div className="text-3xl text-rose-300">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">
                  {timeUntil.seconds}
                </div>
                <div className="text-xs text-rose-300/70">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center items-center mb-8">
          <button
            onClick={handleSendKisses}
            className="w-full sm:w-auto bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 text-lg border-2 border-rose-500/50 shadow-xl inline-flex items-center justify-center gap-3 max-w-md"
          >
            <span>💋</span>
            <span>Send Birthday Kisses</span>
          </button>
        </div>
      </section>

      {/* Photo Gallery Section with Carousel */}
      <section className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Beautiful Memories of Vickie
            </span>
          </h2>
          <p className="text-rose-200/80 max-w-2xl mx-auto">
            A collection of beautiful moments featuring my amazing Vickie 💓
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Carousel */}
          <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl border-2 border-rose-500/30">
            {/* Slides */}
            <div className="relative w-full h-full">
              {/* Slide 1 - Main Photo */}
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 rounded-full border-4 border-rose-500/40 shadow-2xl shadow-rose-500/30 overflow-hidden">
                      <img
                        src="./9.png"
                        alt="Beautiful Vickie"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      My Beautiful Queen 👑
                    </h3>
                    <p className="text-rose-200/80">
                      The woman who stole my heart forever
                    </p>
                  </div>
                </div>
              </div>

              {/* Other Slides */}
              {[1, 2, 3, 4, 5].map((slideIndex) => (
                <div
                  key={slideIndex}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === slideIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl md:text-8xl mb-4">
                        {slideIndex === 1
                          ? "💕"
                          : slideIndex === 2
                          ? "🌟"
                          : slideIndex === 3
                          ? "🎈"
                          : slideIndex === 4
                          ? "🎂"
                          : "✨"}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {slideIndex === 1
                          ? "Beautiful Smile"
                          : slideIndex === 2
                          ? "Shining Bright"
                          : slideIndex === 3
                          ? "Birthday Joy"
                          : slideIndex === 4
                          ? "Celebration Time"
                          : "Special Moment"}
                      </h3>
                      <p className="text-rose-200/80">
                        {slideIndex === 1
                          ? "That smile that lights up my world"
                          : slideIndex === 2
                          ? "Always glowing with happiness"
                          : slideIndex === 3
                          ? "Celebrating your special day"
                          : slideIndex === 4
                          ? "Making wonderful memories"
                          : "Every moment with you is precious"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-rose-400 w-8"
                      : "bg-rose-200/50 hover:bg-rose-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + 6) % 6)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % 6)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Next slide"
            >
              →
            </button>
          </div>

          {/* Thumbnail Previews */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentSlide === index
                    ? "border-rose-400 scale-105"
                    : "border-rose-500/20 hover:border-rose-300"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-500/10 to-pink-500/10">
                  {index === 0 ? (
                    <img
                      src="./9.png"
                      alt="Vickie"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-2xl">
                      {index === 1
                        ? "💕"
                        : index === 2
                        ? "🌟"
                        : index === 3
                        ? "🎈"
                        : index === 4
                        ? "🎂"
                        : "✨"}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Love Notes Section - Messages About Vickie */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <MessageCircleHeart className="w-12 h-12 mx-auto mb-4 text-rose-300" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What People Say About Vickie
            </h2>
            <p className="text-rose-200/80">
              Beautiful messages from people who love and admire you
            </p>
          </div>

          {/* Love Messages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {loveMessages.map((msg) => (
              <div
                key={msg.id}
                className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-5 hover:border-rose-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">{msg.emoji}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white">
                        {msg.name || "Anonymous Admirer"}
                      </h3>
                      <span className="text-xs text-rose-300/70">
                        {msg.time}
                      </span>
                    </div>
                    <p className="text-rose-100 mt-2 italic">"{msg.message}"</p>
                  </div>
                </div>

                {/* Comment/Like Actions */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-rose-500/10">
                  <div className="flex space-x-3">
                    <button className="flex items-center gap-1 text-xs text-rose-300 hover:text-rose-200">
                      <Heart className="w-3 h-3" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center gap-1 text-xs text-rose-300 hover:text-rose-200">
                      <MessageCircleHeart className="w-3 h-3" />
                      <span>Reply</span>
                    </button>
                  </div>
                  <button className="text-xs text-rose-300 hover:text-rose-200">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Comment Section */}
          <div className="bg-black/30 border border-rose-500/30 rounded-xl p-5">
            <h3 className="font-bold text-white mb-3">
              Add Your Birthday Message for Vickie
            </h3>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Your name (optional)"
                className="flex-1 px-4 py-2 bg-black/40 border border-rose-500/30 rounded-lg text-white placeholder-rose-300/50"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all">
                Post Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Why I Love You - Accordion */}
      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Heart
              className="w-12 h-12 mx-auto mb-4 text-rose-300"
              fill="currentColor"
            />
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Why I Love You
              </span>
            </h2>
            <p className="text-rose-200/80">
              Click on each reason to read more
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {reasonsWhy.map((reason) => (
              <div
                key={reason.id}
                className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleReason(reason.id)}
                  className="w-full px-5 py-4 flex items-center justify-between hover:bg-rose-500/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {reason.id}
                      </span>
                    </div>
                    <span className="font-semibold text-white text-left">
                      {reason.title}
                    </span>
                  </div>
                  {expandedReasons[reason.id] ? (
                    <ChevronUp className="w-5 h-5 text-rose-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-rose-300" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedReasons[reason.id] && (
                  <div className="px-5 pb-4 pt-2 border-t border-rose-500/10 animate-fadeIn">
                    <p className="text-rose-100 leading-relaxed">
                      {reason.fullText}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Birthday Button */}
      <section className="text-center px-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => {
              alert(
                "🎉 Happy Birthday Vickie! 🎂\nYou are the most amazing person I know!\nWishing you endless love and happiness! 💖"
              );
              handleSendKisses();
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 text-lg border-2 border-rose-500/50 shadow-xl inline-flex items-center justify-center gap-3 overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <Sparkles className="w-5 h-5" />
            <span>✨ Check This Out ✨</span>
            <Sparkles className="w-5 h-5" />
          </button>

          <p className="text-rose-300/70 text-sm mt-4">
            Click for a special birthday surprise! 🎁
          </p>
        </div>
      </section>

      {/* CSS for flying kisses */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .flying-kiss {
          position: fixed;
          pointer-events: none;
          animation: float linear forwards;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
};

export default Home;
