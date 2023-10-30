import React from 'react';
import def from '../../../assets/default.png';
import { Box, Paper, Stack, Typography } from '@mui/material';
import {Tooltip} from '@mui/material';

export default function CardProfile() {
  return (
    <Tooltip title={'Ваша компания...'}>  
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        gap: '5px',
        backgroundColor: 'white',
        width: 110,
        height: 96,
      }}
    >
  
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <img
          src={def}
          alt={'avatar'}
          style={{ width: '32px', height: '32px', marginTop: '5px' }}
        />
      </Box>
      <Stack
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        
        p={'0 8px'}
      >
       
        <Typography sx={{ fontSize: '16px' }}>Компания</Typography>
  
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '12px', color: '#7A7A7A' }}>
            ООО Квант
          </Typography>
        </Box>
  
      </Stack>
    </Paper>
    </Tooltip>
  );
}
