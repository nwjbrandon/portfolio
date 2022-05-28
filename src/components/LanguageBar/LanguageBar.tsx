import React from 'react';
import { useLanguage } from 'contexts/LanguageContext';
import './LanguageBar.scss';

const LanguageBar: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="languagebar__container">
      <button
        className={
          lang === 'en' ? 'languagebar__button--curr' : 'languagebar__button'
        }
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        className={
          lang === 'jp' ? 'languagebar__button--curr' : 'languagebar__button'
        }
        onClick={() => setLang('jp')}
      >
        JP
      </button>
    </div>
  );
};

export default LanguageBar;
