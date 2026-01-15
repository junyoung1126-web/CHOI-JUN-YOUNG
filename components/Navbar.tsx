
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navLinks = [
    { name: '홈', href: '#hero' },
    { name: '자기소개', href: '#about' },
    { name: '기술력', href: '#skills' },
    { name: '경험', href: '#experience' },
    { name: '연락처', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-classical font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          C.J.Y Portfolio
        </a>
        
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium hover:text-purple-400 transition-colors duration-200 uppercase tracking-widest"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
           {/* Mobile menu could be added here if needed */}
           <button className="text-white">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
             </svg>
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
