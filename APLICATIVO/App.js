// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Button from './components/Button'; // Certifique-se de importar o componente Button corretamente
import CadastroScreen from './components/CadastroScreen'; // Importe o componente CadastroScreen

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cor1}>
        <View style={styles.viewLogo}>
          <Image source={require('./assets/travel.png')} />
        </View>
      </View>
      <CadastroScreen /> {/* Renderize o componente CadastroScreen aqui */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -80,
  },
  cor1: {
    flex: 1,
    backgroundColor: '#fff5ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLogo: {
    width: 500,
    height: 500,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 250,
    marginBottom: 50,
  },
});
