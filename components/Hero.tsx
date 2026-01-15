
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Realistic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=2000&auto=format&fit=crop" 
          alt="Happy Family" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm tracking-[0.2em] font-medium uppercase animate-pulse">
          Devoted Father & Professional
        </div>
        <h1 className="text-5xl md:text-8xl font-classical font-bold mb-8 leading-tight">
          <span className="block mb-2">아이가</span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
            행복 할 수 있게
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-light">
          20년의 사회생활 경험과 두 아이를 향한 진심을 담아,<br />
          어제보다 더 나은 오늘을 만들어가는 아빠 최준영입니다.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="#about" 
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:scale-105"
          >
            자기소개 보기
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300"
          >
            연락하기
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
