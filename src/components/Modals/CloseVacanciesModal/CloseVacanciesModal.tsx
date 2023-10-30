import WrapperModals from '../WrapperModal/WrapperModal';
import { Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type CloseVacanciesModalProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
};

export default function CloseVacanciesModal({ open, handleClose }: CloseVacanciesModalProps) {
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
              Закрыть вакансию
            </Typography>
            <Typography component={'h4'} sx={{color: 'rgba(121, 121, 129, 1)'}}>Вакансия будет закрыта и перемещена в Архив</Typography>
          </Stack>
          <Stack display={'flex'} flexDirection={'row'} gap={'20px'}>
            <Button variant="outlined" onClick={() => handleClose()}>Отмена</Button>
            <Button variant="default" onClick={() => navigate(-1)}>Закрыть вакансию</Button>
          </Stack>
        </Stack>
      </WrapperModals>
    </>
  );
}
