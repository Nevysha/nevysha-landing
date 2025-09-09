import * as React from 'react';

export const AppContext = React.createContext({
  clickCount: 0,
  increaseClickCount: () => {},
  decreaseClickCount: () => {},
  hasHovered: false,
});
