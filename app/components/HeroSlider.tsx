import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Star, Award, Zap } from 'lucide-react';

const BrandHero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#020617] flex items-center justify-center overflow-hidden font-sans">
      
      {/* 1. Background Effects (Luxury Feel) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center">
        
        {/* 2. Left Side: Brand Story & Authority (7 Columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
            <Star className="text-amber-400 fill-amber-400" size={16} />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Voted India's Most Trusted Consultant 2024
            </span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            Global Careers <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent italic">
              Redefined.
            </span>
          </h1>

          <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
            Patha paddathulu vaddu. Experience a data-driven approach to immigration. 
            We don't just process visas; we engineer your global relocation success.
          </p>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">98.4%</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest mt-1">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">15+</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest mt-1">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">12k+</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest mt-1">Happy Stories</div>
            </div>
          </div>
        </motion.div>

        {/* 3. Right Side: The "Power" Form (5 Columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Form Container with Glassmorphism */}
          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] shadow-2xl relative z-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Zap className="text-blue-400" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Quick Evaluation</h3>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Identity</label>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Phone</label>
                  <input type="tel" placeholder="+91" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Destination</label>
                  <select className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Europe</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Your Goal</label>
                <select className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                  <option>Permanent Residency</option>
                  <option>Masters / Study</option>
                  <option>Work Opportunity</option>
                </select>
              </div>

              <button className="group w-full mt-4 bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-400 transition-all duration-300">
                START FREE ASSESSMENT
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 pt-4 text-slate-500">
                <Shield size={14} />
                <span className="text-[10px] uppercase font-bold tracking-[2px]">Encrypted & Secure</span>
              </div>
            </form>
          </div>

          {/* Luxury Decoration (Floating Elements) */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 bg-[#0f172a] border border-white/10 p-5 rounded-3xl hidden md:flex items-center gap-4 shadow-xl">
             <Award className="text-amber-400" size={32} />
             <div>
                <div className="text-white font-bold text-sm leading-none">Global Icon Award</div>
                <div className="text-slate-500 text-[10px] mt-1 italic">Winner 2023-24</div>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default BrandHero;