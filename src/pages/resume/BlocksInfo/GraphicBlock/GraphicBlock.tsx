import { Stack, Button, Typography, Box, Divider } from '@mui/material';
import picture from '../../../../assets/picture.png';
import { Tooltip } from '@mui/material';
import { useAppSelector } from '../../../../redux/store';
import { Link } from 'react-router-dom';

export default function GraphicBlock() {
  const {data: currentResume } = useAppSelector((state) => state.resume);


  return (
    <>
      <Stack
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: '6px',
          padding: '36px 100px 36px 36px',
        }}
      >
        <Stack flexDirection={'row'} gap={'68px'}>
          <Link to={currentResume!.portfolio}>
            <Button
              sx={{
                color: '#5A9BFF',
                fontSize: '18px',
                fontWeight: '600',
                '&:focus': {
                  color: '#1D6BF3',
                },
                '&:hover': {
                  color: '#1D6BF3',
                  bgcolor: 'transparent',
                },
              }}
            >
              Портфолио
            </Button>
          </Link>

          <Divider orientation="vertical" flexItem />
          <Link to={currentResume!.cv}>
            <Button
            // onClick={(e) => handleDownloadCV(e)}
              sx={{
                color: '#5A9BFF',
                fontSize: '18px',
                fontWeight: '600',

                '&:focus': {
                  color: '#1D6BF3',
                },
                '&:hover': {
                  color: '#1D6BF3',
                  bgcolor: 'transparent',
                },
              }}
            >
              Резюме
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack
        mt={'20px'}
        flexDirection={'column'}
        gap={'22px'}
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: '6px',
          padding: '36px 100px 36px 36px',
        }}
      >
        <Typography variant="h3" fontWeight={'600'}>
          Профессиональные компетенции
        </Typography>
        <Box>
          <Tooltip title={'В планах...'}>
            <img src={picture} alt="картинка" />
          </Tooltip>
        </Box>
      </Stack>
    </>
  );
}
