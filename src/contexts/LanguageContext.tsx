import React from 'react';

interface LanguageContextProps {
  lang: string;
  setLang(_: string): void;
}

const defaultContextProps: LanguageContextProps = {
  lang: 'en',
  setLang: (_: string): void => {},
};

const LanguageContext =
  React.createContext<LanguageContextProps>(defaultContextProps);

const LanguageProvider: React.FC = (props) => {
  const [lang, setLang] = React.useState<string>('en');

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(`useLanguage must be used within a LanguageProvider`);
  }
  return context;
};

export { LanguageProvider, useLanguage };
