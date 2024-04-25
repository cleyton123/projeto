import React, { useState , useContext,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,useWindowDimensions } from 'react-native';
import { AuthContext } from './contexts/auth';
import './contexts/multidiomas/i18n';
import {useTranslation} from 'react-i18next';



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {signIn} = useContext(AuthContext);

  const handleLogin = () => {
    console.log('Login com email:', { email, senha });
    signIn(email, senha)
   
  };
  const {t,i18n} = useTranslation();
  const Language = value => {
    i18n.changeLanguage(value)
      .then(() => {
        console.log("linguagem alterada")
      })
      .catch((err) => {
        console.log(err);
      })
  }
  

  return (
   
     
     <View style={styles.container}>
      
    
      <View>
       
       <TouchableOpacity style={styles.ingles} onPress={ () => Language('en') }>
           <Text>inglês</Text>
       </TouchableOpacity>
   
       <TouchableOpacity style={styles.portugues} onPress = { () => Language('pt') } >
          <Text>Português Brasil</Text>
        </TouchableOpacity>
      </View>

        <Text style={styles.title}>{t('Conecte-se')}</Text>
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: 'white' }}>{t('Entrar')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'black' }}>{t('Cadastre-se')}</Text>
        </TouchableOpacity>
     </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'black',
  },
  input: {
    height: 30,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    width:300,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop: 5,
  },

  ingles:{
    borderColor:'black', 
    borderWidth: 1 ,
    marginTop:-80,
    marginLeft:220,
    marginRight:120,
    
   
  },
  portugues:{
    borderColor:'black',
     borderWidth: 1, 
     marginRight:175,
     marginLeft:100,
     marginTop:-22,
  }
  
});

export default LoginScreen;
