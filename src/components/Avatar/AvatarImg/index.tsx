import Avatar from '@mui/material/Avatar';

interface AvatarImgProps {
  sizes: string | number;
  img: string;
}

export default function AvatarImg({ sizes, img }: AvatarImgProps) {
  return (
    <Avatar sx={{ width: sizes, height: sizes }} alt="аватар" src={img} />
  );
}
