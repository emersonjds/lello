import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EnvioDocumentos from './src/screens/EnvioDocumentos';
import MapViewer from './src/screens/MapViewer';
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

const Stack = createNativeStackNavigator();

const Stacks = (
  <Stack.Navigator
    initialRouteName={"Home"}
  >
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
    <Stack.Screen name="EnvioDocumentos" component={EnvioDocumentos} options={{ headerShown: false }} />
    <Stack.Screen name="MapViewer" component={MapViewer} options={{ headerShown: false }} />
  </Stack.Navigator >
)

export default function App() {
  return <NavigationContainer>{Stacks}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
