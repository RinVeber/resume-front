import { Grid } from '@mui/material';
import { dataMokCardVacancies } from '../../utils/mokData';
import { useAppSelector } from '../../redux/store';
import { Skeleton } from '@mui/material';
import { lazy, Suspense } from 'react';

const Card = lazy(() => import('../../components/CardList/Card/Card'));

export default function InviteCardList() {
  const { data: currentListCard } = useAppSelector(
    (state) => state.cardGroup,
  );

  return (
    <Grid
      mt={'20px'}
      maxWidth={'1100px'}
      container
      rowGap={'20px'}
      columnGap={'20px'}
    >
      <Suspense fallback={<Skeleton />}>
        {dataMokCardVacancies.map((item) => {
          return <Card card={item} key={item.id} />;
        })}
      </Suspense>
    </Grid>
  );
}
