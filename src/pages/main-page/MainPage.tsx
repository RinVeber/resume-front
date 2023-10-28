import { Stack, Typography } from '@mui/material';
import AnimationBackgroundLayout from '../../components/AnimationBackgroundLayout';

export default function MainPage() {
  return (
    <Stack
      display={'flex'}
      sx={{
        height: '90%',
      }}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <AnimationBackgroundLayout />
      <Typography variant="h4" sx={{ color: '#B5B5B7' }}>
        Для начала поиска кандидатов выберите или создайте вакансию
      </Typography>
    </Stack>
  );
}
