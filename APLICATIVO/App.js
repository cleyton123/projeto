import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import ImageView from './componentes/imageView'; 

const PlaceholderImage = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageView placeholderImageSource={PlaceholderImage} /> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
