import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { TrendCategoryType } from './types';

import { TrendingEnum } from '~/services/types';

export function TrendCategory({ activeCategory, setActiveCategory }: TrendCategoryType) {
  return (
    <View style={styles.categoryContainer}>
      <ScrollView
        style={styles.categoryScroll}
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}>
        {Object.values(TrendingEnum).map((category, index) => {
          const isActive = category === activeCategory;
          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(category)}
              key={`${index}-CATEGORY-${category}`}
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
  );
}
