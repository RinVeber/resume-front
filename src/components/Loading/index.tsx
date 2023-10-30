import { Box, CircularProgress } from '@mui/material';


export default function Loading() {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
    
    }}>
<CircularProgress />

    </Box>
  )
}
