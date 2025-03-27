
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from "../Assets/logo.png"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-poppins font-bold text-secondary">
              <img src={Logo} alt="Logo" className='h-16 w-auto' />
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              {t(
                'Transforming waste management with smart solutions for a more sustainable and cleaner future.',
                'تحويل إدارة النفايات بحلول ذكية من أجل مستقبل أكثر استدامة ونظافة.'
              )}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-primary hover:text-white text-gray-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-primary hover:text-white text-gray-600"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-primary hover:text-white text-gray-600"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-primary hover:text-white text-gray-600"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t('Company', 'الشركة')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
                  {t('About', 'حول')}
                </a>
              </li>
              <li>
                <a href="#values" className="text-gray-600 hover:text-primary transition-colors">
                  {t('Values', 'القيم')}
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-600 hover:text-primary transition-colors">
                  {t('Team', 'الفريق')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  {t('Careers', 'الوظائف')}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t('Solutions', 'الحلول')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  {t('Smart Sorting', 'الفرز الذكي')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  {t('Data Analysis', 'تحليل البيانات')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  {t('Logistics Optimization', 'تحسين الخدمات اللوجستية')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  {t('Consultation', 'الاستشارات')}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t('Newsletter', 'النشرة الإخبارية')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t(
                'Stay informed about the latest innovations in waste management.',
                'ابق على اطلاع بأحدث الابتكارات في إدارة النفايات.'
              )}
            </p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder={t('Your email', 'بريدك الإلكتروني')}
                className="form-input rounded-r-none flex-grow"
              />
              <button
                type="submit"
                className="btn bg-primary text-white rounded-l-none hover:bg-primary-600"
              >
                {t('Subscribe', 'اشترك')}
              </button>
            </form>
          </div>
        </div>
        
        <div className={`pt-8 mt-8 border-t border-gray-100 flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''} justify-between items-center`}>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Daiwer. {t('All rights reserved | Programmed by Sofyane Acoriy.', '  جميع الحقوق محفوظة. | برمج من طرف سفيان اكوري ')}
          </p>
          <div className={`flex space-x-6 ${isRTL ? 'space-x-reverse' : ''} mt-4 md:mt-0`}>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              {t('Privacy Policy', 'سياسة الخصوصية')}
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              {t('Terms of Use', 'شروط الاستخدام')}
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              {t('Legal Notice', 'إشعار قانوني')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
