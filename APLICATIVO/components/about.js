import React,{useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { AuthContext } from './contexts/auth';
import './contexts/multidiomas/i18n';
import {useTranslation} from 'react-i18next';

const About = () => {
  const {nome,user} = useContext(AuthContext);
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
      <Text style={styles.title}>{t('Tela de about')}</Text>
      <Text>{t('BEM-VINDO')} : {user.email}</Text>
      <Text>{t('Nome')}: {nome}</Text>
      <Text>{t('O objetivo dessa aplicação é ajudar turistas a conhecerem Recife e seus pontos turisticos')}.</Text>
      <Text>{t('Nomes da equipe')} : Cleyton,Italo {t('e')} Elion.</Text>
      <Text>{t('Link do repositório')}: https://github.com/cleyton123/{t('projeto')}.git</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default About;