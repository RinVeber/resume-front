import { Box, Stack, Typography } from '@mui/material';
import defAvatar from '../../../assets/defAvatar.png';
import heart from '../../../assets/heart.png';
import { LocationOnOutlined } from '@mui/icons-material';
import suiltcase from '../../../assets/suilcase.png';
import Chips from './Chips/Chips';

type CardType = {
  id: number;
  name: string;
  subname: string;
  coincidence: string;
  city: string;
  suiltcase: string;
  isCheked: boolean;
  avatar: string;
  skills: {
    id: number;
    title: string;
  }[];
};

interface CardProps {
  card: CardType;
}

export default function Card({ card }: CardProps) {
  return (
    <>
      <Stack
        width={'316px'}
        height={'204px'}
        display={'flex'}
        flexDirection={'column'}
        p={'16px'}
        gap={'16px'}
        sx={{boxSizing: 'border-box', borderRadius: '12px', border: '1px solid grey' }}
      >
        <Stack
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          gap={'7px'}
        >
          <img
            src={defAvatar}
            alt={'avatar'}
            style={{ borderRadius: '50%', width: '64px', height: '64px' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'flex-start',
              gap: '5px',
            }}
          >
            <Typography fontSize={14} fontWeight={700}>
              {card.name}
            </Typography>
            <Typography fontSize={14} fontWeight={500}>
              {card.subname}
            </Typography>
            <Typography
              fontSize={12}
              sx={{ p: '5px', bgcolor: '#C2E5CE', borderRadius: '4px' }}
            >
              {card.coincidence}
            </Typography>
          </Box>
          <img
            src={heart}
            alt={'heart'}
            style={{ width: '20px', height: '20px' }}
          />
        </Stack>
        <Stack sx={{ color: '#959595' }} flexDirection={'column'} gap={'10px'}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
            }}
          >
            <LocationOnOutlined />
            <Typography fontSize={13} sx={{ alignItems: 'center' }}>
              {card.city}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
            }}
          >
            <img src={suiltcase} alt={'case'} />
            <Typography fontSize={13} sx={{ alignItems: 'center' }}>
              Опыт работы: {card.suiltcase}
            </Typography>
          </Box>
          <Box display={'flex'} flexDirection={'row'} gap={'4px'}>
            {card.skills.map((item) => {
              return <Chips key={item.id} chip={item} />;
            })}
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
