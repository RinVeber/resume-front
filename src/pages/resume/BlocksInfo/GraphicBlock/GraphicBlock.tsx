import { Stack, Button, Typography, Box, Divider } from '@mui/material';
import picture from '../../../../assets/picture.png';
import { Tooltip } from '@mui/material';

export default function GraphicBlock() {
  return (
    <>
      <Stack
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: '6px',
          padding: '36px 100px 36px 36px',
        }}
      >
        <Stack flexDirection={'row'} gap={'68px'}>
          <Button
            sx={{
              color: '#5A9BFF',
              fontSize: '18px',
              fontWeight: '600',
              '&:focus': {
                color: '#1D6BF3',
              },
              '&:hover': {
                color: '#1D6BF3',
                bgcolor: 'transparent',
              },
            }}
          >
            Портфолио
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button
            sx={{
              color: '#5A9BFF',
              fontSize: '18px',
              fontWeight: '600',

              '&:focus': {
                color: '#1D6BF3',
              },
              '&:hover': {
                color: '#1D6BF3',
                bgcolor: 'transparent',
              },
            }}
          >
            Резюме
          </Button>
        </Stack>
      </Stack>
      <Stack
        mt={'20px'}
        flexDirection={'column'}
        gap={'22px'}
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: '6px',
          padding: '36px 100px 36px 36px',
        }}
      >
        <Typography variant="h3" fontWeight={'600'}>
          Профессиональные компетенции
        </Typography>
        <Box>
          <Tooltip title={'В планах...'}>
            <img src={picture} alt="картинка" />
          </Tooltip>
        </Box>
      </Stack>
    </>
  );
}
