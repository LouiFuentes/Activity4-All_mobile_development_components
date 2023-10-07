import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';
import Screen4 from './screen/Screen4';
import Screen5 from './screen/Screen5';
import Screen6 from './screen/Screen6';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Screen1}  options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      ),}}/>
      <Tab.Screen name="Profile" component={Screen5} options={{ headerShown: false,tabBarIcon: ({ color, size }) => (
        <Ionicons name="person" color={color} size={size} />
      ), }}/>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main Menu" component={MyTabs} />
      <Stack.Screen name="Page1" component={Screen2} />
      <Stack.Screen name="Page2" component={Screen3} />
      <Stack.Screen name="Page3" component={Screen4} />
      <Stack.Screen name="Page4" component={Screen5} />
      <Stack.Screen name="Page5" component={Screen6} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


