import React from 'react'
import { Search, Filter, Grid3X3, List, ChevronDown } from 'lucide-react'

const products = [
  { id: 1, name: 'Scarlet & Violet — Booster Pack', price: '£4.99', type: 'Booster Pack', badge: 'In Stock', badgeClass: 'badge-instock', image: '/assets/pokesource-booster-pack.png' },
  { id: 2, name: 'Paradox Rift — Elite Trainer Box', price: '£49.99', type: 'Elite Box', badge: 'Pre-Order', badgeClass: 'badge-preorder', image: '/assets/pokesource-elite-box.png' },
  { id: 3, name: 'Holo Rare — Charizard ex', price: '£24.99', type: 'Single Card', badge: 'Limited', badgeClass: 'badge-limited', image: '/assets/pokesource-single-card.png' },
  { id: 4, name: '151 — Booster Bundle', price: '£29.99', type: 'Booster Pack', badge: 'Sold Out', badgeClass: 'badge-soldout', image: '/assets/pokesource-booster-pack.png' },
  { id: 5, name: 'Temporal Forces — Booster Box', price: '£149.99', type: 'Elite Box', badge: 'In Stock', badgeClass: 'badge-instock', image: '/assets/pokesource-elite-box.png' },
  { id: 6, name: 'Paldean Fates — Shiny Rare', price: '£18.99', type: 'Single Card', badge: 'In Stock', badgeClass: 'badge-instock', image: '/assets/pokesource-single-card.png' },
]

const Store = () => {
  return (
    <div className="min-h-screen bg-deep-charcoal">
      {/* Page Header */}
      <div className="bg-dark-navy border-b border-rich-gold/10">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-space font-bold text-white mb-3">
            Product Store
          </h1>
          <p className="text-white/50 max-w-xl">
            Browse our catalog of factory-sealed Pokémon TCG products. 
            Every item is guaranteed authentic and sourced directly from authorized distributors.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-deep-charcoal border-b border-rich-gold/5 sticky top-[73px] z-40">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg">
              <Filter size={16} />
              Filters
              <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg">
              All Categories
              <ChevronDown size={14} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-white/5 border border-white/10 text-white text-sm rounded-lg pl-10 pr-4 py-2 w-48 md:w-64 focus:outline-none focus:border-rich-gold/50 transition-colors placeholder:text-white/30"
              />
            </div>
            <button className="p-2 text-white/40 hover:text-rich-gold transition-colors bg-white/5 rounded-lg">
              <Grid3X3 size={18} />
            </button>
            <button className="p-2 text-white/40 hover:text-rich-gold transition-colors bg-white/5 rounded-lg">
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <p className="text-white/40 text-sm">
            Showing <span className="text-white font-semibold">{products.length}</span> products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card-premium bg-[#1E1E3A] group cursor-pointer">
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-electric-blue/10 to-electric-purple/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={product.badgeClass}>{product.badge}</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-electric-purple font-semibold uppercase tracking-wider">{product.type}</span>
                <h3 className="text-white font-space font-semibold text-sm mt-1 mb-3 leading-snug">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-rich-gold font-mono">{product.price}</span>
                  <button className="btn-primary text-xs py-1.5 px-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Store
