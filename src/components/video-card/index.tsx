import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Icon from 'react-native-feather';

import { styles } from './styles';
import { formatViews } from '../../utils/numbers';

export function VideoCard({ video }) {
  return (
    <View>
      <Image
        src={video && video.thumbnail[0].url}
        // source={video && video.thumbnail}
        style={styles.imageThumbnail}
      />

      <View
        style={[styles.marginTopNegative, styles.marginBottom, styles.marginRight, styles.flexEnd]}>
        <View style={styles.roundedBlackBackground}>
          <Text style={styles.textLength}>{video && video.lengthText}</Text>
        </View>
      </View>

      <View style={[styles.container, styles.flexRow, styles.spaceBetween, styles.paddingBottom]}>
        <Image src={video && video.channelThumbnail[0].url} style={styles.channelThumbnail} />

        <View style={styles.flexSpace}>
          <Text style={styles.textTitle}>{video && video.title}</Text>

          <Text style={styles.textDetails}>
            {video && video.channelTitle.length > 20
              ? video.channelTitle.slice(0, 20) + '...'
              : video?.channelTitle}{' '}
            • {formatViews(video?.viewCount)} views • {video?.publishedText}
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon.MoreVertical stroke="white" strokeWidth={2} height={15} />
        </View>
      </View>
    </View>
  );
}
