import WrapperModals from '../WrapperModal/WrapperModal';
import { Stack, Typography, Button } from '@mui/material';

type CloseVacanciesModalProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
};

export default function CloseVacanciesModal({ open, handleClose }: CloseVacanciesModalProps) {
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
            <Button variant="outlined">Отмена</Button>
            <Button variant="default">Закрыть вакансию</Button>
          </Stack>
        </Stack>
      </WrapperModals>
    </>
  );
}
