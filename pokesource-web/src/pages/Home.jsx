import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Truck, Sparkles, ChevronRight, Clock, Award } from 'lucide-react'

const featuredProducts = [
  { id: 1, name: 'Premium Booster Pack', price: '£4.99', type: 'Booster Pack', image: '/assets/pokesource-booster-pack.png' },
  { id: 2, name: 'Elite Trainer Box', price: '£49.99', type: 'Elite Box', image: '/assets/pokesource-elite-box.png' },
  { id: 3, name: 'Holo Rare Single', price: '£12.99', type: 'Single Card', image: '/assets/pokesource-single-card.png' },
  { id: 4, name: 'Premium Booster Pack', price: '£4.99', type: 'Booster Pack', image: '/assets/pokesource-booster-pack.png' },
  { id: 5, name: 'Elite Trainer Box', price: '£49.99', type: 'Elite Box', image: '/assets/pokesource-elite-box.png' },
  { id: 6, name: 'Holo Rare Single', price: '£12.99', type: 'Single Card', image: '/assets/pokesource-single-card.png' },
]

const Home = () => {
  return (
    <>
      {/* ═══ Hero Section ═══ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/pokesource-hero-banner.png" 
            alt="Premium TCG products showcase" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/95 via-deep-charcoal/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-electric-purple/20 text-electric-purple text-xs font-semibold px-3 py-1.5 rounded-full border border-electric-purple/30 backdrop-blur-sm">
                🔥 Now Accepting Pre-Orders
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-space font-bold text-white tracking-tight mb-6 leading-[1.05]">
              Your Trusted Source for{' '}
              <span className="text-gradient-gold">Authentic</span>{' '}
              Pokémon TCG
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Factory-sealed booster boxes, elite trainer boxes, and rare singles — 
              direct from authorized distributors, delivered to your doorstep.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/store" className="btn-primary inline-flex items-center gap-2 text-base">
                Explore Store
                <ChevronRight size={20} />
              </Link>
              <Link to="/faq" className="btn-secondary inline-flex items-center gap-2 text-base">
                How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield size={16} className="text-rich-gold" />
                <span>Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Truck size={16} className="text-rich-gold" />
                <span>Fast Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Sparkles size={16} className="text-rich-gold" />
                <span>No Markup Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-charcoal to-transparent" />
      </section>

      {/* ═══ Features Strip ═══ */}
      <section className="bg-dark-navy border-y border-rich-gold/10">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: 'Zero Inventory Risk', desc: 'We source directly from distributors only when you order. No warehouse overhead, no inflated prices.' },
            { icon: Clock, title: 'Day-One Delivery', desc: 'Pre-order upcoming sets and get them shipped the moment they release — no delays, no queue.' },
            { icon: Shield, title: 'Verified Authentic', desc: 'Every product is factory-sealed from authorized distributors. Counterfeit? Zero tolerance. Full refund.' },
          ].map((feat, i) => (
            <div key={i} className="flex gap-4 items-start group">
              <div className="bg-gradient-to-br from-electric-purple/20 to-electric-blue/20 p-3 rounded-xl border border-rich-gold/10 group-hover:border-rich-gold/30 transition-all">
                <feat.icon size={24} className="text-rich-gold" />
              </div>
              <div>
                <h3 className="text-white font-space font-semibold mb-1.5">{feat.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Featured Products ═══ */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-rich-gold text-sm font-semibold uppercase tracking-widest">Shop Our Catalog</span>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mt-3 mb-4">
            Featured Products
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Hand-picked sealed products with guaranteed authenticity and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.slice(0, 3).map((product) => (
            <div key={product.id} className="card-premium bg-[#1E1E3A] group cursor-pointer">
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-electric-blue/10 to-electric-purple/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-rich-gold text-deep-charcoal text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    New
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-electric-purple font-semibold uppercase tracking-wider">{product.type}</span>
                <h3 className="text-white font-space font-semibold text-lg mt-1 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rich-gold font-mono">{product.price}</span>
                  <button className="bg-rich-gold/10 hover:bg-rich-gold/20 text-rich-gold text-sm font-semibold px-4 py-2 rounded-lg transition-all border border-rich-gold/20 hover:border-rich-gold/40">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/store" className="btn-primary inline-flex items-center gap-2 text-base">
            View All Products
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* ═══ Trust Section ═══ */}
      <section className="bg-dark-navy/50 border-t border-rich-gold/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-6 bg-deep-charcoal/50 border border-rich-gold/20 rounded-full px-6 py-3">
            <img src="/assets/pokesource-logo.png" alt="" className="w-8 h-8 rounded-md" />
            <span className="text-white/80 font-space font-semibold text-sm">
              Trusted By Collectors Worldwide
            </span>
          </div>
          <p className="text-white/40 text-sm max-w-lg mx-auto mt-4">
            PokeSource operates on a zero-inventory model — we only buy what you order, 
            ensuring the lowest possible prices and zero waste.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
