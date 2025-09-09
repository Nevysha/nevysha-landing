import { Typography } from '@mui/material';
// @ts-expect-error yolo
import type { TypographyOwnProps } from '@mui/material/Typography/Typography';
import * as React from 'react';

export const Text = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: TypographyOwnProps['sx'];
}) => {
  return (
    <Typography
      variant='h1'
      gutterBottom
      sx={{
        textAlign: 'center',
        fontSize: '20px',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
