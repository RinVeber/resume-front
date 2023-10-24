import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

interface SlideSuccessProps {
    children?: React.ReactNode;
}

export default function SlideSuccess({children}: SlideSuccessProps) {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Button onClick={handleClick(TransitionRight)}>{children}</Button>

      <Snackbar
        sx={{
          fontSize: '18px',
          fontWeight: '600',
          '& .MuiSnackbarContent-root': {
            backgroundColor: '#7F67D2',
          },
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Авторизация завершена"
        key={transition ? transition.name : ''}
      />
    </Box>
  );
}
