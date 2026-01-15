
import React from 'react';

const About: React.FC = () => {
  const keywords = [
    { title: '활발성', desc: '아이들과 함께 뛰어놀며 쌓은 에너지는 어떤 조직에서도 긍정적인 활력소가 됩니다.', icon: '⚡' },
    { title: '진솔함', desc: '가장 소중한 아이들에게 당당한 아빠가 되기 위해 매 순간 정직하고 진실하게 행동합니다.', icon: '💎' },
    { title: '성실함', desc: '20년 직장 생활을 지탱해온 힘. 맡은 바 책임을 다하는 모습으로 신뢰를 증명합니다.', icon: '🔥' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
             <img 
               src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
               alt="Professional Portrait" 
               className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          {/* Decorative frame elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-purple-500 rounded-tl-xl opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-500 rounded-br-xl opacity-50"></div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-classical font-bold mb-8">
            <span className="text-blue-400 italic">"진심"</span>을 다하는<br />
            아빠의 삶과 열정
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 italic">
            "20년이라는 긴 시간 동안 기업의 일원으로 치열하게 살았습니다. 이제는 그 성실함을 바탕으로, 6살 그리고 1살 두 아이에게 부끄럽지 않은 세상을 물려주고 싶은 꿈을 꿉니다."
          </p>
          
          <div className="grid gap-6">
            {keywords.map((item) => (
              <div key={item.title} className="bg-glass p-6 rounded-xl hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
