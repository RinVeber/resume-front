import { Box } from '@mui/material';

import HeaderResume from './HeaderResume/HeaderResume';

import BlocksInfo from './BlocksInfo/BlocksInfo';

export default function Resume() {
  return (
    <Box
      sx={{
        maxWidth: '1304px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        // padding: '40px 0 0 40px',
        backgroundColor: '#F9FAFB',
      }}
    >
      <HeaderResume />
      <BlocksInfo />

    </Box>
  );
}
