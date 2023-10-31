import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';

export const ListItemButtonCustom = styled(ListItemButton)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#F1F6FF',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#F1F6FF',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(241, 246, 255, 0.5)',
    },
  });