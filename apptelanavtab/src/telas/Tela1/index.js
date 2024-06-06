import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";




export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Main screen</Text>
      <Button 
        title="Ir para tela 2"
        onPress={() => navigation.navigate('Tela2')}
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
