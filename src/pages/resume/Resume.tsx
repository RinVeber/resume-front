import { Box } from '@mui/material';
import { getResume } from '../../redux/slice/resumeSlice';
import { useParams } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Loading from '../../components/Loading';

const HeaderResume = lazy(() => import('./HeaderResume/HeaderResume'));
const BlocksInfo = lazy(() => import('./BlocksInfo/BlocksInfo'));
const ErrorServer = lazy(() => import('../../components/Error'))

export default function Resume() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.resume);

  React.useEffect(() => {
    dispatch(getResume(id));
  }, [dispatch,]);

  return (
    <>
      {status == 'loading' && <Loading  />}
      <Box
        sx={{
          // maxWidth: '1190px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '40px',
          padding: '0 40px 0 0',
          backgroundColor: '#F9FAFB',
        }}
      >
        <ErrorServer />


        {/* <Suspense fallback={<Loading />}>
        {status == 'error' && <ErrorServer />}
        {status == 'success' && <HeaderResume />}
        {status == 'success' && <BlocksInfo />}
        </Suspense> */}
      </Box>
    </>
  );
}



