const Home = () => {
  return (
    <div className="text-white space-y-16 md:space-y-24 pb-16">
      {/* Hero Section - Mobile Optimized */}
      <section className="text-center px-4">
        <div className="inline-block bg-pink-500/30 text-pink-300 px-4 py-2 rounded-full text-xs font-semibold border border-pink-500/50 mb-6">
          🎯 Launching December 13th
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          THE YEAR<br className="hidden md:block" />  YOU WIN
        </h1>
        
        <p className="text-lg md:text-3xl lg:text-4xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
          Stop dreaming. Start achieving. Your breakthrough year starts now.
        </p>

        {/* Book Cover Image for Mobile */}
        <div className="mb-8 md:hidden flex justify-center">
          <div className="w-48 h-60 bg-gradient-to-br from-pink-600/40 to-purple-700/40 border-2 border-pink-500/60 rounded-xl shadow-2xl flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-sm font-bold text-white">TYYW</h3>
              <p className="text-pink-300 text-xs mt-1">E-Book Available</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="#" 
            className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 text-lg border-2 border-pink-500/50 shadow-xl inline-flex items-center justify-center gap-3"
          >
            <span>🚀</span>
            Get Instant Access
          </a>
          <button className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 text-lg inline-flex items-center justify-center gap-3">
            <span>👥</span>
            Join Community
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <span>📱 Read Anywhere</span>
          <span>🔄 Lifetime Updates</span>
          <span>💰 30-Day Guarantee</span>
        </div>
      </section>

      {/* Book & Benefits Section */}
      <section className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center px-4">
        <div className="hidden md:flex justify-center">
          <div className="relative group">
            {/* Main Book */}
            <div className="w-64 h-80 bg-gradient-to-br from-pink-600/40 to-purple-700/40 border-2 border-pink-500/60 rounded-xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-500 flex flex-col items-center justify-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white text-center mb-2">THE YEAR YOU WIN</h3>
              <p className="text-pink-300 text-sm text-center">Your Guide to Actual Achievement</p>
              <div className="mt-4 flex gap-1">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Why This Works When Others Fail
          </h2>
          
          <div className="space-y-4 mb-6">
            {[
              "7-Step system proven with 10,000+ people",
              "No fluff - just actionable strategies",
              "Works for any goal in any area of life",
              "Instant digital access + community",
              "Lifetime updates included"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 mb-6">
            <p className="text-pink-300 text-sm text-center">
              ⚡ <strong>Instant Access:</strong> Read on any device immediately after purchase
            </p>
          </div>
        </div>
      </section>

      {/* Author Section with Image Placeholder */}
      <section className="bg-black/30 backdrop-blur-sm border border-pink-500/20 rounded-2xl md:rounded-3xl p-6 md:p-8 mx-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-2xl border-2 border-pink-500/40 flex items-center justify-center">
                <div className="text-4xl md:text-5xl">👨‍💼</div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Author
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ibitiyo Priscilla
            </h2>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">Certified Writter</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
              After transforming her own life from chronic procrastinator to consistent achiever, 
              Priscilla has spent 2 years helping hundreds break through their goal-setting barriers.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-pink-400">5+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-purple-400">100+</div>
                <div className="text-xs text-gray-400">Lives Changed</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-pink-400">95%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-purple-400">#1</div>
                <div className="text-xs text-gray-400">Bestseller</div>
              </div>
            </div>
            <p className="text-gray-400 italic text-sm border-l-4 border-pink-500 pl-4">
              "I've seen what works and what doesn't. This book contains the exact system that 
              transformed my most successful clients from dreamers into achievers."
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section - Mobile Optimized */}
      <section className="px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Real People, Real Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {[
            {
              name: "Sarah M.",
              role: "Entrepreneur",
              comment: "Accomplished more in 3 months than previous 3 years! The system actually works.",
              avatar: "👩‍💼"
            },
            {
              name: "Mike R.",
              role: "Engineer",
              comment: "No fluff, just actionable steps. Finally a book that delivers what it promises.",
              avatar: "👨‍💻"
            },
            {
              name: "Dr. Lisa T.",
              role: "Physician",
              comment: "The community support makes all the difference. Life-changing approach!",
              avatar: "👩‍⚕️"
            }
          ].map((review, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4 hover:border-pink-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{review.avatar}</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3 text-yellow-400">
                {"⭐".repeat(5)}
              </div>
              <p className="text-gray-300 italic text-sm">"{review.comment}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-black/40 rounded-2xl px-6 py-3 border border-pink-500/20">
            <div className="flex gap-1 text-yellow-400">
              {"⭐".repeat(5)}
            </div>
            <span className="text-white font-semibold text-sm">4.9/5 from 2,347+ readers</span>
          </div>
        </div>
      </section>

      {/* Features Grid - Mobile Friendly */}
      <section className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-2xl md:rounded-3xl p-6 md:p-8 mx-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          What You Get
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            { icon: "📖", title: "300+ Page E-book", desc: "Complete system with exercises" },
            { icon: "🎧", title: "Audiobook Version", desc: "Listen on the go" },
            { icon: "📊", title: "Worksheets", desc: "Printable progress trackers" },
            { icon: "👥", title: "Community Access", desc: "Private WhatsApp group" },
            { icon: "🔄", title: "Lifetime Updates", desc: "Future editions included" },
            { icon: "🎯", title: "Bonus Content", desc: "Extra strategies & templates" }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2 text-sm md:text-base">{item.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section className="text-center px-4">
        <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border-2 border-pink-500/30 rounded-2xl p-6 md:p-8 mb-6">
          <div className="text-sm text-pink-400 mb-3">🚀 LIMITED TIME LAUNCH OFFER</div>
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-white">
            Start Your Winning Year Today
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Join hundreds who have transformed their goal-setting journey. Get instant digital access + bonuses.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-pink-400">✓</span> Instant E-book Delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-400">✓</span> Audiobook Included
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-400">✓</span> Community Access
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-400">✓</span> 30-Day Money Back
            </div>
          </div>

          <a 
            href="#" 
            className="block w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 text-lg border-2 border-pink-500/50 shadow-xl"
          >
            🎁 Get Instant Access + Bonuses
          </a>
        </div>
        
        <div className="text-xs text-gray-400">
          ⚡ Instant Digital Delivery • 📱 Read on Any Device • 🔄 Lifetime Updates
        </div>
      </section>
    </div>
  )
}

export default Home