import { Box, CircularProgress } from '@mui/material';


export default function Loading() {
  return (
    <Box sx={{
        position: 'absolute',

        top: '55vh',
        left: '90vh'
    }}>
<CircularProgress />

    </Box>
  )
}
