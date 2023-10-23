import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const VacanciesMenu = () => {
  return (
    <Box
      sx={{
        width: '237px',
        paddingTop: '40px',
        paddingLeft: '24px',
      }}
    >
      <Button
        sx={{
          width: '162px',
          height: '40px',
          fontFamily: 'YS-Text, sans-serif',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '20px',
          color: 'white',
          backgroundColor: '#5A9BFF',
          borderRadius: '6px',
          padding: '0',
          '&:hover': {
            color: 'black',
          },
        }}
      >
        Создать вакансию
      </Button>
    </Box>
  );
};

export default VacanciesMenu;
