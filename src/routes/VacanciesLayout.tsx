import { Outlet } from 'react-router-dom';
import VacanciesMenu from '../components/vacanciesMenu/vacanciesMenu';
import Box from '@mui/material/Box';

export default function VacanciesLayout() {
  return (
    <>
      <Box>
        <VacanciesMenu />
        <Outlet />
      </Box>
    </>
  );
}
