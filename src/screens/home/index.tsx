import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  //   SafeAreaView,
} from 'react-native';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { categories, shortVideos } from '../../constants/';
import { themeColors } from '../../theme/index';

import { ShortVideoCard } from '~/components/short-video-card';
import { Spinner } from '~/components/spinner';
import { VideoCard } from '~/components/video-card';
import { TrendingEnum } from '~/services/types';
import { fetchTrendingVideos } from '~/services/youtube';

export function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<TrendingEnum>(TrendingEnum.now);
  const [videos, setVideos] = useState([]);
  const [videos1, setVideos1] = useState([]);
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
    <View style={[styles.container, { backgroundColor: themeColors.bg }]}>
      <StatusBar style="light" />

      {/* Logo e ícone de perfil */}
      <SafeAreaView style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/icons/youtubeIcon.png')} style={styles.logo} />
          <Text style={styles.logoText}>YouTube</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon.Cast stroke="white" strokeWidth={1.2} height={22} style={styles.icon} />
          <Icon.Bell stroke="white" strokeWidth={1.2} height={22} style={styles.icon} />
          <Icon.Search stroke="white" strokeWidth={1.2} height={22} style={styles.icon} />
        </View>
      </SafeAreaView>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Categorias */}
        <View style={styles.categoryContainer}>
          <ScrollView
            style={styles.categoryScroll}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {TrendingEnum &&
              Object.values(TrendingEnum).map((category, index) => {
                const isActive = category === activeCategory;
                return (
                  <TouchableOpacity
                    onPress={() => setActiveCategory(category)}
                    key={index}
                    style={[
                      styles.categoryButton,
                      { backgroundColor: isActive ? 'white' : 'rgba(255,255,255,0.1)' },
                    ]}>
                    <Text style={[styles.categoryText, isActive && styles.activeCategoryText]}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
        {isLoading ? (
          <View>
            <Spinner />
          </View>
        ) : (
          <>
            {/* Vídeo Sugerido */}
            {videos && videos[0] && <VideoCard video={videos[0]} />}

            {/* Shorts */}
            <View style={styles.shortsContainer}>
              <View style={styles.shortsHeader}>
                <Image
                  source={require('../../../assets/icons/shortsIcon.png')}
                  style={styles.shortsIcon}
                />
                <Text style={styles.shortsText}>Shorts</Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.shortsScroll}>
                {shortVideos.map((item, index) => (
                  <ShortVideoCard {...item} key={`${index}-SHORTS-${item.id}`} />
                ))}
              </ScrollView>
            </View>

            {/* Lista de Vídeos */}
            <FlatList
              data={videos1}
              renderItem={({ item }) => <VideoCard video={item} />}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}
