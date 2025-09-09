import { useState } from 'react';
import { AppContext } from './AppContext.tsx';

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clickCount, setClickCount] = useState(0);

  const increaseClickCount = () => {
    setClickCount(clickCount + 1);
  };

  const decreaseClickCount = () => {
    setClickCount(clickCount > 0 ? clickCount - 1 : 0);
  };

  return (
    <AppContext.Provider
      value={{
        clickCount: clickCount,
        increaseClickCount: increaseClickCount,
        decreaseClickCount: decreaseClickCount,
        hasHovered: false,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
