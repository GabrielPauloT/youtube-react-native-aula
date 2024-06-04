export enum TrendingEnum {
  now = 'Now',
  music = 'Music',
  games = 'Games',
  movies = 'Movies',

  reactRouters = 'React Routers',
  infoWeek = 'Info Week',
  live = 'Live',
  gadgets = 'Gadgets',
  programming = 'Programming',
  podcasts = 'Podcasts',
  computers = 'Computers',
  others = 'Others',
}

export type VideoTrendResponse = {
  data: Daum[];
  msg: string;
};

export type Daum = {
  videoId: string;
  title: string;
  channelTitle: string;
  channelId: string;
  description: string;
  viewCount: string;
  publishedText: string;
  lengthText: string;
  thumbnail: Thumbnail[];
  richThumbnail?: RichThumbnail[];
  channelThumbnail: ChannelThumbnail[];
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type RichThumbnail = {
  url: string;
  width: number;
  height: number;
};

export type ChannelThumbnail = {
  url: string;
  width: number;
  height: number;
};
