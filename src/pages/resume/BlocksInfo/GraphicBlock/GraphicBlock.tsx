import { Stack, Button, Typography, Box } from '@mui/material';
import picture from '../../../../assets/picture.png';

export default function GraphicBlock() {
  return (
    <Stack
      flexDirection={'column'}
      gap={'28px'}
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '6px',
        padding: '36px 100px 36px 36px',
      }}
    >
      <Stack flexDirection={'row'} gap={'104px'}>
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
      <Typography variant="h3" fontWeight={'600'}>
        Профессиональные компетенции
      </Typography>
      <Box>
        <img src={picture} alt="картинка" />
      </Box>
    </Stack>
  );
}
