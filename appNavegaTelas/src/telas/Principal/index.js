import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";




export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao AppNavegaTela -- Cooking Edition!!</Text>
      <Button 
        title="Destaques"
        onPress={() => navigation.navigate('Highlights')}
      ></Button>
      <Button 
        title="Receitas"
        onPress={() => navigation.navigate('Recipes')}
      ></Button>
      <Button 
        title="Sobre"
        onPress={() => navigation.navigate('About')}
      ></Button>

    </View>
  )
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
