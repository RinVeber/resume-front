import WrapperModals from '../WrapperModal/WrapperModal';
import { Stack, Typography, Button } from '@mui/material';

type PublicVacanciesModalProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
};

export default function PublicVacanciesModal({
  open,
  handleClose,
}: PublicVacanciesModalProps) {
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
            <Button variant="outlined">Отмена</Button>
            <Button variant="default">Опубликовать</Button>
          </Stack>
        </Stack>
      </WrapperModals>
    </>
  );
}
