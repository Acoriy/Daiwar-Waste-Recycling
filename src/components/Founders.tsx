
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Nawfal_Albalwi from "../Assets/nawaf-albalwi.jpg";
import Rachid_Almarri from "../Assets/rashid-almarri.jpg";
import Zaki_Alqasemi from "../Assets/zaki-alqasemi.jpg";

const Founders: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const foundersList = [
    {
      name: t("Dr. Zaki AL Gasemi", "د. زكي القاسمي"),
      position: t("CEO & Co-founder", "الرئيس التنفيذي والمؤسس المشارك"),
      expertise: t("20 years of expertise in sustainable innovation", "   20عامًا من الخبرة في الابتكار المستدام "),
      image: Zaki_Alqasemi,
      email: "zaki@daiwer.com.sa",
      linkedin: "#"
    },
    {
      name: t("Eng. Rashid Almarri", "م.راشد المري"),
      position: t("CTO", "مدير التكنولوجيا"),
      expertise: t("AI and machine learning specialist", "متخصصة في الذكاء الاصطناعي والتعلم الآلي  "),
      image: Rachid_Almarri,
      email: "rashid@daiwer.com.sa",
      linkedin: "#"
    },
    {
      name: t("Eng. Nawaf Albalwi", "م.نواف البلوي"),
      position: t("CFO", "المدير المالي"),
      expertise: t("Exemple : Expert in green project financing", " خبير في تمويل المشاريع الخضراء  " ),
      image: Nawfal_Albalwi,
      email: "nawaf@daiwer.com.sa",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4">
            {t("Our Team", "فريقنا")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("Meet the Founders", "تعرف على المؤسسين")}
          </h2>
          <p className="text-gray-700">
            {t(
              "Passionate experts leading the waste management revolution with a clear vision and complementary skills.",
              "خبراء متحمسون يقودون ثورة إدارة النفايات برؤية واضحة ومهارات متكاملة."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundersList.map((founder, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl overflow-hidden reveal-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-[350px] overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-semibold text-gray-900">{founder.name}</h3>
                <p className="text-secondary font-medium mb-2">{founder.position}</p> 
                
                <p className="text-gray-600 text-sm mb-4">{founder.expertise}</p> 
                
                <div className={`flex space-x-3 ${isRTL ? 'space-x-reverse justify-end' : ''}`}>
                  <a 
                    href={`mailto:${founder.email}`} 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                    aria-label={t(`Send email to ${founder.name}`, `إرسال بريد إلكتروني إلى ${founder.name}`)}
                  >
                    <Mail size={18} />
                  </a>
                  <a 
                    href={founder.linkedin} 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-secondary hover:text-white"
                    aria-label={t(`View LinkedIn profile of ${founder.name}`, `عرض ملف LinkedIn الخاص بـ ${founder.name}`)}
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
