import WrapperModals from '../WrapperModal/WrapperModal';
import { Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/routes/paths';

type LogoutModalProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
};

export default function LogoutModal({ open, handleClose }: LogoutModalProps) {
  const navigate = useNavigate();
  return (
    <>
      <WrapperModals open={open} handleClose={handleClose}>
        <Stack
          display={'flex'}
          flexDirection={'column'}
          justifyContent="flex-start"
          alignItems={'flex-start'}
          gap="16px"
        >
          <Stack display={'flex'} flexDirection={'column'} gap="8px">
            <Typography
              component={'h2'}
              sx={{ fontWeight: '600', lineHeight: '32px' }}
            >
              Выход
            </Typography>
            <Typography component={'h4'} sx={{color: 'rgba(121, 121, 129, 1)'}}>Выйти из учетной записи?</Typography>
          </Stack>
          <Stack display={'flex'} flexDirection={'row'} gap={'20px'}>
            <Button variant="outlined">Остаться</Button>
            <Button variant="default"     onClick={() => navigate(`${paths.auth}`)}>Выйти</Button>
          </Stack>
        </Stack>
      </WrapperModals>
    </>
  );
}
