import WrapperModals from '../WrapperModal/WrapperModal';
import { Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type PublicVacanciesModalProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
  onSubmit: () => void;
};

export default function PublicVacanciesModal({
  open,
  handleClose,
  onSubmit
}: PublicVacanciesModalProps) {
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
             Публикация
            </Typography>
            <Typography
              component={'h4'}
              sx={{ color: 'rgba(121, 121, 129, 1)' }}
            >
              Вакансия станет видна всем пользователям. Опубликовать вакансию
              сейчас?
            </Typography>
          </Stack>
          <Stack display={'flex'} flexDirection={'row'} gap={'20px'}>
            <Button variant="outlined" onClick={() => navigate(-1)}>Отмена</Button>
            <Button variant="default"  onClick={onSubmit}>Опубликовать</Button>
          </Stack>
        </Stack>
      </WrapperModals>
    </>
  );
}
