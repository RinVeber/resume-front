import { Stack, Box } from '@mui/material';
import BlockInfo from './BlockInfo/BlockInfo';
import { mokDataResume } from '../../../utils/mokData';
import GraphicBlock from './GraphicBlock/GraphicBlock';
import BlockButtons from './BlockButtons/BlockButtons';
import { useAppSelector } from '../../../redux/store';
import resumeId from '../../../utils/resumeId.json';
import React from 'react';

export default function BlocksInfo() {
  const { data: currentResume } = useAppSelector((state) => state.resume);
  const [resumeMok, setResumeMok] = React.useState(resumeId)
  return (
    <Stack
      flexDirection={'row'}
      gap={'20px'}
      sx={{ boxSizing: 'border-box', padding: '0 0 160px 40px' }}
    >
      <Stack flexDirection={'column'} gap={'20px'}>
        <Stack flexDirection={'row'} gap={'20px'}>
          <BlockInfo
            second={resumeMok!.format}
            first={resumeMok!.location}
            titleBlock={'Локация'}
            title={'Город'}
            subtitle={'Формат работы'}
          />
          <BlockInfo
            second={resumeMok!.salary}
            first={`${resumeMok!.experience} года(лет)`}
            title={'Опыт работы'}
            titleBlock={'Опыт'}
            subtitle={'Уровень дохода'}
          />
        </Stack>
        <BlockInfo
          type={'skills'}
          skills={resumeMok?.skills}
          first={mokDataResume.language}
          title={'Язык'}
          titleBlock={'Скиллы'}
          subtitle={'Ключевые программы'}
        />
        <BlockInfo
          second={resumeMok!.course}
          first={resumeMok!.education}
          title={'Основное'}
          titleBlock={'Образование'}
          subtitle={'Курсы'}
        />
      </Stack>
      <Box>
        <GraphicBlock />
        <BlockButtons />
      </Box>
    </Stack>
  );
}
