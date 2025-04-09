import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/telas/Home';
import Carros from './src/telas/Carros';
import Mercado from './src/telas/Mercado';
import Login from './src/telas/Login';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        color= '#d0d'
        size = 30
        if (route.name === 'Home') {
          iconName = focused
            ? 'home-outline'
            : 'home-outline';
        } else if (route.name === 'Carros') {
          iconName = focused ? 'car-outline' : 'car-outline';
        }else if (route.name === 'Mercado') {
          iconName = focused ? 'bar-chart-outline' : 'bar-chart-outline';
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      labelStyle: {
        fontSize: 12},
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Carros" component={Carros}></Tab.Screen>
      <Tab.Screen name= "Home" component={Home}></Tab.Screen>
      <Tab.Screen name= "Mercado" component={Mercado}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    
 <NavigationContainer>
 <Stack.Navigator initialRouteName='Login'>

   <Stack.Screen 
       name="Carros" 
       component={Tabs}
       options={{
         title:'CARbon',
         headerStyle:{
         backgroundColor: '#D80303',
         },
         headerTintColor: '#000' , 
         headerShown: true         
       }}
       >

   </Stack.Screen>
   <Stack.Screen name="Login" component={Login} options={{headerShown: false}}></Stack.Screen>
   <Stack.Screen name="Home" component={Home} ></Stack.Screen>      
   <Stack.Screen name="Mercado" component={Mercado} ></Stack.Screen>
 </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
