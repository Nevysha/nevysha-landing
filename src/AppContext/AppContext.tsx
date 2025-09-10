import * as React from 'react';

type TAppContext = {
  clickCount: number;
  increaseClickCount: () => void;
  decreaseClickCount: () => void;
  voidClickCount: number;
  increaseVoidClickCount: () => void;
  hasHovered: boolean;
  disableStartMs: number;
  setDisableStartMs: (disableStartMs: number) => void;
}

export const AppContext = React.createContext<TAppContext>({
  clickCount: 0,
  increaseClickCount: () => {},
  decreaseClickCount: () => {},
  voidClickCount: 0,
  increaseVoidClickCount: () => {},
  hasHovered: false,
  disableStartMs: 0,
  setDisableStartMs: () => {},
});
