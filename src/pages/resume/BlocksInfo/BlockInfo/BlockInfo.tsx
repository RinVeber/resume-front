import { Stack, Typography } from '@mui/material';

interface BlockInfoProps {
  titleBlock: string;
  title: string;
  subtitle: string;
  first: string;
  second: string;
}

export default function BlockInfo({
  titleBlock,
  title,
  subtitle,
  first,
  second,
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
        <Typography variant={'h4'} sx={{ color: '#797981' }}>
          {second}
        </Typography>
      </Stack>
    </Stack>
  );
}
