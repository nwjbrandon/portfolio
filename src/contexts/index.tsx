import React from 'react';
import { WindowProvider } from './WindowContext';
import { LanguageProvider } from './LanguageContext';

const AppProviders = ({ children }: any) => {
  return (
    <WindowProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </WindowProvider>
  );
};

export default AppProviders;
