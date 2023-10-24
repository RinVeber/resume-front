import React from 'react';
import {
  Typography,
  Stack,
  TextField,
  Checkbox,
  Box,
  Button,
  InputAdornment,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import { FormAuth } from '../libs/ValidSchema';

import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';

export default function InputField() {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const {
    control,
    formState: { errors, isValid },
  } = useFormContext<FormAuth>();

  return (
    <>
      <Typography variant={'h2'} sx={{ margin: '0 auto' }}>
        Войти в аккаунт
      </Typography>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ minHeight: '80px' }}
            placeholder="Почта"
            {...field}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
        )}
      />
      <Stack display={'flex'} flexDirection={'column'} gap={'8px'}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '80px' }}
              placeholder="Пароль"
              type={!showPassword ? 'text' : 'password'}
              {...field}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {!showPassword ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
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
          <Typography variant="h6" sx={{ color: '#5A9BFF' }}>
            Не помню пароль
          </Typography>
        </Stack>
        <Button
          type="submit"
          disabled={!isValid}
          sx={{ height: '50px', fontWeight: '500' }}
          variant="default"
        >
          Войти
        </Button>
      </Stack>
    </>
  );
}
