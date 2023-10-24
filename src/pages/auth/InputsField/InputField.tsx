import {
  Typography,
  Stack,
  TextField,
  Checkbox,
  Box,
  Button,
} from '@mui/material';
import {
  FormProvider,
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authForm, FormAuth } from '../libs/ValidSchema';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/routes/paths';

export default function InputField() {
  const navigate = useNavigate();

  const methods = useForm<FormAuth>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(authForm),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormAuth> = async (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Box
        sx={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Typography variant={'h2'} sx={{ margin: '0 auto' }}>
          Войти в аккаунт
        </Typography>

        <Controller
          name="email"
          control={methods.control}
          render={({ field }) => (
            <TextField
              placeholder="Почта"
              {...field}
              error={!!methods.formState.errors.email}
              helperText={methods.formState.errors.email?.message}
              fullWidth
            />
          )}
        />

        <Stack display={'flex'} flexDirection={'column'} gap={'8px'}>
          <Controller
            name="password"
            control={methods.control}
            render={({ field }) => (
              <TextField
                placeholder="Пароль"
                type="password"
                {...field}
                error={!!methods.formState.errors.password}
                helperText={methods.formState.errors.password?.message}
                fullWidth
              />
            )}
          />
          <Stack
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box
              display={'flex'}
              flexDirection={'row'}
              gap={'6px'}
              alignItems={'center'}
            >
              <Checkbox
                sx={{
                  color: '#1D6BF3',
                  '&.Mui-checked': {
                    color: '#1D6BF3',
                  },
                  '& .MuiSvgIcon-root': { fontSize: 24 },
                }}
              />{' '}
              <Typography variant="h6" sx={{ color: '#797981' }}>
                Запомнить
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#5A9BFF' }}>
              Не помню пароль
            </Typography>
          </Stack>
          <Button
            type="submit"
            disabled={!methods.formState.isValid}
            sx={{ height: '50px' }}
            variant="default"
            onClick={async () => {
              const isValid = await methods.trigger();
              if (isValid) {
                navigate(paths.main);
              }
            }}
          >
            Войти
          </Button>
        </Stack>
      </Box>
    </FormProvider>
  );
}
