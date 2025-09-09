import { Box, Link, Stack } from '@mui/material';
import * as React from 'react';
import { AppContext } from './AppContext/AppContext.tsx';
import { Steps } from './Steps.tsx';
import { Text } from './Text.tsx';

export const ClickCounter = () => {
  const { clickCount } = React.useContext(AppContext);

  if (clickCount < Steps.length) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '100px',
        zIndex: 1000,
        width: '100%',
        text1lign: 'center',
      }}
    >
      <Text>You lost your time by clicking {clickCount} times.</Text>
      <Stack>
        {clickCount === Steps.length + 50 && (
          <Text>
            You clicked 50 times more ? We clearly have a genius here.
          </Text>
        )}
        {clickCount >= Steps.length + 51 && (
          <Stack
            direction='column'
            spacing={2}
          >
            <Text>
              Okay look, here's the{' '}
              <Link sx={{ cursor: 'pointer' }}>github repository</Link> so you
              can check by yourself.
            </Text>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};
