import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Search, User, Menu } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const location = useLocation();
  const { cart } = useCart();
  
  const isActive = (path) => location.pathname === path;
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-deep-charcoal sticky top-0 z-50 shadow-lg border-b border-rich-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-rich-gold to-[#F5D982] p-1.5 rounded-lg shadow-glow-gold transition-transform group-hover:scale-110">
            <img src="/assets/pokesource-logo.png" alt="PokeSource" className="h-8 w-8 object-contain" />
          </div>
          <span className="text-2xl font-bold font-space text-white tracking-tight">
            Poke<span className="text-rich-gold">Source</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Store', path: '/store' },
            { name: 'FAQ', path: '/faq' },
          ].map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-medium transition-all hover:text-rich-gold ${
                isActive(link.path) ? 'text-rich-gold' : 'text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-white/80 hover:text-rich-gold transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="p-2 text-white/80 hover:text-rich-gold transition-colors relative group">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-electric-purple text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-glow-purple group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="p-2 text-white/80 hover:text-rich-gold transition-colors">
            <User size={20} />
          </button>
          <button className="md:hidden p-2 text-white/80 hover:text-rich-gold transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
