
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExplanationVideo: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('See How It Works', 'شاهد كيف يعمل')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(
              'Discover how our smart waste management solutions transform your operations and help create a cleaner environment.',
              'اكتشف كيف تعمل حلولنا الذكية لإدارة النفايات على تحويل عملياتك والمساعدة في خلق بيئة أنظف.'
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white glass-card">
          <div className="aspect-w-16 aspect-h-9 relative">
            {/* Pour un vidéo YouTube, remplacez VIDEO_ID par l'ID de votre vidéo */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title={t("Daiwer Smart Waste Management Solutions", "حلول دايور الذكية لإدارة النفايات")}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className={`p-6 ${isRTL ? 'rtl text-right' : ''}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('Smart Waste Management in Action', 'إدارة النفايات الذكية قيد التنفيذ')}
            </h3>
            <p className="text-gray-600">
              {t(
                'This video demonstrates how our AI-powered solutions identify, sort, and process waste materials with unprecedented accuracy and efficiency.',
                'يوضح هذا الفيديو كيف تقوم حلولنا المدعومة بالذكاء الاصطناعي بتحديد وفرز ومعالجة النفايات بدقة وكفاءة غير مسبوقة.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplanationVideo;
