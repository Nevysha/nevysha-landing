import { useEffect } from 'react';
import { AppContext } from './AppContext/AppContext';
import * as React from 'react';

export const StopStep = ({ autonext = true }:{autonext?: boolean}) => {
  const { increaseClickCount, setDisableStartMs } = React.useContext(AppContext);
  useEffect(() => {
    setDisableStartMs(Date.now())
    if (autonext) {increaseClickCount()}
  }, []);
  return null
}