import { Typography } from '@mui/material';
type ChipProps = {
  chip: {

    name: string;
  };
};

export default function Chips({ chip }: ChipProps) {
  return (
    <Typography
      fontSize={'11px'}
      p={'5px'}
      sx={{color: '#1A1B22'}}
      bgcolor={'#DDE0E4'}
      borderRadius={'4px'}
    >
      {chip.name}
    </Typography>
  );
}
