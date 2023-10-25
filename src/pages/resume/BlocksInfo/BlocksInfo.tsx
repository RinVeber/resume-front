import { Stack, Box } from '@mui/material';
import BlockInfo from './BlockInfo/BlockInfo';
import { mokDataResume } from '../../../utils/mokData';
import GraphicBlock from './GraphicBlock/GraphicBlock';
import BlockButtons from './BlockButtons/BlockButtons';

export default function BlocksInfo() {
  return (
    <Stack
      flexDirection={'row'}
      gap={'20px'}
      sx={{boxSizing: 'border-box', padding: '0 0 160px 40px' }}
    >
      <Stack flexDirection={'column'} gap={'20px'}>
        <Stack flexDirection={'row'} gap={'20px'}>
          <BlockInfo
            second={mokDataResume.format}
            first={mokDataResume.city}
            titleBlock={'Локация'}
            title={'Город'}
            subtitle={'Формат работы'}
          />
          <BlockInfo
            second={mokDataResume.incomeLevel}
            first={mokDataResume.experience}
            title={'Опыт работы'}
            titleBlock={'Опыт'}
            subtitle={'Уровень дохода'}
          />
        </Stack>
        <BlockInfo
          second={mokDataResume.skills}
          first={mokDataResume.language}
          title={'Язык'}
          titleBlock={'Скиллы'}
          subtitle={'Ключевые программы'}
        />
        <BlockInfo
          second={mokDataResume.courses}
          first={mokDataResume.univer}
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
