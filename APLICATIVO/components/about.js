import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de about</Text>
      <Text>O objetivo dessa aplicação é ajudar turistas a conhecerem Recife e seus pontos turisticos.</Text>
      <Text>Nomes da equipe : Cleyton,Italo e Elion.</Text>
      <Text>Link do repositório: https://github.com/cleyton123/projeto.git</Text>
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
});

export default About;