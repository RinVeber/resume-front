import Box from '@mui/material/Box';
import { Typography, Stack } from '@mui/material';
import SearchMenu from '../components/SearchMenu';
import { useState } from 'react';

export default function SearchLayout() {
  const [candidates, setСandidates] = useState<[] | null>(null)
  const searchParam = new URLSearchParams(location.search).get('searchParams');

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <SearchMenu setСandidates={setСandidates} />
        <Stack
          display={'flex'}
          flexDirection={'column'}
          gap={'10px'}
          sx={{ width: '100%' }}
        >
          <Box sx={{
            maxHeight: '112px',
            padding: '40px 40px 32px',
            borderBottom: '1px solid #E6E6E6'
          }}>
            <Typography fontSize={'32px'} lineHeight={'32px'} fontWeight={'500'}>
              Результаты по запросу {searchParam ? '«' + searchParam + '»' : ''}
            </Typography>
          </Box>
          <Box>
            {!candidates && (
              <Box>
                <Typography fontSize={'14px;'} lineHeight={'20px'} fontWeight={'400'} color={'#B5B5B7'} textAlign={'center'}>
                  Ничего не найдено
                </Typography>
                <Typography fontSize={'16px;'} lineHeight={'20px'} fontWeight={'400'} color={'#B5B5B7'} textAlign={'center'} marginTop={'200px'}>
                  К сожалению, поиск не дал результатов. Попробуйте изменить запрос
                </Typography>
              </Box>
            )}
          </Box>
        </Stack>
      </Box>
    </>
  );
}