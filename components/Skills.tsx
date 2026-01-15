
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Microsoft Excel', level: 95, color: 'from-green-500 to-emerald-700', desc: '데이터 관리 및 복잡한 수식 분석' },
    { name: 'Microsoft PowerPoint', level: 90, color: 'from-orange-500 to-red-600', desc: '설득력 있는 비주얼 기획 및 제작' },
    { name: 'Communication', level: 85, color: 'from-blue-500 to-indigo-600', desc: '20년차 직장인의 유연한 소통' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-classical font-bold mb-4 italic">Professional Tools</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        <p className="mt-6 text-slate-400 max-w-xl mx-auto">
          다양한 비즈니스 환경에서 검증된 핵심 도구 활용 능력입니다. 
          데이터를 통해 통찰력을 얻고, 시각화하여 비전을 공유합니다.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-white">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="mt-2 text-xs text-slate-500">{skill.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col justify-center bg-slate-800/30 p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
          <h3 className="text-2xl font-bold mb-4 text-purple-300">비즈니스 역량의 정점</h3>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="text-blue-500">✓</span>
              <span>데이터 자동화 및 매크로 활용을 통한 업무 효율화</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500">✓</span>
              <span>프레젠테이션 스토리텔링 및 디자인 차별화</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500">✓</span>
              <span>수치 기반의 의사결정 리포트 작성 전문성</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
