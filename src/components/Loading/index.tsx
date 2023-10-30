import { Box, CircularProgress } from '@mui/material';


export default function Loading() {
  return (
    <Box sx={{
        position: 'absolute',

        top: '50vh',
        left: '50vh'
    }}>
<CircularProgress />

    </Box>
  )
}
