import { Stack, Typography } from '@mui/material';

interface BlockInfoProps {
  titleBlock: string;
  title: string;
  subtitle: string;
  first: string;
  second?: string;
  skills?: Array<{
    name: string
  }>;
 type?: 'skills',
}

export default function BlockInfo({
  titleBlock,
  title,
  subtitle,
  first,
  second,
  type,
  skills
}: BlockInfoProps) {
  return (
    <Stack
      sx={{backgroundColor: '#FFFFFF', borderRadius: '6px', padding: '36px 137px 36px 36px' }}
      flexDirection={'column'}
      gap={'24px'}
    >
      <Typography sx={{ fontWeight: '600', lineHeight: '24px' }} variant={'h3'}>
        {titleBlock}
      </Typography>
      <Stack flexDirection={'column'} gap={'8px'}>
        <Typography variant={'h4'}>{title}</Typography>
        <Typography variant={'h4'} sx={{ color: '#797981' }}>
          {first}
        </Typography>
      </Stack>
      <Stack flexDirection={'column'} gap={'8px'}>
        <Typography variant={'h4'}>{subtitle}</Typography>
        <Stack flexDirection={'row'} gap={'3px'}>
        {type == 'skills' && skills!.map((item, index) => {
            return (
           <Typography key={index} variant={'h4'} sx={{ color: '#797981',}}>{item.name}, </Typography>
            )
          })}
        </Stack>
        <Typography variant={'h4'} sx={{ color: '#797981' }}>
       
          {second}
          
        </Typography>
      </Stack>
    </Stack>
  );
}
