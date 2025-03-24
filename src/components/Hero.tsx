import React from 'react';
import { ArrowDown, Leaf, Zap, Cpu, BarChart2, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  // Données pour les statistiques
  // const stats = [
  //   { value: "40%", label: t("Waste Reduction", "تقليل النفايات") },
  //   { value: "100+", label: t("Happy Clients", "عميل راضٍ") },
  //   { value: "24/7", label: t("Support", "دعم فني") }
  // ];

  // Icônes de technologie
  const techIcons = [
    { icon: <Leaf size={24} className="text-green-500" />, name: t("Sustainability", "استدامة") },
    { icon: <Zap size={24} className="text-yellow-500" />, name: t("Efficiency", "كفاءة") },
    { icon: <Cpu size={24} className="text-blue-500" />, name: t("AI Technology", "ذكاء اصطناعي") },
    { icon: <BarChart2 size={24} className="text-purple-500" />, name: t("Analytics", "تحليلات") },
    { icon: <Globe size={24} className="text-primary" />, name: t("Global", "عالمي") }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary-50"
    >
      {/* Éléments d'arrière-plan animés */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-primary-100 opacity-60 animate-float"></div>
        <div className="absolute bottom-[15%] left-[10%] w-40 h-40 rounded-full bg-secondary-100 opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[25%] w-24 h-24 rounded-full bg-primary-200 opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Motifs géométriques */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-repeat-x bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwTDEwMCA1MEwwIDEwMFoiIGZpbGw9IiNmMWY5ZjEiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Contenu texte */}
          <div className={`${isRTL ? 'reveal-right text-right' : 'reveal-left text-left'}`}>
            <span className={`inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-6 ${isRTL ? 'ml-auto' : ''} animate-pulse`}>
              <Leaf size={16} className="mr-2" />
              {t('Ecological Innovation', 'ابتكار بيئي')}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                {t('Transform waste management with', 'تحويل إدارة النفايات مع')}
              </span>
              <span className=" py-3 text-primary block bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                {t('intelligent solutions', 'حلول ذكية')}
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
              {t(
                'At Daiwer, our mission is to revolutionize waste management and recycling by providing smart software and hardware solutions that enhance sustainability, reduce environmental impact, and optimize resource efficiency. We empower businesses and communities with technology-driven solutions that make waste management more efficient, cost-effective, and eco-friendly.',
                'في ديور، مهمتنا هي إحداث ثورة في إدارة النفايات وإعادة التدوير من خلال توفير حلول برمجية وأجهزة ذكية تُعزز الاستدامة، وتُقلل من الأثر البيئي، وتُحسّن كفاءة استخدام الموارد. نُمكّن الشركات والمجتمعات بحلول تكنولوجية تجعل إدارة النفايات أكثر كفاءةً وفعاليةً من حيث التكلفة وصديقةً للبيئة.'
              )}
            </p>
            
            {/* Boutons avec animation */}
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}>
              <a 
                href="#contact" 
                className="relative px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-100"
              >
                <span className="relative z-10">{t('Contact Us', 'اتصل بنا')}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              
              <a 
                href="#values" 
                className="relative px-6 py-3 bg-white text-gray-900 border-2 border-primary-100 rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:border-primary-300 hover:shadow-md"
              >
                <span className="relative z-10 flex items-center">
                  {t('Discover Our Values', 'اكتشف قيمنا')}
                  <ArrowDown size={18} className={`ml-2 transform group-hover:translate-y-1 transition-transform ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </span>
              </a>
            </div>
            
            {/* Statistiques */}
            {/* <div className={`mt-12 flex ${isRTL ? 'justify-end' : 'justify-start'} gap-6`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 animate-countup" data-target={stat.value}>
                    0
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div> */}
            
            {/* Icônes de technologie */}
            <div className={`mt-8 flex flex-wrap ${isRTL ? 'justify-end' : 'justify-start'} gap-3`}>
              {techIcons.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex items-center px-3 py-2 bg-white rounded-lg shadow-xs border border-gray-100 hover:shadow-sm transition-all duration-200"
                >
                  {tech.icon}
                  <span className={`text-sm font-medium ${isRTL ? 'mr-2' : 'ml-2'}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image avec effets */}
          <div className={`${isRTL ? 'reveal-left' : 'reveal-right'} lg:flex justify-center items-center hidden`}>
            <div className="relative group">
              <div className="w-full max-w-md aspect-square rounded-3xl glass-card p-1 flex items-center justify-center overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt={t('Smart sorting technology', 'تقنية الفرز الذكية')} 
                  className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Badge animé */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-card hover:shadow-lg transition-shadow duration-300 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center animate-pulse-slow">
                    <Zap size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{t('Waste Reduction', 'تقليل النفايات')}</p>
                    <p className="text-xs text-gray-500">{t('Up to 40% optimization', 'تحسين يصل إلى 40٪')}</p>
                  </div>
                </div>
              </div>
              
              {/* Élément décoratif */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-secondary-100 opacity-80 animate-ping-slow"></div>
            </div>
          </div>
        </div>

        {/* Flèche de défilement */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle hidden md:block">
          <a href="#values" className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-subtle hover:shadow-md transition-all duration-300 group">
            <ArrowDown size={24} className="text-primary group-hover:text-secondary-600 transition-colors" />
          </a>
        </div>
      </div>
      
      {/* Styles d'animation */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }a
        }
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-countup { transition: all 2s ease-out; }
        .glass-card {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;