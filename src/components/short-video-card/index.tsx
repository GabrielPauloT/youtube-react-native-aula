import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather';

import { styles } from './styles';
import { ShortVideoCardType } from './types';

export function ShortVideoCard({ data }: ShortVideoCardType) {
  return (
    <ScrollView horizontal nestedScrollEnabled showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => (
        <View style={styles.container} key={`${index}-SHORTS-${item.id}`}>
          <Image source={item?.image} style={styles.image} />

          <View style={styles.iconContainer}>
            <Icon.MoreVertical stroke="white" strokeWidth={1.4} height={20} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{item?.title}</Text>

            <Text style={styles.viewCount}>{item?.viewCount} views</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
