import React from 'react';
import { Globe, Target, Cpu, Leaf, BarChart2, Zap, Users, Database, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Values: React.FC = () => {
  const { t, isRTL } = useLanguage();

  // Données structurées
  const visionMissionData = [
    {
      icon: <Globe size={40} className="text-primary" />,
      title: t("Our Vision", "رؤيتنا"),
      content: t(
        "To lead the transformation of waste management through innovative technology, creating a sustainable and cleaner future for generations to come.",
        "قيادة التحول في إدارة النفايات من خلال التكنولوجيا المبتكرة، وخلق مستقبل مستدام وأنظف للأجيال القادمة."
      ),
      bgColor: "bg-primary-50",
      borderColor: "border-primary-100"
    },
    {
      icon: <Target size={40} className="text-primary" />,
      title: t("Our Mission", "مهمتنا"),
      content: t(
        "At Daiwer, our mission is to revolutionize waste management and recycling by providing smart software and hardware solutions that enhance sustainability, reduce environmental impact, and optimize resource efficiency. We empower businesses and communities with technology-driven solutions that make waste management more efficient, cost-effective, and eco-friendly.",
        "في ديور، مهمتنا هي إحداث ثورة في إدارة النفايات وإعادة التدوير من خلال توفير حلول برمجية وأجهزة ذكية تُعزز الاستدامة، وتُقلل من الأثر البيئي، وتُحسّن كفاءة استخدام الموارد. نُمكّن الشركات والمجتمعات بحلول تكنولوجية تجعل إدارة النفايات أكثر كفاءةً وفعاليةً من حيث التكلفة وصديقةً للبيئة."
      ),
      bgColor: "bg-secondary-50",
      borderColor: "border-secondary-100"
    }
  ];

  const goalsData = [
    {
      title: t("Our Goals", "أهدافنا"),
      items: [
        t("1- Enhance Sustainability - Develop innovative solutions that help businesses and municipalities achieve zero waste and reduce carbon footprints.",
          "١- تعزيز الاستدامة - تطوير حلول مبتكرة تُساعد الشركات والبلديات على تحقيق صفر نفايات وتقليل البصمة الكربونية."),
        t("2- Optimize Waste Management - Utilize AI and IoT to improve waste collection, sorting, and recycling efficiency.",
          "٢- تحسين إدارة النفايات - استخدام الذكاء الاصطناعي وإنترنت الأشياء لتحسين كفاءة جمع النفايات وفرزها وإعادة تدويرها."),
        t("3- Promote Environmental Awareness - Encourage individuals and organizations to adopt greener waste disposal and recycling practices.",
          "٣- تعزيز الوعي البيئي - تشجيع الأفراد والمؤسسات على تبني ممارسات أكثر مراعاةً للبيئة للتخلص من النفايات وإعادة تدويرها."),
        t("4- Expand Global Reach - Grow our impact by partnering with governments, businesses, and communities worldwide.",
          "٤- توسيع نطاقنا العالمي - تعزيز تأثيرنا من خلال الشراكة مع الحكومات والشركات والمجتمعات حول العالم."),
        t("5- Drive Technological Innovation - Continuously improve our solutions with cutting-edge data analytics, automation, and AI-driven insights.",
          "٥- دفع عجلة الابتكار التكنولوجي - تحسين حلولنا باستمرار باستخدام أحدث تحليلات البيانات والأتمتة والرؤى المستندة إلى الذكاء الاصطناعي.")
      ],
      icon: <Leaf size={40} className="text-secondary" />
    }
  ];

  const techPillData = [
    { icon: <Cpu size={24} />, text: t("Artificial Intelligence", "الذكاء الاصطناعي") },
    { icon: <Database size={24} />, text: t("Big Data Analytics", "تحليل البيانات الضخمة") },
    { icon: <Zap size={24} />, text: t("IoT Solutions", "حلول إنترنت الأشياء") },
    { icon: <BarChart2 size={24} />, text: t("Smart Automation", "الأتمتة الذكية") },
    { icon: <Users size={24} />, text: t("Community Engagement", "مشاركة المجتمع") }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary-100 opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary-100 opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête avec animation */}
        <div className={`text-center mb-16 ${isRTL ? 'rtl' : 'ltr'} transform transition-all duration-500 hover:scale-105`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4 animate-pulse">
            {t("Core Values", "القيم الأساسية")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            {t("Our Commitment to Sustainability", "التزامنا بالاستدامة")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              {t(
                "At Daiwer, we combine cutting-edge technology with environmental responsibility to redefine waste management for a sustainable future.",
                "في ديور، نجمع بين أحدث التقنيات والمسؤولية البيئية لإعادة تعريف إدارة النفايات من أجل مستقبل مستدام."
              )}
            </p>
          </div>
        </div>

        {/* Vision et Mission avec disposition créative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {visionMissionData.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl ${item.bgColor} border-2 ${item.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-start mb-6">
                <div className="p-3 rounded-xl bg-white shadow-md mr-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Objectifs avec design moderne */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 shadow-lg mb-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary-200 opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary-200 opacity-30"></div>
          
          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="md:w-1/4 flex justify-center items-start">
              <div className="p-4 rounded-xl bg-white shadow-lg border-2 border-secondary-200">
                {goalsData[0].icon}
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {goalsData[0].title}
              </h3>
              <ul className="space-y-4">
                {goalsData[0].items.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full ${index % 2 === 0 ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'} flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover:scale-110`}>
                      {index + 1}
                    </span>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                    <ChevronRight className="ml-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1" size={18} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Élément technologique avec animation */}
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-primary-100 text-primary-600 font-medium mb-6 animate-bounce">
            {t("Technology Driven", "مدفوع بالتكنولوجيا")}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            {t("Innovative Solutions for a Cleaner Future", "حلول مبتكرة لمستقبل أنظف")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techPillData.map((item, index) => (
              <TechPill 
                key={index} 
                icon={item.icon} 
                text={item.text} 
                color={index % 2 === 0 ? 'primary' : 'secondary'} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechPill: React.FC<{ 
  icon: React.ReactNode; 
  text: string;
  color: 'primary' | 'secondary';
}> = ({ icon, text, color }) => {
  return (
    <div className={`flex items-center px-6 py-3 bg-white rounded-full shadow-sm border border-${color}-200 hover:bg-${color}-50 transition-all duration-300 hover:scale-105 cursor-pointer`}>
      <span className={`mr-2 text-${color}-600`}>{icon}</span>
      <span className="font-medium text-gray-700">{text}</span>
    </div>
  );
};

export default Values;