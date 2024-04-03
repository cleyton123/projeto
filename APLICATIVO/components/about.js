import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const AboutPage = ({ navigation }) => {
  const equipe = 'Cleyton, Italo e Elion';
  const repositoryLink = 'https://github.com/cleyton123/my-react-app.git';

  const handleOpenLink = () => {
    Linking.openURL(repositoryLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boasvinda}><Text style={styles.bold}>BEM-VINDO</Text></Text>
      <Text>O objetivo dessa aplicação é ajudar turistas a conhecerem Recife e seus pontos turísticos.</Text>
      <Text><Text style={styles.bold}>Nomes da equipe: </Text>{equipe}</Text>
      <Text onPress={handleOpenLink} style={styles.link}><Text style={styles.bold}>Link do repositório: </Text>{repositoryLink}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.link}>Home</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  boasvinda: {
    fontSize: 24,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});

export default AboutPage;
