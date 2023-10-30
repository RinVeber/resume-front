import { Stack, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../assets/arrow_left.svg';
import Avatar from '../../../components/Avatar';
import heart from '../../../assets/heart.svg';
import { Tooltip } from '@mui/material';
import { useAppSelector } from '../../../redux/store';

export default function HeaderResume() {
  const navigate = useNavigate();
  const { data: currentResume } = useAppSelector((state) => state.resume);
  return (
    <Stack
      flexDirection={'column'}
      gap={'26px'}
      alignItems={'flex-start'}
      sx={{
        backgroundColor: '#FFF',
        borderRadius: '6px',
        boxSizing: 'border-box',
        padding: '40px 0 92px 40px',
      }}
    >
      <Button
        onClick={() => navigate(-1)}
        sx={{
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
      <Stack flexDirection={'row'} gap={'38px'}>
        <Avatar
          img={''}  // currentResume.photo лежит битая картинка
          textSize={'96px'}
          nameUser={'Королев Василий'}
          sizes={'207px'}
        />
        {/* <img src={currentResume!.photo} alt={'аватар'} /> */}
        <Stack flexDirection={'column'} gap={'20px'}>
          <Stack flexDirection={'column'} gap={'9px'}>
            <Stack flexDirection={'row'} justifyContent={'space-between'}>
              <Typography variant="h1">Королев Василий</Typography>
              <Tooltip title={'Добавить в избранное'}>
                <img src={heart} alt={'избранное'} />
              </Tooltip>
            </Stack>

            <Typography variant="h3" fontWeight={'600'}>
              {currentResume?.position}, {currentResume?.level}
            </Typography>
            <Box display={'flex'} flexDirection={'row'} gap={'24px'}>
              <Typography
                variant="h6"
                sx={{
                  padding: '5px 8px',
                  bgcolor: '#C2E5CE',
                  borderRadius: '4px',
                }}
              >
                100% походит вам, ребята
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  padding: '5px 5px',
                  bgcolor: '#FFE1BD',
                  borderRadius: '4px',
                }}
              >
                {currentResume?.activities} activities
              </Typography>
            </Box>
          </Stack>
          <Typography variant="h4" maxWidth={'886px'}>
            {currentResume?.brief}
          </Typography>
          <Stack flexDirection={'column'} gap={'9px'}>
            <Typography variant={'h4'} fontWeight={'700'}>
        
              Контакты
            </Typography>
            <Stack flexDirection={'row'} gap={'52px'}>
              <Typography variant={'h4'}>{currentResume?.telegram}</Typography>
              <Typography variant={'h4'}>korol@ya.ru</Typography>
              <Typography variant={'h4'}>{currentResume?.phone}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
