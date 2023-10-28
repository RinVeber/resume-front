import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const BpIcon = styled('span')(({}) => ({
  width: '24px',
  height: '24px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Crect x='0.5' y='0.5' width='23' height='23' rx='3.5' fill='white' stroke='%231D6BF3'/%3E%3C/svg%3E")`,
}));

const BpCheckedIcon = styled(BpIcon)({
  '&:before': {
    display: 'block',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1.5' y='0.5' width='23' height='23' rx='3.5' fill='white' stroke='%231D6BF3'/%3E%3Cpath d='M10.3043 15.919L6.38525 12C6.19773 11.8125 5.94342 11.7072 5.67825 11.7072C5.41309 11.7072 5.15878 11.8125 4.97125 12C4.78378 12.1875 4.67847 12.4418 4.67847 12.707C4.67847 12.9722 4.78378 13.2265 4.97125 13.414L8.89025 17.333C9.07598 17.5188 9.2965 17.6662 9.5392 17.7667C9.7819 17.8673 10.042 17.9191 10.3048 17.9191C10.5675 17.9191 10.8276 17.8673 11.0703 17.7667C11.313 17.6662 11.5335 17.5188 11.7193 17.333L20.9713 8.08099C21.1587 7.89347 21.264 7.63916 21.264 7.37399C21.264 7.10883 21.1587 6.85452 20.9713 6.66699C20.7837 6.47952 20.5294 6.37421 20.2643 6.37421C19.9991 6.37421 19.7448 6.47952 19.5573 6.66699L10.3043 15.919Z' fill='%231D6BF3'/%3E%3C/svg%3E%0A")`,
    content: '""',
  },
  'input:hover ~ &': {
    /* backgroundColor: '#BDBDBD' */
  },
});

function CustomCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{ width: 40, height: 40, '&:hover': { bgcolor: 'transparent' } }}
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

export default CustomCheckbox;
