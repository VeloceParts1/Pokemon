import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingCart, Star, ShieldCheck, Truck, RefreshCw, ChevronLeft, ChevronRight, Plus, Minus, Gem, Check } from 'lucide-react'
import { products } from '../utils/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  
  const product = useMemo(() => products.find(p => p.id === id), [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/store" className="btn-primary">Back to Store</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-xs font-medium text-soft-slate">
            <Link to="/" className="hover:text-electric-blue transition-colors">Home</Link>
            <span>/</span>
            <Link to="/store" className="hover:text-electric-blue transition-colors">Store</Link>
            <span>/</span>
            <span className="text-deep-charcoal">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Product Gallery */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="bg-slate-50 rounded-3xl p-12 aspect-square flex items-center justify-center relative overflow-hidden group border border-slate-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-deep-charcoal transition-all">
                <ChevronLeft size={20} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-deep-charcoal transition-all">
                <ChevronRight size={20} />
              </button>
              
              {product.isPreOrder && (
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-electric-purple text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-glow-purple">
                  <Gem size={14} /> Pre-order Guaranteed
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} className={`aspect-square rounded-xl border-2 transition-all cursor-pointer ${idx === 1 ? 'border-rich-gold bg-rich-gold/5' : 'border-slate-100 hover:border-slate-200'}`}>
                   <img src={product.image} alt="" className="w-full h-full object-contain p-2 opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-rich-gold/10 text-rich-gold text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-rich-gold/20">
                  {product.set}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "#D4A843" : "none"} className={i < Math.floor(product.rating) ? "text-rich-gold" : "text-slate-200"} />
                  ))}
                  <span className="text-xs font-bold ml-1 text-deep-charcoal">{product.rating}</span>
                  <span className="text-xs text-soft-slate ml-1">({product.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold font-mono text-deep-charcoal">${product.price}</span>
                {product.isPreOrder && <span className="text-sm text-soft-slate line-through font-mono">$139.99</span>}
              </div>
              <p className="text-soft-slate leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Selection & CTA */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-8">
              <div className="flex flex-wrap items-center gap-8 mb-8">
                <div>
                  <label className="block text-xs font-bold text-soft-slate uppercase tracking-wider mb-3">Quantity</label>
                  <div className="flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-slate-50 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-bold font-mono text-deep-charcoal">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-3 hover:bg-slate-50 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-soft-slate uppercase tracking-wider mb-3">Availability</div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2.5 w-2.5 rounded-full ${product.stock > 10 ? 'bg-success-green' : product.stock > 0 ? 'bg-warning-amber' : 'bg-slate-300'}`}></div>
                    <span className="font-bold text-sm">
                      {product.stock > 0 ? `${product.stock} units currently available` : 'Out of stock - Check back soon'}
                    </span>
                  </div>
                </div>
              </div>

              <button 
                disabled={product.stock === 0 || added}
                onClick={handleAddToCart}
                className={`w-full py-4 text-lg flex items-center justify-center gap-3 transition-all rounded-lg font-bold shadow-xl ${
                  added ? 'bg-success-green text-white scale-100' : 'btn-primary'
                } disabled:opacity-50 disabled:grayscale disabled:scale-100`}
              >
                {added ? (
                  <><Check size={22} /> Added to Cart</>
                ) : (
                  <><ShoppingCart size={22} /> {product.isPreOrder ? 'Reserve Pre-order' : 'Add to Shopping Cart'}</>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <ShieldCheck size={18} />, text: 'Direct Distribution' },
                { icon: <Truck size={18} />, text: 'Insured Shipping' },
                { icon: <RefreshCw size={18} />, text: 'Authenticity Seal' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-soft-slate uppercase tracking-wider">
                  <span className="text-rich-gold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
