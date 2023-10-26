import { Outlet } from 'react-router-dom';
import VacanciesMenu from '../components/vacanciesMenu/vacanciesMenu';
import Box from '@mui/material/Box';
import { Typography, Stack, Button } from '@mui/material';
import CustomizedTabs from '../components/Tabs';
import FilterRespond from '../components/FilterRespond';
import setting from '../assets/settings.svg';

export default function VacanciesLayout() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <VacanciesMenu />
        <Stack
          display={'flex'}
          flexDirection={'column'}
          gap={'10px'}
          sx={{ padding: '40px 40px' }}
        >
          <Typography fontSize={'32px'} lineHeight={'32PX'} fontWeight={'500'}>
            JUNIOR FRONTEND
          </Typography>
          <CustomizedTabs />
          <Stack
            display={'flex'}
            flexDirection={'row'}
            gap={'6px'}
            sx={{ paddingRight: '60px' }}
            justifyContent={'flex-end'}
          >
        
            <FilterRespond>
            <img src={setting} alt={'текст'} style={{cursor: 'pointer'}}/>
              <Button sx={{color: '#1A1B22'}}>Фильтры</Button>
            </FilterRespond>
          </Stack>
          <Outlet />
        </Stack>
      </Box>
    </>
  );
}
