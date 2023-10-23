import React from 'react';
import { Grid } from '@mui/material';

import Card from './Card/Card';
import { dataMokCardVacancies } from '../../utils/mokData';

export default function CardList() {
  return (
    <Grid mt={'20px'} maxWidth={'1100px'}  container rowGap={'20px'} columnGap={'20px'}>
      {dataMokCardVacancies.map((item) => {
        return <Card card={item} key={item.id} />;
      })}
    </Grid>
  );
}
