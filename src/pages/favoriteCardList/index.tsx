import { Grid } from '@mui/material';
import { useAppSelector } from '../../redux/store';
import { Skeleton } from '@mui/material';
import { lazy, Suspense } from 'react';
import { dataMokCardVacanciesFavorites } from '../../utils/mokData';

const Card = lazy(() => import('./../../components/CardList/Card/Card'));

export default function FavoritesCardList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { status, data: currentListCard } = useAppSelector(
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
      {status == 'success' && (
        <Suspense fallback={<Skeleton />}>
          {dataMokCardVacanciesFavorites.map((item) => {
            return <Card card={item} key={item.id} />;
          })}
        </Suspense>
      )}
    </Grid>
  );
}
