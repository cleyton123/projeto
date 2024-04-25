import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import CadastroScreen from './components/CadastroScreen';
import AboutScreen from './components/about';
import AuthProvider from './components/contexts/auth';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <AuthProvider>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" component={CadastroScreen} />
         <Stack.Screen name="About" component={AboutScreen} />
       </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;