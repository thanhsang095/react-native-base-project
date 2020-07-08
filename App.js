import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppContainer } from './navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  )
}

export default App;