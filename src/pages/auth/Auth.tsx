import { Box } from '@mui/material';
import InputField from './InputsField/InputField';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authForm, FormAuth } from './libs/ValidSchema';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/routes/paths';

export default function Auth() {
  const methods = useForm<FormAuth>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(authForm),
    mode: 'all',
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormAuth> = async (data) => {
    console.log(data);
    navigate(paths.main);
  };
  return (

    <FormProvider {...methods}>
      <Box
        sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <InputField />
      </Box>
    
    </FormProvider>
 
  );
}
