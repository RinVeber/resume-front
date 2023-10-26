import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
import VacanciesMenu from '../components/vacanciesMenu/vacanciesMenu';
import Box from '@mui/material/Box';
import { Typography, Stack } from '@mui/material';
import CustomizedTabs from '../components/Tabs';
import Vacancies from '../pages/vacancies/Vacancies';
import MainPage from '../pages/main-page/MainPage';
import VacanciesInfo from '../pages/vacanciesInfo/vacanciesInfo';

export default function VacanciesLayout() {
  const [activeTab, setActiveTab] = useState(0);

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
          <CustomizedTabs onTabChange={setActiveTab}/>

          {activeTab === 0 && <Vacancies />}
          {activeTab === 1 && <MainPage />}
          {activeTab === 2 && <MainPage />}
          {activeTab === 3 && <VacanciesInfo />}
        </Stack>
      </Box>
    </>
  );
}
