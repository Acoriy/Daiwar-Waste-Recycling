
import React, { useState } from 'react';
import { MailIcon, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative"
      style={{
        background: 'linear-gradient(135deg, rgba(249,253,248,1) 0%, rgba(242,246,255,1) 100%)',
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/40 to-transparent"></div>
        <div className="absolute top-[15%] right-[10%] w-48 h-48 rounded-full bg-primary-100 opacity-40"></div>
        <div className="absolute bottom-[20%] left-[5%] w-64 h-64 rounded-full bg-secondary-100 opacity-30"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`${isRTL ? 'reveal-right text-right' : 'reveal-left text-left'}`}>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-100 text-secondary-600 text-sm font-medium mb-4">
                {t("Contact Us", "اتصل بنا")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("Ready to modernize your waste management?", "هل أنت مستعد لتحديث إدارة النفايات لديك؟")}
              </h2>
              <p className="text-gray-700 mb-8">
                {t(
                  "Let's discuss your needs and how our smart solutions can transform your approach to waste management.",
                  "دعنا نناقش احتياجاتك وكيف يمكن لحلولنا الذكية أن تحول نهجك في إدارة النفايات."
                )}
              </p>
              
              <div className="space-y-6">
                <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <MailIcon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{t("Email", "البريد الإلكتروني")}</h3>
                    <a href="mailto:contact@daiwer.com.sa" className="text-gray-700 hover:text-primary transition-colors">
                        contracts@daiwer.com.sa
                    </a>
                  </div>
                </div>
                
                {/* <div className="p-6 rounded-xl bg-white shadow-subtle">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{t("Offices", "المكاتب")}</h3>
                  <p className="text-gray-700">
                    {t(
                      "It has yet to be determined.",
                      "لمم يتم تحدديده"
                    )}
                  </p>
                </div> */}
              </div>
            </div>
            
            <div className={`${isRTL ? 'reveal-left' : 'reveal-right'}`}>
              <div className="glass-card rounded-xl p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t("Message sent!", "تم إرسال الرسالة!")}
                    </h3>
                    <p className="text-gray-700 text-center">
                      {t(
                        "Thank you for your message. Our team will contact you very soon.",
                        "شكرًا لرسالتك. سيتواصل فريقنا معك قريبًا جدًا."
                      )}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={isRTL ? 'text-right' : 'text-left'}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("Full Name", "الاسم الكامل")}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder={t("Your name", "اسمك")}
                          dir={isRTL ? 'rtl' : 'ltr'}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("Email", "البريد الإلكتروني")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder={t("your@email.com", "بريدك@الالكتروني.com")}
                          dir="ltr"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("Message", "الرسالة")}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formState.message}
                          onChange={handleChange}
                          rows={4}
                          className="form-input resize-none"
                          placeholder={t("How can we help you?", "كيف يمكننا مساعدتك؟")}
                          dir={isRTL ? 'rtl' : 'ltr'}
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <span className="animate-spin mr-2">
                              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </span>
                            {t("Sending...", "جاري الإرسال...")}
                          </span>
                        ) : (
                          <span className="flex items-center">
                            {t("Send", "إرسال")}
                            <Send size={18} className={isRTL ? 'mr-2' : 'ml-2'} />
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
