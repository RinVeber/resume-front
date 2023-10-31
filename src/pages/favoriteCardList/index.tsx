import { Grid } from '@mui/material';
import { Skeleton } from '@mui/material';
import { lazy, Suspense } from 'react';
import { dataMokCardVacanciesFavorites } from '../../utils/mokData';

const Card = lazy(() => import('./../../components/CardList/Card/Card'));

export default function FavoritesCardList() {


  return (
    <Grid
      mt={'20px'}
      maxWidth={'1100px'}
      container
      rowGap={'20px'}
      columnGap={'20px'}
    >
  
        <Suspense fallback={<Skeleton />}>
          {dataMokCardVacanciesFavorites.map((item) => {
            return <Card card={item} key={item.id} />;
          })}
        </Suspense>
    </Grid>
  );
}
