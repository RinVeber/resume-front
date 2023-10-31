import { Grid } from '@mui/material';
import { useAppSelector } from '../../redux/store';
import { Skeleton } from '@mui/material';
import { lazy, Suspense } from 'react';


const Card = lazy(() => import('./Card/Card'));

export default function ResponseCardList() {
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
          {currentListCard?.response
            .slice() // Создаем копию массива, чтобы не изменять исходный
            .sort((a, b) => b.similarity - a.similarity) // Сортируем по убыванию симуляр
            .map((item) => {
              console.log(item);
              return <Card card={item} key={item.id} />;
            })}
        </Suspense>
      )}
    </Grid>
  );
}
