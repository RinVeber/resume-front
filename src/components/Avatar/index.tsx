import BackgroundLetterAvatars from './AvatarLetter';
import AvatarImg from './AvatarImg';

interface AvatarProps {
  sizes: string;
  nameUser: string;
  textSize: string;
  img: string;
}

export default function Avatar({
  sizes,
  img,
  textSize,
  nameUser,
}: AvatarProps) {
  if ((img == '')) {
    return (
      <BackgroundLetterAvatars
        nameUser={nameUser}
        sizes={sizes}
        textSize={textSize}
      />
    );
  } else {
    return <AvatarImg sizes={sizes} img={img} />;
  }
}
