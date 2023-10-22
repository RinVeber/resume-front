import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: '#1A1B22',
        width: '1440px',
        display: 'flex',
        height: '60px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            width: 280,
            height: 28,
          }}
        >
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{
              flex: 1,
            }}
            placeholder="Поиск"
            inputProps={{ 'aria-label': 'Поиск' }}
          />
        </Paper>
      </Box>
    </Box>
  );
}
