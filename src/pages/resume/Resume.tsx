import { Box } from '@mui/material';
import HeaderResume from './HeaderResume/HeaderResume';
import BlocksInfo from './BlocksInfo/BlocksInfo';
import { getResume } from '../../redux/slice/resumeSlice';
import { useParams } from 'react-router-dom';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export default function Resume() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getResume(id))
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
      <HeaderResume />
      <BlocksInfo />

    </Box>
  );
}


// export const ResumeLoader = async () => {
// const res = await fetch(`http://career-tracker.duckdns.org/api/v1/vacancies/`);
// return res.json();
// }


// export const ResumeLoader = async () => {
// console.log('что тут у нас?');
// return 2;
// }