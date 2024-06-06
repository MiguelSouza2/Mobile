import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();


import Highlights from './src/telas/Highlights';
import Recipes from './src/telas/Recipes';
import About from './src/telas/About';

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Highlights') {
            iconName = focused
              ? 'logo-python'
              : 'bed-outline';
          } else if (route.name === 'Recipes') {
            iconName = focused ? 'person-outline' : 'body-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'people-outline' : 'happy-outline';
          }

          //aqui define os ícones que irão aparecer nas Tabs
          return <Ionicons name={iconName} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3f64c7',
        inactiveTintColor: '#a22446',

      }}
    >
      <Tab.Screen name="Destaques" component={Highlights}></Tab.Screen>
      <Tab.Screen name="Receitas" component={Recipes}></Tab.Screen>
      <Tab.Screen name="Sobre" component={About}></Tab.Screen>
    </Tab.Navigator>
  );
}


export default function App() {
  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Principal'>
        {/* Para cada tela devo criar um stack.screen */}
        <Stack.Screen
          name=" "
          component={Tabs}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
              headerTintColor: '#FFF',
              headerShown: true,
            },
          }}
        >

        </Stack.Screen>
        <Stack.Screen name="Recipes" component={Recipes}>

        </Stack.Screen>
        <Stack.Screen name="About" component={About}>

        </Stack.Screen>
        <Stack.Screen
          name="Highlights"
          component={Highlights}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

