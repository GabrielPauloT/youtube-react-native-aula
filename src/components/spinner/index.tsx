import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';
import { SpinnerType } from './types';

export function Spinner({ color = '#000000' }: SpinnerType) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} />
    </View>
  );
}
