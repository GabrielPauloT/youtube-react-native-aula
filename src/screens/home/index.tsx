import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { TrendCategory } from './trend-category';
import { shortVideos } from '../../constants/';
import { themeColors } from '../../theme/index';

import { ShortVideoCard } from '~/components/short-video-card';
import { Spinner } from '~/components/spinner';
import { VideoCard } from '~/components/video-card';
import { TrendingEnum, VideoTrendResponse } from '~/services/types';
import { fetchTrendingVideos } from '~/services/youtube';

export function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<TrendingEnum>(TrendingEnum.now);
  const [videos, setVideos] = useState<VideoTrendResponse['data']>([]);
  const [videos1, setVideos1] = useState<VideoTrendResponse['data']>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [activeCategory]);

  const fetchData = async () => {
    const data = await fetchTrendingVideos(activeCategory);
    setIsLoading(false);
    setVideos(data);
  };

  useEffect(() => {
    const newVideos = videos.slice(1);
    setVideos1(newVideos);
  }, [videos]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColors.bg }]}>
      {/* Logo e ícone de perfil */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/icons/youtubeIcon.png')} style={styles.logo} />
          <Text style={styles.logoText}>YouTube</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon.Cast stroke="white" strokeWidth={1.2} height={22} style={styles.icon} />
          <Icon.Bell stroke="white" strokeWidth={1.2} height={22} style={styles.icon} />
          <Icon.Search stroke="white" strokeWidth={1.2} height={22} style={styles.icon} />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Categorias */}

        <TrendCategory activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        {isLoading ? (
          <View>
            <Spinner />
          </View>
        ) : (
          <>
            {/* Vídeo Sugerido */}
            {Boolean(videos.length) && (
              <VideoCard
                channelThumbnail={videos[0].channelThumbnail[0].url}
                channelTitle={videos[0].channelTitle}
                title={videos[0].title}
                lengthText={videos[0].lengthText}
                publishedText={videos[0].publishedText}
                thumbnail={videos[0].thumbnail[0].url}
                viewCount={videos[0].viewCount}
              />
            )}

            {/* Shorts */}
            <View style={styles.shortsContainer}>
              <View style={styles.shortsHeader}>
                <Image
                  source={require('../../../assets/icons/shortsIcon.png')}
                  style={styles.shortsIcon}
                />
                <Text style={styles.shortsText}>Shorts</Text>
              </View>
              <ShortVideoCard data={shortVideos} />
            </View>

            {/* Lista de Vídeos */}
            <FlatList
              scrollEnabled={false}
              data={videos1}
              renderItem={({ item }) => (
                <VideoCard
                  channelThumbnail={item.channelThumbnail[0].url}
                  channelTitle={item.channelTitle}
                  title={item.title}
                  lengthText={item.lengthText}
                  publishedText={item.publishedText}
                  thumbnail={item.thumbnail[0].url}
                  viewCount={item.viewCount}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
