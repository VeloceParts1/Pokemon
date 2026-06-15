import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, CreditCard, Truck, ShieldCheck, Lock, ChevronRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cart, total, subtotal, tax, shipping, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/success');
    }, 2000);
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Checkout Form */}
          <div className="flex-1">
            <Link to="/cart" className="inline-flex items-center gap-2 text-soft-slate hover:text-deep-charcoal transition-colors mb-8 text-sm font-medium">
              <ArrowLeft size={16} /> Back to Cart
            </Link>
            
            <h1 className="text-4xl font-bold mb-12 font-space">Finalize <span className="text-rich-gold">Order</span></h1>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Contact Info */}
              <section>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-deep-charcoal text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">1</span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <input 
                    required
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rich-gold transition-colors"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </section>

              {/* Shipping Info */}
              <section>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-deep-charcoal text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">2</span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    required
                    type="text" 
                    name="firstName"
                    placeholder="First Name" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rich-gold transition-colors"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input 
                    required
                    type="text" 
                    name="lastName"
                    placeholder="Last Name" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rich-gold transition-colors"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <input 
                    required
                    type="text" 
                    name="address"
                    placeholder="Street Address" 
                    className="col-span-2 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rich-gold transition-colors"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  <input 
                    required
                    type="text" 
                    name="city"
                    placeholder="City" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rich-gold transition-colors"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <input 
                    required
                    type="text" 
                    name="zipCode"
                    placeholder="ZIP / Postal Code" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rich-gold transition-colors"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </section>

              {/* Payment Info */}
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-3">
                    <span className="bg-deep-charcoal text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">3</span>
                    Payment Method
                  </h2>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-slate-100 rounded"></div>
                    <div className="w-8 h-5 bg-slate-100 rounded"></div>
                    <div className="w-8 h-5 bg-slate-100 rounded"></div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      name="cardNumber"
                      placeholder="Card Number" 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-rich-gold transition-colors"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                    <CreditCard className="absolute right-4 top-3.5 text-soft-slate" size={20} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      required
                      type="text" 
                      name="expiry"
                      placeholder="MM / YY" 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rich-gold transition-colors"
                      value={formData.expiry}
                      onChange={handleInputChange}
                    />
                    <input 
                      required
                      type="text" 
                      name="cvv"
                      placeholder="CVV" 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rich-gold transition-colors"
                      value={formData.cvv}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </section>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full btn-primary py-5 text-xl flex items-center justify-center gap-3 shadow-2xl disabled:opacity-70"
              >
                {isProcessing ? (
                  <div className="h-6 w-6 border-3 border-deep-charcoal/30 border-t-deep-charcoal rounded-full animate-spin"></div>
                ) : (
                  <><Lock size={22} /> Complete Secure Purchase</>
                )}
              </button>
              
              <p className="text-center text-xs text-soft-slate flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-success-green" /> 
                Your transaction is protected by 256-bit SSL encryption.
              </p>
            </form>
          </div>

          {/* Side Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold mb-6 font-space">Order Summary</h2>
              
              <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 mb-8 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg p-1 flex-shrink-0 border border-slate-200">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold line-clamp-1">{item.name}</h4>
                      <div className="text-xs text-soft-slate">Qty: {item.quantity} × ${item.price}</div>
                    </div>
                    <div className="text-sm font-bold font-mono">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-6">
                <div className="flex justify-between text-sm text-soft-slate">
                  <span>Subtotal</span>
                  <span className="font-mono font-bold text-deep-charcoal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-soft-slate">
                  <span>Shipping</span>
                  <span className="font-mono font-bold text-deep-charcoal">
                    {shipping === 0 ? <span className="text-success-green">FREE</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-soft-slate">
                  <span>Estimated Tax</span>
                  <span className="font-mono font-bold text-deep-charcoal">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <span className="text-lg font-bold">Total Due</span>
                  <span className="text-2xl font-bold font-mono text-electric-blue">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-8 bg-rich-gold/5 rounded-2xl p-4 border border-rich-gold/10">
                <div className="flex gap-3">
                  <Truck className="text-rich-gold flex-shrink-0" size={20} />
                  <div>
                    <h5 className="text-sm font-bold">Insured Priority Shipping</h5>
                    <p className="text-[11px] text-soft-slate">All items are shipped with signature confirmation and insurance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
