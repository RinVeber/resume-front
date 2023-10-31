import { Stack, Typography } from '@mui/material';
// import background404 from '../../assets/background404.png'
import AnimationBackgroundLayout from '../../components/AnimationBackgroundLayout';

export default function MainPage() {
  return (
    <Stack
      display={'flex'}
      sx={{
        height: '100%',
        width: '100%',
        // backgroundImage: `url(${background404})`,
        // backgroundRepeat: 'no-repeat',
        // display: 'flex',
        // justifyContent: 'center'
      }}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <AnimationBackgroundLayout />
      <Typography variant="h4" sx={{ color: '#B5B5B7',        display: 'flex',
        justifyContent: 'center' }}>
        Для начала поиска кандидатов выберите или создайте вакансию
      </Typography>
    </Stack>
  );
}
