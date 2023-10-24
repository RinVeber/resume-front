import { Stack, Button, Typography } from '@mui/material';
import del from '../../../../assets/delete.svg';

export default function BlockButtons() {
  return (
    <Stack mt={'59px'} flexDirection={'column'} gap={'36px'}>
      <Stack flexDirection={'row'} gap={'32px'} justifyContent={'center'}>

        <Button sx={{padding: '15px 81px'}} variant={'default'}>Пригласить</Button>
        <Button sx={{padding: '15px 81px'}}  variant={'outlined'}>В избранное</Button>
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
        <Typography sx={{ marginLeft: '4px' }}>Отказать кандидату</Typography>
      </Button>
    </Stack>
  );
}
