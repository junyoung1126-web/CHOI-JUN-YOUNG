
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2004 - 현재',
      title: '회사생활 20년차의 연륜',
      role: 'Business Strategy & Management',
      desc: '조직의 성장과 함께하며 수많은 프로젝트를 성공적으로 이끌어온 20년의 세월. 성실함이 최고의 자산임을 몸소 실천해왔습니다.',
      color: 'blue'
    },
    {
      period: '2019 - 현재',
      title: '6살 아이의 든든한 아빠',
      role: 'First Hero',
      desc: '아이의 첫 걸음마부터 첫 등교까지, 세상에서 가장 행복한 아이로 자랄 수 있도록 곁을 지키는 진솔한 아빠입니다.',
      color: 'purple'
    },
    {
      period: '2024 - 현재',
      title: '1살 아이의 다정한 아빠',
      role: 'Growth Partner',
      desc: '새로운 생명의 탄생과 함께 다시 시작된 육아의 기쁨. 인내와 성실함으로 매일의 소중한 순간을 기록하고 있습니다.',
      color: 'indigo'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-classical font-bold mb-4 italic">Life Journey</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-auto md:mr-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative pl-8 transition-all duration-500 hover:scale-[1.02]`}>
              {/* Dot on the timeline */}
              <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-slate-950 bg-${exp.color}-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`}></div>
              
              <div className="bg-glass p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-sm font-bold text-purple-400 tracking-widest uppercase mb-1 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 whitespace-nowrap self-start md:self-center">
                    {exp.role}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
