import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Navbar />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
