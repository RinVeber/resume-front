import { Stack, Box, Typography, Button } from '@mui/material';
import React from 'react';
import BackgroundLetterAvatars from '../Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../assets/arrow_left.svg';

export default function HeaderResume() {
  const navigate = useNavigate();
  return (
    <Stack
      flexDirection={'column'}
      gap={'26px'}
      alignItems={'flex-start'}
      sx={{ backgroundColor: '#FFF', borderRadius: '6px', padding: '40px 0 92px 40px' }}
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
        <BackgroundLetterAvatars />
        <Stack flexDirection={'column'} gap={'20px'}>
          <Stack flexDirection={'column'} gap={'9px'}>
            <Typography variant="h1">Королев Василий</Typography>
            <Typography variant="h3" fontWeight={'600'}>
              Дизайнер Интерфейсов, Middle
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
                3 хакатона
              </Typography>
            </Box>
          </Stack>
          <Typography variant="h4" maxWidth={'886px'}>
            В UI/UX-дизайне хочу совместить свой творческий потенциал с
            возможностью создавать удобные интерфейсы для пользователей.
          </Typography>
          <Stack flexDirection={'column'} gap={'9px'}>
            <Typography variant={'h4'} fontWeight={'700'}>
              {' '}
              Контакты{' '}
            </Typography>
            <Stack flexDirection={'row'} gap={'52px'}>
              <Typography variant={'h4'}>t.me/korol</Typography>
              <Typography variant={'h4'}>korol@ya.ru</Typography>
              <Typography variant={'h4'}>+7916-345-89-48</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
