import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import { FormAuth } from '../../libs/ValidSchema';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';

export default function InputLayout() {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const {
    control,
    formState: { errors },
  } = useFormContext<FormAuth>();

  return (
    <>
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
    </>
  );
}
