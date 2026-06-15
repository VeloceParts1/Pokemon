import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, tax, shipping, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={32} className="text-soft-slate" />
        </div>
        <h2 className="text-3xl font-bold mb-4 font-space">Your cart is empty</h2>
        <p className="text-soft-slate mb-8 max-w-md mx-auto">Looks like you haven't added any premium TCG items yet. Explore our latest drops and start collecting!</p>
        <Link to="/store" className="btn-primary inline-flex items-center gap-2">
          Browse Store <ArrowRight size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 font-space">Shopping <span className="text-rich-gold">Cart</span></h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-slate-50 rounded-xl p-2 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="text-[10px] font-bold text-rich-gold uppercase tracking-widest mb-1">{item.set}</div>
                  <h3 className="font-bold text-lg mb-1 leading-tight">{item.name}</h3>
                  <div className="text-soft-slate text-sm font-mono">${item.price} per unit</div>
                </div>

                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-slate-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center font-bold font-mono text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-slate-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="text-right min-w-[100px]">
                  <div className="font-bold font-mono text-lg">${(item.price * item.quantity).toFixed(2)}</div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 transition-colors p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <Link to="/store" className="text-electric-blue font-bold flex items-center gap-2 hover:underline">
                <ArrowRight size={18} className="rotate-180" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-rich-gold/10 sticky top-24">
              <h2 className="text-xl font-bold mb-6 font-space border-b border-slate-100 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-soft-slate">
                  <span>Subtotal</span>
                  <span className="font-mono font-bold text-deep-charcoal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-soft-slate">
                  <span>Tax (8%)</span>
                  <span className="font-mono font-bold text-deep-charcoal">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-soft-slate">
                  <span>Shipping</span>
                  <span className="font-mono font-bold text-deep-charcoal">
                    {shipping === 0 ? <span className="text-success-green">FREE</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-rich-gold font-bold bg-rich-gold/5 p-2 rounded-lg text-center">
                    Add ${(200 - subtotal).toFixed(2)} more for FREE shipping!
                  </p>
                )}
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold font-mono text-electric-blue">${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 shadow-xl mb-6"
              >
                Proceed to Checkout <ArrowRight size={22} />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-soft-slate">
                  <ShieldCheck size={16} className="text-rich-gold" />
                  <span>Secure SSL Encrypted Checkout</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-soft-slate">
                  <ShieldCheck size={16} className="text-rich-gold" />
                  <span>Guaranteed Authentic Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
