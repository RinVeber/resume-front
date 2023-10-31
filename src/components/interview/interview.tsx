import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { dataMokCardVacancies } from '../../utils/mokData';
import { useAppSelector } from '../../redux/store';
import { Skeleton } from '@mui/material';
import { Suspense } from 'react';
import Card from '../../pages/responseCardList/Card/Card'


const Interview = () => {

    const { status, data: currentListCard } = useAppSelector(
        (state) => state.cardGroup,
    );

    return (
        <Box sx={{ m: '39px 30px 0' }}>
            <Typography fontSize={'18px'} lineHeight={'24px'} fontWeight={'700'}>Приглашенные на интервью</Typography>
            <Grid mt={'20px'} maxWidth={'316px'} container rowGap={'20px'} columnGap={'20px'}>
                {status == 'success' && (
                    <Suspense fallback={<Skeleton />}>
                        {currentListCard?.response
                            .slice()
                            .sort((a, b) => b.similarity - a.similarity)
                            .map((item) => {
                                return <Card card={item} key={item.id} />;
                            })}
                    </Suspense>
                )}
            </Grid>
        </Box>
    )
}

export default Interview;