
import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    { label: 'Email', value: 'cjy@wooyang.co.kr', icon: '✉️', link: 'mailto:cjy@wooyang.co.kr' },
    { label: 'Phone', value: '010-8915-5358', icon: '📞', link: 'tel:01089155358' },
    { label: 'Location', value: 'Seoul, South Korea', icon: '📍', link: '#' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-slate-900/40 rounded-[2rem] p-10 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
        {/* Bling effect */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>

        <div className="relative z-10 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-classical font-bold mb-6 italic">Let's Connect</h2>
          <p className="text-slate-300 text-lg">
            함께 아이들의 행복한 미래를 그려나갈 파트너를 기다립니다.<br />
            언제든 편하게 연락 주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <a 
                key={info.label}
                href={info.link}
                className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-600/20 rounded-xl text-2xl group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-bold tracking-widest uppercase">{info.label}</p>
                  <p className="text-lg font-medium text-white">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-slate-950/50 p-8 rounded-2xl border border-white/5">
             <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 uppercase font-bold px-1">Message Me</label>
                  <textarea 
                    placeholder="메시지를 남겨주세요..." 
                    rows={4}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
                  보내기
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
