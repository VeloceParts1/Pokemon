import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Package, ArrowRight, Globe, X } from 'lucide-react'
import confetti from 'canvas-confetti'

const Success = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4A843', '#2D3A8C', '#6C63FF']
    });
  }, []);

  const orderNumber = Math.floor(Math.random() * 90000) + 10000;

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-success-green/10 rounded-full mb-8">
          <CheckCircle size={48} className="text-success-green" />
        </div>
        
        <h1 className="text-5xl font-bold mb-4 font-space">Order <span className="text-success-green">Confirmed!</span></h1>
        <p className="text-xl text-soft-slate mb-12">
          Thank you for your purchase. Your premium TCG items are being prepared for dispatch.
        </p>

        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 mb-12 text-left">
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold text-soft-slate uppercase tracking-widest mb-1">Order Number</div>
              <div className="text-xl font-bold font-mono text-deep-charcoal">#PS-{orderNumber}</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-soft-slate uppercase tracking-widest mb-1">Status</div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                <Package size={12} /> Processing
              </div>
            </div>
          </div>
          
          <p className="text-sm text-soft-slate leading-relaxed">
            A confirmation email has been sent to your inbox. You'll receive another update with tracking information as soon as your package leaves our distribution center.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/store" className="btn-primary py-4 px-8 flex items-center justify-center gap-2">
            Continue Collecting <ArrowRight size={20} />
          </Link>
          <Link to="/" className="btn-secondary py-4 px-8">
            Back to Home
          </Link>
        </div>

        <div className="border-t border-slate-100 pt-12">
          <p className="text-sm font-bold text-deep-charcoal mb-6 uppercase tracking-wider">Share your pull on social media</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="flex items-center gap-2 text-soft-slate hover:text-electric-blue transition-colors">
              <Globe size={20} /> <span className="text-sm font-medium">@PokeSourceTCG</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-soft-slate hover:text-electric-blue transition-colors">
              <X size={20} /> <span className="text-sm font-medium">#PokeSourcePulls</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
