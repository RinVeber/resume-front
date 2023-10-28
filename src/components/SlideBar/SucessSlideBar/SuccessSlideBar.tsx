import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import { Stack, Typography } from '@mui/material';
import success from '../../../assets/ass-ok.svg';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

interface SlideSuccessProps {
  children?: React.ReactNode;
}

export default function SuccessSlideBar({ children }: SlideSuccessProps) {
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
    <Box sx={{ maxWidth: 300 }}>
      <Box onClick={handleClick(TransitionRight)}>{children}</Box>

      <Snackbar
      autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
      >
        <Stack
          display="flex"
          flexDirection="row"
          gap="8px"
          alignItems={'center'}
          sx={{
            borderRadius: '12px',
            padding: '20px 24px',
            backgroundColor: '#5A9BFF',
            color: '#FFFFFF',
            boxShadow: ' 0px 4px 6px 0px rgba(176, 190, 197, 0.30), 0px 8px 24px 0px rgba(176, 190, 197, 0.30);'
          }}
        >
          <img src={success} alt="картинка" />
          <Stack display="flex" flexDirection="column" gap="4px" alignItems={'flex-start'}>
            <Typography
              sx={{ width: '214px', fontSize: '16px', fontWeight: '600', lineHeight: '20px' }}
            >
              Данные сохранены
            </Typography>
            <Typography
              sx={{ fontSize: '13px', fontWeight: '400', lineHeight: '16px' }}
            >
              Добавлено в Приглашенные
            </Typography>
          </Stack>
        </Stack>
      </Snackbar>
    </Box>
  );
}
