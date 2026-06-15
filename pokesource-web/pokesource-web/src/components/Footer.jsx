import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Globe, X, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-deep-charcoal text-white/60 py-16 border-t border-rich-gold/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-rich-gold to-[#F5D982] p-1.5 rounded-lg">
              <img src="/assets/pokesource-logo.png" alt="PokeSource" className="h-6 w-6 object-contain" />
            </div>
            <span className="text-xl font-bold font-space text-white tracking-tight">
              Poke<span className="text-rich-gold">Source</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Your premier destination for authentic, factory-sealed Pokémon TCG products. Direct from authorized distributors to your doorstep.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-rich-gold transition-colors"><X size={18} /></a>
            <a href="#" className="hover:text-rich-gold transition-colors"><Globe size={18} /></a>
            <a href="#" className="hover:text-rich-gold transition-colors"><MessageCircle size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-space font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-rich-gold transition-colors">Home</Link></li>
            <li><Link to="/store" className="hover:text-rich-gold transition-colors">Store</Link></li>
            <li><Link to="/faq" className="hover:text-rich-gold transition-colors">FAQ & Support</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-space font-bold mb-6 uppercase tracking-wider text-xs">Collector's Policy</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-rich-gold transition-colors">Authenticity Guarantee</a></li>
            <li><a href="#" className="hover:text-rich-gold transition-colors">Shipping & Handling</a></li>
            <li><a href="#" className="hover:text-rich-gold transition-colors">Returns & Refunds</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-space font-bold mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
          <p className="text-sm mb-4 leading-relaxed">
            Get exclusive access to pre-orders and restock alerts.
          </p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-dark-navy border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-rich-gold transition-colors pr-12" 
            />
            <button className="absolute right-2 top-2 bg-rich-gold text-deep-charcoal p-1.5 rounded-md hover:bg-[#F5D982] transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p>
          &copy; {new Date().getFullYear()} PokeSource. All rights reserved. 
          <span className="block md:inline md:ml-2">Pokémon and its trademarks are &copy;1995-2024 Nintendo/Creatures Inc./GAME FREAK inc.</span>
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
