import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { AppContext } from './AppContext/AppContext.tsx';

const viteEnv = import.meta.env.MODE;

export const DevCheat = () => {
  const { clickCount, decreaseClickCount } = React.useContext(AppContext);

  if (viteEnv !== 'development') return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        padding: '10px',
        zIndex: 1000,
      }}
    >
      <Typography>{clickCount}</Typography>
      <Button onClick={decreaseClickCount}>Decrease</Button>
    </Box>
  );
};
