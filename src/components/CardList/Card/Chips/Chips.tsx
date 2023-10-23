import { Typography } from '@mui/material';
type ChipProps = {
  chip: {
    id: number;
    title: string;
  };
};

export default function Chips({ chip }: ChipProps) {
  return (
    <Typography
      key={chip.id}
      fontSize={'11px'}
      p={'5px'}
      bgcolor={'#EAEAEA'}
      borderRadius={'6px'}
    >
      {chip.title}
    </Typography>
  );
}
