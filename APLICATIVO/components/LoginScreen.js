import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Login com email:', { email, senha });
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, { backgroundColor: 'white' }]} />
      <View style={[styles.halfContainer, { backgroundColor: '##f5f5f5' }]}>
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
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <text style={styles.texto}>Ainda não tem conta?</text>
        <TouchableOpacity style={styles.cadastro } onPress={handleLogin}>
          <text style={{color:'blue'}}>Cadastre-se</text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 30,
    width: '40%',
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop:5
  },
  texto:{
    color:'black',
    marginTop:20
  },
  cadastro:{
    backgroundColor:'white',
    paddingHorizontal:10,
    paddingVertical:1,
    borderWidth:3,
    borderColor:'yellow',
    marginLeft:300,
    marginTop:-20

  }
});

export default LoginScreen;
