import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import VectorIcons from "~/components/VectorIcons";
import Create from "~/features/Create";
import Explore from "~/features/Explore";
import Home from "~/features/Home";
import Login from "~/features/Login";
import Message from "~/features/Message";
import Notification from "~/features/Notification";
import Signup from "~/features/Signup";
import { defaultNavigationOptions } from "./navigationHelpers";
import screens from "./screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let type = 'FontAwesome'
          if (route.name == 'Home') {
            iconName = 'search'
          } else if (route.name == 'Explore') {
            iconName = 'calendar'
          } else if (route.name == 'Create') {
            iconName = 'plus-square-o'
          } else if (route.name == 'Notification') {
            iconName = 'bell-o'
          } else if (route.name == 'Message') {
            iconName = 'comment-o'
          }
          return <VectorIcons type={type} name={iconName} size={size} color={color} />
        }
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
}

const app = (props) => {
  const { isSignedIn } = props
  return (
    <NavigationContainer>
      {isSignedIn ? (<Stack.Navigator>
        <Stack.Screen name={screens.login.name} component={Login} options={defaultNavigationOptions} />
        <Stack.Screen name={screens.signup.name} component={Signup} options={defaultNavigationOptions} />
      </Stack.Navigator>) : MainTabNavigation()
      }
    </NavigationContainer>
  )
}

export default app