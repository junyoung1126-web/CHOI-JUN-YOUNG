
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-classical font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          C.J.Y Portfolio
        </h3>
        <p className="text-slate-500 text-sm max-w-md mx-auto mb-8">
          "아이가 행복할 수 있게"라는 슬로건 아래 진솔하고 성실하게 살아가는 한 아빠의 기록입니다. 
          방문해주셔서 감사합니다.
        </p>
        <div className="flex justify-center gap-6 mb-8">
           {/* Placeholder social icons */}
           <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">f</span>
           <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">in</span>
           <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">ig</span>
        </div>
        <p className="text-xs text-slate-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} JUNYOUNG CHOI. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
