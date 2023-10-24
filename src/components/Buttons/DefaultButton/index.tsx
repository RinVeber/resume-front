import React from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function MyDefaultButton({ onClick, children }: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        fontSize: '16px',
        '&:hover': { bgcolor: '#1D6BF3' },

        '&:focus': {
          bgcolor: '#1D6BF3',
        },

        bgcolor: '#5A9BFF',
        color: '#FFFFFF',
        padding: '15px 81px',
      }}
    >
    {children}
    </Button>
  );
}
