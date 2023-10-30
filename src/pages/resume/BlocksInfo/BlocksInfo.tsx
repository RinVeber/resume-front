import { Stack, Box } from '@mui/material';
import BlockInfo from './BlockInfo/BlockInfo';
import { mokDataResume } from '../../../utils/mokData';
import GraphicBlock from './GraphicBlock/GraphicBlock';
import BlockButtons from './BlockButtons/BlockButtons';
import { useAppSelector } from '../../../redux/store';

export default function BlocksInfo() {
  const { data: currentResume } = useAppSelector((state) => state.resume);
  return (
    <Stack
      flexDirection={'row'}
      gap={'20px'}
      sx={{ boxSizing: 'border-box', padding: '0 0 160px 40px' }}
    >
      <Stack flexDirection={'column'} gap={'20px'}>
        <Stack flexDirection={'row'} gap={'20px'}>
          <BlockInfo
            second={currentResume!.format}
            first={currentResume!.location}
            titleBlock={'Локация'}
            title={'Город'}
            subtitle={'Формат работы'}
          />
          <BlockInfo
            second={currentResume!.salary}
            first={`${currentResume!.experience} года(лет)`}
            title={'Опыт работы'}
            titleBlock={'Опыт'}
            subtitle={'Уровень дохода'}
          />
        </Stack>
        <BlockInfo
          type={'skills'}
          skills={currentResume?.skills}
          first={mokDataResume.language}
          title={'Язык'}
          titleBlock={'Скиллы'}
          subtitle={'Ключевые программы'}
        />
        <BlockInfo
          second={currentResume!.course}
          first={currentResume!.education}
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
