import { Stack, Button, Typography } from "@mui/material"
import del from '../../../../assets/delete.svg';

export default function BlockButtons() {
  return (
    <Stack mt={'59px'} flexDirection={'column'} gap={'36px'}>
    <Stack flexDirection={'row'} gap={'32px'} justifyContent={'center'}>
      <Button
        sx={{
          fontSize: '16px',
          '&:hover': { bgcolor: '#1D6BF3' },
          bgcolor: '#5A9BFF',
          color: '#FFFFFF',
          padding: '15px 81px',
        }}
      >
        Пригласить
      </Button>
      <Button
        sx={{
          fontSize: '16px',
          '&:focus': {
            bgcolor: '#1D6BF3',
            border: '1px solid transparent',
            color: '#FFFFFF',
          },
          '&:hover': {
            bgcolor: '#1D6BF3',
            border: '1px solid transparent',
            color: '#FFFFFF',
          },

          padding: '15px 81px',
          color: '#1D6BF3',
          border: '1px solid #1D6BF3',
        }}
      >
        В избранное
      </Button>
    </Stack>
    <Button
      sx={{
        fontSize: '14px',
        '&:hover': {
          borderRadius: '16px',
          backgroundColor: 'rgba(29, 107, 243, 0.11)',
        },
      }}
    >
      <img src={del} alt="delete" />
      <Typography sx={{ marginLeft: '4px' }}>
        Отказать кандидату
      </Typography>
    </Button>
  </Stack>
  )
}
