import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Header() {
  const [queryParams, setQueryParams] = useState('');
  
  const handleEnterKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchParam = new URLSearchParams({ searchParams: queryParams });
      window.location.assign('/search?' + searchParam);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1A1B22',
        width: 'calc(100vw - 134px)',
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
              onChange={(e) => setQueryParams(e.target.value)}
              onKeyPress={handleEnterKeyPress}
            />
        </Paper>
      </Box>
    </Box>
  );
}
