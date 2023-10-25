import { Stack, Button, Typography, Box } from '@mui/material';
import arrow from '../../assets/arrow_left.svg';
import { useNavigate } from 'react-router-dom';
import {paths} from '../../routes/routes/paths';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Stack sx={{width: '90%', height: '90%'}} m={'20px 40px'} display={'flex'} flexDirection={'column'}>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          width: '100px',
          display: 'flex',
          justifyContent: 'flex-start',
          '&:hover': {
            borderRadius: '16px',
            backgroundColor: 'rgba(29, 107, 243, 0.11)',
          },
          color: '#959595',
          fontSize: '14px',
        }}
      >
        <img src={arrow} alt={'back'} />
        <Typography>Назад</Typography>
      </Button>
      <Stack height={'100%'} display={'flex'} flexDirection={'column'} gap={'32px'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Typography
            fontSize={'159px'}
            fontWeight={'190'}
            lineHeight={'164PX'}
          >
            404
          </Typography>
          <Typography variant={'h3'} sx={{fontWeight: '400'}}>Извините, эта страница не найдена</Typography>
        </Box>
        <Stack display={'flex'} flexDirection={'column'} gap={'12px'}>
          <Button variant={'default'} onClick={() => navigate(`${paths.main}`)}>
            Перезагрузить
          </Button>
          <Button variant={'outlined'} onClick={() => navigate(`${paths.main}`)}>
            Вернуться на главную
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default NotFound;
