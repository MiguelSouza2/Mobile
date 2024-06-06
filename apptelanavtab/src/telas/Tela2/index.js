import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";




export default function Tela2 ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Main screen</Text>
      <Button 
        title="Ir para tela 3"
        onPress={() => navigation.navigate('Tela3')}
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
