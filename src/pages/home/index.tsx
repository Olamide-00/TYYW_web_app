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
  const [expandedReasons, setExpandedReasons] = useState({});
  const [showKisses, setShowKisses] = useState(false);
  const [loveMessages, setLoveMessages] = useState([
    {
      id: 1,
      name: "Gabriel",
      message:
        "Our wife, happy birthday, Happy birthday to an amazing person 🎉, may your day be bright as your smile",
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
      name: "Damilola",
      message:
        "Happy birthday to you sister Victorial, you're amazing and nice, God will bless your new age",
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
    if (!container) return;

    // Clear any existing kisses
    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {
      const kiss = document.createElement("div");
      kiss.textContent = "💋";
      kiss.style.position = "fixed";
      kiss.style.pointerEvents = "none";
      kiss.style.zIndex = "9999";
      kiss.style.left = `${Math.random() * 100}vw`;
      kiss.style.top = "100vh";
      kiss.style.fontSize = `${20 + Math.random() * 30}px`;
      kiss.style.opacity = "0.8";
      kiss.style.animation = `float ${1 + Math.random() * 2}s linear forwards`;

      container.appendChild(kiss);

      // Remove after animation completes
      setTimeout(() => {
        if (kiss.parentNode === container) {
          container.removeChild(kiss);
        }
      }, 3000);
    }
  }, [showKisses]);

  return (
    <div className="text-white space-y-16 md:space-y-24 pb-16">
      {/* Add CSS styles for animations */}
      <style>
        {`
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
        `}
      </style>

      {/* Flying kisses container */}
      <div className="fixed inset-0 pointer-events-none kisses-container z-50" />

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
                  {timeUntil.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-rose-300/70">Hours</div>
              </div>
              <div className="text-3xl text-rose-300">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-300">
                  {timeUntil.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-rose-300/70">Minutes</div>
              </div>
              <div className="text-3xl text-rose-300">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">
                  {timeUntil.seconds.toString().padStart(2, "0")}
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

      {/* Single Photo Display - Simple Version */}
      <section className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Adesewa
            </span>
          </h2>
          <p className="text-rose-200/80 max-w-2xl mx-auto">
            The woman who makes every day brighter 💓
          </p>
        </div>

        {/* Single Photo Display */}
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border-2 border-rose-500/30 bg-gradient-to-br from-rose-500/10 to-pink-500/10">
            {/* Main Photo */}
            <div className="aspect-square flex items-center justify-center p-4">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-rose-500/40 shadow-2xl shadow-rose-500/30 overflow-hidden">
                <img
                  src="/14.jpeg"
                  alt="Beautiful Vickie"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    // Create fallback
                    const fallback = document.createElement("div");
                    fallback.className =
                      "w-full h-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center";
                    fallback.innerHTML = `
                      <div class="text-center">
                        <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                        <p class="text-white text-lg font-semibold">Adesewa 💝</p>
                      </div>
                    `;
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
              </div>
            </div>

            {/* Photo Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-white text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  My Beautiful Queen 👑
                </h3>
                <p className="text-rose-200/90">
                  The woman who stole my heart forever
                </p>
              </div>
            </div>

            {/* Heart Badge */}
            <div className="absolute top-4 right-4 bg-rose-500/90 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Heart className="w-4 h-4" fill="white" />
              <span>Favorite</span>
            </div>
          </div>

          {/* Simple Description */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2">
              <Camera className="w-4 h-4 text-rose-300" />
              <span className="text-rose-300/80 text-sm">
                Always beautiful, always amazing 💖
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Love Notes Section - Messages About Vickie */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <MessageCircleHeart className="w-12 h-12 mx-auto mb-4 text-rose-300" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What People Say About you
            </h2>
            <p className="text-rose-200/80">
              Messages from people who love and admire you
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
    </div>
  );
};

export default Home;
