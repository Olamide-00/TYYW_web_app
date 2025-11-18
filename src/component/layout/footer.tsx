import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Users, 
  MessageCircle, 
  Mail, 
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Book', href: '/book' },
    { name: 'Community', href: '/community' },
  ]

  const resources = [
    { name: 'Book Launch', href: '/book', icon: BookOpen },
    { name: 'Community Access', href: '/community', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  // SVG Icons for social media
  const SocialIcon = ({ children, href, label }) => (
    <a
      href={href}
      className="w-10 h-10 flex items-center justify-center bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 rounded-lg text-pink-400 hover:text-pink-300 transition-all duration-300 hover:scale-110"
      aria-label={label}
    >
      {children}
    </a>
  )

  return (
    <footer className="relative bg-black/90 backdrop-blur-lg border-t border-pink-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                TYYW
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md text-sm leading-relaxed">
              The Year You Win - Transforming goal-setters into goal-achievers. 
              Your journey to accomplished dreams starts here.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <SocialIcon href="#" label="Twitter">
                {/* Twitter SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialIcon>
              
              <SocialIcon href="#" label="Instagram">
                {/* Instagram SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
              
              <SocialIcon href="#" label="LinkedIn">
                {/* LinkedIn SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Rest of your footer component remains the same */}
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <resource.icon className="w-4 h-4 mr-2" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Get notified when the book launches and receive exclusive content.
            </p>
            
            {/* Newsletter Form */}
            <div className="space-y-3">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-black/40 border border-pink-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 border border-pink-500/30 flex items-center justify-center space-x-2 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Book Launch Countdown Banner */}
        <div className="mt-8 p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-white mb-1">
                Book Launch: December 13th
              </h4>
              <p className="text-pink-300 text-sm">
                Limited time pre-order bonuses available!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 border border-pink-500/30 text-sm whitespace-nowrap">
                Pre-order Book
              </button>
              <button className="px-4 py-2 bg-transparent border border-purple-500/50 text-purple-300 font-semibold rounded-full hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300 text-sm whitespace-nowrap">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="text-gray-400 text-xs text-center md:text-left">
              © {currentYear} The Year You Win (TYYW). All rights reserved.
            </div>
            <div className="flex space-x-4 text-xs">
              <Link to="/privacy" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="#"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 group"
          aria-label="Join WhatsApp Community"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full px-1 py-0.5 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            Join!
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer