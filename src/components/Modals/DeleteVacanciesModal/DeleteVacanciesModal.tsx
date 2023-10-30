import WrapperModals from '../WrapperModal/WrapperModal';
import { Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store';
import { vacanciesIdSelect } from '../../../redux/getVacanciesId/getVacanciesId';

type DeleteVacanciesModalProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
};

export default function DeleteVacanciesModal({ open, handleClose }: DeleteVacanciesModalProps) {
  const navigate = useNavigate();
  const vacancy = useAppSelector(vacanciesIdSelect);

  const resourceUrl = `http://career-tracker.duckdns.org/api/v1/vacancies/${vacancy?.id}/`;

  const handleDeleteVacancy = async () => {
    await fetch(resourceUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  };
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
            <Typography component={'h4'} sx={{ color: 'rgba(121, 121, 129, 1)' }}>Вакансия будет закрыта и перемещена в Архив</Typography>
          </Stack>
          <Stack display={'flex'} flexDirection={'row'} gap={'20px'}>
            <Button variant="red"
              onClick={() => {
                navigate(-1)
                handleDeleteVacancy()
              }}
            >Удалить вакансию</Button>
            <Button variant="default"
              onClick={() =>
                navigate(-1)
              }
            >Сохранить</Button>
          </Stack>
        </Stack>
      </WrapperModals >
    </>
  );
}
