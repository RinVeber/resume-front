import { Button } from '@mui/material';

interface ButtonProps {
    onClick?: () => void,
    children?: React.ReactNode;
}

export default function MyOutlinedButton({onClick, children}:ButtonProps) {
  return (
    <Button
    onClick={onClick}

    sx={{
      fontSize: '16px',
      '&:focus': {
        bgcolor: '#1D6BF3',
        border: '1px solid transparent',
        color: '#FFFFFF',
      },
      '&:hover': {
        bgcolor: '#1D6BF3',
        border: '1px solid transparent',
        color: '#FFFFFF',
      },

      padding: '15px 81px',
      color: '#1D6BF3',
      border: '1px solid #1D6BF3',
    }}
  >
    {children}
  </Button>
  )
}
