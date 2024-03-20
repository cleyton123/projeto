import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
const logo= './assets/marcozero.jpg';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Login com email:', { email, senha });
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.image}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.texto}>Ainda não tem conta?</Text>
        <TouchableOpacity style={styles.cadastro} onPress={handleLogin}>
          <Text style={{ color: 'blue' }}>Cadastre-se</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color:'black',
  },
  input: {
    height: 30,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop: 5,
  },
  texto: {
    color: 'black',
    marginTop: 20,
  },
  cadastro: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderWidth: 3,
    borderColor: 'yellow',
    marginLeft: 300,
    marginTop: -20,
  },
});

export default LoginScreen;
