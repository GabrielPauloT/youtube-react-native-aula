import { ImageSourcePropType } from 'react-native';

export type ShortVideoCardDataType = {
  id: number;
  title: string;
  viewCount: string;
  image: ImageSourcePropType | undefined;
};

export type ShortVideoCardType = {
  data: ShortVideoCardDataType[];
};
