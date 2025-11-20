import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, BookOpen, Users } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    // { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    // { name: 'Book', href: '/book', icon: BookOpen },
    // { name: 'Community', href: '/community', icon: Users },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
              TYYW
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const IconComponent = item.icon
                const isActive = location.pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-pink-400 bg-pink-500/10 border border-pink-500/20'
                        : 'text-gray-300 hover:text-pink-400 hover:bg-pink-500/5'
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              
              {/* Pre-order Button */}
              {/* <button className="ml-4 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 border border-pink-500/30">
                Pre-order Now
              </button> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 focus:outline-none transition-colors duration-300"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-lg rounded-lg border border-pink-500/20 mt-2">
              {navigation.map((item) => {
                const IconComponent = item.icon
                const isActive = location.pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-pink-400 bg-pink-500/10 border border-pink-500/20'
                        : 'text-gray-300 hover:text-pink-400 hover:bg-pink-500/5'
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              
              {/* Mobile Pre-order Button */}
              <div className="px-3 py-2">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 border border-pink-500/30">
                  Pre-order Book
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar