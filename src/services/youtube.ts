import axios from 'axios';

import { TrendingEnum } from './types';

export const fetchTrendingVideos = async (typeTrending: TrendingEnum) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
    params: { geo: 'US', lang: 'en', type: typeTrending.toLowerCase() },
    headers: {
      'X-RapidAPI-Key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.log('error: ', error?.message);
    return [];
  }
};
