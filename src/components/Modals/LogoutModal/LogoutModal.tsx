import WrapperModals from '../WrapperModal/WrapperModal';
import { Stack, Typography, Button } from '@mui/material';

type LogoutModalProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
};

export default function LogoutModal({ open, handleClose }: LogoutModalProps) {
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
            <Button variant="default">Выйти</Button>
          </Stack>
        </Stack>
      </WrapperModals>
    </>
  );
}
