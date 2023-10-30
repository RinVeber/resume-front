import { Box } from '@mui/material';
import HeaderResume from './HeaderResume/HeaderResume';
import BlocksInfo from './BlocksInfo/BlocksInfo';
import { getResume } from '../../redux/slice/resumeSlice';
import { useParams } from 'react-router-dom';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {Skeleton} from '@mui/material';
// import { API_BASE_ALL_RESUME_URL } from '../../utils/apiConstants';

export default function Resume() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
const {status} = useAppSelector((state) => state.resume);


  React.useEffect(() => {
    dispatch(getResume(id));
  }, [dispatch]);
  
  
  return (
    <Box
      sx={{
        // maxWidth: '1190px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        padding: '0 40px 0 0',
        backgroundColor: '#F9FAFB',
      }}
    >
      {status == 'loading' &&  <Skeleton />}
      {status == 'success' &&  <HeaderResume />}
      {status == 'success' &&  <BlocksInfo />}
 

    </Box>
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