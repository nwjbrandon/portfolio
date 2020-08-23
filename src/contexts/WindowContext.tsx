import React from 'react';

interface WindowContextProps {
  height: number;
  width: number;
}

const defaultContextProps: WindowContextProps = {
  height: window.innerHeight,
  width: window.innerWidth,
};

const WindowContext = React.createContext<WindowContextProps>(
  defaultContextProps
);

const WindowProvider: React.FC = props => {
  const [height, setHeight] = React.useState<number>(window.innerHeight);
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowContext.Provider
      value={{
        height,
        width
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useWindow = () => {
  const context = React.useContext(WindowContext);
  if (context === undefined) {
    throw new Error(`useWindow must be used within a WindowProvider`);
  }
  return context;
};

export { WindowProvider, useWindow };
