import React from 'react'
import { ShieldCheck, Truck, RotateCcw, HelpCircle, ChevronDown } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    {
      question: "How do you guarantee authenticity?",
      answer: "We source our products directly from authorized Pokémon TCG distributors. Items are factory-sealed and never touch the secondary market until they reach your doorstep. We take transparency seriously and can provide proof of source for large orders."
    },
    {
      question: "What is your shipping policy?",
      answer: "We ship all orders within 24-48 business hours of the product becoming available. All shipments are insured and require signature confirmation for orders over 00. We use priority carriers to ensure your items arrive in mint condition."
    },
    {
      question: "Can I cancel a pre-order?",
      answer: "Yes, pre-orders can be cancelled up to 14 days before the official release date for a full refund. Cancellations within 14 days of release may be subject to a 10% restocking fee due to our allocation agreements with distributors."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the United States and Canada. We are working on expanding our logistics to support international collectors in Europe and Oceania soon."
    },
    {
      question: "What happens if my item arrives damaged?",
      answer: "While we take extreme care in packaging using heavy-duty boxes and bubble wrap, accidents can happen. If your item arrives with significant damage to the factory seal or box, please contact our support team within 48 hours for a replacement or refund."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 font-space">FAQ & <span className="text-rich-gold">Support</span></h1>
          <p className="text-xl text-soft-slate">Everything you need to know about PokeSource and our collector-first model.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <ShieldCheck className="text-rich-gold" />, title: "Authenticity", desc: "100% factory-sealed items direct from distributors." },
            { icon: <Truck className="text-rich-gold" />, title: "Secure Delivery", desc: "Insured shipping with signature confirmation available." },
            { icon: <RotateCcw className="text-rich-gold" />, title: "Returns", desc: "Hassle-free 30-day return policy for sealed items." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-soft-slate leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <HelpCircle className="text-electric-blue" /> Common Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <button className="flex justify-between items-center w-full text-left group">
                    <h4 className="font-bold text-lg group-hover:text-electric-blue transition-colors">{faq.question}</h4>
                    <ChevronDown size={20} className="text-soft-slate" />
                  </button>
                  <p className="mt-4 text-soft-slate leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-soft-slate mb-6">Still have questions? Our support team is here to help.</p>
          <a href="mailto:support@pokesource.com" className="btn-secondary py-4 px-8 inline-block">
            Contact Support Team
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
