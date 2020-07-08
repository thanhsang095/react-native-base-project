import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Detail from '~/Home/Detail';
import MainHome from '~/Home/MainHome';

const Tab = createBottomTabNavigator();

export const AppContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={MainHome}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Detail}
        options={{
          tabBarLabel: 'Updates',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  )
}