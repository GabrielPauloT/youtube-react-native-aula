import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import RootStack from './src/navigation';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <RootStack />
    </>
  );
}
