import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface BackgroundLetterAvatarsProps {
  nameUser: string;
  sizes: string | number;
  textSize: string;
}

export default function BackgroundLetterAvatars({
  nameUser,
  sizes,
  textSize,
}: BackgroundLetterAvatarsProps) {
  const colorArray = [
    '#87CC9E',
    '#7F67D2',
    '#FFCE92',
    '#C2E5CE',
    '#CCC2ED',
    '#FFE1BD',
    '#FFDDE5',
    '#FFF9D3',
    '#FFBFFDDE',
    '#A9917542',
    '#ACCCFF',
  ];

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Случайный цвет

    // let color = '#';
    // for (i = 0; i < 3; i += 1) {
    //   const value = (hash >> (i * 8)) & 0xff;
    //   color += `00${value.toString(16)}`.slice(-2);
    // }

    // Случайный цвет из выборки цветов в UI-kit в фигме
    const randomColor = Math.floor(Math.random() * colorArray.length);
    const color = colorArray[randomColor];
    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        width: sizes,
        height: sizes,
        fontSize: textSize,
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(nameUser)} />
    </Stack>
  );
}
