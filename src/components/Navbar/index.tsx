import { Box, Stack } from '@mui/material';
import SelectedItem from './SelectedItem';
import CardProfile from './CardProfile';

export default function Navbar() {
  return (
    <Box sx={{ height: '100vh', backgroundColor: '#1A1B22', width: '134px' }}>
      <Stack
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        margin={'70px 5px'}
      >
        <CardProfile />
        <SelectedItem />
      </Stack>
    </Box>
  );
}
