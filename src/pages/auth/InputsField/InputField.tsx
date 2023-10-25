import { Typography, Stack, Checkbox, Box, Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { FormAuth } from '../libs/ValidSchema';
import InputLayout from './InputLayout/InputLayout';
import { SlideForgot } from '../../../components/SlideBar';

export default function InputField() {
  const {
    formState: { isValid },
  } = useFormContext<FormAuth>();

  return (
    <>
      <Typography variant={'h2'} sx={{ margin: '0 auto' }}>
        Войти в аккаунт
      </Typography>
      <InputLayout />
      <Stack
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <Checkbox
            sx={{
              color: '#1D6BF3',
              '&.Mui-checked': {
                color: '#1D6BF3',
              },
              '& .MuiSvgIcon-root': { fontSize: 24 },
            }}
          />
          <Typography variant="h6" sx={{ color: '#797981' }}>
            Запомнить
          </Typography>
        </Box>

        <SlideForgot>
          <Typography variant="h6" sx={{ color: '#5A9BFF', cursor: 'pointer' }}>
            Не помню пароль
          </Typography>
        </SlideForgot>
      </Stack>
      <Button
        type="submit"
        disabled={!isValid}
        sx={{ height: '50px', fontWeight: '500' }}
        variant="default"
      >
        Войти
      </Button>
    </>
  );
}
