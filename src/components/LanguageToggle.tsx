import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import EnglishFlag from '../Assets/English.png';
import SaudiFlag from '../Assets/arabie-saoudite.png';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  // Optionnel : force l'arabe si la langue n'est pas encore définie
  useEffect(() => {
    if (!language) setLanguage('ar');
  }, [language, setLanguage]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-subtle hover:bg-white transition-colors px-3"
          aria-label="Select language"
        >
          <Globe size={18} className={language === 'en' ? 'mr-2' : 'ml-2'} />
          <span className="text-sm font-medium">
            {language === 'en' ? 'English' : 'العربية'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={language === 'ar' ? 'start' : 'end'}>
        <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
          <div className="flex items-center">
            <span className={language === 'ar' ? 'ml-2' : 'mr-2'}>
              <img src={EnglishFlag} alt="English Flag" className='h-5'/>
            </span>
            English
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('ar')} className="cursor-pointer">
          <div className="flex items-center">
            <span className={language === 'ar' ? 'ml-2' : 'mr-2'}>
              <img src={SaudiFlag} alt="Arabic Flag" className='h-5'/>
            </span>
            العربية
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;