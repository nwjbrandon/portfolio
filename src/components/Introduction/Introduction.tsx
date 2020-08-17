import React from 'react';
import './Introduction.scss';

const Introduction: React.FC = () => {
  const fixedText = 'Hi, I am Brandon!';
  const [text, setText] = React.useState<string>('');
  const [isHidden, setIsHidden] = React.useState<boolean>(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (text.length < fixedText.length) {
        setText(fixedText.slice(0, text.length + 1));
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
