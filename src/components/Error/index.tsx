import { Stack, Typography } from '@mui/material';
import AnimationBackgroundLayout from '../../components/AnimationBackgroundLayout';

export default function ErrorServer() {
  return (
    <Stack
      display={'flex'}
      sx={{
        height: '95%',
        width: '90%',
        position: 'fixed',
      }}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'50vh'}
    >
      <AnimationBackgroundLayout />
      <Stack
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Typography variant="h4" sx={{ color: '#B5B5B7' }}>
          Ошибка на сервере....
        </Typography>
      </Stack>
    </Stack>
  );
}
