import { Box, Stack } from '@mui/material';
import SelectedItem from './SelectedItem';
import CardProfile from './CardProfile';
import Logout from './Logout/Logout';

export default function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: '#1A1B22',
        width: '134px',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Stack display={'flex'} alignItems={'center'} margin={'70px 5px'}>
        <CardProfile />
        <SelectedItem />
      </Stack>
      <Box sx={{ mt: 'auto', mb:'0' }}>
        <Logout />
      </Box>
    </Box>
  );
}
