import { useState } from "react";
import { ArrowLeft, Heart, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      src: "/1.jpeg",
      title: "Beautiful Smile",
      description: "That smile that lights up my world",
    },
    {
      id: 2,
      src: "/2.jpeg",
      title: "Elegant Queen",
      description: "Always graceful and beautiful",
    },
    {
      id: 3,
      src: "/3.jpeg",
      title: "Radiant Beauty",
      description: "Shining brighter than stars",
    },
    {
      id: 4,
      src: "/4.jpeg",
      title: "Joyful Moments",
      description: "Pure happiness personified",
    },
    {
      id: 5,
      src: "/14.jpeg",
      title: "My Stunning Vickie",
      description: "The woman of my dreams",
    },
    {
      id: 6,
      src: "/6.jpeg",
      title: "Forever Beautiful",
      description: "Timeless elegance",
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          Vickie's Gallery
        </h1>
        <p className="text-rose-200/80 text-lg max-w-2xl mx-auto">
          A collection of beautiful moments featuring you 💖
        </p>
      </div>

      {/* Photo Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-500/5 to-pink-500/5 hover:border-rose-500/40 transition-all duration-300"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onClick={() => setSelectedPhoto(photo)}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {photo.title}
                </h3>
                <p className="text-rose-200/90 text-sm">{photo.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="p-2 bg-rose-500/80 rounded-lg hover:bg-rose-600 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-pink-500/80 rounded-lg hover:bg-pink-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-purple-500/80 rounded-lg hover:bg-purple-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Counter */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-6 py-3">
          <Heart className="w-5 h-5 text-rose-400" fill="currentColor" />
          <span className="text-rose-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
