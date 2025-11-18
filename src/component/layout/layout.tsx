import { Outlet } from 'react-router-dom'
import PinkWeb3Background from './bg'
import Footer from './footer'
import Navbar from './navbar'

const Layout = () => {
  return (
    <PinkWeb3Background>
      {/* Navbar with higher z-index to stay above background */}
      <div className="relative z-20">
        <Navbar/>
      </div>
      
      {/* Main content with proper spacing */}
      <div className="relative z-10 min-h-screen pt-16"> {/* Added pt-16 for navbar spacing */}
        <div className="container mx-auto px-4 py-8">
        <div className=" bg-black/30 rounded-2xl p-6 md:p-8 border border-pink-500/20">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer with higher z-index */}
      <div className="relative z-20">
        <Footer />
      </div>
    </PinkWeb3Background>
  )
}

export default Layout