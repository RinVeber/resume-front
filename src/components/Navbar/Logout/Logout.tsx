import { Stack, Typography } from "@mui/material";
import personal from '../../../assets/personal.svg';
import phone from '../../../assets/phone.svg';
import exit from '../../../assets/exit.svg';

export default function Logout() {
  return (
    <Stack
    display={'flex'}
    flexDirection={'column'}
    margin={'0 31px 30px 12px'}
    gap={'16px'}
  >
    <Stack
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      gap={'4px'}
    >
      <img src={personal} alt="profile" />
      <Typography
        sx={{ color: '#B5B5B7' }}
        fontWeight={'400'}
        fontSize={'13px'}
      >
        Профиль
      </Typography>
    </Stack>
    <Stack
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      gap={'4px'}
    >
      <img src={phone} alt="phone" />
      <Typography
        sx={{ color: '#B5B5B7' }}
        fontWeight={'400'}
        fontSize={'13px'}
      >
        Поддержка
      </Typography>
    </Stack>
    <Stack
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      gap={'4px'}
    >
      <img src={exit} alt="exit" />
      <Typography
        sx={{ color: '#B5B5B7' }}
        fontWeight={'400'}
        fontSize={'13px'}
      >
        Выход
      </Typography>
    </Stack>
  </Stack>
  )
}
