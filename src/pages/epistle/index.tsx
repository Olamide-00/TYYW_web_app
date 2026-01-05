import { ArrowLeft, Heart, Star, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Epistle = () => {
  const letters = [
    {
      id: 1,
      title: "My Dearest Vickie",
      date: "January 6, 2026",
      content: `My dearest Vickie, from the moment I met you, my life has been filled with joy, laughter, and love beyond measure. You are the most amazing woman I have ever known...`,
      excerpt: "A letter expressing my deepest feelings for you.",
    },
    {
      id: 2,
      title: "Happy Birthday My Love",
      date: "Today",
      content: `On this special day, I want you to know how much you mean to me. You are not just my love, but my best friend, my confidant, and my everything...`,
      excerpt: "Birthday wishes from the bottom of my heart.",
    },
    {
      id: 3,
      title: "Our Future Together",
      date: "Forever",
      content: `I dream of a future where we grow old together, hand in hand, creating beautiful memories every single day. I promise to love you more with each passing moment...`,
      excerpt: "Dreams and promises for our journey ahead.",
    },
  ];

  const [selectedLetter, setSelectedLetter] = useState(letters[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/50 to-pink-950/30 text-white p-4">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-rose-300 hover:text-rose-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block mb-6">
          <BookOpen className="w-16 h-16 text-rose-400 mx-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          Love Epistles
        </h1>
        <p className="text-rose-200/80 text-lg max-w-2xl mx-auto">
          Letters from my heart to yours, my beautiful Vickie 💌
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Letters List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-rose-400" />
            My Letters to You
          </h2>

          {letters.map((letter) => (
            <button
              key={letter.id}
              onClick={() => setSelectedLetter(letter)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                selectedLetter.id === letter.id
                  ? "border-rose-500/40 bg-gradient-to-r from-rose-500/10 to-pink-500/10"
                  : "border-rose-500/20 hover:border-rose-500/40 hover:bg-rose-500/5"
              }`}
            >
              <h3 className="font-bold text-white mb-2">{letter.title}</h3>
              <p className="text-rose-200/70 text-sm mb-2">{letter.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-rose-300/50">{letter.date}</span>
                <Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
              </div>
            </button>
          ))}
        </div>

        {/* Selected Letter */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-black/40 to-rose-950/20 border border-rose-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-rose-500/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedLetter.title}
                </h2>
                <p className="text-rose-300/70">{selectedLetter.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-rose-500/20 rounded-lg hover:bg-rose-500/30 transition-colors">
                  <Heart
                    className="w-5 h-5 text-rose-400"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>

            {/* Letter Content */}
            <div className="prose prose-invert max-w-none">
              <div className="text-rose-100 leading-relaxed space-y-4 text-lg">
                <p>My dearest Vickie,</p>
                <p>{selectedLetter.content}</p>
                <p>
                  Every moment with you feels like a beautiful dream. Your
                  laughter is my favorite melody, your smile is my sunshine, and
                  your love is the greatest gift I've ever received.
                </p>
                <p>
                  I promise to cherish you, respect you, and love you more with
                  each passing day. You are my everything, and I'm so grateful
                  to have you in my life.
                </p>
                <div className="mt-8 pt-6 border-t border-rose-500/20">
                  <p className="text-rose-300 italic">
                    Forever yours,
                    <br />
                    With all my love 💝
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Save to Favorites</span>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Print Letter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Epistle;
