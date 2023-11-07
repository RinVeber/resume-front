import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
import VacanciesMenu from '../components/vacanciesMenu/vacanciesMenu';
import Box from '@mui/material/Box';
import { Typography, Stack, Button } from '@mui/material';
import CustomizedTabs from '../components/Tabs';
import FilterRespond from '../components/FilterRespond';
import setting from '../assets/settings.svg';
import Vacancies from '../pages/vacancies/Vacancies';
import MainPage from '../pages/main-page/MainPage';
import VacanciesInfo from '../pages/vacanciesInfo/vacanciesInfo';
import { useAppSelector } from '../redux/store';
import { vacanciesIdSelect } from '../redux/getVacanciesId/getVacanciesId';
import InviteCardList from '../pages/inviteCardList';
// import { useAppDispatch } from '../redux/store';
// import { getVacanciesGroup } from '../redux/slice/vacanciesGroupSlice';
// import { useParams } from 'react-router-dom';
import FavoritesCardList from '../pages/favoriteCardList';
import DeleteVacanciesModal from '../components/Modals/DeleteVacanciesModal/DeleteVacanciesModal';
import ResponseCardList from '../pages/responseCardList/ResponseCardList';
import vacanciesId from '../utils/vacanciesId.json';

export default function VacanciesLayout() {
  const vacancies = useAppSelector(vacanciesIdSelect);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  // const dispatch = useAppDispatch();
  // const { id } = useParams();

  // useEffect(() => {
  //   dispatch(getVacanciesGroup(vacancies?.id));
  // }, [dispatch]);
  const [selectVacanciesMok, setSelectVacanciesMok] = useState(vacanciesId);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', }}>
        <VacanciesMenu />
        <Stack
          display={'flex'}
          flexDirection={'column'}
          
          gap={'10px'}
          sx={{ padding: '40px 40px', width: '100%' }}
        >
          {selectVacanciesMok == null ? (
            <MainPage />
          ) : (
            <>
              <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
                <Typography
                  fontSize={'32px'}
                  lineHeight={'32PX'}
                  fontWeight={'500'}
                >
                  {selectVacanciesMok.name} Junior-разработчик
                </Typography>
                <Box sx={{display:'flex', gap:'20px'}}>
                  {activeTab == 4 ? (
                    <Button variant='outlined' onClick={handleOpen}>Закрыть вакансию</Button>
                  ): (
                    <></>
                  )}
                  <Button variant='outlined' onClick={handleOpen}>Закрыть вакансию</Button>
                  <DeleteVacanciesModal open={open} handleClose={handleClose} />
                </Box>
              </Box>
              <CustomizedTabs onTabChange={setActiveTab} />
              <Stack
                display={'flex'}
                flexDirection={'row'}
                gap={'6px'}
                sx={{ paddingRight: '60px' }}
                justifyContent={'flex-end'}
              >
                <FilterRespond>
                  <img
                    src={setting}
                    alt={'текст'}
                    style={{ cursor: 'pointer' }}
                  />
                  <Button sx={{ color: '#1A1B22' }}>Фильтры</Button>
                </FilterRespond>
              </Stack>

              {activeTab === 0 && <Vacancies />}
              {activeTab === 1 && <Vacancies />}
              {activeTab === 2 && <MainPage />}
              {activeTab === 3 && <VacanciesInfo />}
            </>
          )}
        </Stack>
      </Box>
    </>
  );
}
