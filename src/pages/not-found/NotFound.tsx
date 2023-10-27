import { Stack, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/routes/paths';
// import background404 from '../../assets/background404.png'
import AnimationBackgroundLayout from '../../components/AnimationBackgroundLayout';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      component={'div'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        // backgroundImage: `url(${background404})`,
      }}
    >
      <AnimationBackgroundLayout />
      <Stack
        sx={{ width: '90%', height: '90%', minHeight: '90vh' }}
        m={'20px 40px'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Stack
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
          gap={'32px'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box>
            <Typography
              fontSize={'159px'}
              fontWeight={'190'}
              lineHeight={'164PX'}
            >
              404
            </Typography>
            <Typography variant={'h3'} sx={{ fontWeight: '400' }}>
              Извините, эта страница не найдена
            </Typography>
          </Box>
          <Stack>
            <Button
              variant={'outlined'}
              onClick={() => navigate(`${paths.main}`)}
            >
              Вернуться на главную
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default NotFound;
