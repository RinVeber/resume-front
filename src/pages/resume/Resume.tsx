import { Box } from '@mui/material';
import { getResume } from '../../redux/slice/resumeSlice';
import { useParams } from 'react-router-dom';
import React, { lazy } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { CircularProgress } from '@mui/material';
// import { API_BASE_ALL_RESUME_URL } from '../../utils/apiConstants';
import ErrorServer from '../../components/Error';
import Loading from '../../components/Loading';

const HeaderResume = lazy(() => import('./HeaderResume/HeaderResume'));
const BlocksInfo = lazy(() => import('./BlocksInfo/BlocksInfo'));

export default function Resume() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.resume);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    dispatch(getResume(id));
    if (status == 'success') {
      setLoading(true);
    }
    if (status == 'error') {
      setLoading(false);
    }
  }, [dispatch, isLoading]);

  return (
    <>
      {status == 'loading' && <Loading  />}

      <Box
        sx={{
          // maxWidth: '1190px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          padding: '0 40px 0 0',
          backgroundColor: '#F9FAFB',
        }}
      >
        {status == 'error' && <ErrorServer />}
        {status == 'success' && <HeaderResume />}
        {status == 'success' && <BlocksInfo />}
      </Box>
    </>
  );
}

// export async function getResumeСV(file) {
//   const {id} = useParams();

//   const response = await fetch(API_BASE_ALL_RESUME_URL + `/${id}/` +`download_cv/`, {
//     method: 'GET',

//   });
// if(response.status == 200) {
//   const blob = await response.blob();
//   const downloadURL = window.URL.createObjectURL(blob);
//   const link = document.createElement('a');
//   link.href = downloadURL;
//   link.download = file.name;
//   document.appendChild(link);
//   link.click();
//   link.remove();

// }}
// ;
