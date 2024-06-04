import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Icon from 'react-native-feather';

import { styles } from './styles';
import { VideoCardType } from './types';
import { formatViews } from '../../utils/numbers';

export function VideoCard({
  channelThumbnail,
  channelTitle,
  lengthText,
  publishedText,
  thumbnail,
  title,
  viewCount,
}: VideoCardType) {
  return (
    <View>
      <Image src={thumbnail} style={styles.imageThumbnail} />

      <View
        style={[styles.marginTopNegative, styles.marginBottom, styles.marginRight, styles.flexEnd]}>
        <View style={styles.roundedBlackBackground}>
          <Text style={styles.textLength}>{lengthText}</Text>
        </View>
      </View>

      <View style={[styles.container, styles.flexRow, styles.spaceBetween, styles.paddingBottom]}>
        <Image src={channelThumbnail} style={styles.channelThumbnail} />

        <View style={styles.flexSpace}>
          <Text style={styles.textTitle}>{title}</Text>

          <Text style={styles.textDetails}>
            {channelTitle.length > 20 ? channelTitle.slice(0, 20) + '...' : channelTitle} •{' '}
            {formatViews(viewCount)} views • {publishedText}
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon.MoreVertical stroke="white" strokeWidth={2} height={15} />
        </View>
      </View>
    </View>
  );
}
