import { useState } from 'react';
import { AppContext } from './AppContext.tsx';

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [voidClickCount, setVoidClickCount] = useState(0);
  const [disableStartMs, setDisableStartMs] = useState(0);

  const increaseClickCount = () => {
    setClickCount(clickCount + 1);
  };

  const increaseVoidClickCount = () => {
    setVoidClickCount(voidClickCount + 1);
  }

  const decreaseClickCount = () => {
    setClickCount(clickCount > 0 ? clickCount - 1 : 0);
  };

  return (
    <AppContext.Provider
      value={{
        clickCount: clickCount,
        increaseClickCount: increaseClickCount,
        decreaseClickCount: decreaseClickCount,
        voidClickCount: voidClickCount,
        increaseVoidClickCount: increaseVoidClickCount,
        hasHovered: false,
        disableStartMs: disableStartMs,
        setDisableStartMs: setDisableStartMs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
