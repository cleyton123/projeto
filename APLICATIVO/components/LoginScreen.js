// LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tela de Login</Text>
      <Button title="Ir para Cadastro" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
};

export default LoginScreen;
