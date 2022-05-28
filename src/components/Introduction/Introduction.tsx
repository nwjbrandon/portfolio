import React from 'react';
import Portfolio from 'utils/Portfolio';
import { useLanguage } from 'contexts/LanguageContext';

import './Introduction.scss';

const Introduction: React.FC = () => {
  const { lang } = useLanguage();
  const ShortIntroduction = Portfolio.ShortIntroduction;

  // const fixedText: string[] = ['Hi, I am Brandon!', 'I am a Software Engineer.', 'My interests are in NLP, RecSys, and CV.', 'I like Anime and Hololive.'];
  const [counter, setCounter] = React.useState<number>(0);
  const [text, setText] = React.useState<string>('');
  const [isHidden, setIsHidden] = React.useState<boolean>(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (text.length < ShortIntroduction[counter][lang].length) {
        setText(ShortIntroduction[counter][lang].slice(0, text.length + 1));
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [text]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsHidden(!isHidden);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [isHidden]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText('');
      setCounter((counter + 1) % ShortIntroduction.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <div className="introduction__container">
      <div className="introduction__container--text">
        {text}
        {isHidden ? <span>&nbsp;</span> : <span>|</span>}
      </div>
    </div>
  );
};

export default Introduction;
