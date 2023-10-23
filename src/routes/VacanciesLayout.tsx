import { Outlet } from 'react-router-dom';
import VacanciesMenu from '../components/vacanciesMenu/vacanciesMenu';
import Box from '@mui/material/Box';
import { Typography, Stack } from '@mui/material';
import CustomizedTabs from '../components/Tabs';

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

          <Outlet />
        </Stack>
      </Box>
    </>
  );
}
