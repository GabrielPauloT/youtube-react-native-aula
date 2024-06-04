import { ImageSourcePropType } from 'react-native';

export type ShortVideoCardType = {
  id: number;
  title: string;
  viewCount: string;
  image: ImageSourcePropType | undefined;
};
