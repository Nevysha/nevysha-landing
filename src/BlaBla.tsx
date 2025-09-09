import { Stack } from '@mui/material';
import * as React from 'react';
import { AppContext } from './AppContext/AppContext.tsx';
import { Steps } from './Steps.tsx';
import { Text } from './Text.tsx';

export const BlaBla = () => {
  return (
    <Stack
      direction='column'
      spacing={2}
      sx={{
        position: 'fixed',
        width: '100vw',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Text sx={{ fontSize: '40px' }}>Oh wow, there is a spinning cube.</Text>
      <Text>I wonder if you can click on it.</Text>
      <BlablaMore />
    </Stack>
  );
};

const BlablaMore = () => {
  const { clickCount } = React.useContext(AppContext);

  const stepsStart = 1;

  const stepsIndex = clickCount - stepsStart;

  return (
    <>
      {stepsIndex >= 0 && stepsIndex < Steps.length && Steps[stepsIndex]}
      {stepsIndex >= Steps.length && (
        <>
          <Text>Okay here's a click counter for you. Go play with it.</Text>
        </>
      )}
    </>
  );
};
