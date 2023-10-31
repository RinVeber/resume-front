import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import { getVacanciesApi } from '../redux/getVacancies/getVacancies';
import { useAppDispatch } from '../redux/store';

export default function RootLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVacanciesApi());
  }, []);
  
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', m: 'auto 0' }}>
        <Navbar />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
