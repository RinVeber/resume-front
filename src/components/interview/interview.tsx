import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '../CardList/Card/Card';
import { Grid } from '@mui/material';
import { dataMokCardVacancies } from '../../utils/mokData';

const Interview = () => {
    return (
        <Box sx={{ m: '39px 30px 0' }}>
            <Typography fontSize={'18px'} lineHeight={'24px'} fontWeight={'700'}>Приглашенные на интервью</Typography>
            <Grid mt={'20px'} maxWidth={'316px'} container rowGap={'20px'} columnGap={'20px'}>
                {dataMokCardVacancies.slice(0, 5).map((item) => {
                    return <Card card={item} key={item.id} />;
                })}
            </Grid>
        </Box>
    )
}

export default Interview;