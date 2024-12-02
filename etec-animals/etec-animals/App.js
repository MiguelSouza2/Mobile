import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Login from "./src/login";
import Cadastro from "./src/cadastro";
import Home from "./src/home";
import Cadastro_Animal from "./src/cadastro_animal";
import Agendar_Consulta from "./src/agendar_consulta";

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Tela1") {
            iconName = focused ? "home-outline" : "bed-outline";
          } else if (route.name === "Tela2") {
            iconName = focused ? "person-outline" : "body-outline";
          } else if (route.name === "Tela3") {
            iconName = focused ? "people-outline" : "happy-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#3f64c7",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Cadastro" component={Cadastro}></Tab.Screen>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen
        name="Cadastro_Animal"
        component={Cadastro_Animal}
      ></Tab.Screen>
      <Tab.Screen
        name="Agendar_Consulta"
        component={Agendar_Consulta}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Cadastro_Animal"
          component={Cadastro_Animal}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Agendar_Consulta"
          component={Agendar_Consulta}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
