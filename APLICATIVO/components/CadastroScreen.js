import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const img= './assets/recife.jpg'

const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    console.log('Cadastro com nome, email e senha:', { nome, email, senha });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    
      <ImageBackground source={img} style={styles.image}>
        <Text style={styles.title}>Cadastro</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
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
                  <TouchableOpacity style={styles.cadastro} onPress={handleCadastro}>
                    <Text style={{color:'white'}}>Cadastrar</Text>
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
    backgroundColor: 'blue',
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius:20,
  },
});

export default CadastroScreen;
