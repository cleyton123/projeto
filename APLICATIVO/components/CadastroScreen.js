// CadastroScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const CadastroScreen = ({ navigation }) => {
  const handleCadastro = () => {
    // Lógica de cadastro aqui
    console.log('Cadastro realizado com sucesso!');
    // Navegue de volta para a tela de login
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Tela de Cadastro</Text>
      {/* Campos de cadastro aqui */}
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroScreen;
