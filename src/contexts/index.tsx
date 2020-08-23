import React from 'react';
import { WindowProvider } from './WindowContext';

const AppProviders = ({ children }: any) => {
  return (
    <WindowProvider>
      {children}
    </WindowProvider>
  );
};

export default AppProviders;